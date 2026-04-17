import Navbar from '@/components/Navbar';
import Testimonios from '@/components/Testimonios';
import FAQ from '@/components/FAQ';
import Countdown from '@/components/Countdown';
import VideoPlayer from '@/components/VideoPlayer';

const benefits = [
  { icon: 'ri-money-dollar-circle-line', title: 'Descubre los "gastos hormiga" que te roban dinero', desc: 'Identifica en segundos dónde se escapa tu dinero. Un café aquí, un taxi allá... Te mostramos la verdad completa de tus gastos diarios.' },
  { icon: 'ri-line-chart-line', title: 'Multiplica tus ingresos sin trabajar más horas', desc: 'Visualiza patrones ocultos en tus fuentes de ingreso y descubre oportunidades que estaban frente a ti todo el tiempo.' },
  { icon: 'ri-archive-line', title: 'Evita perder ventas por quedarte sin inventario', desc: 'Recibe alertas inteligentes antes de que se agote tu producto estrella. Nunca más pierdas dinero por falta de stock.' },
  { icon: 'ri-bar-chart-box-line', title: 'Entiende tu negocio en 3 segundos, no en 3 horas', desc: 'Gráficos tan claros que tu situación financiera salta a la vista. Toma decisiones con confianza, no con dudas.' },
  { icon: 'ri-wallet-3-line', title: 'Ahorra sin sentir que te estás sacrificando', desc: 'Alertas inteligentes te avisan antes de gastar de más. Alcanza tus metas financieras sin renunciar a lo que amas.' },
  { icon: 'ri-shield-check-line', title: 'Protección bancaria para tus datos más sensibles', desc: 'Encriptación de nivel militar. Tus números están más seguros aquí que en una bóveda física.' },
  { icon: 'ri-history-line', title: 'Aprende de tus errores sin repetirlos', desc: 'Revive cualquier momento de tu historia financiera. Descubre qué funcionó y qué no para mejorar cada mes.' },
  { icon: 'ri-device-line', title: 'Tu contador personal en el bolsillo 24/7', desc: 'Desde el sofá, la oficina o la playa. Gestiona todo desde tu celular sin depender de nadie.' },
  { icon: 'ri-settings-3-line', title: 'Categorías que reflejan TU vida, no plantillas genéricas', desc: 'Personaliza cada detalle según tu realidad. Porque tu negocio es único y merece un sistema único.' },
  { icon: 'ri-file-download-line', title: 'Reportes profesionales que impresionan en segundos', desc: 'Genera documentos detallados para tu contador, socio o banco. Luce profesional sin contratar a nadie.' },
];

const compFeatures = ['Acceso desde cualquier dispositivo','Gráficos y visualizaciones automáticas','Alertas y recordatorios inteligentes','Categorización automática','Reportes profesionales en PDF','Metas de ahorro con seguimiento','Transacciones recurrentes','Respaldo automático en la nube','Análisis de tendencias','Interfaz intuitiva y moderna','Actualizaciones en tiempo real','Seguridad bancaria'];
const budgetTrack = [true,true,true,true,true,true,true,true,true,true,true,true];
const excel = [true,true,false,false,true,false,false,true,false,false,false,false];
const cuaderno = [false,false,false,false,false,false,false,false,false,false,false,false];

const funcFeatures = [
  { badge: 'Dashboard Completo', badgeColor: 'from-primary to-primary/70', title: 'Dashboard Completo', desc: 'Visualiza tu balance, ingresos y gastos en tiempo real. Gráficos interactivos de resumen mensual y categorías de gastos.', items: ['Balance en tiempo real','Gráficos de categorías','Resumen mensual','Indicador de ahorro'], dotColor: 'from-primary to-primary/70', img: 'https://app.budgettrack.site/assets/dashboard-DSRUjFus.png', imgAlt: 'BudgetTrack - Dashboard', glowColor: 'from-primary to-primary/70', reverse: false },
  { badge: 'Gestión de Ingresos', badgeColor: 'from-green-500 to-green-400', title: 'Gestión de Ingresos', desc: 'Registra todas tus fuentes de ingreso con categorías personalizadas. Historial completo y totales mensuales.', items: ['Múltiples categorías','Historial detallado','Totales automáticos','Edición rápida'], dotColor: 'from-green-500 to-green-400', img: 'https://app.budgettrack.site/assets/ingresos-BquTqDx1.png', imgAlt: 'BudgetTrack - Ingresos', glowColor: 'from-green-500 to-green-400', reverse: true },
  { badge: 'Control de Gastos', badgeColor: 'from-red-500 to-red-400', title: 'Control de Gastos', desc: 'Monitorea cada gasto por categoría. Visualiza tus top categorías con barras de progreso y edita transacciones fácilmente.', items: ['Categorías con íconos','Top gastos visual','Barras de progreso','Historial completo'], dotColor: 'from-red-500 to-red-400', img: 'https://app.budgettrack.site/assets/gastos-9BQ3fEU-.png', imgAlt: 'BudgetTrack - Gastos', glowColor: 'from-red-500 to-red-400', reverse: false },
  { badge: 'Metas de Ahorro', badgeColor: 'from-blue-500 to-blue-400', title: 'Metas de Ahorro', desc: 'Define objetivos financieros y haz seguimiento de tu progreso. Alcanza tus metas con indicadores visuales motivadores.', items: ['Objetivos personalizados','Progreso en tiempo real','Múltiples metas','Agregar fondos fácil'], dotColor: 'from-blue-500 to-blue-400', img: 'https://app.budgettrack.site/assets/metas-D-28cJ-I.png', imgAlt: 'BudgetTrack - Metas', glowColor: 'from-blue-500 to-blue-400', reverse: true },
  { badge: 'Transacciones Recurrentes', badgeColor: 'from-purple-500 to-purple-400', title: 'Transacciones Recurrentes', desc: 'Automatiza gastos e ingresos fijos. Recordatorios diarios y registro con un solo clic.', items: ['Gastos automáticos','Recordatorios','Un clic para registrar','Resumen diario'], dotColor: 'from-purple-500 to-purple-400', img: 'https://app.budgettrack.site/assets/recurrentes-B9fKmUnd.png', imgAlt: 'BudgetTrack - Recurrentes', glowColor: 'from-purple-500 to-purple-400', reverse: false },
  { badge: 'Reportes Detallados', badgeColor: 'from-orange-500 to-orange-400', title: 'Reportes Detallados', desc: 'Analiza tus finanzas con reportes mensuales. Exporta a PDF y visualiza ingresos vs gastos por categoría.', items: ['Exportar a PDF','Análisis por categoría','Tasa de ahorro','Filtros por período'], dotColor: 'from-orange-500 to-orange-400', img: 'https://app.budgettrack.site/assets/reportes-CEHbQJ2m.png', imgAlt: 'BudgetTrack - Reportes', glowColor: 'from-orange-500 to-orange-400', reverse: true },
];

const included = ['Control completo de gastos e ingresos','Gestión de inventario ilimitada','Métricas y gráficos avanzados','Reportes mensuales y anuales','Presupuestos personalizados','Historial de transacciones','Acceso desde cualquier dispositivo','Soporte técnico prioritario','Actualizaciones gratuitas','Respaldo automático de datos','Acceso de por vida','Descarga reportes en PDF o Excel'];

const iaFeatures = [
  { icon: 'ri-pie-chart-2-line', iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Resumen automático', desc: 'Análisis completo de todos tus gastos en segundos' },
  { icon: 'ri-lightbulb-flash-line', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', title: 'Consejos personalizados', desc: 'Recomendaciones según tus hábitos financieros' },
  { icon: 'ri-line-chart-line', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', title: 'Detecta patrones', desc: 'Identifica dónde gastas más y cómo optimizarlo' },
  { icon: 'ri-chat-smile-3-line', iconBg: 'bg-rose-100', iconColor: 'text-rose-500', title: 'Chat financiero', desc: 'Pregunta lo que quieras sobre tus finanzas' },
];

function Check({ val }: { val: boolean }) {
  return val ? <i className="text-2xl inline-block ri-checkbox-circle-fill text-green-500"></i> : <i className="text-2xl inline-block ri-close-circle-fill text-red-400"></i>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-24 pt-28 sm:py-20 sm:pt-24 bg-white">
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full border-[2px] border-teal-200/60"></div>
            <div className="absolute top-[-40px] left-[-40px] w-[280px] h-[280px] rounded-full border-[1.5px] border-teal-300/40"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[2px] border-teal-200/50"></div>
            <div className="absolute top-16 left-1/4 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl"></div>
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
                <a href="#precio" className="group inline-flex items-center justify-center gap-3 whitespace-nowrap font-bold bg-amber-600 hover:bg-amber-700 h-14 sm:h-16 w-full sm:w-auto px-8 sm:px-12 py-4 text-lg sm:text-xl rounded-xl hover:scale-105 shadow-2xl hover:shadow-amber-500/50 text-white transition-all duration-300">
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
              <div className="mt-12 sm:mt-20 -mx-4 sm:mx-0 px-0 sm:px-0" style={{animation:'fadeInUp 2s ease-out'}}>
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="absolute -inset-2 sm:-inset-4 bg-primary/20 rounded-2xl sm:rounded-3xl blur-2xl"></div>
                  <div className="relative bg-card border-2 border-primary/30 rounded-xl sm:rounded-3xl p-3 sm:p-6 shadow-glow hover:scale-[1.02] transition-transform duration-500">
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
                    <VideoPlayer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section id="beneficios" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">Di adiós al estrés financiero. <span className="text-gradient">Todo tu dinero organizado en minutos</span></h2>
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

        {/* COMPARACION */}
        <section id="comparacion" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture-dots">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Comparación</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">¿Por qué elegir <span className="text-gradient">BudgetTrack</span>?</h2>
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
            <div className="mt-12 sm:mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-card">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">¿Listo para el cambio?</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Únete a miles de usuarios que ya transformaron su forma de gestionar el dinero</p>
                </div>
                <a href="#precio" className="whitespace-nowrap px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer">Comenzar Ahora</a>
              </div>
            </div>
          </div>
        </section>

        {/* FUNCIONALIDADES */}
        <section id="funcionalidades" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture-alt">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Conoce la App</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">Descubre todo lo que puedes hacer con <span className="text-gradient">BudgetTrack</span></h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">Una plataforma completa diseñada para que tengas el control total de tus finanzas personales o de negocio.</p>
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

        {/* IA SECTION */}
        <section id="ia" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture-dots">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"><i className="ri-robot-line text-lg"></i>Potenciado con IA</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">Inteligencia Artificial con <span className="text-gradient">BudgetTrack</span></h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 leading-relaxed">Puedes pedirle a la inteligencia artificial de nuestro programa que te haga un <strong className="text-foreground">resumen de todos tus gastos</strong> de manera rápida y que te dé <strong className="text-foreground">consejos</strong> sobre en dónde estás gastando más.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center">
              <div className="flex-1 w-full max-w-lg relative">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-teal-400/20 rounded-2xl blur-xl opacity-30 transition-all duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                    <div className="relative w-full h-[340px] sm:h-[400px] overflow-hidden rounded-xl bg-gray-50">
                      <div className="absolute left-2 top-8 w-[55%] h-[85%] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                        <div className="bg-primary/10 px-3 py-2 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md gradient-hero flex items-center justify-center"><span className="text-white text-xs font-bold">B</span></div>
                          <span className="text-xs font-semibold text-foreground">BudgetTrack</span>
                        </div>
                        <div className="p-3 space-y-2">
                          <div className="bg-primary/5 rounded-lg p-2"><div className="text-[10px] text-muted-foreground mb-1">Balance Total</div><div className="text-sm font-bold text-foreground">S/ 4,250.00</div></div>
                          <div className="bg-amber-50 rounded-lg p-2 mt-2"><div className="text-[10px] text-amber-700 font-medium">📊 Resumen IA</div><div className="text-[9px] text-amber-600 mt-1">Tu gasto principal es transporte (42%)</div></div>
                        </div>
                      </div>
                      <div className="absolute right-1 top-4 w-[55%] h-[88%] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-10">
                        <div className="bg-white px-3 py-2 border-b border-gray-100 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center"><i className="ri-robot-line text-white text-xs"></i></div>
                          <div className="flex-1"><span className="text-xs font-semibold">IA de BudgetTrack</span></div>
                          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="text-[9px] text-green-600">En línea</span></div>
                        </div>
                        <div className="p-2 space-y-2 h-[calc(100%-70px)]">
                          <div className="flex justify-end"><div className="bg-amber-500 text-white text-[9px] px-2.5 py-1.5 rounded-xl rounded-tr-md max-w-[85%]">¿Cuáles son mis principales fuentes de ingreso?</div></div>
                          <div className="flex justify-start"><div className="bg-gray-100 text-foreground text-[9px] px-2.5 py-2 rounded-xl rounded-tl-md max-w-[90%] leading-relaxed"><p className="font-medium mb-1">¡Hola! He analizado tus movimientos:</p><p className="text-[8px]">• Transporte (S/ 1,900): 90.5%</p><p className="text-[8px] mt-1">💡 Te sugiero diversificar.</p></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="bg-white px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center shadow-md"><i className="ri-robot-line text-white text-lg"></i></div>
                    <div className="flex-1"><h4 className="text-sm font-bold text-foreground">IA de BudgetTrack</h4><p className="text-xs text-muted-foreground">Tu asesor financiero personal</p></div>
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div><span className="text-xs text-green-600 font-medium">En línea</span></div>
                  </div>
                  <div className="p-5 space-y-4 min-h-[320px] bg-gray-50/30">
                    <div className="flex justify-end"><div className="bg-amber-500 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-md max-w-[80%] shadow-sm">¿Cuáles son mis principales fuentes de ingreso?</div></div>
                    <div className="flex justify-start"><div className="bg-white text-foreground text-sm px-4 py-3 rounded-2xl rounded-tl-md max-w-[90%] shadow-sm border border-gray-100 leading-relaxed"><p className="font-medium mb-2">¡Hola! He analizado tus movimientos:</p><div className="space-y-1 text-xs"><p>• Transporte (S/ 1,900.00): 90.5% del total</p><p>• Negocio (S/ 100.00): Ingreso adicional</p></div><div className="mt-3 pt-2 border-t border-gray-100"><p className="text-xs">💡 <strong>Consejo:</strong> Te sugiero diversificar tus fuentes de ingreso.</p></div></div></div>
                  </div>
                  <div className="px-5 py-3 bg-white border-t border-gray-100">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200">
                      <span className="text-sm text-muted-foreground flex-1">Pregunta sobre tus finanzas...</span>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md"><i className="ri-send-plane-fill text-white text-sm"></i></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 relative overflow-hidden rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50 shadow-md">
                  <div className="relative p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-md flex-shrink-0"><i className="ri-robot-line text-white text-xl"></i></div>
                      <div className="text-left">
                        <div className="flex items-center gap-2"><span className="text-sm font-bold text-foreground">IA incluida en tu plan</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block"></span>ACTIVA</span></div>
                        <p className="text-xs text-muted-foreground">Tu asesor financiero inteligente 24/7</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {iaFeatures.map((f,i)=>(
                        <div key={i} className={`flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all duration-200 group`}>
                          <div className={`w-8 h-8 rounded-lg ${f.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}><i className={`${f.icon} ${f.iconColor} text-base`}></i></div>
                          <div className="text-left"><p className="text-xs font-semibold text-foreground">{f.title}</p><p className="text-[11px] text-muted-foreground leading-snug">{f.desc}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRECIO */}
        <section id="precio" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture">
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">Un precio, <span className="text-gradient">todo incluido</span></h2>
              <p className="text-base sm:text-lg text-muted-foreground px-2">Sin sorpresas, sin costos ocultos. Acceso de por vida.</p>
            </div>
            <div className="relative mb-8 sm:mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border-2 border-amber-400/50 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg"><i className="ri-gift-line text-white text-2xl sm:text-3xl"></i></div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-white text-xs sm:text-sm font-bold mb-2 animate-pulse"><i className="ri-time-line"></i>BONO ESPECIAL SOLO POR HOY</div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900 mb-2">🎁 eBook GRATIS en PDF</h3>
                    <p className="text-base sm:text-lg text-amber-900 font-bold mb-2">"De Caos Financiero a Control Total en 30 Días"</p>
                    <p className="text-sm sm:text-base text-amber-800 mb-3">Una guía práctica que te acompaña paso a paso para implementar el sistema, crear hábitos financieros y tomar el control real de tu dinero.</p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-2"><span className="text-lg sm:text-xl font-bold text-amber-900 line-through opacity-60">$30</span><span className="text-2xl sm:text-3xl font-extrabold text-gradient">GRATIS</span></div>
                      <div className="flex items-center gap-2 text-amber-800 text-sm sm:text-base"><i className="ri-file-pdf-line text-xl"></i><span className="font-semibold">Formato PDF descargable</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-3xl blur-xl opacity-10"></div>
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-card border border-gray-100 hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col items-center gap-6 sm:gap-8">
                  <div className="text-center w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4"><i className="ri-infinity-line text-base"></i>Acceso de por vida</div>
                    <div className="flex items-baseline gap-2 justify-center mb-2">
                      <span className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-gradient drop-shadow-[0_0_30px_rgba(20,184,166,0.5)] animate-pulse">$12</span>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2">Pago único • Sin suscripciones</p>
                  </div>
                  <div className="text-center w-full max-w-md mx-auto">
                    <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-400/50">
                      <p className="text-sm font-semibold text-red-700 mb-3 flex items-center justify-center gap-2"><i className="ri-alarm-warning-line text-lg animate-pulse"></i>Este precio solo estará disponible por tiempo limitado</p>
                      <Countdown />
                      <p className="text-sm font-bold text-red-800">Próximo precio: <span className="text-lg">$25</span></p>
                    </div>
                    <a href="https://pay.hotmart.com/G104158314B?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:via-rose-600 hover:to-pink-600 text-white shadow-[0_0_30px_rgba(249,115,22,0.5)] w-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer mt-5 leading-tight">
                      <i className="ri-shopping-cart-line text-xl sm:text-2xl flex-shrink-0"></i>
                      <span className="text-center">Sí, quiero mi acceso de por vida por $12</span>
                      <i className="ri-arrow-right-line text-lg sm:text-xl group-hover:translate-x-1 transition-transform flex-shrink-0"></i>
                    </a>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2"><i className="ri-flashlight-line text-primary"></i>Acceso inmediato • Sin tarjeta requerida</p>
                  </div>
                  <div className="mt-6 sm:mt-12 pt-6 sm:pt-10 border-t border-gray-100 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {included.map((item,i)=>(
                        <div key={i} className="flex items-center gap-2 sm:gap-3 group hover:translate-x-1 transition-transform duration-200">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"><i className="ri-check-line text-white text-sm sm:text-base"></i></div>
                          <span className="text-foreground text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonios />
        <FAQ />
      </main>

      {/* FOOTER */}
      <footer className="relative py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-100 overflow-hidden bg-gray-50/50">
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg gradient-hero flex items-center justify-center shadow-md"><span className="text-primary-foreground font-bold text-base sm:text-lg">B</span></div>
              <span className="font-bold text-lg sm:text-xl group-hover:text-primary transition-colors">BudgetTrack</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-4">
              {[{href:'#beneficios',icon:'ri-gift-line',label:'Beneficios'},{href:'#funcionalidades',icon:'ri-function-line',label:'Funcionalidades'},{href:'#precio',icon:'ri-price-tag-3-line',label:'Precio'},{href:'#faq',icon:'ri-question-line',label:'FAQ'}].map((link)=>(
                <a key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-200 py-1 hover:scale-110 inline-flex items-center gap-1.5 group">
                  <i className={`${link.icon} text-base group-hover:rotate-12 transition-transform`}></i>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">Hecho con <i className="ri-heart-fill text-red-500 animate-pulse"></i></p>
              <p className="text-xs sm:text-sm text-muted-foreground text-center">© 2026 BudgetTrack. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
