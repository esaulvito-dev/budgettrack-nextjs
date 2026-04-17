"use client";
import { useState } from 'react';

const faqs = [
  { q: '¿Cómo funciona BudgetTrack?', a: 'BudgetTrack es una aplicación web que te permite registrar y gestionar tus ingresos, gastos e inventario desde cualquier dispositivo. Solo necesitas crear una cuenta, ingresar tus transacciones y la app genera automáticamente gráficos, reportes y análisis de tus finanzas.' },
  { q: '¿Qué incluye el precio de $12 pago único?', a: 'El pago único de $12 incluye acceso de por vida a todas las funcionalidades: control de gastos e ingresos, gestión de inventario, métricas avanzadas, reportes en PDF, metas de ahorro, transacciones recurrentes, IA financiera, actualizaciones gratuitas y soporte técnico prioritario.' },
  { q: '¿Puedo descargar los reportes?', a: 'Sí, puedes exportar tus reportes financieros en formato PDF y Excel. Los reportes incluyen análisis mensual, comparativas de ingresos vs gastos, desglose por categorías y tasa de ahorro.' },
  { q: '¿Puedo acceder desde mi celular?', a: 'Absolutamente. BudgetTrack está optimizado para funcionar perfectamente en cualquier dispositivo: computadora, tablet o celular. Solo necesitas un navegador web y conexión a internet.' },
  { q: '¿Mis datos están seguros?', a: 'Sí, utilizamos encriptación de nivel bancario para proteger toda tu información. Tus datos financieros están respaldados automáticamente en la nube y nunca son compartidos con terceros.' },
  { q: '¿Cómo realizo el pago?', a: 'El pago se realiza a través de Hotmart, una plataforma segura y confiable. Aceptamos tarjetas de crédito, débito, PayPal y otros métodos de pago según tu país. Una vez completado el pago, recibirás acceso inmediato.' },
  { q: '¿Qué pasa si necesito ayuda?', a: 'Contamos con soporte técnico prioritario disponible 24/7. Puedes contactarnos por chat, email o WhatsApp y nuestro equipo te responderá en el menor tiempo posible.' },
  { q: '¿Es realmente un pago único?', a: 'Sí, es un pago único de $12 sin suscripciones ni costos ocultos. Pagas una sola vez y tienes acceso de por vida a BudgetTrack, incluyendo todas las actualizaciones futuras.' },
  { q: '¿Sirve para negocios o solo uso personal?', a: 'BudgetTrack está diseñado para ambos casos. Puedes usarlo para gestionar tus finanzas personales, las de tu negocio o emprendimiento. Incluye gestión de inventario y reportes profesionales ideales para negocios.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden white-texture-alt">
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"><i className="ri-question-answer-line text-base"></i>Resuelve tus dudas</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">Preguntas <span className="text-gradient">Frecuentes</span></h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">Resolvemos tus dudas sobre BudgetTrack</p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group bg-white rounded-lg sm:rounded-xl border border-gray-100 hover:border-primary/30 px-4 sm:px-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <button className="flex flex-1 items-center justify-between gap-3 w-full text-left text-sm sm:text-base font-semibold py-4 sm:py-5 cursor-pointer group-hover:text-primary transition-colors" onClick={() => setOpen(open === i ? null : i)}>
                <span className="flex items-center gap-2 sm:gap-3">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"><i className="ri-question-line text-primary text-sm sm:text-base"></i></span>
                  <span>{faq.q}</span>
                </span>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <i className={`ri-arrow-down-s-line text-lg sm:text-xl transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              {open === i && <div className="pb-4 sm:pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
