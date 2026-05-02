import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const taglineRef = useRef(null);

  useEffect(() => {
    const words = ['Developer', 'Designer', 'Problem Solver'];
    let i = 0;
    let charIdx = 0;
    let deleting = false;

    const type = () => {
      if (!taglineRef.current) return;
      const word = words[i % words.length];

      if (!deleting) {
        taglineRef.current.textContent = word.slice(0, ++charIdx);
        if (charIdx === word.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        taglineRef.current.textContent = word.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          i++;
        }
      }
      setTimeout(type, deleting ? 60 : 100);
    };

    const t = setTimeout(type, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Decorative grid */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Floating orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for freelance work
        </div>

        <h1 className="hero__name">
          Hi, I'm <br />
          <span className="hero__name-highlight">Akriti</span>
        </h1>
        <p className="hero__tagline">
          A passionate{' '}
          <span className="hero__typed" ref={taglineRef} />
          <span className="hero__cursor">|</span>
        </p>

        <p className="hero__desc">
          I craft beautiful, performant digital experiences that leave a lasting
          impression. Let's build something remarkable together.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>

        <div className="hero__socials">
          {[
            { label: 'GitHubhttps://github.com/akritiofficial26', href: '#', icon: 'GH' },
            { label: 'https://www.linkedin.com/in/akriti-kumari-26a24b2b8/', href: '#', icon: 'LI' },
            
          ].map(s => (
            <a key={s.label} href={s.href} className="hero__social-link" aria-label={s.label}>
              <span>{s.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Right visual */}
      <div className="hero__visual">
        <div className="hero__avatar-ring">
          <div className="hero__avatar">
            <span>A</span>
          </div>
          <div className="hero__orbit">
            <div className="hero__orbit-dot hero__orbit-dot--1">
              <span>⚡</span>
            </div>
            <div className="hero__orbit-dot hero__orbit-dot--2">
              <span>🎨</span>
            </div>
            <div className="hero__orbit-dot hero__orbit-dot--3">
              <span>🚀</span>
            </div>
          </div>
        </div>

        <div className="hero__stat-cards">
          <div className="hero__stat-card">
            <div className="hero__stat-number">6</div>
            <div className="hero__stat-label">Month Experience</div>
          </div>
          <div className="hero__stat-card">
            <div className="hero__stat-number">6+</div>
            <div className="hero__stat-label">Projects Done</div>
          </div>
          <div className="hero__stat-card">
            <div className="hero__stat-number">5+</div>
            <div className="hero__stat-label">Research Paper</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
