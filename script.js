const quizData = [
  {
    q: "1. Quines són les tres funcions vitals que compleix la cèl·lula?",
    options: [
      "Respirar, créixer i dividir-se",
      "Alimentar-se, relacionar-se i reproduir-se",
      "Protegir-se, moure's i sintetitzar proteïnes"
    ],
    answer: 1,
    explanation: "Tota cèl·lula s'alimenta, es relaciona i es reprodueix."
  },
  {
    q: "2. Quines són les 4 parts bàsiques d'una cèl·lula?",
    options: [
      "Membrana cel·lular, citoplasma, orgànuls i nucli",
      "Paret cel·lular, cloroplast, vacúol i flagel",
      "Ocular, platina, revòlver i diafragma"
    ],
    answer: 0,
    explanation: "Les 4 parts generals són: membrana cel·lular (o plasmàtica), citoplasma, orgànuls i nucli."
  },
  {
    q: "3. Quina característica principal diferencia la cèl·lula procariota de l'eucariota?",
    options: [
      "La procariota té molts orgànuls i l'eucariota només en té un",
      "La procariota NO té membrana nuclear (material genètic dispers) i l'eucariota SÍ en té",
      "La procariota és exclusiva dels animals i l'eucariota dels bacteris"
    ],
    answer: 1,
    explanation: "Procariota significa 'nucli primitiu': no té membrana que envolti l'ADN."
  },
  {
    q: "4. Quin és l'únic orgànul que conté una cèl·lula procariota?",
    options: [
      "El mitocondri",
      "El cloroplast",
      "El ribosoma"
    ],
    answer: 2,
    explanation: "La cèl·lula procariota (exclusiva dels bacteris) només conté ribosomes."
  },
  {
    q: "5. Quina funció tenen els pilis en la cèl·lula procariota?",
    options: [
      "Serveixen per al moviment, com una cua",
      "Serveixen per fixar-se a la cèl·lula (semblen pèls)",
      "S'encarreguen de la respiració cel·lular"
    ],
    answer: 1,
    explanation: "El flagel serveix per al moviment i els pilis serveixen per fixar-se."
  },
  {
    q: "6. Quin orgànul s'encarrega de sintetitzar proteïnes?",
    options: [
      "Els ribosomes",
      "El reticle endoplasmàtic llis (REL)",
      "Els lisosomes"
    ],
    answer: 0,
    explanation: "Els ribosomes estan formats per dues subunitats amb ARN al mig i sintetitzen proteïnes."
  },
  {
    q: "7. Quina diferència hi ha entre el Reticle Endoplasmàtic Rugós (RER) i el Llis (REL)?",
    options: [
      "El RER sintetitza sucres i el REL emmagatzema aigua",
      "El RER té ribosomes i emmagatzema proteïnes, mentre que el REL sintetitza lípids",
      "El RER destrueix substàncies tòxiques i el REL dona forma a la cèl·lula"
    ],
    answer: 1,
    explanation: "RER = té ribosomes i emmagatzema proteïnes. REL = sintetitza lípids."
  },
  {
    q: "8. Quina és la funció de l'Aparell de Golgi?",
    options: [
      "Produir energia en forma d'ATP",
      "Empaquetar i distribuir lípids i proteïnes, i sintetitzar sucres",
      "Contenir el material genètic (ADN)"
    ],
    answer: 1,
    explanation: "L'Aparell de Golgi són sacs apilats que empaqueten/distribueixen lípids i proteïnes, i sintetitzen sucres."
  },
  {
    q: "9. Quina funció tenen els lisosomes?",
    options: [
      "Contenen enzims digestius per destruir substàncies tòxiques",
      "Realitzen la fotosíntesi",
      "Connecten l'ocular amb els objectius"
    ],
    answer: 0,
    explanation: "Els lisosomes són vesícules amb enzims digestius per eliminar substàncies tòxiques."
  },
  {
    q: "10. Com es diferencien les vacúols en les cèl·lules eucariotes?",
    options: [
      "La vegetal té una sola vacúol molt gran amb aigua, i l'animal té moltes vacúols petites",
      "L'animal té una vacúol gegant i la vegetal no en té cap",
      "Totes dues tenen exactament el mateix nombre i mida de vacúols"
    ],
    answer: 0,
    explanation: "Vegetal: 1 vacúol molt gran amb aigua. Animal: moltes vacúols petites per a aigua i rebuigs."
  },
  {
    q: "11. Quines dues estructures són exclusives de la cèl·lula eucariota vegetal?",
    options: [
      "El citoesquelet i els lisosomes",
      "La paret cel·lular i els cloroplasts",
      "Els mitocondris i la membrana plasmàtica"
    ],
    answer: 1,
    explanation: "Només la cèl·lula vegetal té paret cel·lular (dona rigidesa i defensa) i cloroplasts."
  },
  {
    q: "12. Què passa a l'interior dels cloroplasts?",
    options: [
      "La respiració cel·lular",
      "La digestió de substàncies tòxiques",
      "La fotosíntesi (gràcies a la clorofil·la que hi ha dins la grana)"
    ],
    answer: 2,
    explanation: "Dins la doble membrana dels cloroplasts hi ha la grana amb clorofil·la, on es fa la fotosíntesi."
  },
  {
    q: "13. Com és una lent divergent i què fa amb els ratllos de llum?",
    options: [
      "És gruixuda al centre i junta els ratllos",
      "És estreta pel mig i ampla pels extrems, i separa els ratllos de llum",
      "És totalment plana i no desvia la llum"
    ],
    answer: 1,
    explanation: "Les lents divergents són estretes pel mig, amples pels extrems i separen els ratllos."
  },
  {
    q: "14. Quina anomalia fa que no vegis bé de prop perquè la imatge es forma darrere (fora) de la retina?",
    options: [
      "La miopia",
      "La hipermetropia",
      "L'astigmatisme"
    ],
    answer: 1,
    explanation: "La hipermetropia impedeix veure-hi bé de prop i es corregeix amb lents convergents."
  },
  {
    q: "15. Com es corregeix la miopia (no veure-hi bé de lluny)?",
    options: [
      "Amb ulleres de lents convergents",
      "Amb ulleres de lents divergents",
      "No es pot corregir amb lents"
    ],
    answer: 1,
    explanation: "A la miopia la imatge es forma davant de la retina i es corregeix amb lents divergents."
  },
  {
    q: "16. Si mirem pel microscopi amb una lent ocular de x10 i un objectiu de x40, quants augments té la imatge?",
    options: [
      "50x",
      "400x",
      "4000x"
    ],
    answer: 1,
    explanation: "Es multipliquen els augments de l'ocular pels de l'objectiu: 10 × 40 = 400x."
  }
];

const matchingData = [
  { id: "m1", term: "Revòlver", answer: "Permet canviar els objectius" },
  { id: "m2", term: "Platina", answer: "És on es col·loca la mostra" },
  { id: "m3", term: "Diafragma", answer: "Regula la quantitat de llum" },
  { id: "m4", term: "Tub òptic", answer: "Connecta l'ocular amb els objectius" },
  { id: "m5", term: "Braç", answer: "Serveix per subjectar el microscopi" },
  { id: "m6", term: "Cargol macromètric", answer: "Enfoca la imatge ràpidament" },
  { id: "m7", term: "Cargol micromètric", answer: "Ajusta l'enfocament amb precisió" }
];

const matchingOptions = [
  "Regula la quantitat de llum",
  "Serveix per subjectar el microscopi",
  "Permet canviar els objectius",
  "Connecta l'ocular amb els objectius",
  "És on es col·loca la mostra",
  "Enfoca la imatge ràpidament",
  "Ajusta l'enfocament amb precisió"
];

function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizData.forEach((item, index) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = item.q;
    block.appendChild(title);

    const optionsList = document.createElement("div");
    optionsList.className = "options-list";

    item.options.forEach((opt, optIdx) => {
      const label = document.createElement("label");
      label.className = "option-label";
      label.id = `q${index}-opt${optIdx}`;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${index}`;
      radio.value = optIdx;
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
    exp.textContent = item.explanation;

    block.appendChild(optionsList);
    block.appendChild(exp);
    container.appendChild(block);
  });
}

function renderMatching() {
  const container = document.getElementById("matching-container");
  container.innerHTML = "";

  matchingData.forEach((item) => {
    const row = document.createElement("div");
    row.className = "matching-row";

    const term = document.createElement("div");
    term.className = "matching-term";
    term.textContent = item.term;

    const select = document.createElement("select");
    select.className = "matching-select";
    select.id = item.id;
    select.addEventListener("change", updateProgress);

    const defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.textContent = "-- Tria la seva funció --";
    select.appendChild(defaultOpt);

    matchingOptions.forEach((optText) => {
      const opt = document.createElement("option");
      opt.value = optText;
      opt.textContent = optText;
      select.appendChild(opt);
    });

    row.appendChild(term);
    row.appendChild(select);
    container.appendChild(row);
  });
}

function updateProgress() {
  const total = quizData.length + matchingData.length + 5;
  let answered = 0;

  quizData.forEach((_, idx) => {
    if (document.querySelector(`input[name="q${idx}"]:checked`)) answered++;
  });

  matchingData.forEach((item) => {
    if (document.getElementById(item.id).value !== "") answered++;
  });

  ["q-janssen", "q-hooke", "q-leeuwenhoek", "q-mitocondri", "q-citoesquelet"].forEach((id) => {
    if (document.getElementById(id).value.trim() !== "") answered++;
  });

  const pct = Math.round((answered / total) * 100);
  document.getElementById("progress-bar").style.width = `${pct}%`;
}

function checkExam() {
  let score = 0;
  const total = quizData.length + matchingData.length + 5;
  const mistakes = [];

  // 1. Check MCQ
  quizData.forEach((item, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    const exp = document.getElementById(`exp-${idx}`);

    item.options.forEach((_, oIdx) => {
      const lbl = document.getElementById(`q${idx}-opt${oIdx}`);
      lbl.classList.remove("correct", "wrong");
      if (oIdx === item.answer) {
        lbl.classList.add("correct");
      }
    });

    if (selected && parseInt(selected.value, 10) === item.answer) {
      score++;
      exp.className = "explanation show ok";
      exp.textContent = "✓ Correcte! " + item.explanation;
    } else {
      if (selected) {
        document.getElementById(`q${idx}-opt${selected.value}`).classList.add("wrong");
      }
      exp.className = "explanation show err";
      exp.textContent = "✗ Incorrecte. " + item.explanation;
      mistakes.push(`${item.q} → Resposta correcta: ${item.options[item.answer]}`);
    }
  });

  // 2. Check Matching
  matchingData.forEach((item) => {
    const sel = document.getElementById(item.id);
    sel.classList.remove("correct", "wrong");
    if (sel.value === item.answer) {
      score++;
      sel.classList.add("correct");
    } else {
      sel.classList.add("wrong");
      mistakes.push(`Part del microscopi (${item.term}) → ${item.answer}`);
    }
  });

  // 3. Check Short Questions
  const shortChecks = [
    {
      id: "q-janssen",
      label: "1. Història: Germans Janssen (1590 / 1950 als apunts)",
      check: (val) => val.includes("janssen") && (val.includes("1590") || val.includes("1950")),
      correctText: "Els germans Janssen (any 1590, encara que als apunts hi ha escrit 1950)."
    },
    {
      id: "q-hooke",
      label: "2. Història: Robert Hooke",
      check: (val) => val.includes("hooke"),
      correctText: "Robert Hooke va descobrir les cèl·lules l'any 1665."
    },
    {
      id: "q-leeuwenhoek",
      label: "3. Història: Leeuwenhoek",
      check: (val) => val.includes("leeuwenhoek"),
      correctText: "Leeuwenhoek va observar microorganismes."
    },
    {
      id: "q-mitocondri",
      label: "4. Definició de mitocondri",
      check: (val) => val.includes("respirat") || val.includes("energia") || val.includes("atp"),
      correctText: "És la central respiratòria de la cèl·lula i produeix energia (agafa O2 i fa ATP). Té doble membrana."
    },
    {
      id: "q-citoesquelet",
      label: "5. Definició de citoesquelet",
      check: (val) => val.includes("filament") || val.includes("microtubul"),
      correctText: "És un conjunt de filaments i microtúbuls."
    }
  ];

  shortChecks.forEach((sc) => {
    const input = document.getElementById(sc.id);
    const fb = document.getElementById(`fb-${sc.id.replace("q-", "")}`);
    const normVal = normalizeText(input.value);

    if (sc.check(normVal)) {
      score++;
      fb.className = "feedback show ok";
      fb.textContent = "✓ Molt bé! " + sc.correctText;
    } else {
      fb.className = "feedback show err";
      fb.textContent = "✗ Revisa-ho: " + sc.correctText;
      mistakes.push(`${sc.label} → ${sc.correctText}`);
    }
  });

  // Display Results
  const finalGrade = ((score / total) * 10).toFixed(1);
  const resultsSec = document.getElementById("results-section");
  resultsSec.classList.remove("hidden");
  document.getElementById("score-number").textContent = finalGrade;

  const msg = document.getElementById("score-message");
  if (finalGrade >= 9) {
    msg.textContent = "Excel·lent, Sheila! Ho portes preparadíssim per treure un 10! 🌟";
  } else if (finalGrade >= 7) {
    msg.textContent = "Molt bona feina! Només cal repassar un parell de detalls. 👏";
  } else if (finalGrade >= 5) {
    msg.textContent = "Aprovat! Però repassa els punts que has fallat per assegurar bona nota. 💪";
  } else {
    msg.textContent = "Ànims! Torna a llegir els apunts i fes el test una altra vegada. 📚";
  }

  const mistakesDiv = document.getElementById("mistakes-summary");
  if (mistakes.length === 0) {
    mistakesDiv.innerHTML = "<p style='color:#15803d;font-weight:600;text-align:center;'>Cap errada! Tot perfecte.</p>";
  } else {
    let html = `<h3>Punts per repassar (${mistakes.length}):</h3><ul>`;
    mistakes.forEach((m) => {
      html += `<li>${m}</li>`;
    });
    html += "</ul>";
    mistakesDiv.innerHTML = html;
  }

  resultsSec.scrollIntoView({ behavior: "smooth" });
}

function resetExam() {
  renderQuiz();
  renderMatching();
  ["q-janssen", "q-hooke", "q-leeuwenhoek", "q-mitocondri", "q-citoesquelet"].forEach((id) => {
    document.getElementById(id).value = "";
    const fb = document.getElementById(`fb-${id.replace("q-", "")}`);
    fb.className = "feedback";
    fb.textContent = "";
  });
  document.getElementById("results-section").classList.add("hidden");
  document.getElementById("progress-bar").style.width = "0%";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
  renderMatching();
  ["q-janssen", "q-hooke", "q-leeuwenhoek", "q-mitocondri", "q-citoesquelet"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateProgress);
  });
  document.getElementById("btn-check").addEventListener("click", checkExam);
  document.getElementById("btn-reset").addEventListener("click", resetExam);
});
