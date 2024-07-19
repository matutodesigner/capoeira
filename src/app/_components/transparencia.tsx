import { Facebook, Youtube } from 'lucide-react'
import Link from 'next/link'

export function Transparencia() {
  return (
    <div className="my-36 container">
      <div className="grid grid-cols-3 gap-12">
        <div>
          <h5 className="text-xl mb-2 font-black text-blue-600">
            INSTITUTO IDENTIDADE CULTURAL
          </h5>
          <p>Todos os direitos reservados.</p>
          <p className="mb-8 text-sm">CNPJ 26.915.920/0001-23</p>
          <ul className="text-sm space-y-2">
            <li className="font-bold">Além Paraíba-MG (matriz)</li>
            <li>Santo Antônio do Aventureiro - MG</li>
            <li>Mar de Espanha - MG</li>
            <li>Sapucaia - RJ</li>
            <li>Cordeiro - RJ</li>
            <li>São João de Meriti - RJ</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-blue-600 mb-8 uppercase">
            Transparencia
          </h3>
          <div className="flex flex-col space-y-4">
            <Link
              href="https://drive.google.com/file/d/1W2K5-Zgli03x9Gt3Mr7_3paVMy4K_U96/view?usp=sharing"
              target="_blank"
              className="hover:text-blue-600"
            >
              Estatuto Social
            </Link>
            <Link
              href="https://drive.google.com/file/d/1XG2ERO2CmacDSMd5Tj6tYmlz8Y8qRfVJ/view?usp=drive_link"
              target="_blank"
              className="hover:text-blue-600"
            >
              Regimento Interno
            </Link>
            <Link
              href="https://drive.google.com/file/d/1NVt8DRvpGZxIoX9Q8Wf4IV6HczGMSYNW/view?usp=drive_link"
              target="_blank"
              className="hover:text-blue-600"
            >
              Alvará
            </Link>
            <Link
              href="https://drive.google.com/file/d/1BUnsePi57gAnRAMXTlneeg7wIptqvjpH/view?usp=sharing"
              target="_blank"
              className="hover:text-blue-600"
            >
              CNPJ
            </Link>
            <Link
              href="https://www.identidadecultural.com.br/2023/07/diretoria-quadrienio-2022-2026.html"
              target="_blank"
              className="hover:text-blue-600"
            >
              Diretoria e Conselho
            </Link>
            <Link
              href="https://drive.google.com/drive/folders/1MZbG0T-DTSrnjj5UfChEjDGhwNuDGk5F?usp=sharing"
              target="_blank"
              className="hover:text-blue-600"
            >
              Contabilidade
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-blue-600 mb-8 uppercase">Contato</h3>
          <p className="mb-2">ac.identidadecultural@outlook.com</p>
          <p className="mb-2">
            <Link
              href="http://culturaviva.gov.br/agente/27981/"
              target="_blank"
              className="hover:text-blue-600"
            >
              culturaviva.gov.br
            </Link>
          </p>
          <p className="mb-2">
            <Link
              href="https://nostrilhosdosjongo.blogspot.com/"
              target="_blank"
              className="hover:text-blue-600"
            >
              nostrilhosdosjongo.blogspot.com
            </Link>
          </p>

          <h3 className="font-bold text-blue-600 my-8 uppercase">
            Redes Sociais
          </h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.youtube.com/@IdentidadeCulturalTV/featured"
              target="_blank"
            >
              <Youtube />
            </Link>
            <Link
              href="https://www.facebook.com/ac.identidadecultural/"
              target="_blank"
            >
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
