import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { Input, Select, Textarea } from './Field'
import { submitEnquiry } from './submitEnquiry'

const schema = z.object({
  name: z.string().trim().min(2, { message: 'Please tell us your name' }).max(80),
  business: z.string().trim().min(2, { message: 'Business or shop name' }).max(120),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit mobile number' }),
  email: z.union([z.literal(''), z.email({ message: 'Enter a valid email address' })]).optional(),
  city: z.string().trim().min(2, { message: 'Which city or town?' }).max(60),
  type: z.string().min(1),
  experience: z.string().min(1),
  storage: z.string().min(1),
  volume: z.string().min(1),
  notes: z.string().trim().max(1000).optional(),
})

const types = [
  { value: 'Retail store', label: 'Retail store / kirana' },
  { value: 'Supermarket', label: 'Supermarket' },
  { value: 'Area distributor', label: 'Area distributor' },
  { value: 'Hotel / restaurant', label: 'Hotel or restaurant' },
  { value: 'Online seller', label: 'Online / quick-commerce seller' },
]

const experiences = [
  { value: 'New to this', label: 'New to food distribution' },
  { value: '1-3 years', label: '1–3 years' },
  { value: '3-7 years', label: '3–7 years' },
  { value: '7+ years', label: '7+ years' },
]

const storageOptions = [
  { value: 'Yes, refrigerated', label: 'Yes — I have refrigerated storage' },
  { value: 'Deep freezer only', label: 'Deep freezer only' },
  { value: 'No, need support', label: 'No — I would need support' },
]

const volumes = [
  { value: '50-100 packs/day', label: '50–100 packs per day' },
  { value: '100-300 packs/day', label: '100–300 packs per day' },
  { value: '300-600 packs/day', label: '300–600 packs per day' },
  { value: '600+ packs/day', label: '600+ packs per day' },
  { value: 'Not sure yet', label: 'Not sure yet' },
]

export default function DealerForm() {
  const [sent, setSent] = useState(false)
  const [failed, setFailed] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      business: '',
      phone: '',
      email: '',
      city: '',
      type: 'Retail store',
      experience: 'New to this',
      storage: 'Yes, refrigerated',
      volume: '50-100 packs/day',
      notes: '',
    },
  })

  const onSubmit = async (values) => {
    setFailed('')
    try {
      await submitEnquiry({
        subject: 'Dealer / Distributor application',
        fields: {
          Name: values.name,
          Business: values.business,
          Phone: values.phone,
          Email: values.email,
          'City / Town': values.city,
          'Business type': values.type,
          Experience: values.experience,
          'Cold storage': values.storage,
          'Expected volume': values.volume,
          Notes: values.notes,
        },
      })
      setSent(true)
      reset()
    } catch (err) {
      setFailed(err.message || 'Something went wrong. Please call us instead.')
    }
  }

  if (sent) {
    return (
      <div className="surface-card flex flex-col items-center rounded-3xl border border-leaf-500/40 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-leaf-500/15 text-leaf-600 dark:text-leaf-400">
          <CircleCheck className="size-7" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-bold">Application received</h3>
        <p className="text-soft mt-2.5 max-w-md text-sm leading-relaxed">
          Our territory manager will call you within 24 working hours to discuss routes, margins and
          the trial order. Keep your shop address and GST details handy for that conversation.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-bold text-forest-600 underline-offset-4 hover:underline dark:text-leaf-300"
        >
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="surface-card rounded-3xl border hairline p-6 shadow-soft sm:p-8"
    >
      <h3 className="font-heading text-xl font-bold">Dealer &amp; distributor application</h3>
      <p className="text-soft mt-1.5 text-sm">
        Takes about a minute. We call every applicant back, including the ones we cannot onboard yet.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Input label="Your name" name="name" required register={register} error={errors.name?.message} placeholder="Mohan Raj" autoComplete="name" />
        <Input label="Business / shop name" name="business" required register={register} error={errors.business?.message} placeholder="Sri Balaji Stores" autoComplete="organization" />
        <Input label="Mobile number" name="phone" required register={register} error={errors.phone?.message} placeholder="9876543210" inputMode="numeric" autoComplete="tel" />
        <Input label="Email" name="email" register={register} error={errors.email?.message} placeholder="you@example.com" type="email" autoComplete="email" hint="Optional" />
        <Input label="City / town" name="city" required register={register} error={errors.city?.message} placeholder="Erode" autoComplete="address-level2" />
        <Select label="Business type" name="type" required register={register} error={errors.type?.message} options={types} />
        <Select label="Distribution experience" name="experience" required register={register} error={errors.experience?.message} options={experiences} />
        <Select label="Cold storage available?" name="storage" required register={register} error={errors.storage?.message} options={storageOptions} />
        <div className="sm:col-span-2">
          <Select label="Expected monthly volume" name="volume" required register={register} error={errors.volume?.message} options={volumes} />
        </div>
        <div className="sm:col-span-2">
          <Textarea
            label="Anything else we should know?"
            name="notes"
            register={register}
            error={errors.notes?.message}
            placeholder="Existing brands you distribute, number of outlets, delivery vehicles, preferred start date."
            rows={4}
          />
        </div>
      </div>

      {failed && (
        <p role="alert" className="mt-5 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
          {failed}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-forest-600 hover:shadow-[0_16px_40px_-12px_rgb(46_125_50_/_0.8)] disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? <LoaderCircle className="size-4 animate-spin" /> : <Send className="size-4" />}
        {isSubmitting ? 'Submitting…' : 'Apply Now'}
      </button>
    </form>
  )
}
