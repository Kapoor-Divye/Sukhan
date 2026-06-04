const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <rect width="100" height="100" rx="20" fill="#111827" />

        <path
          d="M68 30C63 24 55 22 47 22C34 22 25 29 25 40C25 50 33 55 45 58C55 61 60 63 60 69C60 74 55 78 47 78C39 78 32 75 27 69"
          stroke="#F9FAFB"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M70 22L78 30"
          stroke="#60A5FA"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-2xl font-bold tracking-wide text-white">
        Sukhan
      </span>
    </div>
  );
};

export default Logo;