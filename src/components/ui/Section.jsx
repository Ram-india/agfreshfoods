import Reveal from './Reveal'

/** Consistent vertical rhythm + optional alternating background. */
export default function Section({
  children,
  id,
  alt = false,
  className = '',
  size = 'md',
  ...rest
}) {
  const pad = { sm: 'py-14 lg:py-20', md: 'py-20 lg:py-28', lg: 'py-24 lg:py-36' }[size]
  return (
    <section
      id={id}
      className={`relative ${pad} ${alt ? 'surface-alt' : ''} ${className}`}
      {...rest}
    >
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment =
    align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} max-w-3xl ${className}`}>
      {eyebrow && (
        <span className={light ? 'eyebrow border-white/25 bg-white/10 !text-turmeric-300' : 'eyebrow'}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-soft'}`}>
          {body}
        </p>
      )}
    </Reveal>
  )
}
