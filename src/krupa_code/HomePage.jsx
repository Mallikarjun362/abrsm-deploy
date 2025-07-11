import React from "react";

function HomePage() {
  return (
    <div className="page">
      <h1>8th Tri-Annual National Conference, Bengaluru</h1>
      <p className="subtitle">
        <strong>Expected level:</strong> Participants having responsibilities of
        District level and above
      </p>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-box">
          <p>27</p>
          <h3>States</h3>
        </div>
        <div className="stat-box">
          <p>443</p>
          <h3>Districts</h3>
        </div>
        <div className="stat-box">
          <p>2385</p>
          <h3>Total Participants</h3>
        </div>
        <div className="stat-box">
          <p>2105</p>
          <h3>Male Participants</h3>
        </div>
        <div className="stat-box">
          <p>280</p>
          <h3>Female Participants</h3>
        </div>
      </div>

      {/* image section */}
      <div className="image-section">
        <div className="image-row">
          <img
            src="https://www.tripurastarnews.com/wp-content/uploads/2024/09/22-09-2024-Akhil-Bharatiya-Rashtriya-Shaikshik-Mahasangh-Tripura-Organized-6th-Annual-General-Meeting.Pic-4-1024x684.jpeg"
            alt="Conference Photo 1"
          />

          <img
            src="https://www.tripurastarnews.com/wp-content/uploads/2024/09/22-09-2024-Akhil-Bharatiya-Rashtriya-Shaikshik-Mahasangh-Tripura-Organized-6th-Annual-General-Meeting.Pic-1-1024x684.jpeg"
            alt="Conference Photo 3"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
