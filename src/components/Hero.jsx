import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-purple-700/80 font-medium">
            Pastel Dreams, Elegant You
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
            ELOURA
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            Welcome to Eloura, a world where fashion speaks softly, colors whisper elegance, and every outfit feels like a dream in pastel.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-gradient-to-r from-pink-300 to-purple-300 text-gray-900 font-medium shadow-sm hover:shadow-md transition-all">
              Shop the Collection
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-white/70 text-gray-900 border border-white/60 backdrop-blur font-medium hover:bg-white/90 transition-all">
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white" />
    </section>
  );
}
