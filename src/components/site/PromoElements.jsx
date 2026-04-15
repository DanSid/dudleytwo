import { Gift, ShoppingBag, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { amazonRating, couponOffer } from '../../data/products'

const mainDudleyUrl = 'https://shop.dudleyq.com'

export function AmazonRatingBadge({ dark = false, className = '' }) {
  return (
    <div
      className={`inline-flex w-fit flex-wrap items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_14px_36px_rgba(10,15,30,0.12)] ${
        dark ? 'border-white/10 bg-white/10 text-white backdrop-blur-xl' : 'border-black/5 bg-white text-[#121828]'
      } ${className}`}
    >
      <div className="flex items-center gap-1 text-[#f4b400]" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <div className={`flex flex-wrap items-baseline gap-2 ${dark ? 'text-white' : 'text-[#121828]'}`}>
        <span className="text-base font-extrabold">
          {amazonRating.score} {amazonRating.label}
        </span>
        <span className={`text-sm font-semibold ${dark ? 'text-white/70' : 'text-slate-500'}`}>{amazonRating.reviews}</span>
      </div>
    </div>
  )
}

export function PromoBanner({ className = '' }) {
  return (
    <a
      href={mainDudleyUrl}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex w-full max-w-[570px] items-center justify-between gap-4 rounded-full border border-[#d2b15c]/30 bg-[linear-gradient(135deg,#b79033_0%,#d8b252_50%,#b58d35_100%)] px-5 py-4 text-white shadow-[0_20px_60px_rgba(201,164,69,0.28)] transition duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <span className="inline-flex items-center gap-3 text-left text-base font-semibold md:text-[18px]">
        <ShoppingBag size={20} />
        {couponOffer.cta}
      </span>
      <span className="hidden text-white/80 transition group-hover:translate-x-0.5 sm:inline">→</span>
    </a>
  )
}

export function CouponStrip({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <div className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#c9a445_0%,#e4c469_100%)] px-6 py-3 text-[15px] font-extrabold uppercase tracking-[0.28em] text-[#12204a] shadow-[0_18px_40px_rgba(201,164,69,0.18)]">
        {couponOffer.code}
      </div>
      <p className="text-base text-white/70 md:text-lg">= {couponOffer.text}</p>
    </div>
  )
}

export function CouponPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const openPopup = () => setIsOpen(true)
    const timeoutId = window.setTimeout(openPopup, 120000)
    const intervalId = window.setInterval(openPopup, 120000)

    return () => {
      window.clearTimeout(timeoutId)
      window.clearInterval(intervalId)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-[#09101d]/60 p-4 backdrop-blur-sm md:items-center">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0f1830] p-6 text-white shadow-[0_24px_80px_rgba(5,10,25,0.5)] md:p-8">
        <button
          type="button"
          aria-label="Close coupon popup"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="absolute inset-x-6 top-0 h-36 rounded-full bg-[#c9a445]/25 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d2b15c]/30 bg-[#d2b15c]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#efd58a]">
            <Gift size={14} /> Limited offer
          </div>
          <h3 className="mt-5 max-w-lg font-display text-4xl leading-tight text-white md:text-5xl">{couponOffer.code}</h3>
          <p className="mt-3 max-w-lg text-base leading-7 text-white/70 md:text-lg">Get {couponOffer.text}. Use the code on the Dudley shop and continue shopping from the full collection.</p>

          <div className="mt-6">
            <AmazonRatingBadge dark />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mainDudleyUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-pill"
            >
              Go to Dudley shop
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="secondary-pill-dark"
            >
              Keep browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
