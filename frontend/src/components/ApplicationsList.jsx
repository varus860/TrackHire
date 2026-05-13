function ApplicationsList({ applications, onDelete }) {
  if (applications.length === 0) {
    return (
      <div className="py-12 text-center border border-dashed border-(--color-mist)">
        <p className="text-(--color-stone) font-light">No applications yet. Start by adding one!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-0 divide-y divide-(--color-mist)">
      {applications.map((app) => (
        <li key={app.id} className="py-6 first:pt-0 last:pb-0 group">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-normal text-(--color-void)">
                  {app.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-(--color-wheat) text-(--color-stone) font-semibold">
                  {app.status}
                </span>
              </div>
              <p className="text-sm text-(--color-stone) mb-4">
                {app.company} <span className="mx-2 text-(--color-mist)">|</span> {app.date}
              </p>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={() => onDelete(app.id)}
              className="text-[10px] uppercase tracking-widest text-(--color-stone) hover:text-(--color-ember) transition-colors duration-200 focus:outline-none"
            >
              Delete Application
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ApplicationsList;