import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 shadow-glow">
          <span className="text-white font-bold text-4xl">B</span>
        </div>
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
        <Link href="/" className="px-8 py-3 rounded-xl gradient-hero text-white font-semibold hover:shadow-glow transition-all duration-300">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
