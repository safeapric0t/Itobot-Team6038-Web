export default function HeroIntro() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src="/assets/videos/intro.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}