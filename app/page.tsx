const quickStats = [
  { label: "Open invoices", value: "4" },
  { label: "Bookings this fortnight", value: "12" },
  { label: "Draft quotes", value: "0" },
];

const nextBookings = [
  {
    client: "Olivia Chen",
    service: "Vinyasa Flow",
    time: "Tue 9:30am",
  },
  {
    client: "Nina Patel",
    service: "Remedial Massage",
    time: "Wed 1:00pm",
  },
  {
    client: "Harley Briggs",
    service: "Strength Coaching",
    time: "Thu 7:15am",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="card p-6">
        <p className="text-sm text-slate-500">Good morning 👋</p>
        <h2 className="mt-2 text-2xl font-semibold">
          Calm invoicing, built for phone-first sole traders.
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Track clients, schedule sessions, and send polished invoices in minutes.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="badge bg-breeze text-sky-700">Yoga teachers</span>
          <span className="badge bg-breeze text-sky-700">Trainers</span>
          <span className="badge bg-breeze text-sky-700">Tradies</span>
          <span className="badge bg-breeze text-sky-700">Therapists</span>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {quickStats.map((stat) => (
          <div key={stat.label} className="card p-4">
            <p className="text-xs uppercase text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-ink">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Next bookings</h3>
            <button className="rounded-full border border-cloud px-3 py-1 text-xs text-slate-500">
              Week view
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {nextBookings.map((booking) => (
              <div
                key={booking.client}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-ink">{booking.client}</p>
                  <p className="text-xs text-slate-500">{booking.service}</p>
                </div>
                <p className="text-xs font-semibold text-slate-500">{booking.time}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <h3 className="text-lg font-semibold">Invoice workflow</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li className="flex items-start gap-3">
              <span className="badge bg-breeze text-sky-700">1</span>
              Filter bookings by date range and client.
            </li>
            <li className="flex items-start gap-3">
              <span className="badge bg-breeze text-sky-700">2</span>
              Toggle invoice layout fields before sending.
            </li>
            <li className="flex items-start gap-3">
              <span className="badge bg-breeze text-sky-700">3</span>
              Export a clean PDF instantly.
            </li>
          </ul>
          <button className="mt-4 w-full rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white">
            Create invoice
          </button>
        </div>
      </section>
    </div>
  );
}
