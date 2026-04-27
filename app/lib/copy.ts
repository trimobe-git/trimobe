import type { WhatsAppMessageKey } from "./whatsapp";

export const guarantees = [
  "Sem mensalidade",
  "Sem fidelidade",
  "Pronto em até 7 dias",
  "Atende o Brasil inteiro",
];

export type Situation = {
  id: string;
  emoji: string;
  title: string;
  body: string;
  link: string;
  anchor: string;
};

export const situations: Situation[] = [
  {
    id: "cadastro",
    emoji: "🆕",
    title: "Acabei de abrir minha empresa",
    body:
      "Você abriu o CNPJ e percebeu que cliente procura tudo no Google antes de comprar. Mas você ainda nem está lá.",
    link: "Como cadastrar sua empresa do jeito certo",
    anchor: "#perfil",
  },
  {
    id: "otimizacao",
    emoji: "📍",
    title: "Meu concorrente aparece, eu não",
    body:
      "Você procura sua empresa no celular e não acha. Procura o concorrente e ele tem fotos, avaliações, telefone, tudo. Cliente está indo pra ele, não pra você.",
    link: "Como deixar seu perfil no nível dos melhores",
    anchor: "#perfil",
  },
  {
    id: "recuperacao",
    emoji: "🚨",
    title: "Meu perfil foi suspenso",
    body:
      "Do nada o Google tirou sua empresa do ar. O telefone parou de tocar. Cada dia parado é cliente que vai pro concorrente.",
    link: "Como recuperamos perfis suspensos",
    anchor: "#recuperacao",
  },
];

export type Step = {
  number: string;
  emoji: string;
  title: string;
  body: string;
  time: string;
  timeLabel: string;
};

export const steps: Step[] = [
  {
    number: "01",
    emoji: "💬",
    title: "Você manda mensagem no WhatsApp",
    body:
      "Conta sua situação em palavras simples. A gente entende seu caso e te passa um orçamento fechado, sem enrolação.",
    time: "5 minutos",
    timeLabel: "Tempo seu",
  },
  {
    number: "02",
    emoji: "📷",
    title: "Você envia algumas informações",
    body:
      "Endereço, telefone, fotos da empresa, horário de funcionamento. A gente envia uma listinha simples pra você preencher pelo celular.",
    time: "10 a 15 minutos",
    timeLabel: "Tempo seu",
  },
  {
    number: "03",
    emoji: "✅",
    title: "A gente entrega — e só aí você paga",
    body:
      "No dia combinado, você recebe tudo pronto pelo WhatsApp: perfil no ar, site funcionando ou recurso enviado ao Google. Você confere e, se estiver tudo certo, faz o pagamento.",
    time: "até 7 dias",
    timeLabel: "Tempo nosso",
  },
];

export type Service = {
  id: string;
  emoji: string;
  title: string;
  pitch: string;
  bullets: string[];
  prazo: string;
  preco: string;
  precoExtra?: string;
  microcopy: string;
  paymentNote: string;
  ctaText: string;
  ctaKey: WhatsAppMessageKey;
};

export const services: Service[] = [
  {
    id: "perfil",
    emoji: "📍",
    title: "Cadastro & otimização do perfil",
    pitch:
      "Não tem perfil ainda ou tem mas não aparece pra ninguém? A gente cuida dos dois. Cria do zero ou revisa o existente, e deixa pronto pra aparecer.",
    bullets: [
      "Cadastro completo (se não tiver) ou auditoria do perfil existente",
      "Categorias certas pro seu tipo de negócio",
      "Texto de apresentação que vende",
      "Lista de até 30 serviços ou produtos com descrição",
      "Curadoria e envio de até 10 fotos",
      "4 publicações iniciais no perfil",
      "Resposta a até 10 avaliações pendentes",
      "Comparação com seus 3 maiores concorrentes locais",
      "Acompanhamento até o Google validar (no caso de cadastro novo)",
      "Relatório final em PDF + plano de manutenção",
    ],
    prazo: "5 a 7 dias úteis",
    preco: "R$ 297",
    precoExtra: "ou R$ 397 com site profissional incluso",
    microcopy: "Você só paga depois que o perfil estiver no ar.",
    paymentNote: "PIX ou cartão em até 6x sem juros, no momento da entrega.",
    ctaText: "Quero meu perfil pronto",
    ctaKey: "cardCadastro",
  },
  {
    id: "recuperacao",
    emoji: "🚨",
    title: "Resgate de perfil suspenso (risco zero)",
    pitch:
      "Seu perfil foi suspenso e você não sabe por quê? A gente investiga, corrige e faz o pedido formal pro Google reativar. Se o Google não reativar, você não paga nada.",
    bullets: [
      "Investigação do motivo da suspensão",
      "Lista clara dos documentos necessários",
      "Correção de tudo o que está irregular no perfil",
      "Pedido formal de revisão escrito do jeito que o Google aceita",
      "Acompanhamento com o Google até a resposta",
      "Resposta rápida se o Google pedir mais documentos",
      "Otimização do perfil depois que voltar ao ar",
      "Guia de como evitar nova suspensão",
    ],
    prazo: "7 a 30 dias (depende do Google responder)",
    preco: "R$ 1.497",
    microcopy:
      "Só paga se o Google reativar seu perfil. Se não voltar, você não paga nada.",
    paymentNote: "PIX ou cartão em até 6x sem juros, no momento da entrega.",
    ctaText: "Preciso recuperar meu perfil",
    ctaKey: "cardRecuperacao",
  },
];

export const whyChoose = [
  {
    emoji: "🚀",
    title: "Velocidade real",
    body:
      "A gente trabalha com inteligência artificial pra fazer em horas o que agência leva semanas. Você fala hoje, entrega em poucos dias.",
  },
  {
    emoji: "💰",
    title: "Preço justo",
    body:
      "Sem agência intermediária, sem comissão de vendedor, sem gerente de contas. Você paga só pelo trabalho que vai pro seu perfil.",
  },
  {
    emoji: "🔓",
    title: "Zero amarração",
    body:
      "Nada de mensalidade que você paga sem usar. Nada de contrato de 12 meses. Você paga uma vez, recebe, e segue a vida.",
  },
  {
    emoji: "📱",
    title: "100% pelo WhatsApp",
    body:
      "Tudo é resolvido por mensagem, no seu tempo. Você manda fotos pelo celular, a gente faz o resto. Sem agendar visita, sem perder tarde em call.",
  },
];

export const guaranteesPositive = [
  {
    title: "Pagamento só na entrega",
    body:
      "Você não paga nada antes. A gente faz o serviço, te entrega tudo pelo WhatsApp e só depois você confirma que está do jeito combinado e faz o pagamento.",
  },
  {
    title: "Você confere antes de pagar",
    body:
      "Antes de pedir o pagamento, a gente te mostra tudo que foi feito: perfil no ar, site funcionando, ou comprovante de envio do recurso ao Google. Se algo não estiver do jeito combinado, a gente ajusta antes.",
  },
  {
    title: "Prazo combinado por escrito",
    body:
      "Na hora de fechar, você recebe a data exata da entrega no WhatsApp. Se a gente atrasar, descontamos do valor combinado.",
  },
  {
    title: "Formas de pagamento",
    body:
      "PIX à vista (com 5% de desconto) ou cartão de crédito em até 6x sem juros, via Mercado Pago. Pagamento feito no momento da entrega.",
  },
  {
    title: "Atendimento sempre pelo WhatsApp",
    body:
      "Você fala sempre pela mesma linha, do início ao fim. Sem “vou transferir pro setor responsável”.",
  },
];

export const guaranteesNegative = [
  {
    title: "Primeiro lugar no Google",
    body:
      "Quem aparece em primeiro depende de muita coisa: avaliações, idade do perfil, tamanho do concorrente. A gente entrega seu perfil no melhor estado possível e te ensina a continuar bem.",
  },
  {
    title: "Visita presencial",
    body:
      "Tudo é online. Se você precisa de alguém indo até sua empresa, a gente não é a opção certa.",
  },
  {
    title: "Recuperação garantida pelo Google",
    body:
      "No caso de perfil suspenso, a decisão final é sempre do Google. A gente faz o trabalho do nosso lado da melhor forma possível, mas a resposta deles a gente não controla. Por isso a Recuperação só é cobrada se o Google realmente reativar seu perfil — se não voltar, você não paga nada.",
  },
];

export const faq = [
  {
    q: "Quando eu pago?",
    a: "Só na entrega. Você não paga nada antes. A gente faz o serviço, te entrega tudo pronto pelo WhatsApp, você confere se está do jeito combinado e só aí faz o pagamento. Pode ser PIX (com 5% de desconto à vista) ou cartão em até 6x sem juros.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Cadastro e otimização levam de 5 a 7 dias úteis (com ou sem o site incluso). Recuperação de perfil suspenso depende do Google responder — pode levar de 7 a 30 dias. Em todos os casos, você recebe a data exata da entrega no momento da contratação.",
  },
  {
    q: "Vocês atendem minha cidade?",
    a: "Atendemos o Brasil inteiro. Tudo é feito online — não precisamos ir até sua empresa. Você manda fotos pelo celular, a gente cuida do resto.",
  },
  {
    q: "O que eu preciso ter antes de começar?",
    a: "Bem pouca coisa: CNPJ ou MEI ativo, endereço da empresa, telefone, horário de funcionamento e algumas fotos do local. Em 15 minutos no celular você manda tudo.",
  },
  {
    q: "E se eu não souber por onde começar?",
    a: "Manda mensagem no WhatsApp contando sua situação em palavras simples. A gente faz as perguntas certas, entende seu caso e recomenda o serviço ideal — sem empurrar nada que você não precisa.",
  },
  {
    q: "Garantem que vou aparecer em primeiro no Google?",
    a: "Não. Ninguém honesto pode prometer isso, porque o lugar onde você aparece depende de muitos fatores fora do controle de qualquer empresa. O que a gente garante é entregar seu perfil no melhor estado possível — o resto vem com o tempo.",
  },
  {
    q: "E se meu perfil for suspenso de novo depois?",
    a: "Os clientes de Recuperação recebem um guia de como evitar nova suspensão, e a otimização do perfil já vem inclusa pra blindar contra as causas mais comuns. Se mesmo assim o perfil for suspenso de novo, oferecemos 30% de desconto na nova Recuperação.",
  },
  {
    q: "E se eu não gostar do serviço entregue?",
    a: "Você confere tudo antes de pagar. Se algo não estiver do jeito combinado, a gente ajusta antes da cobrança. Se mesmo após os ajustes você decidir não pagar, simplesmente não paga — o serviço não vai pro ar e o assunto se encerra. Sem multa, sem custo, sem briga.",
  },
];
