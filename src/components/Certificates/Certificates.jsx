import React from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Internshala Certificate',
    issuer: 'Internshala',
    year: '2025',
    accent: '#c8f04a',
    badge: 'Image',
    mediaType: 'image',
    mediaSrc: '/images/internshala.jpeg',
    link: '/images/internshala.jpeg',
  },
  {
    id: 2,
    title: 'Frontend Edunet Certificate',
    issuer: 'Edunet Foundation',
    year: '2025',
    accent: '#38bdf8',
    badge: 'Image',
    mediaType: 'image',
    mediaSrc: '/images/Fronetnd-edunet.jpg',
    link: '/images/Fronetnd-edunet.jpg',
  },
  {
    id: 3,
    title: 'NPTEL Certificate',
    issuer: 'NPTEL',
    year: '2024',
    accent: '#f97316',
    badge: 'Image',
    mediaType: 'image',
    mediaSrc: '/images/nptel-certificate.jpg',
    link: '/images/nptel-certificate.jpg',
  },
  {
    id: 4,
    title: 'JavaScript Algorithms',
    issuer: 'freeCodeCamp',
    year: '2023',
    description:
      'Built a stronger foundation in data structures, problem solving, and clean JavaScript logic.',
    accent: '#a78bfa',
    badge: 'JS',
  },
  {
    id: 5,
    title: 'Responsive Web Design',
    issuer: 'Google Digital Garage',
    year: '2023',
    description:
      'Practiced mobile-first layouts, flexible components, and accessibility-aware page structure.',
    accent: '#22c55e',
    badge: 'Responsive',
  },
  {
    id: 6,
    title: 'TypeScript Fundamentals',
    issuer: 'Udemy',
    year: '2024',
    description:
      'Covered typed components, safer refactoring, and maintaining larger frontend codebases.',
    accent: '#fb7185',
    badge: 'TS',
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
              <a className="certificate-card__media" href={certificate.link} target="_blank" rel="noreferrer">
                {certificate.mediaType === 'image' ? (
                  <img
                    className="certificate-card__image"
                    src={certificate.mediaSrc}
                    alt={`${certificate.title} preview`}
                  />
                ) : (
                  <div className="certificate-card__document">
                    <span className="certificate-card__document-label">Document</span>
                    <span className="certificate-card__document-title">Open certificate</span>
                  </div>
                )}
              </a>

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
