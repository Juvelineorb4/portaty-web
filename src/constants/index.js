import * as All from "../../public";

export const navbar = {
  logo: All.Logo,
  menu: [
    {
      id: "#home",
      title: "Inicio",
    },
    {
      id: "info",
      title: "¿Qué es Portaty?",
    },
    // {
    //   id: "about-us",
    //   title: "Nosotros",
    // },
    {
      id: "#contact",
      title: "Contacto",
    },
  ],
  button: {
    title: "Descarga ya",
    icon: "bx bx-right-arrow-alt",
    link: "https://play.google.com/store/apps/details?id=com.teamportaty.appdev",
  },
};

export const home = {
  mainImage: All.HomeMain,
  google: All.Google,
  apple: All.Apple,
  first: "La mejor aplicacion",
  second: " hacia un mundo de oportunidades comerciales",
  ad: "App de comercio",
  subtitle: `Portaty es una aplicación innovadora que conecta negocios y consumidores a nivel global. Fusionando tecnología digital con autenticidad local, es el destino ideal para descubrir y conectar con lo que necesitas, estés donde estés.`,
  download: "Descargalo ya",
  buttons: {
    one: {
      id: "one-btn",
      title: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.teamportaty.appdev",
      icon: "bx bxs-chevrons-right",
    },
    two: {
      id: "two-btn",
      title: "App Store",
      link: "https://apps.apple.com/us/app/portaty/id6497407592",
      icon: "bx bxs-chevrons-right",
    },
    three: {
      id: "three-btn",
      title: "Video introductorio",
      link: "/",
      icon: "bx bx-play-circle",
    },
  },
};

export const features = {
  bgFeatures: All.BgFeatures,
  bgTiny: All.BgFeaturesTiny,
  first: "Nuestras",
  second: " características",
  features: [
    {
      id: "feature-1",
      title: "Búsqueda personalizada",
      image: All.User,
    },
    {
      id: "feature-2",
      title: "Visualización auténtica",
      image: All.Money,
    },
    {
      id: "feature-3",
      title: "Ubicación precisa",
      image: All.Security,
    },
    {
      id: "feature-4",
      title: "Registro de favoritos",
      image: All.Notifications,
    },
    {
      id: "feature-5",
      title: "Alcance global",
      image: All.Like,
    },
    {
      id: "feature-6",
      title: "Interacción directa",
      image: All.Clock,
    },
  ],
};

export const whatsis = {
  ad: "Descubre negocios",
  first: "Somos",
  second: " PORTATY",
  paragraph: `Portaty no es solo una aplicación, es un puente que une a negocios y consumidores en un mundo
  cada vez más conectado. Al ofrecer una experiencia de usuario única y beneficios tanto para los
  negocios como para los consumidores, estamos construyendo un futuro donde la distancia ya no
  es un obstáculo para el comercio global. Únete a nosotros en esta emocionante aventura y
  descubre un mundo de oportunidades comerciales justo en la palma de tu mano con Portaty.`,
  mainImage: ``,
  faqTitle: "Preguntas y respuestas",
  img: All.WhatsIs,
  faq: [
    {
      id: 1,
      question: "¿Puedo encontrar cualquier negocio?",
      anwser:
        "Si, puedes encontrar cualquier negocio que este registrado en Portaty",
    },
    {
      id: 2,
      question: "¿Puedo contactar directamente con los negocios?",
      anwser:
        "Si, tienes multiples opciones para lograr ponerte en contacto con el negocio que tu quieras",
    },
    {
      id: 3,
      question: "¿Es fácil registrarse como negocio en Portaty?",
      anwser: `Sí, registrarse como negocio en Portaty es sencillo. Solo necesitas seguir unos simples pasos para crear una cuenta y agregar la información de tu negocio.`,
    },
    {
      id: 4,
      question: "¿Al registrar mi negocio en Portaty, genera algún costo?",
      anwser: `No, es totalmente gratis registrar tu negocio en Portaty para siempre.`,
    },
    {
      id: 5,
      question:
        "¿Puedo encontrar un negocio o producto en cualquier ciudad de mi elección?",
      anwser: `Si, tienes acceso a un filtro de busqueda para especificar Portaty en la localidad que desees buscar`,
    },
    {
      id: 6,
      question: "¿Qué tipo de negocios pueden registrarse en Portaty?",
      anwser: `Cualquier negocio que ofrezca productos o servicios puede registrarse en Portaty, desde restaurantes y tiendas minoristas hasta servicios profesionales y actividades de ocio. La diversidad de opciones garantiza que los consumidores puedan encontrar lo que necesitan.`,
    },
    {
      id: 7,
      question: "¿Qué beneficios ofrece Portaty a los consumidores?",
      anwser: `Portaty ofrece a los consumidores la conveniencia de encontrar una amplia variedad de negocios y servicios en un solo lugar, junto con la capacidad de interactuar directamente con los negocios, ver fotos reales de productos y recibir actualizaciones sobre promociones especiales.`,
    },
  ],
};

export const download = {
  google: All.Google,
  apple: All.Apple,
  bgDownload: All.BgDownload,
  bgTiny: All.BgDownloadTiny,
  first: "¿Listo para",
  second: " comenzar?",
  subtitle: `Descargue ahora y empiece a descubrir un monton de negocios a su alcance y/o registrar sus propios negocios 😉`,
  buttons: {
    one: {
      id: "one-btn",
      title: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.teamportaty.appdev",
      icon: "bx bxs-chevrons-right",
    },
    two: {
      id: "two-btn",
      title: "App Store",
      link: "https://apps.apple.com/us/app/portaty/id6497407592",
      icon: "bx bxs-chevrons-right",
    },
  },
};

export const footer = {
  contact: {
    logo: All.Logo,
    info: [
      {
        id: "info-1",
        icon: "bx bxs-envelope",
        text: "soporte@portaty.com",
      },
      {
        id: "info-2",
        icon: "bx bxs-phone",
        text: "+57 320 3890732",
        link: "https://wa.link/u2kvfk",
      },
      {
        id: "info-3",
        icon: "bx bxl-whatsapp",
        text: "+57 320 3890732",
        link: "https://wa.link/u2kvfk",
      },
    ],
    redes: [
      {
        id: "info-3",
        icon: "bx bxl-tiktok",
        text: "@portatyapp",
        link: "www.tiktok.com/@portatyapp",
      },
      {
        id: "info-4",
        icon: "bx bxl-instagram",
        text: "@portatyapp",
        link: "https://www.instagram.com/portatyapp?igsh=MWNwaHU0bHZ1OGswcQ%3D%3D&utm_source=qr",
      },
      {
        id: "info-5",
        icon: "bx bxl-twitter",
        text: "@PortatyApp",
        link: "https://twitter.com/PortatyApp",
      },
    ],
  },
  links: {
    title: "Enlaces",
    pages: [
      {
        id: "pages-1",
        title: "Inicio",
        link: "/",
      },
      {
        id: "pages-2",
        title: "Nosotros",
        link: "/",
      },
      {
        id: "pages-3",
        title: "Precios",
        link: "/",
      },
      {
        id: "pages-4",
        title: "Contáctanos",
        link: "/",
      },
    ],
  },
  legal: {
    title: "Políticas",
    pages: [
      {
        id: "pages-1",
        title: "Términos de uso",
        link: "/terminos",
      },
      {
        id: "pages-2",
        title: "Política de privacidad",
        link: "/politicas",
      },
      {
        id: "pages-3",
        title: "Cookies",
        link: "/",
      },
    ],
  },
  newsletter: {
    title: "Información",
    subtitle: "Mantente informado",
    placeholder: "Tu correo electrónico",
    button: "Suscríbete",
  },
  copy: "Copyright 2023 - Portaty conserva todos los derechos",
};
