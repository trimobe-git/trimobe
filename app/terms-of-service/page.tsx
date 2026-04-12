import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, Users, Handshake, AlertCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Termos de Uso | Trimobe",
  description: "Termos de uso da Trimobe, plataforma de intermediação de créditos de carbono agrícola. Conheça as regras que regem o uso do nosso site e dos nossos serviços.",
  openGraph: {
    title: "Termos de Uso | Trimobe",
    description: "Termos de uso da Trimobe, plataforma de intermediação de créditos de carbono agrícola.",
    url: "https://trimobe.com/terms-of-service",
  },
  alternates: {
    canonical: "https://trimobe.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
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
            <FileText className="w-8 h-8 text-primary dark:text-white" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Termos de Uso
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Última atualização: 12 de abril de 2026
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Bem-vindo à Trimobe. Estes Termos de Uso ("Termos") regulam o acesso e o uso do nosso site e dos nossos serviços de intermediação de créditos de carbono agrícola. Ao entrar em contato conosco ou utilizar nossos serviços, você concorda com estes Termos.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Leia atentamente. Se não concordar com estes Termos, não utilize nossos serviços.
          </p>
        </section>

        {/* 1. Quem somos */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              1. Quem somos
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              A Trimobe é uma plataforma brasileira de intermediação de créditos de carbono agrícola. Conectamos cooperativas com créditos certificados a empresas com metas de descarbonização, atuando exclusivamente como intermediários.
            </p>
            <p>
              Não somos uma corretora de valores mobiliários, não realizamos operações financeiras reguladas, e não garantimos a conclusão de qualquer negociação.
            </p>
          </div>
        </section>

        {/* 2. Nossos serviços */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              2. Nossos serviços
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.1 Para cooperativas (vendedores)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Identificação e qualificação de potenciais compradores</li>
                <li>Apoio na apresentação dos créditos certificados ao mercado</li>
                <li>Intermediação nas negociações entre as partes</li>
              </ul>
              <p className="mt-3">
                Nossa remuneração é uma comissão de <strong>5% a 10% sobre o valor da venda</strong>, cobrada apenas quando a transação é concluída. Não cobramos taxas antecipadas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.2 Para empresas (compradoras)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Seleção e curadoria de créditos de carbono agrícola verificados</li>
                <li>Análise de qualidade e risco antes da apresentação</li>
                <li>Apoio durante o processo de negociação e documentação</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.3 Escopo do site
              </h3>
              <p>
                O site da Trimobe serve como canal de apresentação e captação de interesse. As negociações e eventuais contratos são formalizados diretamente entre as partes, com suporte da Trimobe.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Aceitação e elegibilidade */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              3. Aceitação e elegibilidade
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Ao enviar uma mensagem ou usar este site, você declara que:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>É maior de 18 anos ou possui capacidade legal para assumir obrigações</li>
              <li>Representa legitimamente a organização em nome da qual age, se aplicável</li>
              <li>As informações fornecidas são verdadeiras, completas e atuais</li>
            </ul>
          </div>
        </section>

        {/* 4. Obrigações do usuário */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            4. Obrigações do usuário
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Ao utilizar nosso site e serviços, você concorda em:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer informações verídicas e não omitir fatos relevantes</li>
              <li>Não utilizar o site para fins ilegais ou fraudulentos</li>
              <li>Não reproduzir, copiar ou distribuir conteúdo do site sem autorização</li>
              <li>Não tentar acessar sistemas ou informações além do que lhe é disponibilizado</li>
              <li>Não utilizar ferramentas automatizadas para acesso ao site (bots, scrapers etc.)</li>
            </ul>
          </div>
        </section>

        {/* 5. Limitações e isenções */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              5. Limitações e isenções
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.1 Sem garantia de resultado
              </h3>
              <p>
                A Trimobe não garante que qualquer negociação será concluída, nem que compradores ou vendedores serão encontrados dentro de um prazo determinado. Nossa atuação é de intermediação, e o resultado depende de fatores fora do nosso controle.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.2 Sem assessoria jurídica ou financeira
              </h3>
              <p>
                As informações disponibilizadas no site e no atendimento têm caráter informativo e não constituem assessoria jurídica, financeira, tributária ou de investimentos. Recomendamos que as partes consultem profissionais habilitados antes de formalizar qualquer transação.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.3 Responsabilidade pelas transações
              </h3>
              <p>
                Os contratos de compra e venda de créditos de carbono são celebrados diretamente entre cooperativas e empresas. A Trimobe não é parte contratante e não se responsabiliza por disputas, inadimplemento ou irregularidades entre as partes.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.4 Limitação de responsabilidade
              </h3>
              <p className="text-sm">
                NA MÁXIMA EXTENSÃO PERMITIDA PELA LEGISLAÇÃO APLICÁVEL, A TRIMOBE NÃO SE RESPONSABILIZA POR DANOS INDIRETOS, INCIDENTAIS, LUCROS CESSANTES OU DANOS CONSEQUENTES DECORRENTES DO USO OU DA IMPOSSIBILIDADE DE USO DOS NOSSOS SERVIÇOS. NOSSA RESPONSABILIDADE TOTAL ESTÁ LIMITADA AO VALOR DE EVENTUAIS COMISSÕES PAGAS NOS 12 MESES ANTERIORES AO EVENTO GERADOR DA RECLAMAÇÃO.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Propriedade intelectual */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            6. Propriedade intelectual
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Todo o conteúdo do site — incluindo textos, logotipo, identidade visual, código e estrutura — é de propriedade exclusiva da Trimobe e está protegido pela legislação brasileira de propriedade intelectual.
            </p>
            <p>
              É vedada a reprodução, total ou parcial, sem autorização prévia e por escrito da Trimobe.
            </p>
          </div>
        </section>

        {/* 7. Privacidade */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            7. Privacidade e proteção de dados
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            O tratamento dos dados pessoais coletados por meio do site é regido pela nossa{' '}
            <Link href="/security-policy" className="text-primary dark:text-white hover:underline">
              Política de Privacidade e Segurança
            </Link>
            , em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>
        </section>

        {/* 8. Modificações */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            8. Modificações dos Termos
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            A Trimobe reserva-se o direito de atualizar estes Termos a qualquer momento. Alterações relevantes serão comunicadas por e-mail ou por aviso no site com antecedência mínima de 15 dias. O uso continuado dos nossos serviços após a vigência das alterações implica aceitação da nova versão.
          </p>
        </section>

        {/* 9. Lei aplicável e foro */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            9. Lei aplicável e foro
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo — SP como competente para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
          </p>
        </section>

        {/* 10. Contato */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              10. Contato
            </h2>
          </div>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Em caso de dúvidas sobre estes Termos, entre em contato:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>E-mail:</strong> <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a></p>
              <p><strong>Site:</strong> <a href="/" className="text-primary dark:text-white hover:underline">trimobe.com</a></p>
            </div>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Confirmação de leitura
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AO UTILIZAR O SITE OU ENTRAR EM CONTATO COM A TRIMOBE, VOCÊ CONFIRMA QUE LEU, COMPREENDEU E CONCORDA COM ESTES TERMOS DE USO. CASO NÃO CONCORDE, NÃO UTILIZE NOSSOS SERVIÇOS.
            </p>
          </div>
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
