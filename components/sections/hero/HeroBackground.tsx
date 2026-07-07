export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#FFF9F6]" />

      <div className="absolute left-1/2 top-0 -z-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-200/30 blur-[150px]" />

      <div className="absolute bottom-0 right-0 -z-20 h-[550px] w-[550px] rounded-full bg-sky-200/20 blur-[170px]" />

      <div className="absolute left-0 bottom-0 -z-20 h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-[150px]" />
    </>
  );
}