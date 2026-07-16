export default function Footer() {
  return (
    <div className="bg-brand-950 py-4 text-brand-100/60">
      <div className="container mx-auto max-w-4xl p-2 text-sm">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Higor Costa &middot; Todos os
          direitos reservados.
        </p>
      </div>
    </div>
  )
}
