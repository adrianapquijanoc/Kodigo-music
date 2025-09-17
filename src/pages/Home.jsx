import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Home() {
  const musicaDelMomento = [
    { 
      titulo: "Canción Pop 🎶", 
      artista: "Artista Famoso", 
      imagen: "https://via.placeholder.com/800x400",
      url: "https://www.youtube.com/watch?v=abc123"  // 👈 enlace de ejemplo
    },
    { 
      titulo: "Hit del Verano 😎", 
      artista: "Grupo del Momento", 
      imagen: "https://via.placeholder.com/800x400",
      url: "https://www.youtube.com/watch?v=def456" 
    },
    { 
      titulo: "Balada Épica ❤️", 
      artista: "Solista Estelar", 
      imagen: "https://via.placeholder.com/800x400",
      url: "https://www.youtube.com/watch?v=ghi789" 
    },
    { 
      titulo: "Ritmo Latino 💃", 
      artista: "Banda Caliente", 
      imagen: "https://via.placeholder.com/800x400",
      url: "https://www.youtube.com/watch?v=jkl012" 
    },
    { 
      titulo: "Rock Clásico 🤘", 
      artista: "Leyenda del Rock", 
      imagen: "https://via.placeholder.com/800x400",
      url: "https://www.youtube.com/watch?v=mno345" 
    },
  ];

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow-sm">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold">Bienvenido a Kodigo Music 🎵</h1>
          <p className="fs-5">
            Tu música favorita en un solo lugar, disponible en cualquier dispositivo.
          </p>
          <Link to="/about" className="btn btn-light btn-lg mt-3">
            Explora ahora
          </Link>
        </div>
      </div>

      {/* Música del Momento */}
      <div className="row my-5">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Música del Momento</h2>
        </div>
        <div className="col-12 col-md-10 offset-md-1">
          <Carousel interval={3000} pause="hover" className="shadow rounded-3">
            {musicaDelMomento.map((cancion, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 img-fluid rounded-3"
                  src={cancion.imagen}
                  alt={`Portada de ${cancion.titulo}`}
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-2">
                  <h3 className="h5">{cancion.titulo}</h3>
                  <p className="small">{cancion.artista}</p>
                  {/* 🔗 Botón que abre el link de YouTube */}
                  <a 
                    href={cancion.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm btn-outline-light"
                  >
                    Escuchar
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;

