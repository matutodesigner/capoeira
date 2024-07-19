'use client'
import { Eye, HandHeart, Target } from 'lucide-react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

export function Missao() {
  const missaoRef = useRef(null)
  const visaoRef = useRef(null)
  const valoresRef = useRef(null)

  useEffect(() => {
    const animateFrom = (elem: HTMLElement, direction: number, delay = 0) => {
      direction = direction || 1
      const x = 0
      const y = direction * 100
      elem.style.transform = `translate(${x}px, ${y}px)`
      elem.style.opacity = '0'
      gsap.fromTo(
        elem,
        { x, y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto',
          delay,
        },
      )
    }

    const hide = (elem: HTMLElement) => {
      gsap.set(elem, { autoAlpha: 0 })
    }

    gsap.utils.toArray('.card').forEach((value: unknown, index: number) => {
      const elem = value as HTMLElement
      hide(elem)

      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => animateFrom(elem, 1, index * 0.2),
        onEnterBack: () => animateFrom(elem, -1, index * 0.2),
        onLeave: () => hide(elem),
      })
    })
  }, [])

  return (
    <div className="py-52 grid-cols-3 grid gap-16 text-center container">
      <div ref={missaoRef} className="card border p-8 rounded-lg">
        <Target className="mx-auto w-28 h-28 mb-6 text-blue-600" />
        <h1 className="text-4xl font-bold mb-8">Missão</h1>
        <p className="text-muted-foreground">
          Utilizar a capoeira e as culturas populares como ferramentas
          transformadoras para promover ações de base comunitária que ampliem o
          acesso de pessoas em vulnerabilidade social a oportunidades
          educacionais e culturais.
        </p>
      </div>
      <div ref={visaoRef} className="card border p-8 rounded-lg">
        <Eye className="mx-auto w-28 h-28 mb-6 text-blue-600" />
        <h1 className="text-4xl font-bold mb-8">Visão</h1>
        <p className="text-muted-foreground">
          Ser referência regional de contribuição para uma educação
          antirracista, de respeito pela diversidade, de valorização da
          identidade cultural do nosso país e na preservação do patrimônio
          cultural imaterial.
        </p>
      </div>
      <div ref={valoresRef} className="card border p-8 rounded-lg">
        <HandHeart className="mx-auto w-28 h-28 mb-6 text-blue-600" />
        <h1 className="text-4xl font-bold mb-8">Valores</h1>
        <ul className="text-muted-foreground">
          <li>Proteção da Infância e Adolescência;</li>
          <li>Excelência técnica;</li>
          <li>Responsabilidade social;</li>
          <li>Educação Antirracista;</li>
          <li>Cultura de Paz;</li>
          <li>Sustentabilidade;</li>
          <li>Governança transparente.</li>
        </ul>
      </div>
    </div>
  )
}
