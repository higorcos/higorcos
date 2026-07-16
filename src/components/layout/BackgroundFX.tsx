/**
 * Camada visual fixa atrás de todo o conteúdo: grid quase imperceptível +
 * dois glows suaves desfocados. Fica fixed (não rola com a página) pra dar
 * a sensação de "tela única contínua" em vez de seções empilhadas.
 * pointer-events-none pra nunca atrapalhar cliques.
 */
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-brand-950">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #99C7FF 1px, transparent 1px), linear-gradient(to bottom, #99C7FF 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand-400/20 blur-[140px]" />
      <div className="absolute -right-40 top-[60vh] h-[32rem] w-[32rem] rounded-full bg-brand-200/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-800/40 blur-[160px]" />
    </div>
  )
}
