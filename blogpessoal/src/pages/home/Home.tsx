function Home() {
    return (
        <section className="bg-linear-to-r from-indigo-900 via-purple-900 to-indigo-800 min-h-screen flex items-center">
            
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">

                {/* TEXTO */}
                <div className="flex flex-col gap-6">
                    <span className="bg-indigo-500 w-fit px-3 py-1 rounded-full text-sm">
                        Plataforma Digital
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Transforme ideias em <span className="text-indigo-400">conteúdo</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200">
                        Compartilhe suas opiniões, conecte-se com pessoas e construa sua presença online de forma simples e rápida.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-lg font-semibold">
                            Começar Agora
                        </button>

                        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition">
                            Explorar
                        </button>
                    </div>
                </div>

                {/* IMAGEM */}
                <div className="flex justify-center">
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Home"
                            className="w-64 md:w-80"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home