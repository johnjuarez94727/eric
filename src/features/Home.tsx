export const Home = () => {
  return (
    <section
      className="flex items-center overflow-hidden md:min-h-screen"
      id="home"
    >
      <div className="mx-auto flex flex-col gap-6 max-w-sm p-10 pt-30 md:gap-12 md:max-w-2xl md:p-0 lg:max-w-3xl lg:p-0">
        <div className="flex items-center gap-4">
          <span className="h-0.5 w-10 shrink-0 bg-black block" />
          <h1 className="text-lg font-medium tracking-wide md:text-2xl">
            I&apos;m Eric Nguyen
          </h1>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-0 md:gap-x-10">
          <h2 className="font-serif text-[clamp(3.5rem,12vw,10rem)] font-medium leading-none tracking-wide">
            Senior
          </h2>
          <h2 className="font-serif text-[clamp(3.5rem,12vw,10rem)] font-medium leading-none tracking-wide">
            Engineer
          </h2>
        </div>

        <p className="max-w-3xl text-zinc-500 leading-loose font-medium sm:text-lg md:text-xl lg:text-2xl text-pretty tracking-wide">
          Based in Denver, Colorado. I design and build high-impact AI systems,
          AAA game mechanics, and scalable edtech platforms. Eleven-plus years
          shipping products that keep working when stakes are high. The code
          stays invisible. The impact doesn&apos;t.
        </p>
      </div>
    </section>
  );
};
