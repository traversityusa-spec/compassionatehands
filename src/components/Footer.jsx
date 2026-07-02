import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 mt-32">
      <div className="wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="logo"
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              At Compassionate Hands, we believe in providing more than just support – we offer a dependable and trustworthy system of care for individuals with developmental disabilities.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact us" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="text-sm hover:text-brand transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contacts</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:+17206599501" className="hover:text-brand transition-colors">
                +1(720) 659-9501
              </a>
              <a href="mailto:compassionatehandsltd@gmail.com" className="hover:text-brand transition-colors">
                compassionatehandsltd@gmail.com
              </a>
              <span>12500 First St, Thornton CO 80241</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            {new Date().getFullYear()} &copy; Compassionate Hands. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
