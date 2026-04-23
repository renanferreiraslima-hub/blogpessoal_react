import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Seção Hero - Gradiente Moderno */}
            <div className="bg-gradient-to-r from-indigo-800 to-violet-700 flex justify-center py-16 shadow-lg">
                <div className='container grid grid-cols-1 md:grid-cols-2 text-white px-4 items-center'>
                    
                    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                        <h2 className='text-4xl md:text-6xl font-extrabold tracking-tight'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-lg md:text-2xl text-indigo-100 max-w-md'>
                            Um espaço seguro para expressar seus pensamentos, ideias e opiniões com o mundo.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <div className='transition-all duration-300 transform hover:scale-105'>
                                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors">
                                    <ModalPostagem />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex justify-center">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Ilustração Home"
                            className='w-full max-w-md drop-shadow-2xl animate-float'
                        />
                    </div>
                </div>
            </div>
            
            {/* Seção de Conteúdo */}
            <div className="container mx-auto py-12">
                <div className="flex flex-col gap-8">
                    <div className="px-4">
                        <h3 className="text-3xl font-bold text-slate-800 border-b-4 border-indigo-500 inline-block">
                            Feed Recente
                        </h3>
                    </div>
                    <ListaPostagens />
                </div>
            </div>
        </div>
    )
}

export default Home