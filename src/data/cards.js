// All 78 Tarot de Marseille cards
// Images from Jean Dodal (1701) deck on Wikimedia Commons
// Minor arcana with no confirmed Wikimedia file use wikimediaFile: null → CSS placeholder

const COMMONS_BASE = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

export function getImageUrl(filename) {
  if (!filename) return null;
  return `${COMMONS_BASE}${encodeURIComponent(filename)}`;
}

// ─── Major Arcana (22 cards) ─────────────────────────────────────────────────

export const MAJOR_ARCANA = [
  {
    id: 'major-00', number: 0, name: 'Le Mat', nameEn: 'The Fool', nameEs: 'El Loco',
    arcana: 'major', suit: null, romanNumeral: '0',
    meanings: {
      en: { up: 'New beginnings, spontaneity, and a leap into the unknown with open-hearted trust. The Fool embodies freedom, innocence, and the courage to start fresh.', rev: 'Recklessness, poor judgment, and naivety leading to unnecessary risks. A warning to look before you leap.' },
      es: { up: 'Nuevos comienzos, espontaneidad y un salto hacia lo desconocido con confianza. El Loco encarna la libertad, la inocencia y el coraje para empezar de nuevo.', rev: 'Imprudencia, mal juicio e ingenuidad que lleva a riesgos innecesarios. Una advertencia para mirar antes de saltar.' },
      fr: { up: "Nouveaux commencements, spontanéité et saut vers l'inconnu en toute confiance. Le Mat incarne la liberté, l'innocence et le courage de repartir à zéro.", rev: "Imprudence, mauvais jugement et naïveté menant à des risques inutiles. Un avertissement à regarder avant de sauter." },
    },
    keywords: ['beginnings', 'freedom', 'journey', 'spontaneity'],
    wikimediaFile: 'Jean Dodal Tarot trump Fool.jpg',
  },
  {
    id: 'major-01', number: 1, name: 'Le Bateleur', nameEn: 'The Magician', nameEs: 'El Mago',
    arcana: 'major', suit: null, romanNumeral: 'I',
    meanings: {
      en: { up: "Skill, resourcefulness, and the power to manifest one's will through focused action. All tools are at hand; the only question is how to use them.", rev: 'Manipulation, trickery, and untapped or misdirected talents. Beware of deception or a con artist.' },
      es: { up: 'Habilidad, ingenio y el poder de manifestar la voluntad mediante acción enfocada. Todas las herramientas están a mano; solo falta saber cómo usarlas.', rev: 'Manipulación, engaño y talentos desaprovechados o mal dirigidos. Cuidado con el engaño o un estafador.' },
      fr: { up: "Habileté, ingéniosité et le pouvoir de manifester sa volonté par une action focalisée. Tous les outils sont à portée; la seule question est comment les utiliser.", rev: "Manipulation, tromperie et talents inexploités ou mal orientés. Méfiez-vous de la duperie ou d'un imposteur." },
    },
    keywords: ['skill', 'will', 'manifestation', 'resourcefulness'],
    wikimediaFile: 'Jean Dodal Tarot trump 01.jpg',
  },
  {
    id: 'major-02', number: 2, name: 'La Papesse', nameEn: 'The High Priestess', nameEs: 'La Suma Sacerdotisa',
    arcana: 'major', suit: null, romanNumeral: 'II',
    meanings: {
      en: { up: 'Intuition, mystery, and inner knowledge. She guards the threshold between the conscious and unconscious, urging you to trust your inner voice.', rev: "Secrets, hidden agendas, and ignoring one's intuition. Surface knowledge mistaken for depth." },
      es: { up: 'Intuición, misterio y conocimiento interior. Guarda el umbral entre lo consciente y lo inconsciente, instándote a confiar en tu voz interior.', rev: 'Secretos, agendas ocultas e ignorar la intuición. El conocimiento superficial confundido con profundidad.' },
      fr: { up: "Intuition, mystère et connaissance intérieure. Elle garde le seuil entre le conscient et l'inconscient, vous invitant à faire confiance à votre voix intérieure.", rev: "Secrets, agendas cachés et ignorance de l'intuition. La connaissance de surface confondue avec la profondeur." },
    },
    keywords: ['intuition', 'mystery', 'wisdom', 'inner knowledge'],
    wikimediaFile: 'Jean Dodal Tarot trump 02.jpg',
  },
  {
    id: 'major-03', number: 3, name: "L'Impératrice", nameEn: 'The Empress', nameEs: 'La Emperatriz',
    arcana: 'major', suit: null, romanNumeral: 'III',
    meanings: {
      en: { up: 'Abundance, fertility, and nurturing creativity. The Empress represents nature, sensuality, and the power to bring ideas to life through patient care.', rev: 'Creative block, dependence, and smothering. An imbalance in giving and receiving nourishment.' },
      es: { up: 'Abundancia, fertilidad y creatividad nutritiva. La Emperatriz representa la naturaleza, la sensualidad y el poder de dar vida a las ideas mediante el cuidado paciente.', rev: 'Bloqueo creativo, dependencia y sobreprotección. Un desequilibrio en dar y recibir.' },
      fr: { up: "Abondance, fertilité et créativité nourricière. L'Impératrice représente la nature, la sensualité et le pouvoir de donner vie aux idées par des soins patients.", rev: "Blocage créatif, dépendance et surprotection. Un déséquilibre dans le don et la réception." },
    },
    keywords: ['abundance', 'fertility', 'nature', 'creativity'],
    wikimediaFile: 'Jean Dodal Tarot trump 03.jpg',
  },
  {
    id: 'major-04', number: 4, name: "L'Empereur", nameEn: 'The Emperor', nameEs: 'El Emperador',
    arcana: 'major', suit: null, romanNumeral: 'IV',
    meanings: {
      en: { up: 'Authority, structure, and worldly power. The Emperor establishes order through discipline and rational leadership; a call to take charge.', rev: 'Tyranny, rigidity, and domination. Power used to control rather than protect.' },
      es: { up: 'Autoridad, estructura y poder mundano. El Emperador establece el orden mediante la disciplina y el liderazgo racional; una llamada a tomar el mando.', rev: 'Tiranía, rigidez y dominación. El poder usado para controlar en vez de proteger.' },
      fr: { up: "Autorité, structure et pouvoir mondain. L'Empereur établit l'ordre par la discipline et le leadership rationnel; un appel à prendre les rênes.", rev: "Tyrannie, rigidité et domination. Le pouvoir utilisé pour contrôler plutôt que protéger." },
    },
    keywords: ['authority', 'structure', 'order', 'leadership'],
    wikimediaFile: 'Jean Dodal Tarot trump 04.jpg',
  },
  {
    id: 'major-05', number: 5, name: 'Le Pape', nameEn: 'The Hierophant', nameEs: 'El Hierofante',
    arcana: 'major', suit: null, romanNumeral: 'V',
    meanings: {
      en: { up: 'Tradition, spiritual guidance, and conformity to established beliefs. A mentor figure offering wisdom through established systems.', rev: 'Dogma, restriction, and blind conformity. Challenging conventions or breaking from institution.' },
      es: { up: 'Tradición, guía espiritual y conformidad con creencias establecidas. Un mentor que ofrece sabiduría a través de sistemas establecidos.', rev: 'Dogma, restricción y conformidad ciega. Desafiar las convenciones o romper con la institución.' },
      fr: { up: "Tradition, guidance spirituelle et conformité aux croyances établies. Un mentor offrant la sagesse à travers des systèmes établis.", rev: "Dogme, restriction et conformité aveugle. Remettre en question les conventions ou rompre avec l'institution." },
    },
    keywords: ['tradition', 'wisdom', 'spirituality', 'institution'],
    wikimediaFile: 'Jean Dodal Tarot trump 05.jpg',
  },
  {
    id: 'major-06', number: 6, name: "L'Amoureux", nameEn: 'The Lovers', nameEs: 'Los Enamorados',
    arcana: 'major', suit: null, romanNumeral: 'VI',
    meanings: {
      en: { up: 'Love, harmony, and an important choice between two paths. Alignment of values and the power of genuine connection.', rev: 'Disharmony, imbalance, and misalignment of values. A difficult choice made from fear rather than love.' },
      es: { up: 'Amor, armonía y una elección importante entre dos caminos. Alineación de valores y el poder de la conexión genuina.', rev: 'Desarmonía, desequilibrio y desalineación de valores. Una elección difícil tomada por miedo en lugar de amor.' },
      fr: { up: "Amour, harmonie et un choix important entre deux voies. Alignement des valeurs et la puissance de la connexion authentique.", rev: "Désharmonie, déséquilibre et désalignement des valeurs. Un choix difficile fait par peur plutôt que par amour." },
    },
    keywords: ['love', 'choice', 'harmony', 'alignment'],
    wikimediaFile: 'Jean Dodal Tarot trump 06.jpg',
  },
  {
    id: 'major-07', number: 7, name: 'Le Chariot', nameEn: 'The Chariot', nameEs: 'El Carro',
    arcana: 'major', suit: null, romanNumeral: 'VII',
    meanings: {
      en: { up: 'Victory, control, and willpower overcoming obstacles. The charioteer masters opposing forces through determination and focused intent.', rev: 'Lack of control, aggression, and being driven by ego. Forces pulling in different directions without resolution.' },
      es: { up: 'Victoria, control y voluntad que supera los obstáculos. El auriga domina fuerzas opuestas mediante determinación e intención enfocada.', rev: 'Falta de control, agresión y ser conducido por el ego. Fuerzas que tiran en distintas direcciones sin resolución.' },
      fr: { up: "Victoire, contrôle et volonté surmontant les obstacles. Le conducteur maîtrise les forces opposées par la détermination et l'intention focalisée.", rev: "Perte de contrôle, agression et être guidé par l'ego. Forces tirant dans différentes directions sans résolution." },
    },
    keywords: ['victory', 'control', 'willpower', 'determination'],
    wikimediaFile: 'Jean Dodal Tarot trump 07.jpg',
  },
  {
    id: 'major-08', number: 8, name: 'La Justice', nameEn: 'Justice', nameEs: 'La Justicia',
    arcana: 'major', suit: null, romanNumeral: 'VIII',
    meanings: {
      en: { up: 'Fairness, truth, and cause and effect. Justice demands honesty with oneself; actions have consequences that must be accounted for.', rev: 'Injustice, dishonesty, and avoidance of accountability. An unfair outcome or refusal to see clearly.' },
      es: { up: 'Equidad, verdad y causa y efecto. La Justicia exige honestidad con uno mismo; las acciones tienen consecuencias que deben asumirse.', rev: 'Injusticia, deshonestidad y evasión de responsabilidad. Un resultado injusto o rechazo a ver con claridad.' },
      fr: { up: "Équité, vérité et cause à effet. La Justice exige l'honnêteté envers soi-même; les actions ont des conséquences qui doivent être assumées.", rev: "Injustice, malhonnêteté et fuite des responsabilités. Un résultat injuste ou refus de voir clairement." },
    },
    keywords: ['justice', 'truth', 'fairness', 'accountability'],
    wikimediaFile: 'Jean Dodal Tarot trump 08.jpg',
  },
  {
    id: 'major-09', number: 9, name: "L'Hermite", nameEn: 'The Hermit', nameEs: 'El Ermitaño',
    arcana: 'major', suit: null, romanNumeral: 'IX',
    meanings: {
      en: { up: 'Solitude, introspection, and the search for inner truth. The Hermit withdraws from the world to illuminate the way for others.', rev: 'Isolation, withdrawal from needed connection, and existential loneliness. Refusing the light of guidance.' },
      es: { up: 'Soledad, introspección y búsqueda de la verdad interior. El Ermitaño se retira del mundo para iluminar el camino a los demás.', rev: 'Aislamiento, alejamiento de la conexión necesaria y soledad existencial. Rechazar la luz de la guía.' },
      fr: { up: "Solitude, introspection et recherche de la vérité intérieure. L'Hermite se retire du monde pour illuminer le chemin des autres.", rev: "Isolement, retrait d'une connexion nécessaire et solitude existentielle. Refuser la lumière de la guidance." },
    },
    keywords: ['solitude', 'introspection', 'guidance', 'wisdom'],
    wikimediaFile: 'Jean Dodal Tarot trump 09.jpg',
  },
  {
    id: 'major-10', number: 10, name: 'La Roue de Fortune', nameEn: 'Wheel of Fortune', nameEs: 'La Rueda de la Fortuna',
    arcana: 'major', suit: null, romanNumeral: 'X',
    meanings: {
      en: { up: 'Fate, cycles, and the turning of fortune. Good luck and pivotal moments; the wheel always turns, nothing stays the same.', rev: 'Bad luck, resistance to change, and clinging to the past. Fighting against inevitable cycles.' },
      es: { up: 'Destino, ciclos y el giro de la fortuna. Buena suerte y momentos cruciales; la rueda siempre gira, nada permanece igual.', rev: 'Mala suerte, resistencia al cambio y aferrarse al pasado. Luchar contra ciclos inevitables.' },
      fr: { up: "Destin, cycles et le tournant de la fortune. Bonne chance et moments pivots; la roue tourne toujours, rien ne reste pareil.", rev: "Malchance, résistance au changement et attachement au passé. Lutter contre des cycles inévitables." },
    },
    keywords: ['fate', 'cycles', 'fortune', 'change'],
    wikimediaFile: 'Jean Dodal Tarot trump 10.jpg',
  },
  {
    id: 'major-11', number: 11, name: 'La Force', nameEn: 'Strength', nameEs: 'La Fuerza',
    arcana: 'major', suit: null, romanNumeral: 'XI',
    meanings: {
      en: { up: 'Inner strength, courage, and compassionate control over raw impulses. True power comes through patience and gentleness, not force.', rev: 'Self-doubt, weakness, and loss of courage. Letting fear or raw impulse override reason.' },
      es: { up: 'Fortaleza interior, valentía y control compasivo sobre los impulsos. El verdadero poder surge de la paciencia y la gentileza, no de la fuerza bruta.', rev: 'Dudas, debilidad y pérdida de coraje. Dejar que el miedo o el impulso bruto supere la razón.' },
      fr: { up: "Force intérieure, courage et contrôle compatissant des impulsions brutes. Le vrai pouvoir vient par la patience et la douceur, non par la force brute.", rev: "Doute de soi, faiblesse et perte de courage. Laisser la peur ou l'impulsion brute dominer la raison." },
    },
    keywords: ['strength', 'courage', 'patience', 'compassion'],
    wikimediaFile: 'Jean Dodal Tarot trump 11.jpg',
  },
  {
    id: 'major-12', number: 12, name: 'Le Pendu', nameEn: 'The Hanged Man', nameEs: 'El Colgado',
    arcana: 'major', suit: null, romanNumeral: 'XII',
    meanings: {
      en: { up: 'Suspension, surrender, and seeing things from a new perspective. Voluntary pause that leads to profound insight and enlightenment.', rev: 'Stalling, martyrdom, and useless sacrifice. Delay without purpose or refusing needed change.' },
      es: { up: 'Suspensión, rendición y ver las cosas desde una nueva perspectiva. Una pausa voluntaria que conduce a una comprensión profunda e iluminación.', rev: 'Demora, martirio y sacrificio inútil. Retraso sin propósito o rechazo al cambio necesario.' },
      fr: { up: "Suspension, reddition et voir les choses sous un nouvel angle. Une pause volontaire menant à une profonde compréhension et illumination.", rev: "Temporisation, martyre et sacrifice inutile. Délai sans but ou refus du changement nécessaire." },
    },
    keywords: ['surrender', 'perspective', 'pause', 'enlightenment'],
    wikimediaFile: 'Jean Dodal Tarot trump 12.jpg',
  },
  {
    id: 'major-13', number: 13, name: 'La Mort', nameEn: 'Death', nameEs: 'La Muerte',
    arcana: 'major', suit: null, romanNumeral: 'XIII',
    meanings: {
      en: { up: 'Transformation, endings, and necessary change. Death clears the old to make room for the new; nothing truly ends, it only transforms.', rev: 'Resistance to change, stagnation, and fear of endings. Clinging to what must be released.' },
      es: { up: 'Transformación, finales y cambio necesario. La Muerte limpia lo viejo para hacer espacio a lo nuevo; nada termina realmente, solo se transforma.', rev: 'Resistencia al cambio, estancamiento y miedo a los finales. Aferrarse a lo que debe liberarse.' },
      fr: { up: "Transformation, fins et changement nécessaire. La Mort nettoie l'ancien pour faire place au nouveau; rien ne finit vraiment, cela se transforme.", rev: "Résistance au changement, stagnation et peur des fins. S'accrocher à ce qui doit être libéré." },
    },
    keywords: ['transformation', 'endings', 'change', 'transition'],
    wikimediaFile: 'Jean Dodal Tarot trump 13.jpg',
  },
  {
    id: 'major-14', number: 14, name: 'La Tempérance', nameEn: 'Temperance', nameEs: 'La Templanza',
    arcana: 'major', suit: null, romanNumeral: 'XIV',
    meanings: {
      en: { up: 'Balance, moderation, and patient alchemy. Blending opposites with grace to create something harmonious and lasting.', rev: 'Imbalance, excess, and lack of patience. Extremes in behavior or an inability to integrate disparate elements.' },
      es: { up: 'Equilibrio, moderación y alquimia paciente. Mezclando opuestos con gracia para crear algo armonioso y duradero.', rev: 'Desequilibrio, exceso y falta de paciencia. Comportamientos extremos o incapacidad de integrar elementos dispares.' },
      fr: { up: "Équilibre, modération et alchimie patiente. Mêler les opposés avec grâce pour créer quelque chose d'harmonieux et durable.", rev: "Déséquilibre, excès et manque de patience. Comportements extrêmes ou incapacité à intégrer des éléments disparates." },
    },
    keywords: ['balance', 'moderation', 'patience', 'harmony'],
    wikimediaFile: 'Jean Dodal Tarot trump 14.jpg',
  },
  {
    id: 'major-15', number: 15, name: 'Le Diable', nameEn: 'The Devil', nameEs: 'El Diablo',
    arcana: 'major', suit: null, romanNumeral: 'XV',
    meanings: {
      en: { up: "Bondage, materialism, and the shadow self. The chains of addiction and obsession, though often the chains we choose and can remove.", rev: "Liberation, breaking free from restrictions. Detachment from materialism and reclaiming one's power." },
      es: { up: 'Esclavitud, materialismo y la sombra del yo. Las cadenas de la adicción y la obsesión, aunque a menudo son cadenas que elegimos y podemos quitar.', rev: 'Liberación, romper con las restricciones. Desapego del materialismo y recuperar el propio poder.' },
      fr: { up: "Servitude, matérialisme et l'ombre du moi. Les chaînes de l'addiction et de l'obsession, bien que souvent des chaînes que nous choisissons.", rev: "Libération, briser les restrictions. Détachement du matérialisme et reprise de son propre pouvoir." },
    },
    keywords: ['bondage', 'shadow', 'materialism', 'liberation'],
    wikimediaFile: 'Jean Dodal Tarot trump 15.jpg',
  },
  {
    id: 'major-16', number: 16, name: 'La Maison Dieu', nameEn: 'The Tower', nameEs: 'La Torre',
    arcana: 'major', suit: null, romanNumeral: 'XVI',
    meanings: {
      en: { up: 'Sudden upheaval, revelation, and the destruction of false structures. Lightning strikes what was built on a flawed foundation.', rev: 'Avoidance of disaster, resisting needed change, or a narrowly avoided catastrophe.' },
      es: { up: 'Agitación repentina, revelación y destrucción de estructuras falsas. El rayo golpea lo que fue construido sobre cimientos defectuosos.', rev: 'Evitar el desastre, resistir el cambio necesario, o una catástrofe por poco evitada.' },
      fr: { up: "Bouleversement soudain, révélation et destruction de structures fausses. La foudre frappe ce qui a été construit sur des fondations viciées.", rev: "Évitement du désastre, résistance au changement nécessaire, ou catastrophe évitée de justesse." },
    },
    keywords: ['upheaval', 'revelation', 'destruction', 'awakening'],
    wikimediaFile: 'Jean Dodal Tarot trump 16.jpg',
  },
  {
    id: 'major-17', number: 17, name: "L'Étoile", nameEn: 'The Star', nameEs: 'La Estrella',
    arcana: 'major', suit: null, romanNumeral: 'XVII',
    meanings: {
      en: { up: 'Hope, renewal, and divine inspiration. After the storm, the Star pours forth healing waters; faith in the future is rewarded.', rev: 'Despair, disconnection from hope, and loss of faith. A feeling of being lost or abandoned.' },
      es: { up: 'Esperanza, renovación e inspiración divina. Tras la tormenta, la Estrella vierte aguas sanadoras; la fe en el futuro es recompensada.', rev: 'Desesperación, desconexión de la esperanza y pérdida de fe. Sentirse perdido o abandonado.' },
      fr: { up: "Espoir, renouveau et inspiration divine. Après la tempête, l'Étoile verse ses eaux guérissantes; la foi en l'avenir est récompensée.", rev: "Désespoir, déconnexion de l'espoir et perte de foi. Sentiment d'être perdu ou abandonné." },
    },
    keywords: ['hope', 'renewal', 'inspiration', 'faith'],
    wikimediaFile: 'Jean Dodal Tarot trump 17.jpg',
  },
  {
    id: 'major-18', number: 18, name: 'La Lune', nameEn: 'The Moon', nameEs: 'La Luna',
    arcana: 'major', suit: null, romanNumeral: 'XVIII',
    meanings: {
      en: { up: "Illusion, fear, and the murky depths of the unconscious. The Moon reflects rather than illuminates; intuition must guide where reason fails.", rev: 'Confusion lifting, repressed fears surfacing for healing. Coming out of a period of illusion.' },
      es: { up: 'Ilusión, miedo y las profundidades oscuras del inconsciente. La Luna refleja en vez de iluminar; la intuición debe guiar donde la razón falla.', rev: 'La confusión se disipa, los miedos reprimidos emergen para sanar. Salir de un período de ilusión.' },
      fr: { up: "Illusion, peur et les profondeurs obscures de l'inconscient. La Lune réfléchit plutôt qu'elle n'illumine; l'intuition doit guider là où la raison échoue.", rev: "La confusion se lève, les peurs refoulées émergent pour guérir. Sortir d'une période d'illusion." },
    },
    keywords: ['illusion', 'fear', 'unconscious', 'intuition'],
    wikimediaFile: 'Jean Dodal Tarot trump 18.jpg',
  },
  {
    id: 'major-19', number: 19, name: 'Le Soleil', nameEn: 'The Sun', nameEs: 'El Sol',
    arcana: 'major', suit: null, romanNumeral: 'XIX',
    meanings: {
      en: { up: 'Joy, vitality, and radiant success. The Sun brings clarity, warmth, and the pure happiness of being fully alive and seen.', rev: 'Temporary sadness, inner child wounds, or a dimming of confidence. Positivity temporarily blocked.' },
      es: { up: 'Alegría, vitalidad y éxito radiante. El Sol trae claridad, calidez y la pura felicidad de estar plenamente vivo y reconocido.', rev: 'Tristeza temporal, heridas del niño interior o una disminución de la confianza. La positividad temporalmente bloqueada.' },
      fr: { up: "Joie, vitalité et succès rayonnant. Le Soleil apporte clarté, chaleur et le bonheur pur d'être pleinement vivant et reconnu.", rev: "Tristesse passagère, blessures de l'enfant intérieur ou confiance qui diminue. Positivité temporairement bloquée." },
    },
    keywords: ['joy', 'vitality', 'success', 'clarity'],
    wikimediaFile: 'Jean Dodal Tarot trump 19.jpg',
  },
  {
    id: 'major-20', number: 20, name: 'Le Jugement', nameEn: 'Judgement', nameEs: 'El Juicio',
    arcana: 'major', suit: null, romanNumeral: 'XX',
    meanings: {
      en: { up: 'Rebirth, awakening, and a call to higher purpose. A moment of reckoning that leads to profound transformation and absolution.', rev: "Self-doubt, refusal to heed one's calling, and fear of judgement. Lingering in the past." },
      es: { up: 'Renacimiento, despertar y llamado a un propósito superior. Un momento de ajuste de cuentas que conduce a una transformación profunda y absolución.', rev: 'Dudas, negativa a escuchar el llamado y miedo al juicio. Quedarse atrapado en el pasado.' },
      fr: { up: "Renaissance, éveil et appel à un but supérieur. Un moment de règlement de comptes menant à une profonde transformation et absolution.", rev: "Doute de soi, refus d'entendre son appel et peur du jugement. Rester prisonnier du passé." },
    },
    keywords: ['rebirth', 'awakening', 'calling', 'transformation'],
    wikimediaFile: 'Jean Dodal Tarot trump 20.jpg',
  },
  {
    id: 'major-21', number: 21, name: 'Le Monde', nameEn: 'The World', nameEs: 'El Mundo',
    arcana: 'major', suit: null, romanNumeral: 'XXI',
    meanings: {
      en: { up: 'Completion, integration, and wholeness. The World dancer has mastered all four elements; a journey fulfilled and a new cycle about to begin.', rev: 'Incompleteness, shortcuts, and loose ends. Reaching the finish line but not quite crossing it.' },
      es: { up: 'Completitud, integración y totalidad. La danzarina del Mundo ha dominado los cuatro elementos; un viaje cumplido y un nuevo ciclo a punto de comenzar.', rev: 'Incompletitud, atajos y cabos sueltos. Llegar a la meta pero sin cruzarla del todo.' },
      fr: { up: "Achèvement, intégration et plénitude. La danseuse du Monde a maîtrisé les quatre éléments; un voyage accompli et un nouveau cycle sur le point de commencer.", rev: "Incomplétude, raccourcis et bouts libres. Atteindre la ligne d'arrivée sans tout à fait la franchir." },
    },
    keywords: ['completion', 'wholeness', 'integration', 'fulfillment'],
    wikimediaFile: 'Jean Dodal Tarot trump 21.jpg',
  },
];

// ─── Minor Arcana meanings ────────────────────────────────────────────────────

const MINOR_MEANINGS = {
  wands: {
    1:  { up: 'A creative spark ignites new ventures and raw potential. Inspiration arrives fully formed, urging you to act.', rev: 'Creative blocks, delays, and lack of motivation stalling new projects. The fire is there but won\'t catch.' },
    2:  { up: 'Future planning and the first bold step away from familiar shores. You have the world in your hands.', rev: 'Fear of the unknown keeps you rooted. Indecision and reluctance to take the next step.' },
    3:  { up: 'Expansion, first results, and watching your efforts begin to bear fruit. Ships are coming in.', rev: 'Obstacles ahead delay expected progress. Setbacks and a need to revise plans.' },
    4:  { up: 'Celebration, community, and the joy of a milestone reached together. A homecoming or festive gathering.', rev: 'Instability at home, tension in community, or a celebration cut short.' },
    5:  { up: 'Healthy competition, conflict, and the chaos of many competing ideas. Growth through struggle.', rev: 'Avoiding necessary confrontation or inner conflict turning outward destructively.' },
    6:  { up: 'Victory, public recognition, and the sweet taste of success after effort. Riding in on a wave of acclaim.', rev: 'Delayed success, private victory, or praise that rings hollow.' },
    7:  { up: 'Perseverance, holding your ground, and defending what you have built against opposition.', rev: 'Giving up under pressure, feeling overwhelmed or unable to maintain your position.' },
    8:  { up: 'Swift movement, news arriving quickly, and rapid progress toward your goal. Everything accelerates.', rev: 'Delays, miscommunication, and frustrated plans. Energy that moves in the wrong direction.' },
    9:  { up: 'Resilience and nearing the end of a long struggle. Battered but still standing; one more push required.', rev: 'Paranoia, excessive defensiveness, and exhaustion making it hard to trust others.' },
    10: { up: 'A heavy burden of responsibility or overcommitment. You carry too much but the destination is near.', rev: 'Collapsing under pressure; finally setting down an unsustainable load.' },
    11: { up: 'Enthusiastic messages, exploration, and the excitement of a new creative adventure just beginning.', rev: 'Immaturity, scattered energy, and eagerness that outpaces ability.' },
    12: { up: 'Adventurous action, bold pursuits, and the passion of someone who charges toward their dreams.', rev: 'Recklessness, impulsive decisions, and energy that burns out before reaching the goal.' },
    13: { up: 'Confidence, warmth, and inspiring leadership rooted in genuine passion and creative vision.', rev: 'Jealousy, short temper, and demanding behavior from someone in authority.' },
    14: { up: 'Visionary leadership, charisma, and the ability to inspire others toward a bold shared future.', rev: 'Arrogance, impulsiveness, and a leader who dominates rather than empowers.' },
  },
  cups: {
    1:  { up: 'A new love, emotional gift, or creative outpouring. The cup overflows with unexplored feelings.', rev: 'Emotional blocks, feeling empty, or an offer of love refused or unexpressed.' },
    2:  { up: 'Partnership, mutual love, and the joy of genuine reciprocity. Two hearts in alignment.', rev: 'Imbalance, one-sided love, or a partnership falling out of harmony.' },
    3:  { up: 'Friendship, celebration, and the pleasure of shared joy. Community and emotional abundance.', rev: 'Overindulgence, gossip, and superficial socializing that drains rather than fills.' },
    4:  { up: 'Contemplation, apathy, and a period of withdrawal. A new opportunity arrives but is not yet seen.', rev: 'Missed opportunities, depression lifting, or finally reaching out after isolation.' },
    5:  { up: 'Loss, grief, and regret over what has been spilled. Three cups lie fallen but two still stand behind you.', rev: 'Moving forward from loss, finding acceptance, and turning toward what remains.' },
    6:  { up: 'Nostalgia, childhood memories, and simple pleasures. A gift from the past returned with warmth.', rev: 'Living in the past, naivety, or an idealised memory that prevents present joy.' },
    7:  { up: 'Fantasy, illusion, and too many choices clouding reality. Wish-fulfillment without grounded action.', rev: 'Clarity emerging from confusion, decisive action after deliberation.' },
    8:  { up: 'Walking away from what no longer serves you in search of something more meaningful.', rev: 'Fear of moving on, returning to what you outgrew, or staying for the wrong reasons.' },
    9:  { up: 'The wish card. Deep satisfaction, contentment, and wishes fulfilled. Emotional and material pleasure.', rev: 'Overindulgence, dissatisfaction despite plenty, or wishes that bring unexpected consequences.' },
    10: { up: 'Emotional fulfillment, harmony, and lasting happiness with family and loved ones. A blessed home.', rev: 'Dysfunction beneath the surface, broken family bonds, or happiness that feels forced.' },
    11: { up: 'Intuitive messages, emotional sensitivity, and an openness to creative and psychic impressions.', rev: 'Emotional immaturity, moodiness, and an overactive imagination mistaken for intuition.' },
    12: { up: 'Romantic pursuit, idealism, and the passionate quest for the perfect love or vision.', rev: 'Moodiness, unrealistic expectations, and romantic gestures that drift into manipulation.' },
    13: { up: 'Profound empathy, psychic gifts, and emotional wisdom that flows from deep inner knowing.', rev: 'Emotional manipulation, martyrdom, and using vulnerability as a tool for control.' },
    14: { up: 'Emotional mastery, diplomatic wisdom, and a calm authority rooted in genuine compassion.', rev: 'Moodiness, manipulation, and using emotional intelligence to exploit others.' },
  },
  swords: {
    1:  { up: 'Mental clarity, a breakthrough, and the sword of truth cutting through confusion to reveal the way forward.', rev: 'Confusion, cruelty, and a sharp intellect turned destructively inward or outward.' },
    2:  { up: 'A stalemate or difficult choice that requires careful deliberation. Balanced tension seeking resolution.', rev: 'The stalemate breaks, often painfully. Indecision finally forced to a conclusion.' },
    3:  { up: 'Heartbreak, grief, and the pain of loss. Three swords pierce the heart — truth that hurts is still truth.', rev: 'Recovery from pain, releasing grief, and the slow return of hope after heartbreak.' },
    4:  { up: 'Rest, recuperation, and the wisdom of strategic retreat. A peaceful pause before the next challenge.', rev: 'Restlessness, inability to rest, and anxiety preventing necessary recovery.' },
    5:  { up: 'Conflict, defeat, and the hollow taste of a victory won at too high a cost. Choose your battles.', rev: 'Reconciliation, moving past conflict, or acknowledging that no one truly won.' },
    6:  { up: 'Transition, moving on, and leaving troubled waters behind. A calmer future lies ahead.', rev: 'Resistance to necessary change, unresolved baggage, or a journey delayed.' },
    7:  { up: 'Strategy, cunning, and the lone wolf approach. Tactical thinking, but at risk of deception.', rev: 'Confession, returning what was taken, and the consequences of past deceptions catching up.' },
    8:  { up: 'Restriction, self-imprisonment, and the belief that you have no options. The blindfold is self-imposed.', rev: 'Breaking free from limiting beliefs and seeing the escape route that was always there.' },
    9:  { up: 'Anxiety, nightmares, and the suffering that comes from dwelling on worst-case scenarios in the dark.', rev: 'Coming out of despair, inner work healing anxiety, and finding that fears were exaggerated.' },
    10: { up: 'A painful ending, betrayal, or the lowest point of a cycle. Rock bottom — but only one direction remains.', rev: 'Recovery begins; the worst is over and a slow healing process can now commence.' },
    11: { up: 'New ideas, curiosity, and the sharp mind of a student eager to learn and explore every angle.', rev: 'Deception, gossip, and sharp words used carelessly without regard for consequences.' },
    12: { up: 'Decisive intellectual action, charged forward momentum, and the pursuit of truth at any cost.', rev: 'Aggression, rushing into conflict, and a sharp tongue that cuts deeper than intended.' },
    13: { up: 'Clear-minded independence, direct communication, and the courage to speak an uncomfortable truth.', rev: 'Coldness, cruelty, and the intellect weaponised against those in a vulnerable position.' },
    14: { up: 'Intellectual authority, clear judgment, and the ability to make difficult decisions with impartiality.', rev: 'Tyranny, abuse of power, and a ruthless intelligence serving selfish ends.' },
  },
  pentacles: {
    1:  { up: 'Manifestation, a financial gift, or the seed of a prosperous new venture planted in fertile ground.', rev: 'A lost opportunity, poor financial planning, or a gift misused before it can grow.' },
    2:  { up: 'Balance, adaptability, and the skill of keeping multiple priorities in the air at once. Juggle with grace.', rev: 'Disorganisation, financial stress, and the collapse of a precarious balance.' },
    3:  { up: 'Teamwork, skilled craftsmanship, and the satisfaction of building something of lasting quality together.', rev: 'Poor collaboration, shoddy work, and a team pulling in different directions.' },
    4:  { up: 'Security, financial prudence, and the stability that comes from holding tightly to what you have earned.', rev: 'Financial loss through greed, excessive hoarding, or losing what you refused to share.' },
    5:  { up: 'Financial hardship, isolation, and the cold outside a warmth you feel excluded from. Help is near.', rev: 'Recovery begins; the worst of the material hardship is passing and support is found.' },
    6:  { up: 'Generosity, balanced giving and receiving, and the flow of resources moving where they are needed.', rev: 'Strings attached to generosity, power imbalances in charity, or debts used as control.' },
    7:  { up: 'Patient assessment of your harvest; you are halfway there. Pause to measure progress before continuing.', rev: 'Impatience, giving up before the harvest, and poor returns on sustained effort.' },
    8:  { up: 'Diligent skill-building, dedication to craft, and the quiet satisfaction of mastery through repetition.', rev: 'Lack of focus, cutting corners, and the gap between ambition and commitment to practice.' },
    9:  { up: 'Abundance, hard-won luxury, and the graceful self-sufficiency of someone who has earned their comfort.', rev: 'Overindulgence, superficiality, and luxury that masks inner emptiness.' },
    10: { up: 'Legacy, long-term wealth, and the deep fulfillment of building something that will outlast you.', rev: 'Financial failure, family conflict over resources, or a legacy left in ruin.' },
    11: { up: 'A practical student of abundance, beginning to understand the material world through careful observation.', rev: 'Procrastination, materialism without substance, and getting lost in the pursuit of things.' },
    12: { up: 'Methodical, reliable, and patient. Progress is slow but steady; results are built to last.', rev: 'Stubbornness, tunnel vision, and a refusal to adapt even when the situation demands it.' },
    13: { up: 'Nurturing abundance, practical wisdom, and the grounded generosity of someone connected to the earth.', rev: 'Financial insecurity, smothering nurture, and a practical nature curdled into materialism.' },
    14: { up: 'Established wealth, financial authority, and the wisdom to steward resources for lasting prosperity.', rev: 'Greed, corruption, and the hoarding of power and money at the expense of others.' },
  },
};

const SUIT_LABEL = {
  wands:     { fr: 'Bâton',  en: 'Wands' },
  cups:      { fr: 'Coupe',  en: 'Cups' },
  swords:    { fr: 'Épée',   en: 'Swords' },
  pentacles: { fr: 'Denier', en: 'Pentacles' },
};

const RANK_FR = {
  1: 'As', 2: 'Deux', 3: 'Trois', 4: 'Quatre', 5: 'Cinq',
  6: 'Six', 7: 'Sept', 8: 'Huit', 9: 'Neuf', 10: 'Dix',
  11: 'Valet', 12: 'Cavalier', 13: 'Reine', 14: 'Roi',
};

const RANK_EN = {
  1: 'Ace', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
  6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten',
  11: 'Page', 12: 'Knight', 13: 'Queen', 14: 'King',
};

const RANK_ID = {
  1: '01', 2: '02', 3: '03', 4: '04', 5: '05',
  6: '06', 7: '07', 8: '08', 9: '09', 10: '10',
  11: 'page', 12: 'knight', 13: 'queen', 14: 'king',
};

// Confirmed Wikimedia filenames for Jean Dodal minor arcana
const MINOR_WIKI = {
  'wands-knight': 'Jean Dodal Tarot batons Knight.jpg',
};

function makeMinorCard(suit, rank) {
  const suitId = RANK_ID[rank];
  const id = `${suit}-${suitId}`;
  const meanings = MINOR_MEANINGS[suit][rank];
  const suitLabelFr = SUIT_LABEL[suit].fr;
  const suitLabelEn = SUIT_LABEL[suit].en;
  const rankFr = RANK_FR[rank];
  const rankEn = RANK_EN[rank];

  let nameFr, nameEn;
  if (rank === 1) {
    nameFr = `As de ${suitLabelFr}s`;
    nameEn = `Ace of ${suitLabelEn}`;
  } else if (rank <= 10) {
    nameFr = `${rankFr} de ${suitLabelFr}s`;
    nameEn = `${rankEn} of ${suitLabelEn}`;
  } else {
    nameFr = `${rankFr} de ${suitLabelFr}`;
    nameEn = `${rankEn} of ${suitLabelEn}`;
  }

  const keywords = {
    wands: ['fire', 'action', 'creativity'],
    cups: ['water', 'emotion', 'intuition'],
    swords: ['air', 'intellect', 'truth'],
    pentacles: ['earth', 'material', 'stability'],
  }[suit];

  return {
    id,
    number: rank,
    name: nameFr,
    nameEn,
    arcana: 'minor',
    suit,
    romanNumeral: null,
    uprightMeaning: meanings.up,
    reversedMeaning: meanings.rev,
    keywords,
    wikimediaFile: MINOR_WIKI[id] || null,
  };
}

export const MINOR_ARCANA = ['wands', 'cups', 'swords', 'pentacles'].flatMap(suit =>
  Array.from({ length: 14 }, (_, i) => makeMinorCard(suit, i + 1))
);

const ALL_CARDS = [...MAJOR_ARCANA, ...MINOR_ARCANA];
export default ALL_CARDS;

// ─── Utility functions ────────────────────────────────────────────────────────

export function getCardById(id) {
  return ALL_CARDS.find(c => c.id === id) || null;
}

export function getMajorArcana() {
  return MAJOR_ARCANA;
}

export function getMinorArcana() {
  return MINOR_ARCANA;
}

export function getSuit(suit) {
  return MINOR_ARCANA.filter(c => c.suit === suit);
}

export function drawRandom(deck = ALL_CARDS) {
  const card = deck[Math.floor(Math.random() * deck.length)];
  const isReversed = Math.random() < 0.5;
  return { card, isReversed };
}

export function drawMultiple(count, deck = ALL_CARDS) {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(card => ({
    card,
    isReversed: Math.random() < 0.5,
  }));
}

// ─── Multilingual helpers ─────────────────────────────────────────────────────

// Returns card meaning in the requested language (Major Arcana: ES/FR/EN; Minor: EN only)
export function getMeaning(card, lang, isReversed) {
  if (card.meanings) {
    const m = card.meanings[lang] || card.meanings.en;
    return isReversed ? m.rev : m.up;
  }
  return isReversed ? card.reversedMeaning : card.uprightMeaning;
}

// Returns the card name in the requested language
export function getCardName(card, lang) {
  if (lang === 'es' && card.nameEs) return card.nameEs;
  if (lang === 'fr') return card.name;
  return card.nameEn;
}
