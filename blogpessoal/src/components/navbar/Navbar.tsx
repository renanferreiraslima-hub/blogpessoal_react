import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="bg-indigo-900 text-white shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">

                <h1 className="text-xl font-bold">
                    Blog Pessoal Renan Lima
                </h1>

                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/sobre">Sobre</Link>

                    <button className="bg-indigo-500 px-4 py-2 rounded-lg">
                        Login
                    </button>
                </div>

                <button 
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-indigo-800 px-4 pb-4 flex flex-col gap-3">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/posts" onClick={() => setMenuOpen(false)}>Posts</Link>
                    <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;