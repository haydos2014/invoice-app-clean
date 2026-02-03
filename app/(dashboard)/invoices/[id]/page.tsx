const lineItems = [
  {
    id: 1,
    label: "Vinyasa Flow",
    date: "Feb 2",
    time: "9:30am",
    duration: "60 min",
    notes: "Studio session",
    amount: "$90",
  },
  {
    id: 2,
    label: "Vinyasa Flow",
    date: "Feb 7",
    time: "9:30am",
    duration: "60 min",
    notes: "Private client",
    amount: "$90",
  },
  {
    id: 3,
    label: "Vinyasa Flow",
    date: "Feb 14",
    time: "9:30am",
    duration: "60 min",
    notes: "Studio session",
    amount: "$90",
  },
];

const toggles = [
  "Show date",
  "Show time",
  "Show duration",
  "Show notes",
  "Show pricing",
];

export default function InvoiceDetailPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase text-slate-400">Invoice #INV-001</p>
            <h2 className="text-2xl font-semibold">Flow & Glow Yoga</h2>
          </div>
          <button className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
            Export PDF
          </button>
        </div>
        <p className="text-sm text-slate-500">Period: 1–15 February · Status: Draft</p>
      </header>

      <section className="card p-5">
        <h3 className="text-sm font-semibold text-ink">Invoice layout</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {toggles.map((toggle) => (
            <label
              key={toggle}
              className="flex items-center justify-between rounded-xl border border-cloud bg-white px-4 py-3 text-sm"
            >
              {toggle}
              <span className="h-5 w-9 rounded-full bg-ink">
                <span className="ml-4 mt-0.5 block h-4 w-4 rounded-full bg-white" />
              </span>
            </label>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Invoice lines</h3>
          <button className="rounded-full border border-cloud px-3 py-1 text-xs text-slate-500">
            Add line
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {lineItems.map((line) => (
            <div
              key={line.id}
              className="grid gap-2 rounded-xl border border-cloud bg-white px-4 py-3 text-xs text-slate-500 sm:grid-cols-[1.4fr_1fr_1fr_0.6fr] sm:items-center"
            >
              <div>
                <p className="text-sm font-semibold text-ink">{line.label}</p>
                <p>
                  {line.date} · {line.time} · {line.duration}
                </p>
                <p>{line.notes}</p>
              </div>
              <p>{line.amount}</p>
              <p className="text-ink">{line.duration}</p>
              <button className="rounded-full border border-cloud px-3 py-1 text-xs text-slate-500">
                Edit
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-ink">
          <span>Total</span>
          <span>$270</span>
        </div>
      </section>
    </div>
  );
}
