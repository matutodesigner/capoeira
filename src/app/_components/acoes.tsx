'use client'
import Capoeira from '@/images/acoes/capoeira.jpg'
import Maculele from '@/images/acoes/maculele.jpg'
import SambaDeRoda from '@/images/acoes/samba de roda.jpg'
import JogoSudeste from '@/images/acoes/Jogo do sudeste.jpg'
import MineiroPau from '@/images/acoes/mineiro pau.jpg'
import Musicalidade from '@/images/acoes/musicalidade.jpg'
import Cultural from '@/images/acoes/cultural.jpg'
import Artesanato from '@/images/acoes/artesanato.jpg'
import Comunitaria from '@/images/acoes/Comunitaria.jpg'
import Comida from '@/images/acoes/comida.jpg'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const acoes = [
  { image: Capoeira, title: 'Capoeria' },
  { image: Maculele, title: 'Maculelê' },
  { image: SambaDeRoda, title: 'Samba de Roda' },
  { image: JogoSudeste, title: 'Jogo do Sudeste' },
  { image: MineiroPau, title: 'Mineiro Pau' },
  { image: Musicalidade, title: 'Musicalidade' },
  { image: Cultural, title: 'Patrimônio Cultural' },
  { image: Artesanato, title: 'Artesanato' },
  { image: Comunitaria, title: 'Ações de Base Comunitária' },
  { image: Comida, title: 'Valorização de Identidade Cultural' },
]

export function Acoes() {
  const acoesRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    acoesRefs.current.forEach((elem, index) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'expo',
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1,
        },
      )
    })
  }, [])

  return (
    <div className="bg-muted py-56">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {acoes.map((acao, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) acoesRefs.current[index] = el
            }}
            className="relative group rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={acao.image}
              alt={acao.title}
              className="w-full h-full object-cover"
            />
            <div className="p-6 absolute bg-black/50 cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-center text-white">
                {acao.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
