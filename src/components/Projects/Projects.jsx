import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    tag: "Full Stack",
    title: "Workalignr",
    desc: "A smart employee management system designed to streamline workforce operations with real-time tracking, role-based access, and performance insights. It simplifies HR processes like attendance, payroll integration, and team coordination through an intuitive dashboard and scalable architecture.",
    tech: ["React", "Node.js", "Tailwind css", "Express.js", "PostgreSql"],
    color: "#c8f04a",
    emoji: "🛒",
    githubUrl: "https://github.com/adisharma-git/employee-management-system",
    liveUrl: "https://www.workalignr.in/landingPage",
  },
  {
    id: 2,
    tag: "Dev",
    title: "Library Attendance System",
    desc: "A digital library management and attendance system that automates student check-ins, tracks usage patterns, and maintains records efficiently. Built with a structured backend and clean UI, it enhances transparency and reduces manual workload for administrators.",
    tech: ["React", "Node.js", "Tailwind css", "Express.js", "PostgreSql"],
    color: "#a78bfa",
    emoji: "📋",
    githubUrl: "https://github.com/akritiofficial26/Library_attendance_system",
    liveUrl: "",
  },
  {
    id: 3,
    tag: "Frontend",
    title: "CafeNest",
    desc: "A modern and visually engaging website for a coffee brand, designed to showcase products, menu, and brand story. Focused on smooth user experience, aesthetic UI, and responsive design, it creates a warm and inviting digital presence for customers.",
    tech: ["React", "Tailwind"],
    color: "#f97316",
    emoji: "🎨",
    githubUrl: "https://github.com/akritiofficial26/Cafe-Nest",
    liveUrl: "",
  },
  {
    id: 4,
    tag: "UI/UX",
    title: "Heal App",
    desc: "A user-centric health application tailored for women managing PCOS/PCOD. It helps track symptoms, cycles, and lifestyle habits while providing personalized insights and wellness recommendations to support better health decisions.",
    tech: ["Figma"],
    color: "#38bdf8",
    emoji: "📊",
    liveUrl:
      "https://www.figma.com/design/TFaJoDFTmg3QES3maUCYaY/HEAL?t=JuVocuLZuv3qtazk-0",
  },
  {
    id: 5,
    tag: "ui/ux",
    title: "Jwels",
    desc: "A sleek and elegant UI/UX design for a jewelry e-commerce app, focused on premium user experience. It emphasizes product visualization, smooth navigation, and a luxurious feel to enhance user engagement and conversion, A digital gallery platform for independent artists to showcase and sell their work with NFT minting support.",
    tech: ["Figma"],
    color: "#fb7185",
    emoji: "🧠",
    liveUrl:
      "https://www.figma.com/design/XjWsJ3lDIiDL4STBcwsweA/Jewelry-app-design?node-id=0-1&p=f&t=JuVocuLZuv3qtazk-0",
  },
  {
    id: 6,
    tag: "Frontend",
    title: "EduBroadcast — Content Broadcasting System",
    desc: "Built a React.js educational platform with role-based access — enabling teachers to upload content, principals to moderate it, and students to stream approved broadcasts on a public page.",
    tech: ["React", "Tailwind css"],
    color: "#34d399",
    emoji: "💻",
    githubUrl: "https://github.com/akritiofficial26/Content_Broadcasting_System",
    liveUrl: "https://content-broadcasting-system-steel.vercel.app/login",
  },
];

const filters = ["All"];

// const filters = ['All', 'Development', 'Designing'];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-label">My Work</div>
        <h2 className="section-title">
          Selected <em>Projects</em>
        </h2>

        {/* Filter bar */}
        <div className="projects__filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`projects__filter ${active === f ? "projects__filter--active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((p, i) => (
            <div
              className="project-card"
              key={p.id}
              style={{
                "--accent-color": p.color,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <div className="project-card__header">
                <div className="project-card__emoji">{p.emoji}</div>
                <div className="project-card__links">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link"
                      aria-label="GitHub"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link"
                      aria-label="Live Demo"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__tag">{p.tag}</div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>

              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span className="project-card__tech-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-card__bar" />
            </div>
          ))}
        </div>

        <div className="projects__cta">
          <a
            href="https://github.com/akritiofficial26"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View All on GitHub
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
