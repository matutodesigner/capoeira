import { Acoes } from './_components/acoes'
import { Hero } from './_components/hero'
import { Missao } from './_components/missao'
import { Ods } from './_components/ods'
import { Parceiros } from './_components/parceiros'

export default function Home() {
  return (
    <main>
      <Hero />
      <Missao />
      <Ods />
      <Parceiros />
      <Acoes />
    </main>
  )
}
