import React from "react"

function Home() {
  return (
    <div className="container my-4">
      <div className="row mb-4">
        <div className="col-md-8 mx-auto">
          <input type="text" className="form-control form-control-lg" placeholder="Buscar canciones, artistas o álbumes..." />
        </div>
      </div>

      <h3 className="mb-4">Recomendados</h3>
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((album) => (
          <div className="col-md-4 col-lg-2 mb-4" key={album}>
            <div className="card h-100 shadow-sm">
              <img src={`https://picsum.photos/200?random=${album}`} className="card-img-top" alt="Álbum" />
              <div className="card-body text-center">
                <h6 className="card-title">Álbum {album}</h6>
                <p className="text-muted mb-0">Artista {album}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
