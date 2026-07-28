/**
 * Animated spot illustrations for the "why choose us" cards.
 *
 * Each scene is drawn with Tailwind colour utilities so it inherits dark mode,
 * and its moving parts carry `ra-*` classes. The motion itself lives in
 * index.css, driven by `.reason-card:hover` / `:focus-within` — so a single CSS
 * rule set animates every card and honours prefers-reduced-motion for free.
 */

const Sunrise = () => (
  <g>
    {/* rays */}
    <g className="ra-rays origin-[60px_74px]">
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x="58.5"
          y="18"
          width="3"
          height="12"
          rx="1.5"
          className="fill-turmeric-500"
          transform={`rotate(${i * 45} 60 74)`}
        />
      ))}
    </g>
    {/* sun */}
    <circle cx="60" cy="74" r="19" className="ra-sun fill-turmeric-400" />
    <circle cx="60" cy="74" r="19" className="ra-sun fill-turmeric-500/60" />
    {/* horizon */}
    <path d="M14 86h92" className="stroke-forest-600 dark:stroke-leaf-400" strokeWidth="4" strokeLinecap="round" />
    {/* grinder silhouette on the horizon */}
    <path d="M40 86V72a10 10 0 0 1 10-10h20a10 10 0 0 1 10 10v14Z" className="fill-forest-600 dark:fill-forest-500" />
    <ellipse cx="60" cy="62" rx="20" ry="5" className="fill-leaf-500" />
    <circle cx="53" cy="61" r="5" className="fill-white/80" />
    <circle cx="67" cy="61" r="5" className="fill-white/55" />
    {/* ground */}
    <path d="M18 96h84" className="stroke-forest-500/30" strokeWidth="4" strokeLinecap="round" />
  </g>
)

const Recipe = () => (
  <g>
    {/* palm-leaf manuscript */}
    <g className="ra-scroll origin-[60px_60px]">
      <rect x="22" y="30" width="76" height="62" rx="8" className="fill-white dark:fill-forest-900" />
      <rect x="22" y="30" width="76" height="62" rx="8" className="fill-none stroke-forest-500/40" strokeWidth="3" />
      <rect x="22" y="30" width="76" height="13" rx="6" className="fill-forest-500" />
      {[52, 62, 72, 82].map((y, i) => (
        <rect
          key={y}
          x="32"
          y={y}
          width={i === 3 ? 26 : 56 - i * 6}
          height="5"
          rx="2.5"
          className={i === 3 ? 'fill-turmeric-500' : 'fill-forest-500/30'}
        />
      ))}
    </g>
    {/* stone grinding wheel */}
    <g className="ra-wheel origin-[88px_84px]">
      <circle cx="88" cy="84" r="18" className="fill-leaf-500" />
      <circle cx="88" cy="84" r="18" className="fill-none stroke-forest-700/30" strokeWidth="3" />
      <circle cx="88" cy="84" r="5" className="fill-forest-800/40" />
      {[0, 60, 120].map((r) => (
        <rect key={r} x="86.5" y="70" width="3" height="10" rx="1.5" className="fill-white/60" transform={`rotate(${r} 88 84)`} />
      ))}
    </g>
  </g>
)

const Grains = () => (
  <g>
    {/* three heaps */}
    {[
      [34, 82, 'fill-forest-600 dark:fill-forest-500'],
      [60, 88, 'fill-turmeric-500'],
      [86, 82, 'fill-leaf-500'],
    ].map(([cx, cy, cls], i) => (
      <g key={i}>
        <path d={`M${cx - 20} ${cy}c2-14 9-21 20-21s18 7 20 21Z`} className={cls} />
        <ellipse cx={cx} cy={cy} rx="20" ry="5" className={cls} />
      </g>
    ))}
    {/* loose grains */}
    {[
      [22, 96, 20],
      [48, 99, -30],
      [74, 99, 40],
      [98, 96, -15],
    ].map(([x, y, r], i) => (
      <ellipse key={i} cx={x} cy={y} rx="6" ry="3.2" className="fill-forest-500/40" transform={`rotate(${r} ${x} ${y})`} />
    ))}
    {/* magnifier sweeping across */}
    <g className="ra-lens">
      <circle cx="52" cy="44" r="20" className="fill-white/85 dark:fill-white/15" />
      <circle cx="52" cy="44" r="20" className="fill-none stroke-forest-600 dark:stroke-leaf-400" strokeWidth="5" />
      {/* magnified grains */}
      <ellipse cx="46" cy="40" rx="8" ry="4.4" className="fill-turmeric-500" transform="rotate(-20 46 40)" />
      <ellipse cx="58" cy="50" rx="7" ry="3.8" className="fill-forest-500" transform="rotate(25 58 50)" />
      <path d="M67 59l12 12" className="stroke-forest-600 dark:stroke-leaf-400" strokeWidth="7" strokeLinecap="round" />
    </g>
  </g>
)

const Shield = () => (
  <g>
    {/* shield body */}
    <path
      d="M56 12l30 11v25c0 21-12 36-30 44-18-8-30-23-30-44V23Z"
      className="fill-forest-500/12 stroke-forest-600 dark:stroke-leaf-400"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    {/* gloss */}
    <path d="M56 16 32 25v22c0 10 3 18 8 25 5-14 10-38 16-56Z" className="fill-white/45 dark:fill-white/10" />
    {/* the five ingredients, sitting under the tick */}
    <g className="ra-dots">
      {[
        [38, 68, 'fill-turmeric-500'],
        [47, 72, 'fill-leaf-500'],
        [56, 74, 'fill-forest-500'],
        [65, 72, 'fill-leaf-500'],
        [74, 68, 'fill-turmeric-500'],
      ].map(([cx, cy, cls], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="4.2" ry="2.6" className={cls} transform={`rotate(${i * 24 - 48} ${cx} ${cy})`} />
      ))}
    </g>
    {/* tick draws itself in */}
    <path
      d="M42 50l11 12 22-24"
      className="ra-check fill-none stroke-leaf-500"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength="1"
    />
    {/* struck-through additive droplet */}
    <g className="ra-nope">
      <circle cx="97" cy="72" r="17" className="fill-red-500/10" />
      <path d="M97 62c0-7 5-11 5-11s5 4 5 11a5 5 0 0 1-10 0Z" className="fill-red-400/80" />
      <rect x="91" y="72" width="12" height="12" rx="2.5" className="fill-red-400/50" />
      <path d="M86 84l22-22" className="stroke-red-500" strokeWidth="4.5" strokeLinecap="round" />
    </g>
    {/* sparkles */}
    <g className="ra-spark">
      {[
        [22, 34, 3.4],
        [92, 26, 2.6],
        [28, 88, 2.4],
      ].map(([cx, cy, r], i) => (
        <path
          key={i}
          d={`M${cx} ${cy - r * 2}l${r} ${r * 1.6} ${r * 2} ${r * 0.4}-${r * 2} ${r * 0.4}-${r} ${r * 1.6}-${r}-${r * 1.6}-${r * 2}-${r * 0.4} ${r * 2}-${r * 0.4}Z`}
          className="fill-turmeric-400"
        />
      ))}
    </g>
  </g>
)

const SoftIdly = () => (
  <g>
    {/* steam */}
    <g className="ra-steam">
      {[44, 60, 76].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${44 - i * 3}c8-11-8-18 0-29`}
          className="fill-none stroke-leaf-400/70"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </g>
    {/* plate */}
    <ellipse cx="60" cy="92" rx="44" ry="10" className="fill-forest-500/15" />
    <ellipse cx="60" cy="88" rx="42" ry="11" className="fill-white dark:fill-forest-800" />
    {/* idlies, gently bouncing */}
    <g className="ra-bounce">
      <ellipse cx="42" cy="76" rx="18" ry="14" className="fill-white dark:fill-[#efe9d8]" />
      <ellipse cx="42" cy="76" rx="18" ry="14" className="fill-none stroke-forest-500/25" strokeWidth="2.5" />
      <ellipse cx="36" cy="71" rx="6" ry="3.6" className="fill-white" />
      <ellipse cx="76" cy="76" rx="18" ry="14" className="fill-white dark:fill-[#efe9d8]" />
      <ellipse cx="76" cy="76" rx="18" ry="14" className="fill-none stroke-forest-500/25" strokeWidth="2.5" />
      <ellipse cx="70" cy="71" rx="6" ry="3.6" className="fill-white" />
      <ellipse cx="59" cy="62" rx="18" ry="14" className="fill-white dark:fill-[#efe9d8]" />
      <ellipse cx="59" cy="62" rx="18" ry="14" className="fill-none stroke-forest-500/25" strokeWidth="2.5" />
      <ellipse cx="53" cy="57" rx="6" ry="3.6" className="fill-white" />
    </g>
  </g>
)

const CrispyDosa = () => (
  <g>
    {/* heat waves */}
    <g className="ra-heat">
      {[40, 60, 80].map((x, i) => (
        <path
          key={x}
          d={`M${x} 40c7-8-7-14 0-22`}
          className="fill-none stroke-turmeric-500/80"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </g>
    {/* tawa */}
    <ellipse cx="60" cy="80" rx="46" ry="18" className="fill-forest-950/25" />
    <ellipse cx="60" cy="76" rx="44" ry="17" className="fill-[#3a3a3a]" />
    {/* dosa */}
    <g className="ra-dosa origin-[60px_74px]">
      <ellipse cx="60" cy="74" rx="36" ry="13" className="fill-turmeric-400" />
      <ellipse cx="60" cy="73" rx="30" ry="10" className="fill-turmeric-500/70" />
      {[
        [46, 70, 3.2],
        [60, 76, 2.6],
        [72, 70, 3],
        [54, 78, 2.2],
      ].map(([cx, cy, r], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.6} className="fill-forest-900/45" />
      ))}
      <ellipse cx="48" cy="68" rx="10" ry="3.4" className="fill-white/35" />
    </g>
    {/* handle */}
    <rect x="96" y="72" width="20" height="7" rx="3.5" className="fill-forest-800" />
  </g>
)

const Clock = () => (
  <g>
    <circle cx="60" cy="62" r="34" className="fill-forest-500/10" />
    <circle cx="60" cy="62" r="34" className="fill-none stroke-forest-600 dark:stroke-leaf-400" strokeWidth="5" />
    {/* ticks */}
    {[0, 90, 180, 270].map((r) => (
      <rect key={r} x="58.5" y="32" width="3" height="7" rx="1.5" className="fill-forest-500/50" transform={`rotate(${r} 60 62)`} />
    ))}
    {/* the 12-minute sweep */}
    <path
      d="M60 62 L60 34 A28 28 0 0 1 82.5 45.5 Z"
      className="ra-sweep fill-turmeric-500/45 origin-[60px_62px]"
    />
    <rect x="58" y="40" width="4" height="24" rx="2" className="ra-hand fill-forest-700 dark:fill-leaf-300 origin-[60px_62px]" />
    <rect x="58" y="50" width="4" height="14" rx="2" className="fill-forest-500 origin-[60px_62px] rotate-90" />
    <circle cx="60" cy="62" r="5" className="fill-forest-700 dark:fill-leaf-300" />
    {/* pack tipping in */}
    <g className="ra-pour origin-[96px_96px]">
      <rect x="84" y="80" width="24" height="30" rx="5" className="fill-leaf-500" />
      <rect x="84" y="80" width="24" height="7" rx="3.5" className="fill-forest-700" />
      <circle cx="96" cy="96" r="5" className="fill-turmeric-400" />
    </g>
  </g>
)

const Heart = () => (
  <g>
    <g className="ra-beat origin-[60px_66px]">
      <path
        d="M60 96S24 76 24 52a18 18 0 0 1 36-6 18 18 0 0 1 36 6c0 24-36 44-36 44Z"
        className="fill-forest-500/12 stroke-forest-600 dark:stroke-leaf-400"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      {/* gloss */}
      <path d="M40 40a12 12 0 0 1 16 4c-6 6-11 14-13 22-6-8-8-19-3-26Z" className="fill-white/45 dark:fill-white/10" />
      {/* the four healthy grains, arranged inside the heart */}
      {[
        [46, 62, -30, 'fill-kavuni-500'],
        [58, 56, 10, 'fill-turmeric-500'],
        [70, 62, 32, 'fill-leaf-500'],
        [58, 72, -8, 'fill-forest-500'],
      ].map(([cx, cy, rot, cls], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="6.5" ry="3.4" className={cls} transform={`rotate(${rot} ${cx} ${cy})`} />
      ))}
    </g>
    {/* pulse line drawing across */}
    <path
      d="M26 66h12l6-12 9 24 7-14h24"
      className="ra-pulse fill-none stroke-leaf-500"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength="1"
    />
    {/* grain + leaf accents */}
    <ellipse cx="34" cy="28" rx="7" ry="3.6" className="fill-turmeric-500" transform="rotate(-28 34 28)" />
    <ellipse cx="86" cy="30" rx="7" ry="3.6" className="fill-turmeric-500" transform="rotate(28 86 30)" />
    <path d="M100 22c-8 1-13 6-13 12 0 5 4 8 9 8 7 0 12-6 12-13 0-4-3-7-8-7Z" className="fill-leaf-500" />
    <path d="M91 41c1-6 4-10 9-13" className="stroke-forest-700/40" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    <circle cx="22" cy="48" r="3" className="fill-leaf-400/70" />
    <circle cx="98" cy="60" r="2.4" className="fill-turmeric-400/80" />
  </g>
)

const scenes = {
  sunrise: Sunrise,
  recipe: Recipe,
  grains: Grains,
  shield: Shield,
  softidly: SoftIdly,
  crispydosa: CrispyDosa,
  clock: Clock,
  heart: Heart,
}

export default function ReasonArt({ name, className = '' }) {
  const Scene = scenes[name] || Sunrise
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false">
      <Scene />
    </svg>
  )
}
