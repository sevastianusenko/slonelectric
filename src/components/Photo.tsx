import Image from "next/image";

/** Настоящее фото с объекта. Для недостающих кадров остаётся <Placeholder/>. */
export default function Photo({
  src, alt, className = "", priority = false, sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string; alt: string; className?: string; priority?: boolean; sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-ink-900 ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
