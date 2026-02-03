const bookings = [
  {
    id: "bk-1",
    date: "Feb 2",
    time: "9:30am",
    client: "Flow & Glow Yoga",
    service: "Vinyasa Flow",
    amount: "$90",
  },
  {
    id: "bk-2",
    date: "Feb 7",
    time: "9:30am",
    client: "Flow & Glow Yoga",
    service: "Vinyasa Flow",
    amount: "$90",
  },
  {
    id: "bk-3",
    date: "Feb 14",
    time: "9:30am",
    client: "Flow & Glow Yoga",
    service: "Vinyasa Flow",
    amount: "$90",
  },
];

export default function NewInvoicePage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Create invoice</h2>
        <p className="text-sm text-slate-500">
          Select a client and date range to pull bookings into a draft invoice.
        </p>
      </header>

      <section className="card p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Client",
            "Period start",
            "Period end",
          ].map((label) => (
            <label key={label} className="text-xs text-slate-500">
              {label}
              <input
                className="mt-1 w-full rounded-xl border border-cloud bg-white px-3 py-2 text-sm"
                placeholder={label}
              />
            </label>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-full border border-cloud px-4 py-2 text-xs text-slate-500">
            Preview bookings
          </button>
          <button className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white">
            Create draft invoice
          </button>
        </div>
      </section>

      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Bookings to include</h3>
          <span className="text-xs text-slate-400">{bookings.length} items</span>
        </div>
        <div className="mt-4 space-y-3">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex flex-col gap-2 rounded-xl border border-cloud bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-ink">
                  {booking.date} · {booking.time}
                </p>
                <p className="text-xs text-slate-500">{booking.service}</p>
              </div>
              <div className="text-xs text-slate-500">
                <p>{booking.client}</p>
              </div>
              <p className="text-sm font-semibold text-ink">{booking.amount}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
