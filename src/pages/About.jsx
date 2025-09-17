import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-hero min-vh-100 d-flex flex-column justify-content-center py-5 text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-12 col-md-6 mb-5 mb-md-0 text-center text-md-start">
            <h1 className="display-4 fw-bold gradient-text mb-3">
              Explora <span>Kodigo Music</span>
            </h1>
            <p className="fs-5 text-light mb-4">
              Descubre canciones, crea playlists y disfruta de la mejor experiencia musical en cualquier dispositivo. 🎧
            </p>
            <Link to="/register" className="btn btn-lg btn-glow">
              Empieza ahora
            </Link>
          </div>

          {/* Imagen ilustrativa */}
          <div className="col-12 col-md-6 text-center">
            <div className="position-relative d-inline-block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                alt="Explora música"
                className="img-fluid rounded-circle shadow-lg about-img"
              />
              {/* Fondo decorativo animado */}
              <div className="animated-bg"></div>
            </div>
          </div>
        </div>

        {/* Sección de beneficios */}
        <div className="row text-center mt-5">
          {[
            { icon: "bi-music-note-beamed", title: "Música Infinita", desc: "Accede a miles de canciones de todos los géneros." },
            { icon: "bi-play-btn", title: "Crea Playlists", desc: "Organiza tu música favorita como quieras." },
            { icon: "bi-phone", title: "Multidispositivo", desc: "Disfruta tu música en móvil, tablet o desktop." }
          ].map((item, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="p-4 rounded shadow-lg bg-dark benefit-card h-100">
                <i className={`bi ${item.icon} fs-1 mb-3 text-gradient`}></i>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos extra */}
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #0d6efd, #6610f2);
        }
        .gradient-text {
          background: linear-gradient(90deg, #ff6ec4, #7873f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-glow {
          background-color: #ff6ec4;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          font-size: 1.2rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(255, 110, 196, 0.6);
        }
        .btn-glow:hover {
          box-shadow: 0 0 30px rgba(255, 110, 196, 0.9);
          transform: translateY(-2px);
        }
        .about-img {
          width: 220px;
          height: 220px;
          object-fit: cover;
        }
        .animated-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,110,196,0.3) 0%, rgba(102,16,242,0.2) 100%);
          animation: pulse 3s infinite;
          z-index: -1;
        }
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.7; }
        }
        .benefit-card {
          background: rgba(255,255,255,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.6);
        }
        .text-gradient {
          background: linear-gradient(90deg, #ff6ec4, #7873f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default About;

