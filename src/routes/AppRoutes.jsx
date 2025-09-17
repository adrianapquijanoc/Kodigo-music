import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Browse from '../pages/Browse'


export default function AppRoutes(){
return (
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/browse" element={<Browse/>} />
<Route path="*" element={<div className="text-center">404 - Página no encontrada</div>} />
</Routes>
)
}