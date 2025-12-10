const API_ENDPOINT = 'https://remotive.com/api/remote-jobs?category=software-dev&limit=10';

const jobListingsElement = document.getElementById('job-listings');
const loadingSpinner = document.getElementById('loading-spinner');

loadingSpinner.style.display = 'none';

async function fetchJobs() {
  loadingSpinner.style.display = 'block';
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    renderJobs(data.jobs);


  } catch (error) {
    console.error('Error fetching job listings:', error);
    jobListingsElement.innerHTML = `<p style="color: red;">Error fetching jobs: ${error.message}.</p>`;

  } finally {
    loadingSpinner.style.display = 'none';
  }
}


function renderJobs(jobs) {
  jobListingsElement.innerHTML = '';
  jobs.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
      <h3> ${job.title}</h3>
      <p><strong>Company:</strong> ${job.company_name}</p>
      <p><strong>Location:</strong> ${job.candidate_required_location}</p>
      <a href="${job.url}" target="_blank">View Job</a>
      `
    jobListingsElement.appendChild(card);
  })
}

fetchJobs();