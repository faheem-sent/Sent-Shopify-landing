/**
 * All sample content for the Sent Studio landing page (§6).
 * Nothing here is real: it is a sample catalogue for a preview build.
 */

export type Product = { n: string; p: string; bg: string; fg: string };

export type Niche = {
  id: string;
  label: string;
  name: string;
  domain: string;
  hero: string;
  tagline: string;
  accent: string;
  products: Product[];
};

export type Style = {
  id: string;
  label: string;
  swatch: string;
  ground: string;
  ink: string;
  sub: string;
  line: string;
  headFont: string;
  headWeight: number;
  headSize: string;
  headTrack: string;
  navCase: 'uppercase' | 'none';
  navTrack: string;
  navSize: string;
  radius: string;
  heroH: string;
  heroAlign: 'flex-start' | 'center' | 'flex-end';
};

export type AiEdit = { id: 'banner' | 'premium' | 'bundle'; label: string; user: string; reply: string };

/* ---------------------------------------------------------------- §6a */

export const niches: Niche[] = [
  {
    id: 'ceramics',
    label: 'Ceramics',
    name: 'Kiln & Clay',
    domain: 'kilnandclay.com',
    hero: 'Table, set.',
    tagline: 'Hand-thrown pieces for everyday tables.',
    accent: '#6E7A6A',
    products: [
      { n: 'Speckled mug', p: '$34', bg: '#E9E4DA', fg: '#BFB5A4' },
      { n: 'Wide serving bowl', p: '$68', bg: '#DEE2DB', fg: '#A7B0A4' },
      { n: 'Bud vase', p: '$28', bg: '#EEE8DE', fg: '#C8BBA7' },
      { n: 'Dinner plates, set of four', p: '$120', bg: '#E4E1D8', fg: '#B3AD9B' },
    ],
  },
  {
    id: 'fashion',
    label: 'Fashion',
    name: 'Maren Atelier',
    domain: 'marenatelier.com',
    hero: 'The linen edit.',
    tagline: 'Slow-made clothing, cut in small runs.',
    accent: '#8A6C50',
    products: [
      { n: 'Oversized linen shirt', p: '$128', bg: '#E8DFD3', fg: '#C3AD96' },
      { n: 'Wide-leg trouser', p: '$96', bg: '#DDD4C9', fg: '#B19F8C' },
      { n: 'Bouclé knit', p: '$145', bg: '#EEE7DC', fg: '#CBB8A2' },
      { n: 'Everyday cotton tee', p: '$42', bg: '#E3DDD4', fg: '#BBAD9B' },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee',
    name: 'Norte Roasters',
    domain: 'norteroasters.com',
    hero: 'Roasted Tuesday. Yours Thursday.',
    tagline: 'Single-origin, roasted the day it ships.',
    accent: '#8A5A34',
    products: [
      { n: 'Ethiopia — Guji', p: '$22', bg: '#E6DACD', fg: '#A98A6C' },
      { n: 'Colombia — Huila', p: '$19', bg: '#DFD2C4', fg: '#9E7C5E' },
      { n: 'Decaf, house blend', p: '$18', bg: '#EAE1D6', fg: '#B49781' },
      { n: 'Pour-over starter kit', p: '$54', bg: '#DCD6CC', fg: '#A08E7B' },
    ],
  },
  {
    id: 'skincare',
    label: 'Skincare',
    name: 'Field Notes Skin',
    domain: 'fieldnotesskin.com',
    hero: 'The whole routine.',
    tagline: "Six products. Nothing you don't need.",
    accent: '#5E7A6B',
    products: [
      { n: 'Barrier cream', p: '$38', bg: '#E4EAE3', fg: '#AFC0B1' },
      { n: 'Gentle cleanser', p: '$26', bg: '#EAEDE6', fg: '#BAC6B6' },
      { n: 'Vitamin C drops', p: '$54', bg: '#EEE9DD', fg: '#CBBE9C' },
      { n: 'Daily SPF 50 fluid', p: '$32', bg: '#E7E7E1', fg: '#B6B7AB' },
    ],
  },
  {
    id: 'electronics',
    label: 'Desk gear',
    name: 'Volt Supply',
    domain: 'voltsupply.com',
    hero: 'Everything in reach.',
    tagline: 'Desk gear that earns its space.',
    accent: '#3F5E7A',
    products: [
      { n: '65W GaN charger', p: '$49', bg: '#E2E5E9', fg: '#A9B3BF' },
      { n: 'Braided USB-C cable', p: '$19', bg: '#DCDFE4', fg: '#9EA8B4' },
      { n: 'Low-profile keypad', p: '$89', bg: '#E6E8EA', fg: '#B0B6BC' },
      { n: 'Under-desk cable tray', p: '$24', bg: '#DEE1E3', fg: '#A5ACB2' },
    ],
  },
  {
    id: 'jewelry',
    label: 'Jewellery',
    name: 'Sable Fine',
    domain: 'sablefine.com',
    hero: 'Wear it on a Tuesday.',
    tagline: 'Solid gold, made to be worn every day.',
    accent: '#8A6A2E',
    products: [
      { n: 'Signet ring', p: '$340', bg: '#EDE6D8', fg: '#CDB584' },
      { n: 'Fine chain, 16"', p: '$210', bg: '#E7E1D5', fg: '#C5AD7F' },
      { n: 'Huggie hoops', p: '$180', bg: '#F0EADD', fg: '#D3BE93' },
      { n: 'Stacking band', p: '$150', bg: '#E5DFD2', fg: '#C0A87A' },
    ],
  },
];

/* ---------------------------------------------------------------- §6b */

export const styles: Style[] = [
  {
    id: 'minimal',
    label: 'Minimal',
    swatch: '#FAF9F5',
    ground: '#FAF9F5',
    ink: '#17171A',
    sub: '#63636B',
    line: '#E4E1DA',
    headFont: 'Poppins',
    headWeight: 500,
    headSize: '28px',
    headTrack: '-1.1px',
    navCase: 'uppercase',
    navTrack: '0.14em',
    navSize: '9px',
    radius: '2px',
    heroH: '128px',
    heroAlign: 'flex-start',
  },
  {
    id: 'editorial',
    label: 'Editorial',
    swatch: '#F4EFE7',
    ground: '#F4EFE7',
    ink: '#231F1A',
    sub: '#665A4E',
    line: '#DFD5C6',
    headFont: 'Instrument Serif',
    headWeight: 400,
    headSize: '42px',
    headTrack: '-0.5px',
    navCase: 'none',
    navTrack: '0.02em',
    navSize: '11px',
    radius: '2px',
    heroH: '146px',
    heroAlign: 'center',
  },
  {
    id: 'bold',
    label: 'Bold',
    swatch: '#121214',
    ground: '#121214',
    ink: '#F7F5F2',
    sub: '#93909B',
    line: '#2B2B30',
    headFont: 'Poppins',
    headWeight: 600,
    headSize: '32px',
    headTrack: '-1.5px',
    navCase: 'none',
    navTrack: '0.02em',
    navSize: '11px',
    radius: '12px',
    heroH: '134px',
    heroAlign: 'flex-end',
  },
];

export const defaultNicheId = 'ceramics';
export const defaultStyleId = 'editorial';

/* ---------------------------------------------------------------- §6c */

export const aiEdits: AiEdit[] = [
  {
    id: 'banner',
    label: 'Add a free-shipping banner',
    user: 'Add a free shipping banner over $75.',
    reply:
      'Added to the top of every page. It follows your discount rules, so it disappears automatically if you change the threshold.',
  },
  {
    id: 'premium',
    label: 'Make it feel more expensive',
    user: 'Make it feel more expensive.',
    reply:
      'More air between the products, a quieter palette and a serif for the headings. Prices sit under the name instead of beside it.',
  },
  {
    id: 'bundle',
    label: 'Offer three for less',
    user: 'Offer a discount when someone buys three.',
    reply:
      'Added a bundle block under the grid and an automatic 15% discount at checkout. No app needed.',
  },
];

/* ---------------------------------------------------------------- §8.3 */

export const compareNow = [
  {
    title: 'A paid theme you still have to fight',
    detail: "Every layout change is someone else's template, bent as far as it goes.",
  },
  {
    title: 'An app for each missing feature',
    detail: 'Reviews, upsells, bundles, popups — each one its own subscription and its own slowdown.',
  },
  {
    title: 'A developer for anything custom',
    detail: 'A landing page for a drop becomes a ticket, a quote and a week of waiting.',
  },
  {
    title: 'A bill you can no longer read in one line',
    detail: 'Plan, theme licence, apps, and the ones you forgot to cancel.',
  },
];

export const compareHere = [
  {
    title: 'A store written for your catalogue',
    detail:
      'Layout, type and pacing chosen around what you actually sell — not a template with your logo dropped in.',
  },
  {
    title: 'Checkout, inventory and discounts included',
    detail: 'The parts you were paying apps for are part of the product.',
  },
  {
    title: 'Every change is a sentence',
    detail: 'A new landing page, a seasonal restyle, a size guide — ask, look, publish.',
  },
  {
    title: 'One price, one line',
    // [YOUR PRICE] is a deliberate placeholder — see PLACEHOLDERS.md.
    detail: '[YOUR PRICE] a month. No theme licence, no app bill, no per-feature upgrade.',
  },
];

/* ---------------------------------------------------------------- §8.4 */

export const migrationItems = [
  { full: 'Products and variants', short: 'Products' },
  { full: 'Images and alt text', short: 'Images' },
  { full: 'Collections', short: 'Collections' },
  { full: 'Customers', short: 'Customers' },
  { full: 'Order history', short: 'Order history' },
  { full: 'Discount codes', short: 'Discount codes' },
  { full: 'Your domain', short: 'Your domain' },
  { full: 'URL redirects, so search keeps up', short: 'URL redirects' },
];

export const importProgress = [
  { label: 'Products', count: '248 found', pct: 100 },
  { label: 'Images', count: '1,104 found', pct: 86 },
  { label: 'Customers and orders', count: 'in progress', pct: 54 },
];

/* ---------------------------------------------------------------- §8.6 */

export type Feature = {
  icon: 'card' | 'box' | 'tag' | 'list' | 'globe' | 'chart';
  title: string;
  shortTitle: string;
  body: string;
  shortBody: string;
};

export const features: Feature[] = [
  {
    icon: 'card',
    title: 'Checkout and payments',
    shortTitle: 'Checkout',
    body: "Cards, wallets and local methods through your own payment provider — one checkout, not a redirect to somebody else's.",
    shortBody: 'Cards, wallets and local methods through your own provider.',
  },
  {
    icon: 'box',
    title: 'Products and stock',
    shortTitle: 'Products and stock',
    body: 'Variants, options and stock counts that stay in step across every page they appear on.',
    shortBody: 'Variants, options and stock counts, always in step.',
  },
  {
    icon: 'tag',
    title: 'Discounts and gift cards',
    shortTitle: 'Discounts',
    body: 'Codes, automatic offers and gift cards, without adding another subscription to the pile.',
    shortBody: 'Codes, automatic offers and gift cards, included.',
  },
  {
    icon: 'list',
    title: 'Orders and fulfilment',
    shortTitle: 'Orders',
    body: 'One queue for orders, refunds and shipping — the same place your team already works.',
    shortBody: 'One queue for orders, refunds and shipping.',
  },
  {
    icon: 'globe',
    title: 'Your domain, your ranking',
    shortTitle: 'Domain and SEO',
    body: 'Keep the address you already own. Old product URLs redirect, so the traffic you earned follows you.',
    shortBody: 'Keep your address. Old URLs redirect.',
  },
  {
    icon: 'chart',
    title: 'Numbers that fit on a screen',
    shortTitle: 'Numbers',
    body: 'Visits, conversion and revenue per product — the four numbers you actually check, not forty you never open.',
    shortBody: 'Visits, conversion and revenue per product.',
  },
];

/* ---------------------------------------------------------------- §6d */

export const faqs = [
  {
    q: 'Do I have to move the whole store at once?',
    a: 'No. The usual path is to import your catalogue, build the store, sit on it for a few days behind a preview address, and only point your domain when you are happy. Until that moment nothing about your Shopify store changes.',
  },
  {
    q: 'What happens to my Shopify store afterwards?',
    a: 'It keeps running until you cancel it yourself. We never touch your Shopify account beyond reading the catalogue you asked us to import, and you can keep both live in parallel while you compare.',
  },
  {
    q: 'Can I keep my payment provider?',
    // [CONFIRM: …] is a deliberate placeholder — see PLACEHOLDERS.md.
    a: 'Connect the provider you already use and payouts carry on landing in the same account. [CONFIRM: list the providers you support at launch.]',
  },
  {
    q: 'Will I lose the search traffic I have built up?',
    a: 'The import brings your product URLs across and sets up redirects from the old paths, so links from Google, your emails and anyone who bookmarked a product still land on the right page.',
  },
  {
    q: 'What if it turns out not to be for me?',
    a: 'Export everything — products, customers, orders — in the same shape you imported it, and take it wherever you like. No exit fee, no lock-in on your own data.',
  },
  {
    q: 'Is this page a real store?',
    a: 'The preview above is a sample catalogue running in the real builder, so what you click is what it does. It is not a working shop, and nothing you type here is saved.',
  },
];

/* ---------------------------------------------------------------- §8.1 / §8.9 */

export const navLinks = [
  { label: 'Why switch', href: '#why-switch' },
  { label: 'Moving over', href: '#moving-over' },
  { label: "What's built in", href: '#built-in' },
  { label: 'Questions', href: '#questions' },
];

export const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: "What's built in", href: '#built-in' },
      { label: 'Moving from Shopify', href: '#moving-over' },
      { label: 'Pricing', href: '#final-cta' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Sent.bio', href: '#top' },
      { label: 'Support', href: '#questions' },
      { label: 'Contact', href: '#questions' },
    ],
  },
];
