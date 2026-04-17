'use client';
import { useState, useEffect } from 'react';

const included = [
  'Control completo de gastos e ingresos','Gestión de inventario ilimitada',
  'Métricas y gráficos avanzados','Reportes mensuales y anuales',
  'Presupuestos personalizados','Historial de transacciones',
  'Acceso desde cualquier dispositivo','Soporte técnico prioritario',
  'Actualizaciones gratuitas','Respaldo automático de datos',
  'Acceso de por vida','Descarga reportes en PDF o Excel',
];

const iaFeatures = [
  { icon: 'ri-pie-chart-2-line', iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Resumen automático', desc: 'Análisis completo de todos tus gastos en segundos' },
  { icon: 'ri-lightbulb-flash-line', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', title: 'Consejos personalizados', desc: 'Recomendaciones según tus hábitos financieros' },
  { icon: 'ri-line-chart-line', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', title: 'Detecta patrones', desc: 'Identifica dónde gastas más y cómo optimizarlo' },
  { icon: 'ri-chat-smile-3-line', iconBg: 'bg-rose-100', iconColor: 'text-rose-500', title: 'Chat financiero', desc: 'Pregunta lo que quieras sobre tus finanzas' },
];

function getInitialTime() {
  return { h: 23, m: 59, s: 48 };
}

function Countdown() {
  const [time, setTime] = useState(getInitialTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div className="flex items-center justify-center gap-3 mb-3">
      {[{ val: time.h, label: 'Horas' }, { val: time.m, label: 'Minutos' }, { val: time.s, label: 'Segundos' }].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white font-bold text-xl sm:text-2xl px-3 py-2 rounded-lg min-w-[50px] shadow-lg text-center">{pad(item.val)}</div>
            <span className="text-xs text-red-700 mt-1 font-medium">{item.label}</span>
          </div>
          {i < 2 && <span className="text-2xl font-bold text-red-600">:</span>}
        </div>
      ))}
    </div>
  );
}

export default function Precio() {
  return (
    <section id="precio" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Un precio, <span className="text-gradient">todo incluido</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">Sin sorpresas, sin costos ocultos. Acceso de por vida.</p>
        </div>
        {/* Bonus eBook */}
        <div className="relative mb-8 sm:mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border-2 border-amber-400/50 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <i className="ri-gift-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-white text-xs sm:text-sm font-bold mb-2 animate-pulse">
                  <i className="ri-time-line"></i>
                  BONO ESPECIAL SOLO POR HOY
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900 mb-2">🎁 eBook GRATIS en PDF</h3>
                <p className="text-base sm:text-lg text-amber-900 font-bold mb-2">"De Caos Financiero a Control Total en 30 Días"</p>
                <p className="text-sm sm:text-base text-amber-800 mb-3">Una guía práctica que te acompaña paso a paso para implementar el sistema, crear hábitos financieros y tomar el control real de tu dinero.</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold text-amber-900 line-through opacity-60">$30</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-gradient">GRATIS</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800 text-sm sm:text-base">
                    <i className="ri-file-pdf-line text-xl"></i>
                    <span className="font-semibold">Formato PDF descargable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Price card */}
        <div className="relative">
          <div className="absolute inset-0 gradient-hero rounded-3xl blur-xl opacity-10"></div>
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-card border border-gray-100 hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="text-center w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  <i className="ri-infinity-line text-base"></i>
                  Acceso de por vida
                </div>
                <div className="flex items-baseline gap-2 justify-center mb-2">
                  <span className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-gradient drop-shadow-[0_0_30px_rgba(20,184,166,0.5)] animate-pulse">$12</span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">Pago único • Sin suscripciones</p>
              </div>
              <div className="text-center w-full max-w-md mx-auto">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-400/50">
                  <p className="text-sm font-semibold text-red-700 mb-3 flex items-center justify-center gap-2">
                    <i className="ri-alarm-warning-line text-lg animate-pulse"></i>
                    Este precio solo estará disponible por tiempo limitado
                  </p>
                  <Countdown />
                  <p className="text-sm font-bold text-red-800">Próximo precio: <span className="text-lg">$25</span></p>
                </div>
                <a href="https://pay.hotmart.com/G104158314B?checkoutMode=10" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:via-rose-600 hover:to-pink-600 text-white shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] w-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer mt-5 leading-tight">
                  <i className="ri-shopping-cart-line text-xl sm:text-2xl flex-shrink-0"></i>
                  <span className="text-center">Sí, quiero mi acceso de por vida por $12</span>
                  <i className="ri-arrow-right-line text-lg sm:text-xl group-hover:translate-x-1 transition-transform flex-shrink-0"></i>
                </a>
                <p className="text-xs sm:text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
                  <i className="ri-flashlight-line text-primary"></i>
                  Acceso inmediato • Sin tarjeta requerida
                </p>
                {/* IA badge */}
                <div className="mt-6 relative overflow-hidden rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50 shadow-md">
                  <div className="relative p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-md flex-shrink-0">
                        <i className="ri-robot-line text-white text-xl"></i>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-foreground">IA incluida en tu plan</span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block"></span>
                            ACTIVA
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Tu asesor financiero inteligente 24/7</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {iaFeatures.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all duration-200 group">
                          <div className={`w-8 h-8 rounded-lg ${f.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <i className={`${f.icon} ${f.iconColor} text-base`}></i>
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-semibold text-foreground">{f.title}</p>
                            <p className="text-[11px] text-muted-foreground leading-snug">{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-12 pt-6 sm:pt-10 border-t border-gray-100 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {included.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 group hover:translate-x-1 transition-transform duration-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <i className="ri-check-line text-white text-sm sm:text-base"></i>
                      </div>
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
  );
}
