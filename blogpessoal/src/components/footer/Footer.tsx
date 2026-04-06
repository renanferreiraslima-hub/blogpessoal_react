function Footer() {
    return (
        <footer className="bg-indigo-950 text-gray-300 mt-10">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* SOBRE */}
                <div>
                    <h2 className="text-white text-2xl font-bold mb-2">
                        MeuBlog
                    </h2>
                    <p className="text-sm">
                        Um espaço para compartilhar ideias, pensamentos e aprendizados.
                    </p>
                </div>

                {/* LINKS */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Navegação</h3>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Posts</a></li>
                        <li><a href="#" className="hover:text-white">Sobre</a></li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Contato</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        <span>Email: contato@email.com</span>
                        <span>Instagram: @meublog</span>
                    </div>
                </div>

            </div>

            {/* COPY */}
            <div className="text-center text-sm py-4 border-t border-indigo-800">
                © 2026 MeuBlog - Todos os direitos reservados
            </div>
        </footer>
    );
}

export default Footer;