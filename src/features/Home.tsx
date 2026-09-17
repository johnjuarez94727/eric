const GraduationCap = () => (
  <svg
    aria-hidden="true"
    className="h-[0.7em] w-[0.7em] shrink-0 text-zinc-800"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
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
          Based in Denver, Colorado. I design and build AI-powered learning
          tools, FERPA-safe school platforms, and scalable edtech products.
          Eleven-plus years shipping systems teachers and students depend on.
          The code stays invisible. The impact doesn&apos;t.
        </p>
      </div>
    </section>
  );
};
