import { AiOutlineLinkedin } from "react-icons/ai"

export default function Hero() {
  return (
    <section className="bg-brand-950 text-brand-100">
      <div className="container mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 p-4 py-20 md:flex-row md:py-32">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="block font-handwriting text-3xl text-brand-400">
              Olá, me chamo
            </span>
            <span className="mr-2 font-headline text-5xl font-semibold text-white">
              Higor
            </span>
            <span className="font-headline text-5xl font-light text-brand-200">
              Costa
            </span>
          </h1>

          <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold text-brand-100 md:justify-start">
            <div className="h-1 w-12 rounded-full bg-brand-400" />
            Desenvolvedor FullStack
          </h2>

          <p className="mb-8 text-center text-brand-100/70 md:text-left">
            Sou um desenvolvedor que ama criar coisas para a web. Transformo
            ideias em sites e aplicações web.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="rounded-md bg-brand-400 px-5 py-2.5 font-headline text-sm font-semibold text-brand-950 transition hover:bg-brand-200"
            >
              Fale comigo
            </a>
            <a
              href="https://www.linkedin.com/in/higor--costa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-brand-400/40 px-5 py-2.5 font-headline text-sm font-semibold text-brand-100 transition hover:border-brand-400"
            >
              <AiOutlineLinkedin className="h-4 w-4" />
              Meu LinkedIn
            </a>
          </div>
        </div>

        <div className="flex basis-1/2 items-center justify-center">
          <div className="rounded-full bg-gradient-to-br from-brand-400 via-brand-200 to-brand-800 p-1.5">
            <img
              src="https://github.com/higorcos.png"
              alt="Foto de Higor Costa"
              className="h-40 w-40 rounded-full border-4 border-brand-950 object-cover md:h-64 md:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
