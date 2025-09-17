import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container my-5 px-3">
      <div className="row align-items-center">
        {/* Texto */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className="fw-bold display-6 text-primary">
            Explora <span className="text-dark">Kodigo Music</span>
          </h2>
          <p className="fs-5">
            Descubre canciones, crea playlists y disfruta de la mejor experiencia
            musical en cualquier dispositivo. 🎧
          </p>
          <Link to="/register" className="btn btn-primary btn-lg mt-3">
            Empieza ahora
          </Link>
        </div>

        {/* Imagen ilustrativa */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
            alt="Explora música"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

