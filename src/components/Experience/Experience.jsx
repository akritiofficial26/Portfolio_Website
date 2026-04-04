import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const journey = [
  {
    id: 1,
    year: '2022',
    semester: '1st Year',
    title: 'The Beginning',
    subtitle: "Tula's Institute of Engineering & Management",
    location: 'Dehradun, Uttarakhand',
    type: 'Education',
    color: '#38bdf8',
    icon: '🎓',
    current: false,
    points: [
      'Enrolled in B.Tech Computer Science & Engineering — the spark that started it all.',
      'Got introduced to programming fundamentals and fell in love with problem solving.',
      'Began exploring web technologies: HTML, CSS, and JavaScript for the first time.',
    ],
  },
  {
    id: 2,
    year: '2023',
    semester: '2nd Year',
    title: 'Finding My Path',
    subtitle: "IEEE — Tula's Institute",
    location: 'Dehradun, Uttarakhand',
    type: 'Community',
    color: '#f97316',
    icon: '⚡',
    current: false,
    points: [
      'Joined IEEE WIE (Women in Engineering) — discovered a passion for leadership and community building.',
      'Started learning Java and React.js, building small projects to sharpen frontend skills.',
      'Participated in my first hackathons and won 2nd Runner-Up at the Ideathon.',
    ],
  },
  {
    id: 3,
    year: '2024',
    semester: '3rd Year',
    title: 'Leading & Building',
    subtitle: 'Chair – Women in Engineering (WIE) · IEEE',
    location: 'India',
    type: 'Leadership',
    color: '#a78bfa',
    icon: '🏛️',
    current: false,
    points: [
      'Elected Chair of IEEE WIE — organized 15+ technical events including Utkrisht and IEEE ICACCM International Conference.',
      'Managed logistics, budgeting ($1600), and speaker coordination for hybrid national and international events.',
      'Published research on AR-based patient tracking in autonomous healthcare — achieved 92% detection accuracy.',
      'Built the Employee Management System using React, Node.js, Express.js and MySQL.',
      'Won 1st Runner-Up at the 3D Printing competition.',
    ],
  },
  {
    id: 4,
    year: '2025',
    semester: '4th Year',
    title: 'Going Professional',
    subtitle: 'Frontend Developer · Saukhyam Foundation',
    location: 'India',
    type: 'Work',
    color: '#c8f04a',
    icon: '💻',
    current: false,
    points: [
      'Landed my first professional role as Frontend Developer at Saukhyam Foundation.',
      'Working on the CARE project — responsive UIs for a healthcare app addressing PCOS/PCOD concerns.',
      'Published second research paper on Multi-Objective Optimization of RC Buildings using NSGA-II.',
      'Built the Library Attendance System with dashboard analytics and Excel export functionality.',
    ],
  },
  {
    id: 5,
    year: 'Now',
    semester: 'Present',
    title: 'Still Writing...',
    subtitle: 'B.Tech CSE · Expected June 2026',
    location: 'New Delhi, India',
    type: 'Present',
    color: '#22c55e',
    icon: '🚀',
    current: true,
    points: [
      'Finishing B.Tech with a CGPA of 7.1/10.0 — final year, final push.',
      'Actively sharpening TypeScript, Next.js, and contributing to open source.',
      'Open to full-time roles, freelance projects, and exciting collaborations.',
      "The story isn't over — the best chapters are still being written. ✨",
    ],
  },
];

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`exp-item ${visible ? 'exp-item--visible' : ''} ${isLeft ? 'exp-item--left' : 'exp-item--right'}`}
      style={{ '--delay': `${index * 0.12}s`, '--card-accent': item.color }}
    >
      <div className="exp-item__dot">
        <span>{item.icon}</span>
        {item.current && <div className="exp-item__dot-pulse" />}
      </div>

      <div className={`exp-item__year ${isLeft ? 'exp-item__year--right' : 'exp-item__year--left'}`}>
        <span className="exp-item__year-label">{item.year}</span>
        <span className="exp-item__semester">{item.semester}</span>
      </div>

      <div className="exp-card">
        <div className="exp-card__top">
          <div className="exp-card__type-badge">{item.type}</div>
          <h3 className="exp-card__role">{item.title}</h3>
          <div className="exp-card__company">
            <span>{item.subtitle}</span>
            <span className="exp-card__dot">·</span>
            <span>{item.location}</span>
          </div>
          {item.current && (
            <div className="exp-card__live-badge">
              <span />Currently Here
            </div>
          )}
        </div>

        <ul className="exp-card__points">
          {item.points.map((pt, i) => (
            <li
              key={i}
              className="exp-card__point"
              style={{ '--pt-delay': `${(index * 0.12) + (i * 0.08) + 0.25}s` }}
            >
              <span className="exp-card__point-arrow">→</span>
              {pt}
            </li>
          ))}
        </ul>

        <div className="exp-card__bar" />
      </div>
    </div>
  );
};

const Experience = () => {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div ref={titleRef} className={`experience__header ${titleVisible ? 'experience__header--visible' : ''}`}>
          <div className="section-label">My Journey</div>
          <h2 className="section-title">
            From <em>Day One</em><br />
            to Right Now
          </h2>
          <p className="experience__subtitle">
            4 years, 2 research papers, 15+ events, and a whole lot of code.
            Here's every chapter of my story so far.
          </p>
        </div>

        <div className="exp-timeline">
          <div className="exp-timeline__line">
            <div className="exp-timeline__line-fill" />
          </div>

          <div className="exp-timeline__cap exp-timeline__cap--top">
            <span>🌱</span>
            <p>Where it all started</p>
          </div>

          {journey.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}

          <div className="exp-timeline__cap exp-timeline__cap--bottom">
            <div className="exp-timeline__cap-dot">
              <span>⭐</span>
              <div className="exp-timeline__cap-pulse" />
            </div>
            <p>The story continues…</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
