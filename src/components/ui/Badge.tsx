import { ReactNode } from "react"

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-200">
      {children}
    </span>
  )
}
