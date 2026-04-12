import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Database, Eye, FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Política de Privacidade e Segurança | Trimobe",
  description: "Política de privacidade e segurança da Trimobe. Saiba como tratamos os seus dados pessoais em conformidade com a LGPD.",
  openGraph: {
    title: "Política de Privacidade e Segurança | Trimobe",
    description: "Saiba como a Trimobe protege os seus dados pessoais em conformidade com a LGPD.",
    url: "https://trimobe.com/security-policy",
  },
  alternates: {
    canonical: "https://trimobe.com/security-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary dark:text-white" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Política de Privacidade e Segurança
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Última atualização: 12 de abril de 2026
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            A Trimobe respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Esta política explica quais dados coletamos, como os utilizamos e quais são os seus direitos. Em caso de dúvidas, entre em contato pelo e-mail{' '}
            <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">
              contato@trimobe.com
            </a>.
          </p>
        </section>

        {/* Quem somos */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Quem somos
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A Trimobe é uma plataforma de intermediação de créditos de carbono agrícola brasileira, que conecta cooperativas detentoras de créditos certificados a empresas com metas de descarbonização. Atuamos como intermediários e não realizamos vendas diretas de créditos.
          </p>
        </section>

        {/* Dados coletados */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dados que coletamos
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Formulário de contato
              </h3>
              <p className="mb-2">Ao preencher o formulário no nosso site, coletamos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nome</li>
                <li>E-mail</li>
                <li>Tipo de interesse (vender ou comprar créditos)</li>
                <li>Mensagem</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Dados de navegação
              </h3>
              <p>
                Coletamos automaticamente dados técnicos como endereço IP, tipo de navegador, páginas visitadas e duração da visita, por meio de ferramentas de análise. Esses dados são usados de forma agregada e não permitem identificação individual.
              </p>
            </div>
          </div>
        </section>

        {/* Finalidade e base legal */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Como usamos seus dados
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-white">Finalidade</th>
                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Base legal (LGPD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr>
                    <td className="py-2 pr-4">Responder à sua mensagem e dar continuidade ao atendimento</td>
                    <td className="py-2">Legítimo interesse / execução de contrato</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Enviar informações sobre nossos serviços</td>
                    <td className="py-2">Consentimento</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Analisar o desempenho do site</td>
                    <td className="py-2">Legítimo interesse</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Cumprir obrigações legais</td>
                    <td className="py-2">Obrigação legal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Segurança */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Segurança dos dados
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Transmissão criptografada via HTTPS/TLS em todas as comunicações</li>
              <li>Acesso aos dados restrito às pessoas estritamente necessárias para o atendimento</li>
              <li>Serviços de terceiros selecionados com padrões equivalentes de segurança</li>
            </ul>
          </div>
        </section>

        {/* Compartilhamento */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Compartilhamento de dados
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Seus dados podem ser compartilhados apenas nas seguintes situações:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Fornecedores de serviço:</strong> utilizamos a plataforma Brevo para envio e gestão de e-mails, sujeita a contrato de processamento de dados.</li>
              <li><strong>Ferramentas de análise:</strong> utilizamos o Google Analytics para análise de tráfego, com dados anonimizados.</li>
              <li><strong>Obrigação legal:</strong> quando exigido por autoridade competente ou determinação judicial.</li>
            </ul>
          </div>
        </section>

        {/* Retenção */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Retenção de dados
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Mantemos seus dados pelo tempo necessário para atender à finalidade para a qual foram coletados ou para cumprir obrigações legais. Dados de contato são mantidos por até 2 anos após o último contato, salvo manifestação em contrário.
          </p>
        </section>

        {/* Seus direitos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Seus direitos (LGPD)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que temos sobre você</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, envie um e-mail para{' '}
              <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">
                contato@trimobe.com
              </a>{' '}
              com o assunto "Direitos LGPD". Responderemos em até 15 dias úteis.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Cookies
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como os visitantes interagem com nossas páginas. Cookies analíticos são coletados apenas com seu consentimento.
            </p>
            <p>
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a experiência de navegação.
            </p>
          </div>
        </section>

        {/* Contato */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contato e encarregado (DPO)
          </h2>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>E-mail:</strong> <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a></p>
              <p><strong>Assunto sugerido:</strong> [PRIVACIDADE] — breve descrição</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Você também pode registrar reclamações junto à Autoridade Nacional de Proteção de Dados (ANPD), em{' '}
              <span className="font-medium">gov.br/anpd</span>.
            </p>
          </div>
        </section>

        {/* Atualizações */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Atualizações desta política
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Esta política pode ser atualizada periodicamente. Alterações relevantes serão comunicadas por e-mail ou por aviso no site com antecedência mínima de 15 dias. O uso continuado dos nossos serviços após a entrada em vigor das alterações implica a aceitação da versão atualizada.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Trimobe. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
