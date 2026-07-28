/**
 * Typographic wrapper for long-form content pages. Styles descendants directly
 * so page bodies stay plain markup.
 */
export default function Prose({ children, className = '' }) {
  return (
    <div
      className={`max-w-none
        [&_a]:font-medium [&_a]:text-forest-600 [&_a]:underline [&_a]:decoration-leaf-500/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-leaf-500 dark:[&_a]:text-leaf-300
        [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold sm:[&_h2]:text-3xl
        [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-bold sm:[&_h3]:text-xl
        [&_h2+p]:mt-4 [&_h3+p]:mt-3
        [&_p]:mt-5 [&_p]:text-[15.5px] [&_p]:leading-[1.75] [&_p]:text-[var(--text-soft)]
        [&_ul]:mt-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2.5
        [&_ol]:mt-5 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2.5 [&_ol]:list-decimal [&_ol]:pl-5
        [&_li]:text-[15.5px] [&_li]:leading-relaxed [&_li]:text-[var(--text-soft)]
        [&_ul>li]:relative [&_ul>li]:pl-6
        [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.6em] [&_ul>li]:before:size-2 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-leaf-500
        [&_ol>li]:pl-1 [&_ol>li]:marker:font-heading [&_ol>li]:marker:font-bold [&_ol>li]:marker:text-forest-500
        [&_strong]:font-semibold [&_strong]:text-[var(--text-strong)]
        [&_blockquote]:mt-7 [&_blockquote]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-leaf-500 [&_blockquote]:bg-forest-500/[0.06] [&_blockquote]:px-6 [&_blockquote]:py-5
        [&_blockquote_p]:mt-0 [&_blockquote_p]:font-heading [&_blockquote_p]:text-base [&_blockquote_p]:font-medium [&_blockquote_p]:text-[var(--text-strong)]
        [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm
        [&_th]:border-b [&_th]:px-3 [&_th]:py-3 [&_th]:text-left [&_th]:font-heading [&_th]:font-bold
        [&_td]:border-b [&_td]:px-3 [&_td]:py-3 [&_td]:text-[var(--text-soft)]
        [&>:first-child]:mt-0
        ${className}`}
    >
      {children}
    </div>
  )
}
