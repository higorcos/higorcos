import { AiOutlineLinkedin } from "react-icons/ai"

export default function Hero() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-tr from-black to-gray-900 text-white">
      <div className="container mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 p-4 py-20 md:flex-row md:py-28">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="block font-handwriting text-3xl">
              Olá, me chamo
            </span>
            <span className="mr-2 font-headline text-5xl font-semibold">
              Higor
            </span>
            <span className="font-headline text-5xl font-light text-blue-400">
              Costa
            </span>
          </h1>

          <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
            <div className="h-1 w-12 rounded-full bg-blue-600" />
            Desenvolvedor FullStack
          </h2>

          <p className="mb-8 text-center text-gray-400 md:text-left">
            Sou um desenvolvedor que ama criar coisas para a web. Transformo
            ideias em sites e aplicações web.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-5 py-2.5 font-headline text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Fale comigo
            </a>
            <a
              href="https://www.linkedin.com/in/higor--costa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 font-headline text-sm font-semibold text-white transition hover:border-white/40"
            >
              <AiOutlineLinkedin className="h-4 w-4" />
              Meu LinkedIn
            </a>
          </div>
        </div>

        <div className="flex basis-1/2 items-center justify-center">
          <img
            src="https://github.com/higorcos.png"
            alt="Foto de Higor Costa"
            className="h-40 w-40 rounded-full border-4 border-blue-600 object-cover md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  )
}
