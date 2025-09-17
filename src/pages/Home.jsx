function Home() {
  // Datos de ejemplo para las canciones del momento
  const musicaDelMomento = [
    {
      titulo: "Canción Pop 🎶",
      artista: "Artista Famoso",
      imagen: "https://via.placeholder.com/150",
    },
    {
      titulo: "Hit del Verano 😎",
      artista: "Grupo del Momento",
      imagen: "https://via.placeholder.com/150",
    },
    {
      titulo: "Balada Épica ❤️",
      artista: "Solista Estelar",
      imagen: "https://via.placeholder.com/150",
    },
    {
      titulo: "Ritmo Latino 💃",
      artista: "Banda Caliente",
      imagen: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mt-5">
      {/* Jumbotron/Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold">Bienvenido a Kodigo Music 🎵</h1>
          <p className="fs-4">Tu música favorita en un solo lugar.</p>
          <button className="btn btn-primary btn-lg mt-3" type="button">
            Explora ahora
          </button>
        </div>
      </div>

      {/* Sección de Música del Momento */}
      <div className="row">
        <div className="col-12 mb-4">
          <h2 className="text-center">Música del Momento</h2>
        </div>
        {musicaDelMomento.map((cancion, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={cancion.imagen}
                className="card-img-top"
                alt={`Portada de ${cancion.titulo}`}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{cancion.titulo}</h5>
                <p className="card-text text-muted">{cancion.artista}</p>
              </div>
              <div className="card-footer bg-transparent border-0 text-center">
                <button className="btn btn-sm btn-outline-primary">
                  Escuchar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;