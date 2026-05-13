import { useState } from 'react';

const STATUS_OPTIONS = ['Applied', 'Phone Screen', 'Interview', 'Offer', 'Rejected'];

function ApplicationsList({ applications, onDelete, onUpdate }) {
  const [expandedId, setExpandedId] = useState(null);

  if (applications.length === 0) {
    return (
      <div className="py-12 text-center border border-dashed border-(--color-mist)">
        <p className="text-(--color-stone) font-light">No applications match your search or none yet!</p>
      </div>
    );
  }

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ul className="space-y-0 divide-y divide-(--color-mist)">
      {applications.map((app) => (
        <li key={app.id} className="py-6 first:pt-0 last:pb-0 group">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 
                  className="text-lg font-normal text-(--color-void) cursor-pointer hover:text-(--color-ember) transition-colors duration-200"
                  onClick={() => toggleExpand(app.id)}
                >
                  {app.title}
                </h3>
                <div className="relative group/status">
                  <select
                    value={app.status}
                    onChange={(e) => onUpdate(app.id, { status: e.target.value })}
                    className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-(--color-wheat) text-(--color-stone) font-semibold appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-(--color-ember)"
                  >
                    {STATUS_OPTIONS.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-sm text-(--color-stone) mb-2">
                {app.company} <span className="mx-2 text-(--color-mist)">|</span> {app.date}
              </p>
            </div>
          </div>

          {expandedId === app.id && (
            <div className="mb-4 p-4 bg-(--color-wheat)/30 border-l-2 border-(--color-ember) animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="text-[10px] uppercase tracking-widest text-(--color-stone) mb-2 font-bold">Notes</h4>
              <p className="text-sm text-(--color-void) whitespace-pre-wrap leading-relaxed">
                {app.notes || "No notes added for this application."}
              </p>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <button 
              onClick={() => toggleExpand(app.id)}
              className="text-[10px] uppercase tracking-widest text-(--color-stone) hover:text-(--color-void) transition-colors duration-200 focus:outline-none"
            >
              {expandedId === app.id ? "Hide Details" : "Show Details"}
            </button>
            <button 
              onClick={() => onDelete(app.id)}
              className="text-[10px] uppercase tracking-widest text-(--color-stone) hover:text-(--color-ember) transition-colors duration-200 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ApplicationsList;