import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/siteContent.js';
import '../styles/Rebuild.css';


function HighlightsCarousel({ highlights }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setIndex((index + 1) % highlights.length), 5000);
    return () => clearTimeout(timer);
  }, [index, highlights.length]);
  const next = () => setIndex((index + 1) % highlights.length);
  return (
    <div className="rb-carousel" aria-label="Highlights carousel">
      <button className="rb-carousel-tab" onClick={next} title="Click for the next highlight">{highlights[index]}</button>
      <div className="rb-dots">
        {highlights.map((h, i) => (
          <button key={h} className={i === index ? "rb-dot active" : "rb-dot"} onClick={() => setIndex(i)} aria-label={`Highlight ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

function RebuildHome() {
  const sideProject = siteContent.journeyTimeline.find((j) => j.title === 'Teachly + MaptivityAI');
  const journeyRecentFirst = [...siteContent.journeyTimeline].filter((j) => j.title !== 'Teachly + MaptivityAI').reverse();
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
          <HighlightsCarousel highlights={siteContent.highlights} />
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
          <h2 className="rb-h2">Professional Journey</h2>
          <p className="rb-lede">Most recent first — read down through the story. Same 13 milestones as the Professional Experience Timeline.</p>
          <div className="rb-timeline">
            {journeyRecentFirst.map((j, i) => (
              <React.Fragment key={j.title}>
                <article className="rb-timeline-card">
                  <div className="rb-timeline-date">{j.date}</div>
                  <h3>{j.title}</h3>
                  <div className="rb-timeline-org">{j.org}</div>
                  <p>{j.summary}</p>
                </article>
                {i < journeyRecentFirst.length - 1 && <div className="rb-journey-arrow" aria-hidden="true">↓</div>}
              </React.Fragment>
            ))}
            <div className="rb-journey-arrow" aria-hidden="true">↓</div>
          </div>
        </section>

        <section id="skills" className="rb-section">
          <h2 className="rb-h2">Stack</h2>
          <div className="rb-skillgroup"><h3>Languages</h3><div className="rb-tags">{siteContent.skills.languages.map((s) => (<span className="rb-tag" key={s}>{s}</span>))}</div></div>
          <div className="rb-skillgroup"><h3>Cloud &amp; Platform</h3><div className="rb-tags">{siteContent.skills.cloud.map((s) => (<span className="rb-tag" key={s}>{s}</span>))}</div></div>
          <div className="rb-skillgroup"><h3>AI</h3><div className="rb-tags">{siteContent.skills.ai.map((s) => (<span className="rb-tag" key={s}>{s}</span>))}</div></div>
          <div className="rb-skillgroup"><h3>Web &amp; Edge</h3><div className="rb-tags">{siteContent.skills.webEdge.map((s) => (<span className="rb-tag" key={s}>{s}</span>))}</div></div>
        </section>

        <section id="contact" className="rb-section rb-footer">
          <h2 className="rb-h2">Beyond code</h2>
          <div className="rb-matrix">
            {siteContent.beyondCodeExperiences.map((e) => (
              <div className="rb-pixel" key={e.title} tabIndex={0}>
                <span>{e.title}</span>
                <div className="rb-pixel-popup"><strong>{e.title}</strong><p>{e.detail}</p></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default RebuildHome;
