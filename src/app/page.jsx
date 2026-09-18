"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Modern Interfaces",
    description:
      "Clean UI design for landing pages, dashboards, and brand websites.",
  },
  {
    title: "Motion Design",
    description:
      "Interactive animations with Framer Motion to bring your ideas to life.",
  },
  {
    title: "Responsive Builds",
    description: "Fast, mobile-first sites using Next.js and Tailwind CSS.",
  },
];

const projects = [
  {
    title: "Brand Showcase",
    description:
      "A modern landing page with a polished visual system and interactive buttons.",
  },
  {
    title: "E-commerce UI",
    description:
      "Product card designs, filters, and a clean checkout experience.",
  },
  {
    title: "Animation Demo",
    description:
      "Motion-led storytelling using subtle transitions and scroll effects.",
  },
];

const Homepage = () => {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-10 sm:py-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10">
            <span>Hey, This is AD&apos;s</span>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-black">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            I build animated web experiences for modern brands.
          </h1>
          <p className="max-w-2xl text-base text-slate-700 sm:text-lg">
            I create polished landing pages, portfolio showcases, and
            interactive UI work with Next.js, Tailwind CSS, and Framer Motion.
            Let&apos;s turn your ideas into a beautiful, responsive site.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Work with me
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-slate-950 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
            >
              View projects
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/90 p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200">
              <p className="text-4xl font-bold">3+</p>
              <p className="mt-2 text-sm text-slate-600">
                Years designing digital products
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200">
              <p className="text-4xl font-bold">12</p>
              <p className="mt-2 text-sm text-slate-600">Completed projects</p>
            </div>
            <div className="rounded-3xl bg-white/90 p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200">
              <p className="text-4xl font-bold">100%</p>
              <p className="mt-2 text-sm text-slate-600">Client satisfaction</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="overflow-hidden rounded-[40px] border border-white/60 bg-white/80 shadow-2xl shadow-slate-900/10"
        >
          <Image
            src="/hero.png"
            alt="Portrait of Adnan at work"
            width={720}
            height={720}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      <section className="mt-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              What I do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Design, build, and animate modern websites.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            From landing pages to portfolio showcases, I deliver fast,
            responsive websites with refined motion and clean visual systems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[32px] bg-white/90 p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-slate-900/10"
            >
              <p className="text-lg font-semibold text-slate-950">
                {service.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Featured work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Selected projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-slate-950 underline underline-offset-4"
          >
            See full portfolio
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[32px] bg-white/95 p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-slate-900/10"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Featured
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                Explore link will be soon available..
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
