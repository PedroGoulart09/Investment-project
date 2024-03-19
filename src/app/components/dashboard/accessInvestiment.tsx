'use client';
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Landmark } from 'lucide-react';
import { scroll } from '@/app/utils/functions';
import { useInfoInvestment } from '@/app/hooks/useInfoInvestment';


export default function AccessInvestiment() {
  return (
    <section className='bg-primary'>
      <div className="flex flex-wrap justify-around items-center space-y-4">
        <div className="text-white text-center">
          <p className="font-bold text">Petrobras</p>
          <p className='text'>274.9</p>
          <p className="text-sm text-green-500 text">+2.47%</p>
        </div>

        <div className="text-white text-center text">
          <p className="font-bold">Tesla</p>
          <p className='text'>4.05</p>
          <p className="text-sm text-green-500 text">+2.53%</p>
        </div>

        <div className="text-white text-center text">
          <p className="font-bold">Facebook</p>
          <p className='text'>6.05</p>
          <p className="text-sm text-red-500 text">-2.5%</p>
        </div>

        <div className="text-white text-center text">
          <p className="font-bold">McDonald's</p>
          <p className='text'>4.85</p>
          <p className="text-sm text-green-500 text">+2.11%</p>
        </div>

        <div className="text-white text-center text">
          <p className="font-bold">Banco do Brasil</p>
          <p className='text'>34.6</p>
          <p className="text-sm text-green-500 text">+1.03%</p>
        </div>

        <div className="text-white text-center text">
          <p className="font-bold">Itaú</p>
          <p className='text'>402.8</p>
          <p className="text-sm text-red-500 text">-2.54%</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center pt-10 py-10'>
        <div className='flex flex-col gap-5 p-12 max-w-md mx-auto'>
          <div className='flex items-center justify-start'>
            <Landmark className='text-white' size={40} />
            <h1 className='text-white text-3xl'>PG BANK</h1>
          </div>
          <h1 className='text-white text-3xl text'>
            Faça seus investimentos com a PG BANK, a qualquer hora e em  qualquer lugar.
          </h1>
          <h2 className='text-white text-1xl text' >
            Invista nos ativos de CFDs mais populares e procurados do mundo, incluindo ícones globais como Tesla e outros líderes de mercado.  Tudo o que você procura em uma  plataforma de investimento definitiva, no dispositivo de sua escolha.
          </h2>

          <Button
            className='bg-customBtn hover:bg-customBtn rounded text-white'
            onClick={scroll}
          >
            Cadastre-se

          </Button>
        </div>

        <div className="w-full md:w-auto">
          <Image
            src="https://static.cdnroute.io/lp/mobile-registr/svstatic/assets/intro/desktop--new.webp"
            alt='imagem de um celular com a tela do app aberta'
            width={920}
            height={600}

          />
        </div>
      </div>


    </section>

  )
}