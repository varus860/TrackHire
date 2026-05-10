import Header from './components/Header'
import JobApplicationForm from './components/JobApplicationForm';
import ApplicationsList from './components/ApplicationsList';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-(--color-root) text-(--color-void) font-sans transition-colors duration-200">
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-8 py-12 space-y-12">
        {/* Dashboard Placeholder */}
        <section className="p-6 border border-(--color-mist)">
          <h2 className="text-lg font-medium mb-2">Dashboard</h2>
          <Dashboard />
        </section>

        {/* Form and List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 p-6 border border-(--color-mist)">
            <h2 className="text-xl font-normal mb-6">New Application</h2>
            <JobApplicationForm />
          </div>
          
          <div className="lg:col-span-5 p-6 border border-(--color-mist)">
            <h2 className="text-xl font-normal mb-6">Applications</h2>
            <ApplicationsList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;