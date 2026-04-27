import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Trimobe coleta e trata os dados de quem visita o site e contrata nossos serviços de Google Meu Negócio. Em conformidade com a LGPD.",
  alternates: { canonical: "https://trimobe.com/security-policy" },
  robots: { index: true, follow: true },
};

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-content px-5 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-microcopy text-ink-muted hover:text-ink"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-content px-5 py-12 md:py-20">
        <h1 className="font-display font-semibold text-h1 md:text-h1-lg text-ink">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-microcopy text-ink-muted">
          Última atualização: 27 de abril de 2026.
        </p>

        <div className="mt-10 space-y-10 text-body text-ink/90">
          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              Quem somos
            </h2>
            <p>
              A Trimobe presta serviços únicos de Google Meu Negócio para
              pequenas empresas brasileiras: cadastro de perfil, otimização,
              recuperação de perfil suspenso e site profissional conectado ao
              Google. Atendemos remotamente, exclusivamente pelo WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              Quais dados coletamos
            </h2>
            <p className="mb-3">
              Esta página{" "}
              <strong>não possui formulário de captura de leads</strong>. Não
              pedimos seu nome, e-mail ou telefone neste site. Os únicos dados
              que coletamos são:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dados de navegação anônimos</strong> via Google Analytics
                / Google Tag Manager — endereço IP, tipo de dispositivo, páginas
                visitadas e duração de visita. Usados de forma agregada.
              </li>
              <li>
                <strong>Conversas no WhatsApp</strong> — quando você inicia uma
                conversa pelo botão da página, o conteúdo dessa conversa fica
                armazenado no aplicativo do WhatsApp. As regras de tratamento
                são as do próprio WhatsApp/Meta.
              </li>
              <li>
                <strong>Dados de cliente contratante</strong> — apenas após
                fechamento, coletamos pelo WhatsApp os dados necessários para
                executar o serviço (CNPJ, endereço da empresa, fotos, horário,
                acesso administrativo ao perfil quando aplicável).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              Como usamos seus dados
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Atender o seu contato e fechar o orçamento.</li>
              <li>Executar e entregar o serviço contratado.</li>
              <li>
                Emitir cobrança via PIX ou link de Mercado Pago no momento da
                entrega.
              </li>
              <li>
                Cumprir obrigações legais (fiscais, contábeis, regulatórias).
              </li>
            </ul>
            <p className="mt-3">
              Não fazemos disparos de marketing por e-mail, SMS ou WhatsApp para
              quem não nos contratou. Não vendemos, alugamos ou cedemos seus
              dados a terceiros.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              Quem mais tem acesso
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google</strong> — operação do perfil, do Maps e do site
                conectado. Tratamento regido pelas políticas do Google.
              </li>
              <li>
                <strong>Meta / WhatsApp</strong> — armazenamento e transporte
                das mensagens trocadas com você.
              </li>
              <li>
                <strong>Mercado Pago</strong> — processamento de pagamento (PIX
                e cartão), com tratamento próprio.
              </li>
              <li>
                <strong>Vercel</strong> — hospedagem desta página e logs de
                infraestrutura.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              Seus direitos (LGPD)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar que tratamos os seus dados.</li>
              <li>Acessar, corrigir e atualizar dados que temos sobre você.</li>
              <li>Solicitar a eliminação dos dados desnecessários.</li>
              <li>Revogar consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, escreva para{" "}
              <a
                href="mailto:contato@trimobe.com"
                className="text-brand hover:underline"
              >
                contato@trimobe.com
              </a>{" "}
              com o assunto “Direitos LGPD”. Respondemos em até 15 dias úteis.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              Cookies
            </h2>
            <p>
              Usamos cookies essenciais para o funcionamento da página e cookies
              analíticos via Google Analytics para entender como ela é usada.
              Você pode configurar seu navegador para recusar cookies sem
              prejuízo da navegação.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              Atualizações
            </h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças nos
              serviços ou na legislação. A data no topo indica a versão vigente.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-content px-5 text-center text-microcopy text-ink-muted">
          © {new Date().getFullYear()} Trimobe.
        </div>
      </footer>
    </div>
  );
}
