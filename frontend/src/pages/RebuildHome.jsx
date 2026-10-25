import React from 'react';
import { siteContent } from '../data/siteContent.js';
import '../styles/Rebuild.css';

function RebuildHome() {
  return (
    <div className="rb-wrap">
      <nav className="rb-nav">
        <a className="rb-logo" href="#home">FW<span>.</span></a>
        <div className="rb-links">
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="rb-pill">Open to 2027 roles</span>
      </nav>

      <main>
        <section id="home" className="rb-section rb-hero">
          <div className="rb-eyebrow">OREGON STATE · HONORS CS '27 · PORTLAND, OR</div>
          <h1>{siteContent.name}</h1>
          <p>{siteContent.role}</p>
          <p className="rb-sub">{siteContent.status} · GPA 3.9 · Expected June 2027</p>
          <div className="rb-cta">
            <a className="primary" href="#work">View work</a>
            <a href="https://github.com/Farzaanw" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/fw-35a844245" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:farzaanw@gmail.com">Email</a>
          </div>
          <div className="rb-metrics">
            {siteContent.metrics.map((m) => (
              <div className="rb-metric" key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="rb-section">
          <h2 className="rb-h2">Featured work</h2>
          <p className="rb-lede">Built things that shipped to real users and real engineers — outcomes first.</p>
          <div className="rb-grid">
            {siteContent.featured.map((p) => (
              <article className="rb-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="rb-tags">{p.stack.map((t) => (<span className="rb-tag" key={t}>{t}</span>))}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="rb-section">
          <h2 className="rb-h2">Journey</h2>
          <p className="rb-lede">Condensed from the full career timeline.</p>
          <div className="rb-journey">{siteContent.journey.join('  →  ')}</div>
        </section>

        <section id="skills" className="rb-section">
          <h2 className="rb-h2">Stack</h2>
          <div className="rb-skillgroup"><h3>Languages</h3><div className="rb-tags">{siteContent.skills.languages.map((s) => (<span className="rb-tag" key={s}>{s}</span>))}</div></div>
          <div className="rb-skillgroup"><h3>Cloud &amp; Platform</h3><div className="rb-tags">{siteContent.skills.cloud.map((s) => (<span className="rb-tag" key={s}>{s}</span>))}</div></div>
          <div className="rb-skillgroup"><h3>AI</h3><div className="rb-tags">{siteContent.skills.ai.map((s) => (<span className="rb-tag" key={s}>{s}</span>))}</div></div>
        </section>

        <section id="contact" className="rb-section rb-footer">
          <h2 className="rb-h2">Beyond code</h2>
          <p>{siteContent.beyondCode}</p>
          <p>Farzaan Wadiwalla · farzaanw@gmail.com · <a href="https://github.com/Farzaanw" target="_blank" rel="noopener noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/fw-35a844245" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>Rebuilt on feat/site-enhancements. Main site stays live until this branch is reviewed and merged.</p>
        </section>
      </main>
    </div>
  );
}

export default RebuildHome;
