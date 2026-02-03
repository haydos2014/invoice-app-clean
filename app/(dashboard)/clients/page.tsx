const clients = [
  {
    name: "Olivia Chen",
    org: "Flow & Glow Yoga",
    email: "hello@flowglow.com",
    phone: "0412 555 210",
    status: "Active",
  },
  {
    name: "Nina Patel",
    org: "Restore Therapy",
    email: "nina@restore.com",
    phone: "0408 221 902",
    status: "Active",
  },
  {
    name: "Harley Briggs",
    org: "Peak Strength Co.",
    email: "harley@peakstrength.co",
    phone: "0433 908 432",
    status: "On hold",
  },
];

export default function ClientsPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Clients</h2>
        <p className="text-sm text-slate-500">
          Manage the people and organisations you invoice.
        </p>
      </header>

      <section className="card p-5">
        <h3 className="text-sm font-semibold text-ink">Add new client</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Client name",
            "Organisation",
            "Email",
            "Phone",
            "Address",
            "Notes",
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
          Save client
        </button>
      </section>

      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Client list</h3>
          <span className="text-xs text-slate-400">{clients.length} clients</span>
        </div>
        <div className="mt-4 space-y-3">
          {clients.map((client) => (
            <div
              key={client.email}
              className="flex flex-col gap-2 rounded-xl border border-cloud bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-ink">{client.name}</p>
                <p className="text-xs text-slate-500">{client.org}</p>
              </div>
              <div className="text-xs text-slate-500">
                <p>{client.email}</p>
                <p>{client.phone}</p>
              </div>
              <span className="badge bg-slate-100 text-slate-500">
                {client.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
