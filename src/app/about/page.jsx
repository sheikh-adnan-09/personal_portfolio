const About = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          About me
        </p>
        <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
          Creative web design with a modern edge.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
          I help brands and startups launch stunning, responsive websites with
          polished motion and intuitive interactions. My work combines clean
          visual systems, thoughtful UX, and fast front-end builds.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] bg-white/90 p-8 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">
            What I bring
          </h2>
          <p className="mt-4 text-slate-600 leading-7">
            I design and build projects with attention to detail, performance,
            and brand clarity. Everything is built to work beautifully on
            desktop, tablet, and mobile.
          </p>
          <ul className="mt-6 space-y-3 text-slate-600">
            <li>• Responsive web development</li>
            <li>• Motion and interaction design</li>
            <li>• Clean, maintainable Tailwind code</li>
          </ul>
        </div>

        <div className="rounded-[32px] bg-white/90 p-8 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Experience</h2>
          <div className="mt-6 space-y-4 text-slate-600">
            <div>
              <p className="font-semibold text-slate-950">Frontend Developer</p>
              <p className="text-sm">
                Built product websites, landing pages and webapps with Next.js.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-950">Motion Designer</p>
              <p className="text-sm">
                Added animations and transitions using Framer Motion.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-950">
                Brand-focused design
              </p>
              <p className="text-sm">
                Delivered polished visuals that align with brand identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
