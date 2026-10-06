export default function CookieBanner({ onChoice }) {
  return (
    <aside className="cookie-banner fixed inset-x-3 bottom-[calc(76px+env(safe-area-inset-bottom))] z-[70] mx-auto max-w-xl rounded-2xl border border-white/15 bg-[#171817]/95 p-4 shadow-2xl backdrop-blur-md sm:bottom-5 sm:p-5" aria-label="Preferências de cookies">
      <p className="text-sm font-bold text-white">Sua privacidade</p>
      <p className="mt-1 text-xs leading-5 text-white/65">Usamos cookies essenciais e, com sua autorização, métricas de acesso para melhorar o site.</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" className="button-outline px-3 py-2.5 text-xs" onClick={() => onChoice('necessary')}>Somente essenciais</button>
        <button type="button" className="button-primary px-3 py-2.5 text-xs" onClick={() => onChoice('accepted')}>Aceitar cookies</button>
      </div>
    </aside>
  )
}
