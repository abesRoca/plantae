import { useEffect, useState } from "react"
import plantaeMark from "./imports/plantae-mark.png"
import plantaeWordmark from "./imports/plantae-wordmark.png"
import altamiraLogo from "./imports/clients/altamira-group.png"
import apfLogo from "./imports/clients/apf.png"
import creoLogo from "./imports/clients/creo-inmuebles.png"
import comeparLogo from "./imports/clients/comepar.png"
import iidesLogo from "./imports/clients/iides.png"
import lacerieLogo from "./imports/clients/lacerie.png"
import pnudLogo from "./imports/clients/pnud.png"
import raicesLogo from "./imports/clients/raices-real-estate.png"
import WhatsAppButton from "./components/WhatsAppButton"

const images = {
  hero: "https://images.unsplash.com/photo-1758194403945-4263592f8b98?auto=format&fit=crop&w=1800&q=85",
  courtyard:
    "https://images.unsplash.com/photo-1724949287940-33f555d4d38a?auto=format&fit=crop&w=1400&q=85",
  vertical:
    "https://images.unsplash.com/photo-1556983852-43bf21186b2a?auto=format&fit=crop&w=1400&q=85",
  building:
    "https://images.unsplash.com/photo-1580041029617-861657e9f349?auto=format&fit=crop&w=1600&q=85",
}

const serviceImages = {
  landscaping: [
    "https://images.unsplash.com/photo-1686663048931-6df69f577a2f?auto=format&fit=crop&w=1600&q=85",
  ],
  irrigation: [
    "https://images.unsplash.com/photo-1767533427586-436b683f34ef?auto=format&fit=crop&w=1600&q=85",
  ],
  pruning: [
    "https://images.unsplash.com/photo-1646286373198-6f51bc84fd4c?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1776150161874-441a16e24cbf?auto=format&fit=crop&w=3000&q=60",
  ],
  maintenance: [
    "https://images.unsplash.com/photo-1731259240474-5370d9ca53ba?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1778994023470-584df08d4ea3?auto=format&fit=crop&w=3000&q=60",
    "https://images.unsplash.com/photo-1779462929245-5fa26aa68924?auto=format&fit=crop&w=3000&q=60",
  ],
  turfAndPests: [
    "https://images.unsplash.com/photo-1652671293060-a21024199fb1?auto=format&fit=crop&w=3000&q=60",
    "https://images.unsplash.com/photo-1719536753784-bd0881701b1a?auto=format&fit=crop&w=3000&q=60",
  ],
  vertical: [
    "https://images.unsplash.com/photo-1774440602181-a8f2d598c04f?auto=format&fit=crop&w=3000&q=60",
  ]
}

const heroSlides = [
  {
    image: images.hero,
    alt: "Sendero rodeado de vegetación junto a una arquitectura contemporánea",
    caption: "Espacios que respiran con vos.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1750859513748-90ad9625f1ae?auto=format&fit=crop&w=1800&q=82",
    alt: "Patio exterior con árboles frutales y espacios para reunirse",
    caption: "Rincones para volver a encontrarse.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1784660712338-e6b686f09813?auto=format&fit=crop&w=1800&q=82",
    alt: "Sendero de piedra que atraviesa un jardín verde y frondoso",
    caption: "Caminos que invitan a quedarse.",
  },
]

const clients = [
  {
    name: "Altamira Group",
    logo: altamiraLogo,
    logoClass: "max-h-24 max-w-[150px]",
  },
  {
    name: "Asociación Paraguaya de Fútbol",
    logo: apfLogo,
    logoClass: "max-h-24 max-w-[130px]",
  },
  {
    name: "Creo Inmuebles",
    logo: creoLogo,
    logoClass: "max-h-24 max-w-[130px]",
  },
  {
    name: "Comepar",
    logo: comeparLogo,
    logoClass: "max-h-24 max-w-[110px]",
  },
  { name: "IIDES", logo: iidesLogo, logoClass: "max-h-16 max-w-[210px]" },
  { name: "L’Acerie", logo: lacerieLogo, logoClass: "max-h-16 max-w-[190px]" },
  { name: "PNUD", logo: pnudLogo, logoClass: "max-h-24 max-w-[78px]" },
  {
    name: "Raíces Real Estate",
    logo: raicesLogo,
    logoClass: "max-h-16 max-w-[190px]",
  },
]

type IconName = "leaf" | "water" | "shield" | "grass" | "sparkle" | "vertical" | "arrow" | "check" | "menu" | "close"

function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  }
  const paths: Record<IconName, React.ReactNode> = {
    leaf: (
      <>
        <path d="M20 4c-8.5 0-15 2.5-15 10a6 6 0 0 0 6 6c7.5 0 10-6.5 9-16Z" />
        <path d="M4 21c3-6 7-9 12-12" />
        <path d="M10 14 7 9M13 11l5 1" />
      </>
    ),
    water: (
      <>
        <path d="M12 3c-3.8 5.2-7 9-7 12a7 7 0 0 0 14 0c0-3-3.2-6.8-7-12Z" />
        <path d="M9 16a3 3 0 0 0 3 3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 4.5 6v5.5c0 5 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.5 7.5-9.5V6L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    grass: (
      <>
        <path d="M3 20h18M7 20c0-6-1-9-3-12M10 20c0-8 1-12 3-16M15 20c0-6 1-9 5-13M18 20c0-4-1-6-3-8" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />
      </>
    ),
    vertical: (
      <>
        <path d="M4 21V3h16v18H4ZM12 3v18M4 12h16" />
        <path d="M8 8c1-1.7 2-2 4-2M15 17c1-1.7 2-2 4-2M5 17c1-1.7 2-2 4-2" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M5 5 19 19M19 5 5 19" />
      </>
    ),
  }
  return <svg {...common}>{paths[name]}</svg>
}

const navigation = [
  { label: "Quiénes somos", href: "/" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Servicios", href: "/servicios" },
]

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/"
      className={`inline-flex shrink-0 items-center gap-1.5 ${
        light ? "text-[#f5f2e8]" : "text-[#183c2f]"
      }`}
      aria-label="Plantae, naturaleza en tus espacios, inicio"
    >
      <span
        aria-hidden="true"
        className="block h-11 w-[54px] bg-[#85996e]"
        style={{ mask: `url(${plantaeMark}) center / contain no-repeat` }}
      />
      <span className="flex flex-col items-center">
        <img
          src={plantaeWordmark}
          alt=""
          className={`h-[39px] w-[144px] object-contain ${
            light ? "" : "logo-forest"
          }`}
        />
        <span className="mt-0.5 whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.11em]">
          Naturaleza en tus espacios
        </span>
      </span>
    </a>
  )
}

function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-20 border-b border-[#dcded3] bg-[#f8f7f1]">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Brand />
        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "page" : undefined}
              className={`text-[12px] font-semibold uppercase tracking-[0.13em] transition-colors hover:text-[#839557] ${
                active === item.href ? "text-[#183c2f]" : "text-[#717b6d]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/planes"
          className="hidden items-center gap-5 rounded-full bg-[#183c2f] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#355b43] lg:inline-flex"
        >
          Explorar planes <Icon name="arrow" size={16} />
        </a>
        <button
          className="flex h-10 w-10 items-center justify-center text-[#183c2f] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      {open && (
        <nav
          className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-[#dcded3] bg-[#f8f7f1] px-6 py-5 shadow-lg lg:hidden"
          aria-label="Navegación móvil"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-[#e4e5dc] py-4 text-sm font-semibold uppercase tracking-wider text-[#183c2f]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function ButtonLink({
  href,
  children,
  outline = false,
}: {
  href: string
  children: React.ReactNode
  outline?: boolean
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-13 items-center justify-between gap-9 rounded-full px-7 py-4 text-[11px] font-bold uppercase tracking-[0.13em] transition-all hover:-translate-y-0.5 ${
        outline
          ? "border border-[#183c2f] text-[#183c2f] hover:bg-[#edf0e3]"
          : "bg-[#183c2f] text-white hover:bg-[#355b43]"
      }`}
    >
      {children}
      <Icon name="arrow" size={17} />
    </a>
  )
}

const services: {
  number: string
  icon: IconName
  title: string
  description: string
  href: string
  images: string[]
  eyebrow: string
  intro: string
  benefit: string
  alt: string
  features: { 
    title: string,
    detail: string
   }[]
}[] = [
  {
    number: "01",
    icon: "leaf",
    title: "Paisajismo y exteriorismo",
    description:
      "Diseño de espacios que acercan la naturaleza a la vida cotidiana.",
    href: "/servicios/paisajismo-exteriorismo",
    images: serviceImages.landscaping,
    eyebrow: "Naturaleza pensada para cada lugar",
    intro:
      "Nos encargamos de acercar la naturaleza y las personas. Somos especialistas en convertir cualquier espacio en una fuente de recarga de naturaleza.",
    benefit:
      "Diseñamos cada intervención desde la arquitectura, el uso y el ritmo del lugar para crear paisajes vivos, funcionales y duraderos.",
    alt: "Jardín paisajístico rodeado de árboles y vegetación",
    features: [
      {
        title: "Lectura del espacio",
        detail:
          "Analizamos asoleamiento, circulación, arquitectura, ecosistema existente y oportunidades de cada entorno.",
      },
      {
        title: "Diseño paisajístico",
        detail:
          "Definimos especies, materialidad y composición para lograr una identidad natural coherente.",
      },
      {
        title: "Implementación",
        detail:
          "Coordinamos preparación, plantación y terminaciones con atención en cada detalle.",
      },
      {
        title: "Acompañamiento",
        detail:
          "Orientamos el cuidado inicial para que el nuevo paisaje se consolide y evolucione.",
      },
    ],
  },
  {
    number: "02",
    icon: "water",
    title: "Riego Automático",
    description:
      "Sistemas eficientes que entregan a cada sector el agua que necesita.",
    href: "/servicios/riego-automatico",
    images: serviceImages.irrigation,
    eyebrow: "Agua precisa, jardines saludables",
    intro:
      "Diseñamos sistemas de riego adaptados a cada jardín para distribuir el agua de forma uniforme, eficiente y programada.",
    benefit:
      "Automatizar el riego reduce el consumo de agua, facilita el mantenimiento y asegura que cada sector reciba exactamente lo que necesita.",
    alt: "Sistema de riego automático funcionando sobre césped",
    features: [
      {
        title: "Diseño por sectores",
        detail:
          "Calculamos caudal, presión y necesidades hídricas según cada área y especie.",
      },
      {
        title: "Instalación completa",
        detail:
          "Integramos tuberías, aspersores, goteros, válvulas y temporizador.",
      },
      {
        title: "Programación eficiente",
        detail:
          "Ajustamos frecuencias y horarios según la estación y las condiciones del lugar.",
      },
      {
        title: "Mantenimiento",
        detail:
          "Revisamos fugas, obstrucciones y cobertura para conservar el rendimiento.",
      },
    ],
  },
  {
    number: "03",
    icon: "sparkle",
    title: "Poda aérea y Subterránea",
    description:
      "Cuidado técnico de copas y raíces para un crecimiento saludable.",
    href: "/servicios/poda-aerea-subterranea",
    images: serviceImages.pruning,
    eyebrow: "Cuidado experto de cada especie",
    intro:
      "Realizamos podas planificadas para fortalecer árboles y arbustos, controlar su crecimiento y proteger la infraestructura que los rodea.",
    benefit:
      "Una poda bien ejecutada mejora la salud de la planta, previene riesgos y mantiene la armonía del paisaje durante todo el año.",
    alt: "Trabajo de poda profesional en un jardín arbolado",
    features: [
      {
        title: "Diagnóstico previo",
        detail:
          "Evaluamos especie, estado sanitario, estructura y entorno antes de intervenir.",
      },
      {
        title: "Poda aérea",
        detail:
          "Formación, limpieza y reducción de copa con cortes precisos y seguros.",
      },
      {
        title: "Manejo de raíces",
        detail:
          "Control de raíces y suelo para evitar daños en senderos, muros e instalaciones.",
      },
      {
        title: "Retiro y limpieza",
        detail:
          "Gestionamos los residuos vegetales y dejamos el espacio listo para disfrutar.",
      },
    ],
  },
  {
    number: "04",
    icon: "shield",
    title: "Mantenimiento Residencial, de Edificios y Corporativo",
    description:
      "Cuidado integral y periódico para hogares, edificios y empresas.",
    href: "/servicios/mantenimiento-integral",
    images: serviceImages.maintenance,
    eyebrow: "Espacios impecables, todos los días",
    intro:
      "Creamos rutinas de mantenimiento a medida para que jardines residenciales, edificios y sedes corporativas se mantengan sanos y presentables.",
    benefit:
      "Un equipo estable y una planificación clara permiten anticipar necesidades y sostener la calidad del paisaje en el tiempo.",
    alt: "Residencia contemporánea rodeada de un jardín cuidado",
    features: [
      {
        title: "Plan personalizado",
        detail:
          "Definimos frecuencias y tareas según superficie, especies y dinámica del lugar.",
      },
      {
        title: "Cuidado integral",
        detail:
          "Incluye corte, poda, limpieza, nutrición y revisión general del jardín.",
      },
      {
        title: "Atención corporativa",
        detail:
          "Coordinamos horarios y protocolos para trabajar sin interrumpir las actividades.",
      },
      {
        title: "Reporte y seguimiento",
        detail:
          "Comunicamos avances, hallazgos y recomendaciones para cada etapa.",
      },
    ],
  },
  {
    number: "05",
    icon: "grass",
    title: "Empastado y Control de Plagas",
    description:
      "Superficies verdes uniformes, saludables y protegidas durante todo el año.",
    href: "/servicios/empastado-control-plagas",
    images: serviceImages.turfAndPests,
    eyebrow: "Una base verde, sana y resistente",
    intro:
      "Preparamos e instalamos césped y protegemos los espacios verdes con tratamientos específicos, responsables y adaptados a cada entorno.",
    benefit:
      "Una correcta preparación del suelo y un monitoreo preventivo favorecen el enraizamiento, limitan el daño y prolongan la vida del jardín.",
    alt: "Césped verde y saludable en un jardín residencial",
    features: [
      {
        title: "Preparación del terreno",
        detail:
          "Nivelamos, aireamos y acondicionamos el suelo antes de la colocación.",
      },
      {
        title: "Instalación de césped",
        detail:
          "Elegimos e instalamos la variedad adecuada según asoleamiento y tránsito.",
      },
      {
        title: "Diagnóstico sanitario",
        detail:
          "Identificamos síntomas, agentes causantes y nivel de afectación.",
      },
      {
        title: "Control y seguimiento",
        detail:
          "Aplicamos tratamientos localizados y monitoreamos la evolución del espacio.",
      },
    ],
  },
  {
    number: "06",
    icon: "vertical",
    title: "Jardines Verticales",
    description:
      "Muros vivos que incorporan naturaleza en una nueva dimensión.",
    href: "/servicios/jardines-verticales",
    images: serviceImages.vertical,
    eyebrow: "Naturaleza que transforma paredes",
    intro:
      "Diseñamos e implementamos jardines verticales que convierten muros interiores y exteriores en superficies vivas, expresivas y funcionales.",
    benefit:
      "Integramos especies, estructura y riego para crear composiciones que aportan identidad, bienestar y valor a cada espacio.",
    alt: "Muro cubierto por un jardín vertical de vegetación frondosa",
    features: [
      {
        title: "Diseño a medida",
        detail:
          "Proyectamos la composición según escala, luz disponible y lenguaje arquitectónico.",
      },
      {
        title: "Selección de especies",
        detail:
          "Combinamos plantas adaptadas al ambiente y al nivel de mantenimiento previsto.",
      },
      {
        title: "Sistema de riego",
        detail:
          "Integramos una distribución automatizada para un cuidado eficiente y uniforme.",
      },
      {
        title: "Mantenimiento especializado",
        detail:
          "Realizamos podas, reposiciones, nutrición y controles periódicos del sistema.",
      },
    ],
  },
]

const workProjects = [
  {
    service: services[0],
    clients: [
      { name: "APF", logo: apfLogo },
      { name: "Creo", logo: creoLogo },
      { name: "Comepar", logo: comeparLogo },
    ],
  },
  {
    service: services[1],
    clients: [
      { name: "Creo", logo: creoLogo },
      { name: "Grupo Altamira", logo: altamiraLogo },
    ],
  },
  {
    service: services[3],
    clients: [
      { name: "Grupo Altamira", logo: altamiraLogo },
      { name: "IIDES", logo: iidesLogo },
      { name: "PNUD", logo: pnudLogo },
    ],
  },
  {
    service: services[4],
    clients: [{ name: "L’Acerie", logo: lacerieLogo }],
  },
  {
    service: services[2],
    clients: [{ name: "Raíces", logo: raicesLogo }],
  },
  {
    service: services[5],
    clients: [{ name: "Grupo Altamira", logo: altamiraLogo }],
  },
]


function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.23em] ${
        light ? "text-[#cedba9]" : "text-[#6c8357]"
      }`}
    >
      <span
        className={`h-[1px] w-7 ${light ? "bg-[#cedba9]" : "bg-[#6c8357]"}`}
      />
      {children}
    </div>
  )
}

function RotatingImage({
  images,
  alt,
  className = "",
}: {
  images: string[]
  alt: string
  className?: string
}) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setActiveImage(0)
  }, [images])

  useEffect(() => {
    if (
      images.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const timer = window.setTimeout(() => {
      setActiveImage((current) => (current + 1) % images.length)
    }, 8000)

    return () => window.clearTimeout(timer)
  }, [activeImage, images])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={index === 0 ? alt : ""}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ${
            activeImage === index
              ? "scale-100 opacity-100"
              : "scale-[1.025] opacity-0"
          }`}
        />
      ))}
    </div>
  )
}


function HomePage() {
  const [activeHero, setActiveHero] = useState(0)
  const [loadedPreviews, setLoadedPreviews] = useState<string[]>([])
  const heroSlide = heroSlides[activeHero]

   useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const timer = window.setTimeout(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length)
    }, 7000)

    return () => window.clearTimeout(timer)
  }, [activeHero])

  function loadPreview(href: string) {
    setLoadedPreviews((current) =>
      current.includes(href) ? current : [...current, href],
    )
  }

  return (
    <>
      <section className="bg-[#f8f7f1]">
        <div className="mx-auto grid min-h-[680px] max-w-[1440px] lg:grid-cols-[48%_52%]">
          <div className="flex flex-col justify-center px-6 py-20 md:px-10 lg:px-16 lg:py-20">
            <SectionLabel>Diseño y cuidado de espacios verdes</SectionLabel>
            <h1 className="font-display mt-9 max-w-[650px] text-[clamp(4.5rem,7vw,7.75rem)] leading-[0.87] tracking-[-0.065em] text-[#183c2f]">
              La naturaleza
              <br />
              hace <em className="font-normal text-[#85996e]">lugar.</em>
            </h1>
            <p className="mt-10 max-w-[410px] text-[15px] leading-[1.85] text-[#667369]">
              Hace 12 años acercamos la naturaleza a las personas. Creamos y
              cuidamos espacios verdes que hacen que cada lugar se sienta mejor
              estar.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <ButtonLink href="#servicios">Conocer servicios</ButtonLink>
              <a
                href="/trabajos"
                className="border-b border-[#183c2f] pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#183c2f] transition-colors hover:text-[#839557]"
              >
                Nuestros Trabajos
              </a>
            </div>
            <div className="mt-20 flex items-center gap-5 border-t border-[#d9ded1] pt-6">
              <span className="font-display text-[54px] leading-none tracking-tight text-[#183c2f]">
                12
              </span>
              <span className="text-[11px] font-semibold uppercase leading-[1.7] tracking-[0.14em] text-[#6a756a]">
                Años cultivando
                <br />
                nuevas posibilidades
              </span>
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden lg:min-h-full">
            <img
              key={heroSlide.image}
              src={heroSlide.image}
              alt={heroSlide.alt}
              fetchPriority={activeHero === 0 ? "high" : "auto"}
              className="absolute inset-0 h-full w-full animate-[hero-reveal_600ms_ease-out] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c21]/45 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white md:bottom-10 md:left-10 md:right-10">
              <span className="max-w-[230px] font-display text-[26px] leading-[1.05]">
                {heroSlide.caption}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex gap-2" aria-label="Elegir inspiración">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.image}
                      type="button"
                      onClick={() => setActiveHero(index)}
                      className={`h-2 rounded-full border border-white transition-all ${
                        activeHero === index
                          ? "w-7 bg-white"
                          : "w-2 bg-transparent hover:bg-white/60"
                      }`}
                      aria-label={`Ver inspiración ${index + 1}`}
                      aria-current={activeHero === index ? "true" : undefined}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                  0{activeHero + 1} / 03
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="bg-[#f1f2e9] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>Lo que hacemos</SectionLabel>
              <h2 className="font-display mt-6 max-w-[640px] text-[clamp(3.3rem,5vw,5.7rem)] leading-[0.94] tracking-[-0.055em] text-[#183c2f]">
                Todo espacio puede
                <br />
                <em className="font-normal">florecer.</em>
              </h2>
            </div>
            <p className="max-w-[310px] text-sm leading-[1.8] text-[#68756b]">
              Acompañamos proyectos de construcción, residenciales, showrooms y
              sedes corporativas con soluciones verdes a medida.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.number}
                href={service.href}
                onMouseEnter={() => loadPreview(service.href)}
                onFocus={() => loadPreview(service.href)}
                className="group relative flex min-h-[270px] flex-col overflow-hidden border border-[#d7ddcf] bg-transparent p-7 transition-colors hover:border-[#183c2f] focus:border-[#183c2f] md:p-9"
              >
                {loadedPreviews.includes(service.href) && (
                  <>
                    <img
                      src={service.images[0]}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102d23]/95 via-[#102d23]/55 to-[#102d23]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" />
                  </>
                )}
                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#cbd7be] text-[#547450] transition-colors group-hover:border-white/45 group-hover:text-white group-focus:border-white/45 group-focus:text-white">
                    <Icon name={service.icon} size={27} />
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest text-[#8d9b86] transition-colors group-hover:text-white/75 group-focus:text-white/75">
                    {service.number}
                  </span>
                </div>
                <div className="relative mt-auto">
                  <h3 className="mt-10 font-display text-[30px] leading-[1.05] tracking-[-0.025em] text-[#183c2f] transition-colors group-hover:text-white group-focus:text-white">
                    {service.title}
                  </h3>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <p className="max-w-[310px] text-[13px] leading-[1.7] text-[#718075] transition-colors group-hover:text-white/80 group-focus:text-white/80">
                      {service.description}
                    </p>
                    <Icon
                      name="arrow"
                      size={19}
                      className="shrink-0 text-[#547450] transition-all group-hover:translate-x-1 group-hover:text-white group-focus:translate-x-1 group-focus:text-white"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="aliados"
        className="overflow-hidden bg-[#f8f7f1] px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1312px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <SectionLabel>Aliados</SectionLabel>
              <h2 className="font-display mt-6 max-w-[680px] text-[clamp(3rem,5vw,5.4rem)] leading-[0.96] tracking-[-0.05em] text-[#183c2f]">
                Algunos clientes que
                <br />
                <em className="font-normal text-[#85996e]">
                  confían en nuestro trabajo.
                </em>
              </h2>
            </div>
            <p className="max-w-[300px] text-sm leading-[1.8] text-[#68756b]">
              Acompañamos a organizaciones que valoran espacios más vivos,
              saludables y sostenibles.
            </p>
          </div>
          <div
            className="client-marquee mt-14"
            role="region"
            aria-label="Carrusel continuo de clientes"
            tabIndex={0}
          >
            <div className="client-marquee-track">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="client-marquee-group"
                  aria-hidden={groupIndex === 1}
                >
                  {clients.map((client, index) => (
                    <div
                      key={`${groupIndex}-${client.name}`}
                      className="group relative flex h-[170px] w-[260px] shrink-0 flex-col items-center justify-center overflow-hidden border border-[#d7ddcf] bg-[#f0f2e8] px-7 pb-8 pt-6 transition-colors duration-500 hover:border-[#aebda0] hover:bg-white md:w-[300px]"
                    >
                      <span className="absolute right-5 top-4 text-[9px] font-semibold tracking-[0.18em] text-[#95a28b]">
                        0{index + 1}
                      </span>
                      <img
                        src={client.logo}
                        alt={groupIndex === 0 ? client.name : ""}
                        className={`client-logo h-full w-full object-contain ${client.logoClass}`}
                      />
                      <span className="absolute bottom-4 left-5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#62765d]">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#183c2f] lg:grid-cols-2">
        <div className="min-h-[420px] lg:min-h-[600px]">
          <img
            src={images.courtyard}
            alt="Jardín y sendero en un patio interior"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-20 md:px-16 lg:px-[12%]">
          <SectionLabel light>Una mirada a largo plazo</SectionLabel>
          <h2 className="font-display mt-8 max-w-[570px] text-[clamp(3.5rem,5vw,6rem)] leading-[0.97] tracking-[-0.055em] text-[#f8f7f1]">
            Más verde.
            <br />
            <em className="font-normal text-[#bed19e]">Más vida.</em>
          </h2>
          <p className="mt-8 max-w-[460px] text-[15px] leading-[1.9] text-[#c7d3c5]">
            No se trata solo de crear un jardín. Se trata de acompañar su
            crecimiento, cuidar cada detalle y hacer que perdure en el tiempo.
          </p>
          <a
            href="/servicios"
            className="mt-10 inline-flex w-fit items-center gap-5 border-b border-[#c6d9a8] pb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e8efda] hover:text-white"
          >
            Conocé nuestro trabajo <Icon name="arrow" size={17} />
          </a>
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <section className="bg-[#f8f7f1] px-6 pb-16 pt-20 md:px-10 lg:px-16 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-[1312px]">
          <SectionLabel>Servicios de paisajismo</SectionLabel>
          <div className="mt-7 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h1 className="font-display max-w-[850px] text-[clamp(4rem,7vw,7.5rem)] leading-[0.91] tracking-[-0.06em] text-[#183c2f]">
              Cuidamos cada
              <br />
              forma de <em className="font-normal text-[#83996c]">crecer.</em>
            </h1>
            <p className="max-w-[340px] pb-2 text-[15px] leading-[1.85] text-[#667369]">
              Seis soluciones especializadas para crear, proteger y mantener
              espacios verdes que se disfrutan todos los días.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#183c2f] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto mb-10 flex max-w-[1312px] items-end justify-between">
          <div>
            <SectionLabel light>Nuestras especialidades</SectionLabel>
            <h2 className="font-display mt-5 text-[clamp(2.8rem,4vw,4.8rem)] leading-none tracking-[-0.045em] text-[#f8f7f1]">
              Elegí por dónde empezar.
            </h2>
          </div>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b9c9b5] md:block">
            Seis formas de transformar
          </span>
        </div>
        <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group relative min-h-[500px] overflow-hidden bg-[#315342]"
            >
              <img
                src={service.images[0]}
                alt={service.alt}
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102d23] via-[#183c2f]/45 to-[#315342]/20 transition-colors duration-700 group-hover:via-[#102d23]/25 group-hover:to-transparent group-focus-visible:via-[#102d23]/25 group-focus-visible:to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40">
                    <Icon name={service.icon} size={23} />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-white/70">
                    {service.number} / 06
                  </span>
                </div>
                <h3 className="font-display text-[38px] leading-[1] tracking-[-0.03em]">
                  {service.title}
                </h3>
                <div className="mt-5 flex items-end justify-between gap-5 border-t border-white/30 pt-5">
                  <p className="text-[13px] leading-[1.65] text-white/75">
                    {service.description}
                  </p>
                  <Icon
                    name="arrow"
                    size={21}
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="bg-[#e6ecd9] px-6 py-20 text-center md:px-10 lg:py-24">
        <SectionLabel>Una solución para cada espacio</SectionLabel>
        <h2 className="font-display mx-auto mt-6 max-w-[760px] text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.05em] text-[#183c2f]">
          La naturaleza se cuida en equipo.
        </h2>
        <p className="mx-auto mt-6 max-w-[540px] text-sm leading-[1.8] text-[#667369]">
          Podemos combinar servicios y frecuencias en una propuesta adaptada a
          las necesidades de tu proyecto.
        </p>
        <div className="mt-9">
          <ButtonLink href="/planes">Conocer nuestros planes</ButtonLink>
        </div>
      </section>
    </>
  )
}

function WorkPage() {
  return (
    <>
      <section className="bg-[#f8f7f1] px-6 pb-16 pt-20 md:px-10 lg:px-16 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-[1312px]">
          <SectionLabel>Trabajos recientes</SectionLabel>
          <div className="mt-7 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h1 className="font-display max-w-[850px] text-[clamp(4rem,7vw,7.5rem)] leading-[0.91] tracking-[-0.06em] text-[#183c2f]">
              Espacios que ya
              <br />
              están <em className="font-normal text-[#83996c]">creciendo.</em>
            </h1>
            <p className="max-w-[350px] pb-2 text-[15px] leading-[1.85] text-[#667369]">
              Una galería viva de proyectos realizados junto a organizaciones
              que eligieron incorporar más naturaleza a sus espacios.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#eef0e6] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workProjects.map((project, index) => (
            <a
              key={project.service.title}
              href={project.service.href}
              className="group relative flex min-h-[540px] flex-col overflow-hidden bg-[#183c2f]"
            >
              <RotatingImage
                images={project.service.images}
                alt={`Proyecto de ${project.service.title}`}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d271e] via-[#102d23]/35 to-[#102d23]/10" />
              <div className="relative mt-auto p-7 text-white md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7e5bd]">
                    Proyecto 0{index + 1}
                  </span>
                  <Icon
                    name="arrow"
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
                <h2 className="font-display text-[36px] leading-[1.02] tracking-[-0.035em]">
                  {project.service.title}
                </h2>
                <p className="mt-4 text-[12px] font-semibold uppercase leading-[1.7] tracking-[0.12em] text-white/75">
                  {project.clients.map((client) => client.name).join(" · ")}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/25 pt-5">
                  {project.clients.map((client) => (
                    <span
                      key={client.name}
                      className="flex h-12 min-w-12 items-center justify-center bg-[#f8f7f1] px-3 text-[9px] font-bold uppercase tracking-[0.08em] text-[#183c2f]"
                      title={client.name}
                    >
                      {"logo" in client && client.logo ? (
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="client-logo h-8 max-w-20 object-contain"
                        />
                      ) : (
                        client.name
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}


function ServiceDetailPage({ service }: { service: typeof services[number] }) {
  return (
    <>
      <section className="grid min-h-[650px] bg-[#183c2f] lg:grid-cols-[52%_48%]">
        <div className="flex flex-col justify-center px-6 py-20 md:px-10 lg:px-[max(64px,calc((100vw-1312px)/2))]">
          <SectionLabel light>{service.eyebrow}</SectionLabel>
          <h1 className="font-display mt-9 max-w-[700px] text-[clamp(3.8rem,6vw,6.7rem)] leading-[0.91] tracking-[-0.06em] text-[#f8f7f1]">
            {service.title}
          </h1>
          <p className="mt-9 max-w-[500px] text-[15px] leading-[1.9] text-[#c8d6c9]">
            {service.intro}
          </p>
          <a
            href="/servicios"
            className="mt-11 inline-flex w-fit items-center gap-4 border-b border-[#c6d9a8] pb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e8efda]"
          >
            Ver todos los servicios <Icon name="arrow" size={17} />
          </a>
        </div>
        <div className="relative min-h-[420px]">
          <img
            src={service.images[0]}
            alt={service.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#17392b]/10" />
        </div>
      </section>
      <section className="bg-[#f8f7f1] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1312px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <SectionLabel>Cómo trabajamos</SectionLabel>
            <h2 className="font-display mt-7 text-[clamp(3.3rem,5vw,5.7rem)] leading-[0.95] tracking-[-0.055em] text-[#183c2f]">
              Cuidado que se
              <br />
              <em className="font-normal">nota.</em>
            </h2>
            <p className="mt-8 max-w-[430px] text-[15px] leading-[1.9] text-[#667369]">
              {service.benefit}
            </p>
          </div>
          <div className="border-t border-[#d7ddcf]">
            {service.features.map((feature, index) => (
              <div
                key={feature.title}
                className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#d7ddcf] py-8 md:grid-cols-[60px_1fr] md:py-10"
              >
                <span className="pt-1 text-[11px] font-semibold tracking-[0.15em] text-[#80936e]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-[30px] leading-tight text-[#183c2f] md:text-[36px]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-[480px] text-sm leading-[1.7] text-[#728075]">
                    {feature.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#e6ecd9] px-6 py-20 text-center md:px-10">
        <SectionLabel>Próximo paso</SectionLabel>
        <h2 className="font-display mx-auto mt-6 max-w-[760px] text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.05em] text-[#183c2f]">
          Hagamos crecer tu espacio.
        </h2>
        <p className="mx-auto mt-5 max-w-[530px] text-sm leading-[1.8] text-[#667369]">
          Conocé nuestras propuestas de intervención y mantenimiento para
          encontrar el punto de partida ideal.
        </p>
        <div className="mt-9">
          <ButtonLink href="/planes">Ver nuestros planes</ButtonLink>
        </div>
      </section>
    </>
  )
}
/*
const buildingServices = [
  {
    number: "01",
    title: "Jardines verticales",
    detail: "Una nueva dimensión verde para los espacios del edificio.",
  },
  {
    number: "02",
    title: "Áreas verdes existentes",
    detail:
      "Limpieza y mantenimiento para conservar cada jardín en óptimas condiciones.",
  },
  {
    number: "03",
    title: "Riego automático",
    detail: "Implementación y mantenimiento de sistemas de riego automático.",
  },
  {
    number: "04",
    title: "Corte de césped",
    detail:
      "Cuidado periódico para espacios exteriores siempre bien presentados.",
  },
]

function BuildingMaintenancePage() {
  return (
    <>
      <section className="grid min-h-[650px] bg-[#183c2f] lg:grid-cols-[52%_48%]">
        <div className="flex flex-col justify-center px-6 py-20 md:px-10 lg:px-[max(64px,calc((100vw-1312px)/2))]">
          <SectionLabel light>Mantenimiento de edificios</SectionLabel>
          <h1 className="font-display mt-9 max-w-[700px] text-[clamp(4rem,7vw,7rem)] leading-[0.91] tracking-[-0.06em] text-[#f8f7f1]">
            Lugares para
            <br />
            <em className="font-normal text-[#bcd39e]">vivir mejor.</em>
          </h1>
          <p className="mt-9 max-w-[470px] text-[15px] leading-[1.9] text-[#c8d6c9]">
            Hace más de 5 años somos encargados del cuidado de espacios verdes
            en edificios. Sabemos que un entorno bien cuidado transforma la
            experiencia de quienes lo habitan.
          </p>
          <div className="mt-12 flex items-center gap-5 border-t border-white/20 pt-6">
            <span className="font-display text-[55px] leading-none text-[#c8d9a8]">
              5+
            </span>
            <span className="text-[11px] font-semibold uppercase leading-[1.6] tracking-[0.14em] text-[#c9d7ca]">
              Años de experiencia
              <br />
              en edificios
            </span>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <img
            src={images.building}
            alt="Edificio residencial contemporáneo rodeado de árboles"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#17392b]/10" />
        </div>
      </section>
      <section className="bg-[#f8f7f1] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1312px] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <SectionLabel>Una propuesta especializada</SectionLabel>
            <h2 className="font-display mt-7 text-[clamp(3.5rem,5vw,5.9rem)] leading-[0.95] tracking-[-0.055em] text-[#183c2f]">
              Tu edificio,
              <br />
              <em className="font-normal">en buenas manos.</em>
            </h2>
            <p className="mt-8 max-w-[430px] text-[15px] leading-[1.9] text-[#667369]">
              Para la intervencion de residencia, locales comerciales, areas verdes de edificios en Asuncion,
              proponemos un cuidado integral de sus espacios verdes: desde el
              mantenimiento cotidiano hasta nuevas intervenciones que aportan
              valor.
            </p>
            <div className="mt-10 hidden h-[300px] overflow-hidden lg:block">
              <img
                src={images.vertical}
                alt="Fachada cubierta de vegetación vertical"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="border-t border-[#d7ddcf]">
            {buildingServices.map((service) => (
              <div
                key={service.number}
                className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#d7ddcf] py-8 md:grid-cols-[60px_1fr] md:py-10"
              >
                <span className="pt-1 text-[11px] font-semibold tracking-[0.15em] text-[#80936e]">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-display text-[30px] leading-tight text-[#183c2f] md:text-[36px]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[430px] text-sm leading-[1.7] text-[#728075]">
                    {service.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#e6ecd9] px-6 py-20 text-center md:px-10">
        <SectionLabel>El siguiente paso</SectionLabel>
        <h2 className="font-display mx-auto mt-6 max-w-[750px] text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.05em] text-[#183c2f]">
          Un plan para cada espacio.
        </h2>
        <p className="mx-auto mt-5 max-w-[530px] text-sm leading-[1.8] text-[#667369]">
          Explorá nuestras propuestas de intervención y mantenimiento para
          encontrar el punto de partida ideal.
        </p>
        <div className="mt-9">
          <ButtonLink href="/planes">Ver nuestros planes</ButtonLink>
        </div>
      </section>
    </>
  )
}
*/
const plans = [
  {
    name: "Plan A",
    tag: "Cuidados Esenciales*",
    price: "2.200.000 — 6.000.000",
    intro: "Mantenimiento e intervención del espacio verde existente.",
    items: [
      "Poda de formación en jardín existente",
      "Introducción de al menos 2-4 especies",
      "Redistribución de canteros saturados a areas disponibles",
    ],
    visits: "1-2 visitas mensuales",
    monthly: "350.000 - 900.000 / mes",
    note: "El cliente provee un depósito para herramientas.",
  },
  {
    name: "Plan B",
    tag: "Nuevas Perspectivas*",
    price: "14.000.000 — 25.000.000",
    intro: "Una transformación que lleva el verde a nuevas alturas.",
    items: [
      "Todo lo incluido en el Plan A",
      "Implementación de jardines verticales en la zona de azotea / acceso / living - comedor",
      "Mantenimiento del jardín vertical y del sistema de riego automático",
    ],
    visits: "Mantenimiento mensual",
    monthly: "900.000 - 1.650.000 / mes",
    note: "Incluye mantenimiento de espacios verdes, del jardín vertical y del sistema de riego automático.",
  },
  {
    name: "Plan C",
    tag: "Transformación integral**",
    price: "Según proyecto",
    intro: "Una propuesta de modernización hecha a medida.",
    items: [
      "Todo lo incluido en el Plan B",
      "Introduccion de un concepto paisajistico con especies arbustivas nativas y armonización de canteros",
      "Modernización del area principal con especies nativas florales de al menos 1,5 m en conjunto con la adicion de  3 a 5 especies",
      "Instalación de riego automático en azotea / cesped / canteros",
    ],
    visits: "2-4 visitas mensuales",
    monthly: "A definir",
    note: "El valor mensual depende de la definicion de la intervencion.",
  },
]

function PlansPage() {
  return (
    <>
      <section className="bg-[#f8f7f1] px-6 pb-24 pt-20 md:px-10 lg:px-16 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-[1312px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Nuestras Propuestas</SectionLabel>
              <h1 className="font-display mt-7 max-w-[800px] text-[clamp(4rem,7vw,7.5rem)] leading-[0.91] tracking-[-0.06em] text-[#183c2f]">
                El verde tiene
                <br />
                <em className="font-normal text-[#83996c]">un plan.</em>
              </h1>
            </div>
            <p className="max-w-[320px] pb-2 text-[15px] leading-[1.8] text-[#667369]">
              Tres maneras de imaginar, intervenir y cuidar los espacios verdes
              de tu edificio.
            </p>
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`flex flex-col border p-7 md:p-9 ${
                  index === 1
                    ? "border-[#183c2f] bg-[#183c2f] text-[#f8f7f1]"
                    : "border-[#d7ddcf] bg-[#f1f2e9] text-[#183c2f]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                      index === 1 ? "text-[#c8dba7]" : "text-[#728a64]"
                    }`}
                  >
                    {plan.tag}
                  </span>
                  <span
                    className={`font-display text-[23px] ${
                      index === 1 ? "text-[#bcd39e]" : "text-[#829775]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>
                <h2 className="font-display mt-9 text-[54px] leading-none tracking-[-0.05em]">
                  {plan.name}
                </h2>
                <p
                  className={`mt-4 min-h-[53px] text-sm leading-[1.7] ${
                    index === 1 ? "text-[#ced9cc]" : "text-[#667369]"
                  }`}
                >
                  {plan.intro}
                </p>
                <div
                  className={`mt-8 border-t pt-8 ${
                    index === 1 ? "border-white/20" : "border-[#ced7c9]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                      index === 1 ? "text-[#bed39e]" : "text-[#738a66]"
                    }`}
                  >
                    Inversión estimada
                  </span>
                  <div className="font-display mt-3 min-h-[55px] text-[clamp(1.65rem,2.2vw,2.3rem)] leading-tight tracking-[-0.035em]">
                    {plan.price}
                  </div>
                </div>
                <div
                  className={`mt-6 border-t pt-7 ${
                    index === 1 ? "border-white/20" : "border-[#ced7c9]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                      index === 1 ? "text-[#bed39e]" : "text-[#738a66]"
                    }`}
                  >
                    Qué incluye
                  </span>
                  <ul className="mt-5 space-y-4">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] leading-[1.65]"
                      >
                        <Icon
                          name="check"
                          size={17}
                          className={`mt-0.5 shrink-0 ${
                            index === 1 ? "text-[#bed39e]" : "text-[#668058]"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`mt-auto border-t pt-7 ${
                    index === 1 ? "border-white/20" : "border-[#ced7c9]"
                  } ${index === 2 ? "lg:mt-10" : "mt-10"}`}
                >
                  <div className="flex flex-wrap items-end justify-between gap-2">
                    <span className="text-[12px] font-medium">
                      {plan.visits}
                    </span>
                    <span className="font-display text-[24px] leading-none">
                      {plan.monthly}
                    </span>
                  </div>
                  <p
                    className={`mt-5 text-[11px] leading-[1.6] ${
                      index === 1 ? "text-[#b8c9b7]" : "text-[#7b877b]"
                    }`}
                  >
                    {plan.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#d7ddcf] pt-6 text-[11px] leading-[1.7] text-[#7b877b] md:flex-row">
            <span>
              *Valor Promedio de Propuestas de Intervención y Mantenimiento del 2026.
            </span>
            <span>**Los alcances se definen según cada proyecto.</span>
          </div>
        </div>
      </section>
      <section className="grid bg-[#e6ecd9] md:grid-cols-[42%_58%]">
        <div className="min-h-[300px] md:min-h-[420px]">
          <img
            src={images.vertical}
            alt="Edificio con un jardín vertical lleno de vegetación"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
          <SectionLabel>Diseñados para crecer</SectionLabel>
          <h2 className="font-display mt-6 max-w-[600px] text-[clamp(3rem,5vw,5.5rem)] leading-[0.98] tracking-[-0.055em] text-[#183c2f]">
            Cada proyecto comienza con una visión.
          </h2>
          <p className="mt-6 max-w-[470px] text-sm leading-[1.8] text-[#667369]">
            Desde el cuidado de lo que ya existe hasta una transformación
            completa, cada propuesta busca que la naturaleza sea parte de la
            vida cotidiana.
          </p>
        </div>
      </section>
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-[#102d23] px-6 pb-8 pt-16 text-[#f5f2e8] md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="flex flex-col justify-between gap-12 border-b border-white/20 pb-16 md:flex-row">
          <div>
            <Brand light />
            <p className="mt-7 max-w-[350px] font-display text-[28px] leading-[1.15] text-[#cedbbd]">
              Cultivamos lugares
              <br />
              para vivir mejor.
            </p>
          </div>
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#a8bc9f]">
              Explorá
            </p>
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors hover:text-[#bad29a]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="max-w-[240px]">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#a8bc9f]">
              Nuestra esencia
            </p>
            <p className="text-sm leading-[1.8] text-[#c8d3c7]">
              12 años llevando naturaleza a edificios, hogares y espacios de
              trabajo.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-7 text-[10px] uppercase tracking-[0.13em] text-[#9cad9d] sm:flex-row">
          <span>© {new Date().getFullYear()} Plantae Paisajismo</span>
          <span>Espacios vivos, todos los días.</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const requestedPath =
    window.location.pathname.toLowerCase().replace(/\/$/, "") || "/"
  const routeAliases: Record<string, string> = {
    "/experiencia": "/servicios/mantenimiento-integral",
    "/servicios/edificios": "/servicios/mantenimiento-integral",
    "/servicios/mantenimiento-edificios": "/servicios/mantenimiento-integral",
    "/servicios/mantenimiento-residencial/corporativo":
      "/servicios/mantenimiento-integral",
    "/servicios/poda-area-subterranea": "/servicios/poda-aerea-subterranea",
    "/servicios/control-de-plaga": "/servicios/empastado-control-plagas",
    "/servicios/empastado": "/servicios/empastado-control-plagas",
  }
  const path = routeAliases[requestedPath] || requestedPath
  const active = path.startsWith("/servicios")
    ? "/servicios"
    : path === "/trabajos"
      ? "/trabajos"
      : path === "/planes"
        ? "/planes"
        : "/"
  const detailService = services.find((service) => service.href === path)

  return (
    <div className="min-h-screen bg-[#f8f7f1]">
      <Header active={active} />
      <main>
        {path === "/servicios" ? (
          <ServicesPage />
        ) : path === "/trabajos" ? (
          <WorkPage />
        ) : detailService ? (
          <ServiceDetailPage service={detailService} />
        ) : path === "/planes" ? (
          <PlansPage />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
     <WhatsAppButton />

    </div>
  )
}
