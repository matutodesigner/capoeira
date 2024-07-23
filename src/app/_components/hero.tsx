'use client'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function Hero() {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef1 = useRef(null)
  const buttonRef2 = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } })

    const title = titleRef.current
    const description = descriptionRef.current
    const button1 = buttonRef1.current
    const button2 = buttonRef2.current

    const statusInitial = {
      opacity: 0,
      y: 100,
    }

    const statusFinish = {
      opacity: 1,
      y: 0,
    }

    tl.fromTo(title, statusInitial, statusFinish)
      .fromTo(description, statusInitial, statusFinish, '-=0.75')
      .fromTo(button1, statusInitial, statusFinish, '-=0.75')
      .fromTo(button2, statusInitial, statusFinish, '-=0.75')
  }, [])

  return (
    <div className="relative">
      <div className="absolute w-full h-screen z-50 justify-center items-center flex flex-col space-y-14">
        <h1 ref={titleRef} className="text-white font-bold uppercase text-9xl">
          IIC
        </h1>
        <h2
          ref={descriptionRef}
          className="text-white font-bold uppercase md:text-5xl text-2xl"
        >
          Instituto Identidade Cultural
        </h2>
        <div className="space-x-6">
          <Button
            ref={buttonRef1}
            size={'lg'}
            variant={'outline'}
            className="bg-transparent text-white"
          >
            Saiba Mais
          </Button>
          <Button ref={buttonRef2} size={'lg'} variant={'secondary'}>
            Contato
          </Button>
        </div>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          <CarouselItem className="h-screen bg-[url('/slide-hero-1.jpg')] bg-cover bg-center animate-zoom"></CarouselItem>
          <CarouselItem className="h-screen bg-[url('/slide-hero-2.jpg')] bg-cover bg-center animate-zoom"></CarouselItem>
          <CarouselItem className="h-screen bg-[url('/slide-hero-3.jpg')] bg-cover bg-center animate-zoom"></CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
