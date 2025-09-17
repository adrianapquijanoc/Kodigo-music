function About() {
  const categorias = [
    { titulo: "Playlists 🎧", desc: "Crea y organiza tus listas de reproducción." },
    { titulo: "Géneros 🎼", desc: "Explora música de todos los estilos." },
    { titulo: "Artistas ⭐", desc: "Descubre a tus cantantes y bandas favoritas." },
    { titulo: "Novedades 🚀", desc: "Lo último en tendencias musicales." },
  ];

  return (
    <div className="container my-5">
      {/* Hero */}
      <div className="p-5 mb-5 bg-dark text-white rounded-3 shadow-sm text-center">
        <h2 className="display-5 fw-bold">Explora Kodigo Music</h2>
        <p className="fs-5">
          Descubre canciones, crea playlists y disfruta de la mejor experiencia musical.
        </p>
      </div>

      {/* Grid de categorías */}
      <div className="row g-4">
        {categorias.map((cat, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title fw-bold">{cat.titulo}</h5>
                <p className="card-text">{cat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
