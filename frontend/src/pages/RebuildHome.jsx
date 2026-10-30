import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/siteContent.js';
import '../styles/Rebuild.css';


function MetricsRow({ metrics }) {
  // Infinite conveyor: the list is rendered twice and the track animates
  // from -50% to 0, so it moves left-to-right forever with no visible seam.
  const half = (ariaHidden) => (
    <div className="rb-marquee-half" aria-hidden={ariaHidden || undefined}>
      {metrics.map((m) => (
        <div className="rb-metric" key={m.label}>
          <strong>{m.value}</strong>
          <span>{m.label}</span>
        </div>
      ))}
    </div>
  );
  return (
    <div className="rb-marquee" aria-label="Highlights">
      <div className="rb-marquee-track">
        {half(false)}
        {half(true)}
      </div>
    </div>
  );
}

function LoopBand({ title, items, reverse, duration }) {
  const half = (ariaHidden) => (
    <div className="rb-loop-half" aria-hidden={ariaHidden || undefined}>
      {items.map((s) => (<span className="rb-loop-chip" key={s}>{s}</span>))}
    </div>
  );
  return (
    <div className="rb-loopband rb-reveal">
      <h3>{title}</h3>
      <div className="rb-loop-viewport">
        <div className={`rb-loop-track${reverse ? ' reverse' : ''}`} style={{ animationDuration: duration }}>
          {half(false)}
          {half(true)}
        </div>
      </div>
    </div>
  );
}

function RebuildHome() {
  const journeyRecentFirst = [...siteContent.journeyTimeline].filter((j) => j.title !== 'Teachly + MaptivityAI').reverse();
  const [journeyOpen, setJourneyOpen] = useState(false);
  const mostRecent = journeyRecentFirst[0];

  // Scroll reveal (WHOOP-style): elements with .rb-reveal fade/slide in the first
  // time they enter the viewport, then stay static for the rest of the session.
  useEffect(() => {
    const els = document.querySelectorAll('.rb-reveal:not(.rb-inview)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('rb-inview'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('rb-inview');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [journeyOpen]);

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
        <section id="home" className="rb-section rb-section--dark rb-hero">
          <div className="rb-inner rb-reveal">
            <div className="rb-eyebrow">OREGON STATE · HONORS CS '27 · PORTLAND, OR</div>
            <h1>{siteContent.name}</h1>
            <p>{siteContent.role}</p>
            <div className="rb-cta">
              <a className="primary" href="#work">View work</a>
              <a href="https://github.com/Farzaanw" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/fw-35a844245" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:farzaanw@gmail.com">Email</a>
              <a href="/Farzaan_Wadiwalla_Resume.pdf" download>Resume</a>
            </div>
            <MetricsRow metrics={siteContent.metrics} />
          </div>
        </section>

        <section id="work" className="rb-section rb-section--light">
          <div className="rb-inner">
            <div className="rb-reveal">
              <h2 className="rb-h2">Featured work</h2>
              <p className="rb-lede">Built things that shipped to real users and real engineers — outcomes first.</p>
            </div>
            <div className="rb-grid">
              {siteContent.featured.map((p, i) => (
                <article className="rb-card rb-reveal" key={p.title} style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <div className="rb-tags">{p.stack.map((t) => (<span className="rb-tag" key={t}>{t}</span>))}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="rb-section rb-section--dark">
          <div className="rb-inner">
            <div className="rb-reveal">
              <h2 className="rb-h2">Professional Journey</h2>
              <p className="rb-lede">Most recent first — read down through the story. Side projects live in Featured Work.</p>
            </div>
            {!journeyOpen ? (
              <div className="rb-journey-stack rb-reveal" onClick={() => setJourneyOpen(true)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setJourneyOpen(true); } }}>
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
                      <article className="rb-timeline-card rb-reveal" style={{ transitionDelay: `${Math.min(i, 5) * 50}ms` }}>
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
              </>
            )}
          </div>
        </section>

        <section id="skills" className="rb-section rb-section--light">
          <div className="rb-inner">
            <div className="rb-reveal">
              <h2 className="rb-h2">Stack</h2>
              <p className="rb-lede">Always in the loop — plan, build, ship, observe, repeat.</p>
              <div className="rb-loop-wrap" aria-hidden="true">
                <svg className="rb-loop-svg" viewBox="0 0 200 100" role="presentation">
                  <path className="rb-loop-path" d="M100 50 C100 22 62 12 37 26 C12 40 12 60 37 74 C62 88 100 78 100 50 C100 22 138 12 163 26 C188 40 188 60 163 74 C138 88 100 78 100 50" />
                </svg>
                <div className="rb-loop-stages">PLAN · BUILD · SHIP · OBSERVE · IMPROVE</div>
              </div>
            </div>
            <LoopBand title="Languages" items={siteContent.skills.languages} duration="34s" />
            <LoopBand title="Cloud & Platform" items={siteContent.skills.cloud} reverse duration="52s" />
            <LoopBand title="AI" items={siteContent.skills.ai} duration="42s" />
            <LoopBand title="Web & Edge" items={siteContent.skills.webEdge} reverse duration="30s" />
          </div>
        </section>

        <section id="contact" className="rb-section rb-section--dark rb-footer">
          <div className="rb-inner">
            <div className="rb-reveal">
              <h2 className="rb-h2">Beyond code</h2>
            </div>
            <div className="rb-matrix rb-reveal">
              {siteContent.beyondCodeExperiences.map((e) => (
                <div className="rb-pixel" key={e.title} tabIndex={0}>
                  <span>{e.title}</span>
                  <div className="rb-pixel-popup"><strong>{e.title}</strong><p>{e.detail}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RebuildHome;
