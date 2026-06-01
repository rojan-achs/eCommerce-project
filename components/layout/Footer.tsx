import Link from "next/link";


export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-gray-300">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <h3 className="text-base font-bold text-brand">LocalBiz Hub</h3>
          <p className="mt-2 text-sm text-slate-600">
            Your neighbourhood shop, now online. Browse products and order in
            seconds.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-brand">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-brand">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>New Road, Kathmandu</li>
            <li>+977-9800000000</li>
            <li>Sun–Fri, 7 AM – 8 PM</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
