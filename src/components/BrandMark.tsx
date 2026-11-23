export function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src="/images/ksea-uw-logo.png"
      alt="KSEA UW official logo"
      width={240}
      height={240}
      className={`${className} rounded-full object-contain`}
    />
  );
}
