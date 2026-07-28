import { CircleAlert } from 'lucide-react'

const controlCls = (error) =>
  `w-full rounded-xl border bg-transparent px-4 py-3 text-[15px] outline-none transition-all duration-300 placeholder:text-soft/60 ${
    error
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
      : 'hairline focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/20'
  }`

function Wrap({ label, name, error, required, hint, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-heading text-[13px] font-semibold">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-soft text-[11.5px]">{hint}</p>}
      {error && (
        <p role="alert" className="flex items-center gap-1.5 text-[11.5px] font-medium text-red-500">
          <CircleAlert className="size-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

export function Input({ label, name, error, required, hint, register, ...rest }) {
  return (
    <Wrap label={label} name={name} error={error} required={required} hint={hint}>
      <input
        id={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={controlCls(error)}
        {...register(name)}
        {...rest}
      />
    </Wrap>
  )
}

export function Textarea({ label, name, error, required, hint, register, rows = 4, ...rest }) {
  return (
    <Wrap label={label} name={name} error={error} required={required} hint={hint}>
      <textarea
        id={name}
        rows={rows}
        aria-invalid={!!error}
        className={`${controlCls(error)} resize-y`}
        {...register(name)}
        {...rest}
      />
    </Wrap>
  )
}

export function Select({ label, name, error, required, hint, register, options, ...rest }) {
  return (
    <Wrap label={label} name={name} error={error} required={required} hint={hint}>
      <select id={name} aria-invalid={!!error} className={controlCls(error)} {...register(name)} {...rest}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[var(--surface)]">
            {opt.label}
          </option>
        ))}
      </select>
    </Wrap>
  )
}
