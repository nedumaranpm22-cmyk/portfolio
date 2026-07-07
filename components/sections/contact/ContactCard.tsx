import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#FF6B4A]">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#FF6B4A]"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-600">{value}</p>
        )}
      </div>
    </div>
  );
}