import React, { useState } from 'react';
import './Skills.css';

const skillsData = {
  Frontend: [
    { name: 'React.js', icon: '⚛' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'HTML5', icon: '</>' },
    { name: 'CSS3', icon: '#' },
    { name: 'Tailwind CSS', icon: '~' },  
  ],
  Backend: [
    { name: 'Node.js', icon: '⬢' },
    { name: 'Express.js', icon: 'EX' },
    { name: 'REST APIs', icon: 'API' },
    { name: 'GraphQL', icon: 'GQL' },
  ],
  Tools: [
    { name: 'Git & GitHub', icon: 'GIT' },
    { name: 'Figma', icon: 'FG' },
    { name: 'Docker', icon: 'DKR' },
    { name: 'VS Code', icon: 'VS' },
  ],
};

const allTech = [
  { name: 'React', icon: '⚛' },
  { name: 'Node', icon: '⬢' },
  { name: 'Git', icon: 'GIT' },
  { name: 'Figma', icon: 'FG' },
  { name: 'Docker', icon: 'DKR' },
  { name: 'AWS', icon: 'AWS' },
  { name: 'GraphQL', icon: 'GQL' },
  { name: 'Tailwind', icon: '~' },
];

const Skills = () => {
  const [active, setActive] = useState('Frontend');

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-label">My Skills</div>
        <h2 className="section-title">
          Technologies I<br />
          <em>work with</em>
        </h2>

        {/* Tabs */}
        <div className="skills__tabs">
          {Object.keys(skillsData).map(tab => (
            <button
              key={tab}
              className={`skills__tab ${active === tab ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Icon grid */}
        <div className="skills__grid">
          {skillsData[active].map((skill, i) => (
            <article className="skills__card" key={skill.name} style={{ animationDelay: `${i * 0.06}s` }}>
              <span className="skills__card-icon" aria-hidden="true">{skill.icon}</span>
              <h3 className="skills__card-title">{skill.name}</h3>
            </article>
          ))}
        </div>

        <p className="skills__subhead">Also used in projects</p>

        <div className="skills__icons" aria-label="Additional technologies">
          {allTech.map((item, i) => (
            <div
              className="skills__icon-chip"
              key={item.name}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <span className="skills__chip-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
