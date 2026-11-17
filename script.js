// ============================================================================
// BMS AUTO GLASS — CONFIGURATION & INTERACTIVITY
// Easily update your physical shop street address or email right here:
// ============================================================================
const BUSINESS_CONFIG = {
  businessName: "BMS Auto Glass",
  phoneDisplay: "(469) 855-8328",
  phoneRaw: "14698558328",
  email: "samkar70@gmail.com",
  shopAddressEN: "11324 George Renfro Drive Suite I, Alvarado, TX 76009",
  shopAddressES: "11324 George Renfro Drive Suite I, Alvarado, TX 76009"
};

// Complete Bilingual Dictionary (English & Spanish)
const translations = {
  en: {
    topbar_bilingual: "English & Español • Se Habla Español",
    topbar_area: "In-Shop & Mobile Service Across the DFW Metroplex",
    topbar_hours: "Mon–Fri: 9:00 AM – 6:00 PM | Sat: By Appt",
    brand_sub: "DFW Metroplex • Shop & Mobile",
    nav_services: "Services",
    nav_about: "About Us",
    nav_area: "DFW Coverage",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_quote: "Get a Free Quote",
    hero_badge: "IN-SHOP & MOBILE SERVICE • SERVING DFW METROPLEX",
    hero_title: "Windshield Replacement & Auto Glass Repair in <span>DFW Metroplex</span>",
    hero_subtitle: "Need help with damaged auto glass? Call BMS Auto Glass for windshield replacement, rock chip repair, and side or back window glass replacement. Visit our shop in Alvarado or schedule mobile service anywhere in Dallas–Fort Worth. Get a free quote in English or Spanish.",
    hero_call_btn: "Call (469) 855-8328",
    hero_text_btn: "Text Us: (469) 855-8328",
    trust_1_line: "Windshield, Side Door & Back Glass Replacement",
    trust_2_line: "In-Shop (Alvarado) & Mobile Service Across DFW",
    trust_3_line: "Lifetime Warranty Against Leaks & Defects",
    trust_4_line: "English & Spanish • Se Habla Español",
    form_tag: "FAST & FREE ESTIMATE",
    form_title: "Get a Free Auto Glass Quote in DFW",
    form_subtitle: "Enter your vehicle details below for rapid pricing, or call us directly at <strong>(469) 855-8328</strong>.",
    form_year: "Year *",
    form_make: "Make *",
    form_model: "Model *",
    form_glass_label: "Glass Needed *",
    opt_windshield: "Windshield Replacement",
    opt_chip: "Windshield Rock Chip Repair",
    opt_front_door: "Front Door Glass (Driver/Passenger)",
    opt_rear_door: "Rear Door / Quarter Glass",
    opt_back_glass: "Back Window / Rear Glass",
    opt_other: "Multiple Windows / Other",
    form_service_mode: "Service Preference *",
    opt_mobile: "Mobile Service (Come to me)",
    opt_inshop: "In-Shop Service (Visit shop)",
    opt_either: "Either / Fastest Available",
    form_name: "Your Name *",
    form_phone: "Phone Number *",
    form_city: "City or ZIP Code in DFW *",
    form_notes: "Additional Details (VIN, rain sensor, tint, etc. - Optional)",
    form_submit: "Send Quote Request Now →",
    form_disclaimer: "🔒 Fast response by phone or text. No obligation.",
    stat_1: "Lifetime Leak Warranty",
    stat_2: "Certified Auto Glass",
    stat_3: "Shop & Mobile Coverage",
    stat_4: "Customer Satisfaction",
    services_eyebrow: "OUR AUTO GLASS SERVICES",
    services_title: "Complete Auto Glass Replacement & Repair",
    services_subtitle: "Whether you have a small rock chip or need a complete windshield or door glass replacement, BMS Auto Glass delivers factory-grade installations in our shop or at your doorstep across DFW.",
    srv_1_title: "Windshield Replacement",
    srv_1_desc: "Full windshield replacement using high-quality OEE (Original Equipment Equivalent) glass. Installed with industry-leading urethane adhesives for structural safety and a permanent, leak-free seal.",
    srv_1_b1: "Cars, SUVs, Pickup Trucks & Vans",
    srv_1_b2: "OEE quality glass options",
    srv_1_b3: "Lifetime warranty against leaks",
    srv_2_title: "Windshield & Rock Chip Repair",
    srv_2_desc: "Caught a rock on I-35, I-30, or I-20? We inspect chips and small cracks to determine if a fast resin repair can save your original factory windshield before Texas heat causes the crack to spread across the glass.",
    srv_2_b1: "Stops chips & bullseyes from spreading",
    srv_2_b2: "Restores structural strength & clarity",
    srv_2_b3: "Completed in about 20–30 minutes",
    srv_3_title: "Side Door & Quarter Glass Replacement",
    srv_3_desc: "Dealing with a break-in or shattered side window? We replace front and rear door glass as well as quarter panels, carefully vacuum out broken tempered glass inside the door panel, and test your window regulator.",
    srv_3_b1: "Driver & passenger door glass",
    srv_3_b2: "Broken glass cleanup included",
    srv_3_b3: "Window regulator & track inspection",
    srv_4_title: "Back Window & Rear Glass Replacement",
    srv_4_desc: "Complete replacement for shattered rear windshields and truck back sliders. We clean out all broken glass debris, install factory-tinted rear glass, and reconnect your rear window defroster grid.",
    srv_4_b1: "Heated defroster connections restored",
    srv_4_b2: "Factory privacy tint matching",
    srv_4_b3: "Sedans, SUVs, Hatchbacks & Pickups",
    srv_5_title: "In-Shop & Mobile Service Across DFW",
    srv_5_desc: "Choose what works best for your schedule! Bring your vehicle to our shop for climate-controlled installation, or schedule our fully equipped mobile auto glass unit to come to your home, office, or job site anywhere in the Metroplex.",
    srv_5_b1: "Convenient In-Shop or Mobile installation",
    srv_5_b2: "Same-day service often available when calling ahead",
    srv_5_b3: "Direct, honest communication in English & Spanish",
    srv_5_cta: "Call (469) 855-8328 to Schedule",
    srv_cta: "Request Quote →",
    about_eyebrow: "ABOUT BMS AUTO GLASS",
    about_title: "Quality Craftsmanship, Honest Pricing & Dependable Service",
    about_p1: "At <strong>BMS Auto Glass</strong>, we know that a cracked windshield or broken car window is stressful and disrupts your day. That is why we built our business around straightforward pricing, honest recommendations, and meticulous installation across the Dallas–Fort Worth Metroplex.",
    about_p2: "We never push a full replacement if a safe rock chip repair will solve the problem. When replacement is needed, we use high-grade OEE glass, premium primers, and fast-curing urethane adhesives so you can get back on the road safely and quickly.",
    af_1_title: "Lifetime Workmanship Warranty",
    af_1_desc: "Every windshield and window installation is backed by our lifetime warranty against water leaks, wind noise, and molding defects.",
    af_2_title: "Licensed, Insured & Experienced",
    af_2_desc: "Our technicians treat your vehicle with care—protecting your dashboard, paint, and interior while leaving your glass spotless.",
    af_3_title: "Bilingual Service (English & Spanish)",
    af_3_desc: "We proudly serve the entire DFW community with clear, friendly quotes and consultations in both English and Spanish.",
    process_title: "How Our Process Works",
    step_1_title: "Call or Request a Free Quote",
    step_1_desc: "Share your vehicle's Year, Make, Model, and which glass is damaged. We give you clear, upfront pricing right away.",
    step_2_title: "Choose In-Shop or Mobile Service",
    step_2_desc: "Drop by our shop or pick a convenient time for our mobile technician to arrive at your home or workplace in DFW.",
    step_3_title: "Precision Installation (45–60 Mins)",
    step_3_desc: "Most replacements take under an hour, followed by a 1-hour safe drive-away cure time—backed by our Lifetime Warranty.",
    process_btn: "Call Now: (469) 855-8328",
    area_eyebrow: "SERVICE AREA",
    area_title: "Serving the Entire DFW Metroplex — In-Shop & Mobile",
    area_subtitle: "Visit our shop location or schedule mobile auto glass service anywhere across Dallas, Tarrant, Collin, Denton, and surrounding counties.",
    area_banner_title: "Not sure if you're in our mobile service radius?",
    area_banner_desc: "Give us a quick call at (469) 855-8328 and we'll confirm availability for your exact location or schedule you at our shop!",
    reviews_eyebrow: "CUSTOMER REVIEWS",
    reviews_title: "What Our Customers Say",
    reviews_subtitle: "Drivers across Dallas–Fort Worth trust BMS Auto Glass for fast turnaround, clean installations, and fair prices.",
    rev_1_text: "\"Called BMS Auto Glass in the morning for a cracked windshield on my F-150 and they had it replaced the same afternoon. Very professional, clean work, and the price was way better than the big national chains.\"",
    rev_2_text: "\"Excelente servicio. Alguien rompió el vidrio de la puerta de mi carro y BMS Auto Glass me dio el mejor precio en DFW. Aspiraron todo el vidrio roto por dentro de la puerta y quedó como nuevo. ¡100% recomendados!\"",
    rev_3_text: "\"Super easy experience! They came out to my office in Arlington while I was working and replaced my SUV's windshield in under an hour. Honest folks, bilingual, and backed by a lifetime leak warranty.\"",
    faq_eyebrow: "COMMON QUESTIONS",
    faq_title: "Windshield Replacement & Repair FAQs",
    faq_subtitle: "Everything you need to know about our auto glass repair and replacement services in the DFW Metroplex.",
    faq_q1: "How much does a windshield or car window replacement cost?",
    faq_a1: "Pricing depends on your vehicle's year, make, model, body style, and features (such as rain sensors, acoustic glass, or heated wipers). Call or text us at <strong>(469) 855-8328</strong> with your vehicle info or VIN, and we will give you a free, exact quote in minutes.",
    faq_q2: "Can my windshield rock chip be repaired instead of replacing the whole glass?",
    faq_a2: "In many cases, yes! If the rock chip is smaller than a quarter, not deep into both layers of glass, and not directly in the driver's primary line of sight or at the very edge of the windshield, we can inject professional resin to stop it from spreading and save you money.",
    faq_q3: "Do you offer both In-Shop and Mobile service in DFW?",
    faq_a3: "Yes! You can bring your vehicle directly to our shop or schedule our mobile auto glass technicians to come to your home, apartment, or workplace anywhere across the Dallas–Fort Worth Metroplex. Same-day appointments are often available when you call ahead.",
    faq_q4: "How long does a windshield replacement take, and when can I drive?",
    faq_a4: "Most windshield and window installations take between 45 and 60 minutes. For windshields, we recommend waiting about 1 hour after installation before driving so the urethane adhesive cures safely. Side door glass replacements can be driven immediately!",
    faq_q5: "What does your Lifetime Warranty cover?",
    faq_a5: "Every installation performed by BMS Auto Glass includes a Lifetime Workmanship Warranty for as long as you own the vehicle. It covers water leaks, air/wind noise, loose moldings, and manufacturer defects in the glass.",
    contact_eyebrow: "GET IN TOUCH",
    contact_title: "Contact BMS Auto Glass Today",
    contact_subtitle: "Call or text us for fast pricing, same-day scheduling, and dependable in-shop or mobile auto glass service anywhere in the DFW Metroplex.",
    contact_phone_label: "Phone / Text (English & Español)",
    contact_shop_label: "Shop Address (In-Shop & Mobile Service Across DFW)",
    contact_shop_value: BUSINESS_CONFIG.shopAddressEN,
    contact_hours_label: "Business Hours",
    contact_hours_value: "Mon – Fri: 9:00 AM – 6:00 PM | Sat: By Appointment",
    footer_desc: "Professional windshield replacement, rock chip repair, and side & rear window replacement across the Dallas–Fort Worth Metroplex. In-Shop & Mobile Service backed by a Lifetime Warranty.",
    footer_services_title: "Our Services",
    footer_contact_title: "Quick Contact",
    footer_area: "📍 11324 George Renfro Dr Suite I, Alvarado, TX 76009",
    footer_rights: "All rights reserved. Serving Alvarado & the DFW Metroplex.",
    sticky_call_btn: "Call Now: (469) 855-8328",
    sticky_quote_btn: "Get Free Quote"
  },
  es: {
    topbar_bilingual: "Inglés y Español • Atención Bilingüe",
    topbar_area: "Servicio en Taller y a Domicilio en todo DFW Metroplex",
    topbar_hours: "Lun–Vie: 9:00 AM – 6:00 PM | Sáb: Agendar Cita",
    brand_sub: "DFW Metroplex • Taller y Móvil",
    nav_services: "Servicios",
    nav_about: "Nosotros",
    nav_area: "Cobertura DFW",
    nav_reviews: "Reseñas",
    nav_faq: "Preguntas",
    nav_contact: "Contacto",
    nav_quote: "Cotizar Gratis",
    hero_badge: "SERVICIO EN TALLER Y A DOMICILIO • DFW METROPLEX",
    hero_title: "Cambio de Parabrisas y Reparación de Vidrios en <span>DFW Metroplex</span>",
    hero_subtitle: "¿Necesitas ayuda con un vidrio dañado? Llama a BMS Auto Glass para cambio de parabrisas, reparación de golpes de piedra y vidrios laterales o traseros. Visita nuestro taller en Alvarado o agenda servicio móvil en todo Dallas–Fort Worth. Cotización gratis en Inglés o Español.",
    hero_call_btn: "Llamar al (469) 855-8328",
    hero_text_btn: "Enviar Texto: (469) 855-8328",
    trust_1_line: "Cambio de Parabrisas, Puertas Laterales y Medallón",
    trust_2_line: "Servicio en Taller (Alvarado) y Móvil en Todo DFW",
    trust_3_line: "Garantía de por Vida Contra Filtraciones",
    trust_4_line: "Atención en Inglés y Español • Se Habla Español",
    form_tag: "COTIZACIÓN RÁPIDA Y GRATIS",
    form_title: "Obtén tu Cotización Gratis en DFW",
    form_subtitle: "Ingresa los datos de tu vehículo para recibir precio rápido, o llámanos directo al <strong>(469) 855-8328</strong>.",
    form_year: "Año *",
    form_make: "Marca *",
    form_model: "Modelo *",
    form_glass_label: "Vidrio que Necesitas *",
    opt_windshield: "Cambio de Parabrisas (Windshield)",
    opt_chip: "Reparación de Golpe de Piedra (Rock Chip)",
    opt_front_door: "Vidrio de Puerta Delantera",
    opt_rear_door: "Vidrio de Puerta Trasera / Costado",
    opt_back_glass: "Medallón / Vidrio Trasero",
    opt_other: "Varios Vidrios / Otro",
    form_service_mode: "Modalidad de Servicio *",
    opt_mobile: "Servicio Móvil a Domicilio",
    opt_inshop: "En el Taller (Yo llevo el auto)",
    opt_either: "Cualquiera / El Más Rápido",
    form_name: "Tu Nombre *",
    form_phone: "Teléfono *",
    form_city: "Ciudad o Código Postal en DFW *",
    form_notes: "Detalles adicionales (VIN, sensor de lluvia, 4 puertas, etc. - Opcional)",
    form_submit: "Enviar Solicitud de Cotización →",
    form_disclaimer: "🔒 Respuesta rápida por llamada o mensaje de texto. Sin compromiso.",
    stat_1: "Garantía Contra Filtraciones",
    stat_2: "Vidrios Certificados",
    stat_3: "Taller y Servicio Móvil",
    stat_4: "Clientes Satisfechos",
    services_eyebrow: "NUESTROS SERVICIOS",
    services_title: "Reemplazo y Reparación Completa de Vidrios de Auto",
    services_subtitle: "Ya sea que tengas un pequeño golpe de piedra o necesites cambiar el parabrisas o vidrio de puerta completo, en BMS Auto Glass realizamos instalaciones impecables en nuestro taller o a domicilio en todo DFW.",
    srv_1_title: "Cambio de Parabrisas",
    srv_1_desc: "Reemplazo completo de parabrisas utilizando vidrio de alta calidad OEE. Instalamos con uretano profesional de secado rápido para máxima seguridad estructural y un sellado libre de fugas.",
    srv_1_b1: "Autos, SUVs, Pickups y Vans",
    srv_1_b2: "Opciones de vidrio calidad OEE",
    srv_1_b3: "Garantía de por vida contra filtraciones",
    srv_2_title: "Reparación de Parabrisas (Rock Chips)",
    srv_2_desc: "¿Te saltó una piedra en la I-35, I-30 o I-20? Evaluamos el golpe para determinar si una reparación con resina profesional puede salvar tu parabrisas original antes de que el calor de Texas corra la grieta.",
    srv_2_b1: "Evita que la estrelladura se extienda",
    srv_2_b2: "Recupera la firmeza y claridad del cristal",
    srv_2_b3: "Listo en aproximadamente 20–30 minutos",
    srv_3_title: "Vidrios de Puertas Laterales y Costados",
    srv_3_desc: "¿Te rompieron el cristal de la puerta? Reemplazamos vidrios delanteros, traseros y aletas laterales, aspiramos cuidadosamente los fragmentos de vidrio roto dentro de la puerta y revisamos el elevador.",
    srv_3_b1: "Vidrio de piloto, copiloto y puertas traseras",
    srv_3_b2: "Incluye aspirado de vidrio roto",
    srv_3_b3: "Inspección de rieles y elevador de ventana",
    srv_4_title: "Vidrio Trasero / Medallón (Back Glass)",
    srv_4_desc: "Reemplazo completo de medallones traseros estrellados y ventanas corredizas de troca. Limpiamos todo el vidrio quebrado, instalamos cristal con tinte de fábrica y conectamos el desempañador.",
    srv_4_b1: "Conexión de líneas de desempañador",
    srv_4_b2: "Tinte de privacidad igual al original",
    srv_4_b3: "Sedanes, SUVs, Hatchbacks y Pickups",
    srv_5_title: "Servicio en Taller y Móvil en Todo DFW",
    srv_5_desc: "¡Elige la opción más cómoda para ti! Trae tu vehículo a nuestro taller o agenda nuestra unidad móvil totalmente equipada para ir a tu casa, apartamento, oficina o lugar de trabajo en cualquier punto del Metroplex.",
    srv_5_b1: "Instalación cómoda en Taller o a Domicilio",
    srv_5_b2: "Citas el mismo día llamando con anticipación",
    srv_5_b3: "Atención directa y honesta en Español e Inglés",
    srv_5_cta: "Llama al (469) 855-8328 para Agendar",
    srv_cta: "Solicitar Cotización →",
    about_eyebrow: "SOBRE BMS AUTO GLASS",
    about_title: "Trabajo de Calidad, Precios Honestos y Servicio Confiable",
    about_p1: "En <strong>BMS Auto Glass</strong> sabemos que un parabrisas roto o un cristal estrellado es estresante y detiene tu día. Por eso construimos nuestro negocio en base a precios transparentes, recomendaciones honestas e instalaciones impecables en todo el Metroplex de Dallas–Fort Worth.",
    about_p2: "Nunca te venderemos un cambio completo si una reparación de golpe de piedra es suficiente y segura. Y cuando se requiere reemplazo, utilizamos vidrio certificado OEE y adhesivos de máxima calidad para que vuelvas a manejar seguro.",
    af_1_title: "Garantía de por Vida en Instalación",
    af_1_desc: "Cada parabrisas y vidrio instalado cuenta con garantía de por vida contra filtraciones de agua, ruido de viento y defectos de moldura.",
    af_2_title: "Técnicos con Experiencia y Cuidado",
    af_2_desc: "Cuidamos tu vehículo como si fuera nuestro: protegemos el tablero, la pintura y el interior, dejando tu vidrio impecable.",
    af_3_title: "Servicio 100% Bilingüe (Español e Inglés)",
    af_3_desc: "Atendemos con orgullo a toda nuestra comunidad de DFW con cotizaciones claras y rápidas en tu idioma.",
    process_title: "Cómo Funciona Nuestro Servicio",
    step_1_title: "1. Llama o Pide tu Cotización Gratis",
    step_1_desc: "Dinos el Año, Marca, Modelo de tu auto y cuál vidrio necesitas. Te damos precio claro y sin sorpresas al instante.",
    step_2_title: "2. Elige Taller o Servicio a Domicilio",
    step_2_desc: "Visítanos en nuestro taller o elige la hora para que nuestro técnico móvil vaya a tu casa o trabajo en DFW.",
    step_3_title: "3. Instalación Profesional (45–60 Min)",
    step_3_desc: "La mayoría de los cambios toman menos de una hora, más 1 hora de secado seguro—respaldado por Garantía de por Vida.",
    process_btn: "Llamar Ahora: (469) 855-8328",
    area_eyebrow: "ÁREA DE COBERTURA",
    area_title: "Cubrimos Todo el Metroplex DFW — En Taller y a Domicilio",
    area_subtitle: "Visítanos en nuestro taller o agenda servicio móvil en Dallas, Fort Worth, Arlington, Irving, Plano, Garland, Grand Prairie y ciudades cercanas.",
    area_banner_title: "¿Quieres confirmar disponibilidad en tu ubicación?",
    area_banner_desc: "¡Llámanos al (469) 855-8328 y te confirmamos de inmediato nuestro servicio móvil en tu área o te agendamos en el taller!",
    reviews_eyebrow: "OPINIONES DE CLIENTES",
    reviews_title: "Lo Que Dicen Nuestros Clientes",
    reviews_subtitle: "Conductores en todo Dallas–Fort Worth confían en BMS Auto Glass por nuestra rapidez, limpieza y excelentes precios.",
    rev_1_text: "\"Llamé a BMS Auto Glass en la mañana por el parabrisas roto de mi F-150 y esa misma tarde quedó instalado. Muy profesionales, trabajo limpio y mucho mejor precio que las cadenas grandes.\"",
    rev_2_text: "\"Excelente servicio. Alguien rompió el vidrio de la puerta de mi carro y BMS Auto Glass me dio el mejor precio en DFW. Aspiraron todo el vidrio roto por dentro de la puerta y quedó como nuevo. ¡100% recomendados!\"",
    rev_3_text: "\"¡Súper fácil y rápido! Vinieron a mi oficina en Arlington mientras trabajaba y cambiaron el parabrisas de mi SUV en menos de una hora. Muy amables y con garantía de por vida.\"",
    faq_eyebrow: "PREGUNTAS FRECUENTES",
    faq_title: "Preguntas Frecuentes sobre Parabrisas y Vidrios",
    faq_subtitle: "Todo lo que necesitas saber sobre nuestro servicio de reparación y cambio de vidrios de auto en DFW.",
    faq_q1: "¿Cuánto cuesta cambiar un parabrisas o vidrio de puerta?",
    faq_a1: "El precio depende del año, marca, modelo, estilo de carrocería y sensores de tu vehículo (como sensor de lluvia o vidrio acústico). Llámanos o mándanos texto al <strong>(469) 855-8328</strong> con los datos de tu auto o número VIN y te damos tu cotización exacta y gratis en minutos.",
    faq_q2: "¿Se puede reparar un golpe de piedra (chip) sin cambiar todo el parabrisas?",
    faq_a2: "¡En muchos casos sí! Si el golpe es más pequeño que una moneda de 25 centavos, no atravesó ambas capas del vidrio y no está en el borde, inyectamos resina profesional para evitar que se corra la grieta y ahorrarte dinero.",
    faq_q3: "¿Ofrecen tanto servicio en Taller como Servicio Móvil a domicilio en DFW?",
    faq_a3: "¡Sí! Puedes traer tu vehículo directamente a nuestro taller o pedir que nuestros técnicos móviles vayan a tu casa, apartamento o trabajo en cualquier parte del Metroplex Dallas–Fort Worth.",
    faq_q4: "¿Cuánto tiempo tarda la instalación y cuándo puedo manejar?",
    faq_a4: "La mayoría de los reemplazos toman entre 45 y 60 minutos. En cambios de parabrisas recomendamos esperar 1 hora después de terminar para que el uretano seque de forma segura. ¡Los vidrios de puerta lateral se pueden usar de inmediato!",
    faq_q5: "¿Qué cubre la Garantía de por Vida?",
    faq_a5: "Cada instalación realizada por BMS Auto Glass incluye Garantía de por Vida en mano de obra mientras seas dueño del vehículo. Cubre filtraciones de agua, ruidos de aire, molduras sueltas y defectos de fábrica del cristal.",
    contact_eyebrow: "CONTÁCTANOS",
    contact_title: "Comunícate con BMS Auto Glass Hoy",
    contact_subtitle: "Llámanos o envía mensaje de texto para cotizaciones rápidas, citas el mismo día y servicio en taller o a domicilio en todo DFW.",
    contact_phone_label: "Teléfono / Texto (Inglés y Español)",
    contact_shop_label: "Dirección del Taller (Servicio en Taller y Móvil en DFW)",
    contact_shop_value: BUSINESS_CONFIG.shopAddressES,
    contact_hours_label: "Horario de Atención",
    contact_hours_value: "Lun – Vie: 9:00 AM – 6:00 PM | Sáb: Agendar Cita",
    footer_desc: "Reemplazo profesional de parabrisas, reparación de golpes de piedra y cambio de vidrios laterales y traseros en todo Dallas–Fort Worth Metroplex. Servicio en Taller y Móvil con Garantía de por Vida.",
    footer_services_title: "Nuestros Servicios",
    footer_contact_title: "Contacto Rápido",
    footer_area: "📍 11324 George Renfro Dr Suite I, Alvarado, TX 76009",
    footer_rights: "Todos los derechos reservados. Sirviendo a Alvarado y el Metroplex DFW.",
    sticky_call_btn: "Llamar Ahora: (469) 855-8328",
    sticky_quote_btn: "Cotizar Gratis"
  }
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.innerHTML = lang === "en" ? "🇪🇸 Español" : "🇺🇸 English";
  }

  const langBtnMobile = document.getElementById("langToggleMobile");
  if (langBtnMobile) {
    langBtnMobile.innerHTML = lang === "en" ? "🇪🇸 ES" : "🇺🇸 EN";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Language switcher (desktop & mobile)
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "es" : "en");
    });
  }

  const langBtnMobile = document.getElementById("langToggleMobile");
  if (langBtnMobile) {
    langBtnMobile.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "es" : "en");
    });
  }

  // Keep Navbar Fixed on Scroll (Desktop & Mobile)
  const navbar = document.getElementById("navbar");
  const topbar = document.querySelector(".topbar");
  function updateFixedNavbar() {
    if (!navbar) return;
    if (window.innerWidth <= 768) {
      navbar.classList.add("is-fixed");
      document.body.style.paddingTop = "";
      return;
    }
    const threshold = topbar ? topbar.offsetHeight : 0;
    if (window.scrollY >= threshold) {
      navbar.classList.add("is-fixed");
      document.body.style.paddingTop = `${navbar.offsetHeight}px`;
    } else {
      navbar.classList.remove("is-fixed");
      document.body.style.paddingTop = "";
    }
  }
  window.addEventListener("scroll", updateFixedNavbar, { passive: true });
  window.addEventListener("resize", updateFixedNavbar);
  updateFixedNavbar();

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("active"));
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });

  // Quote Form Handler -> Sends to samkar70@gmail.com AND opens instant SMS to 469-855-8328
  const quoteForm = document.getElementById("glassQuoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const year = document.getElementById("vehicleYear").value.trim();
      const make = document.getElementById("vehicleMake").value.trim();
      const model = document.getElementById("vehicleModel").value.trim();
      const glass = document.getElementById("glassType").value;
      const mode = document.getElementById("serviceMode").value;
      const name = document.getElementById("customerName").value.trim();
      const phone = document.getElementById("customerPhone").value.trim();
      const city = document.getElementById("customerCity").value.trim();
      const notes = document.getElementById("customerNotes").value.trim();

      // 1. Send email notification in background to samkar70@gmail.com
      fetch(`https://formsubmit.co/ajax/${BUSINESS_CONFIG.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New BMS Auto Glass Quote: ${year} ${make} ${model} (${name})`,
          Name: name,
          Phone: phone,
          Vehicle: `${year} ${make} ${model}`,
          Glass_Needed: glass,
          Service_Preference: mode,
          Location_DFW: city,
          Notes: notes || "N/A"
        })
      }).catch(() => {});

      // 2. Open direct SMS to (469) 855-8328 on the customer's phone
      const messageLines = [
        `Hello BMS Auto Glass! I would like a free quote:`,
        `• Vehicle: ${year} ${make} ${model}`,
        `• Glass: ${glass}`,
        `• Service: ${mode}`,
        `• Location: ${city}`,
        `• Name: ${name} (${phone})`
      ];

      if (notes) {
        messageLines.push(`• Notes: ${notes}`);
      }

      const encodedMsg = encodeURIComponent(messageLines.join("\n"));
      window.location.href = `sms:+${BUSINESS_CONFIG.phoneRaw}?&body=${encodedMsg}`;
    });
  }
});
