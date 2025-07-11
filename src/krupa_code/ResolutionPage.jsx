import React from "react";

function ResolutionPage() {
  return (
    <section className="mysection">
      <h2>Resolutions Passed in the conference</h2>
      <div className="page row-layout reverse">
        <div className="text">
          <ul>
            <li>
              Holistic, fair and unitary population policy should be made.
            </li>
            <li>
              Adequate resources should be arranged for quality and dignified
              education
            </li>
            <li>
              Teacher problems of education and teachers should be resolved
              without delay.
            </li>
          </ul>
        </div>
        <img
          src={
            "https://www.tripurastarnews.com/wp-content/uploads/2024/09/22-09-2024-Akhil-Bharatiya-Rashtriya-Shaikshik-Mahasangh-Tripura-Organized-6th-Annual-General-Meeting.Pic-3-1024x684.jpeg"
          }
          alt="Resolution Event"
        />
      </div>
    </section>
  );
}

export default ResolutionPage;
