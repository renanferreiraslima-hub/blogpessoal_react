import { useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";

function Login() {
    const navigate = useNavigate();
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate("/home")
        }
    }, [usuario, navigate])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-slate-50 font-sans">
            
            {/* Lado Esquerdo: Formulário */}
            <div className="flex justify-center items-center p-8 w-full">
                <form 
                    className="flex flex-col w-full max-w-[450px] gap-6 bg-white p-10 rounded-2xl shadow-xl border border-slate-100" 
                    onSubmit={login}
                >
                    <div className="text-center mb-4">
                        <h2 className="text-slate-800 text-4xl font-black mb-2">Bem-vindo</h2>
                        <p className="text-slate-500 font-medium">Acesse sua conta para continuar</p>
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="usuario" className="text-sm font-bold text-slate-700">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="exemplo@email.com"
                            className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            value={usuarioLogin.usuario || ''}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="senha" className="text-sm font-bold text-slate-700">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="••••••••"
                            className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            value={usuarioLogin.senha || ''}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <button 
                        type='submit' 
                        className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 
                                   hover:from-indigo-700 hover:to-violet-700 text-white font-bold 
                                   w-full py-3 shadow-md hover:shadow-lg transition-all flex justify-center items-center"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>

                    <div className="flex items-center gap-2 py-2">
                        <hr className="flex-1 border-slate-200" />
                        <span className="text-slate-400 text-sm font-medium">OU</span>
                        <hr className="flex-1 border-slate-200" />
                    </div>

                    <p className="text-center text-slate-600 font-medium">
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-indigo-600 hover:text-indigo-800 font-bold underline decoration-2 underline-offset-4 transition-colors">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>

            {/* Lado Direito: Imagem com Overlay */}
            <div className="relative hidden lg:block overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent z-10"></div>
                <div 
                    className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] bg-no-repeat 
                               w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-[10s]"
                ></div>
                <div className="absolute bottom-12 left-12 z-20 text-white">
                    <h3 className="text-3xl font-bold">Conecte-se com novas ideias</h3>
                    <p className="text-indigo-100 mt-2">A maior comunidade de troca de pensamentos do país.</p>
                </div>
            </div>
        </div>
    );
}

export default Login;