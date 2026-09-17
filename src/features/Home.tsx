const GraduationCap = () => (
  <svg
    aria-hidden="true"
    className="h-[0.75em] w-[0.75em] shrink-0"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cap-board" x1="8" x2="56" y1="10" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3f3f46" />
        <stop offset="45%" stopColor="#18181b" />
        <stop offset="100%" stopColor="#09090b" />
      </linearGradient>
      <linearGradient id="cap-side" x1="18" x2="46" y1="28" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#27272a" />
        <stop offset="100%" stopColor="#09090b" />
      </linearGradient>
      <linearGradient id="tassel-cord" x1="44" x2="52" y1="18" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a1a1aa" />
        <stop offset="100%" stopColor="#71717a" />
      </linearGradient>
      <linearGradient id="tassel-body" x1="46" x2="56" y1="34" y2="54" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#d4d4d8" />
        <stop offset="100%" stopColor="#71717a" />
      </linearGradient>
      <radialGradient id="button" cx="32" cy="22" r="4" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#e4e4e7" />
        <stop offset="100%" stopColor="#52525b" />
      </radialGradient>
    </defs>

    {/* Soft ground shadow */}
    <ellipse cx="32" cy="54" fill="#09090b" opacity="0.12" rx="18" ry="3.5" />

    {/* Cap body / skull */}
    <path
      d="M20 30c0 2.2 1.4 6.8 4.2 9.4C26.8 41.8 29.2 43 32 43s5.2-1.2 7.8-3.6C42.6 36.8 44 32.2 44 30c-3.6 2-7.8 3-12 3s-8.4-1-12-3z"
      fill="url(#cap-side)"
    />
    <path
      d="M20 30c3.6 1.8 7.8 2.8 12 2.8s8.4-1 12-2.8c-1.2-2.4-5.4-4.2-12-4.2S21.2 27.6 20 30z"
      fill="#3f3f46"
      opacity="0.55"
    />

    {/* Mortarboard */}
    <path d="M32 12 6 26l26 14 26-14L32 12z" fill="url(#cap-board)" />
    <path d="M32 12 58 26 32 40V12z" fill="#000" opacity="0.28" />
    <path
      d="M32 14.2 10.4 25.8 32 37.4 53.6 25.8 32 14.2z"
      fill="none"
      opacity="0.35"
      stroke="#a1a1aa"
      strokeWidth="0.6"
    />

    {/* Center button */}
    <circle cx="32" cy="22.5" fill="url(#button)" r="2.4" />
    <circle cx="31.3" cy="21.8" fill="#fff" opacity="0.35" r="0.7" />

    {/* Tassel cord */}
    <path
      d="M32 22.5c6.2 0 11.8 2.4 14.2 4.8 1.4 1.4 2.2 5.8 2.6 10.2"
      fill="none"
      stroke="url(#tassel-cord)"
      strokeLinecap="round"
      strokeWidth="1.6"
    />

    {/* Tassel head + fringe */}
    <ellipse cx="49.2" cy="38.2" fill="#a1a1aa" rx="2.2" ry="1.6" />
    <path
      d="M47.2 39c0.4 4.8 0.8 9.2 1.2 13.2M49.2 39c0.1 5 0.2 9.6 0.2 13.4M51.2 39c-0.3 4.8-0.6 9.2-0.8 13.2M48.2 39.4c0.6 4.6 1.1 8.8 1.5 12.4M50.2 39.4c-0.2 4.6-0.4 8.8-0.5 12.4"
      fill="none"
      stroke="url(#tassel-body)"
      strokeLinecap="round"
      strokeWidth="1.15"
    />
  </svg>
);

export const Home = () => {
  return (
    <section
      className="flex items-center overflow-hidden md:min-h-screen"
      id="home"
    >
      <div className="mx-auto flex flex-col gap-6 max-w-sm p-10 pt-30 md:gap-10 md:max-w-2xl md:p-0 lg:max-w-4xl lg:p-0">
        <h1 className="flex flex-wrap items-center gap-x-3 gap-y-2 font-serif text-[clamp(3rem,11vw,8.5rem)] font-medium leading-none tracking-wide">
          <span>Eric Nguyen</span>
          <GraduationCap />
        </h1>

        <h2 className="text-lg font-medium tracking-wide text-zinc-700 md:text-2xl lg:text-3xl">
          Senior Software Engineer
        </h2>

        <p className="max-w-3xl text-zinc-500 leading-loose font-medium sm:text-lg md:text-xl lg:text-2xl text-pretty tracking-wide">
          Based in Coral Springs, FL. I design and build AI-powered learning
          tools, FERPA-safe K-12 school platforms, and scalable edtech products.
          Eleven-plus years shipping systems teachers and students depend on.
          The code stays invisible. The impact doesn&apos;t.
        </p>
      </div>
    </section>
  );
};
