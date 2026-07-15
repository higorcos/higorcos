export default function About() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="text-sm text-gray-600">
          Tenho alguns projetos executados e gostaria que o próximo seja o
          seu.
        </p>
      </div>

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 sm:flex-row sm:items-start">
        <img
          src="https://github.com/higorcos.png"
          alt="Foto de Higor Costa"
          className="h-40 w-40 shrink-0 rounded-lg object-cover shadow-md"
        />

        <div className="w-full rounded-lg bg-gray-50 p-6 shadow-sm">
          <p className="font-handwriting text-lg font-bold">Olá,</p>
          <p>
            <span className="mr-1">Meu nome é</span>
            <span className="font-headline font-bold uppercase text-blue-900">
              Higor Costa
            </span>
          </p>

          <table className="mt-4 w-full text-xs">
            <tbody>
              <tr>
                <td className="py-1 pr-2 font-headline font-bold uppercase text-blue-900">
                  Email:
                </td>
                <td className="py-1">
                  <a href="#contact" className="underline hover:text-blue-800">
                    higorpinheirocosta@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-1 pr-2 font-headline font-bold uppercase text-blue-900">
                  Endereço:
                </td>
                <td className="py-1">
                  <a href="#contact" className="underline hover:text-blue-800">
                    São Luís do Maranhão
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-1 pr-2 font-headline font-bold uppercase text-blue-900">
                  Disponível:
                </td>
                <td className="py-1">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
