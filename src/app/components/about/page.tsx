"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/dist/SplitText";
import { User, Sparkles } from "lucide-react";
import { Languages } from "lucide-react";

const languages = [
  { name: "English", level: "B2" },
  { name: "German", level: "A2" },
  { name: "Telugu", level: "Native" },
  { name: "Hindi", level: "Native" },
];

function About() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".about-description", {
      type: "lines,words",
      linesClass: "overflow-hidden",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      rotateX: -45,
      stagger: 0.015,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      ".languages-card",
      { opacity: 0, scale: 0.95, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".languages-card",
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      ".language-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".languages-card",
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <div id="about" className="relative py-24 lg:py-30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-red-500 mb-2">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <User className="w-5 h-5 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.3em]">
                  Discovery
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Me
                </span>
              </h2>
            </div>

            <div className="relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Sparkles className="w-24 h-24 text-red-500" />
              </div>

              <div className="about-description text-slate-300 text-lg lg:text-xl leading-relaxed text-justify space-y-4 font-medium italic">
                {personalData.description.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {/* Decorative Accent */}
              <div className="absolute  w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-10 rounded-full" />
            </div>

            <div className="flex flex-wrap gap-8 items-center mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">'x'</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Projects Built
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">50+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Python Problems solved
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Certifications
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Languages */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="languages-card relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Sparkles className="w-24 h-24 text-red-500" />
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Languages &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                    Levels
                  </span>
                </h3>

                <div className="flex flex-col gap-5">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="language-item flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                    >
                      <span className="text-white font-semibold text-lg">
                        {lang.name}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-bold border ${
                          lang.level === "Native"
                            ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                            : lang.level.startsWith("C")
                              ? "bg-green-500/20 text-green-300 border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                        }`}
                      >
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
