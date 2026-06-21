import React from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Frontend Development',
    issuer: 'LinkedIn Learning',
    year: '2025',
    description:
      'Covered modern frontend workflows, responsive UI patterns, and component-based application structure.',
    accent: '#c8f04a',
    badge: 'UI',
  },
  {
    id: 2,
    title: 'React.js Essentials',
    issuer: 'Coursera',
    year: '2024',
    description:
      'Focused on state management, reusable components, and building interactive single-page applications.',
    accent: '#38bdf8',
    badge: 'React',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    issuer: 'Figma Community',
    year: '2024',
    description:
      'Explored design systems, wireframing, and prototyping workflows for polished digital experiences.',
    accent: '#f97316',
    badge: 'Design',
  },
];

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="section-label">Certificates</div>
        <h2 className="section-title">
          Learning <em>credentials</em>
        </h2>

        <div className="certificates__grid">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.id}
              className="certificate-card"
              style={{
                '--accent-color': certificate.accent,
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <div className="certificate-card__top">
                <span className="certificate-card__badge">{certificate.badge}</span>
                <span className="certificate-card__year">{certificate.year}</span>
              </div>

              <h3 className="certificate-card__title">{certificate.title}</h3>
              <p className="certificate-card__issuer">{certificate.issuer}</p>
              <p className="certificate-card__desc">{certificate.description}</p>

              <div className="certificate-card__bar" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
