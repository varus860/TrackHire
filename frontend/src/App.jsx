import { useState } from 'react';
import Header from './components/Header'
import JobApplicationForm from './components/JobApplicationForm';
import ApplicationsList from './components/ApplicationsList';
import Dashboard from './components/Dashboard';

const INITIAL_DATA = [
  { id: 1, company: "Google", title: "Frontend Developer", status: "Applied", date: "2026-05-01" },
  { id: 2, company: "Amazon", title: "Fullstack Engineer", status: "Phone Screen", date: "2026-04-28" },
  { id: 3, company: "Stripe", title: "Product Designer", status: "Interview", date: "2026-05-03" },
];

function App() {
  const [applications, setApplications] = useState(INITIAL_DATA);

  const addApplication = (newApp) => {
    const applicationWithId = {
      ...newApp,
      id: Date.now(),
    };
    setApplications([applicationWithId, ...applications]);
  };

  const deleteApplication = (id) => {
    setApplications(applications.filter(app => app.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-(--color-root) text-(--color-void) font-sans transition-colors duration-200">
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-8 py-12 space-y-12">
        {/* Dashboard Placeholder */}
        <section className="p-6 border border-(--color-mist)">
          <h2 className="text-lg font-medium mb-4 uppercase tracking-widest text-(--color-stone)">Dashboard</h2>
          <Dashboard applications={applications} />
        </section>

        {/* Form and List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 p-6 border border-(--color-mist)">
            <h2 className="text-xl font-normal mb-6 uppercase tracking-wider">New Application</h2>
            <JobApplicationForm onAdd={addApplication} />
          </div>
          
          <div className="lg:col-span-7 p-6 border border-(--color-mist)">
            <h2 className="text-xl font-normal mb-6 uppercase tracking-wider">Applications</h2>
            <ApplicationsList 
              applications={applications} 
              onDelete={deleteApplication} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;