
const TRANSLATIONS = {
  en: {
    nav: { home: 'Home', tours: 'Tours', about: 'About', contact: 'Contact', bookNow: 'Book Now' },
    hero: {
      eyebrow: 'Costa Blanca · Spain · Max 4 Guests',
      title1: 'Discover the',
      titleItalic: 'Soul',
      title2: 'of',
      title3: 'Costa Blanca',
      subtitle: 'Intimate small-group luxury experiences. Private car. Local expertise. Wine, tapas and memories — all included.',
      exploreBtn: 'Explore Experiences',
      storyBtn: 'Our Story',
      scroll: 'Scroll',
    },
    stats: { tours: 'Unique Experiences', guests: 'Max Guests Per Tour', inclusive: 'All-Inclusive', rating: 'Rated by Guests' },
    why: {
      eyebrow: 'The Costa Blanca Tours Difference',
      title: 'Why discerning travellers choose us',
      items: [
        { title: 'Maximum 4 Guests', desc: "Every tour is strictly limited to 4 guests. You'll never feel like a number — only a valued guest with personal attention." },
        { title: 'Private Car Always', desc: 'Door-to-door comfort in a private vehicle. No coaches, no waiting for others. Your schedule, your pace.' },
        { title: 'Truly All-Inclusive', desc: 'Wine, beer, tapas, gourmet meals, entry fees — all covered. No awkward bill moments. Pure enjoyment.' },
        { title: 'Born & Raised Locally', desc: 'Our guides are Costa Blanca natives. Hidden gems, family stories, secret spots — this is lived knowledge.' },
      ],
    },
    featured: {
      eyebrow: 'Signature Experiences',
      title: 'Featured Journeys',
      viewAll: 'View All 10 Tours →',
    },
    cta: {
      eyebrow: 'Ready to explore?',
      title: 'Your perfect Mediterranean experience awaits',
      subtitle: 'From snow-capped Sierra Nevada to Ibiza\'s turquoise coves — every journey is crafted around you.',
      reserveBtn: 'Reserve Your Experience',
      questionBtn: 'Ask a Question',
    },
    footer: {
      desc: 'Intimate luxury experiences on the Costa Blanca. Maximum 4 guests. Local expertise. Unforgettable memories.',
      experiences: 'Experiences',
      quickLinks: 'Quick Links',
      contact: 'Get in Touch',
      rights: '© 2026 Costa Blanca Tours. All rights reserved.',
    },
    tours: {
      eyebrow: 'All Experiences',
      title: 'Our Curated Journeys',
      subtitle: 'Each experience is strictly limited to 4 guests, fully all-inclusive with private car transport. No hidden costs — just pure discovery.',
      count1: 'experience', countN: 'experiences',
      from: 'From', perPerson: '/person',
      viewDetails: 'View Details →',
      filter: 'All',
    },
    detail: {
      backBtn: '← Back to Tours',
      duration: 'Duration', maxGuests: 'Max Guests', transport: 'Transport',
      aboutTitle: 'About the Experience',
      highlightsTitle: 'Tour Highlights',
      priceLabel: 'Price per person',
      allInclusive: 'All-inclusive · Max',
      included: ['Wine, beer & tapas included', 'Private car transport', 'Gourmet meals', 'Expert local guide', 'No hidden costs'],
      reserveBtn: 'Reserve This Experience',
      questionBtn: 'Ask a Question',
      cancelNote: 'Free cancellation up to 48h before. Payment on the day.',
      otherTitle: 'Other Experiences',
    },
    about: {
      eyebrow: 'Our Story',
      heroTitle: 'Two passions. One destination.',
      heroItalic: 'Endless discoveries.',
      heroSubtitle: 'Costa Blanca Tours was born from a simple belief: the best travel experiences happen when you slow down, connect deeply, and explore with someone who truly knows the land.',
      philEyebrow: 'The Philosophy',
      philTitle: 'Small groups. Big moments.',
      phil1: 'We limit every tour to just 4 guests. Not because we have to — because we want to. Four is the sweet spot where everyone can ask questions, try everything, and feel like they\'re exploring with friends rather than following a flag.',
      phil2: 'You\'ll never be rushed. Never miss a moment. Never wonder if there\'s a better story just around the corner — because we already know, and we\'ll take you there.',
      phil3: 'Our all-inclusive approach means wine, beer, tapas, and gourmet meals are always part of the journey. No awkward bills. No hidden costs. Just the pure pleasure of the Costa Blanca.',
      valuesTitle: 'What sets us apart',
      values: [
        { title: 'Maximum 4 Guests', desc: 'Small groups create space for genuine conversations, personalised attention, and flexibility to adapt each tour to the group\'s interests.' },
        { title: 'Local Expertise', desc: 'Our guides were born and raised on the Costa Blanca. This isn\'t rehearsed knowledge — it\'s lived experience, passed down through generations.' },
        { title: 'Truly All-Inclusive', desc: 'We want you to taste everything, try everything, and never worry about the bill. Premium local products at no extra cost.' },
        { title: 'Authentic Connections', desc: 'Meet the winemaker who tends the vines, the chef who sources from the morning market. These connections transform a tour into a memory.' },
      ],
      ctaTitle: 'Join us on the Costa Blanca',
      ctaText: 'Whether you\'re a wine enthusiast, a food lover, or simply someone who appreciates beautiful landscapes and genuine hospitality — we\'d love to share our corner of the Mediterranean with you.',
      ctaBtn: 'Explore Experiences',
    },
    contact: {
      eyebrow: 'Get in Touch',
      title: 'Questions? We\'d love to hear from you.',
      subtitle: 'Whether you want to customise a tour, have dietary requirements, or simply want to know more — send us a message.',
      nameLabel: 'Full Name', namePlaceholder: 'Your name',
      emailLabel: 'Email Address', emailPlaceholder: 'you@email.com',
      tourLabel: 'Tour of Interest (optional)', tourPlaceholder: 'Select a tour...',
      messageLabel: 'Message', messagePlaceholder: 'Tell us about your trip, any questions, dietary requirements...',
      sendBtn: 'Send Message', sendingBtn: 'Sending...',
      successTitle: 'Message Sent!', successText: 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
      responseTitle: 'Response Time', responseText: 'We reply to all enquiries within 24 hours. For urgent bookings, call us directly.',
    },
    booking: {
      eyebrow: 'Reservations',
      title: 'Reserve Your Experience',
      subtitle: 'Secure your spot for an intimate, all-inclusive exploration of the Costa Blanca.',
      step1: 'Select Your Experience', step2: 'Your Details',
      tourLabel: 'Tour', tourPlaceholder: 'Choose an experience...',
      dateLabel: 'Preferred Date', guestsLabel: 'Number of Guests',
      nameLabel: 'Full Name', namePlaceholder: 'Your full name',
      emailLabel: 'Email Address', emailPlaceholder: 'you@email.com',
      phoneLabel: 'Phone Number', phonePlaceholder: '+34 600 000 000',
      notesLabel: 'Special Requests / Dietary Requirements', notesPlaceholder: 'Allergies, dietary needs, special occasions...',
      submitBtn: 'Complete Booking', processingBtn: 'Processing...',
      cancelNote: 'Free cancellation up to 48 hours before the tour. Payment on the day.',
      summaryTitle: 'Booking Summary', selectTour: 'Select a tour to see your summary',
      priceLabel: 'Price per person', totalLabel: 'Total',
      whyItems: ['Intimate small groups (max 4)', 'Expert local guides', 'Free cancellation up to 48h'],
      successTitle: 'Booking Confirmed!',
      successText: (name, email) => `Thank you, ${name}. We'll send confirmation details to ${email} shortly. We look forward to welcoming you on the Costa Blanca.`,
      refLabel: 'Booking Reference', tourLabel2: 'Tour', dateLabel2: 'Date', guestsLabel2: 'Guests', totalLabel2: 'Total',
      exploreBtn: 'Explore More Tours',
    },
  },

  no: {
    nav: { home: 'Hjem', tours: 'Turer', about: 'Om oss', contact: 'Kontakt', bookNow: 'Bestill nå' },
    hero: {
      eyebrow: 'Costa Blanca · Spania · Maks 4 gjester',
      title1: 'Oppdag', titleItalic: 'sjelen', title2: 'til', title3: 'Costa Blanca',
      subtitle: 'Intime luksusopplevelser i små grupper. Privat bil. Lokal ekspertise. Vin, tapas og minner — alt inkludert.',
      exploreBtn: 'Utforsk opplevelser', storyBtn: 'Vår historie', scroll: 'Scroll',
    },
    stats: { tours: 'Unike opplevelser', guests: 'Maks gjester per tur', inclusive: 'Alt inkludert', rating: 'Vurdert av gjester' },
    why: {
      eyebrow: 'Costa Blanca Tours — forskjellen',
      title: 'Hvorfor kresne reisende velger oss',
      items: [
        { title: 'Maks 4 gjester', desc: 'Hver tur er strengt begrenset til 4 gjester. Du vil aldri føle deg som et nummer — bare som en verdsatt gjest med personlig oppmerksomhet.' },
        { title: 'Alltid privat bil', desc: 'Dør-til-dør komfort i et privat kjøretøy. Ingen busser, ikke vente på andre. Din timeplan, ditt tempo.' },
        { title: 'Virkelig alt inkludert', desc: 'Vin, øl, tapas, gourmetmåltider, inngangsbilletter — alt dekket. Ingen pinlige regningsøyeblikk. Ren nytelse.' },
        { title: 'Født og oppvokst lokalt', desc: 'Våre guider er innfødte fra Costa Blanca. Skjulte perler, familiehistorier, hemmelige steder — dette er levd kunnskap.' },
      ],
    },
    featured: { eyebrow: 'Signaturopplevelser', title: 'Utvalgte reiser', viewAll: 'Se alle 10 turer →' },
    cta: {
      eyebrow: 'Klar til å utforske?',
      title: 'Din perfekte middelhavsopplevelse venter',
      subtitle: 'Fra snødekte Sierra Nevada til Ibizas turkisblå viker — hver reise er skreddersydd for deg.',
      reserveBtn: 'Reserver din opplevelse', questionBtn: 'Still et spørsmål',
    },
    footer: { desc: 'Intime luksusopplevelser på Costa Blanca. Maks 4 gjester. Lokal ekspertise. Uforglemmelige minner.', experiences: 'Opplevelser', quickLinks: 'Hurtiglenker', contact: 'Ta kontakt', rights: '© 2026 Costa Blanca Tours. Med enerett.' },
    tours: { eyebrow: 'Alle opplevelser', title: 'Våre utvalgte reiser', subtitle: 'Hver opplevelse er strengt begrenset til 4 gjester, fullt alt-inkludert med privat biltransport.', count1: 'opplevelse', countN: 'opplevelser', from: 'Fra', perPerson: '/person', viewDetails: 'Se detaljer →', filter: 'Alle' },
    detail: { backBtn: '← Tilbake til turer', duration: 'Varighet', maxGuests: 'Maks gjester', transport: 'Transport', aboutTitle: 'Om opplevelsen', highlightsTitle: 'Høydepunkter', priceLabel: 'Pris per person', allInclusive: 'Alt inkludert · Maks', included: ['Vin, øl og tapas inkludert', 'Privat biltransport', 'Gourmetmåltider', 'Ekspert lokal guide', 'Ingen skjulte kostnader'], reserveBtn: 'Reserver denne opplevelsen', questionBtn: 'Still et spørsmål', cancelNote: 'Gratis avbestilling inntil 48t før. Betaling på turdagen.', otherTitle: 'Andre opplevelser' },
    about: { eyebrow: 'Vår historie', heroTitle: 'To lidenskaper. Ett reisemål.', heroItalic: 'Uendelige oppdagelser.', heroSubtitle: 'Costa Blanca Tours ble skapt av en enkel overbevisning: de beste reiseopplevelsene skjer når du senker tempoet, kobler deg til, og utforsker med noen som virkelig kjenner landet.', philEyebrow: 'Filosofien', philTitle: 'Små grupper. Store øyeblikk.', phil1: 'Vi begrenser hver tur til kun 4 gjester. Ikke fordi vi må — men fordi vi vil. Fire er det perfekte antallet der alle kan stille spørsmål, prøve alt og føle at de utforsker med venner.', phil2: 'Du vil aldri bli stresset. Aldri gå glipp av et øyeblikk. Aldri lure på om det er en bedre historie rett rundt hjørnet — for vi vet allerede, og tar deg dit.', phil3: 'Alt-inkludert betyr at vin, øl, tapas og gourmetmåltider alltid er en del av reisen. Ingen pinlige regninger. Ingen skjulte kostnader.', valuesTitle: 'Det som skiller oss', values: [{ title: 'Maks 4 gjester', desc: 'Små grupper gir rom for ekte samtaler, personlig oppmerksomhet og fleksibilitet til å tilpasse turen.' }, { title: 'Lokal ekspertise', desc: 'Våre guider er født og oppvokst på Costa Blanca. Dette er levd kunnskap, ikke innøvde manuskripter.' }, { title: 'Virkelig alt inkludert', desc: 'Vi vil at du skal smake alt, prøve alt og aldri bekymre deg for regningen. Premium lokale produkter uten ekstra kostnad.' }, { title: 'Autentiske forbindelser', desc: 'Møt vinprodusenten som steller vinstokkene, kokken som handler på morgensmarkedet. Disse forbindelsene forvandler en tur til et minne.' }], ctaTitle: 'Bli med oss på Costa Blanca', ctaText: 'Enten du er vinentusiast, matelsker eller bare en person som setter pris på vakker natur og ekte gjestfrihet — vi vil gjerne dele vår del av Middelhavet med deg.', ctaBtn: 'Utforsk opplevelser' },
    contact: { eyebrow: 'Ta kontakt', title: 'Spørsmål? Vi hører gjerne fra deg.', subtitle: 'Enten du vil tilpasse en tur, har diettbehov eller bare vil vite mer — send oss en melding.', nameLabel: 'Fullt navn', namePlaceholder: 'Ditt navn', emailLabel: 'E-postadresse', emailPlaceholder: 'du@epost.no', tourLabel: 'Aktuell tur (valgfritt)', tourPlaceholder: 'Velg en tur...', messageLabel: 'Melding', messagePlaceholder: 'Fortell om turen din, spørsmål, diettbehov...', sendBtn: 'Send melding', sendingBtn: 'Sender...', successTitle: 'Melding sendt!', successText: 'Takk for at du tok kontakt. Vi svarer innen 24 timer.', responseTitle: 'Svartid', responseText: 'Vi svarer på alle henvendelser innen 24 timer. For haster, ring oss direkte.' },
    booking: { eyebrow: 'Reservasjoner', title: 'Reserver din opplevelse', subtitle: 'Sikre plassen din for en intim, alt-inkludert utforskning av Costa Blanca.', step1: 'Velg opplevelse', step2: 'Dine detaljer', tourLabel: 'Tur', tourPlaceholder: 'Velg en opplevelse...', dateLabel: 'Ønsket dato', guestsLabel: 'Antall gjester', nameLabel: 'Fullt navn', namePlaceholder: 'Ditt fulle navn', emailLabel: 'E-postadresse', emailPlaceholder: 'du@epost.no', phoneLabel: 'Telefonnummer', phonePlaceholder: '+47 900 00 000', notesLabel: 'Spesielle ønsker / Diettbehov', notesPlaceholder: 'Allergier, diettbehov, spesielle anledninger...', submitBtn: 'Fullfør bestilling', processingBtn: 'Behandler...', cancelNote: 'Gratis avbestilling inntil 48 timer før turen. Betaling på turdagen.', summaryTitle: 'Bestillingssammendrag', selectTour: 'Velg en tur for å se sammendrag', priceLabel: 'Pris per person', totalLabel: 'Totalt', whyItems: ['Intime små grupper (maks 4)', 'Ekspert lokale guider', 'Gratis avbestilling inntil 48t'], successTitle: 'Bestilling bekreftet!', successText: (n,e) => `Takk, ${n}. Vi sender bekreftelse til ${e} snart. Vi gleder oss til å ønske deg velkommen!`, refLabel: 'Referanse', tourLabel2: 'Tur', dateLabel2: 'Dato', guestsLabel2: 'Gjester', totalLabel2: 'Totalt', exploreBtn: 'Utforsk flere turer' },
  },

  es: {
    nav: { home: 'Inicio', tours: 'Tours', about: 'Nosotros', contact: 'Contacto', bookNow: 'Reservar' },
    hero: { eyebrow: 'Costa Blanca · España · Máx. 4 personas', title1: 'Descubre el', titleItalic: 'alma', title2: 'de la', title3: 'Costa Blanca', subtitle: 'Experiencias íntimas de lujo en grupos pequeños. Coche privado. Experiencia local. Vino, tapas y recuerdos — todo incluido.', exploreBtn: 'Explorar experiencias', storyBtn: 'Nuestra historia', scroll: 'Desplazar' },
    stats: { tours: 'Experiencias únicas', guests: 'Máx. personas por tour', inclusive: 'Todo incluido', rating: 'Valorado por clientes' },
    why: { eyebrow: 'La diferencia Costa Blanca Tours', title: 'Por qué los viajeros exigentes nos eligen', items: [{ title: 'Máximo 4 personas', desc: 'Cada tour está estrictamente limitado a 4 personas. Nunca te sentirás como un número — solo como un huésped apreciado.' }, { title: 'Siempre coche privado', desc: 'Comodidad puerta a puerta en vehículo privado. Sin autobuses, sin esperar a otros. Tu horario, tu ritmo.' }, { title: 'Verdaderamente todo incluido', desc: 'Vino, cerveza, tapas, comidas gourmet, entradas — todo cubierto. Sin momentos incómodos de factura.' }, { title: 'Nacidos y criados localmente', desc: 'Nuestros guías son nativos de la Costa Blanca. Joyas escondidas, historias familiares, lugares secretos — conocimiento vivido.' }] },
    featured: { eyebrow: 'Experiencias exclusivas', title: 'Viajes destacados', viewAll: 'Ver todos los 10 tours →' },
    cta: { eyebrow: '¿Listo para explorar?', title: 'Tu experiencia mediterránea perfecta te espera', subtitle: 'Desde Sierra Nevada hasta las calas turquesas de Ibiza — cada viaje está hecho para ti.', reserveBtn: 'Reserva tu experiencia', questionBtn: 'Hacer una pregunta' },
    footer: { desc: 'Experiencias íntimas de lujo en la Costa Blanca.', experiences: 'Experiencias', quickLinks: 'Accesos rápidos', contact: 'Contacto', rights: '© 2026 Costa Blanca Tours. Todos los derechos reservados.' },
    tours: { eyebrow: 'Todas las experiencias', title: 'Nuestros viajes seleccionados', subtitle: 'Cada experiencia está limitada a 4 personas, totalmente todo incluido con transporte en coche privado.', count1: 'experiencia', countN: 'experiencias', from: 'Desde', perPerson: '/persona', viewDetails: 'Ver detalles →', filter: 'Todo' },
    detail: { backBtn: '← Volver a tours', duration: 'Duración', maxGuests: 'Máx. personas', transport: 'Transporte', aboutTitle: 'Sobre la experiencia', highlightsTitle: 'Aspectos destacados', priceLabel: 'Precio por persona', allInclusive: 'Todo incluido · Máx.', included: ['Vino, cerveza y tapas incluidos', 'Transporte en coche privado', 'Comidas gourmet', 'Guía local experto', 'Sin costes ocultos'], reserveBtn: 'Reservar esta experiencia', questionBtn: 'Hacer una pregunta', cancelNote: 'Cancelación gratuita hasta 48h antes. Pago el día del tour.', otherTitle: 'Otras experiencias' },
    about: { eyebrow: 'Nuestra historia', heroTitle: 'Dos pasiones. Un destino.', heroItalic: 'Descubrimientos infinitos.', heroSubtitle: 'Costa Blanca Tours nació de una creencia simple: las mejores experiencias de viaje ocurren cuando desaceleran, conectan profundamente y exploran con alguien que verdaderamente conoce la tierra.', philEyebrow: 'La filosofía', philTitle: 'Grupos pequeños. Grandes momentos.', phil1: 'Limitamos cada tour a solo 4 huéspedes. No porque tengamos que hacerlo — sino porque queremos. Cuatro es el punto ideal donde todos pueden hacer preguntas, probar todo y sentir que exploran con amigos.', phil2: 'Nunca te apresurarán. Nunca perderás un momento. Nunca te preguntarás si hay una historia mejor a la vuelta de la esquina.', phil3: 'Nuestro enfoque todo incluido significa que el vino, la cerveza, las tapas y las comidas gourmet siempre forman parte del viaje. Sin facturas incómodas. Sin costes ocultos.', valuesTitle: 'Lo que nos diferencia', values: [{ title: 'Máximo 4 personas', desc: 'Los grupos pequeños crean espacio para conversaciones genuinas y atención personalizada.' }, { title: 'Experiencia local', desc: 'Nuestros guías nacieron y crecieron en la Costa Blanca. No es conocimiento ensayado — es experiencia vivida.' }, { title: 'Verdaderamente todo incluido', desc: 'Queremos que pruebes todo y nunca te preocupes por la factura. Productos locales premium sin coste adicional.' }, { title: 'Conexiones auténticas', desc: 'Conoce al viticultor, al chef que compra en el mercado. Estas conexiones transforman un tour en un recuerdo.' }], ctaTitle: 'Únete a nosotros en la Costa Blanca', ctaText: 'Ya seas un entusiasta del vino, un amante de la gastronomía o simplemente alguien que aprecia los paisajes y la hospitalidad genuina — nos encantaría compartir nuestro rincón del Mediterráneo contigo.', ctaBtn: 'Explorar experiencias' },
    contact: { eyebrow: 'Contacto', title: '¿Preguntas? Nos encantaría saber de ti.', subtitle: 'Si quieres personalizar un tour, tienes requisitos dietéticos o simplemente quieres saber más — envíanos un mensaje.', nameLabel: 'Nombre completo', namePlaceholder: 'Tu nombre', emailLabel: 'Correo electrónico', emailPlaceholder: 'tu@correo.com', tourLabel: 'Tour de interés (opcional)', tourPlaceholder: 'Selecciona un tour...', messageLabel: 'Mensaje', messagePlaceholder: 'Cuéntanos sobre tu viaje, preguntas, necesidades dietéticas...', sendBtn: 'Enviar mensaje', sendingBtn: 'Enviando...', successTitle: '¡Mensaje enviado!', successText: 'Gracias por contactarnos. Te responderemos en 24 horas.', responseTitle: 'Tiempo de respuesta', responseText: 'Respondemos a todas las consultas en 24 horas. Para reservas urgentes, llámanos directamente.' },
    booking: { eyebrow: 'Reservas', title: 'Reserva tu experiencia', subtitle: 'Asegura tu lugar para una exploración íntima y todo incluido de la Costa Blanca.', step1: 'Selecciona tu experiencia', step2: 'Tus datos', tourLabel: 'Tour', tourPlaceholder: 'Elige una experiencia...', dateLabel: 'Fecha preferida', guestsLabel: 'Número de personas', nameLabel: 'Nombre completo', namePlaceholder: 'Tu nombre completo', emailLabel: 'Correo electrónico', emailPlaceholder: 'tu@correo.com', phoneLabel: 'Número de teléfono', phonePlaceholder: '+34 600 000 000', notesLabel: 'Solicitudes especiales / Requisitos dietéticos', notesPlaceholder: 'Alergias, necesidades dietéticas, ocasiones especiales...', submitBtn: 'Completar reserva', processingBtn: 'Procesando...', cancelNote: 'Cancelación gratuita hasta 48 horas antes del tour. Pago el día.', summaryTitle: 'Resumen de reserva', selectTour: 'Selecciona un tour para ver el resumen', priceLabel: 'Precio por persona', totalLabel: 'Total', whyItems: ['Grupos pequeños íntimos (máx. 4)', 'Guías locales expertos', 'Cancelación gratuita hasta 48h'], successTitle: '¡Reserva confirmada!', successText: (n,e) => `Gracias, ${n}. Enviaremos los detalles de confirmación a ${e} en breve.`, refLabel: 'Referencia', tourLabel2: 'Tour', dateLabel2: 'Fecha', guestsLabel2: 'Personas', totalLabel2: 'Total', exploreBtn: 'Explorar más tours' },
  },

  fr: {
    nav: { home: 'Accueil', tours: 'Circuits', about: 'À propos', contact: 'Contact', bookNow: 'Réserver' },
    hero: { eyebrow: 'Costa Blanca · Espagne · Max 4 personnes', title1: 'Découvrez l\'', titleItalic: 'âme', title2: 'de la', title3: 'Costa Blanca', subtitle: 'Expériences de luxe intimes en petits groupes. Voiture privée. Expertise locale. Vin, tapas et souvenirs — tout compris.', exploreBtn: 'Explorer les expériences', storyBtn: 'Notre histoire', scroll: 'Défiler' },
    stats: { tours: 'Expériences uniques', guests: 'Max personnes par circuit', inclusive: 'Tout compris', rating: 'Évalué par les clients' },
    why: { eyebrow: 'La différence Costa Blanca Tours', title: 'Pourquoi les voyageurs exigeants nous choisissent', items: [{ title: 'Maximum 4 personnes', desc: 'Chaque circuit est strictement limité à 4 personnes. Vous ne vous sentirez jamais comme un numéro — seulement comme un hôte apprécié.' }, { title: 'Toujours en voiture privée', desc: 'Confort de porte à porte en véhicule privé. Pas de bus, pas d\'attente. Votre programme, votre rythme.' }, { title: 'Vraiment tout compris', desc: 'Vin, bière, tapas, repas gastronomiques, entrées — tout couvert. Aucun moment gênant de facture.' }, { title: 'Natifs de la région', desc: 'Nos guides sont natifs de la Costa Blanca. Joyaux cachés, histoires familiales, endroits secrets — un savoir vécu.' }] },
    featured: { eyebrow: 'Expériences exclusives', title: 'Circuits à la une', viewAll: 'Voir les 10 circuits →' },
    cta: { eyebrow: 'Prêt à explorer ?', title: 'Votre expérience méditerranéenne parfaite vous attend', subtitle: 'De la Sierra Nevada enneigée aux criques turquoise d\'Ibiza — chaque voyage est fait pour vous.', reserveBtn: 'Réservez votre expérience', questionBtn: 'Poser une question' },
    footer: { desc: 'Expériences de luxe intimes sur la Costa Blanca.', experiences: 'Expériences', quickLinks: 'Liens rapides', contact: 'Contactez-nous', rights: '© 2026 Costa Blanca Tours. Tous droits réservés.' },
    tours: { eyebrow: 'Toutes les expériences', title: 'Nos circuits sélectionnés', subtitle: 'Chaque expérience est limitée à 4 personnes, tout compris avec transport en voiture privée.', count1: 'expérience', countN: 'expériences', from: 'À partir de', perPerson: '/personne', viewDetails: 'Voir les détails →', filter: 'Tous' },
    detail: { backBtn: '← Retour aux circuits', duration: 'Durée', maxGuests: 'Max personnes', transport: 'Transport', aboutTitle: 'À propos de l\'expérience', highlightsTitle: 'Points forts', priceLabel: 'Prix par personne', allInclusive: 'Tout compris · Max', included: ['Vin, bière & tapas inclus', 'Transport en voiture privée', 'Repas gastronomiques', 'Guide local expert', 'Aucun frais caché'], reserveBtn: 'Réserver cette expérience', questionBtn: 'Poser une question', cancelNote: 'Annulation gratuite jusqu\'à 48h avant. Paiement le jour même.', otherTitle: 'Autres expériences' },
    about: { eyebrow: 'Notre histoire', heroTitle: 'Deux passions. Une destination.', heroItalic: 'Des découvertes infinies.', heroSubtitle: 'Costa Blanca Tours est né d\'une conviction simple : les meilleures expériences de voyage se produisent quand on ralentit, se connecte profondément et explore avec quelqu\'un qui connaît vraiment le territoire.', philEyebrow: 'La philosophie', philTitle: 'Petits groupes. Grands moments.', phil1: 'Nous limitons chaque circuit à seulement 4 personnes. Non pas parce que nous devons — mais parce que nous le voulons. Quatre est le nombre idéal où chacun peut poser des questions et tout essayer.', phil2: 'Vous ne serez jamais pressé. Vous ne manquerez jamais un instant. Vous ne vous demanderez jamais s\'il y a une meilleure histoire au coin de la rue — parce que nous le savons déjà.', phil3: 'Notre approche tout compris signifie que le vin, la bière, les tapas et les repas gastronomiques font toujours partie du voyage. Pas de factures gênantes. Pas de frais cachés.', valuesTitle: 'Ce qui nous distingue', values: [{ title: 'Maximum 4 personnes', desc: 'Les petits groupes créent de l\'espace pour des conversations authentiques et une attention personnalisée.' }, { title: 'Expertise locale', desc: 'Nos guides sont nés et ont grandi sur la Costa Blanca. Ce n\'est pas un savoir répété — c\'est une expérience vécue.' }, { title: 'Vraiment tout compris', desc: 'Nous voulons que vous goûtiez tout et ne vous inquiétiez jamais de la facture. Produits locaux premium sans frais supplémentaires.' }, { title: 'Connexions authentiques', desc: 'Rencontrez le vigneron, le chef qui achète au marché du matin. Ces connexions transforment un circuit en souvenir.' }], ctaTitle: 'Rejoignez-nous sur la Costa Blanca', ctaText: 'Que vous soyez amateur de vin, gastronome ou simplement quelqu\'un qui apprécie les beaux paysages et l\'hospitalité authentique — nous serions ravis de partager notre coin de Méditerranée avec vous.', ctaBtn: 'Explorer les expériences' },
    contact: { eyebrow: 'Contact', title: 'Des questions ? Nous serions ravis de vous entendre.', subtitle: 'Que vous souhaitiez personnaliser un circuit, ayez des besoins diététiques ou vouliez simplement en savoir plus — envoyez-nous un message.', nameLabel: 'Nom complet', namePlaceholder: 'Votre nom', emailLabel: 'Adresse e-mail', emailPlaceholder: 'vous@email.fr', tourLabel: 'Circuit d\'intérêt (optionnel)', tourPlaceholder: 'Sélectionnez un circuit...', messageLabel: 'Message', messagePlaceholder: 'Parlez-nous de votre voyage, questions, besoins diététiques...', sendBtn: 'Envoyer le message', sendingBtn: 'Envoi en cours...', successTitle: 'Message envoyé !', successText: 'Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.', responseTitle: 'Délai de réponse', responseText: 'Nous répondons à toutes les demandes dans les 24 heures. Pour les réservations urgentes, appelez-nous directement.' },
    booking: { eyebrow: 'Réservations', title: 'Réservez votre expérience', subtitle: 'Assurez votre place pour une exploration intime et tout compris de la Costa Blanca.', step1: 'Choisissez votre expérience', step2: 'Vos coordonnées', tourLabel: 'Circuit', tourPlaceholder: 'Choisissez une expérience...', dateLabel: 'Date souhaitée', guestsLabel: 'Nombre de personnes', nameLabel: 'Nom complet', namePlaceholder: 'Votre nom complet', emailLabel: 'Adresse e-mail', emailPlaceholder: 'vous@email.fr', phoneLabel: 'Numéro de téléphone', phonePlaceholder: '+33 6 00 00 00 00', notesLabel: 'Demandes spéciales / Besoins diététiques', notesPlaceholder: 'Allergies, besoins diététiques, occasions spéciales...', submitBtn: 'Finaliser la réservation', processingBtn: 'Traitement...', cancelNote: 'Annulation gratuite jusqu\'à 48 heures avant le circuit. Paiement le jour J.', summaryTitle: 'Récapitulatif', selectTour: 'Sélectionnez un circuit pour voir le récapitulatif', priceLabel: 'Prix par personne', totalLabel: 'Total', whyItems: ['Petits groupes intimes (max 4)', 'Guides locaux experts', 'Annulation gratuite jusqu\'à 48h'], successTitle: 'Réservation confirmée !', successText: (n,e) => `Merci, ${n}. Nous vous enverrons les détails de confirmation à ${e} sous peu.`, refLabel: 'Référence', tourLabel2: 'Circuit', dateLabel2: 'Date', guestsLabel2: 'Personnes', totalLabel2: 'Total', exploreBtn: 'Explorer d\'autres circuits' },
  },

  de: {
    nav: { home: 'Startseite', tours: 'Touren', about: 'Über uns', contact: 'Kontakt', bookNow: 'Buchen' },
    hero: { eyebrow: 'Costa Blanca · Spanien · Max. 4 Gäste', title1: 'Entdecken Sie die', titleItalic: 'Seele', title2: 'der', title3: 'Costa Blanca', subtitle: 'Intime Luxuserlebnisse in kleinen Gruppen. Privatwagen. Lokale Expertise. Wein, Tapas und Erinnerungen — alles inklusive.', exploreBtn: 'Erlebnisse entdecken', storyBtn: 'Unsere Geschichte', scroll: 'Scrollen' },
    stats: { tours: 'Einzigartige Erlebnisse', guests: 'Max. Gäste pro Tour', inclusive: 'Alles inklusive', rating: 'Von Gästen bewertet' },
    why: { eyebrow: 'Der Costa Blanca Tours Unterschied', title: 'Warum anspruchsvolle Reisende uns wählen', items: [{ title: 'Maximal 4 Gäste', desc: 'Jede Tour ist streng auf 4 Gäste begrenzt. Sie werden sich nie wie eine Nummer fühlen — nur wie ein geschätzter Gast.' }, { title: 'Immer Privatwagen', desc: 'Tür-zu-Tür-Komfort im Privatfahrzeug. Keine Busse, kein Warten auf andere. Ihr Zeitplan, Ihr Tempo.' }, { title: 'Wirklich alles inklusive', desc: 'Wein, Bier, Tapas, Gourmetmahlzeiten, Eintrittsgelder — alles abgedeckt. Keine unangenehmen Rechnungsmomente.' }, { title: 'Einheimische Guides', desc: 'Unsere Guides sind in der Costa Blanca aufgewachsen. Versteckte Schätze, Familiengeschichten, Geheimtipps — gelebtes Wissen.' }] },
    featured: { eyebrow: 'Exklusive Erlebnisse', title: 'Ausgewählte Reisen', viewAll: 'Alle 10 Touren anzeigen →' },
    cta: { eyebrow: 'Bereit zu erkunden?', title: 'Ihr perfektes Mittelmeer-Erlebnis wartet', subtitle: 'Von der verschneiten Sierra Nevada bis zu Ibizas türkisblauen Buchten — jede Reise ist für Sie gestaltet.', reserveBtn: 'Erlebnis reservieren', questionBtn: 'Frage stellen' },
    footer: { desc: 'Intime Luxuserlebnisse an der Costa Blanca.', experiences: 'Erlebnisse', quickLinks: 'Schnelllinks', contact: 'Kontakt', rights: '© 2026 Costa Blanca Tours. Alle Rechte vorbehalten.' },
    tours: { eyebrow: 'Alle Erlebnisse', title: 'Unsere ausgewählten Reisen', subtitle: 'Jedes Erlebnis ist auf 4 Gäste begrenzt, vollständig alles inklusive mit Privatwagentransport.', count1: 'Erlebnis', countN: 'Erlebnisse', from: 'Ab', perPerson: '/Person', viewDetails: 'Details anzeigen →', filter: 'Alle' },
    detail: { backBtn: '← Zurück zu Touren', duration: 'Dauer', maxGuests: 'Max. Gäste', transport: 'Transport', aboutTitle: 'Über das Erlebnis', highlightsTitle: 'Tour-Highlights', priceLabel: 'Preis pro Person', allInclusive: 'Alles inkl. · Max.', included: ['Wein, Bier & Tapas inklusive', 'Privatwagentransport', 'Gourmetmahlzeiten', 'Lokaler Expertenguide', 'Keine versteckten Kosten'], reserveBtn: 'Dieses Erlebnis reservieren', questionBtn: 'Frage stellen', cancelNote: 'Kostenlose Stornierung bis 48h vorher. Zahlung am Tourentag.', otherTitle: 'Weitere Erlebnisse' },
    about: { eyebrow: 'Unsere Geschichte', heroTitle: 'Zwei Leidenschaften. Ein Ziel.', heroItalic: 'Unendliche Entdeckungen.', heroSubtitle: 'Costa Blanca Tours wurde aus einer einfachen Überzeugung geboren: Die besten Reiseerlebnisse entstehen, wenn man entschleunigt, tief verbindet und mit jemandem erkundet, der das Land wirklich kennt.', philEyebrow: 'Die Philosophie', philTitle: 'Kleine Gruppen. Große Momente.', phil1: 'Wir begrenzen jede Tour auf nur 4 Gäste. Nicht weil wir müssen — sondern weil wir wollen. Vier ist die ideale Zahl, bei der jeder Fragen stellen und alles ausprobieren kann.', phil2: 'Sie werden nie gehetzt. Nie einen Moment verpassen. Nie fragen, ob eine bessere Geschichte um die Ecke wartet.', phil3: 'Unser alles-inklusive-Ansatz bedeutet, dass Wein, Bier, Tapas und Gourmetmahlzeiten immer Teil der Reise sind. Keine unangenehmen Rechnungen. Keine versteckten Kosten.', valuesTitle: 'Was uns auszeichnet', values: [{ title: 'Maximal 4 Gäste', desc: 'Kleine Gruppen schaffen Raum für echte Gespräche und persönliche Aufmerksamkeit.' }, { title: 'Lokale Expertise', desc: 'Unsere Guides sind in der Costa Blanca aufgewachsen. Das ist kein einstudiertes Wissen — es ist gelebte Erfahrung.' }, { title: 'Wirklich alles inklusive', desc: 'Wir möchten, dass Sie alles probieren und sich nie um die Rechnung sorgen müssen.' }, { title: 'Authentische Verbindungen', desc: 'Treffen Sie den Winzer, den Koch, der auf dem Morgenmarkt einkauft. Diese Verbindungen verwandeln eine Tour in eine Erinnerung.' }], ctaTitle: 'Begleiten Sie uns an der Costa Blanca', ctaText: 'Ob Weinliebhaber, Feinschmecker oder einfach jemand, der schöne Landschaften schätzt — wir teilen unsere Ecke des Mittelmeers gerne mit Ihnen.', ctaBtn: 'Erlebnisse erkunden' },
    contact: { eyebrow: 'Kontakt', title: 'Fragen? Wir hören gerne von Ihnen.', subtitle: 'Ob Sie eine Tour anpassen möchten, diätetische Anforderungen haben oder einfach mehr wissen möchten — schicken Sie uns eine Nachricht.', nameLabel: 'Vollständiger Name', namePlaceholder: 'Ihr Name', emailLabel: 'E-Mail-Adresse', emailPlaceholder: 'sie@email.de', tourLabel: 'Tour von Interesse (optional)', tourPlaceholder: 'Tour auswählen...', messageLabel: 'Nachricht', messagePlaceholder: 'Erzählen Sie uns von Ihrer Reise, Fragen, Ernährungsbedürfnissen...', sendBtn: 'Nachricht senden', sendingBtn: 'Wird gesendet...', successTitle: 'Nachricht gesendet!', successText: 'Vielen Dank für Ihre Nachricht. Wir werden innerhalb von 24 Stunden antworten.', responseTitle: 'Reaktionszeit', responseText: 'Wir antworten auf alle Anfragen innerhalb von 24 Stunden. Für dringende Buchungen rufen Sie uns direkt an.' },
    booking: { eyebrow: 'Reservierungen', title: 'Erlebnis reservieren', subtitle: 'Sichern Sie sich Ihren Platz für eine intime, alles-inklusive Erkundung der Costa Blanca.', step1: 'Erlebnis wählen', step2: 'Ihre Daten', tourLabel: 'Tour', tourPlaceholder: 'Erlebnis auswählen...', dateLabel: 'Gewünschtes Datum', guestsLabel: 'Anzahl der Gäste', nameLabel: 'Vollständiger Name', namePlaceholder: 'Ihr vollständiger Name', emailLabel: 'E-Mail-Adresse', emailPlaceholder: 'sie@email.de', phoneLabel: 'Telefonnummer', phonePlaceholder: '+49 151 0000000', notesLabel: 'Besondere Wünsche / Ernährungsbedürfnisse', notesPlaceholder: 'Allergien, Ernährungsbedürfnisse, besondere Anlässe...', submitBtn: 'Buchung abschließen', processingBtn: 'Wird verarbeitet...', cancelNote: 'Kostenlose Stornierung bis 48 Stunden vorher. Zahlung am Tourentag.', summaryTitle: 'Buchungsübersicht', selectTour: 'Tour auswählen für Übersicht', priceLabel: 'Preis pro Person', totalLabel: 'Gesamt', whyItems: ['Intime kleine Gruppen (max. 4)', 'Erfahrene lokale Guides', 'Kostenlose Stornierung bis 48h'], successTitle: 'Buchung bestätigt!', successText: (n,e) => `Vielen Dank, ${n}. Wir senden die Buchungsdetails an ${e}.`, refLabel: 'Buchungsreferenz', tourLabel2: 'Tour', dateLabel2: 'Datum', guestsLabel2: 'Gäste', totalLabel2: 'Gesamt', exploreBtn: 'Weitere Touren entdecken' },
  },

  ru: {
    nav: { home: 'Главная', tours: 'Туры', about: 'О нас', contact: 'Контакты', bookNow: 'Забронировать' },
    hero: { eyebrow: 'Коста Бланка · Испания · Макс. 4 гостя', title1: 'Откройте', titleItalic: 'душу', title2: '', title3: 'Коста Бланки', subtitle: 'Интимный люкс-опыт в малых группах. Личный автомобиль. Местные эксперты. Вино, тапас и воспоминания — всё включено.', exploreBtn: 'Смотреть туры', storyBtn: 'Наша история', scroll: 'Листать' },
    stats: { tours: 'Уникальных туров', guests: 'Макс. гостей на тур', inclusive: 'Всё включено', rating: 'Оценка гостей' },
    why: { eyebrow: 'Отличие Costa Blanca Tours', title: 'Почему взыскательные путешественники выбирают нас', items: [{ title: 'Максимум 4 гостя', desc: 'Каждый тур строго ограничен 4 гостями. Вы никогда не почувствуете себя номером — только ценным гостем с личным вниманием.' }, { title: 'Всегда личный автомобиль', desc: 'Комфорт от двери до двери на личном автомобиле. Без автобусов, без ожидания других. Ваш график, ваш темп.' }, { title: 'По-настоящему всё включено', desc: 'Вино, пиво, тапас, гурмэ-обеды, входные билеты — всё оплачено. Никаких неловких моментов со счётом.' }, { title: 'Местные жители', desc: 'Наши гиды родились и выросли на Коста Бланке. Скрытые сокровища, семейные истории, секретные места — живые знания.' }] },
    featured: { eyebrow: 'Эксклюзивные впечатления', title: 'Избранные путешествия', viewAll: 'Все 10 туров →' },
    cta: { eyebrow: 'Готовы к путешествию?', title: 'Ваше идеальное средиземноморское приключение ждёт', subtitle: 'От заснеженной Сьерры-Невады до бирюзовых бухт Ибицы — каждое путешествие создано для вас.', reserveBtn: 'Забронировать', questionBtn: 'Задать вопрос' },
    footer: { desc: 'Интимный люкс-опыт на Коста Бланке. Макс. 4 гостя. Местные эксперты. Незабываемые воспоминания.', experiences: 'Туры', quickLinks: 'Быстрые ссылки', contact: 'Связь', rights: '© 2026 Costa Blanca Tours. Все права защищены.' },
    tours: { eyebrow: 'Все туры', title: 'Наши избранные маршруты', subtitle: 'Каждый тур строго ограничен 4 гостями, полностью всё включено с трансфером на личном автомобиле.', count1: 'тур', countN: 'туров', from: 'От', perPerson: '/чел.', viewDetails: 'Подробнее →', filter: 'Все' },
    detail: { backBtn: '← Назад к турам', duration: 'Продолжительность', maxGuests: 'Макс. гостей', transport: 'Транспорт', aboutTitle: 'Об этом туре', highlightsTitle: 'Особенности', priceLabel: 'Цена за человека', allInclusive: 'Всё включено · Макс.', included: ['Вино, пиво и тапас включены', 'Трансфер на личном авто', 'Гурмэ-питание', 'Местный гид-эксперт', 'Без скрытых платежей'], reserveBtn: 'Забронировать', questionBtn: 'Задать вопрос', cancelNote: 'Бесплатная отмена за 48 ч. Оплата в день тура.', otherTitle: 'Другие туры' },
    about: { eyebrow: 'Наша история', heroTitle: 'Две страсти. Одно направление.', heroItalic: 'Бесконечные открытия.', heroSubtitle: 'Costa Blanca Tours родился из простого убеждения: лучшие путешествия случаются, когда замедляешься, глубоко соединяешься и исследуешь с тем, кто по-настоящему знает эту землю.', philEyebrow: 'Философия', philTitle: 'Малые группы. Большие впечатления.', phil1: 'Мы ограничиваем каждый тур 4 гостями — не потому что обязаны, а потому что хотим. Четыре — идеальное число, при котором каждый может задать вопрос и попробовать всё.', phil2: 'Вас никогда не поторопят. Вы никогда не упустите момент. Вам не придётся думать, есть ли лучшая история за углом.', phil3: 'Наш принцип «всё включено» означает, что вино, пиво, тапас и гурмэ-обеды всегда входят в тур. Без неловких счётов. Без скрытых расходов.', valuesTitle: 'Что нас отличает', values: [{ title: 'Максимум 4 гостя', desc: 'Малые группы создают пространство для настоящих разговоров и индивидуального внимания.' }, { title: 'Местная экспертиза', desc: 'Наши гиды родились и выросли на Коста Бланке. Это не заученные знания — это жизненный опыт.' }, { title: 'По-настоящему всё включено', desc: 'Мы хотим, чтобы вы пробовали всё и никогда не беспокоились о счёте.' }, { title: 'Настоящие связи', desc: 'Познакомьтесь с виноделом, шефом с утреннего рынка. Эти связи превращают тур в воспоминание.' }], ctaTitle: 'Присоединяйтесь к нам на Коста Бланке', ctaText: 'Любите ли вы вино, гастрономию или просто цените красивые пейзажи — мы с радостью поделимся нашим уголком Средиземноморья.', ctaBtn: 'Смотреть туры' },
    contact: { eyebrow: 'Контакты', title: 'Вопросы? Мы рады помочь.', subtitle: 'Хотите настроить тур, есть диетические требования или просто хотите узнать больше — напишите нам.', nameLabel: 'Полное имя', namePlaceholder: 'Ваше имя', emailLabel: 'Email', emailPlaceholder: 'вы@email.ru', tourLabel: 'Интересующий тур (не обязательно)', tourPlaceholder: 'Выберите тур...', messageLabel: 'Сообщение', messagePlaceholder: 'Расскажите о поездке, вопросах, диетических требованиях...', sendBtn: 'Отправить', sendingBtn: 'Отправка...', successTitle: 'Сообщение отправлено!', successText: 'Спасибо за обращение. Мы ответим в течение 24 часов.', responseTitle: 'Время ответа', responseText: 'Мы отвечаем на все запросы в течение 24 часов. Для срочных бронирований звоните нам напрямую.' },
    booking: { eyebrow: 'Бронирование', title: 'Забронировать тур', subtitle: 'Обеспечьте себе место для интимного путешествия всё включено по Коста Бланке.', step1: 'Выберите тур', step2: 'Ваши данные', tourLabel: 'Тур', tourPlaceholder: 'Выберите тур...', dateLabel: 'Предпочтительная дата', guestsLabel: 'Количество гостей', nameLabel: 'Полное имя', namePlaceholder: 'Ваше полное имя', emailLabel: 'Email', emailPlaceholder: 'вы@email.ru', phoneLabel: 'Номер телефона', phonePlaceholder: '+7 900 000 00 00', notesLabel: 'Особые пожелания / Диета', notesPlaceholder: 'Аллергии, диетические требования, особые случаи...', submitBtn: 'Завершить бронирование', processingBtn: 'Обработка...', cancelNote: 'Бесплатная отмена за 48 часов. Оплата в день тура.', summaryTitle: 'Сводка бронирования', selectTour: 'Выберите тур для просмотра сводки', priceLabel: 'Цена за человека', totalLabel: 'Итого', whyItems: ['Малые группы (макс. 4)', 'Местные гиды-эксперты', 'Бесплатная отмена за 48 ч'], successTitle: 'Бронирование подтверждено!', successText: (n,e) => `Спасибо, ${n}. Мы отправим детали на ${e}.`, refLabel: 'Номер брони', tourLabel2: 'Тур', dateLabel2: 'Дата', guestsLabel2: 'Гостей', totalLabel2: 'Итого', exploreBtn: 'Другие туры' },
  },
};

const LANG_FLAGS = {
  en: { flag: '🇬🇧', label: 'EN' },
  no: { flag: '🇳🇴', label: 'NO' },
  es: { flag: '🇪🇸', label: 'ES' },
  fr: { flag: '🇫🇷', label: 'FR' },
  de: { flag: '🇩🇪', label: 'DE' },
  ru: { flag: '🇷🇺', label: 'RU' },
};

// Simple global language state using a mini event system
window.__lang = localStorage.getItem('cbt_lang') || 'no';
window.__langListeners = [];
window.__setLang = function(l) {
  window.__lang = l;
  localStorage.setItem('cbt_lang', l);
  window.__langListeners.forEach(fn => fn(l));
};

function useLang() {
  const [lang, setLang] = React.useState(window.__lang);
  React.useEffect(() => {
    const handler = (l) => setLang(l);
    window.__langListeners.push(handler);
    return () => { window.__langListeners = window.__langListeners.filter(fn => fn !== handler); };
  }, []);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return { lang, setLang: window.__setLang, t };
}
