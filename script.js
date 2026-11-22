let currentLang = "ca";
let isCorrected = false;

const uiStrings = {
  ca: {
    btnLang: "🌐 Traduir al Castellà",
    title: "🔬 Test de Repàs: La Cèl·lula, les Lents i el Microscopi",
    subtitle: "Basat en els apunts de classe",
    b1Title: "Bloc 1: Preguntes tipus test",
    b1Desc: "Tria l'opció correcta per a cada pregunta.",
    b2Title: "Bloc 2: Parts del microscopi (Relacionar)",
    b2Desc: "Selecciona la funció que correspon a cada part del microscopi òptic.",
    selectDefault: "-- Tria la seva funció --",
    b3Title: "Bloc 3: Història i definicions curtes",
    b3Desc: "Completa els espais i respon amb les paraules clau dels apunts.",
    sq1Label: "1. Qui va inventar el microscopi òptic i en quin any (segons els apunts / real)?",
    sq1Placeholder: "Ex: Germans Janssen, 1590 (o 1950)",
    sq2Label: "2. Qui va descobrir les cèl·lules l'any 1665?",
    sq2Placeholder: "Nom i cognom",
    sq3Label: "3. Qui va observar microorganismes més tard?",
    sq3Placeholder: "Cognom del científic",
    sq4Label: "4. Què és el mitocondri i quina és la seva funció principal?",
    sq4Placeholder: "Ex: Central respiratòria, produeix energia (ATP)...",
    sq5Label: "5. De què està format el citoesquelet?",
    sq5Placeholder: "Ex: Conjunt de...",
    btnCheck: "Corregir Examen",
    btnReset: "Tornar a començar",
    resTitle: "📊 Resultats del Test",
    correctPrefix: "✓ Correcte! ",
    wrongPrefix: "✗ Incorrecte. ",
    shortOkPrefix: "✓ Molt bé! ",
    shortErrPrefix: "✗ Revisa-ho: ",
    correctAnsLabel: "Resposta correcta",
    microscopePart: "Part del microscopi",
    msg9: "Excel·lent, Sheila! Ho portes preparadíssim per treure un 10! 🌟",
    msg7: "Molt bona feina! Només cal repassar un parell de detalls. 👏",
    msg5: "Aprovat! Però repassa els punts que has fallat per assegurar bona nota. 💪",
    msg0: "Ànims! Torna a llegir els apunts i fes el test una altra vegada. 📚",
    noMistakes: "Cap errada! Tot perfecte.",
    mistakesHeading: (n) => `Punts per repassar (${n}):`
  },
  es: {
    btnLang: "🌐 Traducir al Catalán",
    title: "🔬 Test de Repaso: La Célula, las Lentes y el Microscopio",
    subtitle: "Basado en los apuntes de clase",
    b1Title: "Bloque 1: Preguntas tipo test",
    b1Desc: "Elige la opción correcta para cada pregunta.",
    b2Title: "Bloque 2: Partes del microscopio (Relacionar)",
    b2Desc: "Selecciona la función que corresponde a cada parte del microscopio óptico.",
    selectDefault: "-- Elige su función --",
    b3Title: "Bloque 3: Historia y definiciones cortas",
    b3Desc: "Completa los espacios y responde con las palabras clave de los apuntes.",
    sq1Label: "1. ¿Quién inventó el microscopio óptico y en qué año (según los apuntes / real)?",
    sq1Placeholder: "Ej: Hermanos Janssen, 1590 (o 1950)",
    sq2Label: "2. ¿Quién descubrió las células en el año 1665?",
    sq2Placeholder: "Nombre y apellido",
    sq3Label: "3. ¿Quién observó microorganismos más tarde?",
    sq3Placeholder: "Apellido del científico",
    sq4Label: "4. ¿Qué es la mitocondria y cuál es su función principal?",
    sq4Placeholder: "Ej: Central respiratoria, produce energía (ATP)...",
    sq5Label: "5. ¿De qué está formado el citoesqueleto?",
    sq5Placeholder: "Ej: Conjunto de...",
    btnCheck: "Corregir Examen",
    btnReset: "Volver a empezar",
    resTitle: "📊 Resultados del Test",
    correctPrefix: "✓ ¡Correcto! ",
    wrongPrefix: "✗ Incorrecto. ",
    shortOkPrefix: "✓ ¡Muy bien! ",
    shortErrPrefix: "✗ Repásalo: ",
    correctAnsLabel: "Respuesta correcta",
    microscopePart: "Parte del microscopio",
    msg9: "¡Excelente, Sheila! ¡Lo llevas preparadísimo para sacar un 10! 🌟",
    msg7: "¡Muy buen trabajo! Solo hay que repasar un par de detalles. 👏",
    msg5: "¡Aprobado! Pero repasa los puntos que has fallado para asegurar buena nota. 💪",
    msg0: "¡Ánimo! Vuelve a leer los apuntes y haz el test otra vez. 📚",
    noMistakes: "¡Ningún fallo! Todo perfecto.",
    mistakesHeading: (n) => `Puntos para repasar (${n}):`
  }
};

const quizData = [
  {
    q: {
      ca: "1. Quines són les tres funcions vitals que compleix la cèl·lula?",
      es: "1. ¿Cuáles son las tres funciones vitales que cumple la célula?"
    },
    options: {
      ca: [
        "Respirar, créixer i dividir-se",
        "Alimentar-se, relacionar-se i reproduir-se",
        "Protegir-se, moure's i sintetitzar proteïnes"
      ],
      es: [
        "Respirar, crecer y dividirse",
        "Alimentarse, relacionarse y reproducirse",
        "Protegerse, moverse y sintetizar proteínas"
      ]
    },
    answer: 1,
    explanation: {
      ca: "Tota cèl·lula s'alimenta, es relaciona i es reprodueix.",
      es: "Toda célula se alimenta, se relaciona y se reproduce."
    }
  },
  {
    q: {
      ca: "2. Quines són les 4 parts bàsiques d'una cèl·lula?",
      es: "2. ¿Cuáles son las 4 partes básicas de una célula?"
    },
    options: {
      ca: [
        "Membrana cel·lular, citoplasma, orgànuls i nucli",
        "Paret cel·lular, cloroplast, vacúol i flagel",
        "Ocular, platina, revòlver i diafragma"
      ],
      es: [
        "Membrana celular, citoplasma, orgánulos y núcleo",
        "Pared celular, cloroplasto, vacuola y flagelo",
        "Ocular, platina, revólver y diafragma"
      ]
    },
    answer: 0,
    explanation: {
      ca: "Les 4 parts generals són: membrana cel·lular (o plasmàtica), citoplasma, orgànuls i nucli.",
      es: "Las 4 partes generales son: membrana celular (o plasmática), citoplasma, orgánulos y núcleo."
    }
  },
  {
    q: {
      ca: "3. Quina característica principal diferencia la cèl·lula procariota de l'eucariota?",
      es: "3. ¿Qué característica principal diferencia la célula procariota de la eucariota?"
    },
    options: {
      ca: [
        "La procariota té molts orgànuls i l'eucariota només en té un",
        "La procariota NO té membrana nuclear (material genètic dispers) i l'eucariota SÍ en té",
        "La procariota és exclusiva dels animals i l'eucariota dels bacteris"
      ],
      es: [
        "La procariota tiene muchos orgánulos y la eucariota solo tiene uno",
        "La procariota NO tiene membrana nuclear (material genético disperso) y la eucariota SÍ tiene",
        "La procariota es exclusiva de los animales y la eucariota de las bacterias"
      ]
    },
    answer: 1,
    explanation: {
      ca: "Procariota significa 'nucli primitiu': no té membrana que envolti l'ADN.",
      es: "Procariota significa 'núcleo primitivo': no tiene membrana que envuelva el ADN."
    }
  },
  {
    q: {
      ca: "4. Quin és l'únic orgànul que conté una cèl·lula procariota?",
      es: "4. ¿Cuál es el único orgánulo que contiene una célula procariota?"
    },
    options: {
      ca: ["El mitocondri", "El cloroplast", "El ribosoma"],
      es: ["La mitocondria", "El cloroplasto", "El ribosoma"]
    },
    answer: 2,
    explanation: {
      ca: "La cèl·lula procariota (exclusiva dels bacteris) només conté ribosomes.",
      es: "La célula procariota (exclusiva de las bacterias) solo contiene ribosomas."
    }
  },
  {
    q: {
      ca: "5. Quina funció tenen els pilis en la cèl·lula procariota?",
      es: "5. ¿Qué función tienen los pilis en la célula procariota?"
    },
    options: {
      ca: [
        "Serveixen per al moviment, com una cua",
        "Serveixen per fixar-se a la cèl·lula (semblen pèls)",
        "S'encarreguen de la respiració cel·lular"
      ],
      es: [
        "Sirven para el movimiento, como una cola",
        "Sirven para fijarse a la célula (parecen pelos)",
        "Se encargan de la respiración celular"
      ]
    },
    answer: 1,
    explanation: {
      ca: "El flagel serveix per al moviment i els pilis serveixen per fixar-se.",
      es: "El flagelo sirve para el movimiento y los pilis sirven para fijarse."
    }
  },
  {
    q: {
      ca: "6. Quin orgànul s'encarrega de sintetitzar proteïnes?",
      es: "6. ¿Qué orgánulo se encarga de sintetizar proteínas?"
    },
    options: {
      ca: [
        "Els ribosomes",
        "El reticle endoplasmàtic llis (REL)",
        "Els lisosomes"
      ],
      es: [
        "Los ribosomas",
        "El retículo endoplasmático liso (REL)",
        "Los lisosomas"
      ]
    },
    answer: 0,
    explanation: {
      ca: "Els ribosomes estan formats per dues subunitats amb ARN al mig i sintetitzen proteïnes.",
      es: "Los ribosomas están formados por dos subunidades con ARN en medio y sintetizan proteínas."
    }
  },
  {
    q: {
      ca: "7. Quina diferència hi ha entre el Reticle Endoplasmàtic Rugós (RER) i el Llis (REL)?",
      es: "7. ¿Qué diferencia hay entre el Retículo Endoplasmático Rugoso (RER) y el Liso (REL)?"
    },
    options: {
      ca: [
        "El RER sintetitza sucres i el REL emmagatzema aigua",
        "El RER té ribosomes i emmagatzema proteïnes, mentre que el REL sintetitza lípids",
        "El RER destrueix substàncies tòxiques i el REL dona forma a la cèl·lula"
      ],
      es: [
        "El RER sintetiza azúcares y el REL almacena agua",
        "El RER tiene ribosomas y almacena proteínas, mientras que el REL sintetiza lípidos",
        "El RER destruye sustancias tóxicas y el REL da forma a la célula"
      ]
    },
    answer: 1,
    explanation: {
      ca: "RER = té ribosomes i emmagatzema proteïnes. REL = sintetitza lípids.",
      es: "RER = tiene ribosomas y almacena proteínas. REL = sintetiza lípidos."
    }
  },
  {
    q: {
      ca: "8. Quina és la funció de l'Aparell de Golgi?",
      es: "8. ¿Cuál es la función del Aparato de Golgi?"
    },
    options: {
      ca: [
        "Produir energia en forma d'ATP",
        "Empaquetar i distribuir lípids i proteïnes, i sintetitzar sucres",
        "Contenir el material genètic (ADN)"
      ],
      es: [
        "Producir energía en forma de ATP",
        "Empaquetar y distribuir lípidos y proteínas, y sintetizar azúcares",
        "Contener el material genético (ADN)"
      ]
    },
    answer: 1,
    explanation: {
      ca: "L'Aparell de Golgi són sacs apilats que empaqueten/distribueixen lípids i proteïnes, i sintetitzen sucres.",
      es: "El Aparato de Golgi son sacos apilados que empaquetan/distribuyen lípidos y proteínas, y sintetizan azúcares."
    }
  },
  {
    q: {
      ca: "9. Quina funció tenen els lisosomes?",
      es: "9. ¿Qué función tienen los lisosomas?"
    },
    options: {
      ca: [
        "Contenen enzims digestius per destruir substàncies tòxiques",
        "Realitzen la fotosíntesi",
        "Connecten l'ocular amb els objectius"
      ],
      es: [
        "Contienen enzimas digestivas para destruir sustancias tóxicas",
        "Realizan la fotosíntesis",
        "Conectan el ocular con los objetivos"
      ]
    },
    answer: 0,
    explanation: {
      ca: "Els lisosomes són vesícules amb enzims digestius per eliminar substàncies tòxiques.",
      es: "Los lisosomas son vesículas con enzimas digestivas para eliminar sustancias tóxicas."
    }
  },
  {
    q: {
      ca: "10. Com es diferencien les vacúols en les cèl·lules eucariotes?",
      es: "10. ¿Cómo se diferencian las vacuolas en las células eucariotas?"
    },
    options: {
      ca: [
        "La vegetal té una sola vacúol molt gran amb aigua, i l'animal té moltes vacúols petites",
        "L'animal té una vacúol gegant i la vegetal no en té cap",
        "Totes dues tenen exactament el mateix nombre i mida de vacúols"
      ],
      es: [
        "La vegetal tiene una sola vacuola muy grande con agua, y la animal tiene muchas vacuolas pequeñas",
        "La animal tiene una vacuola gigante y la vegetal no tiene ninguna",
        "Ambas tienen exactamente el mismo número y tamaño de vacuolas"
      ]
    },
    answer: 0,
    explanation: {
      ca: "Vegetal: 1 vacúol molt gran amb aigua. Animal: moltes vacúols petites per a aigua i rebuigs.",
      es: "Vegetal: 1 vacuola muy grande con agua. Animal: muchas vacuolas pequeñas para agua y desechos."
    }
  },
  {
    q: {
      ca: "11. Quines dues estructures són exclusives de la cèl·lula eucariota vegetal?",
      es: "11. ¿Qué dos estructuras son exclusivas de la célula eucariota vegetal?"
    },
    options: {
      ca: [
        "El citoesquelet i els lisosomes",
        "La paret cel·lular i els cloroplasts",
        "Els mitocondris i la membrana plasmàtica"
      ],
      es: [
        "El citoesqueleto y los lisosomas",
        "La pared celular y los cloroplastos",
        "Las mitocondrias y la membrana plasmática"
      ]
    },
    answer: 1,
    explanation: {
      ca: "Només la cèl·lula vegetal té paret cel·lular (dona rigidesa i defensa) i cloroplasts.",
      es: "Solo la célula vegetal tiene pared celular (da rigidez y defensa) y cloroplastos."
    }
  },
  {
    q: {
      ca: "12. Què passa a l'interior dels cloroplasts?",
      es: "12. ¿Qué ocurre en el interior de los cloroplastos?"
    },
    options: {
      ca: [
        "La respiració cel·lular",
        "La digestió de substàncies tòxiques",
        "La fotosíntesi (gràcies a la clorofil·la que hi ha dins la grana)"
      ],
      es: [
        "La respiración celular",
        "La digestión de sustancias tóxicas",
        "La fotosíntesis (gracias a la clorofila que hay dentro de la grana)"
      ]
    },
    answer: 2,
    explanation: {
      ca: "Dins la doble membrana dels cloroplasts hi ha la grana amb clorofil·la, on es fa la fotosíntesi.",
      es: "Dentro de la doble membrana de los cloroplastos está la grana con clorofila, donde se hace la fotosíntesis."
    }
  },
  {
    q: {
      ca: "13. Com és una lent divergent i què fa amb els ratllos de llum?",
      es: "13. ¿Cómo es una lente divergente y qué hace con los rayos de luz?"
    },
    options: {
      ca: [
        "És gruixuda al centre i junta els ratllos",
        "És estreta pel mig i ampla pels extrems, i separa els ratllos de llum",
        "És totalment plana i no desvia la llum"
      ],
      es: [
        "Es gruesa en el centro y junta los rayos",
        "Es estrecha por el medio y ancha por los extremos, y separa los rayos de luz",
        "Es totalmente plana y no desvía la luz"
      ]
    },
    answer: 1,
    explanation: {
      ca: "Les lents divergents són estretes pel mig, amples pels extrems i separen els ratllos.",
      es: "Las lentes divergentes son estrechas por el medio, anchas por los extremos y separan los rayos."
    }
  },
  {
    q: {
      ca: "14. Quina anomalia fa que no vegis bé de prop perquè la imatge es forma darrere (fora) de la retina?",
      es: "14. ¿Qué anomalía hace que no veas bien de cerca porque la imagen se forma detrás (fuera) de la retina?"
    },
    options: {
      ca: ["La miopia", "La hipermetropia", "L'astigmatisme"],
      es: ["La miopía", "La hipermetropía", "El astigmatismo"]
    },
    answer: 1,
    explanation: {
      ca: "La hipermetropia impedeix veure-hi bé de prop i es corregeix amb lents convergents.",
      es: "La hipermetropía impide ver bien de cerca y se corrige con lentes convergentes."
    }
  },
  {
    q: {
      ca: "15. Com es corregeix la miopia (no veure-hi bé de lluny)?",
      es: "15. ¿Cómo se corrige la miopía (no ver bien de lejos)?"
    },
    options: {
      ca: [
        "Amb ulleres de lents convergents",
        "Amb ulleres de lents divergents",
        "No es pot corregir amb lents"
      ],
      es: [
        "Con gafas de lentes convergentes",
        "Con gafas de lentes divergentes",
        "No se puede corregir con lentes"
      ]
    },
    answer: 1,
    explanation: {
      ca: "A la miopia la imatge es forma davant de la retina i es corregeix amb lents divergents.",
      es: "En la miopía la imagen se forma delante de la retina y se corrige con lentes divergentes."
    }
  },
  {
    q: {
      ca: "16. Si mirem pel microscopi amb una lent ocular de x10 i un objectiu de x40, quants augments té la imatge?",
      es: "16. Si miramos por el microscopio con una lente ocular de x10 y un objetivo de x40, ¿cuántos aumentos tiene la imagen?"
    },
    options: {
      ca: ["50x", "400x", "4000x"],
      es: ["50x", "400x", "4000x"]
    },
    answer: 1,
    explanation: {
      ca: "Es multipliquen els augments de l'ocular pels de l'objectiu: 10 × 40 = 400x.",
      es: "Se multiplican los aumentos del ocular por los del objetivo: 10 × 40 = 400x."
    }
  }
];

const matchingData = [
  { id: "m1", term: { ca: "Revòlver", es: "Revólver" }, answerIdx: 2 },
  { id: "m2", term: { ca: "Platina", es: "Platina" }, answerIdx: 4 },
  { id: "m3", term: { ca: "Diafragma", es: "Diafragma" }, answerIdx: 0 },
  { id: "m4", term: { ca: "Tub òptic", es: "Tubo óptico" }, answerIdx: 3 },
  { id: "m5", term: { ca: "Braç", es: "Brazo" }, answerIdx: 1 },
  { id: "m6", term: { ca: "Cargol macromètric", es: "Tornillo macrométrico" }, answerIdx: 5 },
  { id: "m7", term: { ca: "Cargol micromètric", es: "Tornillo micrométrico" }, answerIdx: 6 }
];

const matchingOptions = {
  ca: [
    "Regula la quantitat de llum",
    "Serveix per subjectar el microscopi",
    "Permet canviar els objectius",
    "Connecta l'ocular amb els objectius",
    "És on es col·loca la mostra",
    "Enfoca la imatge ràpidament",
    "Ajusta l'enfocament amb precisió"
  ],
  es: [
    "Regula la cantidad de luz",
    "Sirve para sujetar el microscopio",
    "Permite cambiar los objetivos",
    "Conecta el ocular con los objetivos",
    "Es donde se coloca la muestra",
    "Enfoca la imagen rápidamente",
    "Ajusta el enfoque con precisión"
  ]
};

const shortChecks = [
  {
    id: "q-janssen",
    label: {
      ca: "1. Història: Germans Janssen (1590 / 1950 als apunts)",
      es: "1. Historia: Hermanos Janssen (1590 / 1950 en los apuntes)"
    },
    check: (val) => val.includes("janssen") && (val.includes("1590") || val.includes("1950")),
    correctText: {
      ca: "Els germans Janssen (any 1590, encara que als apunts hi ha escrit 1950).",
      es: "Los hermanos Janssen (año 1590, aunque en los apuntes pone 1950)."
    }
  },
  {
    id: "q-hooke",
    label: {
      ca: "2. Història: Robert Hooke",
      es: "2. Historia: Robert Hooke"
    },
    check: (val) => val.includes("hooke"),
    correctText: {
      ca: "Robert Hooke va descobrir les cèl·lules l'any 1665.",
      es: "Robert Hooke descubrió las células en el año 1665."
    }
  },
  {
    id: "q-leeuwenhoek",
    label: {
      ca: "3. Història: Leeuwenhoek",
      es: "3. Historia: Leeuwenhoek"
    },
    check: (val) => val.includes("leeuwenhoek"),
    correctText: {
      ca: "Leeuwenhoek va observar microorganismes.",
      es: "Leeuwenhoek observó microorganismos."
    }
  },
  {
    id: "q-mitocondri",
    label: {
      ca: "4. Definició de mitocondri",
      es: "4. Definición de mitocondria"
    },
    check: (val) => val.includes("respirat") || val.includes("energia") || val.includes("atp"),
    correctText: {
      ca: "És la central respiratòria de la cèl·lula i produeix energia (agafa O2 i fa ATP). Té doble membrana.",
      es: "Es la central respiratoria de la célula y produce energía (coge O2 y fabrica ATP). Tiene doble membrana."
    }
  },
  {
    id: "q-citoesquelet",
    label: {
      ca: "5. Definició de citoesquelet",
      es: "5. Definición de citoesqueleto"
    },
    check: (val) => val.includes("filament") || val.includes("microtubul"),
    correctText: {
      ca: "És un conjunt de filaments i microtúbuls.",
      es: "Es un conjunto de filamentos y microtúbulos."
    }
  }
];

function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function applyStaticTranslations() {
  const dict = uiStrings[currentLang];
  document.documentElement.lang = currentLang;
  document.getElementById("btn-lang").textContent = dict.btnLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });
}

function renderQuiz(savedSelections = {}) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizData.forEach((item, index) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = item.q[currentLang];
    block.appendChild(title);

    const optionsList = document.createElement("div");
    optionsList.className = "options-list";

    item.options[currentLang].forEach((opt, optIdx) => {
      const label = document.createElement("label");
      label.className = "option-label";
      label.id = `q${index}-opt${optIdx}`;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${index}`;
      radio.value = optIdx;
      if (savedSelections[index] === optIdx) {
        radio.checked = true;
      }
      radio.addEventListener("change", updateProgress);

      const span = document.createElement("span");
      span.textContent = opt;

      label.appendChild(radio);
      label.appendChild(span);
      optionsList.appendChild(label);
    });

    const exp = document.createElement("div");
    exp.className = "explanation";
    exp.id = `exp-${index}`;
    exp.textContent = item.explanation[currentLang];

    block.appendChild(optionsList);
    block.appendChild(exp);
    container.appendChild(block);
  });
}

function renderMatching(savedMatching = {}) {
  const container = document.getElementById("matching-container");
  container.innerHTML = "";
  const dict = uiStrings[currentLang];

  matchingData.forEach((item) => {
    const row = document.createElement("div");
    row.className = "matching-row";

    const term = document.createElement("div");
    term.className = "matching-term";
    term.textContent = item.term[currentLang];

    const select = document.createElement("select");
    select.className = "matching-select";
    select.id = item.id;
    select.addEventListener("change", updateProgress);

    const defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.textContent = dict.selectDefault;
    select.appendChild(defaultOpt);

    matchingOptions[currentLang].forEach((optText, idx) => {
      const opt = document.createElement("option");
      opt.value = String(idx);
      opt.textContent = optText;
      if (savedMatching[item.id] === String(idx)) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    row.appendChild(term);
    row.appendChild(select);
    container.appendChild(row);
  });
}

function updateProgress() {
  const total = quizData.length + matchingData.length + shortChecks.length;
  let answered = 0;

  quizData.forEach((_, idx) => {
    if (document.querySelector(`input[name="q${idx}"]:checked`)) answered++;
  });

  matchingData.forEach((item) => {
    if (document.getElementById(item.id).value !== "") answered++;
  });

  shortChecks.forEach((sc) => {
    if (document.getElementById(sc.id).value.trim() !== "") answered++;
  });

  const pct = Math.round((answered / total) * 100);
  document.getElementById("progress-bar").style.width = `${pct}%`;
}

function checkExam(shouldScroll = true) {
  isCorrected = true;
  let score = 0;
  const total = quizData.length + matchingData.length + shortChecks.length;
  const mistakes = [];
  const dict = uiStrings[currentLang];

  // 1. Check MCQ
  quizData.forEach((item, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    const exp = document.getElementById(`exp-${idx}`);

    item.options[currentLang].forEach((_, oIdx) => {
      const lbl = document.getElementById(`q${idx}-opt${oIdx}`);
      lbl.classList.remove("correct", "wrong");
      if (oIdx === item.answer) {
        lbl.classList.add("correct");
      }
    });

    if (selected && parseInt(selected.value, 10) === item.answer) {
      score++;
      exp.className = "explanation show ok";
      exp.textContent = dict.correctPrefix + item.explanation[currentLang];
    } else {
      if (selected) {
        document.getElementById(`q${idx}-opt${selected.value}`).classList.add("wrong");
      }
      exp.className = "explanation show err";
      exp.textContent = dict.wrongPrefix + item.explanation[currentLang];
      mistakes.push(`${item.q[currentLang]} → ${dict.correctAnsLabel}: ${item.options[currentLang][item.answer]}`);
    }
  });

  // 2. Check Matching
  matchingData.forEach((item) => {
    const sel = document.getElementById(item.id);
    sel.classList.remove("correct", "wrong");
    if (sel.value !== "" && parseInt(sel.value, 10) === item.answerIdx) {
      score++;
      sel.classList.add("correct");
    } else {
      sel.classList.add("wrong");
      mistakes.push(`${dict.microscopePart} (${item.term[currentLang]}) → ${matchingOptions[currentLang][item.answerIdx]}`);
    }
  });

  // 3. Check Short Questions
  shortChecks.forEach((sc) => {
    const input = document.getElementById(sc.id);
    const fb = document.getElementById(`fb-${sc.id.replace("q-", "")}`);
    const normVal = normalizeText(input.value);

    if (sc.check(normVal)) {
      score++;
      fb.className = "feedback show ok";
      fb.textContent = dict.shortOkPrefix + sc.correctText[currentLang];
    } else {
      fb.className = "feedback show err";
      fb.textContent = dict.shortErrPrefix + sc.correctText[currentLang];
      mistakes.push(`${sc.label[currentLang]} → ${sc.correctText[currentLang]}`);
    }
  });

  // Display Results
  const finalGrade = ((score / total) * 10).toFixed(1);
  const resultsSec = document.getElementById("results-section");
  resultsSec.classList.remove("hidden");
  document.getElementById("score-number").textContent = finalGrade;

  const msg = document.getElementById("score-message");
  if (finalGrade >= 9) {
    msg.textContent = dict.msg9;
  } else if (finalGrade >= 7) {
    msg.textContent = dict.msg7;
  } else if (finalGrade >= 5) {
    msg.textContent = dict.msg5;
  } else {
    msg.textContent = dict.msg0;
  }

  const mistakesDiv = document.getElementById("mistakes-summary");
  if (mistakes.length === 0) {
    mistakesDiv.innerHTML = `<p style='color:#15803d;font-weight:600;text-align:center;'>${dict.noMistakes}</p>`;
  } else {
    let html = `<h3>${dict.mistakesHeading(mistakes.length)}</h3><ul>`;
    mistakes.forEach((m) => {
      html += `<li>${m}</li>`;
    });
    html += "</ul>";
    mistakesDiv.innerHTML = html;
  }

  if (shouldScroll) {
    resultsSec.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleLanguage() {
  // Save current user selections before re-rendering
  const savedSelections = {};
  quizData.forEach((_, idx) => {
    const checked = document.querySelector(`input[name="q${idx}"]:checked`);
    if (checked) savedSelections[idx] = parseInt(checked.value, 10);
  });

  const savedMatching = {};
  matchingData.forEach((item) => {
    const val = document.getElementById(item.id).value;
    if (val !== "") savedMatching[item.id] = val;
  });

  currentLang = currentLang === "ca" ? "es" : "ca";

  applyStaticTranslations();
  renderQuiz(savedSelections);
  renderMatching(savedMatching);

  if (isCorrected) {
    checkExam(false);
  }
}

function resetExam() {
  isCorrected = false;
  renderQuiz();
  renderMatching();
  shortChecks.forEach((sc) => {
    document.getElementById(sc.id).value = "";
    const fb = document.getElementById(`fb-${sc.id.replace("q-", "")}`);
    fb.className = "feedback";
    fb.textContent = "";
  });
  document.getElementById("results-section").classList.add("hidden");
  document.getElementById("progress-bar").style.width = "0%";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  applyStaticTranslations();
  renderQuiz();
  renderMatching();
  shortChecks.forEach((sc) => {
    document.getElementById(sc.id).addEventListener("input", updateProgress);
  });
  document.getElementById("btn-lang").addEventListener("click", toggleLanguage);
  document.getElementById("btn-check").addEventListener("click", () => checkExam(true));
  document.getElementById("btn-reset").addEventListener("click", resetExam);
});
