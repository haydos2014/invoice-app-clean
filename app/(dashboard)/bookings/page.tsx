const calendarDays = [
  { day: "Mon", date: "12", count: 2 },
  { day: "Tue", date: "13", count: 3 },
  { day: "Wed", date: "14", count: 1 },
  { day: "Thu", date: "15", count: 2 },
  { day: "Fri", date: "16", count: 4 },
  { day: "Sat", date: "17", count: 1 },
  { day: "Sun", date: "18", count: 0 },
];

const bookings = [
  {
    time: "9:30am",
    client: "Olivia Chen",
    service: "Vinyasa Flow",
    duration: "60 min",
    status: "Confirmed",
  },
  {
    time: "1:00pm",
    client: "Nina Patel",
    service: "Remedial Massage",
    duration: "75 min",
    status: "Confirmed",
  },
  {
    time: "4:30pm",
    client: "Harley Briggs",
    service: "Strength Coaching",
    duration: "45 min",
    status: "Pending",
  },
];

export default function BookingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Bookings calendar</h2>
        <p className="text-sm text-slate-500">
          Swipe-friendly week and fortnight views made for phones.
        </p>
      </header>

      <section className="card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase text-slate-400">Week view</p>
            <h3 className="text-lg font-semibold">12 – 18 February</h3>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full border border-cloud px-3 py-1 text-xs text-slate-500">
              Week
            </button>
            <button className="rounded-full bg-ink px-3 py-1 text-xs text-white">
              Fortnight
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-7">
          {calendarDays.map((day) => (
            <div key={day.day} className="rounded-2xl border border-cloud bg-white p-3">
              <p className="text-xs text-slate-400">{day.day}</p>
              <p className="text-lg font-semibold text-ink">{day.date}</p>
              <p className="text-xs text-slate-500">{day.count} sessions</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Today</h3>
          <button className="rounded-full border border-cloud px-3 py-1 text-xs text-slate-500">
            Add booking
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {bookings.map((booking) => (
            <div
              key={booking.time}
              className="flex flex-col gap-2 rounded-xl border border-cloud bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-ink">{booking.time}</p>
                <p className="text-xs text-slate-500">{booking.client}</p>
              </div>
              <div>
                <p className="text-sm text-ink">{booking.service}</p>
                <p className="text-xs text-slate-500">{booking.duration}</p>
              </div>
              <span className="badge bg-slate-100 text-slate-500">
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
