/* Convenciones:  [[texto]] = contenido inventado (dummy) por confirmar.  PH() = imagen pendiente. */
const x = (es, en) => ({ es, en });
const PH = (es, en) => ({ ph: x(es, en) });

const CASES = [
/* ====================================================== 01 CERTEZIA */
{
  slug: "certezia", num: "01", accent: "oklch(0.55 0.16 255)", thumb: "certezia_hero",
  client: x("Certezia · DIGITAL-HUMANS", "Certezia · DIGITAL-HUMANS"),
  title: x("La complejidad física también es parte de la UX.", "Physical complexity is part of UX too."),
  short: x("Firma digital con DNIe: menos pasos y 8/10 de NPS", "eID digital signing: fewer steps and 8/10 NPS"),
  outcome: x("−40% de pasos · 8/10 NPS en pruebas con usuarios", "−40% steps · 8/10 NPS in user tests"),
  summary: x("Rediseñé una firma digital con DNIe y NFC separando lo que el usuario debía entender de lo que tenía que hacer con sus manos. El nuevo flujo redujo un 40% los pasos y obtuvo un NPS de 8/10 en pruebas con usuarios.", "I redesigned a DNIe and NFC digital signature flow by separating what users needed to understand from what they physically had to do. The new journey reduced the number of steps by 40% and achieved an 8/10 NPS in user testing."),
  final: true,
  tags: ["GovTech", "Firma digital", "NFC", "Estrategia", "Research"],
  meta: [
    [x("Rol","Role"), x("Product Designer","Product Designer")],
    [x("Año","Year"), x("Ene – Mar 2026","Jan – Mar 2026")],
    [x("Contexto","Context"), x("Proyecto de DIGITAL-HUMANS","DIGITAL-HUMANS project")],
    [x("Equipo","Team"), x("Certezia, desarrollo móvil y diseño","Certezia, mobile engineering and design")],
    [x("Herramientas","Tools"), x("Figma, Lookback, Lovable, Claude","Figma, Lookback, Lovable, Claude")],
    [x("Alcance","Scope"), x("Estrategia, research, flujo crítico y UI Kit","Strategy, research, critical flow and UI Kit")]
  ],
  tldr: {
    problem: x("El sistema pedía datos en el peor momento: mientras el usuario sostenía el DNI contra el teléfono. La señal NFC se cortaba y el error no explicaba nada.",
               "The system asked for data at the worst moment: while the user held the ID against the phone. The NFC signal dropped and the error explained nothing."),
    role: x("Product Designer de punta a punta: mercado, arquetipos, alcance, flujo, prototipo, validación y UI Kit.",
            "End-to-end Product Designer: market, archetypes, scope, flow, prototype, validation and UI Kit."),
    result: x("−40% de pasos en el flujo crítico y 8/10 de NPS en un test de usabilidad.",
              "−40% steps in the critical flow and 8/10 NPS in a usability test.")
  },
  metrics: [],
  blocks: [
    { t: "text", h: x("Contexto y oportunidad","Context and opportunity"), p: [
      x("Firmar digitalmente con DNIe parecía una tarea sencilla en papel, pero en la práctica combinaba varias acciones al mismo tiempo. El usuario debía entender las instrucciones, introducir o recordar su PIN, activar o utilizar NFC, posicionar correctamente el DNIe sobre el teléfono y responder a lo que ocurría en pantalla.",
        "Signing digitally with an electronic ID card looked straightforward on paper, but in practice it required several things at once. Users had to understand the instructions, enter or remember their PIN, use NFC, position the DNIe correctly against the phone and respond to what was happening on screen."),
      x("Eso generaba una carga que no era únicamente digital. Parte de la experiencia ocurría en la interfaz y otra parte ocurría físicamente entre la persona, el teléfono y su documento.",
        "This meant the challenge was not purely digital. Part of the experience happened in the interface, while another part happened physically between the user, the phone and the ID card.")
    ], callouts: [
      { h: x("La firma no ocurría solo en la pantalla.","The signature did not happen only on screen."),
        p: x("El usuario debía entender el proceso mientras manipulaba físicamente su DNIe y el teléfono.","Users had to understand the process while physically handling their DNIe and phone.") },
      { h: x("La oportunidad estaba en separar ambos esfuerzos.","The opportunity was to separate those two types of effort."),
        p: x("En lugar de explicar todo a la vez, podía guiar una decisión o una acción por vez.","Instead of explaining everything at once, the experience could guide one decision or action at a time.") }
    ], imgs: [
      { key: "certezia_tam-sam-som", cap: x("TAM / SAM / SOM: segmentación del mercado para Certezia.", "TAM / SAM / SOM: market segmentation for Certezia."), wide: true }
    ]},
    { t: "text", h: x("Dos usuarios, una sola app","Two users, one app"), p: [
      x("Definí dos arquetipos con necesidades opuestas: el <strong>firmante ciudadano</strong> (el universitario digital, la profesional saturada), que no sabe que su DNIe ya sirve para firmar y teme “hacer algo mal”; y el <strong>generador profesional</strong> (el gestor autónomo), que necesita enviar documentos y saber quién firmó. Armé un Business Model Canvas para cada uno: freemium para el ciudadano, suscripción B2B para el generador.",
        "I defined two archetypes with opposite needs: the <strong>citizen signer</strong> (the digital student, the overloaded professional), who doesn’t know their eID can already sign and fears “doing something wrong”; and the <strong>professional generator</strong> (the freelance case manager), who needs to send documents and know who signed. I built a Business Model Canvas for each: freemium for citizens, B2B subscription for generators."),
      x("Con eso prioricé el Release 1 con MoSCoW: firma con DNIe, confirmación clara y descarga entraron como <em>Must</em>; el simulador de firma y el chatbot de soporte quedaron para después.",
        "With that I prioritised Release 1 using MoSCoW: eID signing, clear confirmation and download were <em>Must</em>; the signing simulator and support chatbot were pushed back.")
    ], imgs: [
      { key: "certezia_arquetipos", cap: x("Arquetipos de firmantes y generador profesional.", "Signer and professional generator archetypes."), wide: true, evidence: "compact" },
      { key: "certezia_bmcs", cap: x("Business Model Canvas: generador B2B y firmante ciudadano.", "Business Model Canvas: B2B generator and citizen signer."), wide: true, evidence: "compact" }
    ]},
    { t: "text", h: x("El reto","The challenge"), p: [
      x("El reto no era simplemente reducir pantallas. Necesitaba entender qué información requería atención en cada momento y qué acciones físicas podían competir con esa atención.",
        "The challenge was not simply to remove screens. I needed to understand what required the user’s attention at each moment and which physical actions could compete for that attention."),
      x("Si una persona estaba intentando encontrar la posición correcta del NFC, ese no era el momento para pedirle que interpretara un bloque largo de instrucciones. Si necesitaba decidir qué documento firmar, tampoco debía preocuparse todavía por la posición de su DNIe.",
        "If someone was trying to find the correct NFC position, that was not the right moment to ask them to interpret a long block of instructions. If they were deciding which document to sign, they should not need to think about positioning their DNIe yet.")
    ], callouts: [
      { h: x("El problema no era explicar más.","The problem was not that users needed more explanation."),
        p: x("Era evitar pedir demasiadas cosas al mismo tiempo.","I needed to stop asking them to do too many things at once.") },
      { h: x("Cada pantalla debía responder una pregunta simple:","Each screen needed to answer one simple question:"),
        p: x("¿Qué necesito hacer ahora?","What do I need to do now?") }
    ]},
    { t: "text", h: x("El problema","The problem"), p: [
      x("Al revisar el flujo original encontré momentos donde instrucciones, decisiones, estados del sistema y acciones físicas competían por la atención del usuario.",
        "When I reviewed the original flow, I found moments where instructions, decisions, system states and physical actions were all competing for the user’s attention."),
      x("Eso hacía especialmente difíciles los momentos de error: cuando la lectura NFC fallaba, el PIN era incorrecto o el documento presentaba un problema, no siempre estaba claro qué había ocurrido ni cómo continuar.",
        "This became especially difficult when something went wrong. If NFC reading failed, the PIN was incorrect or there was an issue with the ID card, it was not always clear what had happened or how to continue.")
    ], list: [
      x("<strong>Demasiadas tareas simultáneas</strong><br>Algunas pantallas pedían entender información y ejecutar una acción física al mismo tiempo.",
        "<strong>Too many simultaneous tasks</strong><br>Some screens required users to process information while performing a physical action at the same time."),
      x("<strong>Poca claridad durante la lectura NFC</strong><br>El usuario necesitaba saber qué estaba ocurriendo mientras mantenía el DNIe en contacto con el teléfono.",
        "<strong>Limited clarity during NFC reading</strong><br>Users needed to understand what was happening while keeping the DNIe positioned against the phone."),
      x("<strong>Errores difíciles de recuperar</strong><br>PIN incorrecto, problemas de NFC o estados del documento necesitaban explicar qué había pasado y cuál era el siguiente paso.",
        "<strong>Difficult error recovery</strong><br>PIN, NFC and document issues needed to explain both what had happened and what to do next."),
      x("<strong>Dependencia del comportamiento técnico</strong><br>La experiencia estaba condicionada por las capacidades reales del dispositivo, NFC y SDK.",
        "<strong>Technical dependencies</strong><br>The experience was constrained by the actual capabilities of the device, NFC and SDK.")
    ], img: { key: "certezia_problema", cap: x("Tres pantallas del flujo original: guía NFC confusa, PIN durante el escaneo y error genérico.","Three screens from the original flow: confusing NFC guide, PIN during scanning and generic error.") } },
    { t: "text", h: x("Restricciones técnicas","Technical constraints"), p: [
      x("En este proyecto no podía diseñar primero y preguntar después si era técnicamente posible. El comportamiento del NFC, el DNIe y el SDK condicionaba directamente la experiencia.",
        "This was not a project where I could design first and ask later whether something was technically possible. NFC behavior, the DNIe and the SDK directly shaped the experience."),
      x("Trabajé con desarrollo para entender qué estados podía detectar el sistema, qué información podía mostrar y qué situaciones dependían del dispositivo o del propio documento. Esas restricciones entraron en el diseño desde el inicio.",
        "I worked with development to understand which states the system could detect, what information it could expose and which situations depended on the device or the ID card itself. Those constraints became part of the design from the beginning.")
    ], list: [
      x("El SDK puede detectar si el documento es DNIe 2 o 3, lo que abre la puerta a quitar la selección manual.","The SDK can detect whether the document is eID 2 or 3, which opens the door to removing manual selection."),
      x("El CAN no puede pedirse después del escaneo en iOS (la lectura nativa del sistema lo tapa), así que se pide antes.","The CAN can’t be requested after scanning on iOS (native reading covers it), so it’s asked before."),
      x("El límite de 5 intentos de PIN lo controla el chip del DNI, no la app: el diseño informa sin prometer control.","The 5-attempt PIN limit is enforced by the ID chip, not the app: the design informs without promising control."),
      x("El escaneo se puede cancelar pero no pausar: descarté ayudas que dependieran de pausar la lectura.","Scanning can be cancelled but not paused: I ruled out help that depended on pausing the read.")
    ], callout: x("Una buena instrucción no podía prometer algo que el sistema no podía detectar. Cada decisión importante del flujo se contrastó con las capacidades reales del SDK.",
                  "A good instruction could not promise something the system was unable to detect. Key interaction decisions were checked against the real capabilities of the SDK."),
    img: { key: "certezia_preguntas", cap: x("Preguntas técnicas NFC / DNI y su impacto en las decisiones de UX.", "NFC / ID technical questions and their impact on UX decisions."), wide: true, evidence: "technical" } },
    { t: "decisions", h: x("Decisiones de diseño","Design decisions"), items: [
      { h: x("Separar decisión y acción física","Separate decisions from physical actions"),
        p: x("Primero ayudé al usuario a entender qué iba a hacer. La interacción con DNIe y NFC aparecía cuando esa decisión ya estaba tomada.","Users first needed to understand what they were about to do. Interaction with the DNIe and NFC came once that decision was already clear.") },
      { h: x("Una acción principal por momento","One primary action at a time"),
        p: x("Reduje la cantidad de decisiones simultáneas para que cada pantalla tuviera un propósito evidente.","I reduced simultaneous decisions so each screen had one clear purpose.") },
      { h: x("Dividir el proceso en etapas","Break the journey into stages"),
        p: x("Organicé el recorrido alrededor de tres momentos claros: Documento, Identidad y Firma.","I organized the flow around three clear moments: Document, Identity and Signature.") },
      { h: x("Mostrar qué está haciendo el sistema","Make system status visible"),
        p: x("Durante procesos como la lectura NFC, el usuario necesitaba saber que el sistema estaba trabajando y qué debía hacer mientras esperaba.","During processes such as NFC reading, users needed to know that the system was working and what they should do while waiting.") },
      { h: x("Diseñar también la recuperación","Design recovery, not only success"),
        p: x("Los errores de PIN, NFC o documento no fueron tratados como excepciones. Diseñé cómo explicar el problema y cómo ayudar al usuario a continuar.","PIN, NFC and document errors were treated as part of the journey. I designed how to explain what had happened and how users could continue.") },
      { h: x("Diseñar dentro de las capacidades reales","Design within real technical capabilities"),
        p: x("Las decisiones de interacción se revisaron con desarrollo para asegurar que pudieran implementarse con el SDK disponible.","Interaction decisions were reviewed with development to make sure they could be implemented with the available SDK.") }
    ]},
    { t: "text", h: x("Flujo final: dos fases","Mapping the flow"), p: [
      x("Antes de entrar al detalle visual mapeé el recorrido completo, incluyendo caminos principales, estados intermedios y posibles errores.",
        "Before moving into visual detail, I mapped the complete journey, including the main path, intermediate states and potential errors."),
      x("El objetivo era que Documento, Identidad y Firma funcionaran como etapas comprensibles por sí mismas, pero también como parte de un único proceso.",
        "The goal was for Document, Identity and Signature to work as understandable stages on their own while still feeling like one continuous process."),
      x("Mapear los estados de error junto con el happy path permitió diseñar la recuperación desde el principio y no como una capa añadida al final.",
        "Mapping error states alongside the happy path allowed recovery to be designed from the beginning instead of added later.")
    ], imgs: [
      { key: "certezia_flujo-redisenado", cap: x("Mapa de estados y posibles errores","State and error map"), wide: true },
      { key: "certezia_flujo-final", cap: x("Flujo completo de firma","Complete signing flow"), wide: true },
      { key: "certezia_hero", cap: x("Propuesta final del recorrido","Final journey proposal"), pad: true, wide: true }
    ]},
    { t: "text", h: x("Voz y tono","Voice and tone"), p: [
      x("En este flujo, el contenido también era parte de la interacción. Las instrucciones tenían que entenderse mientras la persona sostenía el teléfono, posicionaba su DNIe o intentaba resolver un error.",
        "In this flow, content was part of the interaction itself. Instructions needed to remain understandable while someone was holding their phone, positioning the DNIe or trying to recover from an error."),
      x("Por eso prioricé mensajes cortos, verbos directos y una instrucción principal por momento. Evité explicar tecnología cuando lo que el usuario necesitaba era saber qué hacer a continuación.",
        "I prioritized short messages, direct verbs and one main instruction at a time. I avoided explaining the technology when what users really needed was to know what to do next.")
    ], callout: x("La pregunta para cada mensaje era simple: ¿puedo entender qué hacer mientras tengo el teléfono y el DNIe en las manos?",
                  "The question behind every instruction was simple: can I understand what to do while I have my phone and DNIe in my hands?"),
    img: { key: "certezia_errores", cap: x("Antes y propuesta: del error genérico a una instrucción accionable.", "Before and proposed design: from a generic error to actionable guidance."), wide: true, evidence: "errors" } },
    { t: "text", h: x("Validación","Validation"), p: [
      x("Probé el flujo con usuarios para observar algo que una entrevista por sí sola no podía mostrar: qué entendían y, al mismo tiempo, qué hacían físicamente con el teléfono y el DNIe.",
        "I tested the flow with users to observe something an interview alone could not reveal: what people understood and what they physically did with the phone and DNIe at the same time."),
      x("Las pruebas permitieron identificar dudas en instrucciones, momentos de espera y recuperación ante errores. A partir de esas sesiones ajusté textos, jerarquía y comportamiento antes de cerrar la propuesta.",
        "Testing exposed hesitation around instructions, waiting states and error recovery. I used those sessions to refine copy, hierarchy and interaction behavior before finalizing the proposal."),
      x("El resultado obtuvo un NPS de 8/10 en las pruebas con usuarios.",
        "The resulting experience achieved an 8/10 NPS in user testing.")
    ], imgs: [
      { key: "certezia_vista-prototipo", cap: x("Prototipo interactivo en Figma.","Interactive prototype in Figma."), pad: true },
      { key: "certezia_vista-testing", cap: x("Sesión de test de usabilidad en Lookback.","Usability test session in Lookback.") }
    ], callout: x("Resultado del test: 8/10 de NPS.", "Test result: 8/10 NPS.") },
    { t: "twocol", h: x("Lo que aprendimos","What we learned"), p: [
      x("La validación confirmó que simplificar no significaba únicamente reducir pantallas. También significaba elegir cuándo pedir atención, cuándo pedir una acción física y cuándo dejar que el sistema hiciera su trabajo.",
        "Testing confirmed that simplifying the experience was not only about reducing screens. It was also about choosing when to ask for attention, when to ask for a physical action and when to let the system do its work.")
    ], cols: [
      { k: x("Funcionó","What worked"), items: [
        { h: x("Separar el proceso en etapas claras","Breaking the process into clear stages"), p: x("Documento, Identidad y Firma ayudaban a anticipar qué estaba ocurriendo.","Document, Identity and Signature helped users anticipate what was happening.") },
        { h: x("Dar contexto justo antes de la acción","Providing context right before an action"), p: x("Las instrucciones funcionaban mejor cuando aparecían en el momento en que eran necesarias.","Instructions worked better when they appeared at the moment they were needed.") },
        { h: x("Diseñar recuperación ante errores","Designing error recovery"), p: x("Poder entender qué había ocurrido y cómo continuar reducía la sensación de estar bloqueado.","Understanding what had happened and how to continue reduced the feeling of being stuck.") }
      ]},
      { k: x("Ajusté","What I adjusted"), items: [
        { h: x("Instrucciones demasiado largas","Instructions that were too long"), p: x("Algunos mensajes podían simplificarse aún más durante acciones físicas.","Some messages could be simplified further during physical interactions.") },
        { h: x("Estados de espera","Waiting states"), p: x("Necesitaba hacer más evidente cuándo el sistema seguía trabajando.","I needed to make it clearer when the system was still working.") },
        { h: x("Ayuda contextual","Contextual help"), p: x("La asistencia debía aparecer cerca del punto donde surgía la duda, no antes.","Support needed to appear close to the point where the question occurred, not earlier.") }
      ]}
    ], callout: x("La mejora más importante no fue una pantalla. Fue separar lo que el usuario debía pensar de lo que debía hacer con las manos.",
                  "The most important improvement was not a screen. It was separating what users needed to think about from what they needed to do with their hands.") },
    { t: "ai", h: x("IA en el proceso","AI in the process"),
      used: [
        x("<strong>Claude:</strong> guía de moderación (estructura, preguntas, métricas), configuración de Lookback, borrador del informe técnico y síntesis del feedback de las entrevistas.","<strong>Claude:</strong> moderation guide (structure, questions, metrics), Lookback setup, technical report draft and synthesis of interview feedback."),
        x("<strong>Lookback (Eureka AI):</strong> objetivos para resaltar temas en las sesiones.","<strong>Lookback (Eureka AI):</strong> goals to surface themes across sessions."),
        x("<strong>Lovable:</strong> UI Kit a partir de un prompt con el sistema visual que extraje de los PDF de referencia.","<strong>Lovable:</strong> UI Kit from a prompt built on the visual system I extracted from the reference PDFs.")
      ],
      mine: [
        x("Qué preguntas quedan en la guía y cuáles se eliminan.","Which questions stay in the guide and which go."),
        x("Qué versión de copy se usa y cada decisión de flujo (tap-to-place, orden de los datos).","Which copy version ships and every flow decision (tap-to-place, data order)."),
        x("La jerarquía de componentes, colores y estados que le di a Lovable.","The hierarchy of components, colours and states I gave Lovable.")
      ],
      img: { key: "certezia_uikit", cap: x("UI Kit de Certezia: colores, tipografía, componentes y estados.", "Certezia UI Kit: colors, typography, components and states."), wide: true, evidence: "compact" } },
    { t: "list", h: x("Aprendizajes","Learnings"), items: [
      x("<strong>La UX no termina en la pantalla.</strong><br>Cuando una experiencia involucra NFC, documentos o hardware, también hay que diseñar teniendo en cuenta lo que la persona hace físicamente mientras usa el producto.",
        "<strong>UX does not stop at the screen.</strong><br>When an experience involves NFC, documents or hardware, you also need to design around what people are physically doing while they use the product."),
      x("<strong>Los errores forman parte del recorrido principal.</strong><br>En procesos críticos, diseñar cómo recuperarse es tan importante como diseñar el happy path.",
        "<strong>Errors are part of the main journey.</strong><br>In critical processes, designing recovery is as important as designing the happy path."),
      x("<strong>Diseño y tecnología necesitaban avanzar juntos.</strong><br>Entender las capacidades del SDK antes de cerrar una interacción evitó diseñar comportamientos que después no podían implementarse.",
        "<strong>Design and technology needed to move together.</strong><br>Understanding the SDK before finalizing interactions prevented me from designing behaviors that could not be implemented."),
      x("<strong>Observar fue más útil que preguntar solamente.</strong><br>Ver cómo una persona movía el teléfono, sostenía el DNIe o reaccionaba durante una espera reveló problemas que no aparecían únicamente en lo que decía.",
        "<strong>Observation revealed more than questions alone.</strong><br>Watching how someone moved their phone, held the DNIe or reacted during a waiting state exposed issues that were not visible only through what they said.")
    ]}
  ]
},

/* ====================================================== 02 DINERS */
{
  slug: "diners", num: "02", accent: "oklch(0.5 0.08 275)", thumb: "diners_confidential",
  final: true,
  thumbPh: x("Diagrama abstracto, sin UI real","Abstract diagram, no real UI"),
  client: x("Diners Club Ecuador · Banca móvil","Diners Club Ecuador · Mobile banking"),
  title: x("30% menos pasos en un flujo de autogestión de banca móvil","30% fewer steps in a mobile banking self-service flow"),
  short: x("Banca móvil: un flujo de autogestión unificado","Mobile banking: a unified self-service flow"),
  outcome: x("30% menos pasos · 17 clientes entrevistados · 50+ fricciones priorizadas","30% fewer steps · 17 customers interviewed · 50+ frictions prioritised"),
  summary: x("Un flujo escondido a dos niveles de menú y limitado a un solo tipo de producto. Lo unifiqué en un recorrido, con reglas de negocio alineadas entre cuatro áreas y decisiones sostenidas por investigación de campo.",
             "A flow buried two menu levels deep and limited to a single product type. I unified it into one journey, with business rules aligned across four teams and decisions backed by field research."),
  tags: ["Fintech", "Banca móvil", "UX Research", "Flujos complejos"],
  nda: true,
  meta: [
    [x("Rol","Role"), x("Product Designer","Product Designer")],
    [x("Año","Year"), x("2026","2026")],
    [x("Contexto","Context"), x("Equipo de Experiencia · app de banca móvil","Experience team · mobile banking app")],
    [x("Equipo","Team"), x("Producto, Tecnología, Legal, Marketing y Design System","Product, Engineering, Legal, Marketing and Design System")],
    [x("Herramientas","Tools"), x("Figma, Maze","Figma, Maze")],
    [x("Alcance","Scope"), x("Investigación de campo y rediseño de flujo","Field research and flow redesign")]
  ],
  tldr: {
    problem: x("El acceso estaba a dos niveles de menú, cubría un solo tipo de producto y el resto se resolvía en configuración de cuenta o en una agencia.",
               "Access sat two menu levels deep, covered a single product type and everything else was solved in account settings or at a branch."),
    role: x("Investigación de campo, rediseño del flujo y alineación de reglas con Producto, Tecnología, Legal y Marketing.",
            "Field research, flow redesign and alignment of rules with Product, Engineering, Legal and Marketing."),
    result: x("30% menos pasos, 17 clientes entrevistados y más de 50 fricciones priorizadas como insumo del roadmap.",
              "30% fewer steps, 17 customers interviewed and 50+ frictions prioritised as roadmap input.")
  },
  metrics: [
    ["30%", x("menos pasos en el flujo principal","fewer steps in the main flow")],
    ["17", x("clientes entrevistados, más asesores de agencia","customers interviewed, plus branch advisors")],
    ["50+", x("puntos de fricción priorizados","friction points prioritised")],
    ["4", x("áreas alineadas antes de cerrar decisiones","teams aligned before closing decisions")]
  ],
  blocks: [
    { t: "text", h: x("Contexto y problema","Context and problem"), p: [
      x("La función vivía a dos niveles de profundidad dentro del menú y solo cubría un tipo de producto. Para el resto, el cliente tenía que buscar en la configuración de su cuenta o ir a una agencia.",
        "The feature lived two levels deep in the menu and covered only one product type. For the rest, customers had to dig through account settings or go to a branch."),
      x("El equipo sabía que había fricción, pero no la tenía mapeada. Esa era la primera pregunta a responder.",
        "The team knew there was friction, but hadn’t mapped it. That was the first question to answer.")
    ] },
    { t: "text", h: x("Investigación de campo","Field research"), p: [
      x("Entrevisté a 17 clientes y a asesores de agencia, quienes ven a diario lo que la app no resuelve, y mapeé más de 50 puntos de fricción priorizados por severidad y número de menciones.",
        "I interviewed 17 customers and branch advisors, who see every day what the app doesn’t solve, and mapped 50+ friction points prioritised by severity and number of mentions.")
    ], list: [
      x("<strong>Errores silenciosos:</strong> la app no explicaba por qué algo fallaba, y el cliente se culpaba o abandonaba.","<strong>Silent failures:</strong> the app didn’t explain why something failed, so customers blamed themselves or gave up."),
      x("<strong>Los asesores son soporte de producto de facto:</strong> sus atajos y quejas son una fuente directa de gaps.","<strong>Advisors are de-facto product support:</strong> their workarounds and complaints are a direct source of gaps."),
      x("<strong>Desconfianza, no torpeza digital:</strong> parte de los clientes evita el autoservicio por miedo al fraude.","<strong>Distrust, not digital clumsiness:</strong> some customers avoid self-service out of fear of fraud."),
      x("“No sé si me dejó hacerlo o no, mejor voy a la agencia.”","“I don’t know if it went through or not, I’d rather go to the branch.”")
    ] },
    { t: "decisions", h: x("Decisiones de diseño","Design decisions"), items: [
      { h: x("Subir la función a primer nivel","Move the feature to the first level"),
        p: x("El acceso pasó de dos niveles de menú a un atajo directo.","Access went from two menu levels to a direct shortcut."),
        w: x("Ganó visibilidad una función de uso ocasional: negocié ese espacio con las funciones de uso diario.","An occasional-use feature gained visibility: I negotiated that space against daily-use features.") },
      { h: x("Un recorrido para varios productos","One journey for several products"),
        p: x("En lugar de un flujo por producto, un recorrido único que reconoce lo que el cliente tiene contratado.","Instead of one flow per product, a single journey that recognises what the customer holds."),
        w: x("Más estados que cubrir en diseño y QA, a cambio de un solo modelo mental.","More states to cover in design and QA, in exchange for a single mental model.") },
      { h: x("Reglas por servicio, no fijas en la pantalla","Rules from a service, not hard-coded"),
        p: x("Los límites institucionales varían por segmento de cliente; acordé con Tecnología que se carguen por servicio.","Institutional limits vary by customer segment; I agreed with Engineering that they load from a service."),
        w: x("Evita rediseñar cada vez que cambia una regla.","It avoids redesigning every time a rule changes.") },
      { h: x("Un solo patrón de error para los trámites digitales","One error pattern for digital procedures"),
        p: x("Reintentos limitados y salida limpia, aplicado a los cinco trámites del alcance.","Limited retries and a clean exit, applied to the five procedures in scope."),
        w: x("Menos libertad por pantalla, más consistencia y menos casos que desarrollar.","Less freedom per screen, more consistency and fewer cases to build.") }
    ]},
    { t: "text", h: x("Cómo trabajé con el equipo","How I worked with the team"), p: [
      x("Antes de cerrar cada decisión validé alcance, reglas y factibilidad con Producto, Tecnología, Legal y Marketing, y alineé los componentes nuevos con el equipo de Design System.",
        "Before closing each decision I validated scope, rules and feasibility with Product, Engineering, Legal and Marketing, and aligned new components with the Design System team."),
      x("También detecté que un mismo nombre designaba dos alcances distintos para dos áreas, y lo llevé a decisión antes de diseñar.",
        "I also spotted that one name meant two different scopes for two teams, and brought it to a decision before designing.")
    ]},
    { t: "text", h: x("Resultado","Outcome"), p: [
      x("El rediseño redujo un 30% los pasos del flujo principal y dejó los puntos de fricción priorizados como insumo del roadmap de Tecnología. El proyecto sigue en desarrollo y aún no es público.",
        "The redesign cut the main flow by 30% and left the friction points prioritised as input to the engineering roadmap. The project is still in development and not yet public.")
    ], callout: x("Lo que más valor generó no fue el rediseño, sino demostrar con evidencia qué parte del problema valía la pena resolver primero.",
                  "What created the most value wasn’t the redesign, but showing with evidence which part of the problem was worth solving first.") },
    { t: "ai", h: x("IA en el proceso","AI in the process"),
      used: [
        x("<strong>Claude:</strong> organizar transcripciones y mapear dolores en una hoja con severidad y menciones.","<strong>Claude:</strong> organising transcripts and mapping pain points into a sheet with severity and mentions."),
        x("<strong>Verificación:</strong> donde la transcripción automática perdió partes por cortes de llamada, prevalecieron mis notas de campo.","<strong>Verification:</strong> where the automatic transcript lost parts to dropped calls, my field notes took precedence.")
      ],
      mine: [
        x("Qué se pregunta, a quién y cómo se prioriza cada fricción.","What to ask, whom to ask and how each friction is prioritised."),
        x("Qué se muestra a cada área y las decisiones de diseño del flujo.","What each team sees and the flow’s design decisions.")
      ] },
    { t: "list", h: x("Aprendizajes","Learnings"), items: [
      x("Los asesores de agencia detectan gaps antes que cualquier métrica.","Branch advisors spot gaps before any metric does."),
      x("Un patrón de error único acelera diseño, desarrollo y QA a la vez.","A single error pattern speeds up design, development and QA together.")
    ]}
  ]
},

/* ====================================================== 03 PABLO */
{
  slug: "pablo", num: "03", accent: "oklch(0.55 0.17 300)", thumb: "pablo_hero",
  final: true,
  client: x("Pablo (Komu AI) · usapablo.com","Pablo (Komu AI) · usapablo.com"),
  title: x("Un asistente financiero con IA que vive en WhatsApp","An AI financial assistant that lives in WhatsApp"),
  short: x("Pablo: +150% de adopción del plan de pago", "Pablo: +150% paid-plan adoption"),
  outcome: x("+150% de adopción del plan de pago en los primeros 3 meses","+150% paid-plan adoption in the first 3 months"),
  summary: x("Cofundé Pablo y diseñé su experiencia de producto desde el research hasta el MVP: UX conversacional en WhatsApp, landing y dashboard.",
             "I co-founded Pablo and designed the product experience from research to MVP, including the WhatsApp conversational UX, landing page and dashboard."),
  summary2: x("El reto era ayudar a las personas a entender y ordenar mejor sus finanzas sin obligarlas a aprender una nueva herramienta desde cero.",
              "The challenge was to help people understand and manage their finances without asking them to learn an entirely new tool first."),
  tags: ["Fintech", "Producto con IA", "UX conversacional", "MVP"],
  meta: [
    [x("Rol","Role"), x("Co-founder · Product Designer","Co-founder · Product Designer")],
    [x("Año","Year"), x("2025","2025")],
    [x("Contexto","Context"), x("Startup propia · usapablo.com","Own startup · usapablo.com")],
    [x("Equipo","Team"), x("Multidisciplinario, metodologías ágiles","Multidisciplinary, agile methods")],
    [x("Herramientas","Tools"), x("Figma, Lovable, WhatsApp Business","Figma, Lovable, WhatsApp Business")],
    [x("Alcance","Scope"), x("Estrategia, UX conversacional, dashboard y landing","Strategy, conversational UX, dashboard and landing")]
  ],
  tldr: {
    kProblem: x("El reto","The challenge"),
    problem: x("Muchas personas quieren ordenar sus finanzas, pero abandonan cuando hacerlo requiere demasiados pasos, disciplina o una herramienta que no forma parte de su rutina.",
               "Many people want to get their finances under control, but drop off when doing so requires too many steps, too much discipline or another tool outside their existing routine."),
    role: x("Cofundé el producto y trabajé desde research y estrategia hasta UX conversacional, definición del MVP, landing y dashboard.",
            "I co-founded the product and worked across research, product strategy, conversational UX, MVP definition, landing page and dashboard."),
    result: x("+150% de adopción del plan de pago durante los primeros tres meses de la nueva versión.",
              "150% increase in paid-plan adoption during the first three months of the new version.")
  },
  metrics: [
    ["+150%", x("de adopción del plan de pago en los primeros 3 meses", "paid-plan adoption in the first 3 months")],
    ["3", x("superficies diseñadas: chat, dashboard y landing","surfaces designed: chat, dashboard and landing")],
    ["WhatsApp", x("como punto de entrada, el espacio que las personas ya usaban cada día", "as the entry point, the space people already used every day")],
    ["Research → MVP", x("diseñé el producto desde la investigación hasta su definición", "I designed the product from research through to MVP definition")]
  ],
  blocks: [
    { t: "text", h: x("Contexto y problema","Context and problem"), p: [
      x("Manejar las finanzas personales suele exigir constancia: registrar gastos, revisar movimientos, entender en qué se va el dinero y tomar decisiones con esa información.",
        "Managing personal finances requires consistency: tracking expenses, reviewing transactions, understanding where money goes and making decisions from that information."),
      x("El problema no era únicamente tener acceso a datos financieros. Era conseguir que ordenar las finanzas se sintiera lo bastante simple como para formar parte de la rutina.",
        "The challenge was not simply giving people access to financial data. It was making financial management simple enough to become part of their routine."),
      x("Desde el inicio me interesó evitar construir otra herramienta que exigiera al usuario cambiar completamente sus hábitos para poder utilizarla.",
        "From the beginning, I wanted to avoid building another tool that required users to completely change their habits before they could benefit from it.")
    ], img: { key: "pablo_hero", cap: x("Landing y conversación de Pablo en WhatsApp.","Pablo’s landing page and WhatsApp conversation."), pad: true } },

    { t: "text", h: x("Research y por qué WhatsApp","Research and why WhatsApp"), p: [
      x("El proyecto empezó con research para entender cómo las personas manejaban realmente su dinero, qué intentaban controlar, dónde perdían constancia y qué herramientas ya formaban parte de su día a día.",
        "The project started with research into how people actually managed their money, what they tried to keep track of, where they struggled to stay consistent and which tools were already part of their everyday lives."),
      x("Una señal se repetía: el problema no era únicamente saber qué hacer con las finanzas, sino sostener el hábito de hacerlo.",
        "One pattern kept coming up: the challenge was not only knowing what to do with money, but maintaining the habit of doing it."),
      x("Eso me llevó a una decisión importante de producto: en lugar de pedir que las personas incorporaran una nueva app a su rutina, podía llevar la experiencia a un espacio que ya utilizaban todos los días: WhatsApp.",
        "That led to an important product decision. Instead of asking people to add another app to their routine, I could bring the experience into a space they were already using every day: WhatsApp.")
    ], callout: x("WhatsApp no fue elegido solo como canal. Fue una decisión de producto para reducir la fricción entre la intención de ordenar las finanzas y el hábito de hacerlo.",
                  "WhatsApp was not chosen only as a channel. It was a product decision designed to reduce the gap between wanting to manage your finances and actually building the habit."),
    img: { key: "pablo_hallazgos", cap: x("Síntesis del research: obstáculos, confianza y oportunidades de mejora.", "Research synthesis: obstacles, trust and opportunities for improvement."), evidence: "findings" } },

    { t: "decisions", h: x("Decisiones de diseño","Design decisions"), wLabel: x("Decisión","Decision"), items: [
      { h: x("Empezar sin aprender una nueva herramienta","Start without learning a new tool"),
        p: x("WhatsApp permitía que la primera interacción ocurriera en un entorno que las personas ya conocían.","WhatsApp allowed the first interaction to happen in an environment people already understood."),
        w: x("Reducir al mínimo la configuración inicial y llevar al usuario rápidamente a una primera acción útil.","Keep initial setup to a minimum and help users reach a useful first action quickly.") },
      { h: x("Guiar sin convertir la conversación en un formulario","Guide without turning the conversation into a form"),
        p: x("Una interfaz conversacional podía simplificar tareas, pero demasiadas preguntas seguidas podían sentirse como otro proceso administrativo.","Conversational interfaces could simplify tasks, but too many questions in a row could feel like another administrative process."),
        w: x("Pedir información progresivamente y mantener claro por qué Pablo necesitaba cada dato.","Ask for information progressively and make it clear why Pablo needed each piece of information.") },
      { h: x("Construir confianza antes de automatizar","Build trust before automating"),
        p: x("Cuando un producto habla de dinero, una respuesta rápida no es suficiente. El usuario necesita entender qué está ocurriendo y mantener control sobre sus decisiones.","When a product deals with money, a fast answer is not enough. Users need to understand what is happening and stay in control of their decisions."),
        w: x("Diseñar mensajes claros, confirmar acciones importantes y evitar que la IA pareciera tomar decisiones financieras por la persona.","Use clear language, confirm important actions and avoid making the AI appear to make financial decisions on the user’s behalf.") },
      { h: x("Mostrar valor antes de pedir compromiso","Show value before asking for commitment"),
        p: x("La propuesta debía ser comprensible antes de pedir al usuario que avanzara hacia un plan de pago.","The value proposition needed to be clear before asking users to move toward a paid plan."),
        w: x("Diseñar la experiencia para que el usuario pudiera percibir utilidad antes de introducir el momento de conversión.","Design the experience so users could understand its value before reaching the conversion moment.") }
    ]},

    { t: "text", h: x("Landing, registro y dashboard","Landing, signup and dashboard"), p: [
      x("Diseñé junto al equipo una landing para explicar con claridad qué era Pablo, su propuesta de valor y cómo empezar a utilizarlo.",
        "Together with the team, I designed a landing page to clearly explain what Pablo was, its value proposition and how to get started.")
    ], imgs: [
      { key: "pablo_vistas", cap: x("Vistas de la landing y del registro de Pablo.", "Views of Pablo’s landing page and signup."), evidence: "views", wide: true },
      { key: "pablo_dashboard", cap: x("Dashboard de Pablo: panel de control de finanzas personales.", "Pablo dashboard: personal finance control panel."), evidence: "dashboard", wide: true }
    ] },

    { t: "text", h: x("Resultado","Outcome"), p: [
      x("Tras lanzar la nueva versión, la adopción del plan de pago aumentó un 150% durante los primeros tres meses.",
        "After launching the new version, paid-plan adoption increased by 150% during the first three months."),
      x("El resultado fue especialmente importante porque conectaba una decisión de producto (reducir la fricción de entrada y demostrar valor antes de pedir compromiso) con una métrica real del negocio.",
        "This mattered because it connected a product decision (reducing entry friction and demonstrating value before asking for commitment) with a real business metric."),
      x("Pablo dejó de ser solamente una conversación en WhatsApp y pasó a funcionar como un producto con distintos puntos de contacto alrededor de una misma experiencia.",
        "Pablo evolved from being only a WhatsApp conversation into a product with multiple touchpoints built around the same experience.")
    ]},

    { t: "twocol", h: x("La IA en el proceso","AI in the process"), p: [
      x("En Pablo, la IA tenía dos lugares distintos. Era parte del producto que estaba construyendo y también una herramienta que podía acelerar partes de mi proceso de trabajo. En ambos casos, el criterio seguía siendo humano.",
        "AI had two different roles in Pablo. It was part of the product I was building, and it could also help accelerate parts of my design process. In both cases, human judgment remained essential.")
    ], cols: [
      { k: x("IA en el producto","AI in the product"), paras: [
        x("La IA ayudaba a construir una experiencia conversacional más flexible y a trabajar con información dentro del contexto de cada usuario.","AI helped create a more flexible conversational experience and work with information in the context of each user."),
        x("Pero no debía sustituir decisiones que correspondían a la persona ni presentar una respuesta generada como una verdad incuestionable.","But it should not replace decisions that belonged to the person or present a generated answer as unquestionable truth.")
      ]},
      { k: x("IA en mi proceso","AI in my process"), paras: [
        x("Utilicé herramientas de IA para explorar alternativas, ordenar información y acelerar tareas puntuales durante el diseño.","I used AI tools to explore alternatives, organize information and speed up specific parts of the design process."),
        x("Las decisiones de producto, priorización y experiencia se contrastaban con research, datos y conversación con el equipo.","Product, prioritization and experience decisions were still grounded in research, data and discussion with the team.")
      ]}
    ]},

    { t: "list", h: x("Aprendizajes","Learnings"), items: [
      x("<strong>El canal también es una decisión de producto.</strong><br>Elegir WhatsApp reducía una barrera importante: no pedir a las personas que incorporaran otra herramienta antes de recibir valor.",
        "<strong>The channel is also a product decision.</strong><br>Choosing WhatsApp removed an important barrier: people did not need to adopt another tool before getting value."),
      x("<strong>Una conversación simple puede esconder mucha complejidad.</strong><br>Diseñar UX conversacional exige decidir qué preguntar, cuándo hacerlo y cuánto contexto necesita realmente la persona.",
        "<strong>A simple conversation can hide a lot of complexity.</strong><br>Conversational UX requires deciding what to ask, when to ask it and how much context someone actually needs."),
      x("<strong>En productos financieros, confianza y claridad pesan más que sorprender.</strong><br>La IA podía hacer la experiencia más flexible, pero el usuario necesitaba seguir entendiendo qué estaba ocurriendo.",
        "<strong>In financial products, trust and clarity matter more than novelty.</strong><br>AI could make the experience more flexible, but users still needed to understand what was happening."),
      x("<strong>El resultado de negocio también forma parte del diseño.</strong><br>El aumento en adopción del plan de pago mostró que mejorar la experiencia y reducir fricción podía tener impacto más allá de la interfaz.",
        "<strong>Business outcomes are also part of design.</strong><br>The increase in paid-plan adoption showed that improving the experience and reducing friction could have an impact beyond the interface.")
    ]}
  ]
},

/* ====================================================== 04 MINSA */
{
  slug: "minsa", num: "04", accent: "oklch(0.45 0.07 220)", thumb: "minsa_before-after", hero: "minsa_before-after",
  final: true,
  eyebrow: x("MINSA PERÚ · GOVTECH", "MINSA PERU · GOVTECH"),
  client: x("MINSA Perú · DIGITAL-HUMANS","MINSA Peru · DIGITAL-HUMANS"),
  title: x("Del carné físico a una experiencia digital para más de 10 millones de personas", "From a physical vaccination card to a digital experience for more than 10 million people"),
  short: x("Carné de vacunación usado por más de 10M de personas", "Vaccination card used by more than 10M people"),
  outcome: x("+10 M de usuarios · accesible y mobile-first","10M+ users · accessible and mobile-first"),
  summary: x("Durante la pandemia trabajé en el rediseño del Carné de Vacunación del Ministerio de Salud del Perú, una herramienta que millones de ciudadanos necesitaban para consultar y acreditar su vacunación contra la COVID-19.", "During the pandemic, I worked on the redesign of Peru’s Ministry of Health Vaccination Record, a service millions of citizens relied on to access and verify their COVID-19 vaccination information."),
  summary2: x("El reto no era simplemente digitalizar un documento. Había que convertirlo en un servicio público claro, accesible y capaz de funcionar para personas con realidades tecnológicas muy distintas.", "The challenge was not simply to digitize a document. I needed to turn it into a clear and accessible public service that could work for people with very different levels of access to technology."),
  tags: ["GovTech", "Accesibilidad", "Design System", "Mobile first"],
  meta: [
    [x("Rol","Role"), x("UX/UI Designer","UX/UI Designer")],
    [x("Año","Year"), x("Ene – Sep 2022","Jan – Sep 2022")],
    [x("Contexto","Context"), x("DIGITAL-HUMANS × MINSA","DIGITAL-HUMANS × MINSA")],
    [x("Equipo","Team"), x("Diseño, desarrollo y equipo del MINSA","Design, engineering and MINSA team")],
    [x("Herramientas","Tools"), x("Figma, FigJam","Figma, FigJam")],
    [x("Alcance","Scope"), x("Arquitectura, taskflows, wireframes, Design System y prototipos","Architecture, taskflows, wireframes, Design System and prototypes")]
  ],
  tldr: { one: x("El reto no era únicamente simplificar una herramienta utilizada por millones de personas. También tenía que diseñarla para una realidad tecnológica muy diversa, donde no todos los ciudadanos tenían acceso a teléfonos recientes o pantallas grandes.",
                 "The challenge was not only to simplify a service used by millions of people. I also had to design for a very diverse technological reality, where not every citizen had access to a recent smartphone or a large screen.") },
  metrics: [
    [x("+10M", "10M+"), x("de personas utilizaron la plataforma", "people used the platform")],
    [x("Mobile first", "Mobile first"), x("diseñada desde los dispositivos más restrictivos", "designed from the most constrained devices up")],
    [x("Accesibilidad", "Accessibility"), x("pensada para incluir una mayor diversidad de ciudadanos", "designed to include a wider range of citizens")],
    [x("Design System", "Design System"), x("una base consistente para seguir haciendo crecer el producto", "a consistent foundation for the product to grow")]
  ],
  cta: x("Estoy abierto a oportunidades como Product Designer / UX/UI Designer y a proyectos donde pueda participar desde la definición del problema hasta el diseño de la solución.",
         "I’m open to Product Designer / UX/UI Designer opportunities and projects where I can contribute from defining the problem through designing the solution."),
  blocks: [
    { t: "text", h: x("Contexto","Context"), p: [
      x("Durante la pandemia, el Carné de Vacunación se convirtió en una herramienta cotidiana para millones de personas en Perú. Permitía consultar las dosis registradas y mostrar el certificado cuando era necesario.",
        "During the pandemic, the Vaccination Record became an everyday service for millions of people in Peru. It allowed citizens to check their registered doses and show proof of vaccination when required."),
      x("El producto había crecido rápidamente para responder a una situación excepcional. Con ese crecimiento también aparecieron problemas de navegación, jerarquía de información y consistencia entre pantallas.",
        "The product had grown quickly in response to an exceptional situation. As it expanded, issues also emerged around navigation, information hierarchy and consistency across screens."),
      x("Había además otro reto menos visible: diseñar una experiencia pública para ciudadanos con condiciones tecnológicas muy diferentes. Una persona con un teléfono reciente debía poder acceder al mismo servicio que alguien con un equipo de gama baja y una pantalla mucho más pequeña.",
        "There was another, less visible challenge: designing a public digital experience for citizens with very different access to technology. Someone using a recent smartphone needed to access the same service as someone using a low-end device with a much smaller screen."),
      x("Mi trabajo fue revisar esa experiencia y construir una versión más clara, accesible y preparada para seguir creciendo.",
        "My job was to revisit that experience and build a clearer, more accessible foundation that could continue to grow.")
    ], imgs: [
      { key: "minsa_hero", cap: x("Carné de Vacunación digital del MINSA.", "MINSA digital Vaccination Record."), pad: true, wide: true },
      { key: "minsa_old-app", cap: x("App original del MINSA en Play Store.","Original MINSA app on the Play Store."), pad: true, wide: true }
    ] },

    { t: "text", h: x("El problema","The problem"), p: [
      x("Para la mayoría de las personas, entrar al Carné de Vacunación tenía un objetivo muy concreto: encontrar su información y poder mostrarla rápidamente. La interfaz, sin embargo, había acumulado contenido y recorridos que hacían esas tareas menos claras de lo necesario.",
        "For most people, opening the Vaccination Record served a very specific purpose: finding their information and being able to show it quickly. The interface, however, had accumulated content and navigation that made those tasks less straightforward than they needed to be.")
    ], list: [
      x("<strong>Información difícil de priorizar</strong><br>Datos importantes y contenido secundario competían por atención dentro de una misma pantalla.",
        "<strong>Important information was difficult to prioritize</strong><br>Essential information and secondary content competed for attention on the same screen."),
      x("<strong>Recorridos que podían simplificarse</strong><br>Algunas tareas exigían más navegación de la necesaria para llegar a la información buscada.",
        "<strong>Some journeys could be shorter</strong><br>Certain tasks required more navigation than necessary to reach the information people were looking for."),
      x("<strong>Jerarquía visual poco consistente</strong><br>Acciones, mensajes y contenidos no siempre dejaban claro qué debía hacer primero el usuario.",
        "<strong>Inconsistent visual hierarchy</strong><br>Actions, messages and content did not always make it clear what the user should do first."),
      x("<strong>Una gran diversidad de dispositivos</strong><br>El producto debía funcionar para ciudadanos que accedían desde teléfonos con distintos sistemas operativos, tamaños de pantalla y capacidades de hardware.",
        "<strong>A wide range of devices</strong><br>The service needed to work for citizens using different operating systems, screen sizes and levels of hardware performance."),
      x("<strong>Una interfaz que necesitaba escalar</strong><br>A medida que el servicio incorporaba nuevas necesidades, era importante evitar que cada pantalla resolviera los mismos problemas de una manera diferente.",
        "<strong>An interface that needed to scale</strong><br>As new requirements were added, I needed to avoid solving the same interaction problems differently on every screen.")
    ], img: { key: "minsa_old-ui", cap: x("Interfaz original con problemas de jerarquía y consistencia.","Original interface with hierarchy and consistency problems.") } },

    { t: "text", h: x("Descubrimiento y necesidades","Discovery and user needs"), p: [
      x("Antes de diseñar las nuevas pantallas investigué qué tipos de teléfonos, sistemas operativos y tamaños de pantalla eran más utilizados en Perú en ese momento.",
        "Before designing the new screens, I researched which smartphones, operating systems and screen sizes were most commonly used in Peru at the time."),
      x("Ese análisis cambió una decisión importante del proyecto: no diseñar primero para el dispositivo ideal, sino partir de escenarios más restrictivos. Si la herramienta iba a convertirse en parte de la infraestructura digital del Estado, debía poder ser utilizada también por ciudadanos con teléfonos de gama baja.",
        "That research changed an important design decision: instead of starting from the ideal device, I chose to design from more constrained scenarios. If this service was going to become part of the country’s digital public infrastructure, it also needed to work for citizens using low-end smartphones."),
      x("Al mismo tiempo revisé la arquitectura de información, los recorridos principales y los puntos donde la experiencia podía simplificarse. Así pude separar problemas de navegación, contenido, jerarquía y comportamiento responsive antes de entrar en UI.",
        "At the same time, I reviewed the information architecture, key journeys and areas where the experience could be simplified. This allowed me to separate navigation, content, hierarchy and responsive issues before moving into UI design.")
    ], img: { key: "minsa_device-research", cap: x("Dispositivos y resoluciones más usados en Perú.","Most-used devices and resolutions in Peru."), pad: true } },

    { t: "text", h: x("Proceso UX","UX process"), p: [
      x("Primero trabajé sobre estructura y recorridos. Antes de decidir cómo debía verse la interfaz necesitaba tener claro qué información debía aparecer, en qué orden y cómo podía moverse una persona entre las distintas tareas.",
        "I started with structure and user journeys. Before deciding what the interface should look like, I needed to understand what information belonged on each screen, how it should be prioritized and how people would move between the main tasks."),
      x("Las decisiones de interfaz se probaron desde las condiciones más restrictivas que había identificado: pantallas pequeñas, equipos menos recientes y una experiencia que debía seguir siendo comprensible sin depender de un dispositivo de alta gama.",
        "Interface decisions were evaluated against the most constrained conditions I had identified: smaller screens, older devices and an experience that still needed to be understandable without relying on high-end hardware."),
      x("A partir de ahí fui bajando esas decisiones a flujos y propuestas de interfaz que podía revisar con el equipo antes de entrar al detalle visual.",
        "From there, I translated those decisions into flows and interface proposals that I could review with the team before moving into visual detail.")
    ], imgs: [
      { key: "minsa_process", cap: x("Exploración de arquitectura de información","Information architecture exploration"), wide: true },
      { key: "minsa_taskflow", cap: x("Definición de recorridos principales","Defining key user journeys") },
      { key: "minsa_wireframes", cap: x("Primeras propuestas de navegación","Early navigation proposals") }
    ]},

    { t: "decisions", h: x("Objetivos de diseño","Design goals"), items: [
      { h: x("Hacer evidente lo importante","Make what matters obvious"),
        p: x("Dar mayor jerarquía a las tareas y a la información que una persona necesitaba consultar primero.","Give greater hierarchy to the tasks and information people needed to access first.") },
      { h: x("Reducir pasos innecesarios","Remove unnecessary steps"),
        p: x("Simplificar los recorridos para que las tareas frecuentes pudieran resolverse con menos navegación.","Simplify journeys so frequent tasks could be completed with less navigation.") },
      { h: x("Diseñar desde los escenarios más restrictivos","Design from the most constrained scenarios"),
        p: x("Tomar como punto de partida teléfonos de gama baja y pantallas pequeñas, en lugar de asumir que todos los ciudadanos utilizaban dispositivos recientes.","Start with low-end smartphones and smaller screens instead of assuming every citizen had access to a recent device.") },
      { h: x("Crear una interfaz consistente","Create a consistent interface"),
        p: x("Definir componentes y patrones reutilizables para que nuevas funcionalidades pudieran integrarse sin diseñar cada pantalla desde cero.","Define reusable components and patterns so new functionality could be added without redesigning every screen from scratch.") }
    ]},

    { t: "text", h: x("Design System","Design System"), p: [
      x("El rediseño no podía resolverse pantalla por pantalla. Necesitaba una base común que ayudara a mantener consistencia a medida que el producto siguiera creciendo.",
        "The redesign could not be solved one screen at a time. I needed a shared foundation that would keep the experience consistent as the product continued to grow."),
      x("Trabajé en la definición de componentes, variantes y reglas de uso que pudieran reutilizarse en distintas partes de la experiencia y facilitaran el trabajo conjunto entre diseño y desarrollo.",
        "I worked on defining reusable components, variants and usage rules that could be applied across the experience and make collaboration between design and development easier."),
      x("El sistema también debía permitir que esa consistencia se mantuviera en distintos tamaños de pantalla, sin depender de un único tipo de dispositivo.",
        "The system also needed to preserve that consistency across different screen sizes instead of depending on a single type of device.")
    ], imgs: [
      { key: "minsa_design-system", cap: x("Tokens y guidelines del sistema MINSA.","MINSA system tokens and guidelines."), pad: true },
      { key: "minsa_components", cap: x("Componentes y organismos del sistema.","System components and organisms."), pad: true }
    ]},

    { t: "text", h: x("Accesibilidad y mobile first","Accessibility and mobile first"), p: [
      x("Mobile first fue una consecuencia del contexto, no una preferencia de diseño.",
        "Mobile first was a consequence of the context, not a design preference."),
      x("Antes de empezar las interfaces investigué qué teléfonos, sistemas operativos y tamaños de pantalla predominaban en Perú. La conclusión fue clara: diseñar pensando únicamente en teléfonos recientes podía dejar fuera a parte de los ciudadanos que necesitaban utilizar el servicio.",
        "Before designing the interfaces, I researched the smartphones, operating systems and screen sizes that were most common in Peru. The conclusion was clear: designing only around recent smartphones could exclude some of the citizens who needed to use the service."),
      x("Por eso decidí partir de pantallas pequeñas y dispositivos de gama baja. La información esencial debía seguir siendo legible, las acciones principales debían ser claras y los recorridos tenían que funcionar sin asumir hardware reciente.",
        "That is why I chose to start with smaller screens and low-end devices. Essential information still needed to be readable, primary actions needed to remain clear and key journeys had to work without assuming recent hardware."),
      x("Para mí, esa también era una decisión de accesibilidad: que adoptar una nueva tecnología del Estado no dependiera del teléfono que una persona pudiera comprar.",
        "For me, this was also an accessibility decision: adopting a new government technology should not depend on the phone someone could afford.")
    ], imgs: [
      { key: "minsa_before-after", cap: x("Del carné físico al carné digital.","From the paper card to the digital card."), pad: true, wide: true },
      { key: "minsa_final-flow", cap: x("Flujo final del carné de vacunación.","Final vaccination card flow."), wide: true },
      { key: "minsa_final-mockups", cap: x("Mockups finales.","Final mockups."), pad: true },
      { key: "minsa_prototype", cap: x("Prototipos navegables en Figma, versiones iterativas.","Clickable Figma prototypes, iterative versions."), pad: true }
    ]},

    { t: "text", h: x("Resultado","Outcome"), p: [
      x("El rediseño dejó una experiencia más clara y consistente para una plataforma utilizada por más de 10 millones de personas.",
        "The redesign created a clearer and more consistent experience for a platform used by more than 10 million people."),
      x("La nueva arquitectura, el Design System y las decisiones tomadas alrededor de accesibilidad permitieron construir una experiencia pensada para funcionar en una variedad mucho mayor de dispositivos y tamaños de pantalla.",
        "The new architecture, Design System and accessibility decisions created a foundation designed to work across a much wider range of devices and screen sizes."),
      x("Más allá de modernizar la interfaz, el objetivo era que la digitalización del servicio pudiera llegar también a ciudadanos con menor acceso a tecnología reciente.",
        "Beyond modernizing the interface, the goal was to make sure the digitalization of the service could also reach citizens with less access to recent technology.")
    ], img: { key: "minsa_real-world", cap: x("El producto en uso real, cubierto por medios.","The product in real use, covered by the press."), pad: true } },

    { t: "list", h: x("Aprendizajes","Learnings"), items: [
      x("<strong>Accesibilidad también significa entender el contexto tecnológico.</strong><br>No basta con revisar contraste, tipografía o tamaños de botones. El dispositivo desde el que una persona accede también puede convertirse en una barrera.",
        "<strong>Accessibility also means understanding the technological context.</strong><br>It is not only about contrast, typography or button sizes. The device someone uses to access a service can also become a barrier."),
      x("<strong>Diseñar para millones obliga a cuestionar las propias referencias.</strong><br>El teléfono que usa el equipo de diseño no necesariamente representa el teléfono que utiliza la mayoría de los ciudadanos.",
        "<strong>Designing for millions means questioning your own frame of reference.</strong><br>The phone used by a design team does not necessarily represent the devices used by most citizens."),
      x("<strong>Mobile first puede ser una decisión de inclusión.</strong><br>Empezar desde las condiciones más restrictivas me obligó a priorizar mejor la información y evitar que la experiencia dependiera de dispositivos recientes.",
        "<strong>Mobile first can be an inclusion decision.</strong><br>Starting from more constrained conditions forced me to prioritize information more carefully and avoid making the experience dependent on recent devices."),
      x("<strong>Un Design System también ayuda a sostener accesibilidad.</strong><br>Definir patrones compartidos permite que ciertas decisiones no dependan de cómo se resuelva cada pantalla individualmente.",
        "<strong>A Design System can also help sustain accessibility.</strong><br>Shared patterns help ensure that important decisions do not depend on how each individual screen is designed.")
    ]}
  ]
},

/* ====================================================== 05 KARWAY */
{
  slug: "karway", comingSoon: true, num: "05", accent: "oklch(0.56 0.11 65)", thumb: "karway_hero",
  final: true,
  client: x("Karway · Marketplace automotriz","Karway · Automotive marketplace"),
  title: x("De explorar autos a decidir mejor: redefiniendo un marketplace automotriz",
           "From browsing cars to making a decision: redefining an automotive marketplace"),
  short: x("Marketplace automotriz: +55% de conversión","Automotive marketplace: +55% conversion"),
  outcome: x("+55% de conversión en la nueva experiencia digital","+55% conversion in the new digital experience"),
  summary: x("Como Product Manager, definí prioridades del roadmap y trabajé con Diseño, Negocio y Desarrollo para rediseñar la búsqueda, comparación y cotización de vehículos en Karway.",
             "As Product Manager, I set roadmap priorities and worked across Design, Business and Development to redesign how people searched, compared and requested quotes for vehicles on Karway."),
  summary2: x("El objetivo era convertir un catálogo de autos en una herramienta que realmente ayudara a las personas a decidir qué comprar. La nueva experiencia aumentó la conversión un 55%.",
              "The goal was to turn a car catalog into a product that actually helped people decide what to buy. The new experience increased conversion by 55%."),
  tags: ["Marketplace", "Estrategia de producto", "Usabilidad"],
  meta: [
    [x("Rol","Role"), x("Product Manager","Product Manager")],
    [x("Período","Period"), x("Jun 2024 – Jul 2025","Jun 2024 – Jul 2025")],
    [x("Producto","Product"), x("Marketplace de autos nuevos","New-car marketplace")],
    [x("Equipo","Team"), x("Diseño · Negocio · Desarrollo","Design · Business · Development")],
    [x("Herramientas","Tools"), x("Figma, Maze, analítica de producto","Figma, Maze, product analytics")],
    [x("Alcance","Scope"), x("Roadmap, búsqueda, compra y pruebas de usabilidad","Roadmap, search, purchase and usability testing")]
  ],
  tldr: {
    kProblem: x("El objetivo","The goal"),
    kRole: x("Mi trabajo","My work"),
    problem: x("Convertir un catálogo de autos en una herramienta que realmente ayudara a las personas a decidir qué comprar.",
               "To turn a car catalog into a product that actually helped people decide what to buy."),
    role: x("Definí prioridades de producto, conecté research con roadmap y trabajé con el equipo en el rediseño de la experiencia desde la exploración hasta la cotización.",
            "I set product priorities, connected research with the roadmap and worked with the team to redesign the experience from discovery through quote request."),
    result: x("+55% de conversión en la nueva experiencia digital.",
              "55% increase in conversion in the new digital experience.")
  },
  metrics: [
    ["+55%", x("de conversión en la nueva experiencia digital","conversion in the new digital experience")],
    ["1+", x("año liderando iniciativas de producto","year leading product initiatives")],
    ["3", x("áreas coordinadas: Diseño, Negocio y Desarrollo","teams coordinated: Design, Business and Engineering")],
    ["4", x("momentos de la experiencia priorizados en el roadmap","moments of the experience prioritized on the roadmap")]
  ],
  blocks: [
    { t: "text", h: x("Contexto y problema","Context and problem"), p: [
      x("Comprar un auto nuevo implica comparar muchas variables al mismo tiempo: precio, marca, tipo de vehículo, motorización, equipamiento, autonomía o consumo y costos asociados a la propiedad.",
        "Buying a new car means comparing many variables at once: price, brand, vehicle type, powertrain, equipment, range or fuel efficiency, and the costs associated with ownership."),
      x("El problema era que esa información estaba fragmentada entre sitios de marcas, concesionarios y conversaciones con vendedores. Para comparar dos o tres opciones, una persona podía terminar saltando entre distintas fuentes y recibiendo información presentada con criterios diferentes.",
        "The problem was that this information was fragmented across brand websites, dealerships and conversations with salespeople. Comparing two or three options often meant jumping between different sources where information was presented using different criteria."),
      x("Karway buscaba reunir esa decisión en un solo lugar: explorar el mercado, comparar alternativas con criterios consistentes y avanzar hacia una cotización sin tener que empezar de cero con cada marca.",
        "Karway aimed to bring that decision into one place: explore the market, compare alternatives consistently and move toward a quote without starting the research process again with every brand.")
    ], img: { key: "karway_hero", cap: x("Home de Karway en escritorio y móvil.","Karway home on desktop and mobile."), pad: true } },

    { t: "text", h: x("Prioridades del roadmap","Roadmap priorities"), p: [
      x("Como Product Manager, una parte importante de mi trabajo fue decidir qué resolver primero. Las posibilidades eran muchas, pero el roadmap tenía que concentrarse en los momentos que realmente movían la decisión de compra.",
        "As Product Manager, a large part of my work was deciding what to solve first. There were many possible features, but the roadmap needed to focus on the moments that actually moved the purchase decision forward."),
      x("Combiné necesidades detectadas en research, impacto para el negocio y factibilidad técnica para priorizar cuatro momentos de la experiencia.",
        "I combined user evidence, business impact and technical feasibility to prioritize four parts of the experience.")
    ], cells: [
      { n: x("01 · DESCUBRIR","01 · DISCOVER"), h: x("Búsqueda y filtros","Search and filters"),
        p: x("Ayudar a reducir rápidamente un mercado con muchas alternativas utilizando criterios que las personas ya consideran al elegir un auto.","Help people narrow down a large market using criteria they already considered when choosing a car.") },
      { n: x("02 · COMPARAR","02 · COMPARE"), h: x("Comparador","Comparison"),
        p: x("Poder analizar hasta tres vehículos bajo los mismos criterios sin depender de información distribuida entre distintas páginas.","Evaluate up to three vehicles using the same criteria instead of piecing information together across different pages.") },
      { n: x("03 · ENTENDER","03 · UNDERSTAND"), h: x("Ficha del vehículo","Vehicle details"),
        p: x("Organizar características, versiones y precio para ayudar a evaluar una opción con mayor profundidad.","Organize specifications, versions and pricing so users could evaluate an option in greater depth.") },
      { n: x("04 · AVANZAR","04 · MOVE FORWARD"), h: x("Cotización y contacto","Quote and contact"),
        p: x("Convertir el interés en una siguiente acción clara sin obligar al usuario a repetir la investigación que ya había realizado.","Turn interest into a clear next action without asking users to repeat the research they had already completed.") }
    ], capText: x("Prioricé los momentos con mayor impacto en la decisión, no una lista aislada de funcionalidades.",
                  "I prioritized the moments with the greatest impact on the decision, not an isolated list of features.") },

    { t: "decisions", h: x("Decisiones clave","Key decisions"), wLabel: x("Decisión","Decision"), items: [
      { h: x("Filtrar según cómo las personas eligen","Filter around how people actually choose"),
        p: x("Con decenas de modelos disponibles, mostrar más opciones no necesariamente ayudaba a decidir.","With dozens of vehicles available, showing more options did not necessarily make the decision easier."),
        w: x("Priorizar filtros relacionados con criterios reales de compra: tipo de auto, marca, precio, motorización, autonomía o rendimiento y transmisión.","Prioritize filters around real purchase criteria: vehicle type, brand, price, powertrain, range or efficiency, and transmission.") },
      { h: x("Comparar sin perder el contexto","Compare without losing context"),
        p: x("Comparar vehículos requería revisar características, versiones y precios bajo los mismos criterios.","Evaluating vehicles meant reviewing specifications, versions and prices under the same criteria."),
        w: x("Permitir seleccionar hasta tres autos, cambiar la versión de uno de ellos o eliminarlo sin abandonar el comparador.","Allow users to select up to three cars, switch the version of one of them or remove an option without leaving the comparison.") },
      { h: x("Hacer clara la transición entre investigar y cotizar","Make the transition from research to quote clear"),
        p: x("El usuario debía poder entender qué estaba viendo, incluyendo precio y posibles beneficios, antes de entregar sus datos o hablar con un asesor.","Users needed to understand what they were seeing, including pricing and potential benefits, before providing their information or speaking with an advisor."),
        w: x("Mantener precio, información clave y siguiente acción dentro del mismo recorrido para que cotizar fuera una continuación natural de la investigación.","Keep price, key product information and the next action within the same journey so requesting a quote felt like a natural continuation of the research.") }
    ]},

    { t: "twocol", h: x("Validación","Validation"), p: [
      x("No validé pantallas aisladas. Probé el recorrido que una persona seguiría al comparar opciones y acercarse a una decisión de compra.",
        "I did not test isolated screens. I tested the journey someone would follow while comparing alternatives and moving toward a purchase decision."),
      x("En las pruebas de usabilidad, los participantes tenían que seleccionar vehículos, compararlos, cambiar versiones, eliminar alternativas, revisar la ficha de un modelo, entender la información de precio y finalmente avanzar hacia la cotización.",
        "During usability testing, participants selected vehicles, compared them, switched versions, removed alternatives, reviewed a vehicle detail page, interpreted pricing information and finally moved toward requesting a quote."),
      x("Esto me permitió observar no solo si una pantalla era fácil de usar, sino si la información disponible era suficiente para tomar la siguiente decisión.",
        "This allowed me to understand not only whether an interface was easy to use, but whether the information available was enough for someone to make the next decision.")
    ], cols: [
      { k: x("Qué observé","What I observed"), paras: [
        x("<strong>Selección y comparación</strong><br>Si las personas podían elegir hasta tres alternativas y entender rápidamente sus diferencias.","<strong>Selection and comparison</strong><br>Whether people could choose up to three alternatives and quickly understand their differences.")
      ]},
      { k: x("Qué observé","What I observed"), paras: [
        x("<strong>De interés a intención</strong><br>Si la ficha, el precio y la propuesta de cotización daban suficiente confianza para avanzar al siguiente paso.","<strong>From interest to intent</strong><br>Whether product information, pricing and the quote proposal gave users enough confidence to move forward.")
      ]}
    ], imgs: [
      PH("Antes y después del listado de resultados de búsqueda.","Before and after of the search results listing."),
      PH("Ficha del vehículo con la información clave y el botón de contacto.","Vehicle page with key information and the contact button.")
    ]},

    { t: "text", h: x("Resultado","Outcome"), p: [
      x("La nueva experiencia digital aumentó la conversión un 55%.",
        "The new digital experience increased conversion by 55%."),
      x("El cambio no vino de una única pantalla. El trabajo conectó búsqueda, comparación, información de producto y cotización dentro de un recorrido más coherente, reduciendo la distancia entre “estoy mirando opciones” y “quiero avanzar con este auto”.",
        "The improvement did not come from a single screen. The work connected search, comparison, product information and quote requests into a more coherent journey, reducing the distance between “I’m exploring my options” and “I want to move forward with this car.”"),
      x("Para mí, el resultado también validó una forma de trabajar: utilizar research para decidir dónde invertir esfuerzo de producto y medir después si esas decisiones tenían impacto en el negocio.",
        "For me, the result also validated a way of working: use research to decide where product effort should go, then measure whether those decisions create business impact.")
    ]},

    { t: "twocol", h: x("IA en el proceso","AI in the process"), p: [
      x("Usé IA para acelerar partes del trabajo, no para decidir el roadmap. Las prioridades siguieron definiéndose a partir de research, impacto para el negocio, factibilidad técnica y conversación con el equipo.",
        "I used AI to accelerate parts of the work, not to decide the roadmap. Priorities were still based on research, business impact, technical feasibility and discussion with the team.")
    ], cols: [
      { k: x("La usé para","I used it to"), items: [
        { h: x("Organizar feedback de pruebas","Organize testing feedback"), p: x("Agrupar comentarios y detectar temas recurrentes para revisar más rápido las sesiones.","Group comments and identify recurring themes to review sessions more efficiently.") },
        { h: x("Explorar alternativas","Explore alternatives"), p: x("Comparar variantes de copy, estructura y formas de presentar información antes de llevarlas a validación.","Compare copy, structure and information-presentation options before taking them into validation.") }
      ]},
      { k: x("Lo decidí yo","I decided"), items: [
        { h: x("Qué problema priorizar","Which problem to prioritize") },
        { h: x("Qué evidencia era suficiente para cambiar una decisión","When the evidence was strong enough to change a decision") },
        { h: x("Qué entraba o no en el roadmap","What did and did not belong on the roadmap") },
        { h: x("Cómo equilibrar impacto de negocio, usuario y esfuerzo técnico","How to balance user value, business impact and technical effort") }
      ]}
    ]},

    { t: "list", h: x("Aprendizajes","Learnings"), items: [
      x("<strong>Un roadmap también es una lista de cosas que decidiste no hacer.</strong><br>Priorizar significó concentrar al equipo en los momentos que realmente influían en la decisión de compra.",
        "<strong>A roadmap is also a list of things you decided not to build.</strong><br>Prioritization meant focusing the team on the moments that actually influenced the purchase decision."),
      x("<strong>Comparar no consiste en mostrar más información.</strong><br>El valor estaba en ayudar a entender diferencias relevantes bajo criterios consistentes.",
        "<strong>Comparison is not about showing more information.</strong><br>The value came from helping people understand meaningful differences using consistent criteria."),
      x("<strong>Research y negocio no eran conversaciones separadas.</strong><br>Los hallazgos con usuarios servían para decidir dónde invertir tiempo de diseño y desarrollo.",
        "<strong>Research and business were not separate conversations.</strong><br>User evidence helped determine where design and engineering effort should be invested."),
      x("<strong>El rol de Product Manager también ocurre en los detalles.</strong><br>Una prioridad de roadmap solo genera valor cuando producto, diseño y desarrollo comparten qué problema están intentando resolver.",
        "<strong>Product management also happens in the details.</strong><br>A roadmap priority only creates value when product, design and development share an understanding of the problem they are trying to solve.")
    ]}
  ]
},

/* ====================================================== 06 KINDBERRY */
{
  slug: "kindberry", comingSoon: true, num: "06", accent: "oklch(0.58 0.09 320)", thumb: "kindberry_hero",
  client: x("KindBerry · E-commerce premium","KindBerry · Premium e-commerce"),
  title: x("Diseñando un e-commerce premium desde el research hasta el UI","Designing a premium e-commerce from research to UI"),
  short: x("E-commerce de ropa infantil, del research al UI","Children’s clothing e-commerce, from research to UI"),
  outcome: x("[[Benchmark, arquetipos y sistema de UI para una marca premium]]","[[Benchmark, archetypes and UI system for a premium brand]]"),
  summary: x("Diseño de producto digital para una marca premium de ropa infantil, combinando research, benchmark, arquetipos y objetivos de negocio.",
             "Digital product design for a premium children’s clothing brand, combining research, benchmarking, archetypes and business goals."),
  tags: ["E-commerce", "UX Research", "UI Design"],
  meta: [
    [x("Rol","Role"), x("Product Designer","Product Designer")],
    [x("Año","Year"), x("2024 – 2025","2024 – 2025")],
    [x("Contexto","Context"), x("[[Proyecto de DIGITAL-HUMANS]]","[[DIGITAL-HUMANS project]]")],
    [x("Equipo","Team"), x("[[Marca, diseño y desarrollo]]","[[Brand, design and engineering]]")],
    [x("Herramientas","Tools"), x("[[Figma, FigJam]]","[[Figma, FigJam]]")],
    [x("Alcance","Scope"), x("Research, benchmark, arquetipos, objetivos de negocio y UX/UI","Research, benchmark, archetypes, business goals and UX/UI")]
  ],
  tldr: {
    problem: x("[[La marca necesitaba una tienda online que se sintiera tan cuidada como sus prendas y que ayudara a los padres a decidir rápido.]]",
               "[[The brand needed an online store as carefully made as its clothes, one that helped parents decide quickly.]]"),
    role: x("Research, benchmark, arquetipos, objetivos de negocio y diseño UX/UI de punta a punta.",
            "Research, benchmark, archetypes, business goals and end-to-end UX/UI design."),
    result: x("[[Una experiencia de compra premium con un sistema de UI listo para escalar.]]",
              "[[A premium shopping experience with a UI system ready to scale.]]")
  },
  metrics: [
    ["[[5]]", x("[[referentes de e-commerce premium analizados]]","[[premium e-commerce references analysed]]")],
    ["[[3]]", x("[[arquetipos de comprador definidos]]","[[buyer archetypes defined]]")],
    ["[[1]]", x("[[sistema de UI para catálogo, ficha y checkout]]","[[UI system for catalogue, product page and checkout]]")],
    ["[[−25%]]", x("[[pasos hasta el pago en el checkout]]","[[steps to payment in checkout]]")]
  ],
  blocks: [
    { t: "text", h: x("Contexto y problema","Context and problem"), p: [
      x("[[KindBerry vende ropa infantil premium a padres que compran con cuidado y poco tiempo. El reto era trasladar esa sensación cuidada a la tienda online sin volverla lenta.]]",
        "[[KindBerry sells premium children’s clothing to parents who buy carefully and with little time. The challenge was carrying that careful feel into the online store without making it slow.]]")
    ], img: { key: "kindberry_hero", cap: x("Home de KindBerry.","KindBerry home."), pad: true } },
    { t: "text", h: x("Research, benchmark y arquetipos","Research, benchmark and archetypes"), p: [
      x("Combiné research, benchmark de referentes y arquetipos de comprador con los objetivos de negocio de la marca. [[Los arquetipos separan al padre que compra para un evento del que repone básicos.]]",
        "I combined research, benchmarking of references and buyer archetypes with the brand’s business goals. [[The archetypes separate the parent buying for an event from the one restocking basics.]]")
    ], imgs: [
      PH("Tabla de benchmark: 5 tiendas premium × criterios (catálogo, ficha, checkout, contenido).","Benchmark table: 5 premium stores × criteria (catalogue, product page, checkout, content)."),
      PH("Los arquetipos de comprador en tarjetas, con motivación y contexto de compra.","Buyer archetypes as cards, with motivation and purchase context.")
    ]},
    { t: "decisions", h: x("Decisiones de diseño","Design decisions"), items: [
      { h: x("[[Fotografía primero, texto después]]","[[Photography first, copy second]]"),
        p: x("[[El catálogo deja que la imagen lleve la decisión; el texto aparece al pasar a la ficha.]]","[[The catalogue lets imagery carry the decision; copy appears on the product page.]]"),
        w: x("[[Trade-off: exige fotografía consistente en todo el catálogo.]]","[[Trade-off: it demands consistent photography across the catalogue.]]") },
      { h: x("[[Guía de tallas visible sin salir de la ficha]]","[[Size guide visible without leaving the page]]"),
        p: x("[[La talla es la duda principal de los padres, así que se resuelve en un panel lateral.]]","[[Size is parents’ main doubt, so it’s solved in a side panel.]]"),
        w: x("[[Trade-off: un componente más que mantener en el sistema.]]","[[Trade-off: one more component to maintain in the system.]]") },
      { h: x("[[Checkout corto]]","[[Short checkout]]"),
        p: x("[[Un solo paso para dirección y pago, con invitado como opción por defecto.]]","[[A single step for address and payment, with guest checkout as the default.]]"),
        w: x("[[Trade-off: menos captura de cuentas al inicio.]]","[[Trade-off: fewer accounts captured up front.]]") }
    ]},
    { t: "text", h: x("Sistema de UI","UI system"), p: [
      x("[[Definí tipografía, color y componentes para que catálogo, ficha y checkout se sintieran parte de la misma marca.]]",
        "[[I defined typography, colour and components so catalogue, product page and checkout felt like part of the same brand.]]")
    ], imgs: [
      PH("Ficha de producto en móvil con la guía de tallas abierta.","Product page on mobile with the size guide open."),
      PH("Checkout de un paso, estado de error y confirmación.","One-step checkout, error state and confirmation.")
    ]},
    { t: "text", h: x("Resultado","Outcome"), p: [
      x("[[La tienda quedó lista para desarrollo con un sistema de UI documentado. Aún no hay métricas de conversión publicadas.]]",
        "[[The store was ready for development with a documented UI system. No conversion metrics published yet.]]")
    ]},
    { t: "ai", h: x("IA en el proceso","AI in the process"),
      used: [
        x("[[<strong>ChatGPT y Claude:</strong> comparar referentes y ordenar hallazgos del benchmark.]]","[[<strong>ChatGPT and Claude:</strong> comparing references and ordering benchmark findings.]]")
      ],
      mine: [
        x("[[Qué referentes importan, los arquetipos y todas las decisiones de UI.]]","[[Which references matter, the archetypes and every UI decision.]]")
      ] },
    { t: "list", h: x("Aprendizajes","Learnings"), items: [
      x("[[En e-commerce premium, la confianza visual pesa tanto como la usabilidad.]]","[[In premium e-commerce, visual trust weighs as much as usability.]]")
    ]}
  ]
}
];

/* Orden de la sección Experiencia (y numeración visible de los casos) */
const ORDER = ["minsa", "certezia", "pablo", "diners", "karway", "kindberry"];
CASES.sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));
CASES.forEach((c, i) => { c.num = String(i + 1).padStart(2, "0"); });
