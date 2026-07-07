const SITE_CONFIG = {
  // 🎨 CONFIGURAÇÕES VISUAIS DO SITE
  // Altere os valores abaixo para personalizar cores e fontes. Não precisa programar!
  settings: {
    // Cores (A cor de fundo foi alterada para um azul um pouco mais claro: #1e3a8aff)
    primaryColor: "#152943", // Azul Principal (Fundo escuro principal)
    secondaryColor: "#265581", // Azul Secundário (Fundo de cards)
    accentColor: "#AE8625", // Azul Destaque (Links, ícones)
    buttonColor: "#c09c5dff", // Laranja Principal (Botões)
    buttonHoverColor: "#78350F", // Laranja Escuro (Botões hover)
    lightBgColor: "#FDFcF8", // Cor de fundo clara
    blueShadow: "#0c1928", // Cor escura para quadros

    // Fontes (Nome exato do Google Fonts, ex: Outfit, Inter, Roboto)
    fontFamily: "Outfit",

    // Outros
    password: "admin",
    logoUrl: "medicina_fortaleza_logo.png",
  },
  hero: {
    tagline: "CLÍNICA ESPECIALIZADA EM LAUDOS MÉDICOS E PERÍCIAS EM FORTALEZA",
    title:
      'Precisão médica, <br> <span class="text-brand-orange drop-shadow-lg">validade jurídica.</span>',
    description:
      "Clínica especializada em laudos para Cartórios, DETRAN e PCD. Atendimento objetivo, rápido e tecnicamente inquestionável em Fortaleza.",
    ctaText: "Agendar Avaliação",
    ctaLink: "https://wa.me/5585999999999",
    bgImageUrl: "hero-bg.png",
    goal1Title: "100%",
    goal1Label: "ADEQUAÇÃO LEGAL",
    goal2Title: "24h",
    goal2Label: "PRÉ-AVALIAÇÃO",
  },
  about: {
    badgeTitle: "Referência em Perícia Médica no Ceará",
    tagline: "SOBRE NÓS",
    title:
      'Excelência médica com <br> <span class="text-accent-blue italic">segurança jurídica.</span>',
    p1: "A Medicina Fortaleza nasceu para oferecer laudos periciais que possuem o rigor técnico necessário para serem aceitos sem questionamentos.",
    p2: "Garantimos que nossos pacientes tenham seus direitos assegurados com agilidade, ética e profundo entendimento das exigências de Cartórios e DETRAN.",
    item1: "Processos Inquestionáveis",
    item2: "Rigor Técnico-Científico",
    bgImageUrl: "about-clinic.png",
  },
  services: {
    title:
      'Documentos médicos feitos <br> <span class="text-accent-blue italic">para serem aceitos</span>',
    subtitle:
      "Reduzimos a burocracia através de laudos tecnicamente precisos e em conformidade.",
    items: [
      {
        title: "Prova de Vida (Cartórios)",
        description:
          "Atendimento a pacientes com dificuldade de locomoção ou impossibilitados de comparecer ao cartório, com avaliação clínica e descrição do estado de consciência, orientação e capacidade de comunicação.",
        icon: "user-check",
      },
      {
        title: "Perícia Médica / Especial (DETRAN)",
        description:
          "Avaliação médica voltada à análise das condições de saúde relacionadas à condução veicular, com identificação de possíveis restrições ou necessidade de adaptações para dirigir.",
        icon: "car",
      },
      {
        title: "Laudos para Isenção PCD (IPI, ICMS e IPVA)",
        description:
          "Emissão de laudos médicos para pessoas com deficiência física, auditiva, visual ou transtornos como o TEA, conforme as exigências dos processos de isenção.",
        icon: "file-text",
      },
      {
        title: "Avaliação e Laudos Médicos Diversos",
        description:
          "Elaboração de relatórios e documentos médicos para diferentes finalidades, com abordagem técnica e clareza na informação.",
        icon: "clipboard-list",
      },
    ],
  },
  differentials: {
    title:
      'Muito além do atestado: <br> <span class="text-accent-blue">segurança absoluta</span>',
    item1Title: "Conformidade Jurídica",
    item1Desc: "Emissão rigorosa conforme órgãos oficiais.",
    item2Title: "Agilidade Certificada",
    item2Desc: "Entrega rápida sem comprometer o rigor.",
    quote:
      "“Nosso objetivo não é apenas emitir o laudo, mas garantir que ele seja aceito sem retrabalho.”",
    bgImageUrl: "specialist.png",
  },
  process: {
    tagline: "PROCESSO",
    title:
      'Como garantimos sua <span class="text-accent-blue italic">tranquilidade</span>',
    items: [
      {
        icon: "message-square",
        title: "Pré-avaliação",
        desc: "Orientação inicial pelo WhatsApp sobre documentos e requisitos.",
      },
      {
        icon: "stethoscope",
        title: "Consulta Médica",
        desc: "Avaliação clínica direcionada às exigências técnicas de cada processo.",
      },
      {
        icon: "file-check",
        title: "Emissão de Laudos",
        desc: "Documento com validade nacional pronto para apresentação.",
      },
      {
        icon: "life-buoy",
        title: "Suporte",
        desc: "Permanecemos à disposição para quaisquer dúvidas e esclarecimentos.",
      },
    ],
  },
  contact: {
    title:
      'Pronto para <br> <span class="text-accent-blue">nosso auxílio?</span>',
    whatsapp: "(85) 99999-9999",
    email: "contato@medicinafortaleza.com.br",
    formTitle: "Solicite sua avaliação",
    supportText: '"Sua referência em perícia médica em Fortaleza."',
  },
  ctaFinal: {
    title: 'Precisa de <br> <span class="text-brand-orange">urgência?</span>',
    description:
      "Fale agora diretamente com nosso responsável técnico e garanta a validade do seu documento.",
    buttonText: "Agendar WhatsApp",
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
