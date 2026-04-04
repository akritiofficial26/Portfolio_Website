import React from 'react';
import './About.css';

const About = () => {
  const facts = [
    { icon: '🎓', label: 'Education', value: 'B.Tech in Computer Science' },
    { icon: '📍', label: 'Location', value: 'New Delhi, India' },
    { icon: '💼', label: 'Experience', value: '2+ Years in Leadership & Development' },
    { icon: '🌐', label: 'Languages', value: 'Hindi, English' },
  ];

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        {/* Left: Image area */}
        <div className="about__visual">
          <div className="about__img-wrap">
            <div className="about__img-placeholder">
              <span>A</span>
            </div>
            <div className="about__img-badge">
              <span>🔥</span>
              <div>
                <strong>Open to Work</strong>
                <p>Full-time / Freelance</p>
              </div>
            </div>
          </div>

          <div className="about__facts">
            {facts.map(f => (
              <div className="about__fact" key={f.label}>
                <span className="about__fact-icon">{f.icon}</span>
                <div>
                  <div className="about__fact-label">{f.label}</div>
                  <div className="about__fact-value">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text */}
        <div className="about__text">
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            Crafting digital<br />
            <em>experiences</em> that matter
          </h2>

          <p className="about__para">
            I'm <strong>Akriti</strong> — a passionate full-stack developer and UI/UX
            enthusiast based in New Delhi. I love turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>

          <p className="about__para">
            With over 3 years of hands-on experience, I've worked across the entire
            product lifecycle — from ideation and wireframing to shipping production-
            ready code. I specialise in React, Node.js, and modern design systems.
          </p>

          <p className="about__para">
            When I'm not building things, you'll find me exploring design trends,
            contributing to open source, or experimenting with creative coding.
          </p>

          <div className="about__actions">
            <a href="#contact" className="btn btn-primary">Work With Me</a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M3 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
