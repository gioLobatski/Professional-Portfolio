interface ProjectCardProps {
  imageSrc: string;
  alt: string;
  description: string;
  linkUrl?: string; // Optional - if provided, link only on description
}

export default function ProjectCard({
  imageSrc,
  alt,
  description,
  linkUrl,
}: ProjectCardProps) {
  return (
    <div className="blurb flex !flex-col items-center p-5">
      <div className="max-w-[400px] w-full h-[300px] rounded-[10px] mb-4 shadow-lg mx-auto overflow-hidden relative">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-auto object-cover absolute top-0 left-0 transition-transform duration-[5000ms] ease-in-out hover:translate-y-[calc(-100%+300px)]"
        />
      </div>

      {linkUrl ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer transition-opacity no-underline text-[#22D3EE] hover:text-[#A78BFA]"
        >
          {description}
        </a>
      ) : (
        <p className="text-center text-[#C9D1D9]">{description}</p>
      )}
    </div>
  );
}
