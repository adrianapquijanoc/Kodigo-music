import { Link } from 'react-router-dom'
export default function Header(){
return (
<header className="bg-white shadow">
<div className="container mx-auto p-4 flex items-center justify-between">
<h3 className="text-xl font-bold">Kodigo Music</h3>
<nav className="space-x-4">
<Link to="/" className="hover:underline">Home</Link>
<Link to="/browse" className="hover:underline">Browse</Link>
</nav>
</div>
</header>
)
}