import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react'
import { config } from '../data/config.js'
import PageMeta from './PageMeta.jsx'

const pages = {
  obrigado: {
    title: 'Obrigado pelo contato',
    description: 'Recebemos seu interesse na Academia Equilíbrio.',
    icon: CheckCircle2,
    eyebrow: 'Contato iniciado',
    heading: 'Obrigado por falar com a gente',
    body: 'Sua conversa foi encaminhada para o WhatsApp. Em breve, nossa equipe responde para ajudar você a começar.',
    action: 'Voltar ao início',
    href: '/',
  },
  privacidade: {
    title: 'Política de privacidade',
    description: 'Saiba como a Academia Equilíbrio trata dados e cookies.',
    icon: ShieldCheck,
    eyebrow: 'Sua privacidade',
    heading: 'Política de privacidade',
    body: 'Coletamos apenas os dados que você envia voluntariamente ao entrar em contato, como nome, telefone e mensagem. Eles são usados para responder ao seu pedido e não são vendidos a terceiros. Cookies essenciais mantêm o site funcionando; métricas só são ativadas quando você aceita.',
    sections: [
      ['Seus dados', 'Você pode solicitar correção, atualização ou exclusão dos dados de contato pelo nosso WhatsApp.'],
      ['Cookies', 'Você pode aceitar somente os cookies essenciais ou permitir métricas de uso ao escolher sua preferência.'],
    ],
  },
  termos: {
    title: 'Termos de uso',
    description: 'Termos de uso do site da Academia Equilíbrio.',
    icon: ShieldCheck,
    eyebrow: 'Informações do site',
    heading: 'Termos de uso',
    body: 'Os conteúdos deste site apresentam informações sobre a Academia Equilíbrio, seus serviços e formas de contato. Valores, planos e condições podem ser atualizados pela academia. Confirme as condições no atendimento antes de concluir qualquer contratação.',
    sections: [
      ['Uso do conteúdo', 'Textos, imagens e identidade visual pertencem à Academia Equilíbrio ou são usados com autorização.'],
      ['Atendimento', 'O contato pelo site não cria matrícula, contrato ou cobrança sem a confirmação da academia.'],
    ],
  },
  acessibilidade: {
    title: 'Declaração de acessibilidade',
    description: 'Compromisso de acessibilidade digital da Academia Equilíbrio.',
    icon: ShieldCheck,
    eyebrow: 'Acesso para todos',
    heading: 'Declaração de acessibilidade',
    body: 'A Academia Equilíbrio busca tornar este site simples de navegar para todas as pessoas. Mantemos contraste adequado, textos alternativos nas imagens, navegação por teclado, foco visível e layouts responsivos para telas pequenas.',
    sections: [
      ['Precisa de ajuda?', 'Se encontrar uma barreira de acesso, fale com a equipe pelo WhatsApp para que possamos ajudar e aprimorar o site.'],
    ],
  },
  'nao-encontrada': {
    title: 'Página não encontrada',
    description: 'A página solicitada não foi encontrada.',
    icon: ShieldCheck,
    eyebrow: 'Erro 404',
    heading: 'Esta página não foi encontrada',
    body: 'O endereço pode ter mudado ou não existir. Use o botão abaixo para voltar ao site da Academia Equilíbrio.',
    action: 'Voltar ao início',
    href: '/',
    noIndex: true,
  },
}

export default function InfoPage({ page }) {
  const content = pages[page]
  const Icon = content.icon

  return (
    <main className="section-space flex min-h-screen items-center bg-[#0A0A0A] pt-28">
      <PageMeta title={content.title} description={content.description} noIndex={content.noIndex} />
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <article className="rounded-[2rem] border border-white/10 bg-[#151615] p-6 sm:p-10">
          <Icon className="text-brand" size={34} aria-hidden="true" />
          <p className="mt-6 eyebrow"><span className="eyebrow-line" aria-hidden="true" /><span className="eyebrow-copy">{content.eyebrow}</span></p>
          <h1 className="section-title mt-4">{content.heading}</h1>
          <p className="body-copy mt-5">{content.body}</p>
          {content.sections && <div className="mt-8 space-y-5 border-t border-white/10 pt-7">{content.sections.map(([title, text]) => <section key={title}><h2 className="font-heading text-lg font-bold text-white">{title}</h2><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></section>)}</div>}
          <a href={content.href || '/'} className="button-primary mt-8 px-5 py-3.5"><ArrowLeft size={17} aria-hidden="true" />{content.action || 'Voltar ao início'}</a>
        </article>
      </div>
    </main>
  )
}
