import type { ReactNode } from "react";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/clients", label: "Clients" },
  { href: "/services", label: "Services" },
  { href: "/bookings", label: "Bookings" },
  { href: "/invoices", label: "Invoices" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-mist">
      <header className="sticky top-0 z-20 border-b border-cloud bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Cool Books</p>
            <h1 className="text-lg font-semibold text-ink">Simple Invoicing</h1>
          </div>
          <div className="hidden gap-4 text-sm font-medium text-slate-500 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 pb-28 pt-6">{children}</main>
      <MobileNav links={navLinks} />
    </div>
  );
}
