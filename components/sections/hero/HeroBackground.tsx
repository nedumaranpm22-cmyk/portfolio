export default function HeroBackground() {
  return (
    <>
      {/* Mesh */}

      <div className="absolute inset-0 mesh-bg" />

      {/* Glow 1 */}

      <div className="absolute -left-44 top-0 h-[650px] w-[650px] rounded-full bg-orange-300/20 blur-[180px]" />

      {/* Glow 2 */}

      <div className="absolute right-0 top-0 h-[650px] w-[650px] rounded-full bg-orange-100/30 blur-[180px]" />

      {/* Bottom */}

      <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-white/50 blur-[150px]" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]

          [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]

          [background-size:45px_45px]
        "
      />
    </>
  );
}