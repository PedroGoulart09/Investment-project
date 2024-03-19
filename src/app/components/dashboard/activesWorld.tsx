"use client"
import React from 'react'
import Graphic from './graphic'

export default function ActivesWorld() {
  return (
    <section className='bg-slate-50 flex justify-center flex-col text-center gap-10 py-14'>
        <p className='font-bold'>+ de 300 ativos disponíveis</p>
            <h1 className='font-bold text-4xl text'>Invista nos ativos mais populares do mundo</h1>
            <h3 className='text-2xl text colorText'>e indústrias estabelecidas a emergentes em franca ascensão, oferecemos uma variedade de opções <br /> de rotas diferentes para um investimento inteligente.</h3>
       <Graphic />
    </section>
  )
}
