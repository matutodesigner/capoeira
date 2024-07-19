import certificado1 from '@/images/certificados/Utilidade Pública Municipal.jpg'
import certificado2 from '@/images/certificados/CERTIFICADOS PONTO DE CULTURA-2.jpg'
import Image from 'next/image'

export function Certificados() {
  return (
    <div className="py-56 bg-blue-600">
      <div className="container">
        <h3 className="text-5xl text-white font-bold uppercase text-center mb-12">
          Certificados
        </h3>
        <div className="grid grid-cols-3 gap-6 items-center">
          <div className="">
            <Image src={certificado1} alt="" />
          </div>
          <div className="col-span-2">
            <Image src={certificado2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
