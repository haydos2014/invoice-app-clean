const services = [
  {
    label: "Vinyasa Flow",
    duration: "60 min",
    price: "$90",
    status: "Active",
  },
  {
    label: "Remedial Massage",
    duration: "75 min",
    price: "$120",
    status: "Active",
  },
  {
    label: "Strength Coaching",
    duration: "45 min",
    price: "$80",
    status: "Paused",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Services & Modalities</h2>
        <p className="text-sm text-slate-500">
          Set default durations and pricing for each service.
        </p>
      </header>

      <section className="card p-5">
        <h3 className="text-sm font-semibold text-ink">Add new service</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Service label",
            "Default duration",
            "Default price",
            "Active status",
          ].map((field) => (
            <label key={field} className="text-xs text-slate-500">
              {field}
              <input
                className="mt-1 w-full rounded-xl border border-cloud bg-white px-3 py-2 text-sm"
                placeholder={field}
              />
            </label>
          ))}
        </div>
        <button className="mt-4 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
          Save service
        </button>
      </section>

      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Service list</h3>
          <span className="text-xs text-slate-400">{services.length} services</span>
        </div>
        <div className="mt-4 space-y-3">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex flex-col gap-2 rounded-xl border border-cloud bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-ink">{service.label}</p>
                <p className="text-xs text-slate-500">{service.duration}</p>
              </div>
              <p className="text-sm font-semibold text-ink">{service.price}</p>
              <span className="badge bg-slate-100 text-slate-500">
                {service.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
