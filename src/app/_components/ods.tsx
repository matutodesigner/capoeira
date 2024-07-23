'use client'
import Image from 'next/image'
import logoOds from '@/images/ODS.png'
import svg1 from '@/images/img1.png'
import svg2 from '@/images/img2.png'
import svg3 from '@/images/img3.png'
import svg4 from '@/images/img4.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Ods() {
  const imageRefs = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    const animateFrom = (elem: HTMLElement, delay: number) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'expo',
          delay,
        },
      )
    }

    imageRefs.current.forEach((elem, index) => {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => animateFrom(elem, index * 0.2),
        onEnterBack: () => animateFrom(elem, index * 0.2),
        onLeave: () =>
          gsap.to(elem, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            duration: 1.5,
            ease: 'expo',
          }),
      })
    })
  }, [])

  return (
    <div className="bg-muted md:py-52 py-28">
      <div className="container">
        <Image
          className="mx-auto"
          src={logoOds}
          alt="Objetivos de Desenvolvimento Sustentável"
        />
        <div className="grid md:grid-cols-4 grid-cols-2 mt-12 md:gap-28 gap-8 justify-between">
          <Image
            ref={(el) => {
              imageRefs.current[0] = el!
            }}
            src={svg1}
            width={150}
            alt=""
          />
          <Image
            ref={(el) => {
              imageRefs.current[1] = el!
            }}
            src={svg2}
            width={150}
            alt=""
          />
          <Image
            ref={(el) => {
              imageRefs.current[2] = el!
            }}
            src={svg3}
            width={150}
            alt=""
          />
          <Image
            ref={(el) => {
              imageRefs.current[3] = el!
            }}
            src={svg4}
            width={150}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
