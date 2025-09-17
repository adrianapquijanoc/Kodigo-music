import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className="display-5 fw-bold text-primary mb-3">
            Explora <span className="text-dark">Kodigo Music</span>
          </h2>
          <p className="fs-5 mb-4">
            Descubre canciones, crea playlists y disfruta de la mejor experiencia musical en cualquier dispositivo. 🎧
          </p>
          <Link to="/register" className="btn btn-primary btn-lg">Empieza ahora</Link>
        </div>

        <div className="col-md-6 text-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/727/727245.png" 
            alt="Explora música"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Beneficios */}
      <div className="row text-center mt-5">
        {[
          { icon: "bi-music-note-beamed", title: "Música Infinita", desc: "Accede a miles de canciones de todos los géneros." },
          { icon: "bi-play-btn", title: "Crea Playlists", desc: "Organiza tu música favorita como quieras." },
          { icon: "bi-phone", title: "Multidispositivo", desc: "Disfruta tu música en móvil, tablet o desktop." }
        ].map((item, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <i className={`bi ${item.icon} fs-1 mb-3 text-primary`}></i>
                <h5 className="fw-bold">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;