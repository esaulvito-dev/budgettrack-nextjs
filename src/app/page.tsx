import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Testimonios from '@/components/Testimonios';
import Precio from '@/components/Precio';

// Static sections
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-24 pt-28 sm:py-20 sm:pt-24 bg-white">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full border-[2px] border-teal-200/60"></div>
        <div className="absolute top-[-40px] left-[-40px] w-[280px] h-[280px] rounded-full border-[1.5px] border-teal-300/40"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[2px] border-teal-200/50"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[320px] h-[320px] rounded-full border-[1.5px] border-teal-300/40"></div>
        <div className="absolute top-16 left-1/4 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-teal-50/60 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-sm border-2 border-amber-500 text-amber-900 text-sm font-semibold mb-6 shadow-lg" style={{animation:'slideDown 0.8s ease-out'}}>
            <i className="ri-question-line text-base"></i>
            ¿No sabes dónde se fue tu dinero este mes?
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-5 px-2 leading-tight" style={{animation:'fadeInUp 1s ease-out'}}>
            Tu dinero bajo control con BudgetTrack
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-8 px-2 max-w-3xl mx-auto leading-relaxed" style={{animation:'fadeInUp 1.2s ease-out'}}>
            Gestiona ingresos, gastos e inventario en un solo lugar. Métricas inteligentes que te ayudan a tomar mejores decisiones financieras.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-2 sm:px-0" style={{animation:'fadeInUp 1.4s ease-out'}}>
            <a href="#precio" className="group inline-flex items-center justify-center gap-3 whitespace-nowrap font-bold transition-all duration-300 bg-amber-600 hover:bg-amber-700 h-14 sm:h-16 w-full sm:w-auto px-8 sm:px-12 py-4 text-lg sm:text-xl rounded-xl cursor-pointer hover:scale-105 shadow-2xl hover:shadow-amber-500/50 text-white">
              <span>Organiza tu dinero en 5 minutos</span>
              <i className="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto px-2 sm:px-0">
            {[{value:'500+',label:'Usuarios activos'},{value:'$12',label:'Pago único'},{value:'100%',label:'Seguro'},{value:'24/7',label:'Disponible'}].map((stat,i)=>(
              <div key={i} className="text-center p-4 sm:p-5 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 sm:mt-20 -mx-4 sm:mx-0 px-0 sm:px-0">
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="absolute -inset-2 sm:-inset-4 bg-primary/20 rounded-2xl sm:rounded-3xl blur-2xl"></div>
              <div className="relative bg-card border-2 border-primary/30 rounded-xl sm:rounded-3xl p-3 sm:p-6 shadow-glow">
                <div className="flex items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-6 px-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className="ri-play-fill text-white text-2xl sm:text-3xl"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm sm:text-xl font-bold text-foreground">Ver Video</h3>
                      <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight">Descubre todos los detalles de nuestro aplicativo</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg sm:rounded-2xl overflow-hidden bg-muted aspect-video w-full">
                  <iframe src="https://player.vimeo.com/video/1159768753?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1"
                    className="absolute inset-0 w-full h-full" frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title="BudgetTrack - Video Demo" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {icon:'ri-money-dollar-circle-line',title:'Descubre los "gastos hormiga" que te roban dinero',desc:'Identifica en segundos dónde se escapa tu dinero. Un café aquí, un taxi allá... Te mostramos la verdad completa de tus gastos diarios.'},
  {icon:'ri-line-chart-line',title:'Multiplica tus ingresos sin trabajar más horas',desc:'Visualiza patrones ocultos en tus fuentes de ingreso y descubre oportunidades que estaban frente a ti todo el tiempo.'},
  {icon:'ri-archive-line',title:'Evita perder ventas por quedarte sin inventario',desc:'Recibe alertas inteligentes antes de que se agote tu producto estrella. Nunca más pierdas dinero por falta de stock.'},
  {icon:'ri-bar-chart-box-line',title:'Entiende tu negocio en 3 segundos, no en 3 horas',desc:'Gráficos tan claros que tu situación financiera salta a la vista. Toma decisiones con confianza, no con dudas.'},
  {icon:'ri-wallet-3-line',title:'Ahorra sin sentir que te estás sacrificando',desc:'Alertas inteligentes te avisan antes de gastar de más. Alcanza tus metas financieras sin renunciar a lo que amas.'},
  {icon:'ri-shield-check-line',title:'Protección bancaria para tus datos más sensibles',desc:'Encriptación de nivel militar. Tus números están más seguros aquí que en una bóveda física.'},
  {icon:'ri-history-line',title:'Aprende de tus errores sin repetirlos',desc:'Revive cualquier momento de tu historia financiera. Descubre qué funcionó y qué no para mejorar cada mes.'},
  {icon:'ri-device-line',title:'Tu contador personal en el bolsillo 24/7',desc:'Desde el sofá, la oficina o la playa. Gestiona todo desde tu celular sin depender de nadie.'},
  {icon:'ri-settings-3-line',title:'Categorías que reflejan TU vida, no plantillas genéricas',desc:'Personaliza cada detalle según tu realidad. Porque tu negocio es único y merece un sistema único.'},
  {icon:'ri-file-download-line',title:'Reportes profesionales que impresionan en segundos',desc:'Genera documentos detallados para tu contador, socio o banco. Luce profesional sin contratar a nadie.'},
];

function Beneficios() {
  return (
    <section id="beneficios" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Di adiós al estrés financiero. <span className="text-gradient">Todo tu dinero organizado en minutos</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">Resultados reales que transforman tu relación con el dinero</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {benefits.map((b,i)=>(
            <div key={i} className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white shadow-card hover:shadow-glow transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-2 cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl gradient-hero flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <i className={`${b.icon} text-white text-2xl sm:text-3xl`}></i>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const compFeatures = ['Acceso desde cualquier dispositivo','Gráficos y visualizaciones automáticas','Alertas y recordatorios inteligentes','Categorización automática','Reportes profesionales en PDF','Metas de ahorro con seguimiento','Transacciones recurrentes','Respaldo automático en la nube','Análisis de tendencias','Interfaz intuitiva y moderna','Actualizaciones en tiempo real','Seguridad bancaria'];
const budgetTrack = [true,true,true,true,true,true,true,true,true,true,true,true];
const excel = [true,true,false,false,true,false,false,true,false,false,false,false];
const cuaderno = [false,false,false,false,false,false,false,false,false,false,false,false];

function Check({val}:{val:boolean}) {
  return val ? <i className="text-2xl inline-block ri-checkbox-circle-fill text-green-500"></i> : <i className="text-2xl inline-block ri-close-circle-fill text-red-400"></i>;
}

function Comparacion() {
  return (
    <section id="comparacion" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture-dots">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Comparación</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            ¿Por qué elegir <span className="text-gradient">BudgetTrack</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">Compara y descubre por qué miles de personas ya dejaron atrás los métodos tradicionales</p>
        </div>
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-100 shadow-2xl bg-white">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30">
                <th className="text-left p-6 font-semibold text-base w-2/5">Características</th>
                <th className="p-6 text-center bg-primary/5 border-l border-border/30">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg"><i className="ri-smartphone-line text-white text-2xl"></i></div>
                    <div><div className="font-bold text-lg">BudgetTrack</div><span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">Recomendado</span></div>
                  </div>
                </th>
                <th className="p-6 text-center bg-green-50 border-l border-border/30">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg"><i className="ri-file-excel-2-line text-white text-2xl"></i></div>
                    <div><div className="font-bold text-lg">Excel</div></div>
                  </div>
                </th>
                <th className="p-6 text-center bg-gray-50 border-l border-border/30">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center shadow-lg"><i className="ri-book-2-line text-white text-2xl"></i></div>
                    <div><div className="font-bold text-lg">Cuaderno</div></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {compFeatures.map((feat,i)=>(
                <tr key={i} className={`border-t border-gray-100 hover:bg-gray-50/50 transition-colors ${i%2===0?'bg-white':'bg-gray-50/30'}`}>
                  <td className="p-5 font-medium text-sm">{feat}</td>
                  <td className="p-5 text-center border-l border-border/30 bg-primary/5"><Check val={budgetTrack[i]} /></td>
                  <td className="p-5 text-center border-l border-border/30 bg-green-50"><Check val={excel[i]} /></td>
                  <td className="p-5 text-center border-l border-border/30 bg-gray-50"><Check val={cuaderno[i]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const funcFeatures = [
  {badge:'Dashboard Completo',badgeColor:'from-primary to-primary/70',title:'Dashboard Completo',desc:'Visualiza tu balance, ingresos y gastos en tiempo real. Gráficos interactivos de resumen mensual y categorías de gastos.',items:['Balance en tiempo real','Gráficos de categorías','Resumen mensual','Indicador de ahorro'],dotColor:'from-primary to-primary/70',img:'https://app.budgettrack.site/assets/dashboard-DSRUjFus.png',imgAlt:'Dashboard',glowColor:'from-primary to-primary/70',reverse:false},
  {badge:'Gestión de Ingresos',badgeColor:'from-green-500 to-green-400',title:'Gestión de Ingresos',desc:'Registra todas tus fuentes de ingreso con categorías personalizadas. Historial completo y totales mensuales.',items:['Múltiples categorías','Historial detallado','Totales automáticos','Edición rápida'],dotColor:'from-green-500 to-green-400',img:'https://app.budgettrack.site/assets/ingresos-BquTqDx1.png',imgAlt:'Ingresos',glowColor:'from-green-500 to-green-400',reverse:true},
  {badge:'Control de Gastos',badgeColor:'from-red-500 to-red-400',title:'Control de Gastos',desc:'Monitorea cada gasto por categoría. Visualiza tus top categorías con barras de progreso.',items:['Categorías con íconos','Top gastos visual','Barras de progreso','Historial completo'],dotColor:'from-red-500 to-red-400',img:'https://app.budgettrack.site/assets/gastos-9BQ3fEU-.png',imgAlt:'Gastos',glowColor:'from-red-500 to-red-400',reverse:false},
  {badge:'Metas de Ahorro',badgeColor:'from-blue-500 to-blue-400',title:'Metas de Ahorro',desc:'Define objetivos financieros y haz seguimiento de tu progreso con indicadores visuales motivadores.',items:['Objetivos personalizados','Progreso en tiempo real','Múltiples metas','Agregar fondos fácil'],dotColor:'from-blue-500 to-blue-400',img:'https://app.budgettrack.site/assets/metas-D-28cJ-I.png',imgAlt:'Metas',glowColor:'from-blue-500 to-blue-400',reverse:true},
  {badge:'Reportes Detallados',badgeColor:'from-orange-500 to-orange-400',title:'Reportes Detallados',desc:'Analiza tus finanzas con reportes mensuales. Exporta a PDF y visualiza ingresos vs gastos.',items:['Exportar a PDF','Análisis por categoría','Tasa de ahorro','Filtros por período'],dotColor:'from-orange-500 to-orange-400',img:'https://app.budgettrack.site/assets/reportes-CEHbQJ2m.png',imgAlt:'Reportes',glowColor:'from-orange-500 to-orange-400',reverse:false},
];

function Funcionalidades() {
  return (
    <section id="funcionalidades" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture-alt">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Conoce la App</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            Descubre todo lo que puedes hacer con <span className="text-gradient">BudgetTrack</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">Una plataforma completa diseñada para que tengas el control total de tus finanzas.</p>
        </div>
        <div className="space-y-16 sm:space-y-24">
          {funcFeatures.map((f,i)=>(
            <div key={i} className={`flex flex-col ${f.reverse?'lg:flex-row-reverse':'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
              <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${f.badgeColor} text-white text-sm font-medium shadow-lg`}>{f.badge}</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{f.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0">{f.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
                  {f.items.map((item,j)=>(
                    <li key={j} className="flex items-center gap-2 text-xs sm:text-sm group">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${f.dotColor} group-hover:scale-125 transition-transform`}></span>
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group cursor-pointer">
                  <div className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-r ${f.glowColor} rounded-2xl sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-all duration-300`}></div>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl border border-border/50 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-[1.02]">
                    <img alt={f.imgAlt} className="w-full h-auto" loading="lazy" src={f.img} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-100 overflow-hidden bg-gray-50/50">
      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg gradient-hero flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
              <span className="text-primary-foreground font-bold text-base sm:text-lg">B</span>
            </div>
            <span className="font-bold text-lg sm:text-xl group-hover:text-primary transition-colors">BudgetTrack</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {[{href:'#beneficios',label:'Beneficios'},{href:'#funcionalidades',label:'Funcionalidades'},{href:'#precio',label:'Precio'},{href:'#faq',label:'FAQ'}].map((link)=>(
              <a key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-200 py-1">{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-muted-foreground text-center">© 2026 BudgetTrack. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <Comparacion />
        <Funcionalidades />
        <Precio />
        <Testimonios />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
