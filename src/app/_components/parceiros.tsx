import Image from 'next/image'
import Link from 'next/link'
import parceiro1 from '@/images/parceiros/cultura viva.png'
import parceiro2 from '@/images/parceiros/ministerio da cultura.png'
import parceiro3 from '@/images/parceiros/marcainstitucional.png'
import parceiro4 from '@/images/parceiros/2799-logo.png'
import parceiro5 from '@/images/parceiros/6SgOU99tvsmJfuXSc2Cgh1wH7ooKac7eRT6kAOA0.svg'
import parceiro6 from '@/images/parceiros/images.png'
import parceiro7 from '@/images/parceiros/images.jpeg'
import parceiro8 from '@/images/parceiros/277799482_687511829335516_8690393074434056965_n.jpg'
import parceiro9 from '@/images/parceiros/arqbe.png'

const ParceirosData = [
  { link: 'http://culturaviva.gov.br/agente/27981/', imgSrc: parceiro1 },
  { link: 'https://www.gov.br/cultura/pt-br', imgSrc: parceiro2 },
  { link: 'https://www.secult.mg.gov.br/', imgSrc: parceiro3 },
  {
    link: 'https://mapaosc.ipea.gov.br/detalhar/1242682/associacao-de-capoeira-identidade-cultural',
    imgSrc: parceiro4,
  },
  {
    link: 'https://pontosdeculturamg.org.br/culture-point/details/4',
    imgSrc: parceiro5,
  },
  {
    link: 'https://www.youtube.com/watch?v=6qOilta5fr8',
    imgSrc: parceiro6,
  },
  {
    link: 'https://www.instagram.com/gruporaiz_capoeira/',
    imgSrc: parceiro7,
  },
  {
    link: 'https://www.instagram.com/icstudioa/',
    imgSrc: parceiro8,
  },
  {
    link: 'https://www.instagram.com/arqbe.2023/',
    imgSrc: parceiro9,
  },
]

export function Parceiros() {
  return (
    <div className="container md:py-52 py-28">
      <h1 className="text-5xl font-bold text-center mb-18">Parceiros</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-16 items-center">
        {ParceirosData.map((parceiro, index) => (
          <Link key={index} href={parceiro.link}>
            <Image
              src={parceiro.imgSrc}
              alt={`Parceiro ${index + 1}`}
              width={300}
              height={200}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
