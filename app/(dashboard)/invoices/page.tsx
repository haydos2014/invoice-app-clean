import Link from "next/link";

const invoices = [
  {
    id: "inv-001",
    client: "Flow & Glow Yoga",
    period: "1–15 Feb",
    total: "$420",
    status: "Draft",
  },
  {
    id: "inv-002",
    client: "Restore Therapy",
    period: "1–15 Feb",
    total: "$360",
    status: "Sent",
  },
];

export default function InvoicesPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Invoices</h2>
        <p className="text-sm text-slate-500">
          Create invoices from multiple bookings and export clean PDFs.
        </p>
      </header>

      <section className="card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-ink">Create new invoice</h3>
            <p className="text-xs text-slate-500">
              Filter bookings by client and date range.
            </p>
          </div>
          <Link
            href="/invoices/new"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white"
          >
            Start invoice
          </Link>
        </div>
      </section>

      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Recent invoices</h3>
          <span className="text-xs text-slate-400">{invoices.length} invoices</span>
        </div>
        <div className="mt-4 space-y-3">
          {invoices.map((invoice) => (
            <Link
              key={invoice.id}
              href={`/invoices/${invoice.id}`}
              className="flex flex-col gap-2 rounded-xl border border-cloud bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-ink">{invoice.client}</p>
                <p className="text-xs text-slate-500">{invoice.period}</p>
              </div>
              <p className="text-sm font-semibold text-ink">{invoice.total}</p>
              <span className="badge bg-slate-100 text-slate-500">
                {invoice.status}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
