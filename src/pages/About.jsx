import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold display-5 text-primary">
              Explora <span className="text-dark">Kodigo Music</span>
            </h2>
            <p className="fs-5 text-secondary">
              Descubre canciones, crea playlists y disfruta de la mejor experiencia
              musical en cualquier dispositivo. 🎧
            </p>
            <Link to="/register" className="btn btn-primary btn-lg mt-3">
              Empieza ahora
            </Link>
          </div>

          {/* Imagen ilustrativa */}
          <div className="col-12 col-md-6 text-center">
            <div className="position-relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                alt="Explora música"
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              {/* Fondo decorativo sutil */}
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: "220px",
                  height: "220px",
                  background: "rgba(13,110,253,0.1)",
                  zIndex: -1,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Sección adicional de información */}
        <div className="row mt-5 text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <i className="bi bi-music-note-beamed fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Música Infinita</h5>
              <p className="text-muted">Accede a miles de canciones de todos los géneros.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <i className="bi bi-play-btn fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Crea tus Playlists</h5>
              <p className="text-muted">Organiza tu música favorita como quieras.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <i className="bi bi-phone fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Dispositivos Múltiples</h5>
              <p className="text-muted">Disfruta tu música en móvil, tablet o desktop.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos extra */}
      <style>{`
        body {
          background-color: #f8f9fa;
        }
        .btn-primary {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }
        .btn-primary:hover {
          background-color: #0b5ed7;
          border-color: #0a58ca;
        }
      `}</style>
    </div>
  );
}

export default About;


