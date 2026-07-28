import { useId, useState } from 'react'

/**
 * Generated SVG artwork.
 *
 * The site ships with no photography, so every image slot renders an on-brand
 * illustration instead of a broken <img>. Drop a real photo at
 * `public/images/<name>.jpg` and <SmartImage> upgrades to it automatically.
 */

/**
 * Illustration palettes. `a` mid tone, `b` darkest (outlines/shadow),
 * `c` lightest, `grain` mid-dark, `accent` the pop colour.
 * Kavuni stays purple — it is the black-rice product colour.
 */
const palettes = {
  kavuni: { a: '#4a2f6b', b: '#170d22', c: '#7c5aa8', accent: '#ffc107', grain: '#2b1a3d' },
  white: { a: '#f4f7f2', b: '#d9e5d6', c: '#ffffff', accent: '#4caf50', grain: '#e8eee5' },
  millet: { a: '#e0a800', b: '#8f6900', c: '#ffd44d', accent: '#2e7d32', grain: '#b88700' },
  ragi: { a: '#8a5a3b', b: '#4a2d1c', c: '#c08a63', accent: '#4caf50', grain: '#6b422a' },
  wheat: { a: '#d9a441', b: '#8a6320', c: '#f0c976', accent: '#2e7d32', grain: '#b3822f' },
  forest: { a: '#2e7d32', b: '#102d12', c: '#66c26e', accent: '#ffc107', grain: '#1f5522' },
  leaf: { a: '#4caf50', b: '#285d2b', c: '#8ed494', accent: '#ffc107', grain: '#337736' },
  cream: { a: '#fff5e0', b: '#e8d5ae', c: '#fffdf8', accent: '#2e7d32', grain: '#f2e4c7' },
  steel: { a: '#8fa3a8', b: '#3d4d52', c: '#c2d2d6', accent: '#4caf50', grain: '#647579' },
}

/* ---------------- Motifs ---------------- */

const Packet = ({ p, id }) => (
  <g>
    {/* stand-up pouch */}
    <path
      d="M300 170h200a26 26 0 0 1 26 26v244a30 30 0 0 1-30 30H304a30 30 0 0 1-30-30V196a26 26 0 0 1 26-26Z"
      fill={`url(#pk-${id})`}
      stroke={p.b}
      strokeWidth="3"
    />
    {/* top seal */}
    <path d="M290 170h220v-22a10 10 0 0 0-10-10H300a10 10 0 0 0-10 10Z" fill={p.b} opacity=".85" />
    <path d="M300 148h200" stroke={p.c} strokeWidth="3" strokeDasharray="9 7" opacity=".55" />
    {/* label window */}
    <rect x="316" y="228" width="168" height="118" rx="16" fill={p.c} opacity=".2" />
    <circle cx="400" cy="272" r="27" fill={p.accent} opacity=".9" />
    <path
      d="M388 272c0-9 6-15 12-15s12 6 12 15-6 15-12 15-12-6-12-15Z"
      fill={p.b}
      opacity=".55"
    />
    <rect x="342" y="312" width="116" height="9" rx="4.5" fill={p.c} opacity=".55" />
    <rect x="362" y="330" width="76" height="7" rx="3.5" fill={p.c} opacity=".38" />
    {/* gloss */}
    <path d="M300 176h34v290h-34Z" fill="#fff" opacity=".1" />
    <rect x="330" y="386" width="140" height="34" rx="17" fill={p.accent} opacity=".22" />
  </g>
)

const IdlyPlate = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="430" rx="215" ry="52" fill={p.b} opacity=".18" />
    <ellipse cx="400" cy="410" rx="205" ry="62" fill={`url(#pl-${id})`} />
    <ellipse cx="400" cy="400" rx="188" ry="52" fill={p.c} opacity=".55" />
    {[
      [316, 372, 62],
      [400, 356, 66],
      [486, 372, 62],
    ].map(([cx, cy, r], i) => (
      <g key={i}>
        <ellipse cx={cx} cy={cy + 14} rx={r} ry={r * 0.42} fill={p.grain} opacity=".28" />
        <circle cx={cx} cy={cy} r={r} fill={`url(#id-${id})`} />
        <ellipse cx={cx - r * 0.28} cy={cy - r * 0.34} rx={r * 0.36} ry={r * 0.24} fill="#fff" opacity=".34" />
      </g>
    ))}
    {/* steam */}
    {[350, 400, 450].map((x, i) => (
      <path
        key={x}
        d={`M${x} ${272 - i * 8}c14-24-14-40 0-64`}
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity=".38"
      />
    ))}
  </g>
)

const DosaPan = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="400" rx="230" ry="72" fill={p.b} opacity=".3" />
    <ellipse cx="400" cy="386" rx="222" ry="66" fill="#2c2c2c" />
    <ellipse cx="400" cy="378" rx="206" ry="58" fill="#3d3d3d" />
    {/* dosa */}
    <ellipse cx="400" cy="374" rx="176" ry="48" fill={`url(#ds-${id})`} />
    <ellipse cx="400" cy="370" rx="160" ry="42" fill={p.a} opacity=".5" />
    {/* crisp holes */}
    {[
      [330, 356, 9],
      [388, 344, 7],
      [452, 362, 10],
      [420, 386, 6],
      [352, 390, 7],
      [478, 384, 6],
    ].map(([cx, cy, r], i) => (
      <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.62} fill={p.b} opacity=".4" />
    ))}
    <ellipse cx="352" cy="352" rx="52" ry="18" fill="#fff" opacity=".16" />
    {/* ladle pour */}
    <path d="M556 214c34 0 52 22 52 46" stroke={p.grain} strokeWidth="12" strokeLinecap="round" fill="none" />
    <ellipse cx="530" cy="216" rx="42" ry="16" fill={p.c} opacity=".8" />
    <path d="M512 226c6 44 14 74 20 96" stroke={p.c} strokeWidth="13" strokeLinecap="round" opacity=".75" fill="none" />
  </g>
)

const GrainBowl = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="450" rx="190" ry="44" fill={p.b} opacity=".2" />
    <path d="M232 330h336c0 92-70 132-168 132S232 422 232 330Z" fill={`url(#bw-${id})`} />
    <ellipse cx="400" cy="330" rx="168" ry="42" fill={p.grain} />
    <ellipse cx="400" cy="326" rx="152" ry="35" fill={p.a} />
    {/* grains heaped */}
    {Array.from({ length: 46 }).map((_, i) => {
      const ang = (i / 46) * Math.PI * 2
      const rad = 22 + (i % 6) * 21
      const cx = 400 + Math.cos(ang) * rad
      const cy = 318 + Math.sin(ang) * rad * 0.3
      return (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="8"
          ry="4.6"
          fill={i % 3 === 0 ? p.c : p.grain}
          opacity=".92"
          transform={`rotate(${(i * 37) % 180} ${cx} ${cy})`}
        />
      )
    })}
    {/* scattered outside */}
    {[
      [186, 424],
      [214, 452],
      [598, 418],
      [572, 450],
      [640, 444],
    ].map(([cx, cy], i) => (
      <ellipse key={i} cx={cx} cy={cy} rx="9" ry="5" fill={p.grain} opacity=".75" transform={`rotate(${i * 40} ${cx} ${cy})`} />
    ))}
  </g>
)

const Grinder = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="470" rx="200" ry="42" fill={p.b} opacity=".22" />
    {/* drum */}
    <path d="M256 250h288v168a34 34 0 0 1-34 34H290a34 34 0 0 1-34-34Z" fill={`url(#gr-${id})`} />
    <ellipse cx="400" cy="250" rx="144" ry="44" fill={p.grain} />
    <ellipse cx="400" cy="246" rx="126" ry="36" fill={p.b} opacity=".55" />
    {/* stone rollers */}
    <circle cx="352" cy="242" r="40" fill={p.c} opacity=".9" />
    <circle cx="452" cy="242" r="40" fill={p.c} opacity=".72" />
    <circle cx="352" cy="242" r="14" fill={p.b} opacity=".4" />
    <circle cx="452" cy="242" r="14" fill={p.b} opacity=".4" />
    {/* batter */}
    <ellipse cx="402" cy="258" rx="104" ry="24" fill="#f7f4ec" opacity=".5" />
    {/* arm */}
    <rect x="386" y="128" width="28" height="106" rx="14" fill={p.grain} />
    <rect x="330" y="112" width="140" height="26" rx="13" fill={p.b} opacity=".8" />
    <rect x="296" y="418" width="208" height="18" rx="9" fill={p.b} opacity=".35" />
  </g>
)

const FactoryScene = ({ p, id }) => (
  <g>
    <rect x="140" y="286" width="220" height="180" rx="12" fill={`url(#fc-${id})`} />
    <rect x="360" y="228" width="300" height="238" rx="14" fill={p.a} />
    <path d="M360 228 510 152l150 76Z" fill={p.grain} />
    {/* chimneys */}
    <rect x="196" y="216" width="34" height="72" rx="8" fill={p.grain} />
    <rect x="252" y="244" width="34" height="44" rx="8" fill={p.grain} opacity=".8" />
    {/* windows */}
    {[0, 1, 2].map((r) =>
      [0, 1, 2, 3].map((c) => (
        <rect
          key={`${r}-${c}`}
          x={396 + c * 62}
          y={272 + r * 58}
          width="42"
          height="38"
          rx="6"
          fill={p.accent}
          opacity={0.35 + ((r + c) % 3) * 0.22}
        />
      ))
    )}
    {[0, 1].map((r) =>
      [0, 1, 2].map((c) => (
        <rect key={`s${r}-${c}`} x={168 + c * 62} y={324 + r * 62} width="44" height="40" rx="6" fill={p.c} opacity=".4" />
      ))
    )}
    <rect x="120" y="462" width="560" height="14" rx="7" fill={p.b} opacity=".4" />
    {/* steam puffs */}
    {[
      [213, 190, 22],
      [244, 162, 16],
      [269, 224, 14],
    ].map(([cx, cy, r], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" opacity=".3" />
    ))}
  </g>
)

const DeliveryVan = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="452" rx="230" ry="34" fill={p.b} opacity=".2" />
    <path d="M196 250h226v168H196a14 14 0 0 1-14-14V264a14 14 0 0 1 14-14Z" fill={`url(#vn-${id})`} />
    <path d="M422 296h96l64 66v56H422Z" fill={p.grain} />
    <path d="M436 306h72l44 48h-116Z" fill={p.accent} opacity=".55" />
    <rect x="212" y="278" width="180" height="90" rx="10" fill={p.c} opacity=".28" />
    <circle cx="302" cy="322" r="26" fill={p.accent} opacity=".85" />
    <rect x="238" y="384" width="128" height="10" rx="5" fill={p.c} opacity=".4" />
    {/* snow = refrigerated */}
    <g stroke={p.c} strokeWidth="4" strokeLinecap="round" opacity=".75">
      <path d="M566 250v-40M546 224l40 12M546 236l40-12" transform="translate(0 4)" />
    </g>
    <circle cx="270" cy="424" r="42" fill="#25282b" />
    <circle cx="270" cy="424" r="19" fill={p.c} opacity=".7" />
    <circle cx="536" cy="424" r="42" fill="#25282b" />
    <circle cx="536" cy="424" r="19" fill={p.c} opacity=".7" />
    <rect x="150" y="446" width="520" height="12" rx="6" fill={p.b} opacity=".35" />
  </g>
)

const FamilyBreakfast = ({ p, id }) => (
  <g>
    {/* table */}
    <rect x="120" y="392" width="560" height="26" rx="13" fill={p.grain} />
    <rect x="120" y="418" width="560" height="58" rx="10" fill={p.b} opacity=".35" />
    {/* three figures */}
    {[
      [252, 236, 62, p.a],
      [400, 208, 74, p.accent],
      [548, 240, 60, p.c],
    ].map(([cx, cy, r, fill], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r={r * 0.46} fill={fill} opacity=".9" />
        <path
          d={`M${cx - r * 0.82} 392c0-${r * 0.95} ${r * 0.37}-${r * 1.28} ${r * 0.82}-${r * 1.28}s${r * 0.82} ${r * 0.33} ${r * 0.82} ${r * 1.28}Z`}
          fill={fill}
          opacity=".72"
        />
      </g>
    ))}
    {/* plates */}
    {[252, 400, 548].map((cx) => (
      <g key={cx}>
        <ellipse cx={cx} cy={386} rx="58" ry="15" fill="#fff" opacity=".85" />
        <circle cx={cx - 18} cy={378} r="15" fill="#fdfaf2" />
        <circle cx={cx + 16} cy={380} r="14" fill="#fdfaf2" />
      </g>
    ))}
    {/* steam */}
    {[252, 400, 548].map((x, i) => (
      <path
        key={x}
        d={`M${x} ${352 - i * 6}c11-18-11-30 0-48`}
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity=".4"
      />
    ))}
  </g>
)

const PackingLine = ({ p, id }) => (
  <g>
    {/* conveyor */}
    <rect x="110" y="392" width="580" height="34" rx="17" fill={p.b} opacity=".5" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <circle key={i} cx={150 + i * 84} cy={409} r="13" fill={p.c} opacity=".5" />
    ))}
    {/* packs on the line */}
    {[190, 330, 470, 610].map((x, i) => (
      <g key={x} transform={`translate(${x - 44} ${268 + (i % 2) * 14})`}>
        <rect width="88" height="118" rx="12" fill={`url(#pc-${id})`} stroke={p.b} strokeWidth="2.5" />
        <rect x="14" y="22" width="60" height="42" rx="8" fill={p.c} opacity=".3" />
        <circle cx="44" cy="43" r="13" fill={p.accent} opacity=".9" />
        <rect x="22" y="78" width="44" height="7" rx="3.5" fill={p.c} opacity=".5" />
      </g>
    ))}
    {/* sealing arm */}
    <rect x="300" y="150" width="200" height="26" rx="13" fill={p.grain} />
    <rect x="384" y="176" width="32" height="66" rx="10" fill={p.grain} opacity=".8" />
    <path d="M330 150v-44h140v44" stroke={p.grain} strokeWidth="10" fill="none" strokeLinecap="round" />
  </g>
)

const LabFlask = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="452" rx="180" ry="34" fill={p.b} opacity=".2" />
    <path d="M362 168h76v104l86 152a26 26 0 0 1-22 40H298a26 26 0 0 1-22-40l86-152Z" fill={p.c} opacity=".25" stroke={p.a} strokeWidth="4" />
    <path d="M318 352h164l46 78a14 14 0 0 1-12 22H284a14 14 0 0 1-12-22Z" fill={`url(#lb-${id})`} />
    <rect x="352" y="146" width="96" height="24" rx="12" fill={p.grain} />
    {[
      [356, 396, 9],
      [400, 412, 7],
      [444, 392, 8],
      [420, 428, 5],
    ].map(([cx, cy, r], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" opacity=".35" />
    ))}
    {/* clipboard */}
    <rect x="536" y="238" width="128" height="164" rx="14" fill={p.a} opacity=".85" />
    <rect x="566" y="224" width="68" height="26" rx="13" fill={p.grain} />
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <circle cx={566} cy={288 + i * 30} r="8" fill={p.accent} />
        <rect x={584} y={282 + i * 30} width="58" height="9" rx="4.5" fill="#fff" opacity=".55" />
      </g>
    ))}
  </g>
)

const ProductRange = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="452" rx="240" ry="38" fill={p.b} opacity=".2" />
    {[
      [176, 300, '#4a2f6b', '#7c5aa8'],
      [292, 268, '#f0f4ee', '#ffffff'],
      [408, 250, '#e0a800', '#ffd44d'],
      [524, 268, '#8a5a3b', '#c08a63'],
      [640, 300, '#d9a441', '#f0c976'],
    ].map(([x, y, dark, light], i) => (
      <g key={i} transform={`translate(${x - 54} ${y})`}>
        <rect width="108" height={444 - y} rx="14" fill={light} stroke={dark} strokeWidth="3" />
        <rect y="0" width="108" height="20" rx="10" fill={dark} />
        <rect x="18" y="42" width="72" height="56" rx="10" fill={dark} opacity=".18" />
        <circle cx="54" cy="70" r="17" fill="#ffc107" opacity=".9" />
        <rect x="26" y="112" width="56" height="8" rx="4" fill={dark} opacity=".4" />
        <rect x="36" y="128" width="36" height="6" rx="3" fill={dark} opacity=".28" />
      </g>
    ))}
  </g>
)

const IngredientSpread = ({ p, id }) => (
  <g>
    {[
      [230, 300, 74, '#4a2f6b'],
      [400, 258, 82, '#f2ead5'],
      [570, 300, 74, '#e0a800'],
      [312, 404, 66, '#8a5a3b'],
      [488, 404, 66, '#d9a441'],
    ].map(([cx, cy, r, fill], i) => (
      <g key={i}>
        <ellipse cx={cx} cy={cy + r * 0.5} rx={r} ry={r * 0.3} fill={p.b} opacity=".18" />
        <path d={`M${cx - r} ${cy}h${r * 2}c0 ${r * 0.72}-${r * 0.5} ${r} -${r} ${r}s-${r}-${r * 0.28}-${r}-${r}Z`} fill={fill} opacity=".9" />
        <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.28} fill={fill} />
        <ellipse cx={cx} cy={cy - 3} rx={r * 0.86} ry={r * 0.22} fill="#fff" opacity=".22" />
        {Array.from({ length: 9 }).map((_, k) => (
          <ellipse
            key={k}
            cx={cx - r * 0.6 + (k % 5) * (r * 0.3)}
            cy={cy - 6 + Math.floor(k / 5) * 9}
            rx="6"
            ry="3.4"
            fill="#fff"
            opacity=".3"
            transform={`rotate(${k * 33} ${cx} ${cy})`}
          />
        ))}
      </g>
    ))}
    {/* loose grains */}
    {Array.from({ length: 14 }).map((_, i) => (
      <ellipse
        key={i}
        cx={140 + i * 40}
        cy={i % 2 ? 470 : 486}
        rx="8"
        ry="4.4"
        fill={p.grain}
        opacity=".55"
        transform={`rotate(${i * 27} ${140 + i * 40} 478)`}
      />
    ))}
  </g>
)

const Fermentation = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="460" rx="190" ry="34" fill={p.b} opacity=".2" />
    {/* vessel */}
    <path d="M256 232h288l-26 200a30 30 0 0 1-30 26H312a30 30 0 0 1-30-26Z" fill={p.c} opacity=".26" stroke={p.a} strokeWidth="4" />
    <path d="M272 320h256l-18 112a30 30 0 0 1-30 26H320a30 30 0 0 1-30-26Z" fill={`url(#fm-${id})`} />
    <ellipse cx="400" cy="322" rx="128" ry="24" fill="#f7f2e4" />
    {/* rising bubbles */}
    {[
      [330, 300, 13],
      [372, 282, 9],
      [418, 292, 16],
      [462, 276, 11],
      [400, 254, 8],
      [348, 262, 7],
    ].map(([cx, cy, r], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" opacity={0.28 + (i % 3) * 0.14} />
    ))}
    <ellipse cx="400" cy="230" rx="150" ry="26" fill={p.grain} opacity=".6" />
    {/* thermometer */}
    <rect x="608" y="196" width="26" height="184" rx="13" fill={p.c} opacity=".4" />
    <rect x="614" y="256" width="14" height="120" rx="7" fill={p.accent} />
    <circle cx="621" cy="396" r="26" fill={p.accent} />
  </g>
)

/* --- Step 1: grading incoming grain --- */
const GrainSelect = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="486" rx="290" ry="40" fill={p.b} opacity=".18" />

    {/* two sacks, one open */}
    {[
      [196, 250, 1],
      [604, 268, -1],
    ].map(([x, y, dir], i) => (
      <g key={i}>
        <path
          d={`M${x - 78} ${y}c-14 60-18 120-14 188a18 18 0 0 0 18 16h148a18 18 0 0 0 18-16c4-68 0-128-14-188Z`}
          fill={`url(#sk-${id})`}
          stroke={p.b}
          strokeWidth="3"
        />
        {/* rolled collar */}
        <path
          d={`M${x - 82} ${y}c10-22 34-32 82-32s72 10 82 32c-16 12-46 18-82 18s-66-6-82-18Z`}
          fill={p.grain}
        />
        <ellipse cx={x} cy={y - 2} rx="62" ry="15" fill={p.b} opacity=".45" />
        {/* grain visible in the mouth */}
        {Array.from({ length: 11 }).map((_, k) => (
          <ellipse
            key={k}
            cx={x - 42 + (k % 6) * 17}
            cy={y - 8 + Math.floor(k / 6) * 11}
            rx="7.5"
            ry="4.2"
            fill={k % 3 === 0 ? p.c : p.accent}
            opacity=".95"
            transform={`rotate(${k * 31 * dir} ${x} ${y})`}
          />
        ))}
        {/* label patch */}
        <rect x={x - 34} y={y + 74} width="68" height="46" rx="8" fill={p.c} opacity=".3" />
        <rect x={x - 24} y={y + 88} width="48" height="6" rx="3" fill={p.b} opacity=".35" />
        <rect x={x - 24} y={y + 100} width="30" height="6" rx="3" fill={p.b} opacity=".25" />
      </g>
    ))}

    {/* heaped grain on the inspection table */}
    <ellipse cx="400" cy="404" rx="118" ry="30" fill={p.grain} />
    <path d="M282 404c22-52 66-80 118-80s96 28 118 80Z" fill={p.c} opacity=".85" />
    {Array.from({ length: 26 }).map((_, i) => (
      <ellipse
        key={i}
        cx={300 + ((i * 61) % 200)}
        cy={352 + ((i * 37) % 46)}
        rx="8"
        ry="4.5"
        fill={i % 4 === 0 ? p.accent : p.grain}
        opacity=".9"
        transform={`rotate(${(i * 43) % 180} ${300 + ((i * 61) % 200)} ${352 + ((i * 37) % 46)})`}
      />
    ))}

    {/* magnifier over the heap */}
    <g>
      <circle cx="418" cy="300" r="74" fill="#fff" opacity=".16" />
      <circle cx="418" cy="300" r="74" fill="none" stroke={p.c} strokeWidth="11" />
      <circle cx="418" cy="300" r="74" fill="none" stroke={p.b} strokeWidth="3" opacity=".4" />
      {/* enlarged grains inside the lens */}
      {[
        [392, 286, 20],
        [438, 300, 17],
        [408, 324, 14],
      ].map(([cx, cy, r], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.55} fill={p.accent} transform={`rotate(${i * 40 - 20} ${cx} ${cy})`} />
      ))}
      <path d="M470 352l46 46" stroke={p.c} strokeWidth="18" strokeLinecap="round" />
      <path d="M470 352l46 46" stroke={p.b} strokeWidth="6" strokeLinecap="round" opacity=".3" />
    </g>

    {/* accept / reject badges */}
    <g>
      <circle cx="150" cy="140" r="34" fill="#4caf50" />
      <path d="M134 140l12 13 22-25" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="654" cy="152" r="30" fill="#e05252" />
      <path d="M642 140l24 24M666 140l-24 24" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
    </g>
  </g>
)

/* --- Step 2: rinsing + soaking --- */
const WashSoak = ({ p, id }) => (
  <g>
    {/* tap */}
    <rect x="286" y="88" width="34" height="86" rx="10" fill={p.grain} />
    <path d="M303 96h150a20 20 0 0 1 20 20v38" stroke={p.grain} strokeWidth="30" fill="none" strokeLinecap="round" />
    <rect x="452" y="146" width="42" height="26" rx="8" fill={p.b} opacity=".6" />
    <circle cx="303" cy="80" r="26" fill={p.c} />
    <rect x="288" y="62" width="30" height="12" rx="6" fill={p.b} opacity=".4" />

    {/* falling water */}
    <path d="M473 176c-4 46-6 84-4 116" stroke={`url(#wt-${id})`} strokeWidth="34" strokeLinecap="round" fill="none" opacity=".85" />
    {[
      [446, 232, 7],
      [502, 258, 6],
      [438, 288, 5],
      [508, 200, 5],
    ].map(([cx, cy, r], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" opacity=".55" />
    ))}

    {/* basin */}
    <ellipse cx="400" cy="470" rx="216" ry="42" fill={p.b} opacity=".2" />
    <path d="M198 326h404l-30 148a34 34 0 0 1-33 26H261a34 34 0 0 1-33-26Z" fill={p.c} opacity=".3" stroke={p.a} strokeWidth="4" />
    {/* water surface */}
    <ellipse cx="400" cy="330" rx="200" ry="34" fill={`url(#wt-${id})`} />
    <ellipse cx="400" cy="328" rx="176" ry="26" fill="#fff" opacity=".22" />
    {/* ripples */}
    {[68, 112, 156].map((r, i) => (
      <ellipse key={r} cx="452" cy="332" rx={r} ry={r * 0.17} fill="none" stroke="#fff" strokeWidth="3" opacity={0.34 - i * 0.09} />
    ))}

    {/* soaking grains settled at the bottom */}
    {Array.from({ length: 30 }).map((_, i) => (
      <ellipse
        key={i}
        cx={252 + ((i * 71) % 296)}
        cy={404 + ((i * 43) % 68)}
        rx="9"
        ry="5"
        fill={i % 3 === 0 ? p.accent : p.grain}
        opacity=".82"
        transform={`rotate(${(i * 53) % 180} ${252 + ((i * 71) % 296)} ${404 + ((i * 43) % 68)})`}
      />
    ))}

    {/* soak timer */}
    <g>
      <circle cx="644" cy="196" r="52" fill={p.c} opacity=".9" />
      <circle cx="644" cy="196" r="52" fill="none" stroke={p.b} strokeWidth="4" opacity=".35" />
      <path d="M644 196V158M644 196l28 18" stroke={p.b} strokeWidth="8" strokeLinecap="round" />
      <circle cx="644" cy="196" r="6" fill={p.b} />
    </g>
  </g>
)

/* --- Step 4: batch quality check --- */
const QualityCheck = ({ p, id }) => (
  <g>
    <ellipse cx="400" cy="492" rx="270" ry="36" fill={p.b} opacity=".18" />

    {/* clipboard */}
    <rect x="132" y="196" width="212" height="266" rx="18" fill={p.c} opacity=".95" />
    <rect x="132" y="196" width="212" height="266" rx="18" fill="none" stroke={p.b} strokeWidth="3" opacity=".3" />
    <rect x="198" y="180" width="80" height="30" rx="15" fill={p.grain} />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <circle cx={176} cy={252 + i * 42} r="12" fill="#4caf50" opacity={i === 4 ? 0.25 : 0.95} />
        {i < 4 && (
          <path
            d={`M${170} ${252 + i * 42}l5 5 8-9`}
            stroke="#fff"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        )}
        <rect x={200} y={245 + i * 42} width={i === 4 ? 66 : 108} height="9" rx="4.5" fill={p.b} opacity=".28" />
      </g>
    ))}

    {/* pH strip set */}
    <g>
      <rect x="376" y="180" width="46" height="150" rx="10" fill={p.c} opacity=".5" />
      {['#e05252', '#e0a800', '#8ac24a', '#4caf50', '#2e7d32'].map((c, i) => (
        <rect key={c} x="382" y={190 + i * 28} width="34" height="20" rx="5" fill={c} opacity=".9" />
      ))}
      {/* the dipped strip */}
      <rect x="440" y="196" width="26" height="150" rx="8" fill="#fff" opacity=".8" />
      <rect x="440" y="300" width="26" height="46" rx="8" fill="#4caf50" />
      <path d="M453 346v34" stroke={p.b} strokeWidth="4" strokeLinecap="round" opacity=".4" />
    </g>

    {/* test idly on a spoon */}
    <g>
      <path d="M556 392c0-30 24-54 54-54s54 24 54 54-24 40-54 40-54-10-54-40Z" fill={p.c} opacity=".9" />
      <ellipse cx="610" cy="382" rx="40" ry="26" fill="#fdfaf2" />
      <ellipse cx="598" cy="374" rx="15" ry="9" fill="#fff" opacity=".7" />
      <path d="M664 404l86 44" stroke={p.grain} strokeWidth="16" strokeLinecap="round" />
      {/* steam off the test idly */}
      {[586, 612, 638].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${330 - i * 6}c10-16-10-28 0-44`}
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity=".45"
        />
      ))}
    </g>

    {/* pass stamp */}
    <g transform="rotate(-12 470 456)">
      <rect x="386" y="430" width="168" height="52" rx="10" fill="none" stroke="#4caf50" strokeWidth="6" opacity=".85" />
      <path d="M410 456l14 15 24-30" stroke="#4caf50" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="462" y="448" width="70" height="14" rx="7" fill="#4caf50" opacity=".65" />
    </g>
  </g>
)

/* --- Step 6: 4°C cold room --- */
const ColdRoom = ({ p, id }) => (
  <g>
    {/* room shell */}
    <rect x="118" y="150" width="564" height="320" rx="24" fill={`url(#cd-${id})`} />
    <rect x="118" y="150" width="564" height="320" rx="24" fill="none" stroke={p.b} strokeWidth="5" opacity=".45" />
    {/* insulated door seam */}
    <path d="M400 150v320" stroke={p.b} strokeWidth="4" opacity=".22" strokeDasharray="14 10" />

    {/* shelving with stacked packs */}
    {[228, 322, 416].map((shelfY, s) => (
      <g key={shelfY}>
        <rect x="150" y={shelfY + 34} width="500" height="10" rx="5" fill={p.b} opacity=".3" />
        {[0, 1, 2, 3, 4, 5].map((c) => (
          <g key={c} transform={`translate(${172 + c * 80} ${shelfY - 26})`}>
            <rect width="60" height="60" rx="9" fill="#fff" opacity={0.86 - s * 0.12} />
            <rect width="60" height="11" rx="5.5" fill={p.a} opacity=".85" />
            <circle cx="30" cy="34" r="11" fill={p.accent} opacity=".9" />
            <rect x="14" y="49" width="32" height="5" rx="2.5" fill={p.b} opacity=".3" />
          </g>
        ))}
      </g>
    ))}

    {/* frost on the glass */}
    <g opacity=".5">
      {[
        [176, 186],
        [640, 190],
        [176, 440],
        [640, 444],
      ].map(([x, y], i) => (
        <g key={i} stroke="#fff" strokeWidth="3.5" strokeLinecap="round">
          <path d={`M${x - 14} ${y}h28M${x} ${y - 14}v28M${x - 10} ${y - 10}l20 20M${x + 10} ${y - 10}l-20 20`} />
        </g>
      ))}
    </g>

    {/* temperature readout */}
    <g>
      <rect x="286" y="66" width="228" height="76" rx="18" fill={p.b} opacity=".82" />
      <rect x="286" y="66" width="228" height="76" rx="18" fill="none" stroke="#fff" strokeWidth="2.5" opacity=".25" />
      {/* snowflake */}
      <g stroke={p.accent} strokeWidth="5" strokeLinecap="round" transform="translate(330 104)">
        <path d="M0-20V20M-17-10L17 10M-17 10L17-10" />
      </g>
      <text
        x="440"
        y="118"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Poppins, system-ui, sans-serif"
        fontSize="46"
        fontWeight="700"
        letterSpacing="1"
      >
        4°C
      </text>
    </g>

    {/* cold air drift */}
    {[
      [210, 500, 120],
      [388, 512, 160],
      [578, 500, 110],
    ].map(([x, y, w], i) => (
      <path
        key={i}
        d={`M${x} ${y}h${w}`}
        stroke={p.c}
        strokeWidth="9"
        strokeLinecap="round"
        opacity={0.32 - i * 0.06}
      />
    ))}
  </g>
)

const motifs = {
  packet: Packet,
  select: GrainSelect,
  wash: WashSoak,
  qualitycheck: QualityCheck,
  cold: ColdRoom,
  idly: IdlyPlate,
  dosa: DosaPan,
  grain: GrainBowl,
  grinder: Grinder,
  factory: FactoryScene,
  delivery: DeliveryVan,
  family: FamilyBreakfast,
  packing: PackingLine,
  lab: LabFlask,
  range: ProductRange,
  ingredients: IngredientSpread,
  fermentation: Fermentation,
}

/** Named scenes: which motif + which palette. */
const scenes = {
  // products
  kavuni: { motif: 'packet', palette: 'kavuni' },
  white: { motif: 'packet', palette: 'white' },
  millet: { motif: 'packet', palette: 'millet' },
  ragi: { motif: 'packet', palette: 'ragi' },
  wheat: { motif: 'packet', palette: 'wheat' },
  // process steps — one distinct scene per step
  'step-select': { motif: 'select', palette: 'cream' },
  'step-wash': { motif: 'wash', palette: 'steel' },
  'step-grind': { motif: 'grinder', palette: 'steel' },
  'step-check': { motif: 'qualitycheck', palette: 'leaf' },
  'step-pack': { motif: 'packing', palette: 'leaf' },
  'step-cold': { motif: 'cold', palette: 'steel' },
  'step-deliver': { motif: 'delivery', palette: 'forest' },
  // gallery
  grinding: { motif: 'grinder', palette: 'steel' },
  factory: { motif: 'factory', palette: 'forest' },
  packing: { motif: 'packing', palette: 'leaf' },
  delivery: { motif: 'delivery', palette: 'forest' },
  products: { motif: 'range', palette: 'cream' },
  customers: { motif: 'family', palette: 'leaf' },
  lab: { motif: 'lab', palette: 'steel' },
  ingredients: { motif: 'ingredients', palette: 'cream' },
  idly: { motif: 'idly', palette: 'cream' },
  dosa: { motif: 'dosa', palette: 'wheat' },
  // blogs / features
  breakfast: { motif: 'family', palette: 'cream' },
  blackrice: { motif: 'grain', palette: 'kavuni' },
  fermentation: { motif: 'fermentation', palette: 'leaf' },
  hero: { motif: 'family', palette: 'leaf' },
  grains: { motif: 'grain', palette: 'millet' },
}

export default function Art({ name = 'idly', className = '', label, ...rest }) {
  const uid = useId().replace(/[:]/g, '')
  const scene = scenes[name] || scenes.idly
  const p = palettes[scene.palette] || palettes.leaf
  const Motif = motifs[scene.motif] || IdlyPlate
  const decorative = rest['aria-hidden'] === 'true' || rest['aria-hidden'] === true

  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      {...(decorative ? {} : { role: 'img', 'aria-label': label || `${name} illustration` })}
      {...rest}
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.a} />
          <stop offset="55%" stopColor={p.grain} />
          <stop offset="100%" stopColor={p.b} />
        </linearGradient>
        <linearGradient id={`pk-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.c} />
          <stop offset="100%" stopColor={p.a} />
        </linearGradient>
        <linearGradient id={`pl-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor={p.grain} />
        </linearGradient>
        <radialGradient id={`id-${uid}`} cx="35%" cy="30%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#efe9d8" />
        </radialGradient>
        <linearGradient id={`ds-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.c} />
          <stop offset="100%" stopColor={p.grain} />
        </linearGradient>
        <linearGradient id={`bw-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.c} />
          <stop offset="100%" stopColor={p.b} />
        </linearGradient>
        <linearGradient id={`gr-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.c} />
          <stop offset="100%" stopColor={p.grain} />
        </linearGradient>
        <linearGradient id={`fc-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.c} />
          <stop offset="100%" stopColor={p.a} />
        </linearGradient>
        <linearGradient id={`vn-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor={p.c} />
        </linearGradient>
        <linearGradient id={`pc-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor={p.c} />
        </linearGradient>
        <linearGradient id={`lb-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.c} />
          <stop offset="100%" stopColor={p.a} />
        </linearGradient>
        <linearGradient id={`fm-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7f2e4" />
          <stop offset="100%" stopColor={p.grain} />
        </linearGradient>
        <linearGradient id={`sk-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3ead6" />
          <stop offset="100%" stopColor={p.grain} />
        </linearGradient>
        <linearGradient id={`wt-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfe3f5" />
          <stop offset="100%" stopColor="#5aa8c8" />
        </linearGradient>
        <linearGradient id={`cd-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dff0f6" />
          <stop offset="55%" stopColor={p.c} />
          <stop offset="100%" stopColor={p.a} />
        </linearGradient>
        <radialGradient id={`vg-${uid}`} cx="50%" cy="42%" r="72%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity=".34" />
        </radialGradient>
      </defs>

      <rect width="800" height="600" fill={`url(#bg-${uid})`} />

      {/* ambient blobs */}
      <circle cx="120" cy="96" r="150" fill={p.c} opacity=".18" />
      <circle cx="712" cy="150" r="112" fill={p.accent} opacity=".14" />
      <circle cx="660" cy="540" r="140" fill={p.c} opacity=".12" />

      {/* dotted texture */}
      <g opacity=".16" fill="#fff">
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={i} cx={((i * 137) % 780) + 10} cy={((i * 89) % 580) + 10} r="2.4" />
        ))}
      </g>

      <Motif p={p} id={uid} />
      <rect width="800" height="600" fill={`url(#vg-${uid})`} />
    </svg>
  )
}

/**
 * Lazy image with a generated-art understudy.
 *
 * The artwork is always painted underneath, so a missing photo never shows a
 * broken-image icon and never shifts layout — the <img> simply fades in on top
 * once it loads. Drop a file at `public/images/<src>` to upgrade any slot.
 * `src` is resolved against /images/ so content files only carry a filename.
 */
export function SmartImage({
  src,
  art = 'idly',
  alt,
  className = '',
  imgClassName = '',
  ratio = 'aspect-[4/3]',
  /** Stretch to fill a positioned parent instead of holding its own ratio. */
  fill = false,
  eager = false,
}) {
  const [status, setStatus] = useState('idle') // idle → loaded | failed
  const showPhoto = src && status !== 'failed'

  return (
    <div
      className={`overflow-hidden ${fill ? 'absolute inset-0 size-full' : `relative ${ratio}`} ${className}`}
    >
      <Art
        name={art}
        label={alt}
        // Decorative while a real photo is carrying the alt text.
        {...(status === 'loaded' ? { 'aria-hidden': 'true', role: 'presentation' } : {})}
        className="absolute inset-0 size-full"
      />

      {showPhoto && (
        <img
          src={`/images/${src}`}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('failed')}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  )
}
