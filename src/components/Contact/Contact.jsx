import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); 
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  const contacts = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'akritiofficial26@gmail.com',
      href: 'mailto:akritiofficial26@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/akriti',
      href: 'https://www.linkedin.com/in/akriti-kumari-26a24b2b8/',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/akriti',
      href: 'https://github.com/akritiofficial26',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'New Delhi, India',
      href: null,
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">

        <div className="contact__info">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's build something<br />
            <em>amazing</em> together
          </h2>

          <p className="contact__para">
            I'm currently open to full-time roles, freelance projects, and
            exciting collaborations. If you have an idea or just want to say
            hello — drop me a message!
          </p>

          <div className="contact__cards">
            {contacts.map(c => (
              <div className="contact__card" key={c.label}>
                <span className="contact__card-icon">{c.icon}</span>
                <div>
                  <div className="contact__card-label">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="contact__card-value" target="_blank" rel="noreferrer">
                      {c.value}
                    </a>
                  ) : (
                    <span className="contact__card-value">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact__availability">
            <span className="contact__avail-dot" />
            <span>Available for new projects — <strong>response within 24h</strong></span>
          </div>
        </div>

        <div className="contact__form-wrap">
          {status === 'sent' ? (
            <div className="contact__success">
              <div className="contact__success-icon">🎉</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Akriti...."
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="akriti@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry / Collaboration / Say Hi"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="contact__spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
