import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Perfil() {
    const navigate = useNavigate()
    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta("Você precisa estar logado", 'info')
            navigate("/")
        }
    }, [usuario.token, navigate])

    return (
        <div className="flex justify-center items-start min-h-screen bg-slate-50 pt-8 px-4">
            <div className="container max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
                
                {/* Header/Capa */}
                <div className="relative h-64 bg-gradient-to-r from-indigo-800 to-violet-700">
                    <img
                        className="w-full h-full object-cover mix-blend-overlay opacity-50"
                        src="https://i.imgur.com/ZZFAmzo.jpg"
                        alt="Capa do Perfil"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Foto de Perfil */}
                <div className="flex justify-center">
                    <img
                        className="rounded-full w-48 h-48 md:w-56 md:h-56 mx-auto mt-[-6rem] md:mt-[-8rem] 
                                   border-8 border-white shadow-xl relative z-20 object-cover bg-white"
                        src={usuario.foto || 'https://i.imgur.com/8RK9k9p.png'} // Placeholder caso não tenha foto
                        alt={`Foto de perfil de ${usuario.nome}`}
                    />
                </div>

                {/* Informações do Usuário */}
                <div className="px-8 py-10 flex flex-col items-center gap-4 text-center">
                    <div className="space-y-1">
                        <h2 className="text-4xl font-black text-slate-800">
                            {usuario.nome}
                        </h2>
                        <p className="text-indigo-600 font-semibold text-lg">
                            Membro da Comunidade
                        </p>
                    </div>

                    <div className="w-full max-w-md mt-6 grid grid-cols-1 gap-4">
                        <div className="flex flex-col p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Email</span>
                            <span className="text-slate-700 font-medium break-all">{usuario.usuario}</span>
                        </div>
                        
                        <div className="flex flex-col p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Status</span>
                            <span className="text-green-500 font-bold flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Online
                            </span>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
                            Editar Perfil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil