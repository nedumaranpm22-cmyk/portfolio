interface Props {
  github: string;
  linkedin: string;
}

export default function SocialLinks({
  github,
  linkedin,
}: Props) {
  return (
    <div className="mt-8 flex gap-4">

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl transition hover:bg-[#FF6B4A] hover:text-white"
      >
        💻
      </a>

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl transition hover:bg-[#FF6B4A] hover:text-white"
      >
        💼
      </a>

    </div>
  );
}