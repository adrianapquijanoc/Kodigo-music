import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Kodigo Music</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Explorar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Registro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
