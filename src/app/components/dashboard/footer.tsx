import { Landmark } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-primary text-white p-6'>
            <div className='container mx-auto flex justify-around items-center max-sm:flex-col space-y-4 py-16 max-sm:text-center'>
                <div className='flex justify-center text-center items-center'>
                <Landmark className='text-white' size={40} />
                <h2 className='text-2xl font-bold'>PG BANK</h2>

                </div>
                <div>
                    <p>Cidade: São Paulo</p>
                    <p>País: Brasil</p>
                </div>
                <div>
                    <h3 className='text-xl font-bold'>Contato</h3>
                    <p>Email: suporte@gmail.com</p>
                    <p>Telefone: (11) 9999-9999</p>
                </div>
            </div>
            <div className='flex justify-center text-center items-center'>
                <p>PG BANK © 2024. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}