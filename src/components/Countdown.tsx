"use client";
import { useState, useEffect } from 'react';

function getInitialTime() {
  const h = 23, m = 59, s = 48;
  return { h, m, s };
}

export default function Countdown() {
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
            <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white font-bold text-xl sm:text-2xl px-3 py-2 rounded-lg min-w-[50px] shadow-lg text-center" style={{minHeight: '52px'}}>
              {pad(item.val)}
            </div>
            <span className="text-xs text-red-700 mt-1 font-medium">{item.label}</span>
          </div>
          {i < 2 && <span className="text-2xl font-bold text-red-600">:</span>}
        </div>
      ))}
    </div>
  );
}
