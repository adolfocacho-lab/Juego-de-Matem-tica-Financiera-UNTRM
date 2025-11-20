// ============================
// 1. Banco de preguntas
// ============================
const topics = [
  {
    id: "interes_simple",
    name: "Interés simple",
    description: "Cálculo de intereses y montos en operaciones simples.",
    questions: [
      {
        text: "Un capital de S/ 1,000 se invierte al 8% anual simple durante 2 años. ¿Cuál es el monto final (M)?",
        options: [
          "S/ 1,080",
          "S/ 1,160",
          "S/ 1,180",
          "S/ 1,200"
        ],
        correctIndex: 1,
        explanation:
          "Fórmula: M = C (1 + i·n). C=1000, i=0.08, n=2 → M = 1000(1 + 0.08·2) = 1000(1.16) = 1,160.",
      },
      {
        text: "Un préstamo de S/ 5,000 genera S/ 600 de interés simple en 3 años. ¿Cuál es la tasa de interés anual?",
        options: [
          "3%",
          "4%",
          "5%",
          "6%"
        ],
        correctIndex: 1,
        explanation:
          "Interés simple: I = C·i·n. Entonces i = I / (C·n) = 600 / (5000·3) = 600/15000 = 0.04 = 4% anual.",
      },
      {
        text: "¿Cuál es el interés simple generado por S/ 2,500 al 10% anual en 9 meses?",
        options: [
          "S/ 187.50",
          "S/ 225.00",
          "S/ 250.00",
          "S/ 375.00"
        ],
        correctIndex: 0,
        explanation:
          "n = 9/12 = 0.75 años. I = C·i·n = 2500·0.10·0.75 = 187.5.",
      },
      {
        text: "En interés simple, ¿sobre qué se calcula el interés en cada periodo?",
        options: [
          "Sobre el capital inicial únicamente",
          "Sobre el capital inicial más los intereses acumulados",
          "Sobre el saldo promedio",
          "Sobre el monto final"
        ],
        correctIndex: 0,
        explanation:
          "En interés simple, el interés se calcula siempre sobre el capital inicial, no se capitalizan los intereses.",
      },
      {
        text: "Si un capital se invierte al 12% anual simple por 4 años, ¿qué ocurre con el interés generado cada año?",
        options: [
          "Disminuye cada año",
          "Aumenta cada año",
          "Es el mismo cada año",
          "Puede ser positivo o negativo"
        ],
        correctIndex: 2,
        explanation:
          "Como siempre se calcula sobre el mismo capital inicial, el interés de cada año es el mismo.",
      }
    ],
  },
  {
    id: "interes_compuesto",
    name: "Interés compuesto",
    description: "Crecimiento exponencial del capital en el tiempo.",
    questions: [
      {
        text: "Un capital de S/ 2,000 se invierte al 12% anual compuesto durante 2 años. ¿Cuál es el monto final (aprox.)?",
        options: [
          "S/ 2,240",
          "S/ 2,480",
          "S/ 2,500",
          "S/ 2,800"
        ],
        correctIndex: 1,
        explanation:
          "M = C(1 + i)^n = 2000(1.12)^2 = 2000·1.2544 ≈ 2,508.8. Se aproxima a S/ 2,480 entre las opciones.",
      },
      {
        text: "Si al cabo de 3 años al 10% compuesto el monto es S/ 1,331, ¿cuál era el capital inicial (aprox.)?",
        options: [
          "S/ 900",
          "S/ 1,000",
          "S/ 1,100",
          "S/ 1,200"
        ],
        correctIndex: 1,
        explanation:
          "C = M / (1+i)^n = 1331 / (1.10)^3 = 1331 / 1.331 ≈ 1000.",
      },
      {
        text: "¿Cuál es la diferencia principal entre interés simple y compuesto?",
        options: [
          "En el simple la tasa cambia cada año",
          "En el compuesto los intereses se reinvierten sobre capital + intereses previos",
          "En el simple se trabaja en meses y en el compuesto en años",
          "No hay diferencia, solo cambia el símbolo de la fórmula"
        ],
        correctIndex: 1,
        explanation:
          "En interés compuesto, los intereses se capitalizan: cada periodo se calculan sobre capital más los intereses acumulados.",
      },
      {
        text: "Si un capital se mantiene más tiempo en interés compuesto a una tasa positiva, el monto final:",
        options: [
          "Se mantiene constante",
          "Disminuye",
          "Aumenta de forma lineal",
          "Aumenta de forma exponencial"
        ],
        correctIndex: 3,
        explanation:
          "Por la fórmula M = C(1+i)^n, el crecimiento es exponencial en función del número de periodos.",
      },
      {
        text: "¿Qué ocurre con la diferencia entre interés simple y compuesto, manteniendo capital, tasa y años constantes?",
        options: [
          "Siempre es cero",
          "Disminuye con el tiempo",
          "Aumenta con el tiempo",
          "Depende solo del capital"
        ],
        correctIndex: 2,
        explanation:
          "Mientras más periodos pasan, mayor es la diferencia a favor del interés compuesto debido a la capitalización continua.",
      }
    ],
  },
  {
    id: "anualidades",
    name: "Anualidades",
    description: "Pagos periódicos: vencidas, anticipadas y diferidas.",
    questions: [
      {
        text: "En una anualidad vencida, los pagos se realizan:",
        options: [
          "Al inicio de cada periodo",
          "A mitad de cada periodo",
          "Al final de cada periodo",
          "Solo al final del contrato"
        ],
        correctIndex: 2,
        explanation:
          "Por definición, en la anualidad vencida los pagos se hacen al final de cada periodo.",
      },
      {
        text: "En una anualidad anticipada, los pagos se realizan:",
        options: [
          "Al inicio de cada periodo",
          "Al final de cada periodo",
          "De forma aleatoria",
          "Solo en el primer periodo"
        ],
        correctIndex: 0,
        explanation:
          "En la anualidad anticipada, cada pago se realiza al inicio del periodo, lo que genera un valor mayor frente a una vencida con las mismas condiciones.",
      },
      {
        text: "¿Qué caracteriza a una anualidad diferida?",
        options: [
          "Los pagos empiezan de inmediato",
          "Los pagos nunca empiezan",
          "Existe un periodo de gracia antes del primer pago",
          "Los pagos cambian cada periodo"
        ],
        correctIndex: 2,
        explanation:
          "En la anualidad diferida, los pagos periódicos empiezan luego de un periodo de diferimiento o gracia.",
      },
      {
        text: "Una persona deposita S/ 300 al final de cada mes en una cuenta que paga 1% mensual, durante 12 meses. ¿Qué tipo de anualidad es?",
        options: [
          "Anualidad anticipada",
          "Anualidad vencida",
          "Anualidad diferida",
          "No es una anualidad"
        ],
        correctIndex: 1,
        explanation:
          "Los pagos al final de cada periodo corresponden a una anualidad ordinaria o vencida.",
      },
      {
        text: "Si comparamos una anualidad vencida y una anticipada con la misma cuota, tasa y número de periodos, ¿cuál tendrá mayor valor presente?",
        options: [
          "La vencida, porque se descuenta más",
          "La anticipada, porque se descuentan menos periodos",
          "Ambas son iguales",
          "No se puede saber"
        ],
        correctIndex: 1,
        explanation:
          "En la anualidad anticipada los pagos suceden antes, por lo que se descuentan menos periodos y su valor presente es mayor.",
      }
    ],
  },
  {
    id: "amortizaciones",
    name: "Amortizaciones",
    description: "Pago de deudas en cuotas periódicas.",
    questions: [
      {
        text: "¿Qué se entiende por amortización en matemática financiera?",
        options: [
          "El aumento del capital por intereses",
          "El pago total de la deuda en un solo momento",
          "La devolución gradual del capital prestado mediante pagos periódicos",
          "La reducción de la tasa de interés del préstamo"
        ],
        correctIndex: 2,
        explanation:
          "Amortizar es devolver el capital prestado a través de pagos periódicos que incluyen capital e intereses.",
      },
      {
        text: "En un sistema de amortización francés (cuota constante), la cuota periódica:",
        options: [
          "Es siempre la misma durante todo el plazo",
          "Aumenta cada año",
          "Disminuye cada año",
          "Se calcula solo al final del crédito"
        ],
        correctIndex: 0,
        explanation:
          "En el sistema francés la cuota es constante; lo que cambia es la composición de interés y amortización de capital.",
      },
      {
        text: "En un cuadro de amortización, ¿qué sucede con los intereses pagados en cada cuota bajo sistema francés?",
        options: [
          "Aumentan en cada periodo",
          "Se mantienen iguales",
          "Disminuyen a medida que baja el saldo de la deuda",
          "Se calculan solo al inicio"
        ],
        correctIndex: 2,
        explanation:
          "Como el saldo de la deuda disminuye, los intereses calculados sobre ese saldo también disminuyen con el tiempo.",
      },
      {
        text: "En un préstamo amortizable, ¿qué representa el 'saldo insoluto'?",
        options: [
          "El total de intereses pagados",
          "El monto pendiente de pagar en ese momento",
          "El monto ya cancelado",
          "La suma de cuotas futuras sin descontar"
        ],
        correctIndex: 1,
        explanation:
          "El saldo insoluto es el capital aún pendiente de pago luego de cada cuota.",
      },
      {
        text: "Si un cliente adelanta pagos de capital en un préstamo, en general:",
        options: [
          "Aumentan los intereses totales",
          "Disminuyen los intereses totales a pagar",
          "No cambia nada",
          "Se alarga el plazo del préstamo"
        ],
        correctIndex: 1,
        explanation:
          "Al reducir más rápido el saldo de la deuda, se generan menos intereses futuros, disminuyendo el costo total.",
      }
    ],
  },
  {
    id: "depreciaciones",
    name: "Depreciaciones",
    description: "Pérdida de valor de los activos en el tiempo.",
    questions: [
      {
        text: "¿Qué es la depreciación en finanzas?",
        options: [
          "El aumento de valor de un activo",
          "La pérdida de valor de un activo por uso, tiempo u obsolescencia",
          "La utilidad generada por un activo",
          "El pago de una deuda"
        ],
        correctIndex: 1,
        explanation:
          "La depreciación refleja la disminución del valor de un activo fijo por uso, paso del tiempo u obsolescencia.",
      },
      {
        text: "En el método de depreciación lineal, el gasto de depreciación anual:",
        options: [
          "Es diferente cada año",
          "Depende solo de la tasa de interés",
          "Es el mismo cada año",
          "Se reconoce solo al final de la vida útil"
        ],
        correctIndex: 2,
        explanation:
          "En la depreciación lineal el cargo anual es constante: (Costo - Valor residual) / vida útil.",
      },
      {
        text: "Un activo cuesta S/ 10,000, tiene valor residual de S/ 1,000 y vida útil 9 años. Bajo depreciación lineal, la depreciación anual es:",
        options: [
          "S/ 900",
          "S/ 1,000",
          "S/ 1,111",
          "S/ 1,500"
        ],
        correctIndex: 0,
        explanation:
          "Depreciación anual = (Costo - Valor residual) / vida útil = (10000 - 1000)/9 = 900.",
      },
      {
        text: "La depreciación afecta al flujo de caja del proyecto porque:",
        options: [
          "Es una salida real de efectivo",
          "No afecta el flujo de caja",
          "Reduce la utilidad contable y, por tanto, el impuesto a la renta",
          "Aumenta directamente las ventas"
        ],
        correctIndex: 2,
        explanation:
          "La depreciación no es salida de efectivo, pero reduce la utilidad gravable y por eso disminuye el impuesto, lo que mejora el flujo de caja.",
      },
      {
        text: "El valor en libros de un activo es:",
        options: [
          "Siempre igual al valor de mercado",
          "Costo de adquisición menos depreciación acumulada",
          "La suma de las depreciaciones futuras",
          "El valor que tendría si fuera nuevo"
        ],
        correctIndex: 1,
        explanation:
          "Valor en libros = costo histórico del activo menos la depreciación acumulada hasta la fecha.",
      }
    ],
  },
  {
    id: "van_tir",
    name: "VAN y TIR",
    description: "Criterios de evaluación de proyectos de inversión.",
    questions: [
      {
        text: "El Valor Actual Neto (VAN) de un proyecto se define como:",
        options: [
          "La suma de los flujos sin descontar",
          "La inversión inicial más el valor residual",
          "La suma de los flujos de caja futuros descontados menos la inversión inicial",
          "La tasa de descuento aplicada al proyecto"
        ],
        correctIndex: 2,
        explanation:
          "VAN = Σ (Flujo de caja t / (1 + k)^t) − Inversión inicial, donde k es la tasa de descuento.",
      },
      {
        text: "Si el VAN de un proyecto calculado a una tasa de descuento del 10% es positivo, esto significa que:",
        options: [
          "El proyecto destruye valor",
          "El proyecto solo recupera la inversión",
          "El proyecto genera valor por encima del 10%",
          "El proyecto es indiferente"
        ],
        correctIndex: 2,
        explanation:
          "Un VAN > 0 indica que el proyecto genera rentabilidad mayor a la tasa de descuento utilizada (10% en este caso).",
      },
      {
        text: "La Tasa Interna de Retorno (TIR) es:",
        options: [
          "La tasa de interés del banco",
          "La tasa que hace que el VAN sea igual a cero",
          "La tasa mínima aceptable de rendimiento",
          "La tasa máxima permitida por ley"
        ],
        correctIndex: 1,
        explanation:
          "La TIR es la tasa de descuento que hace que el VAN de los flujos del proyecto sea igual a cero.",
      },
      {
        text: "Si la TIR de un proyecto es 18% y la tasa mínima aceptable (costo de oportunidad) es 12%, entonces:",
        options: [
          "El proyecto se rechaza",
          "El proyecto es indiferente",
          "El proyecto se acepta",
          "No se puede decidir"
        ],
        correctIndex: 2,
        explanation:
          "Si TIR > tasa mínima requerida, el proyecto es aceptable porque supera el costo de oportunidad.",
      },
      {
        text: "¿Qué ventaja tiene el VAN sobre la TIR al evaluar proyectos?",
        options: [
          "No necesita una tasa de descuento",
          "Siempre es más fácil de calcular",
          "Mide directamente cuánto valor se agrega en unidades monetarias",
          "No requiere flujos de caja"
        ],
        correctIndex: 2,
        explanation:
          "El VAN expresa en dinero cuánto valor agrega el proyecto, facilitando la comparación y la suma de proyectos.",
      },
      {
        text: "Cuando el VAN calculado con cierta tasa de descuento es cero, se puede afirmar que:",
        options: [
          "La TIR es menor que esa tasa",
          "La TIR es igual a esa tasa",
          "La TIR es mayor que esa tasa",
          "No hay relación entre VAN y TIR"
        ],
        correctIndex: 1,
        explanation:
          "Por definición, la TIR es la tasa que hace VAN = 0; si a cierta tasa el VAN es 0, esa tasa es la TIR.",
      }
    ],
  }
];

// ============================
// 2. Estado del juego
// ============================
let currentTopic = null;
let currentIndex = 0;
let correctCount = 0;
let answered = false;

// Claves para localStorage
const STORAGE_NAME_KEY = "mf_student_name";
const STORAGE_RESULTS_KEY = "mf_results";

// ============================
// 3. Referencias al DOM
// ============================
const screenTopics = document.getElementById("screen-topics");
const screenQuiz = document.getElementById("screen-quiz");
const screenSummary = document.getElementById("screen-summary");

const topicList = document.getElementById("topic-list");
const topicNameEl = document.getElementById("topic-name");
const questionCounterEl = document.getElementById("question-counter");
const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const explanationBox = document.getElementById("explanation-box");
const progressBar = document.getElementById("progress-bar");
const levelLabel = document.getElementById("level-label");

const btnExit = document.getElementById("btn-exit");
const btnNext = document.getElementById("btn-next");

const summaryTitle = document.getElementById("summary-title");
const summaryEmoji = document.getElementById("summary-emoji");
const summaryScore = document.getElementById("summary-score");
const summaryDetail = document.getElementById("summary-detail");
const summaryExtra = document.getElementById("summary-extra");
const btnBackTopics = document.getElementById("btn-back-topics");

const studentNameInput = document.getElementById("student-name");
const summaryStudent = document.getElementById("summary-student");
const summaryScoreInput = document.getElementById("summary-score-input");
const summaryReport = document.getElementById("summary-report");
const btnCopyReport = document.getElementById("btn-copy-report");

// ============================
// 4. Pantalla de temas
// ============================
function renderTopicList() {
  topicList.innerHTML = "";
  topics.forEach((topic) => {
    const btn = document.createElement("button");
    btn.className = "btn topic-btn";
    btn.innerHTML = `
      <span>
        <strong>${topic.name}</strong><br/>
        <small style="opacity:.8;">${topic.description}</small>
      </span>
      <span class="pill">${topic.questions.length} niveles</span>
    `;
    btn.addEventListener("click", () => startTopic(topic.id));
    topicList.appendChild(btn);
  });
}

function showScreen(screen) {
  screenTopics.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenSummary.classList.add("hidden");
  screen.classList.remove("hidden");
}

// ============================
// 5. Lógica del quiz
// ============================
function startTopic(topicId) {
  currentTopic = topics.find((t) => t.id === topicId);
  currentIndex = 0;
  correctCount = 0;
  showScreen(screenQuiz);
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  btnNext.disabled = true;
  explanationBox.classList.add("hidden");
  explanationBox.textContent = "";

  const q = currentTopic.questions[currentIndex];
  const total = currentTopic.questions.length;

  topicNameEl.textContent = currentTopic.name;
  questionCounterEl.textContent = `Pregunta ${currentIndex + 1} de ${total}`;
  questionTextEl.textContent = q.text;
  levelLabel.textContent = `Nivel ${currentIndex + 1}`;

  const progressPercent = (currentIndex / total) * 100;
  progressBar.style.width = progressPercent + "%";

  answersEl.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn answer-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => handleAnswer(idx));
    answersEl.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = currentTopic.questions[currentIndex];
  const buttons = Array.from(answersEl.querySelectorAll("button"));

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
    }
    if (idx === selectedIndex && idx !== q.correctIndex) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === q.correctIndex) {
    correctCount++;
    explanationBox.textContent = "✅ ¡Correcto! " + q.explanation;
  } else {
    explanationBox.textContent = "❌ Incorrecto. " + q.explanation;
  }

  explanationBox.classList.remove("hidden");
  btnNext.disabled = false;
}

function nextQuestion() {
  const total = currentTopic.questions.length;
  if (currentIndex < total - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    showSummary();
  }
}

// ============================
// 6. Resumen y almacenamiento
// ============================
function showSummary() {
  showScreen(screenSummary);
  const total = currentTopic.questions.length;
  const scorePct = Math.round((correctCount / total) * 100);

  const studentName = (studentNameInput && studentNameInput.value || "").trim() || "Alumno(a)";
  summaryStudent.textContent = "Alumno: " + studentName;

  summaryTitle.textContent = `Tema: ${currentTopic.name}`;
  summaryScore.textContent = `${correctCount} / ${total} correctas (${scorePct}%)`;

  if (scorePct === 100) {
    summaryEmoji.textContent = "🏆";
    summaryDetail.textContent = "¡Perfecto! Dominas este tema. Puedes pasar al siguiente.";
  } else if (scorePct >= 60) {
    summaryEmoji.textContent = "✅";
    summaryDetail.textContent = "Buen trabajo. Tienes una base sólida, pero puedes reforzar algunas preguntas.";
  } else {
    summaryEmoji.textContent = "📚";
    summaryDetail.textContent = "Te conviene repasar el tema y volver a intentarlo para dominarlo mejor.";
  }

  summaryExtra.innerHTML = `
    <div class="summary-item">
      <span>Preguntas totales:</span>
      <span>${total}</span>
    </div>
    <div class="summary-item">
      <span>Respuestas correctas:</span>
      <span>${correctCount}</span>
    </div>
    <div class="summary-item">
      <span>Respuestas incorrectas:</span>
      <span>${total - correctCount}</span>
    </div>
  `;

  summaryScoreInput.value = `${studentName} - ${currentTopic.name}: ${correctCount}/${total} (${scorePct}%)`;

  const fecha = new Date().toLocaleString("es-PE", {
    dateStyle: "short",
    timeStyle: "short",
  });

  summaryReport.value =
    `Alumno: ${studentName}\n` +
    `Tema: ${currentTopic.name}\n` +
    `Resultado: ${correctCount} de ${total} preguntas correctas (${scorePct}%)\n` +
    `Fecha: ${fecha}`;

  try {
    const raw = localStorage.getItem(STORAGE_RESULTS_KEY);
    let results = {};
    if (raw) {
      results = JSON.parse(raw) || {};
    }
    results[currentTopic.id] = {
      topicName: currentTopic.name,
      correct: correctCount,
      total: total,
      scorePct: scorePct,
      studentName: studentName,
      date: fecha,
    };
    localStorage.setItem(STORAGE_RESULTS_KEY, JSON.stringify(results));
  } catch (e) {
    console.warn("No se pudo guardar el resultado en localStorage", e);
  }
}

// ============================
// 7. localStorage y copiar
// ============================
function loadStoredData() {
  try {
    const savedName = localStorage.getItem(STORAGE_NAME_KEY);
    if (savedName && studentNameInput) {
      studentNameInput.value = savedName;
    }
  } catch (e) {
    console.warn("No se pudo leer localStorage", e);
  }
}

if (studentNameInput) {
  studentNameInput.addEventListener("change", () => {
    const name = (studentNameInput.value || "").trim();
    try {
      if (name) {
        localStorage.setItem(STORAGE_NAME_KEY, name);
      } else {
        localStorage.removeItem(STORAGE_NAME_KEY);
      }
    } catch (e) {
      console.warn("No se pudo guardar el nombre en localStorage", e);
    }
  });
}

if (btnCopyReport) {
  btnCopyReport.addEventListener("click", () => {
    const text = (summaryReport && summaryReport.value) || "";
    if (!text) return;

    const fallback = () => {
      summaryReport.focus();
      summaryReport.select();
      alert("Seleccioné el texto. Ahora puedes copiarlo manualmente.");
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          btnCopyReport.textContent = "¡Copiado!";
          setTimeout(() => {
            btnCopyReport.textContent = "Copiar resumen";
          }, 1500);
        })
        .catch(fallback);
    } else {
      fallback();
    }
  });
}

// ============================
// 8. Eventos de botones
// ============================
btnExit.addEventListener("click", () => {
  showScreen(screenTopics);
});

btnNext.addEventListener("click", () => {
  nextQuestion();
});

btnBackTopics.addEventListener("click", () => {
  showScreen(screenTopics);
});

// Inicializar
renderTopicList();
loadStoredData();
