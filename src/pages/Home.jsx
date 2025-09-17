import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Home() {
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
    }
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <div className="text-center py-5 bg-primary">
        <h1 className="display-4 fw-bold">Bienvenido a <span className="text-warning">Kodigo Music 🎵</span></h1>
        <p className="lead">Tu música favorita en un solo lugar, disponible en cualquier dispositivo.</p>
        <Link to="/about" className="btn btn-light btn-lg mt-3">Explorar ahora</Link>
      </div>

      {/* Carrusel */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">🎶 Música del Momento</h2>
        <Carousel interval={3000} pause="hover" className="shadow rounded-3">
          {musicaDelMomento.map((cancion, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 rounded-3"
                src={cancion.imagen}
                alt={cancion.titulo}
                style={{ maxHeight: "450px", objectFit: "cover" }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-2">
                <h5>{cancion.titulo}</h5>
                <p>{cancion.artista}</p>
                <a href={cancion.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light">
                  Escuchar en YouTube
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
