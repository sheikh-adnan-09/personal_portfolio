const Portfolio = () => {
  const work = [
    {
      title: "Animated landing page",
      description:
        "A high-conversion hero experience with motion-led sections and bold typography.",
    },
    {
      title: "Portfolio showcase",
      description:
        "Designed a clean project gallery with filters and interactive previews.",
    },
    {
      title: "E-commerce concept",
      description:
        "A modern product gallery with polished cards and responsive layout.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
          Selected work and case studies.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
          Each project is built with a focus on fast performance, thoughtful
          motion, and a strong visual brand.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {work.map((item) => (
          <div
            key={item.title}
            className="rounded-[32px] bg-white/95 p-8 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-slate-900/10"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Project
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">
              {item.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
            <div className="mt-6 text-sm font-semibold text-slate-950">
              Details will be uploaded soon.. →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
