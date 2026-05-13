import { useState } from 'react';
import Header from './components/Header'
import JobApplicationForm from './components/JobApplicationForm';
import ApplicationsList from './components/ApplicationsList';
import Dashboard from './components/Dashboard';

const INITIAL_DATA = [
  { id: 1, company: "Google", title: "Frontend Developer", status: "Applied", date: "2026-05-01", notes: "First application of the month." },
  { id: 2, company: "Amazon", title: "Fullstack Engineer", status: "Phone Screen", date: "2026-04-28", notes: "Prepare for coding challenge." },
  { id: 3, company: "Stripe", title: "Product Designer", status: "Interview", date: "2026-05-03", notes: "Portfolio review scheduled." },
];

function App() {
  const [applications, setApplications] = useState(INITIAL_DATA);
  const [searchQuery, setSearchQuery] = useState('');

  const addApplication = (newApp) => {
    const applicationWithId = {
      ...newApp,
      id: Date.now(),
    };
    setApplications([applicationWithId, ...applications]);
  };

  const updateApplication = (id, updatedFields) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, ...updatedFields } : app
    ));
  };

  const deleteApplication = (id) => {
    setApplications(applications.filter(app => app.id !== id));
  };

  const filteredApplications = applications.filter(app => 
    app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h2 className="text-xl font-normal uppercase tracking-wider">Applications</h2>
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="SEARCH..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 bg-transparent border-b border-(--color-mist) text-xs tracking-widest focus:border-(--color-ember) focus:outline-none transition-colors duration-200 placeholder:text-(--color-stone)"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-3 w-3 text-(--color-stone)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <ApplicationsList 
              applications={filteredApplications} 
              onDelete={deleteApplication} 
              onUpdate={updateApplication}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;