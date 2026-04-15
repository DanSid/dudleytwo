import { ArrowLeft, ArrowRight, Check, PlayCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { AmazonRatingBadge, CouponStrip, PromoBanner } from './PromoElements'

function RelatedProducts({ currentSlug }) {
  const related = products.filter((product) => product.slug !== currentSlug).slice(0, 3)

  return (
    <section className="bg-[#f7f3ee] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow-light">More signature pages</p>
            <h2 className="mt-2 font-display text-4xl text-[#121828]">Continue through the Dudley collection.</h2>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 no-underline">
            Back to home <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {related.map((product) => (
            <a
              key={product.slug}
              href={product.route}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-black/5 bg-white p-5 no-underline shadow-[0_18px_50px_rgba(12,18,36,0.08)] transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 rounded-[22px] bg-[#f8f8fb] p-5">
                <img src={product.heroImage} alt={product.name} className="mx-auto h-48 w-auto object-contain" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.eyebrow}</p>
              <h3 className="mt-2 font-display text-2xl text-[#121828]">{product.shortName}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">{product.tagline}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductPage({ product }) {
  return (
    <main className="bg-[#f7f3ee] text-[#121828]">
      <section className="relative overflow-hidden bg-[#0b1020] text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 18% 18%, ${product.accent} 0%, transparent 28%), radial-gradient(circle at 82% 14%, rgba(255,255,255,0.12) 0%, transparent 22%), radial-gradient(circle at 72% 68%, ${product.accent}40 0%, transparent 24%)`,
          }}
        />

        <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8">
          <PromoBanner />
          <div className="mt-6">
            <CouponStrip />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
          <div className="relative z-20 flex gap-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 no-underline">
              <ArrowLeft size={16} /> Back to home
            </Link>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="relative z-10">
              <span className="eyebrow-dark">
                <Sparkles size={14} />
                {product.eyebrow}
              </span>
              <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.96] md:text-7xl">{product.name}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">{product.description}</p>

              <div className="mt-6">
                <AmazonRatingBadge dark />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {product.notes.map((note) => (
                  <span key={note} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/70">
                    {note}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href={product.shopLink} target="_blank" rel="noreferrer" className="primary-pill">
                  Shop product
                </a>
                <a href="#ritual" className="secondary-pill-dark">
                  View routine
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="rounded-[28px] bg-gradient-to-b from-white via-[#f7f7fb] to-[#eef0f6] p-8">
                  <img src={product.heroImage} alt={product.name} className="mx-auto h-[390px] w-auto object-contain md:h-[520px]" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/40">Signature note</p>
                  <p className="mt-3 font-display text-3xl text-white">{product.callout}</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/40">Amazon social proof</p>
                  <div className="mt-4">
                    <AmazonRatingBadge dark className="shadow-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[32px] bg-[#111726] p-6 text-white md:p-8">
            <div className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-white/40">
              <PlayCircle size={15} /> Motion moment
            </div>
            <video src={product.video} autoPlay muted loop playsInline className="h-full min-h-[320px] w-full rounded-[26px] object-cover" />
          </div>

          <div className="rounded-[32px] border border-black/5 bg-[#f8f6f2] p-8 md:p-10">
            <p className="eyebrow-light">Page redesign direction</p>
            <h2 className="mt-3 font-display text-4xl text-[#121828]">A cleaner story, stronger visuals, and a more luxurious shopping mood.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {product.highlights.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_14px_40px_rgba(12,18,36,0.06)]">
                  <p className="text-sm font-semibold" style={{ color: product.accentDeep }}>
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ee] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-light">Gallery</p>
              <h2 className="mt-2 font-display text-4xl text-[#121828]">Updated product imagery placed into a more refined layout.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              The page now uses clean framing, airy backgrounds, layered cards, and a visible review signal so the photography feels premium instead of purely functional.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="rounded-[30px] bg-[#111726] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.32em] text-white/40">Design mood</p>
              <h3 className="mt-3 font-display text-4xl">Luxury beauty, but still accessible.</h3>
              <p className="mt-4 text-sm leading-8 text-white/70">
                Rounded editorial cards, restrained gradients, soft shadows, generous whitespace, and the Amazon trust badge give this landing page a more current beauty-industry feel while keeping the product message clear.
              </p>
              <div className="mt-8 space-y-3">
                {product.notes.map((note) => (
                  <div key={note} className="glass-note border-white/10 bg-white/5 text-white/80">
                    <Check size={16} />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {product.gallery.map((image, index) => (
                <div key={image} className={`rounded-[30px] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(12,18,36,0.06)] ${index === 0 ? 'md:col-span-2' : ''}`}>
                  <div className="flex h-full items-center justify-center rounded-[24px] bg-[#f9f9fc] p-6">
                    <img src={image} alt={`${product.name} view ${index + 1}`} className={`w-full object-contain ${index === 0 ? 'max-h-[420px]' : 'max-h-[320px]'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="description" className="bg-white py-16 md:py-20">
  <div className="mx-auto max-w-7xl px-5 md:px-8">
    <div className="rounded-[32px] border border-black/5 bg-[#f8f6f2] p-8 md:p-10">
      <p className="eyebrow-light">Product Details</p>
      <h2 className="mt-3 font-display text-4xl text-[#121828]">Detailed look at craftsmanship and design.</h2>
      
      {/* Container for both image and video */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {product.detailImage && (
          <div className="flex h-full items-center justify-center rounded-[24px] bg-[#f9f9fc] p-6">
            <img 
              src={product.detailImage} 
              alt={`${product.name} detailed view`} 
              className="w-full max-h-[600px] rounded-[20px] object-contain" 
            />
          </div>
        )}
        
        {product.detailVideo && (
          <div className="flex h-full items-center justify-center rounded-[24px] bg-[#f9f9fc] p-6">
            <video 
              src={product.detailVideo} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full max-h-[600px] rounded-[20px] object-contain"
            />
          </div>
        )}
      </div>
      
      {/* Fallback if only gallery image is available */}
      {!product.detailImage && !product.detailVideo && (
        <div className="mt-8 flex h-full items-center justify-center rounded-[24px] bg-[#f9f9fc] p-6">
          <img 
            src={product.gallery[product.gallery.length - 1]} 
            alt={`${product.name} detailed view`} 
            className="w-full max-h-[600px] rounded-[20px] object-contain" 
          />
        </div>
      )}
    </div>
  </div>
</section>

{product.extraImages && product.extraImages.length > 0 && (
  <section className="bg-white py-16 md:py-20">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="rounded-[32px] border border-black/5 bg-[#f8f6f2] p-8 md:p-10">
        <p className="eyebrow-light">Additional Views</p>
        <h2 className="mt-3 font-display text-4xl text-[#121828]">In All Your Hair Needs Dudley Beauty Products got You Covered</h2>
        <div className={`mt-8 grid gap-6 ${product.extraImages.length === 1 ? 'place-items-center' : 'grid-cols-1 md:grid-cols-2'}`}>
          {product.extraImages.map((image, index) => (
            <div key={index} className="flex h-full items-center justify-center rounded-[24px] bg-[#f9f9fc] p-6">
              <img 
                src={image} 
                alt={`${product.name} additional view ${index + 1}`} 
                className="w-full max-h-[500px] object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}
      <section id="ritual" className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="rounded-[32px] border border-black/5 bg-[#faf9f6] p-8 md:p-10">
            <p className="eyebrow-light">Routine</p>
            <h2 className="mt-3 font-display text-4xl text-[#121828]">A simple ritual flow for the landing page.</h2>
            <div className="mt-8 space-y-4">
              {product.routine.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_12px_32px_rgba(12,18,36,0.05)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ background: product.accent }}>{`0${index + 1}`}</div>
                  <div>
                    <p className="text-base font-semibold text-[#121828]">{step}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-500">Presented in a clearer step-by-step layout so visitors can immediately understand how the product fits into the routine.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] p-8 text-white md:p-10" style={{ background: `linear-gradient(160deg, ${product.accentDeep}, #0b1020 72%)` }}>
            <p className="eyebrow-dark">Why this redesign lands better</p>
            <h2 className="mt-3 font-display text-4xl">The page now feels like a premium brand destination, not just a product detail page.</h2>
            <p className="mt-5 text-sm leading-8 text-white/70">
              Better hierarchy, more intentional image use, softer luxury styling, visible Amazon review trust, and clearer section transitions help the site feel more current and attractive while preserving a straightforward shopping path.
            </p>
            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Primary action</p>
              <a href={product.shopLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#121828] no-underline">
                Shop Dudley <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={product.slug} />
    </main>
  )
}
