'use client'
import { Acoes } from './_components/acoes'
import { Certificados } from './_components/certificados'
import { Hero } from './_components/hero'

import { Missao } from './_components/missao'
import { Ods } from './_components/ods'
import { Parceiros } from './_components/parceiros'
import { Transparencia } from './_components/transparencia'

import dynamic from 'next/dynamic'

const Maps = dynamic(() => import('./_components/maps'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Hero />
      <Missao />
      <Ods />
      <Parceiros />
      <Acoes />
      <Certificados />
      <Transparencia />
      <Maps />
    </main>
  )
}
