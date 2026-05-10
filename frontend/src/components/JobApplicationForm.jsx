import { useState } from 'react';

const STATUS_OPTIONS = ['Applied', 'Phone Screen', 'Interview', 'Offer', 'Rejected'];

function JobApplicationForm() {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [status, setStatus] = useState('Applied');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with: ${companyName}, ${jobTitle}, ${dateApplied}, ${status}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="companyName" className="text-xs uppercase tracking-wider text-(--color-stone)">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
          className="w-full p-3 border border-(--color-mist) bg-transparent text-(--color-void) placeholder:text-(--color-stone) focus:border-(--color-ember) focus:outline-none transition-colors duration-200"
          placeholder="Enter company name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="jobTitle" className="text-xs uppercase tracking-wider text-(--color-stone)">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
          className="w-full p-3 border border-(--color-mist) bg-transparent text-(--color-void) placeholder:text-(--color-stone) focus:border-(--color-ember) focus:outline-none transition-colors duration-200"
          placeholder="Enter job title"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dateApplied" className="text-xs uppercase tracking-wider text-(--color-stone)">
          Date Applied
        </label>
        <input
          type="date"
          id="dateApplied"
          name="dateApplied"
          value={dateApplied}
          onChange={(e) => setDateApplied(e.target.value)}
          required
          className="w-full p-3 border border-(--color-mist) bg-transparent text-(--color-void) focus:border-(--color-ember) focus:outline-none transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="status" className="text-xs uppercase tracking-wider text-(--color-stone)">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 border border-(--color-mist) bg-transparent text-(--color-void) focus:border-(--color-ember) focus:outline-none transition-colors duration-200 appearance-none"
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option} value={option} className="bg-(--color-root) text-(--color-void)">
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-(--color-ember) text-(--color-root) uppercase tracking-wider text-sm font-medium hover:bg-(--color-ink) transition-colors duration-200"
      >
        Add Application
      </button>
    </form>
  );
}

export default JobApplicationForm;