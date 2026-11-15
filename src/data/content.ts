export type Language = 'es' | 'en';

export const content = {
  es: {
    nav: {
      title: "PROYECTO FAMILIAR VIDA",
      subtitle: "Arroyo Naranjo · La Habana",
      links: [
        { label: "El Proyecto", href: "#historia" },
        { label: "Documental", href: "#documental" },
        { label: "Pilares", href: "#pilares" },
        { label: "La Realidad", href: "#crisis" },
        { label: "Cómo Ayudar", href: "#ayuda" },
        { label: "Contacto", href: "#contacto" },
      ],
      cta: "Sumar Apoyo",
    },
    hero: {
      locationBadge: "Arroyo Naranjo, La Habana · Desde 2010",
      headline: "Sembrando vida y dignidad en tiempos de crisis",
      subhead:
        "En la periferia de La Habana, entre apagones diarios y escasez de combustible, Natalia Quintana y sus vecinas han creado un santuario comunitario de arte, permacultura y energía solar para los niños del barrio.",
      watchDocBtn: "Ver Documental (8 min)",
      exploreBtn: "Conocer los Pilares",
      stats: [
        { value: "2010", label: "Año de fundación comunitaria" },
        { value: "5", label: "Círculos de arte y permacultura" },
        { value: "100%", label: "Agricultura limpia sin químicos" },
        { value: "Solar", label: "Punto de recarga barrial en apagones" },
      ],
    },
    documentary: {
      label: "REPORTAJE CINEMATOGRÁFICO",
      title: "They Call It «Vida»: A Community Project Helping Kids in Cuba’s Crisis",
      byline: "Producido por Belly of the Beast Cuba · Dirigido por periodistas independientes en La Habana",
      synopsis:
        "Un recorrido íntimo por el reparto Vieja Linda en Arroyo Naranjo, mostrando cómo las familias cubanas resisten la asfixia económica con organización popular, fogones de leña, arte infantil y paneles solares solidarios.",
      quote:
        "«Vencer a un pueblo por hambre no es victoria. Yo quiero un país en paz, donde nuestros niños crezcan sin limitaciones y no tengan que ver a sus madres buscando leña para cocinar.»",
      speaker: "Natalia Caridad Quintana López",
      speakerRole: "Fundadora de Vida y Metróloga en Hospital Pediátrico Docente",
      watchOnYoutube: "Abrir en YouTube oficial",
    },
    crisis: {
      label: "EL CONTEXTO COTIDIANO",
      title: "La vida cotidiana bajo la crisis energética y económica",
      description:
        "Vivir en la periferia habanera exige un esfuerzo sobrehumano. Ante el colapso del sistema electroenergético y la falta de insumos, el proyecto Vida convierte la carencia en resistencia organizada.",
      challenges: [
        {
          title: "Apagones de hasta 18 Horas",
          problem: "Colapso del sistema electroenergético nacional que deja a las familias a oscuras, arruina los alimentos refrigerados e impide a los niños estudiar.",
          solution: "Paneles Solares Solidarios: la casa se convierte en la central de recarga comunitaria para laptops, celulares y linternas escolares.",
        },
        {
          title: "Cero Gas Doméstico para Cocinar",
          problem: "La falta de combustible licuado impide encender los fogones en los hogares, forzando la búsqueda desesperada de alternativas.",
          solution: "Caldosa Colectiva a Leña: las madres cocinan en el patio comunitario ollas compartidas para que ningún niño se quede sin alimento.",
        },
        {
          title: "Escasez Crítica de Fármacos",
          problem: "Las farmacias públicas carecen de antibióticos básicos, analgésicos, antipiréticos y tranquilizantes.",
          solution: "Farmacia Botánica Viva: cultivo intensivo de orégano (antibiótico natural), sábila, tilo y pasiflora para la salud preventiva del barrio.",
        },
        {
          title: "Aislamiento y Falta de Transporte",
          problem: "Arroyo Naranjo está distante de los teatros, museos y centros culturales del centro de La Habana.",
          solution: "Centro Cultural Barrial: círculos de artes plásticas, bordado, danza y el grupo de teatro infantil «La Palangana».",
        },
      ],
    },
    pillars: {
      label: "NUESTROS EJES DE TRABAJO",
      title: "Cuatro pilares para sostener a la comunidad",
      subtitle: "Una propuesta integral donde la agroecología, la educación, la soberanía energética y la medicina natural se entrelazan.",
      items: [
        {
          id: "infancia",
          number: "01",
          title: "Infancia, Arte y Espacio Seguro",
          tagline: "Círculos de interés y grupo de teatro «La Palangana»",
          description:
            "En medio de la incertidumbre económica, los niños necesitan un espacio donde jugar, expresarse y no sentir sobre sus hombros el peso del desespero. Impartimos talleres de artes plásticas, bordado tradicional, música, danza y expresión escénica.",
          details: [
            "Círculos de interés semanales en artes plásticas, manualidades y costura",
            "Compañía de teatro infantil «La Palangana» con puestas en escena comunitarias",
            "Acompañamiento escolar y apoyo psicológico a familias en vulnerabilidad",
            "Resguardo lúdico donde canalizar la creatividad y proteger la salud emocional",
          ],
          quote: "«El hecho de que los niños tengan un lugar donde se reúnen, donde socializan y expresan sus dones y talentos, ya cambia por completo la comunidad.»",
        },
        {
          id: "permacultura",
          number: "02",
          title: "Permacultura y Huerto Solidario",
          tagline: "Soberanía alimentaria limpia y reparto a los más vulnerables",
          description:
            "Lo que antes eran microvertederos de escombros y basura se convirtió en canteros productivos. Cultivamos tomates, ajíes, habichuelas, plátanos y frutales con métodos 100% orgánicos, enseñando a los niños la sabiduría de la tierra.",
          details: [
            "Erradicación de vertederos ilegales convertidos en suelos fértiles",
            "Enseñanza agroecológica: siembra a doble profundidad, abonos orgánicos y compostaje",
            "Entrega solidaria y gratuita de cosechas a ancianos solos sin familiares",
            "Aporte de vegetales frescos al Hogar Materno y escuelas de Arroyo Naranjo",
          ],
          quote: "«Acuérdense que las semillas se siembran según su tamaño: dos veces su tamaño, no más profunda. Tenemos la obligación moral de compartir con quienes no tienen tierra.»",
        },
        {
          id: "energia",
          number: "03",
          title: "Paneles Solidarios y Cocina Comunal",
          tagline: "Energía fotovoltaica en apagones masivos y cocina a leña",
          description:
            "Gracias a la solidaridad internacional, el proyecto cuenta con paneles solares y baterías que transforman el patio en un oasis energético. Durante los cortes de luz, los niños y vecinos recargan sus equipos para no perder la escuela.",
          details: [
            "Punto de recarga pública para teléfonos, tabletas educativas, laptops y linternas",
            "Energía limpia para iluminación básica de emergencia durante apagones nocturnos",
            "Cocina colectiva en fogón de leña para preparar caldosas comunitarias",
            "Red de apoyo mutuo entre madres para sobrellevar la sobrecarga doméstica",
          ],
          quote: "«Llegaron los paneles que llamamos solidarios porque nos permiten cargar los celulares y las compus de los niños. Invito a cualquiera a apagar su casa completa después del trabajo para entender lo que vivimos.»",
        },
        {
          id: "medicina",
          number: "04",
          title: "Farmacia Viva y «Mapa Verde»",
          tagline: "Medicina botánica ancestral y diagnóstico socioambiental",
          description:
            "Ante la escasez crítica en farmacias, sembramos plantas medicinales con respaldo científico del IFAL (Universidad de La Habana). Paralelamente, aplicamos la metodología del Mapa Verde para diagnosticar riesgos ambientales en el barrio.",
          details: [
            "Cultivo de orégano (antibiótico natural comprobado), sábila, tilo, menta y pasiflora",
            "Preparación de infusiones relajantes para mitigar el insomnio y la tensión nerviosa",
            "Metodología «Mapa Verde» con la Fundación Antonio Núñez Jiménez",
            "Educación en reciclaje, economía circular y cuidado de fuentes de agua",
          ],
          quote: "«No tenemos medicina en las farmacias, pero sembramos plantas medicinales. El orégano es un antibiótico natural que nos cuida a todos.»",
        },
      ],
    },
    natalia: {
      label: "LIDERAZGO COMUNITARIO",
      title: "Natalia Caridad Quintana López",
      subtitle: "Metróloga, madre, permacultora y constructora de comunidad",
      story: [
        "Nacida en 1964 en La Habana, Natalia ha vivido toda su vida bajo los efectos del bloqueo económico. Trabaja diariamente como metróloga en un hospital pediátrico docente de la capital cubana, garantizando la calibración precisa de los equipos médicos que atienden a los niños.",
        "Al regresar de su turno laboral, su jornada continúa en el barrio: coordina los talleres infantiles, atiende los canteros con sus propias manos, enciende el fogón de leña cuando falta el gas y organiza a las familias de Vieja Linda.",
        "Junto a su hija Vida Estefani Peña Quintana (formada en ciencias alimentarias) y una red de mujeres valientes, demuestra que la verdadera resiliencia no es resignación, sino autodeterminación comunitaria.",
      ],
      corePrinciples: [
        {
          title: "Autodeterminación",
          desc: "«Nuestra sociedad no es perfecta, pero sí está lista para mejorar todo lo que deba ser mejorado. Eso nos toca a nosotros los cubanos. No necesitamos que nadie venga de afuera a decirnos qué y cómo hacerlo.»",
        },
        {
          title: "Dignidad Humana",
          desc: "«Yo nunca pediría para ustedes bombas ni balas, pero tampoco pediría hambre. Rendir a un pueblo por hambre no es ninguna victoria moral.»",
        },
        {
          title: "Protección a la Niñez",
          desc: "«Quiero un país donde nuestros niños crezcan sanos, con acceso al arte, la ciencia y la cultura, sin limitaciones que apaguen su futuro.»",
        },
      ],
    },
    solidarity: {
      label: "CÓMO APOYAR",
      title: "Canales de solidaridad activa con Vida",
      description:
        "Debido a las sanciones financieras internacionales que pesan sobre Cuba (bloqueo/OFAC), las pasarelas tradicionales (Stripe, PayPal) no operan directamente en la isla. Sin embargo, existen vías directas, transparentes y efectivas para brindar apoyo.",
      wishlistTitle: "Lista de Insumos Prioritarios (Materiales Necesarios)",
      wishlistIntro: "Si viajas a La Habana o formas parte de una brigada cultural o humanitaria, estos insumos transforman directamente la vida del proyecto:",
      categories: [
        {
          name: "Energía e Iluminación",
          items: [
            "Baterías de ciclo profundo (12V / litio) para respaldo solar",
            "Inversores de corriente de onda sinusoidal pura (1000W - 2000W)",
            "Lámparas solares autónomas de pared y linternas recargables",
            "Powerbanks (baterías portátiles) de alta capacidad para los estudiantes",
            "Cables USB y adaptadores múltiples para el punto de recarga",
          ],
        },
        {
          name: "Huerto y Agroecología",
          items: [
            "Semillas de hortalizas no híbridas (tomate, pimiento, lechuga, acelga, rábano)",
            "Semillas de hierbas medicinales y aromáticas (albahaca, romero, tomillo)",
            "Mangueras de riego por goteo, aspersores y conexiones",
            "Herramientas manuales de jardinería (tijeras de podar, palas, rastrillos de mano)",
            "Malla sombra y guantes resistentes de jardinería",
          ],
        },
        {
          name: "Educación, Arte y Niñez",
          items: [
            "Pinturas acrílicas, acuarelas, témperas y pinceles de varios calibres",
            "Hilos de bordar de colores, madejas de tejer y agujas de coser",
            "Telas para manualidades y confección de vestuarios teatrales",
            "Cuadernos de dibujo, lápices de grafito y colores, sacapuntas y reglas",
            "Instrumentos musicales de percusión menor (claves, maracas, güiro, panderetas)",
          ],
        },
        {
          name: "Salud y Primeros Auxilios",
          items: [
            "Analgésicos y antipiréticos infantiles (paracetamol, ibuprofeno en jarabe/gotas)",
            "Sueros de rehidratación oral y multivitamínicos para niños y abuelos",
            "Gasas estériles, vendas, esparadrapo, alcohol y antisépticos",
            "Repelentes de mosquitos (prevención de dengue y chikungunya)",
            "Tensiómetros digitales y termómetros infrarrojos o digitales",
          ],
        },
      ],
      fiscalSponsorNote: {
        title: "¿Deseas realizar un aporte institucional o internacional?",
        text: "Coordinamos con redes de amistad, organizaciones sin fines de lucro en Europa, Canadá y Estados Unidos (con licencias humanitarias) y proyectos como Belly of the Beast para canalizar envíos colectivos legales y seguros. Escríbenos directamente para coordinar la mejor vía.",
      },
    },
    contact: {
      label: "CONTACTO DIRECTO",
      title: "Comunícate con la coordinación de Vida",
      subtitle: "Para donaciones materiales, visitas solidarias en La Habana o preguntas de prensa e investigación.",
      addressTitle: "Ubicación en La Habana",
      address: "Reparto Vieja Linda / Alturas de La Víbora, Circunscripción 26, Consejo Popular Los Pinos, Municipio Arroyo Naranjo, La Habana, Cuba.",
      coordinators: "Natalia Caridad Quintana López & Vida Estefani Peña Quintana",
      form: {
        name: "Tu Nombre o Colectivo",
        email: "Tu Correo Electrónico",
        country: "País / Ciudad de Origen",
        reason: "¿Cuál es el motivo de tu mensaje?",
        reasons: [
          "Donación de insumos o materiales de la lista",
          "Visita solidaria / entrega personal en La Habana",
          "Prensa, documental o investigación académica",
          "Alianza institucional o hermanamiento",
          "Mensaje de apoyo y solidaridad general",
        ],
        message: "Escribe tu mensaje...",
        submit: "Enviar Mensaje a la Coordinación",
        sending: "Enviando...",
        success: "¡Gracias! Tu mensaje ha sido registrado. La coordinación se pondrá en contacto tan pronto haya conexión.",
      },
    },
    footer: {
      tagline: "Sembrando comunidad, preservando la infancia, resistiendo con amor.",
      location: "Arroyo Naranjo · La Habana · Cuba",
      credits: "Iniciativa comunitaria independiente. Reportaje documental por Belly of the Beast Cuba.",
      alliances: "En articulación histórica con la Fundación Antonio Núñez Jiménez, Centro Félix Varela e IFAL (UH).",
    },
  },
  en: {
    nav: {
      title: "PROJECT VIDA",
      subtitle: "Arroyo Naranjo · Havana",
      links: [
        { label: "The Project", href: "#historia" },
        { label: "Documentary", href: "#documental" },
        { label: "Pillars", href: "#pilares" },
        { label: "The Crisis", href: "#crisis" },
        { label: "How to Help", href: "#ayuda" },
        { label: "Contact", href: "#contacto" },
      ],
      cta: "Support Vida",
    },
    hero: {
      locationBadge: "Arroyo Naranjo, Havana · Community Initiative since 2010",
      headline: "Sowing life and dignity amidst Cuba's crisis",
      subhead:
        "On the outskirts of Havana, facing 18-hour daily blackouts and fuel shortages, Natalia Quintana and her neighbors created a sanctuary of arts, permaculture, and solar energy for the neighborhood's children.",
      watchDocBtn: "Watch Documentary (8 min)",
      exploreBtn: "Explore the Pillars",
      stats: [
        { value: "2010", label: "Year founded by neighbors" },
        { value: "5", label: "Arts & permaculture circles" },
        { value: "100%", label: "Clean, chemical-free agriculture" },
        { value: "Solar", label: "Community charging hub during blackouts" },
      ],
    },
    documentary: {
      label: "FEATURE DOCUMENTARY",
      title: "They Call It «Vida»: A Community Project Helping Kids in Cuba’s Crisis",
      byline: "Produced by Belly of the Beast Cuba · Directed by independent journalists in Havana",
      synopsis:
        "An intimate look inside the Vieja Linda neighborhood in Arroyo Naranjo, showing how Cuban families navigate intense economic crisis through grassroots mutual aid, outdoor woodstove cooking, children's theater, and solidarity solar panels.",
      quote:
        "“Defeating a people through hunger is no victory. I want a peaceful country where our children grow without limits and don’t have to watch their mothers searching for firewood just to cook.”",
      speaker: "Natalia Caridad Quintana López",
      speakerRole: "Founder of Project Vida & Pediatric Hospital Metrologist",
      watchOnYoutube: "Open on Official YouTube",
    },
    crisis: {
      label: "DAILY REALITY",
      title: "Daily life under Cuba’s energy and economic collapse",
      description:
        "Living on Havana's periphery requires immense resilience. Strained by tightened U.S. sanctions and systemic shortages, Project Vida transforms scarcity into organized mutual care.",
      challenges: [
        {
          title: "Up to 18-Hour Daily Blackouts",
          problem: "The electrical grid collapse leaves families in the dark, spoils scarce refrigerated food, and prevents children from studying.",
          solution: "Solidarity Solar Panels: the patio becomes a neighborhood power station to charge school tablets, phones, and lamps.",
        },
        {
          title: "No Cooking Gas in Homes",
          problem: "Prolonged fuel shortages mean stove burners cannot be lit, leaving mothers desperate for cooking alternatives.",
          solution: "Community Woodstove Stew: mothers gather in the open yard to cook collective cauldrons of caldosa so every child eats.",
        },
        {
          title: "Severe Medicine Shortages",
          problem: "Pharmacies lack basic antibiotics, painkillers, fever medicines, and calming treatments.",
          solution: "Living Botanical Pharmacy: intensive cultivation of wild oregano (natural antibiotic), aloe vera, and soothing teas.",
        },
        {
          title: "Isolation & Transport Breakdown",
          problem: "Arroyo Naranjo is cut off from downtown Havana's cultural centers, theaters, and recreational hubs.",
          solution: "Neighborhood Cultural Center: hands-on painting, embroidery, dance classes, and children's theater group «La Palangana».",
        },
      ],
    },
    pillars: {
      label: "OUR FOUR PILLARS",
      title: "Four pillars sustaining the community",
      subtitle: "A holistic framework connecting agroecology, children's arts, clean energy sovereignty, and herbal medicine.",
      items: [
        {
          id: "infancia",
          number: "01",
          title: "Children, Arts & Safe Sanctuary",
          tagline: "Creative learning circles and «La Palangana» theater troupe",
          description:
            "Amidst acute economic anxiety, children need a sanctuary to play, express their imagination, and feel joy. We provide free workshops in visual arts, traditional embroidery, music, dance, and theater.",
          details: [
            "Weekly interest circles in painting, drawing, and recycled crafts",
            "Children's theater troupe «La Palangana» performing community plays",
            "Educational tutoring and emotional support for vulnerable families",
            "A joyful safe haven shielding young minds from the despair of crisis",
          ],
          quote: "“The fact that children have a space to gather, socialize, and express their gifts and talents completely transforms our neighborhood.”",
        },
        {
          id: "permacultura",
          number: "02",
          title: "Permaculture & Food Sharing",
          tagline: "Clean urban farming and solidarity food distribution",
          description:
            "What used to be illegal trash dumps were reclaimed into lush, productive garden beds. We cultivate tomatoes, sweet peppers, beans, bananas, and fruit trees with zero synthetic chemicals.",
          details: [
            "Reclaiming neighborhood waste sites into rich, fertile soil",
            "Hands-on ecological education: planting depth, natural compost, biology",
            "Free food baskets delivered to solitary, vulnerable elderly neighbors",
            "Fresh produce donated to local maternity clinics and primary schools",
          ],
          quote: "“Remember: seeds are planted twice their size in depth, never deeper. We have a moral duty to share our harvest with neighbors who have no land.”",
        },
        {
          id: "energia",
          number: "03",
          title: "Solar Panels & Communal Kitchen",
          tagline: "Clean energy relief during grid failures & collective outdoor cooking",
          description:
            "Thanks to international solidarity, the project installed solar panels and battery storage. When the power grid fails, the patio turns into a power hub for school kids and families.",
          details: [
            "Free neighborhood charging hub for phones, school laptops, and rechargeable lamps",
            "Emergency night lighting keeping the courtyard safe and productive",
            "Outdoor wood-fired caldosa kitchen when cooking gas is unavailable",
            "Peer support and collective care easing the burden on neighborhood mothers",
          ],
          quote: "“We call them solidarity panels because they let us charge the children’s computers and phones. I invite anyone to turn off their power after work to feel what we live through.”",
        },
        {
          id: "medicina",
          number: "04",
          title: "Living Pharmacy & Green Map",
          tagline: "Botanical health self-reliance and community eco-diagnostics",
          description:
            "Confronting acute pharmacy shortages, we grow medicinal herbs backed by scientific guidance from the University of Havana. Simultaneously, we map community environmental risks with Green Map tools.",
          details: [
            "Growing oregano (verified natural antibiotic), aloe vera, linden, and mint",
            "Brewing soothing medicinal teas to treat anxiety, stress, and insomnia",
            "Green Map methodology identifying flood risks and recycling spots",
            "Circular economy practices: textile repairs, composting, water stewardship",
          ],
          quote: "“We may lack medicine in pharmacies, but we grow medicinal plants. Oregano is a powerful natural antibiotic that keeps us healthy.”",
        },
      ],
    },
    natalia: {
      label: "GRASSROOTS LEADERSHIP",
      title: "Natalia Caridad Quintana López",
      subtitle: "Hospital metrologist, mother, permaculturist, and community organizer",
      story: [
        "Born in Havana in 1964, Natalia has lived her entire life under the shadow of the U.S. embargo. By day, she works as a metrologist at a pediatric hospital in Havana, calibrating critical medical equipment that keeps Cuban children alive.",
        "When her hospital shift ends, her second shift begins in the neighborhood: tending raised garden beds with her own hands, teaching art to local kids, and organizing families in Vieja Linda.",
        "Alongside her daughter Vida Estefani Peña Quintana (trained in food sciences) and neighboring women, she proves that true resilience is not passive endurance, but collective self-determination.",
      ],
      corePrinciples: [
        {
          title: "Self-Determination",
          desc: "“Our society is not perfect, but it is ready to improve whatever must be improved. That is up to us Cubans. We do not need anyone from outside coming to dictate what or how to do it.”",
        },
        {
          title: "Human Dignity",
          desc: "“I would never ask for bombs or bullets for you, but I would never ask for hunger either. Starving a people into submission is no moral victory.”",
        },
        {
          title: "Protecting Children",
          desc: "“I want a country where our children grow up healthy, with access to art, science, and joy, without artificial limits darkening their future.”",
        },
      ],
    },
    solidarity: {
      label: "HOW TO SUPPORT",
      title: "Actionable channels of solidarity with Vida",
      description:
        "Due to international financial sanctions against Cuba (U.S. embargo/OFAC), standard payment processors like Stripe or PayPal cannot transfer funds to Cuban bank accounts. However, direct and impactful solidarity paths exist.",
      wishlistTitle: "Priority Supplies Wishlist",
      wishlistIntro: "If you are traveling to Havana or joining a solidarity delegation, these physical supplies directly empower the project:",
      categories: [
        {
          name: "Clean Energy & Lighting",
          items: [
            "Deep-cycle solar batteries (12V lithium / AGM) for power backup",
            "Pure sine wave power inverters (1000W - 2000W)",
            "Solar wall lights and durable rechargeable LED work lamps",
            "High-capacity powerbanks for students to charge study tablets",
            "Multi-port USB cables and durable surge protectors",
          ],
        },
        {
          name: "Gardening & Agroecology",
          items: [
            "Non-hybrid open-pollinated vegetable seeds (tomato, pepper, lettuce, chard)",
            "Medicinal and aromatic herb seeds (basil, thyme, chamomile, oregano)",
            "Drip irrigation tubing, micro-sprinklers, and fittings",
            "Durable hand tools (pruning shears, trowels, garden forks)",
            "Garden shade mesh (malla sombra) and heavy-duty work gloves",
          ],
        },
        {
          name: "Education, Arts & Children",
          items: [
            "Acrylic paint sets, watercolor pans, tempera, and assorted brushes",
            "Embroidery threads, yarn skeins, sewing needles, and fabric remnants",
            "Costume fabrics and stage props for children’s theater",
            "Sketchbooks, graphite drawing pencils, sharpeners, and rulers",
            "Simple acoustic percussion instruments (claves, maracas, tambourines)",
          ],
        },
        {
          name: "Health & First Aid",
          items: [
            "Children’s analgesics and fever relievers (liquid paracetamol/ibuprofen)",
            "Oral rehydration salts and multivitamin gummies for children and elders",
            "Sterile gauze rolls, elastic bandages, medical tape, and antiseptics",
            "DEET mosquito repellent (dengue and chikungunya prevention)",
            "Digital blood pressure monitors and reliable thermometers",
          ],
        },
      ],
      fiscalSponsorNote: {
        title: "Interested in institutional or international coordination?",
        text: "We collaborate with recognized friendship societies, solidarity NGOs in Europe, Canada, and the U.S. (with humanitarian licenses), and platforms like Belly of the Beast. Reach out to coordinate legal and verified supply transfers.",
      },
    },
    contact: {
      label: "GET IN TOUCH",
      title: "Connect directly with Project Vida",
      subtitle: "For material donations, delegation visits in Havana, or academic and media inquiries.",
      addressTitle: "Location in Havana",
      address: "Vieja Linda / Alturas de La Víbora, Precinct 26, Los Pinos District, Arroyo Naranjo Municipality, Havana, Cuba.",
      coordinators: "Natalia Caridad Quintana López & Vida Estefani Peña Quintana",
      form: {
        name: "Your Name or Organization",
        email: "Your Email Address",
        country: "Country / City",
        reason: "Purpose of your message",
        reasons: [
          "Donating wishlist supplies or materials",
          "Solidarity visit / in-person delivery in Havana",
          "Media, documentary, or research inquiry",
          "Institutional partnership or community twinning",
          "General message of encouragement & solidarity",
        ],
        message: "Your message...",
        submit: "Send Message to Coordinators",
        sending: "Sending...",
        success: "Thank you! Your message has been logged. The coordinators will respond as soon as connectivity allows.",
      },
    },
    footer: {
      tagline: "Cultivating community, safeguarding childhood, resisting with dignity.",
      location: "Arroyo Naranjo · Havana · Cuba",
      credits: "Independent community initiative. Documentary reporting by Belly of the Beast Cuba.",
      alliances: "In historical collaboration with Fundación Antonio Núñez Jiménez, Centro Félix Varela, and IFAL (UH).",
    },
  },
};
