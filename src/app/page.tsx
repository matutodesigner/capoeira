'use client'
import { Acoes } from './_components/acoes'
import { Certificados } from './_components/certificados'
import { Hero } from './_components/hero'
import { Maps } from './_components/maps'
import { Missao } from './_components/missao'
import { Ods } from './_components/ods'
import { Parceiros } from './_components/parceiros'
import { Transparencia } from './_components/transparencia'

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
    </main>
  )
}
