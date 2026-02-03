import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

export function MobileNav({ links }: { links: NavLink[] }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-cloud bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-3 py-2 text-xs font-medium text-slate-500">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-1 flex-col items-center gap-1 py-1 transition hover:text-ink"
          >
            <span className="h-2 w-2 rounded-full bg-slate-200" />
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
