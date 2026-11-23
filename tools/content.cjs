'use strict';
// Content for the Hagiazo Homes site. Edit copy here, then run
//   npm run build
// to regenerate the HTML pages.

const BRAND = {
  name: 'Hagiazo Homes',
  tagline: 'Property, Done Properly.',
  phoneDisplay: '+44 (0) 20 8004 5100',
  phoneTel: '+442080045100',
  whatsapp: 'https://wa.me/442080045100',
  email: 'partnerships@hagiazo-homes.com',
  hq: 'Mayfair & Regional Hubs, UK',
  hqLong: 'Mayfair & Regional Northern Hubs, United Kingdom',
  legalName: 'Hagiazo Homes Ltd',
  year: '2025',
};

const NAV = [
  { href: 'index.html', label: 'Overview', key: 'home' },
  { href: 'engine.html', label: 'The Engine', key: 'engine' },
  { href: 'services.html', label: 'Services', key: 'services' },
  { href: 'partnership.html', label: 'Partnership', key: 'partnership' },
  { href: 'track-record.html', label: 'Track Record', key: 'track-record' },
  { href: 'lease-pipeline.html', label: 'Lease Pipeline', key: 'lease-pipeline' },
  { href: 'contact.html', label: 'Contact', key: 'contact' },
];

const FOOTER_PAGES = [
  { href: 'index.html', label: 'Home (Hero & Overview)' },
  { href: 'engine.html', label: 'The 5-Step Lease Cycle' },
  { href: 'services.html', label: 'Core Operational Areas' },
  { href: 'partnership.html', label: 'Landlord & Investor Models' },
  { href: 'track-record.html', label: 'Case Studies & Portfolio' },
  { href: 'lease-pipeline.html', label: 'Lease Pipeline' },
  { href: 'faq.html', label: 'Frequently Asked Questions (FAQ)' },
  { href: 'contact.html', label: 'Initiate a Conversation (Contact)' },
];

const HERO = {
  badge: 'UK Residential Leasing & Lettings',
  title: 'Hagiazo Homes',
  sub: 'Property, Done Properly.',
  cards: [
    { id: 'blueprint', label: 'Portfolio Blueprint', img: 'assets/arch-blueprint.jpg', alt: 'Portfolio Blueprint',
      blurb: 'Every home we lease starts as a drawing: layout, compliance checklist, furnishing schedule and rent case, agreed with the owner before a key changes hands.' },
    { id: 'victorian', label: 'Victorian Let', img: 'assets/arch-victorian.jpg', alt: 'Victorian Let',
      blurb: 'Period terraces and semis taken on long company leases, brought up to a compliant, modern standard and let to vetted professional households.' },
    { id: 'spatial', label: 'Spatial Geometry', img: 'assets/arch-spatial.jpg', alt: 'Spatial Geometry',
      blurb: 'Light, storage and flow are what tenants pay for. Our interiors studio re-plans tired layouts so each home lets faster and holds its rent.' },
    { id: 'suites', label: 'Executive Suites', img: 'assets/arch-obsidian.jpg', alt: 'Executive Suites',
      blurb: 'Fully serviced, furnished stays for relocating professionals, project directors and clinicians, let on corporate terms at a premium to a standard tenancy.' },
    { id: 'turnkey', label: 'Turnkey Let', img: 'assets/arch-terracotta.jpg', alt: 'Turnkey Let',
      blurb: 'Furnished, dressed and photographed to a fixed specification, so a home is ready to occupy the day the lease begins.' },
    { id: 'refurb', label: 'Adaptive Refurb', img: 'assets/arch-refurb.jpg', alt: 'Adaptive Refurb',
      blurb: 'Compliance-led refurbishment delivered by our own trades: EPC C+, electrical and gas certification, fire safety and licensing, in two to six weeks.' },
    { id: 'family', label: 'Family-Run Discipline', img: 'assets/arch-townhouse.jpg', alt: 'Family-Run Discipline',
      blurb: 'Two generations of the same family sign every lease, pay every landlord and answer every tenant call. We have grown our portfolio, not our bureaucracy.' },
  ],
};

const OVERVIEW = {
  eyebrow: 'The Hagiazo Standard',
  h2a: 'Family-run discipline.',
  h2b: 'Institutional precision.',
  intro: 'Hagiazo Homes bridges the agility of a family-owned landlord-operator with the rigour of institutional asset management. We specialise in long-term residential leasing: guaranteed-rent agreements with property owners, fully managed lettings, serviced stays for professionals, and supported housing leases that regenerate UK housing communities while paying owners reliably and promptly.',
  bullets: [
    { title: 'Guaranteed Rent, Paid Monthly', text: 'Owners receive a fixed rent on the 1st of every month for the full lease term, occupied or not.' },
    { title: 'Hands-on In-House Management', text: 'Our own trades, inspection and compliance team, with no outsourced agency layers or letting fees.' },
  ],
  storyLabel: 'Our Story',
  story: 'Hagiazo Homes began as a family-run landlord with a single conviction: that ordinary UK housing stock, leased and managed properly, can serve property owners and communities at the same time. Two generations on, the same family still signs every lease, pays every owner on the 1st, and answers every tenant call. We have grown our portfolio — not our bureaucracy.',
  stats: [
    { label: 'Lease Benchmark', value: '3–7', unit: 'Year Fixed Terms', icon: 'calendar-check', text: 'Company leases signed with owners for fixed terms with rent reviews pre-agreed at signing.' },
    { label: 'Void Exposure', value: '0%', unit: 'Landlord Voids', icon: 'house', text: 'Vacancies and tenant changeovers are carried by Hagiazo. The owner\'s rent does not stop.' },
    { label: 'Payment Record', value: '100%', unit: 'Rent Paid On Time', icon: 'refresh-cw', text: 'Every landlord payment made in full and on the agreed date since the first lease was signed.' },
  ],
};

const ENGINE = {
  eyebrow: 'The Machinery',
  title: 'The Engine: 5-Step Lease Cycle',
  intro: 'A perpetual occupancy loop engineered to produce repeatable, uncompromised rental income for owners and recurring passive returns for partners.',
  steps: [
    { num: '01', tag: 'Origin', title: 'Source', text: 'Securing off-market landlord, portfolio and probate stock across target growth hubs before it reaches the open rental market.', footLabel: 'Target Pipeline', footValue: '40+ Homes Under Review' },
    { num: '02', tag: 'Agreement', title: 'Secure', text: 'Company lease or guaranteed-rent agreement signed with the owner: fixed term, fixed rent, reviews and exit condition pre-agreed.', footLabel: 'Lease Structure', footValue: '3–7 Year Company Let' },
    { num: '03', tag: 'Refurb', title: 'Add Value', text: 'Compliance-led refresh, furnishing to specification, EPC C+ where required, and turnkey presentation by our in-house studio.', footLabel: 'Delivery Velocity', footValue: '2–6 Weeks On-Site' },
    { num: '04', tag: 'Occupy', title: 'Let', text: 'Vetted professional, contractor or supported-housing occupiers placed; rent collected monthly and the home inspected every quarter.', footLabel: 'Occupancy Benchmark', footValue: '98.2% Historical' },
    { num: '05', tag: 'Compounding', title: 'Renew & Scale', text: 'Leases renewed with the owner; surplus income re-deployed into the next home so the portfolio compounds without capital tied up in bricks.', footLabel: 'Capital Retention', footValue: 'Zero Trapped Capital', dark: true },
  ],
  noteTitle: 'Occupancy Over Vacancy',
  noteText: 'We do not let a home, or an owner\'s rent, sit idle.',
  noteCta: 'Review Lease Terms',
};

const SERVICES = {
  eyebrow: 'Specialist Competencies',
  title: 'Six Core Operational Areas',
  intro: 'A balanced leasing ecosystem spanning guaranteed-rent agreements, fully managed lettings, premium professional stays, block leases and specialised long-term social leases.',
  tabs: [
    { key: 'all', label: 'All Areas (6)' },
    { key: 'guaranteed', label: 'Guaranteed Rent & Portfolio' },
    { key: 'management', label: 'Lettings & Stays' },
    { key: 'supported', label: 'Supported Leases' },
  ],
  items: [
    { cat: 'guaranteed', icon: 'banknote', code: '01 // Guaranteed Income', title: 'Rent-to-Rent & Guaranteed Rent', text: 'A fixed monthly rent paid to the owner for a 3–7 year term, regardless of occupancy. We take on the tenants, the voids and the day-to-day upkeep.', footLabel: 'Landlord Void Exposure', footValue: '0%' },
    { cat: 'management', icon: 'house', code: '02 // Asset Care', title: 'Lettings & Management', text: 'Full management for owners who keep the tenancy in their own name: rigorous tenant vetting, compliance, quarterly inspections and transparent online statements.', footLabel: 'Occupancy Benchmark', footValue: '98.2% Historical' },
    { cat: 'management', icon: 'users', code: '03 // Premium Yield', title: 'Contractor & Professional Stays', text: 'High-yield serviced living tailored for infrastructure project directors, engineering contractors, and medical relocation professionals.', footLabel: 'Revenue Uplift', footValue: '+40% vs Standard AST' },
    { cat: 'supported', icon: 'shield-check', code: '04 // Social Impact', title: 'Supported Housing Leases', text: 'Long-term leases delivering dignified, regulation-compliant homes for elderly and vulnerable residents. Backed by government funding and registered providers, with guaranteed inflation-linked rent and zero maintenance liabilities.', footLabel: 'Lease Length', footValue: '3 to 7 Year Leases' },
    { cat: 'guaranteed', icon: 'building-2', code: '05 // Portfolio Leasing', title: 'Block & Portfolio Leases', text: 'Single-counterparty leases across whole blocks or multi-unit portfolios, giving institutional and larger private owners one tenant, one payment and one point of contact.', footLabel: 'Minimum Agreement', footValue: '3+ Units' },
    { cat: 'guaranteed', icon: 'package', code: '06 // Full Delegation', title: 'Turnkey Rental Portfolios', text: 'End-to-end sourcing, set-up and leasing of income-producing homes for domestic and international investors seeking hands-off UK rental exposure.', footLabel: 'Execution', footValue: '100% Hands-off' },
  ],
};

const WHO = {
  eyebrow: 'Alignment Across The Value Chain',
  title: 'Who We Help',
  intro: 'Every Hagiazo lease is structured to serve a distinct counterparty — from the owner of the bricks to the residents who ultimately call the property home.',
  items: [
    { icon: 'key', title: 'Private & Portfolio Landlords', text: 'Owners seeking a fixed, guaranteed rent with zero voids, no agency fees and no management burden, backed by a solicitor-drafted company lease.' },
    { icon: 'briefcase', title: 'Busy Professionals', text: 'Hands-off, fully managed rental portfolios for those without the time to source, set up or self-manage. We deliver let homes and monthly reporting.' },
    { icon: 'hard-hat', title: 'Contractors & Staff', text: 'Fully furnished, high-spec contractor and professional accommodation tethered to major infrastructure and healthcare relocation programmes.' },
    { icon: 'house', title: 'Tenants & Families', text: 'Well-maintained, energy-efficient homes and dignified supported accommodation delivered in partnership with Registered Providers.' },
  ],
};

const PARTNERSHIP = {
  eyebrow: 'Alignment of Interests',
  title: 'Landlord & Investor Partnership Models',
  intro: 'Transparent, legally secured leasing frameworks tailored to the income certainty you need and the involvement you want.',
  light: {
    label: 'Guaranteed Rent Route', labelRight: 'Zero Voids',
    title: 'Guaranteed Rent Landlord',
    text: 'For owners who prefer fixed predictability. We lease your property on a company let and pay an agreed rent every month for the full term, occupied or not.',
    bullets: [
      ['Fixed Rent:', 'Agreed monthly figure paid on the 1st for a 3–7 year term'],
      ['Void Protection:', 'Rent continues through vacancies and tenant changeovers'],
      ['Upkeep Covered:', 'Routine maintenance and compliance handled in-house'],
      ['Minimum Term:', '36-month company lease with pre-agreed rent reviews'],
    ],
    cta: 'Request Landlord Pack',
  },
  dark: {
    label: 'Income Partner Route', labelRight: 'Co-Investment · Income Share',
    title: 'Portfolio Income Partner',
    text: 'For investors seeking recurring income. Fund the set-up of leased homes — deposits, furnishing, refurbishment — and share in the net rental surplus across the portfolio.',
    bullets: [
      ['Income Split:', '60/40 net rental surplus in your favour, distributed quarterly'],
      ['Term Length:', '24–36 month partnership term with renewal option'],
      ['Security:', 'Registered charge or SPV shareholding options'],
      ['Target Return:', '12%–15% p.a. depending on portfolio mix'],
    ],
    cta: 'Inquire For Income Partnership',
  },
  calc: {
    eyebrow: 'Interactive Projection Model',
    title: 'Rental Income Estimator',
    modeA: 'Guaranteed Rent Landlord',
    modeB: 'Income Partner (60/40)',
  },
  security: {
    title: 'Institutional-Grade Security Protocols',
    items: [
      { icon: 'lock', title: '1. Solicitor-Drafted Leases', text: 'Every company lease and guaranteed-rent agreement is drafted and executed by independent SRA-regulated solicitors.' },
      { icon: 'shield', title: '2. Rent Guarantee Covenant', text: 'The monthly rent is a contractual obligation of Hagiazo Homes Ltd, not contingent on occupancy or tenant payment.' },
      { icon: 'file-text', title: '3. Quarterly Inspection Trails', text: 'Photographic inspection reports, compliance certificates and unvarnished quarterly WhatsApp/portal reporting.' },
    ],
  },
  governance: {
    eyebrow: 'Legal Governance',
    title: 'How Landlord Rent is Secured Step-by-Step',
    steps: [
      { title: 'Lease Execution', text: 'A solicitor-drafted company lease is signed by both parties, fixing the rent, term, review dates and exit condition before we take possession.' },
      { title: 'Compliance & Condition', text: 'Gas, electrical, EPC and licensing checks are completed and a photographic schedule of condition is agreed and signed.' },
      { title: 'Standing-Order Rent', text: 'Rent is paid by standing order on the 1st of every month, regardless of occupancy, with a statement issued to the owner.' },
      { title: 'Quarterly Inspection & Exit', text: 'The home is inspected every quarter and returned at lease end to the agreed schedule of condition, fair wear and tear excepted.' },
    ],
  },
};

const CASES = {
  eyebrow: 'Demonstrated Performance',
  title: 'Case Studies & Active Portfolio',
  items: [
    {
      id: 'brampton', badge: 'Leased & Occupied', title: 'The Brampton Terraces', meta: 'South Yorkshire // Guaranteed Rent Lease',
      img: 'assets/case-brampton.jpg',
      desc: 'Three-bedroom terrace taken on a five-year company lease from a retiring landlord. Delivered a compliance refresh, new kitchen and full furnishing before letting to a professional household.',
      stats: [['Guaranteed Rent', '£1,150 / mo'], ['Set-Up Spend', '£8,500'], ['Achieved Rent', '£1,650 / mo', true], ['Occupancy', '100% (26 Mos)']],
      tiles: [['Owner Rent', '£1,150'], ['Set-Up Spend', '£8,500'], ['Achieved Rent', '£1,650', true]],
      breakdown: [['Guaranteed Rent to Owner', '£1,150 / mo'], ['Refresh, Furnishing & Compliance', '£8,500'], ['Achieved Tenant Rent', '£1,650 / mo'], ['Maintenance & Management Reserve', '£140 / mo'], ['Net Monthly Surplus', '£360 / mo'], ['Set-Up Payback', '24 months'], ['Lease Term Remaining', '34 months'], ['Owner Payments Missed', '0 (100% on time)']],
    },
    {
      id: 'kingsway', badge: 'Leased // HMO Operation', title: 'Kingsway Manor Co-Living', meta: 'Midlands Corridor // Professional Lets',
      img: 'assets/case-kingsway.jpg',
      desc: 'Licensed six-room HMO leased for seven years from a portfolio landlord. Rooms furnished and let individually to engineering contractors and hospital staff.',
      stats: [['Guaranteed Rent', '£2,400 / mo'], ['Set-Up Spend', '£14,000'], ['Gross Room Income', '£4,150 / mo', true], ['Net Cashflow', '£1,180 / mo']],
      tiles: [['Owner Rent', '£2,400'], ['Set-Up Spend', '£14,000'], ['Room Income', '£4,150', true]],
      breakdown: [['Guaranteed Rent to Owner', '£2,400 / mo'], ['Furnishing, Licensing & Fire Safety', '£14,000'], ['Gross Room Income (6 rooms)', '£4,150 / mo'], ['Bills, Cleaning & Broadband', '£430 / mo'], ['Maintenance & Management Reserve', '£140 / mo'], ['Net Monthly Surplus', '£1,180 / mo'], ['Set-Up Payback', '12 months'], ['Average Occupancy (12 Mos)', '97.6%']],
    },
  ],
  pipeline: {
    badge: 'Active Lease Target', right: 'Signing Q2',
    title: 'The St. Jude Rectory', meta: 'North West Hub // 4-Unit Supported Lease',
    desc: 'Four self-contained flats in a converted institutional building, to be leased for seven years to a Registered Provider under heads of terms, with inflation-linked rent and full repairing obligations.',
    stats: [['Target Owner Rent', '£3,200 / mo'], ['Est. Set-Up', '£22,000 Est.'], ['Provider Rent', '£4,900 / mo', true], ['Lease Status', 'Heads of Terms']],
    cta: 'Review Lease Memorandum',
  },
  stats: [
    ['100%', 'Rent Paid On Time', 'Zero missed owner payments'],
    ['98.2%', 'Average Occupancy', 'Across all leased homes'],
    ['3.4 Wks', 'Average Set-Up Duration', 'Lease start to first tenant'],
    ['42', 'Homes Under Lease', 'Across four regional hubs'],
  ],
  cta: { title: 'Want early access to our next lease batch?', text: 'Join our priority list for upcoming professional-let and supported-housing homes.', button: 'Request Lease Memorandum' },
};

const BACKED = {
  eyebrow: 'Capital & Governance',
  title: 'Backed By',
  intro: 'Hagiazo Homes is capitalised and supported by a deliberate, long-term funding base — not short-term opportunism.',
  items: [
    { icon: 'landmark', title: 'Founder Capital', text: 'Principal capital staked first on every lease set-up.' },
    { icon: 'users', title: 'Private Investors', text: 'Long-standing HNW and family-office income partners.' },
    { icon: 'hand-coins', title: 'Registered Providers', text: 'Long-term supported-housing lease counterparties.' },
    { icon: 'church', title: 'Ten Talents', text: 'Faith-aligned stewardship of capital and community.' },
  ],
};

const TESTIMONIALS = {
  eyebrow: 'Landlord & Partner Feedback',
  title: 'Trusted With Homes & Communities',
  intro: 'The measure of an operator is not the first lease, but the second and third that owners choose to sign.',
  items: [
    { quote: 'Rent lands on the 1st, every month, for two years now — including the six weeks the house stood empty between tenants. I have not had a single maintenance call.', name: 'Private Landlord', role: 'Guaranteed Rent · Leeds' },
    { quote: 'We lease through several UK operators. Hagiazo are the only ones who put their own capital into set-up first and treat the inspection calendar as a contractual obligation rather than an aspiration.', name: 'Family Office Principal', role: 'Income Partner · Overseas' },
    { quote: 'The supported housing stock was delivered to specification, fully compliant, and genuinely dignified for our residents. Communication throughout the lease has been faultless.', name: 'Commissioning Manager', role: 'Registered Provider · North West' },
  ],
};

const FAQ = {
  eyebrow: 'Landlord & Investor Due Diligence',
  title: 'Frequently Asked Questions',
  intro: 'Essential clarity on our lease agreements, rent guarantees, void handling, and reporting protocols.',
  searchPlaceholder: 'Search leases, rent, voids...',
  tabs: [
    { key: 'all', label: 'All Topics (7)' },
    { key: 'legal', label: 'Legal & Security' },
    { key: 'income', label: 'Rent & Income' },
    { key: 'cycle', label: 'The 5-Step Cycle' },
    { key: 'intl', label: 'International / Tax' },
  ],
  items: [
    { cat: 'legal', tag: 'Security & Legal', q: 'How is my rent guaranteed as a landlord?', open: true,
      a: 'Your rent is a contractual obligation under a solicitor-drafted company lease between you and Hagiazo Homes Ltd. The rent is fixed for the term and payable on the 1st of every month whether or not the property is occupied, and the agreement sets out the condition in which the home will be returned to you.',
      safeguards: ['Company lease drafted by independent UK SRA-regulated solicitors.', 'Rent paid by standing order from the operating company, never dependent on a tenant paying first.', 'Photographic schedule of condition signed at the start and checked at every quarterly inspection.'] },
    { cat: 'income', tag: 'Rent & Income', q: 'How and when is rent paid?', open: true,
      a: 'Guaranteed Rent Landlords receive their agreed monthly rent on the 1st of each month from the lease start date, with a statement emailed the same day. Portfolio Income Partners receive 60% of the net rental surplus across the homes they have funded, distributed quarterly with a full income and cost schedule. Monthly distributions are available for commitments of £100,000 or greater.',
      safeguards: ['Owner rent is paid before any Hagiazo surplus is taken.', 'Income Partner distributions reconcile to bank statements and the quarterly schedule.', 'Flexible rollover: re-deploy surplus into the next lease batch to compound income.'] },
    { cat: 'legal', tag: 'Lease Terms', q: 'What is the minimum lease term and which properties qualify?',
      a: 'Our standard company lease runs for 36 months, with most owners choosing five or seven years for maximum certainty. We lease houses, flats, licensed HMOs and whole blocks in our regional hubs, provided the property can be brought to a compliant letting standard within our set-up budget. Rent reviews are agreed at signing, typically annually in line with CPI or a fixed step.',
      safeguards: ['Minimum 36-month term; 60 and 84-month options available.', 'Break clauses only where both parties agree them at signing.', 'Set-up works are funded by Hagiazo, not deducted from the owner\'s rent.'] },
    { cat: 'income', tag: 'Timelines & Risk', q: 'What happens if a tenant stops paying or a home stands empty?',
      a: 'Nothing changes for you. Arrears, possession proceedings and void periods are Hagiazo\'s risk under the lease. Your rent continues on the 1st of every month. Our 98.2% historical occupancy rests on multiple occupier channels — professional lets, contractor stays and Registered Provider referrals — so a vacancy is re-let rather than absorbed.',
      safeguards: ['Owner rent is unaffected by arrears or voids.', 'All tenants referenced, right-to-rent checked and deposit protected.', 'Rent guarantee covenant backed by the operating company and founder capital.'] },
    { cat: 'cycle', tag: 'The Model', q: 'How does the 5-Step Lease Cycle keep homes occupied?',
      a: 'Source, Secure, Add Value, Let, Renew & Scale. We only sign leases in hubs where we already have occupier demand, bring every home to a turnkey standard before marketing, and run quarterly inspections so small issues never become void periods. Surplus income funds the next set-up, so the portfolio compounds without leaving capital trapped in bricks.',
      safeguards: ['Set-up completed in 2–6 weeks by in-house trades.', 'Occupier demand verified before the lease is signed.', 'Renewals agreed with owners six months before expiry.'] },
    { cat: 'intl', tag: 'Tax & Overseas', q: 'Can overseas landlords or investors take part?',
      a: 'Yes. Overseas owners can lease UK property to us in exactly the same way; rent is paid gross or net under the Non-Resident Landlord Scheme as HMRC requires. Overseas Income Partners can participate directly or via a UK SPV, subject to standard AML and source-of-funds checks completed by our solicitors.',
      safeguards: ['NRL Scheme registration handled with the owner\'s accountant.', 'AML and KYC completed by SRA-regulated solicitors before any funds move.', 'Quarterly statements suitable for overseas tax reporting.'] },
    { cat: 'legal', tag: 'Reporting & Transparency', q: 'What reporting do I receive during the lease?',
      a: 'Owners receive a monthly rent statement and a quarterly photographic inspection report with compliance certificates attached. Income Partners receive a quarterly portfolio schedule showing rent collected, costs incurred and surplus distributed for every home they have funded, plus unvarnished WhatsApp updates whenever something material happens.',
      safeguards: ['Monthly rent statement and annual compliance pack.', 'Quarterly photographic inspection reports.', 'Direct line to the founding principals, not a call centre.'] },
  ],
  consult: { title: 'Have a bespoke leasing query?', text: 'Our founding principals and legal counsel are available for confidential consultations.', button: 'Speak with a Principal' },
  vault: {
    eyebrow: 'Legal Document Vault', title: 'Standard Landlord Documentation Pack',
    docs: [
      ['1. Company Lease Agreement', 'Drafted under English law specifying the fixed rent, term, review mechanism and return condition.'],
      ['2. Rent Guarantee Covenant', 'The operating company\'s contractual undertaking to pay rent monthly irrespective of occupancy.'],
      ['3. Schedule of Condition & Inventory', 'Photographic record agreed at lease start and used at every quarterly inspection and at exit.'],
    ],
  },
  cta: { title: 'Still have unanswered questions?', text: 'Speak directly with our founding team or legal representatives.', button: 'Direct Consultation' },
};

const CONTACT = {
  eyebrow: 'Immediate Direct Line',
  title: 'Initiate a Conversation',
  intro: 'Whether leasing your property for a guaranteed rent, funding a rental portfolio, or exploring supported housing partnerships.',
  heroBadge: 'Confidential Communication',
  heroIntro: 'Whether leasing your property for a guaranteed rent, funding a rental portfolio, or exploring long-term supported housing leases.',
  types: [
    { key: 'landlord', label: 'Landlord / Property Owner' },
    { key: 'investor', label: 'Income Partner / Investor' },
    { key: 'corporate', label: 'Corporate / Housing Partner' },
  ],
  fields: {
    name: 'Lord / Dr / Mr / Ms...',
    email: 'contact@example.com',
    phone: '+44 (0) 7...',
    detailLabel: 'Property or Portfolio Details',
    detail: 'e.g. 3-bed semi, Leeds — or £50k–£250k',
    notesLabel: 'Notes or Leasing Objectives',
    notes: 'Brief outline of your property, timeframe, or portfolio parameters...',
  },
  cards: [
    { icon: 'phone', title: 'Direct Telephone', sub: 'Monday to Friday, 8:00 AM – 6:30 PM GMT' },
    { icon: 'mail', title: 'Direct Office Email', sub: 'General & Partnership Inquiries' },
    { icon: 'message-circle', title: 'WhatsApp', sub: 'Fastest response channel' },
    { icon: 'map-pin', title: 'Registered Headquarters', sub: 'By appointment only' },
  ],
};

const ENGINE_PAGE = {
  badge: 'Proprietary Leasing Architecture',
  title: 'The Engine: 5-Step Lease Cycle',
  intro: 'A perpetual occupancy loop engineered to generate repeatable, uncompromised rental income for owners and recurring passive cashflow for partners across UK residential homes.',
  stats: [
    ['Guaranteed Rent Paid', '100%', 'Every owner payment made in full on the 1st of the month'],
    ['Set-Up Velocity', '2–6 Weeks', 'In-house trades with guaranteed milestone delivery'],
    ['Occupancy Benchmark', '98.2%', 'Historical occupancy across all leased homes'],
    ['Landlord Void Exposure', '0%', 'Vacancies and changeovers carried entirely by Hagiazo'],
  ],
  phasesEyebrow: 'Execution Lifecycle',
  phasesTitle: 'Interactive Phase Breakdown',
  phases: [
    { tag: 'Origin', title: 'Source — Operational Protocols', text: 'Deep relationships with regional landlords, letting agents, receivers and probate solicitors allow us to secure homes for lease before they are marketed to the public.', benchLabel: 'Target Benchmark', bench: '40+ Homes Under Review', benchSub: 'Live Lease Pipeline', oversight: 'Direct sourcing by founding principals. No sourcing fees, no third-party introducer margins.' },
    { tag: 'Agreement', title: 'Secure — Lease Execution', text: 'A solicitor-drafted company lease fixes the rent, term, review dates and exit condition. The owner\'s first payment is scheduled before we collect the keys.', benchLabel: 'Target Benchmark', bench: '3–7 Year Fixed Terms', benchSub: 'Company Lease Structure', oversight: 'Every lease signed personally by a founding principal and reviewed by independent SRA-regulated solicitors.' },
    { tag: 'Refurb', title: 'Add Value — Turnkey Set-Up', text: 'Compliance certification, EPC improvement, furnishing and styling delivered by our in-house trades and interiors studio to a fixed specification and programme.', benchLabel: 'Target Benchmark', bench: '2–6 Weeks On-Site', benchSub: 'Set-Up Velocity', oversight: 'Direct management of full-time trades. No general contractor or agency markups.' },
    { tag: 'Occupy', title: 'Let — Occupier Placement', text: 'Referenced professional households, contractor teams or Registered Provider residents are placed within days of handover. Rent collected monthly, home inspected quarterly.', benchLabel: 'Target Benchmark', bench: '98.2% Occupancy', benchSub: 'Historical Benchmark', oversight: 'Multiple occupier channels per hub so a vacancy is re-let, not absorbed.' },
    { tag: 'Compounding', title: 'Renew & Scale — Compounding', text: 'Leases are renewed with owners six months before expiry and net surplus is re-deployed into the next set-up, so the portfolio grows without capital tied up in property purchases.', benchLabel: 'Target Benchmark', bench: 'Zero Trapped Capital', benchSub: 'Capital Retention', oversight: 'Renewal terms agreed early; surplus income allocated to pre-scouted pipeline homes.' },
  ],
  phaseCta: 'Inquire on This Cycle',
  tableTitle: 'Traditional Self-Managed Let vs The Hagiazo Lease Cycle',
  tableHead: ['Dimension', 'Standard Self-Managed Let', 'Hagiazo 5-Step Cycle'],
  tableRows: [
    ['Rent Certainty', 'Variable, stops during voids', 'Fixed rent paid monthly for 3–7 years'],
    ['Void Exposure', 'Owner carries 100% of empty periods', 'Zero — vacancies carried by Hagiazo'],
    ['Management Burden', 'Owner, or a 10%–15% agency fee', 'Fully in-house; no agency or letting fees'],
    ['Tenant Risk', 'Owner vets, chases and enforces', 'Vetted occupiers; arrears and compliance handled'],
  ],
  cta: { title: 'Ready to lease through The Engine?', text: 'Explore our guaranteed-rent and income-partner terms.', button: 'View Partnership Models →' },
};

const SERVICES_PAGE = {
  badge: 'Comprehensive UK Leasing Capabilities',
  title: 'Six Core Operational Areas',
  intro: 'From guaranteed-rent leases and fully managed lettings to premium professional stays, block leases and inflation-linked social housing.',
  studio: {
    eyebrow: 'In-House Studio', title: 'EA Interiors',
    p1: 'Our dedicated interiors studio designs, renovates, refurbishes, and styles every Hagiazo home — turning tired, sub-optimal housing stock into desirable homes that let faster and command a premium rent.',
    p2a: 'Led by ', lead: 'Emmanuella Akua', p2b: ', EA Interiors operates as an integrated arm of the leasing team, ensuring specification, budget, and programme stay aligned from first sketch to first tenancy.',
    cta: 'Enquire With EA Interiors',
    cards: [
      { icon: 'palette', title: 'Home Design', text: 'Concept boards, spatial planning, and material palettes tailored to the target tenant profile of each home.' },
      { icon: 'hammer', title: 'Renovation', text: 'Structural and layout-led renovation delivered by our in-house trades, from reconfiguration through to final fix.' },
      { icon: 'paintbrush', title: 'Refurbishment', text: 'Full turnkey refurbishment programmes engineered for durability, energy performance, and letting-standard compliance.' },
      { icon: 'sofa', title: 'Styling & Dressing', text: 'Professional furnishing, inventory curation, and finishing touches that shorten void periods and command premium rents.' },
    ],
  },
  strengths: [
    { icon: 'shield-check', title: 'Contractor Bloat Elimination', text: 'We employ dedicated, full-time trades across plumbing, electrics, plastering, and carpentry, eliminating 20%–30% agency margins and communication overheads.' },
    { icon: 'award', title: 'Compliance-First Due Diligence', text: 'Every home is checked against gas, electrical, EPC, fire safety and licensing requirements before a lease is signed, so no tenancy starts non-compliant.' },
    { icon: 'layers', title: 'Turnkey Tenancy Management', text: 'Hands-off execution from lease signature and set-up through to tenant onboarding, quarterly inspections and automated monthly rent statements.' },
  ],
  cta: { title: 'Looking for a tailored leasing solution?', text: 'Discuss portfolio size, geographical hubs, or social leases.', button: 'Start Lease Consultation' },
};

const PARTNERSHIP_PAGE = {
  badge: 'Institutional Security & Alignment',
  title: 'Landlord & Investor Partnership Models',
  intro: 'Transparent, legally secured leasing frameworks engineered to suit your income certainty and involvement preferences.',
  cta: { title: 'Have questions regarding lease documentation?', text: 'Review our comprehensive FAQ or request our sample lease pack.', a: 'Read Legal FAQ', b: 'Download Lease Pack' },
};

const TRACK_PAGE = {
  badge: 'Verifiable Evidence of Execution',
  title: 'Case Studies & Active Portfolio',
  intro: 'Examine audited line-by-line income figures, occupancy records, and current lease targets open for owners and income partners.',
};

const FAQ_PAGE = {
  badge: 'Transparency & Legal Clarity',
  title: 'Frequently Asked Questions',
  intro: 'Comprehensive answers covering our company leases, guaranteed rent payments, void handling, and landlord safeguards.',
};

// Lease pipeline: homes under review for lease. Figures are indicative.
const PIPELINE = {
  badge: 'Sourcing · What We\'re Screening',
  title: 'Lease Pipeline',
  intro: 'Twelve homes under review for lease. Every figure is corrected against current rental evidence, dated, and given a confidence grade, with Conservative, Base and Upside rent cases you can run yourself.',
  bullets: [
    'Indicative rents, not valuations. Achievable rents are analytical estimates built from local letting evidence and are never a formal RICS appraisal.',
    'Nothing invented. Set-up costs without a quote are marked TBD and count as £0 — so you see exactly what still needs pricing.',
    'Research cut-off 19 September 2026. Licensing, compliance certificates and condition must be checked before any lease is signed.',
  ],
  showing: 'Showing 12 of 12 homes. Addresses, owner details and full evidence are released under NDA to registered partners.',
  baseNote: 'Base case: pay the owner\'s asking rent, let at the base achievable rent. Every assessed home shows how many set-up items are still TBD.',
  baseNoteEm: 'Indicative figures only — not valuations, not advice, not an offer to the public.',
  compare: {
    badge: 'Side by side', title: 'Comparison table',
    intro: 'Base case for every home on the same footing: pay the owner\'s ask, let at the base achievable rent. Click a column to sort. \'Net annual after known costs\' excludes anything still TBD — the count tells you how many items still need a quote.',
    swipe: 'Swipe horizontally to view all columns →',
  },
  // ask = owner's monthly ask, low/high/base = achievable monthly rent, costs = known set-up costs (£), tbd = items unpriced
  items: [
    { id: 'HL-027', stage: 'Signed', live: 'No. 1 · live lease', cat: 'Residential · England', title: 'Grade II listed house in a former manor estate — lease signed', area: 'Buckinghamshire · MK17', spec: 'End-of-terrace house (Grade II listed) · 4/5 bed', ask: 1850, askText: 'Owner ask £1,850 / mo · 5-year term agreed', low: 2600, high: 2950, base: 2800, costs: 9500, tbd: 2, conf: 'High', notes: 'Lease signed 23 Sep 2026 · Rent evidence from three comparable lets reported 28 Sep 2026. Checked 28 Sep 2026.', from: '01 Nov 2026' },
    { id: 'HL-014', stage: 'Validating', cat: 'Residential · England', title: 'Victorian semi, South Norwood — three floors with loft room', area: 'South Norwood, Croydon, London · SE25', spec: 'Semi-detached house · 3 bed + loft room', ask: 2100, askText: '£2,100 / mo owner ask (5-year lease)', low: 2900, high: 3300, base: 3100, costs: 7200, tbd: 3, conf: 'High', notes: 'Viewing 07 Oct 2026 · Rent range — not a valuation. Checked 01 Oct 2026.', from: '15 Dec 2026' },
    { id: 'HL-008', stage: 'Screening', cat: 'Residential · England', title: 'Detached house, Stokenham, South Devon', area: 'Stokenham, Kingsbridge, Devon · TQ7', spec: 'Detached house · 5 bed', ask: 1700, askText: '£1,700 / mo owner ask', low: 2200, high: 2600, base: 2400, costs: 6000, tbd: 4, conf: 'Medium', notes: 'Rent range — not a valuation. Checked 19 Sep 2026.', from: 'TBC' },
    { id: 'HL-028', stage: 'Validating', cat: 'Residential · England', title: '4-bed semi with annexe, Harwich — professional let plus annexe stay', area: 'Harwich, Essex · CO12', spec: 'Semi-detached house · 3 bed + 1-bed annexe + garden office', ask: 1450, askText: '£1,450 / mo owner ask · 3-year minimum', low: 2050, high: 2350, base: 2200, costs: 5400, tbd: 3, conf: 'High', notes: 'Viewing 13 Oct 2026 · Annexe let separately on corporate terms. Checked 01 Oct 2026.', from: '01 Jan 2027' },
    { id: 'HL-002', stage: 'Screening', cat: 'Rural · Wales', title: 'Farmhouse, cottage & c.11 acres, Bangor', area: 'Mynydd Llandygai, Bangor, Gwynedd · LL57', spec: 'Rural estate / farmhouse + cottage · 3-bed cottage + farmhouse', ask: 1900, askText: '£1,900 / mo owner ask (both dwellings)', low: 2400, high: 2900, base: 2650, costs: 8800, tbd: 5, conf: 'Low–Medium', notes: 'Rent range — not a valuation. Checked 19 Sep 2026.', from: 'TBC' },
    { id: 'HL-001', stage: 'Heads of Terms', cat: 'HMO · England', title: 'Licensed 7-room HMO, Bedford', area: 'Bedford, Bedfordshire · MK40', spec: 'Licensed HMO · 7 rooms · 3 bathrooms', ask: 2600, askText: '£2,600 / mo owner ask · 7-year term', low: 4200, high: 4900, base: 4550, costs: 11500, tbd: 2, conf: 'High', notes: 'Heads of terms issued 25 Sep 2026 · Room rents from current occupancy schedule. Checked 26 Sep 2026.', from: '01 Dec 2026' },
    { id: 'HL-025', stage: 'Validating', cat: 'Residential · England', title: '3-bed semi, New Addington', area: 'New Addington, Croydon, London · CR0', spec: 'Semi-detached house · 3 bed', ask: 1650, askText: '£1,650 / mo owner ask', low: 2000, high: 2250, base: 2100, costs: 4200, tbd: 2, conf: 'Medium', notes: 'Viewing 07 Oct 2026 · Rent range — not a valuation. Checked 26 Sep 2026.', from: '01 Dec 2026' },
    { id: 'HL-006', stage: 'Screening', cat: 'Residential · England', title: 'Village cottage, Stoke Goldington', area: 'Stoke Goldington, Newport Pagnell · MK16', spec: 'Cottage · 2 bed', ask: 1150, askText: '£1,150 / mo owner ask', low: 1400, high: 1650, base: 1525, costs: 3800, tbd: 3, conf: 'Medium', notes: 'Rent range — not a valuation. Checked 19 Sep 2026.', from: 'TBC' },
    { id: 'HL-023', stage: 'Screening', cat: 'Flats · England', title: 'Freehold block of 3 — maisonettes', area: 'New Bradwell, Milton Keynes · MK13', spec: 'Block lease — 3 self-contained units · 2 x 2-bed maisonettes + 1 x 1-bed', ask: 2700, askText: '£2,700 / mo owner ask for the block', low: 3450, high: 3900, base: 3650, costs: 9000, tbd: 4, conf: 'Medium', notes: 'Single block lease proposed to the freeholder. Checked 22 Sep 2026.', from: 'TBC' },
    { id: 'HL-024', stage: 'Heads of Terms', cat: 'Care Home · England', title: '30-room assisted living home + cottages', area: 'Buckinghamshire', spec: 'Assisted living home — 30 rooms + 10 cottages · Registered Provider lease', ask: 14500, askText: '£14,500 / mo owner ask · 10-year FRI lease', low: 18500, high: 21000, base: 19500, costs: 42000, tbd: 6, conf: 'Low–Medium', notes: 'Provider heads of terms under negotiation · Income valued on provider rent. Checked 22 Sep 2026.', from: 'Q2 2027' },
    { id: 'HL-016', stage: 'Screening', cat: 'Residential · England', title: 'Victorian terrace, Manor Park', area: 'Manor Park, Newham, London · E12', spec: 'Mid-terrace house · 4 bed', ask: 2750, askText: '£2,750 / mo owner ask', low: 2600, high: 2900, base: 2750, costs: 3600, tbd: 2, conf: 'Low–Medium', notes: 'Ask at the top of the evidence range — margin only on a room-by-room let. Checked 19 Sep 2026.', from: 'TBC' },
    { id: 'HL-018', stage: 'Passed', cat: 'Flats · England', title: 'Town-centre precinct, 25 flats approved', area: 'Stony Stratford, Milton Keynes · MK11', spec: 'Prior approval for residential conversion · 25 flats · not yet built', ask: null, askText: 'Not yet lettable — conversion incomplete', low: null, high: null, base: null, costs: 0, tbd: 0, conf: 'Low', notes: 'Passed: revisit on practical completion. Checked 22 Sep 2026.', from: '—' },
  ],
};

module.exports = { BRAND, NAV, FOOTER_PAGES, HERO, OVERVIEW, ENGINE, SERVICES, WHO, PARTNERSHIP, CASES, BACKED, TESTIMONIALS, FAQ, CONTACT, ENGINE_PAGE, SERVICES_PAGE, PARTNERSHIP_PAGE, TRACK_PAGE, FAQ_PAGE, PIPELINE };
