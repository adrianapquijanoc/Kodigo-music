function Home() {
  const musicaDelMomento = [
    { titulo: "Canción Pop 🎶", artista: "Artista Famoso", imagen: "https://via.placeholder.com/600x400" },
    { titulo: "Hit del Verano 😎", artista: "Grupo del Momento", imagen: "https://via.placeholder.com/600x400" },
    { titulo: "Balada Épica ❤️", artista: "Solista Estelar", imagen: "https://via.placeholder.com/600x400" },
    { titulo: "Ritmo Latino 💃", artista: "Banda Caliente", imagen: "https://via.placeholder.com/600x400" },
    { titulo: "Rock Clásico 🤘", artista: "Leyenda del Rock", imagen: "https://via.placeholder.com/600x400" },
  ];

  return (
    <div className="container mt-5">
      {/* Jumbotron/Hero Section */}
      <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow-sm">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold">Bienvenido a Kodigo Music 🎵</h1>
          <p className="fs-4">Tu música favorita en un solo lugar.</p>
          <button className="btn btn-light btn-lg mt-3" type="button">
            Explora ahora
          </button>
        </div>
      </div>

      {/* Sección de Música del Momento con Carrusel */}
      <div className="row my-5">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Música del Momento</h2>
        </div>
        <div className="col-12">
          <Carousel indicators={false}>
            {musicaDelMomento.map((cancion, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 rounded-3"
                  src={cancion.imagen}
                  alt={`Portada de ${cancion.titulo}`}
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-2">
                  <h3>{cancion.titulo}</h3>
                  <p>{cancion.artista}</p>
                  <button className="btn btn-sm btn-outline-light">
                    Escuchar
                  </button>
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