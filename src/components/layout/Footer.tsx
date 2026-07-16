export default function Footer() {
  return (
    <footer className="border-t border-brand-400/10 py-8">
      <div className="container mx-auto max-w-5xl px-6 text-center text-xs text-brand-100/40">
        &copy; {new Date().getFullYear()} Higor Costa &middot; Todos os
        direitos reservados.
      </div>
    </footer>
  )
}
