import { HTMLAttributes, ReactNode } from "react"

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export default function Container({
  children,
  className = "",
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`container mx-auto max-w-5xl px-6 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
