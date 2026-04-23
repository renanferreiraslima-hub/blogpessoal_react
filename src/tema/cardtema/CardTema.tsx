import { Link } from 'react-router-dom'
import type Tema from '../../models/Tema'

interface CardTemaProps {
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className='group flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100'>
            
            {/* Header com indicador lateral */}
            <header className='py-4 px-6 bg-gradient-to-r from-indigo-800 to-indigo-600 text-white font-bold text-xl flex justify-between items-center'>
                <span>Tema</span>
                <span className="text-indigo-200 text-xs uppercase tracking-widest">ID: {tema.id}</span>
            </header>

            {/* Conteúdo do Tema */}
            <div className='p-8 flex-grow flex items-center bg-white'>
                <p className='text-2xl font-medium text-slate-700 leading-relaxed'>
                    {tema.descricao}
                </p>
            </div>

            {/* Ações */}
            <div className='flex border-t border-slate-100'>
                <Link 
                    to={`/editartema/${tema.id}`}
                    className='w-full text-slate-700 bg-slate-50 hover:bg-indigo-600 hover:text-white 
                               flex items-center justify-center py-3 font-bold transition-all duration-200'
                >
                    <button>Editar</button>
                </Link>

                <Link 
                    to={`/deletartema/${tema.id}`}
                    className='w-full text-white bg-rose-500 hover:bg-rose-700
                               flex items-center justify-center py-3 font-bold transition-all duration-200'
                >
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardTema