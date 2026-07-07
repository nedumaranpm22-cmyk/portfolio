import { Achievement } from "@/types/achievement";

interface Props {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-8 shadow-[0_18px_45px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,.10)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff6ef] text-3xl text-[#FF6B4A] shadow-[-8px_-8px_18px_rgba(255,255,255,.95),8px_8px_18px_rgba(15,23,42,.08)]">
        {achievement.icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        {achievement.title}
      </h3>

      <p className="mt-3 text-sm font-semibold text-gray-500">
        {achievement.organization} · {achievement.year}
      </p>

      <p className="mt-5 text-sm leading-7 text-gray-600">
        {achievement.description}
      </p>
    </article>
  );
}