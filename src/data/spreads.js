// Tarot spread definitions — trilingual (ES / EN / FR)
// Positions use percentage-based x/y coordinates (center of the card)
// layoutHeight: pixel height of the spread container (default 440)

export const SPREADS = {
  single: {
    id: 'single',
    names:        { en: 'Single Card',              es: 'Carta del Día',             fr: 'Carte du Jour' },
    descriptions: { en: 'One card for clarity on a focused question or daily guidance.',
                    es: 'Una carta para claridad sobre una pregunta específica o guía diaria.',
                    fr: 'Une carte pour la clarté sur une question précise ou une guidance quotidienne.' },
    idealFor: { en: 'Daily guidance, quick answers, simple yes/no questions, or when you need one clear message.',
                es: 'Orientación diaria, respuestas rápidas, preguntas sencillas o cuando necesitas un mensaje claro.',
                fr: 'Guidance quotidienne, réponses rapides, questions simples ou quand vous avez besoin d\'un message clair.' },
    cardCount: 1, layoutHeight: 340,
    positions: [
      {
        id: 0, x: 50, y: 50,
        labels:        { en: 'Your Message',   es: 'Tu Mensaje',    fr: 'Ton Message' },
        positionDescriptions: {
          en: 'This card speaks directly to your question or the energy surrounding your current situation. It represents what the universe most wants you to see right now.',
          es: 'Esta carta habla directamente a tu pregunta o la energía que rodea tu situación actual. Representa lo que el universo más quiere que veas ahora mismo.',
          fr: "Cette carte parle directement à votre question ou à l'énergie entourant votre situation actuelle. Elle représente ce que l'univers veut le plus que vous voyiez maintenant.",
        },
      },
    ],
  },

  threeCard: {
    id: 'threeCard',
    names:        { en: 'Past · Present · Future',            es: 'Pasado · Presente · Futuro',          fr: 'Passé · Présent · Futur' },
    descriptions: { en: 'A three-card spread revealing the timeline of your situation.',
                    es: 'Una tirada de tres cartas que revela la línea temporal de tu situación.',
                    fr: 'Un tirage de trois cartes révélant la chronologie de votre situation.' },
    idealFor: { en: 'Understanding how a situation evolved, relationship dynamics, decisions with clear cause and effect.',
                es: 'Entender cómo evolucionó una situación, dinámicas de relación, decisiones con causa y efecto claros.',
                fr: 'Comprendre l\'évolution d\'une situation, dynamiques relationnelles, décisions avec cause et effet clairs.' },
    cardCount: 3, layoutHeight: 340,
    positions: [
      {
        id: 0, x: 15, y: 50,
        labels:        { en: 'Past',    es: 'Pasado',   fr: 'Passé' },
        positionDescriptions: {
          en: 'The energies, events, and decisions that have led you to this moment. These are the roots of your current situation — what has already been set in motion.',
          es: 'Las energías, eventos y decisiones que te han llevado a este momento. Son las raíces de tu situación actual — lo que ya se ha puesto en marcha.',
          fr: "Les énergies, événements et décisions qui vous ont mené à ce moment. Ce sont les racines de votre situation actuelle — ce qui a déjà été mis en mouvement.",
        },
      },
      {
        id: 1, x: 50, y: 50,
        labels:        { en: 'Present',  es: 'Presente',  fr: 'Présent' },
        positionDescriptions: {
          en: 'The heart of what is happening right now. This card reflects the current state of affairs, the energy you are living in, and the central theme demanding your attention.',
          es: 'El corazón de lo que está sucediendo ahora mismo. Esta carta refleja el estado actual de las cosas, la energía que estás viviendo y el tema central que exige tu atención.',
          fr: "Le cœur de ce qui se passe en ce moment. Cette carte reflète l'état actuel des choses, l'énergie dans laquelle vous vivez et le thème central qui demande votre attention.",
        },
      },
      {
        id: 2, x: 85, y: 50,
        labels:        { en: 'Future',  es: 'Futuro',  fr: 'Futur' },
        positionDescriptions: {
          en: 'Where the current energies are leading if nothing changes. This is a probable outcome, not a fixed destiny — your choices and awareness can shift it.',
          es: 'Hacia dónde conducen las energías actuales si nada cambia. Es un resultado probable, no un destino fijo — tus elecciones y conciencia pueden cambiarlo.',
          fr: "Vers où mènent les énergies actuelles si rien ne change. C'est un résultat probable, non un destin fixe — vos choix et votre conscience peuvent le modifier.",
        },
      },
    ],
  },

  celticCross: {
    id: 'celticCross',
    names:        { en: 'Celtic Cross',     es: 'La Cruz Celta',       fr: 'La Croix Celtique' },
    descriptions: { en: 'The classic ten-card spread for deep insight into any situation.',
                    es: 'La tirada clásica de diez cartas para una visión profunda de cualquier situación.',
                    fr: "Le tirage classique de dix cartes pour une vision approfondie de n'importe quelle situation." },
    idealFor: { en: 'Complex life situations, long-term decisions, love affairs, career crossroads, or any question needing full context.',
                es: 'Situaciones de vida complejas, decisiones a largo plazo, asuntos amorosos, encrucijadas laborales o preguntas que requieren contexto completo.',
                fr: 'Situations complexes, décisions à long terme, affaires de cœur, carrefours professionnels ou toute question nécessitant un contexte complet.' },
    cardCount: 10, layoutHeight: 480,
    positions: [
      {
        id: 0, x: 33, y: 48,
        labels:        { en: 'The Situation',  es: 'La Situación',   fr: 'La Situation' },
        positionDescriptions: {
          en: 'The heart of the matter. This card captures the essence of what the reading is about — the central energy or theme you are navigating right now.',
          es: 'El corazón del asunto. Esta carta captura la esencia de la lectura — la energía o tema central que estás navegando ahora mismo.',
          fr: "Le cœur du sujet. Cette carte capture l'essence de ce que la lecture représente — l'énergie ou le thème central que vous naviguez en ce moment.",
        },
      },
      {
        id: 1, x: 33, y: 48, rotate: 90,
        labels:        { en: 'The Challenge',  es: 'El Obstáculo',   fr: "L'Obstacle" },
        positionDescriptions: {
          en: 'What crosses you. This card represents the main obstacle, opposing force, or complicating factor working against the central situation.',
          es: 'Lo que te cruza. Esta carta representa el principal obstáculo, la fuerza opuesta o el factor complicante que actúa contra la situación central.',
          fr: "Ce qui vous croise. Cette carte représente le principal obstacle, la force opposée ou le facteur compliquant qui agit contre la situation centrale.",
        },
      },
      {
        id: 2, x: 33, y: 78,
        labels:        { en: 'Foundation',  es: 'La Raíz',    fr: 'La Racine' },
        positionDescriptions: {
          en: 'The root of the matter. This is the unconscious basis, the deep past, or the hidden foundation upon which the entire situation rests.',
          es: 'La raíz del asunto. Es la base inconsciente, el pasado profundo o el fundamento oculto sobre el que descansa toda la situación.',
          fr: "La racine du sujet. C'est la base inconsciente, le passé profond ou le fondement caché sur lequel repose toute la situation.",
        },
      },
      {
        id: 3, x: 16, y: 48,
        labels:        { en: 'Recent Past',  es: 'Pasado Reciente',  fr: 'Passé Récent' },
        positionDescriptions: {
          en: 'Events and energies that have just passed. These influences are leaving your life but still carry weight and continue to shape the present.',
          es: 'Eventos y energías que acaban de pasar. Estas influencias se van, pero aún pesan y continúan moldeando el presente.',
          fr: "Événements et énergies qui viennent de passer. Ces influences quittent votre vie mais portent encore du poids et continuent à façonner le présent.",
        },
      },
      {
        id: 4, x: 33, y: 18,
        labels:        { en: 'Best Outcome',  es: 'Mejor Resultado',  fr: 'Meilleur Résultat' },
        positionDescriptions: {
          en: 'The best possible result or what you aspire toward. This card shows the ideal outcome that could emerge if you act with awareness.',
          es: 'El mejor resultado posible o lo que aspiras. Esta carta muestra el resultado ideal que podría surgir si actúas con conciencia.',
          fr: "Le meilleur résultat possible ou ce que vous aspirez à atteindre. Cette carte montre le résultat idéal qui pourrait émerger si vous agissez avec conscience.",
        },
      },
      {
        id: 5, x: 50, y: 48,
        labels:        { en: 'Near Future',  es: 'Futuro Próximo',  fr: 'Futur Proche' },
        positionDescriptions: {
          en: 'What is approaching in the short term. This is the next event or energy coming into your life — what comes directly after the present moment.',
          es: 'Lo que se acerca a corto plazo. Este es el próximo evento o energía que entra en tu vida — lo que viene directamente después del momento presente.',
          fr: "Ce qui s'approche à court terme. C'est le prochain événement ou énergie entrant dans votre vie — ce qui vient directement après le moment présent.",
        },
      },
      {
        id: 6, x: 72, y: 80,
        labels:        { en: 'Your Approach',  es: 'Tu Actitud',  fr: 'Votre Attitude' },
        positionDescriptions: {
          en: 'How you see yourself in this situation and your attitude toward it. This reflects your inner state, your fears, or how you are consciously approaching the matter.',
          es: 'Cómo te ves en esta situación y tu actitud hacia ella. Refleja tu estado interior, tus miedos o cómo te estás acercando conscientemente al asunto.',
          fr: "Comment vous vous percevez dans cette situation et votre attitude à son égard. Cela reflète votre état intérieur, vos peurs ou la façon dont vous abordez consciemment la question.",
        },
      },
      {
        id: 7, x: 72, y: 60,
        labels:        { en: 'External Forces',  es: 'Fuerzas Externas',  fr: 'Forces Externes' },
        positionDescriptions: {
          en: 'The people, environment, and circumstances around you. This card shows how others see you or the external factors influencing the situation.',
          es: 'Las personas, el entorno y las circunstancias que te rodean. Esta carta muestra cómo te ven los demás o los factores externos que influyen en la situación.',
          fr: "Les personnes, l'environnement et les circonstances autour de vous. Cette carte montre comment les autres vous perçoivent ou les facteurs externes influençant la situation.",
        },
      },
      {
        id: 8, x: 72, y: 40,
        labels:        { en: 'Hopes & Fears',  es: 'Esperanzas y Miedos',  fr: 'Espoirs et Peurs' },
        positionDescriptions: {
          en: 'Your deepest hope — which is often also your deepest fear. This card reveals the hidden emotional charge you carry about how this situation might resolve.',
          es: 'Tu esperanza más profunda — que a menudo es también tu miedo más profundo. Esta carta revela la carga emocional oculta que llevas sobre cómo podría resolverse esta situación.',
          fr: "Votre espoir le plus profond — qui est souvent aussi votre peur la plus profonde. Cette carte révèle la charge émotionnelle cachée que vous portez sur la résolution de cette situation.",
        },
      },
      {
        id: 9, x: 72, y: 20,
        labels:        { en: 'Final Outcome',  es: 'Resultado Final',  fr: 'Résultat Final' },
        positionDescriptions: {
          en: 'The culmination of all the energies at play. This is the most likely final result if you follow the path currently set — the synthesis of the entire reading.',
          es: 'La culminación de todas las energías en juego. Es el resultado final más probable si sigues el camino actual — la síntesis de toda la lectura.',
          fr: "La culmination de toutes les énergies en jeu. C'est le résultat final le plus probable si vous suivez le chemin actuel — la synthèse de toute la lecture.",
        },
      },
    ],
  },

  horseshoe: {
    id: 'horseshoe',
    names:        { en: 'Horseshoe',     es: 'La Herradura',      fr: 'Le Fer à Cheval' },
    descriptions: { en: 'A seven-card arc spread offering a complete view of past, present, and likely future.',
                    es: 'Un arco de siete cartas que ofrece una visión completa del pasado, presente y futuro probable.',
                    fr: 'Un arc de sept cartes offrant une vue complète du passé, du présent et du futur probable.' },
    idealFor: { en: 'General life overview, ongoing situations, understanding hidden influences, practical advice with outcome.',
                es: 'Visión general de la vida, situaciones en curso, entender influencias ocultas, consejo práctico con desenlace.',
                fr: 'Vue d\'ensemble de la vie, situations en cours, comprendre les influences cachées, conseil pratique avec dénouement.' },
    cardCount: 7, layoutHeight: 420,
    positions: [
      {
        id: 0, x: 10, y: 82,
        labels:        { en: 'Distant Past',  es: 'Pasado Lejano',  fr: 'Passé Lointain' },
        positionDescriptions: {
          en: 'The foundational events and energies from the more remote past. These are the original seeds of the situation — what set everything in motion long before the present.',
          es: 'Los eventos y energías fundamentales del pasado más remoto. Son las semillas originales de la situación — lo que puso todo en marcha mucho antes del presente.',
          fr: "Les événements et énergies fondamentaux du passé plus lointain. Ce sont les graines originales de la situation — ce qui a tout mis en mouvement bien avant le présent.",
        },
      },
      {
        id: 1, x: 23, y: 46,
        labels:        { en: 'Recent Past',  es: 'Pasado Reciente',  fr: 'Passé Récent' },
        positionDescriptions: {
          en: 'Influences that have just passed or are fading. These energies are recent enough to still be felt but are no longer at the center of the situation.',
          es: 'Influencias que acaban de pasar o se están desvaneciendo. Estas energías son lo suficientemente recientes como para aún sentirse, pero ya no están en el centro de la situación.',
          fr: "Influences qui viennent de passer ou qui s'estompent. Ces énergies sont assez récentes pour être encore ressenties mais ne sont plus au centre de la situation.",
        },
      },
      {
        id: 2, x: 37, y: 20,
        labels:        { en: 'Present',  es: 'Presente',  fr: 'Présent' },
        positionDescriptions: {
          en: 'The current moment and what surrounds you now. This card reflects the prevailing energy you are living through and the central challenge of the here and now.',
          es: 'El momento actual y lo que te rodea ahora. Esta carta refleja la energía predominante que estás viviendo y el desafío central del aquí y ahora.',
          fr: "Le moment actuel et ce qui vous entoure maintenant. Cette carte reflète l'énergie dominante que vous traversez et le défi central du ici et maintenant.",
        },
      },
      {
        id: 3, x: 50, y: 12,
        labels:        { en: 'Hidden Influences',  es: 'Influencias Ocultas',  fr: 'Influences Cachées' },
        positionDescriptions: {
          en: 'Unseen or unconscious forces at work beneath the surface. These are the hidden factors — often internal — that are shaping the situation without you fully realising it.',
          es: 'Fuerzas invisibles o inconscientes que actúan bajo la superficie. Son los factores ocultos — a menudo internos — que moldean la situación sin que lo percibas del todo.',
          fr: "Forces invisibles ou inconscientes à l'œuvre sous la surface. Ce sont les facteurs cachés — souvent internes — qui façonnent la situation sans que vous en ayez pleinement conscience.",
        },
      },
      {
        id: 4, x: 63, y: 20,
        labels:        { en: 'External Influences',  es: 'Influencias Externas',  fr: 'Influences Externes' },
        positionDescriptions: {
          en: 'The people, circumstances, and environment around you. This card shows what external forces — beyond your direct control — are pressing on the situation.',
          es: 'Las personas, circunstancias y entorno que te rodean. Esta carta muestra qué fuerzas externas — más allá de tu control directo — presionan sobre la situación.',
          fr: "Les personnes, circonstances et environnement autour de vous. Cette carte montre quelles forces externes — au-delà de votre contrôle direct — pèsent sur la situation.",
        },
      },
      {
        id: 5, x: 77, y: 46,
        labels:        { en: 'Advice',  es: 'Consejo',  fr: 'Conseil' },
        positionDescriptions: {
          en: 'The recommended course of action. This card offers direct guidance on what attitude to adopt or what step to take in order to navigate the situation most wisely.',
          es: 'El curso de acción recomendado. Esta carta ofrece orientación directa sobre qué actitud adoptar o qué paso dar para navegar la situación con más sabiduría.',
          fr: "Le cours d'action recommandé. Cette carte offre une guidance directe sur l'attitude à adopter ou le pas à franchir pour naviguer la situation avec le plus de sagesse.",
        },
      },
      {
        id: 6, x: 90, y: 82,
        labels:        { en: 'Outcome',  es: 'Desenlace',  fr: 'Dénouement' },
        positionDescriptions: {
          en: 'The most likely result if current paths are followed. This is not a fixed fate — it is the probable destination given the energies in play. Your awareness can change it.',
          es: 'El resultado más probable si se siguen los caminos actuales. No es un destino fijo — es la probable destination dadas las energías en juego. Tu conciencia puede cambiarlo.',
          fr: "Le résultat le plus probable si les chemins actuels sont suivis. Ce n'est pas un destin fixe — c'est la destination probable compte tenu des énergies en jeu. Votre conscience peut le changer.",
        },
      },
    ],
  },

  circleOfLife: {
    id: 'circleOfLife',
    names:        { en: 'Circle of Life',           es: 'El Círculo de la Vida',    fr: 'Le Cercle de la Vie' },
    descriptions: { en: 'Twelve cards — one for each area of life — offering a full portrait of where you stand.',
                    es: 'Doce cartas — una por cada área de la vida — ofreciendo un retrato completo de dónde estás.',
                    fr: 'Douze cartes — une pour chaque domaine de vie — offrant un portrait complet de là où vous en êtes.' },
    idealFor: { en: 'Annual review, life transitions, understanding how different areas of life are interconnected right now.',
                es: 'Revisión anual, transiciones de vida, entender cómo las diferentes áreas de la vida están interconectadas ahora.',
                fr: 'Bilan annuel, transitions de vie, comprendre comment les différents domaines de vie sont interconnectés en ce moment.' },
    cardCount: 12, layoutHeight: 600,
    positions: [
      {
        id: 0, x: 50, y: 8,
        labels:        { en: 'Self',  es: 'Yo',  fr: 'Soi' },
        positionDescriptions: {
          en: 'Your identity, physical body, and the mask you wear in the world. How you present yourself and the energy you radiate to others at this time.',
          es: 'Tu identidad, cuerpo físico y la máscara que usas ante el mundo. Cómo te presentas y la energía que irradias a los demás en este momento.',
          fr: "Votre identité, corps physique et le masque que vous portez dans le monde. Comment vous vous présentez et l'énergie que vous rayonnez aux autres en ce moment.",
        },
      },
      {
        id: 1, x: 69, y: 14,
        labels:        { en: 'Resources',  es: 'Recursos',  fr: 'Ressources' },
        positionDescriptions: {
          en: 'Money, possessions, and what you value most deeply. This position reveals your relationship with material security and the resources available to you.',
          es: 'Dinero, posesiones y lo que más valoras profundamente. Esta posición revela tu relación con la seguridad material y los recursos disponibles para ti.',
          fr: "Argent, possessions et ce que vous valorisez le plus profondément. Cette position révèle votre relation avec la sécurité matérielle et les ressources à votre disposition.",
        },
      },
      {
        id: 2, x: 83, y: 29,
        labels:        { en: 'Mind & Communication',  es: 'Mente y Comunicación',  fr: 'Mental et Communication' },
        positionDescriptions: {
          en: 'Your thoughts, words, and daily interactions. How you think and communicate, and the state of your mental world, learning, and short journeys.',
          es: 'Tus pensamientos, palabras e interacciones diarias. Cómo piensas y te comunicas, y el estado de tu mundo mental, el aprendizaje y los viajes cortos.',
          fr: "Vos pensées, paroles et interactions quotidiennes. Comment vous pensez et communiquez, et l'état de votre monde mental, de l'apprentissage et des courts voyages.",
        },
      },
      {
        id: 3, x: 88, y: 50,
        labels:        { en: 'Home & Roots',  es: 'Hogar y Raíces',  fr: 'Foyer et Racines' },
        positionDescriptions: {
          en: 'Family, home, ancestry, and your deepest private world. The emotional foundations upon which your life is built and your sense of belonging.',
          es: 'Familia, hogar, ancestros y tu mundo privado más profundo. Los cimientos emocionales sobre los que se construye tu vida y tu sentido de pertenencia.',
          fr: "Famille, foyer, ancêtres et votre monde privé le plus profond. Les fondements émotionnels sur lesquels votre vie est construite et votre sentiment d'appartenance.",
        },
      },
      {
        id: 4, x: 83, y: 71,
        labels:        { en: 'Creativity & Joy',  es: 'Creatividad y Alegría',  fr: 'Créativité et Joie' },
        positionDescriptions: {
          en: 'Romance, children, creative expression, pleasure, and play. Where your heart finds joy and what you bring into being through love and creative fire.',
          es: 'Romance, hijos, expresión creativa, placer y juego. Donde tu corazón encuentra alegría y lo que traes a la existencia a través del amor y el fuego creativo.',
          fr: "Romance, enfants, expression créative, plaisir et jeu. Là où votre cœur trouve la joie et ce que vous faites exister à travers l'amour et le feu créatif.",
        },
      },
      {
        id: 5, x: 69, y: 86,
        labels:        { en: 'Health & Work',  es: 'Salud y Trabajo',  fr: 'Santé et Travail' },
        positionDescriptions: {
          en: 'Daily routines, physical health, service, and your work environment. The rhythms of your everyday life and how you care for your body and fulfill your duties.',
          es: 'Rutinas diarias, salud física, servicio y entorno laboral. Los ritmos de tu vida cotidiana y cómo cuidas tu cuerpo y cumples tus deberes.',
          fr: "Routines quotidiennes, santé physique, service et environnement de travail. Les rythmes de votre vie quotidienne et la façon dont vous prenez soin de votre corps.",
        },
      },
      {
        id: 6, x: 50, y: 92,
        labels:        { en: 'Relationships',  es: 'Relaciones',  fr: 'Relations' },
        positionDescriptions: {
          en: 'Partnerships, marriage, and significant one-on-one relationships. The mirror of the other — what you attract and what you seek in those closest to you.',
          es: 'Asociaciones, matrimonio y relaciones significativas de uno a uno. El espejo del otro — lo que atraes y lo que buscas en quienes están más cerca de ti.',
          fr: "Partenariats, mariage et relations significatives en tête-à-tête. Le miroir de l'autre — ce que vous attirez et ce que vous cherchez chez ceux qui vous sont proches.",
        },
      },
      {
        id: 7, x: 31, y: 86,
        labels:        { en: 'Transformation',  es: 'Transformación',  fr: 'Transformation' },
        positionDescriptions: {
          en: 'Shared resources, sexuality, death and rebirth, and the occult. The deep transformative forces in your life — what must die so that something new can emerge.',
          es: 'Recursos compartidos, sexualidad, muerte y renacimiento, y lo oculto. Las fuerzas transformadoras profundas en tu vida — lo que debe morir para que algo nuevo emerja.',
          fr: "Ressources partagées, sexualité, mort et renaissance, et l'occulte. Les forces transformatrices profondes dans votre vie — ce qui doit mourir pour que quelque chose de nouveau émerge.",
        },
      },
      {
        id: 8, x: 17, y: 71,
        labels:        { en: 'Philosophy & Travel',  es: 'Filosofía y Viaje',  fr: 'Philosophie et Voyage' },
        positionDescriptions: {
          en: 'Higher education, long journeys, philosophy, and the search for meaning. Your relationship with belief, wisdom, and the broader horizons of your life.',
          es: 'Educación superior, viajes largos, filosofía y búsqueda de significado. Tu relación con las creencias, la sabiduría y los horizontes más amplios de tu vida.',
          fr: "Enseignement supérieur, longs voyages, philosophie et recherche de sens. Votre relation avec les croyances, la sagesse et les horizons plus larges de votre vie.",
        },
      },
      {
        id: 9, x: 12, y: 50,
        labels:        { en: 'Career & Reputation',  es: 'Carrera y Reputación',  fr: 'Carrière et Réputation' },
        positionDescriptions: {
          en: 'Public life, ambition, authority, and worldly achievement. Your standing in society and the legacy you are building through your actions in the world.',
          es: 'Vida pública, ambición, autoridad y logros mundanos. Tu posición en la sociedad y el legado que estás construyendo a través de tus acciones en el mundo.',
          fr: "Vie publique, ambition, autorité et réalisations mondaines. Votre position dans la société et l'héritage que vous construisez à travers vos actions dans le monde.",
        },
      },
      {
        id: 10, x: 17, y: 29,
        labels:        { en: 'Community & Dreams',  es: 'Comunidad y Sueños',  fr: 'Communauté et Rêves' },
        positionDescriptions: {
          en: 'Friends, groups, social causes, and your hopes for the future. Your place in the wider community and the collective dreams you carry in your heart.',
          es: 'Amigos, grupos, causas sociales y tus esperanzas para el futuro. Tu lugar en la comunidad más amplia y los sueños colectivos que llevas en el corazón.',
          fr: "Amis, groupes, causes sociales et vos espoirs pour l'avenir. Votre place dans la communauté plus large et les rêves collectifs que vous portez dans votre cœur.",
        },
      },
      {
        id: 11, x: 31, y: 14,
        labels:        { en: 'Spirituality & Shadows',  es: 'Espiritualidad y Sombras',  fr: 'Spiritualité et Ombres' },
        positionDescriptions: {
          en: 'The hidden realm, solitude, karma, and the unconscious. What lies beneath the surface of your life — secrets, spiritual work, and what you carry from the past.',
          es: 'El reino oculto, la soledad, el karma y el inconsciente. Lo que yace bajo la superficie de tu vida — secretos, trabajo espiritual y lo que cargas del pasado.',
          fr: "Le domaine caché, la solitude, le karma et l'inconscient. Ce qui se trouve sous la surface de votre vie — secrets, travail spirituel et ce que vous portez du passé.",
        },
      },
    ],
  },
};

export const SPREAD_LIST = Object.values(SPREADS);

// ─── Multilingual helpers ─────────────────────────────────────────────────────

export function getSpreadName(spread, lang) {
  return spread.names?.[lang] ?? spread.names?.en ?? spread.nameEn ?? spread.name;
}

export function getSpreadDescription(spread, lang) {
  return spread.descriptions?.[lang] ?? spread.descriptions?.en ?? spread.description;
}

export function getPositionLabel(pos, lang) {
  return pos.labels?.[lang] ?? pos.labels?.en ?? pos.label;
}

export function getPositionDescription(pos, lang) {
  return pos.positionDescriptions?.[lang] ?? pos.positionDescriptions?.en ?? pos.positionDescription;
}

export function getIdealFor(spread, lang) {
  return spread.idealFor?.[lang] ?? spread.idealFor?.en ?? '';
}
