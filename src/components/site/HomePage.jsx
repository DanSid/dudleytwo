import { ArrowRight, CheckCircle2, ExternalLink, Play, Sparkles } from 'lucide-react'
import { products } from '../../data/products'
import { AmazonRatingBadge, CouponStrip, PromoBanner } from './PromoElements'

const shopUrl = 'https://shop.dudleyq.com'

function ProductCard({ product, index }) {
  return (
    <a
      href={product.route}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-[30px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_rgba(10,15,30,0.08)] backdrop-blur no-underline transition duration-500 hover:-translate-y-1"
    >
      <div className="absolute inset-x-5 top-5 h-28 rounded-full blur-3xl" style={{ background: product.accent, opacity: 0.18 }} />
      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ background: product.accentSoft, color: product.accentDeep }}>
            {product.badge}
          </span>
          <span className="text-xs uppercase tracking-[0.24em] text-slate-400">0{index + 1}</span>
        </div>

        <div className="relative mb-6 min-h-[270px] rounded-[28px] bg-[linear-gradient(180deg,#ffffff,rgba(244,244,248,0.9))] p-6">
          <img src={product.heroImage} alt={product.name} className="mx-auto h-[250px] w-auto object-contain transition duration-500 group-hover:scale-105" />
        </div>

        <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{product.eyebrow}</p>
        <h3 className="mt-3 font-display text-3xl text-[#121828]">{product.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-500">{product.tagline}</p>

        <div className="mt-5">
          <AmazonRatingBadge className="shadow-none" />
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: product.accentDeep }}>
            View landing page <ExternalLink size={16} />
          </span>
          <div className="hidden gap-2 md:flex">
            {product.notes.slice(0, 2).map((note) => (
              <span key={note} className="rounded-full border border-black/5 px-3 py-1 text-[11px] text-slate-500">
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0b1020] text-white">
        <div className="mesh-bg" />
        <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 lg:pt-14">
          <PromoBanner />
          <div className="mt-6">
            <CouponStrip />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="relative z-10">
            <span className="eyebrow-dark">
              <Sparkles size={14} />
              Editorial beauty refresh
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
              Dudley Beauty, refreshed with a newer first impression and stronger product storytelling.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              The first landing page now feels more current, and the separate product pages carry over the same premium cues: softer luxury gradients, cleaner hierarchy, stronger hero presentation, Amazon rating signals, and sharper calls to action.
            </p>

            <div className="mt-8">
              <AmazonRatingBadge dark />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#collections" className="primary-pill">
                Explore the collection
              </a>
              <a href={shopUrl} target="_blank" rel="noreferrer" className="secondary-pill-dark">
                Visit shop
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                'Five redesigned product stories',
                'Amazon rating added across key pages',
                'Cards now open each page in a new tab',
              ].map((item) => (
                <div key={item} className="glass-note">
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 grid gap-4 md:grid-cols-2">
            <div className="editorial-panel md:col-span-2">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-[#7b85a5]">Signature selection</p>
                <h2 className="mt-3 font-display text-4xl text-white">Beauty-first product framing</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[products[1], products[2], products[3]].map((product) => (
                  <div key={product.slug} className="rounded-[26px] bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="mb-4 rounded-[22px] bg-white/90 p-4">
                      <img src={product.heroImage} alt={product.name} className="mx-auto h-44 w-auto object-contain" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">{product.eyebrow}</p>
                    <p className="mt-2 text-lg text-white">{product.shortName}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-panel min-h-[320px]">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-[#7b85a5]">Campaign motion</p>
              </div>
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <video src="/assets/redesign/beauty-motion.mp4" autoPlay muted loop playsInline className="h-full min-h-[280px] w-full object-cover" />
              </div>
            </div>

            <div className="editorial-panel min-h-[320px] justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-[#7b85a5]">Collection preview</p>
                <h3 className="mt-3 font-display text-3xl text-white">A softer, cleaner path from discovery to each product page.</h3>
              </div>
              <div className="grid gap-3 rounded-[28px] bg-gradient-to-br from-white to-[#f4f5fa] p-6 md:grid-cols-2">
                {[products[0], products[3], products[4], products[2]].map((item) => (
                  <div key={item.slug} className="rounded-[20px] bg-white p-4 shadow-[0_16px_40px_rgba(12,18,36,0.08)]">
                    <img src={item.heroImage} alt={item.name} className="mx-auto h-32 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="bg-[#f7f4ef] py-20 text-[#121828] md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-light">Signature landing pages</p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">Five refreshed pages with sharper hierarchy, Amazon trust cues, and a newer luxury finish.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-base">
              Each page now carries over the features inspired by the Dudley peppermint reference: a stronger hero mood, visible review trust, cleaner calls to action, and product cards that open in a new tab from the main page.
            </p>
          </div>

          <div className="mb-10 overflow-hidden rounded-[32px] border border-black/5 bg-white p-4 shadow-[0_22px_60px_rgba(10,15,30,0.06)] md:p-6">
            <img src="/assets/redesign/Dudleys All Products NEW.png" alt="Dudley products collection" className="w-full max-h-[800px] object-contain" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="signature" className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[34px] bg-[#101625] p-8 text-white md:p-10">
            <p className="eyebrow-dark">
              <Play size={14} />
              New conversion flow
            </p>
            <h2 className="mt-5 font-display text-4xl">The refreshed interface feels lighter, richer, and more intentional.</h2>
            <p className="mt-5 text-sm leading-8 text-white/70">
              The project now carries a more elevated visual system: premium promo treatment, reusable Amazon rating blocks, better product framing, cleaner CTAs, and a repeating coupon popup that returns every two minutes while the visitor remains on the page.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-white/80">
              {[
                'Premium dark-to-light page rhythm',
                'Stronger image framing and gallery moments',
                'Timed coupon popup linked to Dudley shop',
              ].map((item) => (
                <div key={item} className="glass-note border-white/10 bg-white/5 text-white/80">
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[products[0], products[4]].map((product) => (
              <div key={product.slug} className="rounded-[32px] border border-black/5 bg-[#faf8f5] p-6">
                <div className="mb-5 rounded-[26px] bg-white p-5 shadow-[0_20px_60px_rgba(12,18,36,0.08)]">
                  <img src={product.heroImage} alt={product.name} className="mx-auto h-64 w-auto object-contain" />
                </div>
                <p className="text-xs uppercase tracking-[0.34em] text-slate-400">{product.eyebrow}</p>
                <h3 className="mt-2 font-display text-3xl text-[#121828]">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{product.description}</p>
                <div className="mt-5">
                  <AmazonRatingBadge />
                </div>
                <a href={product.route} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold no-underline" style={{ color: product.accentDeep }}>
                  Open page in new tab <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
