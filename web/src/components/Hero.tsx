import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />
      <div className="max-w-[420px] space-y-4">
        <h1 className=" text-4xl font-bold leading-tight text-gray-50 ">
          Sua Cápsula do Tempo
        </h1>
        <p className="text-tg mt-1 leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      {/* Button */}
      <a
        href=""
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700"
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}