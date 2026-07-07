import Badge from "@/components/common/Badge";
import { achievements } from "@/lib/data/achievements";
import AchievementCard from "./AchievementCard";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,107,74,.12),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(56,189,248,.10),transparent_32%)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Badge>Achievements</Badge>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Milestones, recognition and curated wins.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:justify-self-end">
            A few pivotal moments from hackathons, AI initiatives, leadership
            milestones and project-driven achievements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}