import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-indigo-900 text-white shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">

                {/* LOGO */}
                <h1 className="text-xl font-bold">
                    MeuBlog
                </h1>

                {/* MENU DESKTOP */}
                <div className="hidden md:flex gap-6 items-center">
                    <a href="#" className="hover:text-indigo-300 transition">Home</a>
                    <a href="#" className="hover:text-indigo-300 transition">Posts</a>
                    <a href="#" className="hover:text-indigo-300 transition">Sobre</a>

                    <button className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
                        Login
                    </button>
                </div>

                {/* BOTÃO MOBILE */}
                <button 
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* MENU MOBILE */}
            {menuOpen && (
                <div className="md:hidden bg-indigo-800 px-4 pb-4 flex flex-col gap-3">
                    <a href="#" className="hover:text-indigo-300">Home</a>
                    <a href="#" className="hover:text-indigo-300">Posts</a>
                    <a href="#" className="hover:text-indigo-300">Sobre</a>

                    <button className="bg-indigo-500 py-2 rounded-lg">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;