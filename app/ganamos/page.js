export default function Ganamos() {
  const bannerText =
    "¡Aprovechá el bono de bienvenida y ganá más! ¡No te lo pierdas! ";

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-black pb-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/photo-1604028296525-8304e1a4969f.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>{" "}

      <div className="relative z-10 text-center flex flex-col justify-center items-center">
        <div className="fixed top-0 left-0 w-full overflow-hidden z-50 banner-container">
          <div className="inline-block animate-marquee">
            {bannerText.repeat(15).toUpperCase()}
          </div>
        </div>

        <img src="/dianawin1.png" alt="DianaWIN" className="w-45 h-45 mb-4" />

        <p className="text-5xl font-bold text-white text-shadow mb-4">
          Diana<span className="WIN">WIN</span>
        </p>
        <p className="text-2xl m-1 text-white">¡Juego inmediato!</p>
        <p className="m-1 text-white mb-6">
          WhatsApp Bot disponible 24/7, <i>todos los días</i>.
        </p>

        <a
          href="https://wa.me/123456789"
          className="ganamos-button-one text-xl flex justify-center gap-6 items-center"
        >
          <span>¡Contactá ya!</span>
          <img src="/whatsapp.png" alt="DianaWIN" className="h-8" />
        </a>

        <img src="/ganamos.png" alt="DianaWIN" className="h-15 mt-8" />
        <p className="text-gray-400 text-sm italic m-6">
          Tu juego, sin demoras.
        </p>
      </div>
    </div>
  );
}
