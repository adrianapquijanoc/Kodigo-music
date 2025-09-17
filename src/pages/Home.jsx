import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Home() {
  const user = JSON.parse(localStorage.getItem("user")); // Verificar si hay sesión

  const musicaDelMomento = [
    { 
      titulo: "Canción Pop 🎶", 
      artista: "Michael Jackson", 
      imagen: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/1219D/production/_103214147_gettyimages-88688373.jpg.webp", 
      url: "https://www.youtube.com/watch?v=m1w92hV5gRk&list=RDm1w92hV5gRk&start_radio=1" 
    },
    { 
      titulo: "Hit del Verano 😎", 
      artista: "Karol G", 
      imagen:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNAuv7yPiyDR7WNIUncJ347YINWJyrr6wGjMofYZG3mOVZFF7BWP31DX3jlsiCyx3s1r4UydsXncTIZ8PRaFxf-HHLk4YFMNYNILmtwg", 
      url:"https://www.youtube.com/watch?v=dhtlhXozNII&list=RDdhtlhXozNII&start_radio=1" 
    },
    { 
      titulo: "Balada Épica ❤️", 
      artista: "Shakira", 
      imagen: "https://www.hola.com/horizon/landscape/701889d25af9-shakira-z.jpg", 
      url: "https://www.youtube.com/watch?v=pWgVRK_Ggww&list=RDpWgVRK_Ggww&start_radio=1" 
    },
    { 
      titulo: "Ritmo Latino 💃", 
      artista: "Grupo Niche", 
      imagen: "https://pluranza.com/wp-content/uploads/2023/04/grupo-niche-los-maestros-de-la-salsa-scaled.jpeg", 
      url: "https://www.youtube.com/watch?v=yEqhKXOkUlA&list=RDyEqhKXOkUlA&start_radio=1" 
    },
    { 
      titulo: "Rock Clásico 🤘", 
      artista: "Maná", 
      imagen: "https://es.rollingstone.com/wp-content/uploads/2025/02/Mana-se-convierte-en-la-primera-banda-en-espanol-en-ser-nominada-Salon-de-la-Fama-del-Rock-Roll-min.jpg", 
      url: "https://www.youtube.com/watch?v=OhXeBoTlCr4&list=RDEM3r4XQJ7Rf7EIvHeRQyXRAA&index=3" 
    },
  ];

  return (
    <div className="container mt-5 px-3">
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow-sm text-center">
        <h1 className="display-6 fw-bold">
          {user ? (
            <>Bienvenido, <span className="text-warning">{user.name} 🎵</span></>
          ) : (
            <>Bienvenido a <span className="text-warning">Kodigo Music 🎵</span></>
          )}
        </h1>
        <p className="fs-5">
          Tu música favorita en un solo lugar, disponible en cualquier dispositivo.
        </p>
        <Link to="/about" className="btn btn-light btn-lg mt-3">
          Explora ahora
        </Link>
      </div>

      {/* Música del Momento */}
      <div className="row my-5">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">🎶 Música del Momento</h2>
        </div>
        <div className="col-12 col-md-10 offset-md-1">
          <Carousel interval={3000} pause="hover" className="shadow rounded-3">
            {musicaDelMomento.map((cancion, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 img-fluid rounded-3"
                  src={cancion.imagen}
                  alt={`Portada de ${cancion.titulo}`}
                  style={{ objectFit: "cover", maxHeight: "450px" }}
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-2">
                  <h3 className="h5">{cancion.titulo}</h3>
                  <p className="small">{cancion.artista}</p>
                  <a 
                    href={cancion.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm btn-outline-light"
                  >
                    Escuchar en YouTube
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
