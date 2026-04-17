import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BudgetTrack — Control de Finanzas Inteligente",
  description: "Gestiona ingresos, gastos e inventario en un solo lugar. Métricas inteligentes con IA para tomar mejores decisiones financieras. Acceso de por vida por $12.",
  keywords: "control de gastos, finanzas personales, presupuesto, ahorro, inventario, app financiera",
  openGraph: {
    title: "BudgetTrack — Tu dinero bajo control",
    description: "Gestiona ingresos, gastos e inventario con IA. Pago único $12.",
    type: "website",
    url: "https://websiteapp.budgettrack.cloud",
  },
  twitter: { card: "summary_large_image", title: "BudgetTrack", description: "Control total de tus finanzas con IA" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
      </head>
      <body className={inter.variable}>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '793340195800027');
            fbq('track', 'PageView');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
