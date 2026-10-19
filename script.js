// 1. Datos de los segmentos de clientes de VoltaPuerto
const segmentsData = {
  transporte: {
    tag: 'CONSORCIO VALPARAÍSO · VIÑA BUS S.A. · TROLEBÚS',
    metric: '~240 <em>buses eléctricos</em>',
    sub: 'Nuevos desde 2027 operando en 3 electroterminales del Gran Valparaíso.',
    problem: 'Un cargador caído deja buses sin carga nocturna e interrumpe un servicio público esencial.',
    service: 'Supervisor asignado a cada electroterminal, mesa de ayuda 24/7, SLA con respuesta menor a 2h y reporte mensual.'
  },
  mineria: {
    tag: 'CODELCO DIVISIÓN ANDINA · FUTURO EL TENIENTE (O’HIGGINS)',
    metric: '8 <em>puntos en faena</em>',
    sub: 'Operando hoy en Andina para el traslado continuo de trabajadores en 7 buses eléctricos.',
    problem: 'El traslado de turnos mineros no puede detenerse y los cargadores están en alta montaña, lejos de la ciudad.',
    service: 'Técnicos acreditados en faena, monitoreo remoto continuo y co-creación de protocolos de seguridad eléctrica.'
  },
  logistica: {
    tag: 'CHILEXPRESS · CENTROS LOGÍSTICOS · FLOTAS CORPORATIVAS',
    metric: '76,5% <em>red privada</em>',
    sub: '4.015 de los 5.245 cargadores del país pertenecen a flotas privadas que cargan de noche.',
    problem: 'Las flotas comerciales cargan en horario nocturno: una falla de madrugada significa pedidos sin entregar.',
    service: 'Plan mensual por cargador, diagnóstico inicial sin costo, atención 24/7 por WhatsApp/teléfono y portal con historial.'
  }
};

// 2. Cambio interactivo de Segmentos
const tabs = document.querySelectorAll('.seg-tab');
const segTag = document.getElementById('segTag');
const segMetric = document.getElementById('segMetric');
const segSub = document.getElementById('segSub');
const segProblem = document.getElementById('segProblem');
const segService = document.getElementById('segService');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    const key = tab.getAttribute('data-segment');
    const data = segmentsData[key];

    segTag.textContent = data.tag;
    segMetric.innerHTML = data.metric;
    segSub.textContent = data.sub;
    segProblem.textContent = data.problem;
    segService.textContent = data.service;
  });
});

// 3. Selector minimalista de atmósfera de gradiente (inspirado en feralUI)
const atmospheres = [
  { id: 'mint', label: 'Mint Ice' },
  { id: 'volt', label: 'Port Volt' },
  { id: 'pacific', label: 'Pacific Bay' }
];

let currentAtm = 0;
const themeToggle = document.getElementById('themeToggle');
const themeName = document.getElementById('themeName');

themeToggle.addEventListener('click', () => {
  currentAtm = (currentAtm + 1) % atmospheres.length;
  const next = atmospheres[currentAtm];
  document.body.setAttribute('data-atmosphere', next.id);
  themeName.textContent = next.label;
});

// 4. Simulación de envío de diagnóstico técnico
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const empresa = document.getElementById('empresa').value.trim();
  const cargadores = document.getElementById('cargadores').value;

  formFeedback.textContent = `✓ Solicitud registrada para ${empresa} (${cargadores} cargadores). Nuestro equipo SEC te contactará en menos de 2 horas.`;
  contactForm.reset();
});