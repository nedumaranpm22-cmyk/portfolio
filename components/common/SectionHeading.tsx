import Badge from "./Badge";

interface Props {
  badge: string;

  title: string;

  description: string;

  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-3xl text-center"
          : ""
      }
    >
      <Badge>
        {badge}
      </Badge>

      <h2
        className="
        mt-6
        text-5xl
        font-bold
        tracking-tight
        text-gray-900
        "
      >
        {title}
      </h2>

      <p
        className="
        mt-6
        text-lg
        leading-8
        text-gray-600
        "
      >
        {description}
      </p>
    </div>
  );
}