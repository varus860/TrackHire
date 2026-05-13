// src/components/Dashboard.jsx

function Dashboard({ applications = [] }) {
  const total = applications.length;
  const inProgress = applications.filter(
    (app) => app.status !== 'Rejected' && app.status !== 'Offer'
  ).length;
  const interviews = applications.filter(
    (app) => app.status === 'Interview'
  ).length;

  const stats = [
    { label: "Total Applications", value: total },
    { label: "In Progress", value: inProgress },
    { label: "Interviews", value: interviews },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="p-8 border border-(--color-mist) bg-(--color-root) shadow-flat transition-transform duration-300 hover:-translate-y-1"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-(--color-stone) mb-4 font-semibold">
            {stat.label}
          </p>
          <p className="text-4xl font-light text-(--color-void)">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;