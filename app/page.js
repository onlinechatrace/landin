export default function Home() {
  const bannerText =
    "¡Aprovechá el bono de bienvenida y ganá más! ¡No te lo pierdas! ";

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-black pb-10 pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/gambling-4178462_1280.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>
      
      <div className="relative z-10 text-center flex flex-col justify-center items-center">
        <div className="fixed top-0 left-0 w-full overflow-hidden z-50 banner-container">
          <div className="inline-block animate-marquee">
            {bannerText.repeat(15).toUpperCase()}
          </div>
        </div>

        <img src="/dianawin1.png" alt="DianaWIN" className="w-40 h-40 mb-4" />

        <p className="text-5xl font-bold text-white text-shadow mb-4">
          Diana<span className="WIN">WIN</span>
        </p>
        <p className="text-2xl m-1 text-white">¡Juego inmediato!</p>
        <p className="m-1 text-white mb-6">
          WhatsApp Bot disponible 24/7, <i>todos los días</i>.
        </p>

        <img src="/ganamos.png" alt="DianaWIN" className="h-14 mb-6 " />

        <a
          href="https://wa.me/123456789"
          className="home-button-ganamos text-xl flex justify-center gap-6 items-center"
        >
          <span>¡Contactá ya con GANAMOS!</span>
          <img src="/whatsapp.png" alt="DianaWIN" className="h-8" />
        </a>

        <img src="/asesnortes.png" alt="DianaWIN" className="h-20 mb-6 mt-6" />

        <a
          href="https://wa.me/123456789"
          className="home-button-ases text-xl flex justify-center gap-6 items-center"
        >
          <span>¡Contactá ya con Ases!</span>
          <img src="/whatsapp.png" alt="DianaWIN" className="h-8" />
        </a>

        <p className="text-gray-400 text-sm italic m-6">Tu juego, sin demoras.</p>
      </div>
    </div>
  );
}
