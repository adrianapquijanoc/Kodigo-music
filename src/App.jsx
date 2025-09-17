import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register" // ✅ usamos react-hook-form
// import RegisterManual from "./pages/RegisterManual" // ❌ desactivado

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} /> {/* react-hook-form */}
      </Routes>
    </Router>
  )
}

export default App
