"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React, { useEffect, useRef } from "react";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

  :root {
    --sun: #FFB800;
    --sky: #1B8BFF;
    --sky-light: #E8F3FF;
    --mint: #00C98D;
    --coral: #FF5F3D;
    --violet: #7C3AED;
    --ink: #0F1C2E;
    --ink-soft: #3D5269;
    --cloud: #F4F8FF;
    --white: #ffffff;
    --border: #D8E8FF;
  }

  body { font-family: 'DM Sans', sans-serif; }

  .font-syne { font-family: 'Syne', sans-serif !important; }
  .font-dm   { font-family: 'DM Sans', sans-serif !important; }

  /* Pulse dot */
  @keyframes pulse-dot {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.5; transform:scale(0.8); }
  }
  .pulse-dot { animation: pulse-dot 2s ease infinite; }

  /* Hero entrance */
  @keyframes fadeUp  { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
  @keyframes scaleIn { from{opacity:0;transform:scale(0.88)}       to{opacity:1;transform:scale(1)} }

  .anim-eyebrow  { animation: fadeUp  0.55s ease both; animation-delay:0.05s; }
  .anim-arc      { animation: scaleIn 0.65s cubic-bezier(0.22,1,0.36,1) both; animation-delay:0.15s; }
  .anim-expand   { animation: fadeUp  0.50s ease both; animation-delay:0.35s; }
  .anim-tagline  { animation: fadeUp  0.55s ease both; animation-delay:0.45s; }
  .anim-sub      { animation: fadeUp  0.55s ease both; animation-delay:0.55s; }
  .anim-actions  { animation: fadeUp  0.55s ease both; animation-delay:0.65s; }
  .anim-steps    { animation: fadeUp  0.60s ease both; animation-delay:0.75s; }

  /* Scroll-reveal */
  .reveal { opacity:0; transform:translateY(24px); transition:opacity .6s ease, transform .6s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }

  /* Hero big ARC underline */
  .arc-title { position:relative; display:inline-block; }
  .arc-title::after {
    content:'';
    position:absolute;
    bottom:10px; left:4%; right:4%;
    height:10px;
    background:linear-gradient(90deg,#FFB800,rgba(255,184,0,0.4));
    border-radius:6px;
    z-index:-1;
  }

  /* Hero tagline highlight underline */
  .highlight-word { position:relative; display:inline-block; color:#1B8BFF; }
  .highlight-word::after {
    content:'';
    position:absolute;
    bottom:2px; left:0; right:0;
    height:5px;
    background:linear-gradient(90deg,#FFB800,rgba(255,184,0,0.3));
    border-radius:4px;
    z-index:-1;
  }

  /* Outcome card top bars */
  .outcome-card-1::before { content:''; position:absolute; top:0;left:0;right:0;height:4px; background:linear-gradient(90deg,#1B8BFF,#12B8E8); }
  .outcome-card-2::before { content:''; position:absolute; top:0;left:0;right:0;height:4px; background:linear-gradient(90deg,#FFB800,#FFD560); }
  .outcome-card-3::before { content:''; position:absolute; top:0;left:0;right:0;height:4px; background:linear-gradient(90deg,#00C98D,#00E5A0); }
  .outcome-card-4::before { content:''; position:absolute; top:0;left:0;right:0;height:4px; background:linear-gradient(90deg,#FF5F3D,#FF8C6B); }

  /* CTA watermark */
  .cta-watermark::before {
    content:'ARC';
    position:absolute;
    font-family:'Syne',sans-serif;
    font-size:280px;
    font-weight:900;
    color:rgba(27,139,255,0.04);
    letter-spacing:-0.05em;
    top:50%;left:50%;
    transform:translate(-50%,-50%);
    pointer-events:none;
    white-space:nowrap;
  }

  /* Hero blobs */
  .hero-blob-1::before {
    content:'';
    position:absolute;
    top:-120px;right:-120px;
    width:600px;height:600px;
    background:radial-gradient(circle,rgba(255,184,0,0.15) 0%,transparent 70%);
    border-radius:50%;
    pointer-events:none;
  }
  .hero-blob-1::after {
    content:'';
    position:absolute;
    bottom:0;left:-100px;
    width:500px;height:500px;
    background:radial-gradient(circle,rgba(27,139,255,0.10) 0%,transparent 70%);
    border-radius:50%;
    pointer-events:none;
  }
`;

/* ─── Arrow icon ─── */
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), 80);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export default function ARCPage() {
  return (
    <>
      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <section
        className="hero-blob-1 relative overflow-hidden pt-20 pb-0 text-center mt-5"
        style={{
          background:
            "linear-gradient(160deg,#F0F7FF 0%,#FFFBF0 60%,#F5FFF9 100%)",
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1140px] px-6">
          {/* Eyebrow */}
          <div className="anim-eyebrow flex justify-center mb-9">
            <div
              className="font-dm inline-flex items-center gap-2 rounded-full border px-[18px] py-2 text-[13px] font-semibold"
              style={{
                background: "#fff",
                borderColor: "#D8E8FF",
                color: "#1B8BFF",
                boxShadow: "0 4px 16px rgba(27,139,255,0.1)",
              }}
            >
              <span
                className="pulse-dot w-2 h-2 rounded-full"
                style={{ background: "#1B8BFF" }}
              />
              Industry AI Readiness — Built for Employability
            </div>
          </div>

          {/* Big ARC */}
          <div className="anim-arc">
            <div
              className="arc-title font-syne font-extrabold leading-none mb-2 select-none"
              style={{
                fontSize: "clamp(110px,20vw,200px)",
                letterSpacing: "-0.05em",
                color: "#1B8BFF",
              }}
            >
              ARC
            </div>
          </div>

          {/* A · R · C expand */}
          <div className="anim-expand flex justify-center flex-wrap mb-8">
            {[
              { letter: "A", word: "Awareness", border: true },
              { letter: "R", word: "Readiness", border: true },
              { letter: "C", word: "Capability", border: false },
            ].map(({ letter, word, border }) => (
              <div
                key={letter}
                className={`font-dm flex items-center gap-[10px] px-5 text-[13px] font-bold uppercase tracking-[0.12em] ${border ? "border-r" : ""}`}
                style={{ color: "#3D5269", borderColor: "#D8E8FF" }}
              >
                <span
                  className="font-syne text-[15px] font-extrabold"
                  style={{ color: "#1B8BFF" }}
                >
                  {letter}
                </span>
                {word}
              </div>
            ))}
          </div>

          {/* Main tagline */}
          <h2
            className="anim-tagline font-syne font-extrabold mb-5"
            style={{
              fontSize: "clamp(28px,4vw,48px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#0F1C2E",
            }}
          >
            The skills employers are hiring for{" "}
            <span className="highlight-word">right now.</span>
          </h2>

          {/* Sub */}
          <p
            className="anim-sub font-dm mx-auto mb-9 max-w-[580px] text-[17px] leading-[1.7]"
            style={{ color: "#3D5269" }}
          >
            ARC equips students with industry-grade AI skills — contextual
            prompting, no-code automation, AI agent building, and AI business
            workflows — so they enter the workforce as execution-ready
            professionals, not just AI-aware graduates.
          </p>

          {/* CTAs */}
          <div className="anim-actions flex justify-center flex-wrap gap-[14px] mb-16">
            <a
              href="#program"
              className="font-dm inline-flex items-center gap-2 rounded-[14px] px-[26px] py-[15px] text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "#1B8BFF",
                boxShadow: "0 12px 32px rgba(27,139,255,0.35)",
              }}
            >
              Explore ARC <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="font-dm inline-flex items-center gap-2 rounded-[14px] border px-[26px] py-[15px] text-[15px] font-semibold transition-all hover:-translate-y-0.5"
              style={{
                background: "#fff",
                borderColor: "#D8E8FF",
                color: "#0F1C2E",
                boxShadow: "0 8px 40px rgba(15,28,46,0.08)",
              }}
            >
              Request a Demo
            </a>
          </div>

          {/* ARC Steps Strip */}
          <div
            className="anim-steps relative z-10 grid grid-cols-1 md:grid-cols-3 overflow-hidden border-t"
            style={{
              background: "#fff",
              borderColor: "#D8E8FF",
              borderRadius: "28px 28px 0 0",
              boxShadow: "0 -8px 40px rgba(27,139,255,0.08)",
            }}
          >
            {[
              {
                num: "01 / Awareness",
                title: "Understand AI",
                desc: "How AI works, where industries use it, and how to write contextual prompts that actually get results — not just generic outputs.",
                color: "#1B8BFF",
                barBg: "#1B8BFF",
                labelColor: "#1B8BFF",
              },
              {
                num: "02 / Readiness",
                title: "Apply AI",
                desc: "Build no-code automation, design AI business workflows, and use AI for research, analysis, communication, and decision support.",
                color: "#C47F00",
                barBg: "#FFB800",
                labelColor: "#C47F00",
              },
              {
                num: "03 / Capability",
                title: "Execute with AI",
                desc: "Build AI agents, run domain-based simulations, and produce real workplace outputs — the kind hiring managers actually look for.",
                color: "#00C98D",
                barBg: "#00C98D",
                labelColor: "#00C98D",
              },
            ].map(({ num, title, desc, barBg, labelColor }, i) => (
              <div
                key={i}
                className="group relative cursor-default border-b md:border-b-0 md:border-r last:border-r-0 p-9 transition-colors hover:bg-[#F4F8FF]"
                style={{ borderColor: "#D8E8FF" }}
              >
                <div
                  className="font-dm mb-[10px] text-[11px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: labelColor }}
                >
                  {num}
                </div>
                <div
                  className="mb-[18px] h-1 w-10 rounded-full"
                  style={{ background: barBg }}
                />
                <h3
                  className="font-syne mb-[10px] text-[22px] font-bold"
                  style={{ color: "#0F1C2E" }}
                >
                  {title}
                </h3>
                <p
                  className="font-dm text-[14px] leading-[1.6]"
                  style={{ color: "#3D5269" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <Reveal>
            <div
              className="font-dm mb-3 text-[12px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#1B8BFF" }}
            >
              Why ARC is Different
            </div>
            <h2
              className="font-syne font-extrabold mb-4"
              style={{
                fontSize: "clamp(32px,4vw,52px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#0F1C2E",
              }}
            >
              Not another AI awareness session.
            </h2>
            <p
              className="font-dm text-[17px] leading-[1.7] max-w-[620px]"
              style={{ color: "#3D5269" }}
            >
              ARC builds the specific skills industries are actively hiring for
              — contextual prompts, no-code automation, AI agents, and business
              workflow design. Practical, domain-relevant, and
              employment-focused from the first session.
            </p>
          </Reveal>

          <div className="mt-[52px] grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🧠",
                bg: "#E8F3FF",
                title: "Contextual Prompting & AI Foundations",
                desc: "Students learn to craft contextual prompts that produce industry-grade outputs — and understand how AI tools fit into real business environments, not just classrooms.",
              },
              {
                icon: "⚙️",
                bg: "#FFF8E0",
                title: "No-Code Automation & AI Workflows",
                desc: "Hands-on exposure to no-code automation tools and AI business workflow design — so students can map, build, and streamline processes without writing a line of code.",
              },
              {
                icon: "🤖",
                bg: "#E6FFF5",
                title: "AI Agent Building & Execution",
                desc: "Students build functional AI agents tailored to their domain — from research assistants to report generators — and graduate with a portfolio that proves capability, not just exposure.",
              },
            ].map(({ icon, bg, title, desc }, i) => (
              <Reveal key={i}>
                <div
                  className="rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: "#D8E8FF", background: "#fff" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 20px 60px rgba(27,139,255,0.15)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(27,139,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "#D8E8FF";
                  }}
                >
                  <div
                    className="mb-[22px] w-[52px] h-[52px] rounded-2xl grid place-items-center text-[22px]"
                    style={{ background: bg }}
                  >
                    {icon}
                  </div>
                  <h3
                    className="font-syne mb-[10px] text-[20px] font-bold tracking-[-0.01em]"
                    style={{ color: "#0F1C2E" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-dm text-[15px] leading-[1.6]"
                    style={{ color: "#3D5269" }}
                  >
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="program"
        className="py-[100px]"
        style={{
          background: "linear-gradient(180deg,#F4F8FF 0%,#FAFFFE 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <Reveal>
            <div
              className="font-dm mb-3 text-[12px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#1B8BFF" }}
            >
              Program Structure
            </div>
            <h2
              className="font-syne font-extrabold mb-4"
              style={{
                fontSize: "clamp(32px,4vw,52px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#0F1C2E",
              }}
            >
              Industry-aligned.
              <br />
              Employment-ready.
            </h2>
            <p
              className="font-dm text-[17px] leading-[1.7] max-w-[620px]"
              style={{ color: "#3D5269" }}
            >
              ARC combines an AI readiness core with stream-specific
              applications — contextual prompting, workflow automation, and
              agent building — all mapped to real industry expectations.
            </p>
          </Reveal>

          <div className="mt-[52px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
            <Reveal>
              <div
                className="rounded-[28px] border p-9"
                style={{
                  background: "#fff",
                  borderColor: "#D8E8FF",
                  boxShadow: "0 8px 40px rgba(15,28,46,0.08)",
                }}
              >
                <h3
                  className="font-syne text-[26px] font-bold tracking-[-0.02em] mb-[10px]"
                  style={{ color: "#0F1C2E" }}
                >
                  Academic Tracks
                </h3>
                <p
                  className="font-dm text-[15px] leading-[1.65] mb-7"
                  style={{ color: "#3D5269" }}
                >
                  ARC adapts to your students' disciplines — same strong AI
                  foundation, applied to their specific domain and career
                  direction.
                </p>
                <div className="grid gap-[10px]">
                  {[
                    {
                      name: "Communication & Media",
                      tag: "Campaign Intelligence",
                    },
                    { name: "BBA / Management", tag: "Business Operations" },
                    { name: "MBA", tag: "Decision Systems" },
                    { name: "Commerce", tag: "Finance & Reporting" },
                  ].map(({ name, tag }) => (
                    <div
                      key={name}
                      className="flex items-center justify-between rounded-[14px] border px-[18px] py-[14px] transition-all cursor-default group"
                      style={{ background: "#F4F8FF", borderColor: "#D8E8FF" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "#E8F3FF";
                        el.style.borderColor = "rgba(27,139,255,0.25)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "#F4F8FF";
                        el.style.borderColor = "#D8E8FF";
                      }}
                    >
                      <span
                        className="font-dm text-[14px] font-semibold"
                        style={{ color: "#0F1C2E" }}
                      >
                        {name}
                      </span>
                      <span
                        className="font-dm rounded-full px-[10px] py-1 text-[12px] font-semibold"
                        style={{
                          color: "#1B8BFF",
                          background: "rgba(27,139,255,0.1)",
                        }}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div
                className="rounded-[28px] border p-9"
                style={{
                  background: "#fff",
                  borderColor: "#D8E8FF",
                  boxShadow: "0 8px 40px rgba(15,28,46,0.08)",
                }}
              >
                <h3
                  className="font-syne text-[26px] font-bold tracking-[-0.02em] mb-[10px]"
                  style={{ color: "#0F1C2E" }}
                >
                  How ARC Works
                </h3>
                <p
                  className="font-dm text-[15px] leading-[1.65] mb-7"
                  style={{ color: "#3D5269" }}
                >
                  A structured four-stage journey from context to capability —
                  progressive, practical, and always connected to real workplace
                  expectations.
                </p>
                <div className="grid gap-3">
                  {[
                    {
                      title: "Master Contextual Prompting & AI Tools",
                      desc: "Students learn to write contextual prompts that produce precise, industry-relevant outputs — and map the AI landscape across their domain.",
                    },
                    {
                      title: "Design AI Business Workflows",
                      desc: "Using AI to structure decisions, automate reporting, build communication pipelines, and design end-to-end AI business workflows — without coding.",
                    },
                    {
                      title: "Build No-Code Automation & AI Agents",
                      desc: "Students build functional AI agents and no-code automation systems inside realistic business, media, commerce, or management scenarios.",
                    },
                    {
                      title: "Produce Employment-Ready Outputs",
                      desc: "Every cohort graduates with tangible deliverables — automation maps, agent demos, workflow reports — that directly boost employability.",
                    },
                  ].map(({ title, desc }, i) => (
                    <div
                      key={i}
                      className="grid gap-4"
                      style={{ gridTemplateColumns: "36px 1fr" }}
                    >
                      <div
                        className="font-syne w-9 h-9 rounded-xl grid place-items-center text-[14px] font-extrabold text-white flex-shrink-0"
                        style={{
                          background: "linear-gradient(135deg,#1B8BFF,#12B8E8)",
                          boxShadow: "0 4px 12px rgba(27,139,255,0.3)",
                        }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <strong
                          className="font-dm block text-[15px] font-semibold mt-[6px] mb-[3px]"
                          style={{ color: "#0F1C2E" }}
                        >
                          {title}
                        </strong>
                        <span
                          className="font-dm text-[14px] leading-[1.55]"
                          style={{ color: "#3D5269" }}
                        >
                          {desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div
        className="py-[60px]"
        style={{ background: "linear-gradient(135deg,#0F1C2E,#1B3555)" }}
      >
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "3", suffix: "×", label: "Learning Stages" },
              { num: "4", suffix: "+", label: "Academic Tracks" },
              { num: "100", suffix: "%", label: "Hands-On Execution" },
              { num: "Real", suffix: ".", label: "Portfolio Outputs" },
            ].map(({ num, suffix, label }) => (
              <Reveal key={label}>
                <div className="font-syne text-[42px] font-extrabold leading-none mb-2 tracking-[-0.03em] text-white">
                  {num}
                  <span style={{ color: "#FFB800" }}>{suffix}</span>
                </div>
                <div
                  className="font-dm text-[14px] font-medium"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <section className="py-[100px] bg-white">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <Reveal>
            <div
              className="font-dm mb-3 text-[12px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#1B8BFF" }}
            >
              Student Outcomes
            </div>
            <h2
              className="font-syne font-extrabold mb-4"
              style={{
                fontSize: "clamp(32px,4vw,52px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#0F1C2E",
              }}
            >
              Graduate hireable.
              <br />
              Not just AI-aware.
            </h2>
            <p
              className="font-dm text-[17px] leading-[1.7] max-w-[620px]"
              style={{ color: "#3D5269" }}
            >
              ARC closes the gap between academic AI exposure and what
              industries actually expect — giving students a measurable edge in
              the job market.
            </p>
          </Reveal>

          <div className="mt-[52px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "💡",
                title: "Contextual Prompting Skills",
                desc: "Students craft prompts that generate real, role-specific outputs — not generic answers. A skill every employer notices immediately.",
                cls: "outcome-card-1",
              },
              {
                icon: "⚙️",
                title: "No-Code Automation",
                desc: "They build automated workflows without writing code — making them immediately productive in any business environment.",
                cls: "outcome-card-2",
              },
              {
                icon: "🤖",
                title: "AI Agent Building",
                desc: "Students design and deploy AI agents for their domain — a capability that sets them apart from the majority of graduates entering the workforce.",
                cls: "outcome-card-3",
              },
              {
                icon: "📊",
                title: "AI Business Workflow Design",
                desc: "A portfolio of AI-driven workflow maps, automation outputs, and domain simulations — proof of execution capability that employers can actually evaluate.",
                cls: "outcome-card-4",
              },
            ].map(({ icon, title, desc, cls }) => (
              <Reveal key={title}>
                <div
                  className={`${cls} relative overflow-hidden rounded-[22px] border p-7 text-center transition-all duration-300 hover:-translate-y-1`}
                  style={{ background: "#fff", borderColor: "#D8E8FF" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 40px rgba(15,28,46,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                  }}
                >
                  <span className="block text-[32px] mb-[14px]">{icon}</span>
                  <strong
                    className="font-syne block text-[17px] font-bold mb-[10px]"
                    style={{ color: "#0F1C2E" }}
                  >
                    {title}
                  </strong>
                  <span
                    className="font-dm text-[14px] leading-[1.6]"
                    style={{ color: "#3D5269" }}
                  >
                    {desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="cta-watermark relative overflow-hidden py-[100px] pb-[110px]"
        style={{
          background:
            "linear-gradient(160deg,#F0F7FF,#FFFBF0 50%,#F0FFF8 100%)",
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1140px] px-6">
          <Reveal>
            <div className="text-center">
              <h2
                className="font-syne font-extrabold mb-[18px]"
                style={{
                  fontSize: "clamp(36px,5vw,60px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  color: "#0F1C2E",
                }}
              >
                Give your students
                <br />
                the skills that get them hired.
              </h2>
              <p
                className="font-dm mx-auto mb-9 max-w-[560px] text-[18px] leading-[1.7]"
                style={{ color: "#3D5269" }}
              >
                ARC transforms students into AI-capable professionals — with
                contextual prompting, no-code automation, AI agent building, and
                real business workflow design skills that industry is actively
                looking for.
              </p>
              <div className="flex justify-center flex-wrap gap-[14px]">
                <a
                  href="mailto:hello@celtm.com"
                  className="font-dm inline-flex items-center gap-2 rounded-[14px] px-[26px] py-[15px] text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: "#1B8BFF",
                    boxShadow: "0 12px 32px rgba(27,139,255,0.35)",
                  }}
                >
                  Connect with CELTM <ArrowIcon />
                </a>
                <a
                  href="#program"
                  className="font-dm inline-flex items-center gap-2 rounded-[14px] border px-[26px] py-[15px] text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    background: "#fff",
                    borderColor: "#D8E8FF",
                    color: "#0F1C2E",
                    boxShadow: "0 8px 40px rgba(15,28,46,0.08)",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
