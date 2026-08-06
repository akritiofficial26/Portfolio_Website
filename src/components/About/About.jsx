import React from 'react';
import './About.css';
import profileImg from './image.jpg';
import resumePdf from './Akriti_Updated_Resume.pdf';

const About = () => {
  const facts = [
    { label: 'Education', value: 'B.Tech in Computer Science' },
    { label: 'Location', value: 'Gurgram, India' },
    { label: 'Languages', value: 'Hindi, English' },
  ];

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        {/* Left: Image area */}
        <div className="about__visual">
          <div className="about__img-wrap">
            <div className="about__img-placeholder">
              <img src={profileImg} alt="Akriti" className="about__img" />
            </div>
            <div className="about__img-badge">
              <span className="about__badge-dot" aria-hidden="true" />
              <div>
                <strong>Open to Work</strong>
                <p>Full-time / Freelance</p>
              </div>
            </div>
          </div>

          <div className="about__facts">
            {facts.map(f => (
              <div className="about__fact" key={f.label}>
                <span className="about__fact-dot" aria-hidden="true" />
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
            I'm <strong>Akriti Kumari</strong> — a passionate front-end developer and UI/UX
            enthusiast based in Gurugram. I love turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>

          <p className="about__para">
            I've worked across the entire
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
              href={resumePdf}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
              download
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
