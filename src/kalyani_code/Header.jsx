export default function Header() {
  return (
    <header className="orange-header mb-4 d-flex align-items-center justify-content-between">
      <img
        src="https://images.seeklogo.com/logo-png/46/2/akhil-bhartiya-rashtriya-shaikshik-mahasangh-logo-png_seeklogo-461858.png"
        alt="ABRSM Logo"
      />
      <div className="text-center flex-grow-1 mx-3">
        <h3 className="fw-bold mb-1">
          Akhil Bhartiya Rashtriya Shaikshik Mahasangh
        </h3>
        <p className="mb-1">
          <em>
            Constantly moving forward for last 35 years for the honour and
            respect of Education, Teacher and Nation
          </em>
        </p>
        <p className="fw-semibold text-primary mb-0">
          Vision: Rastra Ke Hit Me Shiksha, Shiksha Ke Hit Me Shikshak, Shikshak
          Ke Hit Me Samaj
        </p>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-fcGhNQacLymzKmdsynTHSfPzW1eHrOyOg&s"
        alt="Right Image"
        className="ms-3 rounded-circle"
      />
    </header>
  );
}
