import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso dos serviços da Trimobe: cadastro, otimização e recuperação de perfil no Google e site profissional conectado ao Google. Pagamento só na entrega.",
  alternates: { canonical: "https://trimobe.com/terms-of-service" },
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
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
          Termos de Uso
        </h1>
        <p className="mt-3 text-microcopy text-ink-muted">
          Última atualização: 27 de abril de 2026.
        </p>

        <div className="mt-10 space-y-10 text-body text-ink/90">
          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              1. O que a Trimobe faz
            </h2>
            <p>
              A Trimobe presta serviços únicos (não recorrentes) relacionados ao
              perfil de empresa no Google: cadastro do zero, otimização de
              perfil existente, recuperação de perfil suspenso e site
              profissional conectado ao Google. Não somos parceiros oficiais do
              Google. Atendemos remotamente, pelo WhatsApp, em todo o Brasil.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              2. Como o serviço é contratado
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Você inicia a conversa pelo WhatsApp por meio dos botões deste
                site.
              </li>
              <li>
                A Trimobe envia um orçamento fechado, com prazo de entrega e
                escopo descritos por escrito.
              </li>
              <li>
                A contratação é confirmada por sua mensagem dizendo
                expressamente que aceita o orçamento, prazo e escopo.
              </li>
              <li>
                A execução começa apenas após essa confirmação, sem cobrança
                antecipada.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              3. Pagamento só na entrega
            </h2>
            <p>
              Você não paga nada antes do serviço estar pronto. A cobrança é
              enviada pelo WhatsApp <strong>no momento da entrega</strong>, com
              um link do Mercado Pago e os comprovantes do que foi feito (perfil
              no ar, site funcionando ou comprovante de envio do recurso ao
              Google, conforme o caso).
            </p>
            <p className="mt-3">
              Aceitamos PIX (com 5% de desconto à vista) ou cartão de crédito em
              até 6x sem juros, via Mercado Pago.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              4. Conferência antes de pagar
            </h2>
            <p>
              Antes da cobrança, você confere o entregável. Se algo não estiver
              de acordo com o escopo combinado, a Trimobe ajusta antes da
              cobrança. Se mesmo após os ajustes você decidir não pagar, o
              serviço não vai ao ar (ou é revertido) e o assunto se encerra —
              sem multa e sem custo.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              5. Prazo combinado
            </h2>
            <p>
              O prazo é informado por escrito no WhatsApp na hora da
              contratação. Se a Trimobe atrasar a entrega por motivo próprio,
              será concedido desconto no valor combinado, proporcional ao
              atraso. Não é considerado atraso o tempo de resposta de terceiros
              (por exemplo, validação do Google ou retorno do cliente sobre
              materiais necessários).
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              6. Recuperação de perfil suspenso
            </h2>
            <p>
              A recuperação de perfil suspenso depende da decisão final do
              Google, que está fora do controle da Trimobe. Por isso oferecemos
              duas modalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Modalidade 1 — R$ 1.197.</strong> O pagamento ocorre no
                momento em que a Trimobe submete o pedido formal de revisão ao
                Google. Esse é o gatilho do pagamento, não a resposta do Google.
              </li>
              <li>
                <strong>Modalidade 2 — R$ 1.797 (“só paga se voltar”).</strong>{" "}
                O pagamento ocorre apenas após o Google reativar o perfil. Caso
                o Google negue, você não paga nada.
              </li>
            </ul>
            <p className="mt-3">
              Em caso de negativa em primeira instância na Modalidade 1,
              oferecemos uma <strong>segunda tentativa sem custo extra</strong>.
              A escolha da modalidade é feita por escrito antes do início.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              7. O que NÃO está incluído
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Promessa de aparecer em primeiro lugar no Google. O ranqueamento
                depende de fatores fora do controle de qualquer prestador.
              </li>
              <li>Visitas presenciais na sua empresa.</li>
              <li>
                Serviços contínuos mensais (a Trimobe não trabalha com
                mensalidade).
              </li>
              <li>
                Compras de avaliações falsas, manipulação de reviews ou
                qualquer prática que viole as diretrizes do Google.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              8. Responsabilidade do cliente
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Fornecer informações verídicas (CNPJ, endereço, contato,
                horário, fotos).
              </li>
              <li>
                Quando necessário, conceder acesso administrativo temporário ao
                perfil no Google e revogar esse acesso após a entrega.
              </li>
              <li>Manter o perfil dentro das diretrizes do Google.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              9. Limitação de responsabilidade
            </h2>
            <p>
              A Trimobe responde apenas pelo escopo combinado por escrito no
              WhatsApp. Não nos responsabilizamos por suspensões futuras
              causadas por alterações feitas pelo cliente ou por terceiros após
              a entrega, nem por decisões algorítmicas do Google que afetem o
              ranqueamento.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              10. Privacidade
            </h2>
            <p>
              O tratamento dos dados se rege pela nossa{" "}
              <Link
                href="/security-policy"
                className="text-brand hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              11. Contato
            </h2>
            <p>
              Dúvidas sobre estes termos:{" "}
              <a
                href="mailto:contato@trimobe.com"
                className="text-brand hover:underline"
              >
                contato@trimobe.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-h2 text-ink mb-3">
              12. Lei aplicável
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do
              Brasil. Foro do domicílio do cliente, salvo opção em contrário por
              ele.
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
