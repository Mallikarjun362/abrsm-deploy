import React from "react";
import "./LectureStatsSection.css";

const stats = [
  { label: "Colleges", value: "1041", color: "red" },
  { label: "Participants", value: "244,635", color: "purple" },
  { label: "Teachers", value: "46,845", color: "green" },
  { label: "Students", value: "145,740", color: "orange" },
  { label: "Common Citizens", value: "52,050", color: "red" },
];

const LectureStatsSection = () => {
  return (
    <section className="lecture-section">
      <div className="lecture-header-stripe">
        <h2 className="lecture-header-text">
          Lectures on <span className="quote">"from India to Bharat"</span>
        </h2>
      </div>

      <div className="lecture-content">
        <p className="lecture-description">
          Lecture series in colleges for the awakening of <strong>"swa"</strong> on the basis of the quad fountain heads – <strong>“Believe in Bharat, know Bharat, Be Bharat, and build Bharat”</strong>
        </p>
        <p className="lecture-date">(between 15th August 2022 to 26th January 2023)</p>

        <div className="stats-flex">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card-v2">
              <div className={`stat-value-v2 ${stat.color}`}>{stat.value}</div>
              <div className="stat-label-v2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LectureStatsSection;
