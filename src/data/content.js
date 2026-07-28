export const stats = [
  { value: 250000, suffix: '+', label: 'Fresh Packs Delivered' },
  { value: 180, suffix: '+', label: 'Retail Stores' },
  { value: 12000, suffix: '+', label: 'Happy Families' },
  { value: 9, suffix: '', label: 'Years of Quality' },
]

/**
 * The eight "why choose us" reasons. `spot` names an animated illustration in
 * components/home/ReasonArt.jsx; `stat` is the headline proof shown on the card
 * and `detail` is revealed when the card is opened.
 */
export const whyChoose = [
  {
    icon: 'Sunrise',
    spot: 'sunrise',
    title: 'Freshly Ground Daily',
    body: 'Grinding starts at 2 AM. Your pack leaves the unit the same morning it was made — never a day older.',
    stat: '2 AM start',
    detail:
      'Our grinders run before the city wakes so batter is sealed by 5 AM and on the shelf by 6. Nothing is produced a day ahead, and the date printed on the pack is the date it was actually ground — we never post-date to buy shelf life.',
  },
  {
    icon: 'Soup',
    spot: 'recipe',
    title: 'Traditional Recipe',
    body: 'The same rice-to-dal ratio and overnight ferment our family has used for three generations.',
    stat: '3 generations',
    detail:
      'The ratio our grandmothers settled on, and an unaided overnight ferment. Scaling up changed the number of grinders, not the method — no soda, no starter culture, no accelerator to make the batter rise faster than it should.',
  },
  {
    icon: 'Wheat',
    spot: 'grains',
    title: 'Premium Ingredients',
    body: 'Hand-picked idly rice, whole urad dal and heritage grains sourced directly from Tamil Nadu farms.',
    stat: 'Graded by hand',
    detail:
      'Every sack is checked for moisture, broken-grain percentage and smell before it enters the store room. Anything below standard goes straight back to the supplier. Karuppu Kavuni comes from a small group of farms we buy from directly.',
  },
  {
    icon: 'ShieldCheck',
    spot: 'shield',
    title: 'No Artificial Preservatives',
    body: 'No soda, no acidity regulators, no colour. Cold storage does the preserving instead of chemistry.',
    stat: '5 ingredients',
    detail:
      'Grain, urad dal, fenugreek, rock salt, RO water. That is the whole list, short enough to read in one breath. Freshness comes from an unbroken 4°C cold chain rather than anything added to the batter.',
  },
  {
    icon: 'Cloud',
    spot: 'softidly',
    title: 'Soft Idly',
    body: 'Natural fermentation builds the air pockets that keep idlies light hours after steaming.',
    stat: 'Soft for hours',
    detail:
      'An idly is mostly trapped air. Wild bacteria release carbon dioxide, urad dal protein holds it in thousands of tiny bubbles, and steam expands them into the soft crumb. Protecting that structure is why we grind slowly and ship cold.',
  },
  {
    icon: 'Flame',
    spot: 'crispydosa',
    title: 'Crispy Dosa',
    body: 'Stone grinding leaves the right coarseness, so dosas turn golden and stay crisp on the plate.',
    stat: 'Golden edges',
    detail:
      'High-speed grinders produce an over-smooth paste that cooks soft. Slow stone grinding leaves a slightly coarse texture that crisps at the edges and holds it — so the dosa is still crisp by the time it reaches the table.',
  },
  {
    icon: 'Timer',
    spot: 'clock',
    title: 'Easy Breakfast',
    body: 'Open, pour, cook. No soaking, no grinding, no waiting overnight for the batter to rise.',
    stat: '~12 minutes',
    detail:
      'The eight hours of planning is the part that breaks a weekday routine — soaking the previous afternoon, grinding at night. We took on exactly that. Open the pack, stir gently, pour. Idlies are on the table in about twelve minutes.',
  },
  {
    icon: 'HeartPulse',
    spot: 'heart',
    title: 'Healthy Choice',
    body: 'Black rice, millet and ragi options bring real fibre and micronutrients to an everyday meal.',
    stat: '4 healthy grains',
    detail:
      'Karuppu Kavuni for antioxidants, millet for a lower glycaemic load, ragi for calcium. Fermentation also breaks down phytic acid, which makes the iron and zinc already in those grains easier for your body to absorb.',
  },
]

/**
 * The seven production steps. `art` names a scene in components/ui/Art.jsx and
 * `time`/`clock` drive the timeline infographic, so the home timeline and the
 * manufacturing page stay in step from one definition.
 */
export const processSteps = [
  {
    title: 'Select Ingredients',
    body: 'Every sack of rice and dal is graded by hand. Anything below our standard goes back to the supplier.',
    icon: 'Wheat',
    art: 'step-select',
    time: '4:00 PM',
    dayPart: 'previous afternoon',
    clock: 16,
  },
  {
    title: 'Wash Carefully',
    body: 'Grains are rinsed in RO water until it runs clear, then soaked for the exact hours each variety needs.',
    icon: 'Droplets',
    art: 'step-wash',
    time: '6:00 PM',
    dayPart: 'evening',
    clock: 18,
  },
  {
    title: 'Traditional Grinding',
    body: 'Slow stone grinders keep the batter cool, protecting the natural cultures that make it rise.',
    icon: 'Cog',
    art: 'step-grind',
    time: '2:00 AM',
    dayPart: 'deep night',
    clock: 26,
  },
  {
    title: 'Quality Check',
    body: 'Batch-wise checks on texture, pH, aroma and fermentation before anything moves forward.',
    icon: 'ClipboardCheck',
    art: 'step-check',
    time: '4:30 AM',
    dayPart: 'pre-dawn',
    clock: 28.5,
  },
  {
    title: 'Hygienic Packing',
    body: 'Sealed in food-grade packaging in a sanitised room. Gloves, caps and masks, no exceptions.',
    icon: 'Package',
    art: 'step-pack',
    time: '5:00 AM',
    dayPart: 'first light',
    clock: 29,
  },
  {
    title: 'Cold Storage',
    body: 'Held at 4°C from the moment it is sealed, so fermentation pauses exactly where we want it.',
    icon: 'Snowflake',
    art: 'step-cold',
    time: '5:20 AM',
    dayPart: 'first light',
    clock: 29.33,
  },
  {
    title: 'Delivered Fresh',
    body: 'Refrigerated vans reach stores before the shutters open. Same-day batter, every day.',
    icon: 'Truck',
    art: 'step-deliver',
    time: '6:00 AM',
    dayPart: 'sunrise',
    clock: 30,
  },
]

export const blackRiceBenefits = [
  {
    icon: 'Sparkles',
    title: 'Rich in Antioxidants',
    body: 'Anthocyanins — the pigment that makes Karuppu Kavuni black — are the same antioxidant family found in blueberries.',
  },
  {
    icon: 'Wheat',
    title: 'High Fibre',
    body: 'The intact bran layer delivers far more dietary fibre than polished white rice, so you stay full longer.',
  },
  {
    icon: 'Magnet',
    title: 'Iron Rich',
    body: 'A meaningful source of plant iron, traditionally given to new mothers across Tamil households.',
  },
  {
    icon: 'Activity',
    title: 'Diabetic Friendly',
    body: 'A lower glycaemic load than white rice means a gentler, slower release of energy after breakfast.',
  },
  {
    icon: 'Landmark',
    title: 'Traditional Superfood',
    body: 'Grown in Tamil Nadu for centuries and once reserved for royalty — long before the word superfood existed.',
  },
  {
    icon: 'Leaf',
    title: 'Supports Digestion',
    body: 'Fibre plus natural fermentation makes the batter easier on the gut than an unfermented meal.',
  },
]

export const testimonials = [
  { name: 'Lakshmi R.', role: 'Homemaker · Coimbatore', rating: 5, quote: 'Very soft idly. My mother-in-law asked which brand I switched to — that never happens.' },
  { name: 'Karthik S.', role: 'Father of two · Tiruppur', rating: 5, quote: 'Kids love the dosa. The black rice one disappears fastest, which I did not expect at all.' },
  { name: 'Priya Venkatesh', role: 'Working professional', rating: 5, quote: 'Tastes like homemade. I stopped soaking and grinding on Sundays and I have not looked back.' },
  { name: 'Mohan Raj', role: 'Store owner · Erode', rating: 5, quote: 'Stock moves fast and the delivery is always on time. Customers come back asking for it by name.' },
  { name: 'Anitha K.', role: 'Nutrition-conscious buyer', rating: 5, quote: 'The millet batter is genuinely light. No heaviness after breakfast and no preservative aftertaste.' },
  { name: 'Suresh Kumar', role: 'Distributor · Salem', rating: 5, quote: 'Margins are healthy and the packaging holds up in transit. Easy product to sell.' },
]

export const galleryItems = [
  { title: 'Our Factory', caption: 'The production unit at first light', art: 'factory' },
  { title: 'Stone Grinding', caption: 'Slow grinders, cool batter', art: 'grinding' },
  { title: 'Hygienic Packing', caption: 'Sealed in a sanitised room', art: 'packing' },
  { title: 'Cold Chain Delivery', caption: 'Refrigerated vans, every morning', art: 'delivery' },
  { title: 'Our Products', caption: 'The full AG Fresh range', art: 'products' },
  { title: 'Happy Customers', caption: 'Breakfast tables across Tamil Nadu', art: 'customers' },
  { title: 'Quality Lab', caption: 'Batch-wise checks before dispatch', art: 'lab' },
  { title: 'Fresh Ingredients', caption: 'Graded by hand, every sack', art: 'ingredients' },
  { title: 'Soft Idly', caption: 'What the batter becomes', art: 'idly' },
]

export const faqs = [
  {
    q: 'How many days does the batter stay fresh?',
    a: 'Four days from the date of packing when kept continuously refrigerated at 4°C, and three days for the millet, ragi and wheat variants. The pack carries its own packed-on date — we never post-date it. For the softest idlies, use it within the first two days.',
  },
  {
    q: 'Does it contain any preservatives?',
    a: 'No. There is no soda, no acidity regulator, no artificial colour and no preservative of any kind. The ingredient list on every pack is short enough to read in one breath. Freshness comes from an unbroken cold chain, not chemistry.',
  },
  {
    q: 'How should I store the batter at home?',
    a: 'Refrigerate it the moment it reaches you — do not leave it in the car or on the counter. Keep it in the main compartment rather than the door, where the temperature swings each time it opens. Take out only what you need and return the pack to the fridge immediately.',
  },
  {
    q: 'Which areas do you deliver to?',
    a: 'We currently deliver across Coimbatore, Tiruppur, Erode, Salem, Pollachi and Mettupalayam through our own refrigerated vans and partner stores. We are expanding routes continually — send us a WhatsApp message with your pin code and we will tell you the nearest stocking store.',
  },
  {
    q: 'What is the minimum quantity for dealers?',
    a: 'Retail stores typically start at 50 packs per delivery day, and distributors at 300 packs. Both come with free display material, a return policy on unsold same-day stock and a dedicated route executive. Exact terms depend on your location — apply through the dealer form and we will call you within 24 hours.',
  },
  {
    q: 'Why does my batter smell slightly sour?',
    a: 'A mild sourness is natural fermentation doing its job, and it usually means excellent dosa flavour. If it smells sharply sour or the pack looks swollen, it has been out of refrigeration too long — do not use it, and tell us the batch code so we can trace it.',
  },
  {
    q: 'Do I need to add salt or water before cooking?',
    a: 'No. The batter is fully seasoned and mixed to the right consistency. Stir gently before pouring — do not whisk hard, as that knocks out the air that makes idlies soft. Add a splash of water only if you want an especially thin dosa.',
  },
  {
    q: 'Is the Karuppu Kavuni batter suitable for diabetics?',
    a: 'Black rice has a lower glycaemic load than polished white rice and more fibre, which many people with diabetes find helpful. That said, this is food and not medical advice — please check with your doctor or dietitian about your own diet.',
  },
]

export const blogPosts = [
  {
    slug: 'healthy-breakfast-ideas',
    title: 'Healthy Breakfast Ideas for Busy South Indian Families',
    excerpt:
      'Seven breakfasts you can put on the table in under fifteen minutes, without falling back on cereal or leftovers.',
    date: '2026-06-18',
    readTime: '6 min read',
    category: 'Healthy Living',
    art: 'breakfast',
    body: [
      {
        h: 'Breakfast is the meal that gets sacrificed first',
        p: 'In most households the morning has a hard deadline: a school van at 7:20, a shift that starts at 9. Breakfast is the only meal with no slack in it, which is why it quietly degrades into biscuits and coffee. The fix is rarely more discipline — it is removing the steps that need planning the night before.',
      },
      {
        h: '1. Idly with two chutneys, ready in twelve minutes',
        p: 'Steam takes ten minutes and needs no attention. While the idlies cook, blitz a coconut chutney and warm yesterday\'s sambar. With ready batter in the fridge, this is genuinely faster than making toast for four people.',
      },
      {
        h: '2. Millet dosa with podi and gingelly oil',
        p: 'Multi millet batter gives you a dosa with real fibre. Skip the side dish entirely — podi mixed with good gingelly oil is a complete accompaniment and takes zero cooking time.',
      },
      {
        h: '3. Karuppu Kavuni idly for the antioxidant boost',
        p: 'Black rice idlies come out a deep purple-grey and children find them genuinely interesting, which solves a different problem. Nutritionally you are getting anthocyanins and far more fibre than a white rice idly.',
      },
      {
        h: '4. Ragi dosa for growing children',
        p: 'Finger millet carries more calcium than most grains. A ragi dosa with a boiled egg or a glass of milk covers a surprising share of a child\'s daily needs before they leave the house.',
      },
      {
        h: '5. Uthappam with whatever is in the fridge',
        p: 'Thick pour, low flame, and press in chopped onion, tomato, carrot or coriander. It is the most forgiving item in the repertoire and a reliable way to use up half-vegetables.',
      },
      {
        h: '6. Idly upma from yesterday\'s leftovers',
        p: 'Crumble leftover idlies, temper with mustard, curry leaf and onion, and you have a second meal that tastes deliberate rather than recycled.',
      },
      {
        h: '7. Paniyaram for lunchboxes',
        p: 'The same batter in a paniyaram pan gives you something that travels well and does not go soggy by 11 AM. Make a batch on Sunday and the week gets easier.',
      },
      {
        h: 'The common thread',
        p: 'Every one of these starts with batter already in the fridge. The overnight soak and the early-morning grind are the steps that break the routine — outsourcing exactly those is what makes a traditional breakfast survive a modern week.',
      },
    ],
  },
  {
    slug: 'benefits-of-black-rice',
    title: 'Benefits of Black Rice: Why Karuppu Kavuni Deserves a Comeback',
    excerpt:
      'It was once reserved for Tamil royalty. Here is what modern nutrition says about the grain our grandparents already trusted.',
    date: '2026-06-02',
    readTime: '7 min read',
    category: 'Nutrition',
    art: 'blackrice',
    body: [
      {
        h: 'A grain with a long memory',
        p: 'Karuppu Kavuni has been grown in Tamil Nadu for centuries. Under Chola-era custom it was largely restricted to royal households, which earned it the nickname "forbidden rice". It survived in pockets of the state precisely because a few farming families refused to let the seed disappear during the shift to high-yield white paddy.',
      },
      {
        h: 'The colour is the point',
        p: 'That deep purple-black comes from anthocyanins, the same class of antioxidant pigment found in blueberries and jamun. Antioxidants matter because they neutralise free radicals — unstable molecules linked to cellular ageing and chronic inflammation. White rice has effectively none of this, because polishing strips the layer that carries it.',
      },
      {
        h: 'Fibre changes how the meal behaves',
        p: 'Black rice keeps its bran, and the bran keeps the fibre. Fibre slows digestion, which flattens the sharp blood sugar spike a white rice meal produces and keeps you full for longer. It also feeds gut bacteria — increasingly understood as central to immunity and mood, not just digestion.',
      },
      {
        h: 'Iron, and why it mattered traditionally',
        p: 'Karuppu Kavuni is a meaningful plant source of iron. This is not new information in Tamil households: black rice kanji has been given to new mothers and to people recovering from illness for generations. The traditional practice arrived at the nutritional conclusion long before the lab did.',
      },
      {
        h: 'What it means for people managing blood sugar',
        p: 'A lower glycaemic load means glucose enters the bloodstream more gradually. Many people managing diabetes find black rice preparations easier to accommodate than white rice ones. This is a general nutritional observation, not medical advice — your doctor or dietitian knows your situation and should make the call.',
      },
      {
        h: 'Fermentation makes it work harder',
        p: 'Grinding black rice into idly and dosa batter and letting it ferment naturally does something extra. Fermentation begins breaking down phytic acid, the compound in whole grains that binds minerals and blocks their absorption. Less phytic acid means the iron and zinc already present become more available to your body.',
      },
      {
        h: 'The honest caveat',
        p: 'Black rice is a genuinely good grain, not a cure for anything. It works the way most real nutrition works — quietly, as part of a varied diet, over years. Eaten a few mornings a week alongside dal, vegetables and enough sleep, it earns its place. That is the whole claim, and it is enough.',
      },
    ],
  },
  {
    slug: 'how-fresh-batter-makes-better-idly',
    title: 'How Fresh Batter Makes a Better Idly: The Science of Fermentation',
    excerpt:
      'Why a two-day-old batter and a two-week-old one behave completely differently on the steamer — and what to look for.',
    date: '2026-05-21',
    readTime: '6 min read',
    category: 'Behind the Batter',
    art: 'fermentation',
    body: [
      {
        h: 'An idly is mostly trapped air',
        p: 'What separates a good idly from a dense one is structure. Wild lactic acid bacteria and yeasts feed on the starches in rice and dal, releasing carbon dioxide. The protein in urad dal traps that gas in a web of tiny bubbles. Steam expands them, the batter sets, and the bubbles become the soft crumb. Every step of good batter-making exists to protect that structure.',
      },
      {
        h: 'Fermentation has a peak, then a decline',
        p: 'Bacterial activity climbs, plateaus, and falls. At the peak the batter is aerated and mildly tangy. Past it, the cultures exhaust their food, acidity keeps climbing, and the protein network weakens — it can no longer hold gas. A batter well past its peak makes flat, sour idlies no matter how carefully you steam them. Age is not a technique problem; it is a biology problem.',
      },
      {
        h: 'Why cold storage is not a preservative',
        p: 'Refrigeration at 4°C does not stop fermentation, it slows it dramatically. That is precisely what you want: the batter is held near its peak instead of racing past it. Break the cold chain — an hour in a warm car, a fridge door shelf that opens twenty times a day — and it resumes at full speed. This is why we ship in refrigerated vans and why we ask you to refrigerate on arrival.',
      },
      {
        h: 'Grinding temperature matters more than people expect',
        p: 'High-speed industrial grinders generate heat, and heat kills the very cultures the batter needs. Slow stone grinding keeps the batter cool and leaves a slightly coarse texture that holds gas better than an over-smooth paste. It is slower and it costs more. It is also the whole reason the texture works.',
      },
      {
        h: 'How to read your own batter',
        p: 'Good batter has risen visibly, smells pleasantly tangy like fresh curd, and falls off a spoon in a thick ribbon rather than a stream. Stir it gently before pouring — vigorous whisking knocks out the air you are relying on. If it smells sharply sour, has separated badly, or the pack looks swollen, do not use it.',
      },
      {
        h: 'Which is why we grind at 2 AM',
        p: 'Our grinders start before the city wakes so the batter reaches stores hours later, at its peak, cold the entire way. The freshness claim is not marketing language. It is the only method that produces the idly people actually remember from home.',
      },
    ],
  },
]

export const getPost = (slug) => blogPosts.find((p) => p.slug === slug)

export const promises = [
  { icon: 'Sunrise', title: 'Fresh Every Morning', body: 'Ground before dawn and dispatched the same day. Never held over, never re-sold.' },
  { icon: 'Leaf', title: 'Natural Ingredients', body: 'Grains, dal, fenugreek, salt, water. If it is not on that list, it is not in the pack.' },
  { icon: 'Soup', title: 'Traditional Taste', body: 'The recipe our family has cooked for three generations, unchanged by scale.' },
  { icon: 'HeartPulse', title: 'Healthy Living', body: 'Black rice, millet and ragi options so an everyday meal quietly does more for you.' },
]

export const qualityPoints = [
  { icon: 'SprayCan', title: 'Hygienic Processing', body: 'Sanitised surfaces, gloves, caps and masks on every shift, with daily line cleaning logged and signed.' },
  { icon: 'Package', title: 'Food Grade Packaging', body: 'Tamper-evident, food-grade sealed packs printed with the batch code and the true packed-on date.' },
  { icon: 'Thermometer', title: 'Temperature Controlled Storage', body: 'An unbroken 4°C cold chain from the sealing machine to the store refrigerator.' },
  { icon: 'CalendarClock', title: 'Daily Production', body: 'We make to the day\'s orders. Nothing is produced ahead and nothing is carried over to tomorrow.' },
]

export const dealerBenefits = [
  { icon: 'TrendingUp', title: 'High Demand', body: 'Fresh batter is a daily-repeat purchase. Stock turns over faster than almost any other chilled category.' },
  { icon: 'IndianRupee', title: 'Good Profit Margin', body: 'Healthy, transparent margins with slab-based incentives as your monthly volume grows.' },
  { icon: 'Megaphone', title: 'Marketing Support', body: 'Free display fridges for qualifying outlets, branded standees, posters and local campaign support.' },
  { icon: 'Truck', title: 'Fast Delivery', body: 'Refrigerated vans on fixed daily routes, reaching your store before opening hours.' },
]

export const storyMilestones = [
  { year: '2017', title: 'A wet grinder in a home kitchen', body: 'It started with one stone grinder and forty packs a day, sold to neighbours who kept asking for the recipe.' },
  { year: '2019', title: 'The first retail shelf', body: 'Three stores in Coimbatore agreed to stock us. All three are still customers today.' },
  { year: '2021', title: 'Karuppu Kavuni arrives', body: 'We partnered with heritage black rice farmers and launched the batter that would become our signature.' },
  { year: '2023', title: 'A real production unit', body: 'We moved into a purpose-built facility with cold rooms, a packing hall and our own refrigerated vans.' },
  { year: '2025', title: 'Millets join the range', body: 'Multi millet and ragi batters launched after nearly a year of texture trials.' },
  { year: '2026', title: '180 stores and counting', body: 'Now serving six districts, still grinding fresh every single morning.' },
]
