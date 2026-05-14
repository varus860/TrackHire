const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data storage (Phase 4)
let applications = [
  { id: 1, company: "Google", title: "Frontend Developer", status: "Applied", date: "2026-05-01", notes: "First application of the month." },
  { id: 2, company: "Amazon", title: "Fullstack Engineer", status: "Phone Screen", date: "2026-04-28", notes: "Prepare for coding challenge." },
  { id: 3, company: "Stripe", title: "Product Designer", status: "Interview", date: "2026-05-03", notes: "Portfolio review scheduled." },
];

// GET /applications - Retrieve all applications
app.get('/applications', (req, res) => {
  res.json(applications);
});

// POST /applications - Add a new application
app.post('/applications', (req, res) => {
  const newApplication = {
    ...req.body,
    id: Date.now(), // Simple ID generation for now
  };
  applications = [newApplication, ...applications];
  res.status(201).json(newApplication);
});

// PUT /applications/:id - Update an existing application
app.put('/applications/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  
  applications = applications.map(app => 
    app.id === parseInt(id) ? { ...app, ...updatedData } : app
  );
  
  const updatedApp = applications.find(app => app.id === parseInt(id));
  if (updatedApp) {
    res.json(updatedApp);
  } else {
    res.status(404).json({ message: "Application not found" });
  }
});

// DELETE /applications/:id - Delete an application
app.delete('/applications/:id', (req, res) => {
  const { id } = req.params;
  applications = applications.filter(app => app.id !== parseInt(id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
