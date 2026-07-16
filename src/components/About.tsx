export default function About() {
  return (
    <section className="bg-brand-950 px-4 py-20 text-brand-100">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="mb-8 font-bold">
          <span className="mr-2 font-headline text-3xl text-white">Sobre</span>
          <span className="font-handwriting text-4xl text-brand-400">Mim</span>
        </h2>

        <p className="mx-auto max-w-2xl leading-relaxed text-brand-100/70">
          Sou desenvolvedor FullStack, formado em Ciência e Tecnologia pela
          UFMA e atualmente cursando Engenharia da Computação na mesma
          instituição. Tenho mais de dois anos de experiência construindo
          sistemas web, APIs e portais para o setor público e para empresas,
          sempre com foco em performance, qualidade de código e boa
          experiência do usuário.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-sm">
          <a
            href="#contact"
            className="rounded-full border border-brand-400/30 bg-brand-800/30 px-4 py-2 text-brand-100 transition hover:border-brand-400"
          >
            higorpinheirocosta@gmail.com
          </a>
          <a
            href="#contact"
            className="rounded-full border border-brand-400/30 bg-brand-800/30 px-4 py-2 text-brand-100 transition hover:border-brand-400"
          >
            São Luís do Maranhão
          </a>
          <span className="flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-800/30 px-4 py-2 text-brand-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-200 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-200"></span>
            </span>
            Disponível para novos projetos
          </span>
        </div>
      </div>
    </section>
  )
}
