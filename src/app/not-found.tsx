export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
        <a href="/" className="px-6 py-3 rounded-xl gradient-hero text-white font-semibold hover:scale-105 transition-transform">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
