import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', href: 'https://github.com/akritiofficial26' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akriti-kumari-26a24b2b8/' },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-dot">✦</span> Akriti
          </a>
          <p className="footer__tagline">
            Crafting digital experiences with<br />
            passion, precision, and purpose.
          </p>
          <div className="footer__socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social"
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-title">Navigation</div>
          <ul>
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <div className="footer__nav-title">Contact</div>
          <ul>
            <li><a href="mailto:akritiofficial26@gmail.com">akritiofficial26@gmail.com</a></li>
            <li><span>Gurugram, India</span></li>
            <li><a href="tel:+911234567890">+918825309938</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Akriti. All rights reserved.</span>
          <a href="#home" className="footer__back-top" aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 15V5M5 10l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
