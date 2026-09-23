"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "./icons";
import Terminal from "./terminal";
import { Locale, profile } from "../lib/profile";

const social = [
  { name: "Telegram", href: "https://t.me/andrewcomrade", icon: "telegram" as const },
  { name: "Email", href: "mailto:tit22an@gmail.com", icon: "mail" as const },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/andrew-titov-046248203", icon: "linkedin" as const },
  { name: "GitHub", href: "https://github.com/titanfat", icon: "github" as const },
];

export default function Portfolio() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = useMemo(() => profile[locale], [locale]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    const saved = window.localStorage.getItem("portfolio-locale");
    if (query === "ru" || query === "en") setLocale(query);
    else if (saved === "ru" || saved === "en") setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${(event.clientX / window.innerWidth - 0.5) * 16}px`);
        document.documentElement.style.setProperty("--my", `${(event.clientY / window.innerHeight - 0.5) * 16}px`);
      });
    };
    window.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", move); };
  }, []);

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <div className="orb orbOne" aria-hidden="true" />
      <div className="orb orbTwo" aria-hidden="true" />

      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Andrew Titov — home">ANDREW TITOV</a>
        <nav aria-label="Primary navigation">
          <a href="#about">{content.nav.about}</a>
          <a href="#experience">{content.nav.experience}</a>
          <a href="#projects">{content.nav.projects}</a>
          <a href="#contact">{content.nav.contact}</a>
        </nav>
        <div className="locale" aria-label="Language">
          <button className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>EN</button>
          <span>/</span>
          <button className={locale === "ru" ? "active" : ""} onClick={() => setLocale("ru")}>RU</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy" id="about">
          <span className="availability"><i />{content.availability}</span>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="intro">{content.intro}</p>
          <div className="actions">
            <a className="button primary" href={`/cv/andrew-titov-${locale}.pdf`} download>{content.resume}<span>↓</span></a>
            <a className="button secondary" href="https://cal.com/andrew-tit-omy5k5" target="_blank" rel="noreferrer">{content.schedule}<span>↗</span></a>
          </div>
          <div className="socials" aria-label="Contact links">
            {social.map((item) => <a key={item.name} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={item.name} title={item.name}><Icon name={item.icon} /></a>)}
          </div>
        </div>
        <Terminal locale={locale} title={content.terminalTitle} hint={content.terminalHint} commands={content.terminal} />
      </section>

      <section className="section" id="experience">
        <div className="sectionHead"><span>01</span><h2>{content.sectionExperience}</h2></div>
        <div className="experienceList">
          {content.experience.map((item) => (
            <article className="experience" key={`${item.company}-${item.period}`}>
              <div><p className="period">{item.period}</p><h3>{item.company}</h3></div>
              <div><p className="role">{item.role}</p><p className="summary">{item.summary}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{item.links && <div className="experienceLinks">{item.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}</div>}</div>
              {item.links ? null : item.href ? <a className="outLink" href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.company} website`}>↗</a> : <span className="outLink muted">—</span>}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHead"><span>02</span><h2>{content.sectionProjects}</h2></div>
        <div className="projectGrid">
          {content.projects.map((project) => {
            const card = <><span className="projectIndex">{project.index}</span><p className="projectKind">{project.kind}</p><h3>{project.title}</h3><p>{project.description}</p>{project.links && <div className="projectLinks">{project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}</div>}<span className="projectArrow">{project.href || project.links ? "↗" : "—"}</span></>;
            return project.href ? <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.index}>{card}</a> : <article className="project" key={project.index}>{card}</article>;
          })}
        </div>
      </section>

      <section className="section stackSection">
        <div className="sectionHead"><span>03</span><h2>{content.sectionStack}</h2></div>
        <div className="skills">{content.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="section educationSection">
        <div className="sectionHead"><span>04</span><h2>{content.sectionEducation}</h2></div>
        <div className="educationList">
          {content.education.map((item) => (
            <article className="education" key={`${item.year}-${item.title}`}>
              <span>{item.year}</span><h3>{item.title}</h3><p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">ANDREW TITOV · RUBY ON RAILS</p>
        <h2>{content.sectionContact}</h2>
        <p>{content.contactCopy}</p>
        <div className="actions centered">
          <a className="button primary" href="mailto:tit22an@gmail.com">tit22an@gmail.com</a>
          <a className="button secondary" href="https://cal.com/andrew-tit-omy5k5" target="_blank" rel="noreferrer">Cal.com ↗</a>
        </div>
        <div className="socials centered" aria-label="Contact links">
          {social.map((item) => <a key={item.name} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={item.name}><Icon name={item.icon} /></a>)}
        </div>
      </section>

      <footer><span>{content.footer}</span><span>© 2026</span></footer>
    </main>
  );
}
