import { ReactNode } from "react"
import { motion } from "framer-motion"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

/**
 * Fade + slide-up padrão usado em todas as seções ao entrar na viewport.
 * `once: true` evita re-disparar a animação toda vez que o usuário rola
 * pra cima e pra baixo — sutil, não deve "chamar atenção demais".
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
