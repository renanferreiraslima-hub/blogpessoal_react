import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { UserCircle, SignOut, ChatTeardropText, SquaresFour, PlusCircle } from "@phosphor-icons/react";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4 sticky top-0 z-50 shadow-md border-b border-indigo-800'>
                <div className="container flex justify-between items-center text-lg px-4">
                    
                    {/* Logo/Nome */}
                    <Link to='/home' className="text-2xl font-black tracking-tighter transition-all hover:text-indigo-300">
                        BLOG<span className="text-indigo-400">PESSOAL</span>
                    </Link>

                    {/* Links de Navegação */}
                    <div className='flex gap-6 items-center'>
                        <Link to='/postagens' className='flex items-center gap-1 hover:text-indigo-300 transition-colors font-semibold'>
                            <ChatTeardropText size={20} />
                            Postagens
                        </Link>
                        
                        <Link to='/temas' className='flex items-center gap-1 hover:text-indigo-300 transition-colors font-semibold'>
                            <SquaresFour size={20} />
                            Temas
                        </Link>

                        <Link to='/cadastrartema' className='flex items-center gap-1 hover:text-indigo-300 transition-colors font-semibold'>
                            <PlusCircle size={20} />
                            Novo Tema
                        </Link>

                        <Link to='/perfil' className='flex items-center gap-1 hover:text-indigo-300 transition-colors font-semibold'>
                            <UserCircle size={24} />
                            Perfil
                        </Link>

                        {/* Botão Sair com destaque */}
                        <button 
                            onClick={logout} 
                            className='ml-4 bg-indigo-700 hover:bg-rose-600 px-4 py-1.5 rounded-lg flex items-center gap-2 transition-all duration-300 font-bold shadow-sm'
                        >
                            <SignOut size={20} />
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { component }
        </>
    )
}

export default Navbar