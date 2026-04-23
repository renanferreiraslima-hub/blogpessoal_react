import { InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react"
import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function Footer() {
    let data = new Date().getFullYear()
    const { usuario } = useContext(AuthContext)

    let component: ReactNode
    
    if (usuario.token !== "") {
        component = ( 
            <footer className="flex justify-center bg-indigo-900 text-white border-t-4 border-indigo-500">
                <div className="container flex flex-col items-center py-8 gap-4">
                    
                    <div className="flex flex-col items-center text-center">
                        <p className='text-xl font-extrabold tracking-tight'>
                            Blog Pessoal Generation
                        </p>
                        <p className='text-sm text-indigo-200 mt-1'>
                            Copyright © {data} | Todos os direitos reservados
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p className='text-md font-medium text-slate-100'>Conecte-se conosco</p>
                        <div className='flex gap-4'>
                            <a 
                                href="https://www.linkedin.com/in/renanferreiralima/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="transition-all duration-300 transform hover:scale-125 hover:text-indigo-400"
                            >
                                <LinkedinLogoIcon size={38} weight='bold' />
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="transition-all duration-300 transform hover:scale-125 hover:text-indigo-400"
                            >
                                <InstagramLogoIcon size={38} weight='bold' />
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="transition-all duration-300 transform hover:scale-125 hover:text-indigo-400"
                            >
                                <GithubLogoIcon size={38} weight='bold' />
                            </a>
                        </div>
                    </div>

                    {/* Linha Decorativa opcional */}
                    <div className="w-1/4 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-30 mt-2"></div>
                </div>
            </footer>
        )
    }

    return (
        <>
            { component }
        </>
    )
}

export default Footer