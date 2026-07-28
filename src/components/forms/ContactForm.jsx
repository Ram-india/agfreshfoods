import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { Input, Select, Textarea } from './Field'
import { submitEnquiry } from './submitEnquiry'

const schema = z.object({
  name: z.string().trim().min(2, { message: 'Please tell us your name' }).max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit mobile number' }),
  email: z.union([z.literal(''), z.email({ message: 'Enter a valid email address' })]).optional(),
  city: z.string().trim().min(2, { message: 'Which city are you in?' }).max(60),
  topic: z.string().min(1),
  message: z
    .string()
    .trim()
    .min(10, { message: 'A little more detail helps us reply properly' })
    .max(1000),
})

const topics = [
  { value: 'Order enquiry', label: 'Order enquiry' },
  { value: 'Where to buy', label: 'Where to buy near me' },
  { value: 'Bulk / catering', label: 'Bulk or catering order' },
  { value: 'Dealer enquiry', label: 'Dealer / distributor enquiry' },
  { value: 'Product feedback', label: 'Product feedback' },
  { value: 'Something else', label: 'Something else' },
]

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [failed, setFailed] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', phone: '', email: '', city: '', topic: 'Order enquiry', message: '' },
  })

  const onSubmit = async (values) => {
    setFailed('')
    try {
      await submitEnquiry({
        subject: `Website enquiry — ${values.topic}`,
        fields: {
          Name: values.name,
          Phone: values.phone,
          Email: values.email,
          City: values.city,
          Topic: values.topic,
          Message: values.message,
        },
      })
      setSent(true)
      reset()
    } catch (err) {
      setFailed(err.message || 'Something went wrong. Please call or WhatsApp us instead.')
    }
  }

  if (sent) {
    return (
      <div className="surface-card flex flex-col items-center rounded-3xl border border-leaf-500/40 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-leaf-500/15 text-leaf-600 dark:text-leaf-400">
          <CircleCheck className="size-7" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-bold">Enquiry on its way</h3>
        <p className="text-soft mt-2.5 max-w-sm text-sm leading-relaxed">
          We reply to every message within one working day, usually much sooner. For anything urgent,
          call us directly and you will reach a person, not a queue.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-bold text-forest-600 underline-offset-4 hover:underline dark:text-leaf-300"
        >
          Send another enquiry
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
      <h3 className="font-heading text-xl font-bold">Send us a message</h3>
      <p className="text-soft mt-1.5 text-sm">Fields marked * are required.</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Input label="Your name" name="name" required register={register} error={errors.name?.message} placeholder="Lakshmi R." autoComplete="name" />
        <Input label="Mobile number" name="phone" required register={register} error={errors.phone?.message} placeholder="9876543210" inputMode="numeric" autoComplete="tel" />
        <Input label="Email" name="email" register={register} error={errors.email?.message} placeholder="you@example.com" type="email" autoComplete="email" hint="Optional" />
        <Input label="City" name="city" required register={register} error={errors.city?.message} placeholder="Coimbatore" autoComplete="address-level2" />
        <div className="sm:col-span-2">
          <Select label="What is this about?" name="topic" required register={register} error={errors.topic?.message} options={topics} />
        </div>
        <div className="sm:col-span-2">
          <Textarea
            label="Message"
            name="message"
            required
            register={register}
            error={errors.message?.message}
            placeholder="Tell us what you need — quantity, delivery area, or the question on your mind."
            rows={5}
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
        {isSubmitting ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}
