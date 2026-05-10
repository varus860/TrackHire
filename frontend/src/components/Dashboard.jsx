// src/components/Dashboard.jsx

const stats = [
  { label: "Total Applications", value: "5" },
  { label: "In Progress", value: "2" },
  { label: "Interviews", value: "1" },
];

function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="p-6 border border-(--color-mist) shadow-flat"
        >
          <p className="text-xs uppercase tracking-wider text-(--color-stone) mb-2">
            {stat.label}
          </p>
          <p className="text-3xl font-light text-(--color-void)">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;