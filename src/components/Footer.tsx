export default function Footer() {
  return (
    <div className="container mx-auto flex max-w-4xl p-4 text-sm">
      <p className="flex-grow">
        &copy; {new Date().getFullYear()} Higor Costa &middot; Todos os direitos
        reservados.
      </p>
      <a
        href="https://github.com/higorcos/higorcos"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 hover:text-gray-900"
      >
        Código-fonte
      </a>
    </div>
  )
}
