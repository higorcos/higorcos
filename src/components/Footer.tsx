export default function Footer() {
  return (
    <div className="container mx-auto flex max-w-4xl p-4 text-sm center">
      <p className="flex-grow center">
        &copy; {new Date().getFullYear()} Higor Costa &middot; Todos os direitos
        reservados.
      </p>
      
    </div>
  )
}
