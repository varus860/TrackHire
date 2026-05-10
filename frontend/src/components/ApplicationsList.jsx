const mockData = [
  { id: 1, company: "Google", title: "Frontend Developer", status: "Applied", date: "2026-05-01" },
  { id: 2, company: "Amazon", title: "Fullstack Engineer", status: "Phone Screen", date: "2026-04-28" },
  { id: 3, company: "Stripe", title: "Product Designer", status: "Interview", date: "2026-05-03" },
  { id: 4, company: "Notion", title: "Software Engineer", status: "Applied", date: "2026-05-05" },
  { id: 5, company: "Figma", title: "Frontend Engineer", status: "Rejected", date: "2026-04-15" },
];

function ApplicationsList() {
  return (
    <ul className="space-y-0 divide-y divide-(--color-mist)">
      {mockData.map((app) => (
        <li key={app.id} className="py-4 first:pt-0 last:pb-0">
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-base font-medium text-(--color-void)">
              {app.title}
            </span>
            <span className="text-xs uppercase tracking-wider text-(--color-stone)">
              {app.status}
            </span>
          </div>
          <p className="text-sm text-(--color-stone)">
            {app.company} — {app.date}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ApplicationsList;