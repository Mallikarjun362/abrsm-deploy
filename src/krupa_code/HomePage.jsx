import React from "react";


function HomePage() {
  return (
    <div className="page">
      <h1>8th Tri-Annual National Conference, Bengaluru</h1>
      <p className="subtitle">
        <strong>Expected level:</strong> Participants having responsibilities of District level and above
      </p>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-box">
          <h3>States</h3>
          <p>27</p>
        </div>
        <div className="stat-box">
          <h3>Districts</h3>
          <p>443</p>
        </div>
        <div className="stat-box">
          <h3>Participants</h3>
          <p>Total: 2385</p>
          <p>Male: 2105</p>
          <p>Female: 280</p>
        </div>
      </div>

      {/* Images Section */}
      <div className="image-section">
        
        <div className="image-row">
          <img
            src="https://www.tripurastarnews.com/wp-content/uploads/2024/09/22-09-2024-Akhil-Bharatiya-Rashtriya-Shaikshik-Mahasangh-Tripura-Organized-6th-Annual-General-Meeting.Pic-4-1024x684.jpeg"
            alt="Conference Photo 1"
          />
          <img
            src="https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/07/Akhil-Bharatiya-Rashtriya-Shaikshik-Mahasangh-organises-Azadi-Ka-Amrit-Mahotsav.jpg"
            alt="Conference Photo 2"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
