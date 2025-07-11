import React from "react";

function AcademicPage() {
  return (
    <section className="mysection">
      <h3>Academic Sessions and propounders of the subject</h3>
      <div className="page row-layout">
        <div className="text">
          <ul>
            <li>Bhartiya Social Vision: Prof Chand Kiran Saluja</li>
            <li>Bhartiya Educational Vision: Prof Aniruddha Deshpande</li>
            <li>Bhartiya Economic Vision: Prof Ashwini Mahajan</li>
            <li>New Education Policy: Prof M K Sridhar, Shri Ramkrishn Rao</li>
          </ul>
        </div>
        <img
          src={
            "https://www.baps.org/Data/Sites/1/Media/GalleryImages/26531/WebImages/29_2023_01_02_BUS_P0650.jpg"
          }
          alt="Academic Session"
        />
      </div>
    </section>
  );
}

export default AcademicPage;
