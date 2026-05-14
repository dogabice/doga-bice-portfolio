import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function PhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
}: PhoneFrameProps) {
  return (
    <div
      className={`rounded-[1.9rem] bg-[#0D0B10] p-2 shadow-[0_30px_90px_-38px_rgba(0,0,0,0.85)] ring-1 ring-white/10 ${className}`}
    >
      <div className="overflow-hidden rounded-[1.35rem] bg-[#F6EFE8]">
        <Image
          src={src}
          alt={alt}
          width={420}
          height={900}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}