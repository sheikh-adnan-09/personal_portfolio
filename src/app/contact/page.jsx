"use client";

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
          Let’s build something great together.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
          Ready to launch your next project? Drop a message and I’ll get back to
          you with a plan for design, development, and animation.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[32px] bg-white/95 p-8 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Email
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-950">
              adnan123@gmail.com
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Location
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-950">
              Remote, available worldwide
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Availability
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-950">
              Open for new projects
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[32px] bg-white/95 p-8 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200"
        >
          <div className="text-sm text-slate-700 underline underline-offset-4">
            Still working on this contact page hence it won&apos;t work as
            expected
          </div>
          <label className="block space-y-2 text-sm text-slate-700">
            <span>Name</span>
            <input
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block space-y-2 text-sm text-slate-700">
            <span>Email</span>
            <input
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block space-y-2 text-sm text-slate-700">
            <span>Message</span>
            <textarea
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950"
              name="message"
              rows="5"
              placeholder="Tell me about your project"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          {/* Honeypot field — hidden from real users, catches basic bots.
              Do not remove; keep it visually and semantically hidden. */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <button
            // type="submit" - left to connect to render hence the next two lines are added for demo functionality...
            type="button"
            onClick={() => (window.location.href = "/")}
            disabled={status === "sending"}
            className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-sm font-medium text-green-600">
              Thanks! Your message has been sent — I’ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
