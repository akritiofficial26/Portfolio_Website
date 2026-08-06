import React, { useState } from 'react';
import './Contact.css';

const EMAILJS_SERVICE_ID  = 'service_uwr39s8';    
const EMAILJS_TEMPLATE_ID = 'https://dashboard.emailjs.com/admin/templates/az15ffi';   
const EMAILJS_PUBLIC_KEY  = 'CCHSyhT4s3PfMqvWe';    

const Contact = () => {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          reply_to:   form.email,
        }
      );

      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const contacts = [
    {
      label: 'Email',
      value: 'akritiofficial26@gmail.com',
      href: 'mailto:akritiofficial26@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/akriti',
      href: 'https://www.linkedin.com/in/akriti-kumari-26a24b2b8/',
    },
    {
      label: 'GitHub',
      value: 'github.com/akriti',
      href: 'https://github.com/akritiofficial26',
    },
    {
      label: 'Location',
      value: 'Gurugram, India',
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
                <span className="contact__card-icon"><span className="ui-dot" aria-hidden="true" /></span>
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
              <div className="contact__success-icon"><span className="ui-dot" aria-hidden="true" /></div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>

              {status === 'error' && (
                <div style={{
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.4)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  fontSize: '13px',
                  color: '#f87171',
                }}>
                  Something went wrong. Please try again or email me directly at akritiofficial26@gmail.com
                </div>
              )}

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
