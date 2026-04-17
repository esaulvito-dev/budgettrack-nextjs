'use client';
import { useState } from 'react';

const testimonials = [
  { text: '"Gracias a BudgetTrack ahorré S/2,400 en 6 meses y finalmente pude dar la cuota inicial de mi casa"', name: 'María García', role: 'Emprendedora', img: 'https://static.readdy.ai/image/3e793795e87845ada69b8088167d8f30/7c20902a9e930098296e3e917388d5ed.jpeg' },
  { text: '"Como freelancer, necesitaba algo simple pero potente. BudgetTrack es exactamente eso. La gestión de inventario y las métricas avanzadas me han ahorrado horas de trabajo cada semana."', name: 'Carlos Mendoza', role: 'Freelancer', img: 'https://static.readdy.ai/image/3e793795e87845ada69b8088167d8f30/99ff2300a707fc486248e3bc2fa97731.jpeg' },
  { text: '"Lo mejor que he invertido. Antes usaba Excel y perdía mucho tiempo. Ahora todo está automatizado y puedo ver mis finanzas desde el celular en cualquier momento."', name: 'Ana Lucía Torres', role: 'Dueña de tienda', img: 'https://static.readdy.ai/image/3e793795e87845ada69b8088167d8f30/94eea1df8e98333c4ab88ea8713e48cb.jpeg' },
];

const stats = [
  { value: '2,500+', label: 'Usuarios activos' },
  { value: '4.9/5', label: 'Calificación promedio' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte disponible' },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => <i key={i} className="ri-star-fill text-amber-400 text-lg"></i>)}
    </div>
  );
}

export default function Testimonios() {
  const [current, setCurrent] = useState(0);
  return (
    <section id="testimonios" className="py-16 sm:py-24 px-4 sm:px-6 white-texture-dots relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <i className="ri-chat-quote-line text-lg"></i>
            Testimonios
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen <span className="text-gradient">nuestros usuarios</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">Miles de personas ya confían en BudgetTrack para gestionar sus finanzas.</p>
        </div>
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="group bg-white rounded-2xl p-6 shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Stars />
              <p className="text-foreground text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img alt={t.name} className="w-full h-full object-cover" src={t.img} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-border/50">
                    <Stars />
                    <p className="text-foreground text-sm leading-relaxed mb-6">{t.text}</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
                        <img alt={t.name} className="w-full h-full object-cover" src={t.img} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t.name}</h4>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400 w-2.5'}`}
                aria-label={`Testimonio ${i + 1}`} onClick={() => setCurrent(i)}></button>
            ))}
          </div>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-4 sm:p-6 rounded-xl bg-white shadow-card border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{s.value}</div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
