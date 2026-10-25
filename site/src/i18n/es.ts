import type { Dict } from "./pt";

export const es: Dict = {
  meta: {
    title: "El título y el capex",
    description:
      "El pueblo no enajenó el título. El capex de IA no se sostiene: revisión de la matemática del despilfarro y la tesis ética de la demanda que el propio producto borra.",
  },
  ui: {
    language: "Idioma",
    modulesAria: "Módulos",
    sectionsAria: "Secciones de este análisis",
    openSource: "Abrir fuente ↗",
    unit: "mil M",
    siteTitle: "El título y el capex",
  },
  nav: {
    tese: "Tesis",
    contas: "Cuentas",
    revisao: "Revisión",
    metodo: "Método y fuentes",
    esteira: "Depreciación",
    simulador: "Simulador",
    estatuto: "Estatuto",
    pergunte: "Pregunte",
  },
  modules: {
    economia: "Economía",
    soberania: "Soberanía",
    literacia: "Alfabetización",
  },
  footer: {
    left: "Dr. Lucas HR Almeida · Iniciativa VIA · Lavras, 24 de septiembre de 2026",
    right: "Nil satis nisi optimum.",
  },
  hero: {
    kicker: "Iniciativa VIA · módulo Economía · auditoría del manifiesto",
    h1a: "Lo que muestran los números.",
    h1b: "Y lo que siguen sin poder probar.",
    lead: "La serie del manifiesto es un escenario del autor, no una medición consolidada del mercado. La aritmética puede reproducirse; el perímetro, las expectativas de ingresos y la vida útil de los activos siguen siendo hipótesis abiertas.",
    quote: "“Quien no enajenó el título no lo perdió por el hecho de que otro lo administre.”",
    quoteNote:
      "Tesis fuerte, 20 de septiembre de 2026. Redacción asentada el 23 de septiembre, Lavras. Constitución de Brasil, art. 1, párrafo único: todo el poder emana del pueblo.",
    figs: [
      { k: "Gasto 2023–2030", v: "3805 mil M", n: "La suma cuadra." },
      { k: "Ingresos / capex, caso base", v: "19,8%", n: "Razón bruta, no ROI ni flujo de caja." },
      { k: "Para igualar el acumulado", v: "5,0×", n: "No 2,7×. Ese otro número solo cubre un año." },
    ],
  },
  tese: {
    title: "La tesis que la cuenta por sí sola no dice",
    intro:
      "Las cuatro proposiciones siguientes son la interpretación normativa del autor. No son resultados deducidos de la planilla y no reciben probabilidad estadística en esta página.",
    claims: [
      {
        n: "I",
        title: "El título",
        body: "La lengua pública, el archivo, la capacidad de agenciar y la visibilidad de la mediación no fueron transferidos a quienes poseen cómputo e interfaz. El conocimiento del que se extraen los pesos es la acumulación de la civilización. No nació en el centro de datos. El algoritmo, sin corpus, no funda propiedad originaria.",
      },
      {
        n: "II",
        title: "El mismo producto",
        body: "Hipótesis del autor: los proveedores comprimen corpus superpuestos, venden inferencia sustituible y pueden duplicar capacidad por competencia estratégica. La serie no mide superposición de producto, utilización ni clientes.",
      },
      {
        n: "III",
        title: "La demanda que se borra",
        body: "Hipótesis del autor: si la automatización reduce el ingreso del trabajo más rápido de lo que crea productividad, ingresos y demanda nuevos, parte de la propia base pagadora se contrae. El efecto neto depende de precios, distribución y respuestas de empresas, hogares y Estado.",
      },
      {
        n: "IV",
        title: "La deuda",
        body: "Hay deuda corporativa, project finance, crédito privado y SPV en el financiamiento de la expansión, pero la fracción cambia según el año y el perímetro. Goldman Sachs estima que el 27% del capex de los hiperescaladores se financió con emisión de deuda en 2025 y proyecta 33% en 2026; eso no demuestra que un tercio de todo el capex global ya esté endeudado.",
      },
    ],
    closing:
      "La usurpación aquí nombrada es de título, en el plano constitucional y deontológico. No es, en este acto, tipo penal. El paywall no es función pública. Nombrar la expropiación sin fingir sentencia es el corte de la tesis fuerte — y esta página lo conserva.",
  },
  charts: {
    capex: "Capex",
    base: "Base",
    otimista: "Optimista",
    pessimista: "Pesimista",
    publicada: "Publicada",
    vida3: "Vida de 3 años",
    mista: "Mixta",
    receitaBase: "Ingresos base",
    empate: "Paridad",
  },
  contas: {
    title: "El escenario del manifiesto, tal como se publicó",
    intro:
      "Serie del autor en el repositorio, en miles de millones de dólares. Combina años históricos y futuros sin marcar la frontera ni citar el origen de cada observación. Sirve para probar una tesis bajo tres trayectorias de ingresos; no debe leerse como consenso de mercado. En el escenario llamado “optimista”, el ingreso acumulado equivale al 66% del capex acumulado.",
    chartNote: "Barras: capex. Línea clara: ingresos base. Verde: optimista. Discontinua: pesimista.",
    headers: [
      "Año",
      "Capex",
      "Base",
      "Capex − ingresos",
      "Ingresos / capex",
      "Deprec. publicada",
      "Optimista",
      "Pesimista",
    ],
    sum: "Total",
    note: "“Capex − ingresos” no es pérdida ni déficit de caja: compara una inversión que genera activos duraderos con ingresos brutos, sin margen, opex, impuestos, capital de trabajo, valor residual ni costo de capital. La columna se mantiene solo como identidad del escenario.",
  },
  revisao: {
    title: "Lo que la revisión hizo con la cuenta",
    intro:
      "La aritmética interna de la serie cuadra: sumas, brechas anuales, retornos acumulados, heurística de depreciación. Eso valida las operaciones, no las premisas ni la conclusión. La revisión separa identidades matemáticas, escenarios y afirmaciones sobre el mundo.",
    fixes: [
      {
        title: "2,69× iguala dos valores de 2030. No resuelve la serie.",
        body: "Setecientos dividido por doscientos sesenta es 2,69. Eso iguala ingresos y capex en el año 2030. Para que el ingreso acumulado iguale el capex acumulado, todos los años tendrían que valer 5,04 veces la base. Si solo varía de 2026 en adelante, 5,33 veces; si solo varía 2030, 12,7 veces. Ninguna de esas identidades es, por sí sola, punto de equilibrio económico.",
      },
      {
        title: "17,9 mil millones es una equivalencia de ingreso anual, no una base de suscriptores.",
        body: "El número sale de 3050 mil millones divididos por cerca de US$ 170 por suscripción-año. Traduce una diferencia acumulada de ocho años en un único año hipotético de facturación, sin costos, impuestos, churn ni capacidad de pago. El valor de 2030 aislado daría cerca de 2600 millones de suscripciones-año. Ninguno mide mercado direccionable.",
      },
      {
        title: "Tres años es una prueba de estrés, no una vida útil demostrada.",
        body: "La regla publicada — 35% del año anterior más 25% de dos años atrás — no representa depreciación lineal de tres años. Aplicar tres años a todo el capex produce 677 mil millones en 2030, pero mezcla chips, edificios, energía y obras aún no operativas. Meta reporta 5,5 años para la mayor parte de servidores y red; otras empresas usan políticas distintas. La incertidumbre es material.",
      },
      {
        title: "No todo el capex es chip — y los ingresos no se comparan con la depreciación como caja.",
        body: "Una mezcla ilustrativa — 60% silicio a tres años, 40% cascarón a veinte — produce 482 mil millones en 2030. La división 60/40 no fue medida. Además, la depreciación es un gasto contable no monetario; ingresos brutos por encima o por debajo de ella no demuestran, por sí solos, flujo operativo positivo o negativo.",
      },
      {
        title: "19,8% es cobertura bruta, no ROI.",
        body: "Setecientos cincuenta y cinco dividido por 3805 da 19,8%. El ROI exigiría al menos utilidad o flujo incremental en el numerador y tratamiento consistente del tiempo, de los activos residuales y del costo de capital. La página pasa a llamar a la métrica por lo que es: ingreso acumulado dividido por capex acumulado.",
      },
    ],
  },
  metodo: {
    title: "Método y procedencia",
    intro:
      "Auditoría realizada el 1 de octubre de 2026. “Cuadra” significa que la operación puede reproducirse. “Fuente” identifica de dónde salió un valor. “Benchmark” solo delimita plausibilidad: no convierte proyección en hecho.",
    sources: [
      {
        status: "Serie interna",
        title: "dados.json · manifiesto VIA",
        detail:
          "Origen de los vectores mostrados. No informa fuente por fila, perímetro de “IA”, moneda constante, corte entre observado y proyectado ni fecha base.",
      },
      {
        status: "Benchmark proyectado",
        title: "Goldman Sachs · Tracking Trillions",
        detail:
          "Proyecta US$ 7,6 billones entre 2026–2031 y publica supuestos de cómputo, centros de datos y energía. Muestra que valor y perímetro dependen del modelo; no valida la serie VIA.",
      },
      {
        status: "Benchmark proyectado",
        title: "McKinsey · centros de datos hasta 2030",
        detail:
          "Estima más de US$ 1,7 billones a nivel global, excluyendo hardware de TI. La exclusión impide la comparación directa con una serie que mezcla infraestructura y cómputo.",
      },
      {
        status: "Fuente primaria",
        title: "Meta 2025 Form 10-K · servidores y red",
        detail:
          "Divulga una vida útil estimada de 5,5 años para la mayor parte de los activos de servidores y red. Es política contable de una empresa, no vida física universal de las GPU.",
      },
      {
        status: "Estimación identificada",
        title: "Goldman Sachs · deuda ligada a la IA",
        detail:
          "Estima emisiones equivalentes al 27% del capex de los hiperescaladores en 2025 y proyecta 33% en 2026. El propio recorte excluye el project finance de la razón.",
      },
      {
        status: "Contrapunto de demanda",
        title: "Bloomberg Intelligence · mercado de IA generativa",
        detail:
          "Proyecta US$ 2,3 billones en 2032 en un perímetro amplio. No es directamente comparable con los “ingresos de IA” del manifiesto, pero evidencia la dispersión de las expectativas.",
      },
    ],
    openTitle: "Cuestión aún abierta:",
    openBody:
      "no existe en esta serie un puente auditable entre capex global, ingresos incrementales atribuibles a la IA y flujo de caja de los mismos agentes económicos. Sin el mismo perímetro en ambos lados, “sostenible” o “insostenible” sigue siendo una conclusión condicional, no una prueba matemática.",
  },
  esteira: {
    title: "Depreciación: tres modelos, ninguna certeza escondida",
    chartNote:
      "Verde: heurística publicada. Teal: tres años, línea recta. Discontinua: mezcla propuesta. Clara: ingresos base.",
    text: "En 2030 los ingresos base son 260. La depreciación que imprime el manifiesto es 400. La que imprime la hipótesis extrema de tres años sobre todo el capex es 677. Esto prueba sensibilidad contable; no demuestra caja negativa. Ingresos, depreciación y capex tienen naturalezas distintas y solo serían comparables en estados financieros consistentes.",
    bars: {
      receita: "Ingresos base, 2030",
      publicada: "Depreciación publicada",
      mista: "Depreciación mixta",
      vida3: "Vida de 3 años",
      capex: "Capex del año",
    },
    coverageNote:
      "Ingreso acumulado / capex acumulado. La línea teal marca igualdad aritmética, 100% — no punto de equilibrio económico. El escenario optimista llega a 66% en 2030.",
  },
  simulador: {
    title: "El escenario, en controles",
    intro:
      "Tres hipótesis, separadas a propósito. Hacer crecer los ingresos prueba la identidad corregida. Tratar parte como salario sustituido y parte del capex como duplicación competitiva son elecciones del usuario, no estimaciones. El simulador muestra consecuencias, no probabilidades.",
  },
  sim: {
    title: "Simulador de la identidad",
    manifesto: "Cuentas del manifiesto",
    autor: "Lectura del autor",
    sliders: [
      {
        label: "Ingresos a partir de 2026",
        hint: "1× es la base. Igualar el acumulado, con el pasado fijo, pide cerca de 5,3× de aquí en adelante.",
      },
      {
        label: "Fracción de los ingresos futuros que es solo salario sustituido",
        hint: "No es elasticidad medida. Es la identidad: transferir salario no es demanda nueva.",
      },
      {
        label: "Fracción del capex que es el mismo producto, construido de nuevo",
        hint: "Hipótesis del autor de duplicación competitiva. El control no estima utilización, diferenciación ni valor residual.",
      },
    ],
    stats: {
      cobertura: "Ingresos / capex acumulado",
      receita: "Ingresos reconocibles",
      gap: "Capex − ingresos",
      duplicado: "Capex tratado como duplicado",
      fator: "Factor para igualdad bruta",
      fecha: "Ingresos ≥ capex",
    },
    none: "no existe",
    yes: "sí",
    no: "no",
    authorText:
      "Lectura del autor, ilustrativa — no estimación: el setenta por ciento de los ingresos futuros se trata como salario sustituido, y la mitad del hardware como carrera por el mismo producto. La razón ingresos/capex cae de 19,8% a un solo dígito.",
    dragText:
      "Arrastra. La razón mantiene los 3805 mil millones en el denominador. No es ROI ni flujo de caja: no incluye margen, gastos operativos, impuestos, valor residual ni costo de capital.",
  },
  escolas: {
    title: "Cinco lecturas — no cinco validaciones independientes",
    intro:
      "Las formulaciones siguientes son lentes interpretativos del manifiesto. No constituyen consenso entre escuelas ni evidencia adicional. Se retiraron las afirmaciones sin fuente verificable; el desacuerdo económico permanece visible.",
    list: [
      {
        name: "Austríaca",
        text: "Puede leer el exceso de capacidad como malinversión; la “corrección inevitable” exigiría supuestos de crédito, precios y demanda que la serie no contiene.",
      },
      {
        name: "Keynesiana",
        text: "Puede tratar la inversión como sostén de la demanda agregada; el efecto neto depende de importaciones, crowding out, productividad y respuesta fiscal.",
      },
      {
        name: "Monetarista",
        text: "Destaca cuellos de botella de energía, turbinas y red; la presión localizada de recursos no demuestra inflación general persistente.",
      },
      {
        name: "Institucionalista",
        text: "Permite que la capacidad sea racional como poder estratégico aun con retorno financiero bajo; el modelo no cuantifica ese valor.",
      },
      {
        name: "Financiera",
        text: "Exige flujos, márgenes, costo de capital, deuda y valor terminal en el mismo perímetro. La serie actual no contiene datos suficientes para ese veredicto.",
      },
    ],
    sextaKicker: "Sexta · ética de la titularidad",
    sextaTitle: "La matemática disciplina la tesis. No sustituye a la economía.",
    sextaBody:
      "El argumento de titularidad, corpus y poder permanece como la posición normativa del autor. El resultado económico, en cambio, depende de adopción, precios, productividad, distribución, competencia, financiamiento y política pública. La página no atribuye probabilidades donde no hay modelo estimado ni llama prueba a un escenario.",
  },
  estatuto: {
    title: "Estatuto de esta página",
    status: [
      {
        k: "Verificado",
        body: "Sumas, diferencias y razones coinciden con el archivo del manifiesto. 700/260 = 2,69. 3805/755 = 5,04. La heurística 35/25 fue reproducida; los escenarios alternativos de depreciación fueron recalculados.",
      },
      {
        k: "Inferido",
        body: "El riesgo de exceso de capacidad, presión financiera y disputa por la titularidad es una interpretación plausible. No se deriva necesariamente de la razón ingresos/capex y no recibe probabilidad empírica.",
      },
      {
        k: "Propuesto",
        body: "La sustitución de salario y la duplicación competitiva en el simulador son parámetros elegidos. La mezcla 60/40 y la vida de tres años son sensibilidades. No son estimaciones centrales.",
      },
      {
        k: "Laguna",
        body: "Fuente fila por fila de la serie; definición común de capex e ingresos; corte observado/proyectado; márgenes, opex, impuestos, valor residual, costo de capital; división medida de los activos; distribución probabilística calibrada.",
      },
    ],
    thesis:
      "Tesis del autor: lo que importa es la tecnología necesaria, la suficiente — no el exceso. La auditoría preserva esa hipótesis sin convertir la expectativa humana en certeza numérica.",
    name: "Dr. Lucas HR Almeida",
    role: "Médico · Iniciativa VIA · Human-gate · Lavras, Minas Gerais",
    notes:
      "Manifiesto de origen: repositorio capex-ia-o-esbanjamento, 24 de septiembre de 2026. Auditoría económica: 1 de octubre de 2026. Soberanía informacional en iniciativa-via.com.",
  },
  bot: {
    open: "Preguntar a la página",
    close: "Cerrar el lector",
    title: "Lector de la página",
    subtitle: "FAQ con estatuto: responde lo escrito — y marca lo que sigue siendo laguna.",
    placeholder: "Pregunte por las cuentas, la tesis o lo que no está demostrado…",
    send: "Enviar",
    greeting:
      "No soy oráculo. Leo esta página: cuentas, tesis, método y el estatuto de cada afirmación. Pregunte como a un revisor, no como a un vendedor.",
    fallback:
      "Eso queda fuera del perímetro de esta página. Puedo hablar de las cuentas, de la tesis de titularidad, de la depreciación, del simulador o de lo que aún no está demostrado.",
    clarify: "Hay dos lecturas posibles. ¿Cuál quiere?",
    also: "También importa",
    seeSection: "Ir a la sección",
    continue: "Seguir",
    you: "Usted",
    page: "Página",
    teaserKicker: "Lector embarcado",
    teaserTitle: "Pregunte a la página — con estatuto, no con fe.",
    teaserBody:
      "Un FAQ que recuerda el turno anterior, reconoce los números y rechaza lo que este análisis no demuestra.",
    or: "o",
    who: "Soy el lector embarcado de esta página — un FAQ con memoria y estatuto, no un modelo que inventa. Sin el corpus de este análisis, no hay qué responder.",
    thanks: "De nada. Si la siguiente duda es de cuenta, tesis o laguna, siga.",
    suggestions: [
      "¿El 19,8% es ROI?",
      "¿Por qué 2,7× no cierra la cuenta?",
      "¿El capex se sostiene?",
      "¿Qué es el título?",
      "¿Qué no demuestra esta página?",
    ],
    epistemic: {
      verified: "Verificado",
      inferred: "Inferido",
      proposed: "Propuesto",
      gap: "Laguna",
    },
    cards: {
      titulo: {
        title: "El título",
        body: "El pueblo no enajenó el título. Lengua pública, archivo y mediación no pasaron a quien detenta compute. Quien no enajenó el título no lo perdió porque otro lo administre. Es tesis normativa — no sentencia penal.",
        followUps: ["¿Sin corpora hay pesos?", "¿Qué no demuestra esta página?"],
      },
      corpus: {
        title: "Corpus y pesos",
        body: "Sin corpora no hay pesos. El conocimiento del que se extraen los pesos es acumulación civilizatoria; el algoritmo, sin corpus, no funda propiedad originaria. El capex es recipiente; el archivo es el contenido.",
        followUps: ["¿Qué es el título?", "¿El capex se sostiene?"],
      },
      serie: {
        title: "La serie del manifiesto",
        body: "La serie es del autor: 3805 mil M de capex y 755 mil M de ingresos base, 2023–2030. La aritmética cuadra; el perímetro y el origen fila por fila siguen siendo hipótesis. No es consenso de mercado.",
        followUps: ["¿El 19,8% es ROI?", "¿Qué no demuestra esta página?"],
      },
      cobertura: {
        title: "El 19,8% no es ROI",
        body: "755 / 3805 = 19,8%. Es ingreso acumulado sobre capex acumulado — cobertura bruta. El ROI pediría lucro o flujo, tiempo, residual y costo de capital. La página no llama ROI a eso.",
        followUps: ["¿Capex menos ingresos es pérdida?", "¿Por qué 2,7× no cierra la cuenta?"],
      },
      identidade: {
        title: "Identidad, no pérdida",
        body: "“Capex − ingresos” no es pérdida ni déficit de caja. Compara una inversión que genera activos con ingreso bruto, sin margen, opex, impuesto ni costo de capital. La columna es identidad del escenario, no estado financiero.",
        followUps: ["¿El 19,8% es ROI?", "¿La depreciación prueba caja negativa?"],
      },
      gap: {
        title: "El gap de 3050",
        body: "La diferencia acumulada en el caso base es 3050 mil M. Es la serie menos la serie, en el mismo archivo. Sin el mismo perímetro en capex e ingresos incrementales de los mismos agentes, el gap no prueba insostenibilidad.",
        followUps: ["¿El capex se sostiene?", "¿Por qué 2,7× no cierra la cuenta?"],
      },
      multiplicadores: {
        title: "2,69× no es 5×",
        body: "700 / 260 = 2,69 — iguala solo el año 2030. Para empatar lo acumulado: 5,04× en todos los años; 5,33× si solo varía desde 2026; 12,7× si solo varía 2030. Ninguna de esas identidades es break-even económico.",
        followUps: ["¿Qué son los 17,9 mil M de suscriptores?", "¿El 19,8% es ROI?"],
      },
      netflix: {
        title: "17,9 mil M no es una base de suscriptores",
        body: "17,9 mil M sale de 3050 / unos US$ 170 por suscripción-año. Traduce ocho años de diferencia en un solo año hipotético de facturación, sin costo, churn ni capacidad de pago. No mide mercado direccionable.",
        followUps: ["¿Por qué 2,7× no cierra la cuenta?", "¿El capex se sostiene?"],
      },
      depreciacao: {
        title: "Tres años es una prueba de estrés",
        body: "La regla publicada — 35% del año anterior más 25% de hace dos años — no es depreciación lineal de tres años. Aplicar tres años a todo el capex es sensibilidad. Meta informa 5,5 años para la mayor parte de servidores y red. La incertidumbre es material.",
        followUps: ["¿Qué muestra la cinta en 2030?", "¿Capex menos ingresos es pérdida?"],
      },
      esteira: {
        title: "Ingresos, depreciación y capex no son el mismo objeto",
        body: "En 2030: ingresos 260, depreciación publicada 400,5, mixta 482, tres años 677, capex 700. Naturalezas distintas. Compararlas pone a prueba la cuenta; no prueba caja operativa negativa.",
        followUps: ["¿Está demostrada la depreciación a 3 años?", "¿El 19,8% es ROI?"],
      },
      divida: {
        title: "Deuda de hyperscalers, no del globo",
        body: "Goldman estima que el 27% del capex de los hyperscalers se financió con deuda en 2025 y proyecta el 33% en 2026. Eso no demuestra que un tercio de todo el capex global ya esté endeudado. La fracción cambia por año y perímetro.",
        followUps: ["¿El capex se sostiene?", "¿Qué fuentes cita la página?"],
      },
      mesmoProduto: {
        title: "El mismo producto, otra vez",
        body: "Hipótesis del autor: los vendors comprimen corpora superpuestos y pueden duplicar capacidad por competencia. La serie no mide superposición, utilización ni clientes. En el simulador eso es un control, no una estimación.",
        followUps: ["¿Qué es la demanda que se borra?", "¿Cómo funciona el simulador?"],
      },
      demanda: {
        title: "La demanda que el producto puede borrar",
        body: "Hipótesis: si la automatización recorta la renta del trabajo más rápido de lo que crea demanda nueva, parte de la base pagadora se contrae. El efecto neto depende de precios, distribución y respuestas de empresas, familias y Estado.",
        followUps: ["¿El mismo producto está medido?", "¿Cómo funciona el simulador?"],
      },
      escolas: {
        title: "Cinco lentes, ninguna validación extra",
        body: "La austriaca, la keynesiana, la monetarista, la institucionalista y la financiera interpretan el manifiesto. No son cinco pruebas independientes. La lectura financiera exige flujos, márgenes y costo de capital que la serie no contiene.",
        followUps: ["¿Qué es la sexta lectura?", "¿El capex se sostiene?"],
      },
      etica: {
        title: "La matemática disciplina; no sustituye",
        body: "La sexta lectura es ética de la titularidad. El argumento de corpus y poder es la posición normativa del autor. El resultado económico depende de adopción, precios, productividad, competencia y política pública. La página no atribuye probabilidad donde no hay modelo.",
        followUps: ["¿Qué es el título?", "¿Qué no demuestra esta página?"],
      },
      estatuto: {
        title: "El estatuto de esta página",
        body: "Verificado: las cuentas cuadran. Inferido: riesgo de exceso y disputa de título. Propuesto: controles del simulador y la mezcla 60/40. Laguna: fuente fila por fila, perímetro común, márgenes, opex, residual y costo de capital.",
        followUps: ["¿El capex se sostiene?", "¿Qué fuentes cita la página?"],
      },
      metodo: {
        title: "Método y procedencia",
        body: "“Cuadra” significa operación reproducible. “Fuente” nombra procedencia. “Benchmark” solo delimita plausibilidad. Goldman, McKinsey, el 10-K de Meta y Bloomberg Intelligence no validan la serie VIA; muestran que valor y perímetro dependen del modelo.",
        followUps: ["¿El capex se sostiene?", "¿Qué no demuestra esta página?"],
      },
      perimetro: {
        title: "Sostenerse es una conclusión condicional",
        body: "No hay puente auditable entre capex global, ingreso incremental atribuible a la IA y el flujo de los mismos agentes. Sin ese perímetro, “sostenible” o “insostenible” sigue siendo conclusión condicional — no prueba matemática. La serie muestra un gap; no cierra el veredicto.",
        followUps: ["¿El 19,8% es ROI?", "¿Qué no demuestra esta página?"],
      },
      simulador: {
        title: "El simulador muestra consecuencia, no probabilidad",
        body: "Tres controles: ingresos desde 2026, la fracción que es solo salario sustituido y la fracción del capex como el mismo producto. La lectura del autor — 70% y 50% — es ilustrativa. Arrastrar no estima el mundo; pone a prueba la identidad.",
        followUps: ["¿Qué es la demanda que se borra?", "¿Por qué 2,7× no cierra la cuenta?"],
      },
      otimista: {
        title: "Lo optimista llega al 66% — y aún no empata",
        body: "En el escenario optimista el ingreso acumulado es 2510 mil M contra 3805 de capex: 66%. La línea del 100% en el gráfico es igualdad aritmética, no break-even económico. Aun la trayectoria alta queda por debajo del empate bruto.",
        followUps: ["¿El 19,8% es ROI?", "¿El capex se sostiene?"],
      },
      autor: {
        title: "Quién firma",
        body: "Dr. Lucas HR Almeida, médico, Iniciativa VIA, Lavras. Manifiesto el 24 de septiembre de 2026; auditoría el 1 de octubre. Human-gate: la página conserva la tesis sin convertir la expectativa humana en certeza numérica.",
        followUps: ["¿Qué es el título?", "¿Qué no demuestra esta página?"],
      },
    },
  },
};
