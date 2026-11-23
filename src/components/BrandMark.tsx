export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22 2.5L39 12.25V31.75L22 41.5L5 31.75V12.25L22 2.5Z"
        fill="#4B2E83"
        stroke="#B7A57A"
        strokeWidth="2"
      />
      <path
        d="M22 8.5L33.5 15.15V28.45L22 35.1L10.5 28.45V15.15L22 8.5Z"
        stroke="#DFD0A8"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <path
        d="M14.5 16.5L18.2 27.5L22 19L25.8 27.5L29.5 16.5"
        stroke="#FAF9F6"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="11.5" r="2.2" fill="#DFD0A8" />
    </svg>
  );
}
