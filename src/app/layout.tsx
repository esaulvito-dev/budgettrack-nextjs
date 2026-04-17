import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'BudgetTrack — Tu dinero bajo control',
  description: 'Gestiona ingresos, gastos e inventario en un solo lugar. Métricas inteligentes con IA. Pago único $12.',
  keywords: 'control financiero, presupuesto, gastos, ingresos, inventario, IA financiera',
  openGraph: {
    title: 'BudgetTrack — Tu dinero bajo control',
    description: 'Gestiona ingresos, gastos e inventario con inteligencia artificial. Pago único $12.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
