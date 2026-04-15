import { Link, NavLink } from 'react-router-dom'
import { products } from '../../data/products'

const shopUrl = 'https://shop.dudleyq.com'

export function SiteShell({ children }) {
  return <div className="luxury-shell">{children}</div>
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 text-white no-underline">
          <img src="/assets/New Dudley Logo Med.png" alt="Dudley Beauty" className="h-9 w-auto object-contain brightness-0 invert" />
          <div>
            {/* <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">Redesigned experience</p> */}
            <p className="text-sm font-medium text-white/90">Dudley Beauty</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
           <NavLink to="/" className="nav-pill">Home</NavLink>
          <a href="#collections" className="nav-pill">Collections</a>
          <a href="#signature" className="nav-pill">Signature looks</a>
          {products.map((product) => (
            <NavLink key={product.slug} to={product.route} className="nav-pill">
              {product.shortName}
            </NavLink>
          ))}
        </nav>

        <a href={shopUrl} target="_blank" rel="noreferrer" className="primary-pill">
          Shop Dudley
        </a>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090d1a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Beauty-led redesign</p>
          <h3 className="mt-3 font-display text-3xl text-white">Made to feel more premium, modern, and conversion-ready.</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
            This refreshed Dudley project keeps the product story front and center while elevating the look with stronger hierarchy, softer gradients, luxury spacing, and cleaner landing page structure.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-white/60">
          {products.map((product) => (
            <Link key={product.slug} to={product.route} className="footer-link">
              {product.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
