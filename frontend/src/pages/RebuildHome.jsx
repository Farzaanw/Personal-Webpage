import React, { useState, useEffect, useRef } from 'react';
import { siteContent } from '../data/siteContent.js';
import '../styles/Rebuild.css';


function MetricsRow({ metrics }) {
  const ref = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const update = () => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 10);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  };
  useEffect(() => { update(); }, []);
  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    if (dir > 0 && atEnd) { el.scrollTo({ left: 0, behavior: 'smooth' }); return; }
    el.scrollBy({ left: dir * 240, behavior: 'smooth' });
  };
  return (
    <div className="rb-metrics-wrap">
      {!atStart && <button className="rb-metrics-arrow" onClick={() => scroll(-1)} aria-label="Previous highlights">←</button>}
      <div className="rb-metrics" ref={ref} onScroll={update}>
        {metrics.map((m) => (
          <div className="rb-metric" key={m.label}>
            <span className="rb-metric-icon">{m.icon}</span>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
      <button className="rb-metrics-arrow" onClick={() => scroll(1)} aria-label="Next highlights">→</button>
    </div>
  );
}

function RebuildHome() {
  const journeyRecentFirst = [...siteContent.journeyTimeline].filter((j) => j.title !== 'Teachly + MaptivityAI').reverse();
  const [journeyOpen, setJourneyOpen] = useState(false);
  const mostRecent = journeyRecentFirst[0];
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
            <a href="/Farzaan_Wadiwalla_Resume.pdf" download>Resume</a>
          </div>
          <div className="rb-edu">
            <strong>{siteContent.education.degree} — {siteContent.education.school}</strong>
            <span>{siteContent.education.date} · {siteContent.education.gpa}</span>
            <div className="rb-tags">{siteContent.education.coursework.map((c) => (<span className="rb-tag" key={c}>{c}</span>))}</div>
          </div>
          <MetricsRow metrics={siteContent.metrics} />
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
          <p className="rb-lede">Most recent first — read down through the story. Side projects live in Featured Work.</p>
          {!journeyOpen ? (
            <div className="rb-journey-stack" onClick={() => setJourneyOpen(true)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setJourneyOpen(true); } }}>
              <div className="rb-timeline-date">{mostRecent.date}</div>
              <h3>{mostRecent.title}</h3>
              <div className="rb-timeline-org">{mostRecent.org}</div>
              <p>{mostRecent.summary}</p>
              <span className="rb-journey-toggle">Show full journey - 12 experiences ↓</span>
            </div>
          ) : (
            <>
              <button className="rb-journey-toggle-btn" onClick={() => setJourneyOpen(false)}>Minimize journey ↑</button>
<div className="rb-timeline">
            {journeyRecentFirst.map((j, i) => (
              <React.Fragment key={j.title}>
                <article className="rb-timeline-card">
                  <div className="rb-timeline-date">{j.date}</div>
                  <h3>{j.title}</h3>
                  <div className="rb-timeline-org">{j.org}</div>
                  <p>{j.summary}</p>
                  {j.bullets && (<ul className="rb-bullets">{j.bullets.map((b) => (<li key={b}>{b}</li>))}</ul>)}
                  {j.skills && (<div className="rb-tags">{j.skills.map((s) => (<span className="rb-tag" key={s}>{s}</span>))}</div>)}
                </article>
                {i < journeyRecentFirst.length - 1 && <div className="rb-journey-arrow" aria-hidden="true">↑</div>}
              </React.Fragment>
            ))}
          </div>
              <button className="rb-journey-toggle-btn" onClick={() => setJourneyOpen(false)}>Minimize ↑</button>
            </>
          )}
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
