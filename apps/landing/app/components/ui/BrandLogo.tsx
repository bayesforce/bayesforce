import Image from "next/image";

const sizes = { sm: 24, md: 30, lg: 44 };

export function BrandLogo({ theme = "light", size = "md" }: { theme?: "light" | "dark"; size?: keyof typeof sizes }) {
  const markSize = sizes[size];
  const textSize = Math.round(markSize * 1.04);
  const bayesColor = theme === "dark" ? "#f8fafc" : "#11151b";
  return (
    <span className="inline-flex select-none items-center" style={{ gap: Math.round(markSize * 0.28) }}>
      <Image src="/brand/bayesforce_mark_exact.svg" alt="" width={markSize} height={markSize} priority />
      <span className="font-sans font-bold leading-none tracking-[-0.045em]" style={{ color: bayesColor, fontSize: textSize }}>
        Bayes<span className="text-[#013EFA]">force</span>
      </span>
    </span>
  );
}
