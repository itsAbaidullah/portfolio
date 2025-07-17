import React, { useState, useEffect, useRef } from 'react';
import { NAME, HEADLINE, SUMMARY, CONTACT, NAV_LINKS, EXPERIENCES, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from './constants';
import type { Experience, Project, SkillCategory, Education as EducationType, Certification } from './types';
import { EnvelopeIcon } from './components/icons/EnvelopeIcon';
import { GlobeAltIcon } from './components/icons/GlobeAltIcon';
import { GitHubIcon } from './components/icons/GitHubIcon';
import { ArrowRightIcon } from './components/icons/ArrowRightIcon';
import { TopNavBar } from './components/TopNavBar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id;
      if (visibleSection) {
        setActiveSection(visibleSection);
      }
    }, { threshold: 0.3, rootMargin: '-20% 0px -50% 0px' });

    const sections = document.querySelectorAll('section[id], ul[id="contact"]');
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(252, 211, 77, 0.15), transparent 80%)`,
        }}
      />
      <TopNavBar navLinks={NAV_LINKS} activeSection={activeSection} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <img
                src={CONTACT.picture}
                alt={NAME}
                className="rounded-full h-48 w-48 mb-8 object-cover border-4 border-amber-500"
              />
              <h1 className="text-5xl font-bold tracking-tight text-amber-400 sm:text-6xl">
                <a href="/">{NAME}</a>
              </h1>
              <h2 className="mt-3 text-xl font-medium tracking-tight text-amber-400 sm:text-2xl">
                {HEADLINE}
              </h2>
              <p className="mt-4 max-w-xs text-lg leading-relaxed">
                {SUMMARY}
              </p>
              <nav className="nav hidden lg:block" aria-label="In-page navigation">
                <ul className="mt-16 w-max">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <a className="group flex items-center py-3" href={link.href}>
                        <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-amber-300 group-focus-visible:w-16 group-focus-visible:bg-amber-300 ${activeSection === link.href.substring(1) ? 'w-16 bg-amber-300' : ''}`} />
                        <span className={`nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-amber-300 group-focus-visible:text-amber-300 ${activeSection === link.href.substring(1) ? 'text-amber-300' : ''}`}>
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <ul id="contact" className="ml-1 mt-8 flex items-center scroll-mt-24" aria-label="Social media">
              <li className="mr-5 shrink-0">
                <a className="block hover:text-amber-300" href={CONTACT.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <span className="sr-only">GitHub</span>
                  <GitHubIcon />
                </a>
              </li>
              <li className="mr-5 shrink-0">
                <a className="block hover:text-amber-300" href={`mailto:${CONTACT.email}`} aria-label="Email">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon />
                </a>
              </li>
              <li className="mr-5 shrink-0">
                <a className="block hover:text-amber-300" href={`https://${CONTACT.portfolio}`} target="_blank" rel="noreferrer noopener" aria-label="Portfolio">
                  <span className="sr-only">Portfolio</span>
                  <GlobeAltIcon />
                </a>
              </li>
            </ul>
          </header>

          <main id="content" className="pt-24 lg:w-7/12 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400 lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4 text-lg">
                  Currently pursuing a degree in Data Science, I've dived deep into real-world applications, from collaborating on SEO projects to building predictive models. My experience in guest posting has honed my communication and outreach skills, complementing my technical abilities in data analysis and machine learning.
                </p>
                <p className="mb-4 text-lg">
                  I'm passionate about transforming raw data into actionable insights and am constantly expanding my toolkit with new technologies and certifications. Whether it's through developing a classification model to predict customer behavior or analyzing economic impacts, I enjoy the challenge of solving complex problems with data.
                </p>
              </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400 lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {EXPERIENCES.map((exp: Experience) => (
                    <li key={exp.company} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-900/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(252,211,77,0.2)] lg:group-hover:drop-shadow-lg" />
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.period}>{exp.period}</header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a className="inline-flex items-baseline font-medium leading-tight text-amber-400 hover:text-amber-300 focus-visible:text-amber-300 group/link text-lg" href="#" target="_blank" rel="noreferrer noopener" aria-label={`${exp.role} at ${exp.company}`}>
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                <span>{exp.role} · <span className="inline-block">{exp.company}</span></span>
                              </a>
                            </div>
                          </h3>
                          <ul className="mt-2 list-disc pl-5 text-base leading-normal">
                            {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400 lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {PROJECTS.map((proj: Project) => (
                    <li key={proj.title} className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-900/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(252,211,77,0.2)] lg:group-hover:drop-shadow-lg" />
                        <div className="z-10 sm:col-span-8">
                          <h3 className="font-medium leading-snug text-slate-200">
                              <a className="inline-flex items-baseline font-medium leading-tight text-amber-400 hover:text-amber-300 focus-visible:text-amber-300 group/link text-lg" href="#" aria-label={proj.title}>
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                  <span>{proj.title} <ArrowRightIcon /></span>
                              </a>
                          </h3>
                          <p className="mt-2 text-base leading-normal">{proj.description}</p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {proj.technologies.map(tech => (
                                <li key={tech} className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium leading-5 text-amber-300">{tech}</div>
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

             <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400 lg:sr-only">Skills</h2>
                </div>
                <div>
                    {SKILLS.map((category: SkillCategory) => (
                        <div key={category.name} className="mb-6">
                            <h3 className="text-lg font-bold text-amber-400 mb-3">{category.name}</h3>
                            <ul className="flex flex-wrap" aria-label={`${category.name} skills`}>
                                {category.skills.map(skill => (
                                    <li key={skill} className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium leading-5 text-amber-300">{skill}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            
            <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education and Certifications">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400 lg:sr-only">Education & Certs</h2>
                </div>
                 <div>
                    <h3 className="text-xl font-medium tracking-tight text-amber-400 sm:text-2xl mb-4">Education</h3>
                    <ol className="group/list">
                        {EDUCATION.map((edu: EducationType) => (
                             <li key={edu.degree} className="mb-8">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-900/50" />
                                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{edu.period}</header>
                                    <div className="z-10 sm:col-span-6">
                                        <h4 className="font-medium text-amber-400 text-lg">{edu.degree}</h4>
                                        <p className="text-slate-400 text-base">{edu.institution}</p>
                                        {edu.details && <p className="text-base text-slate-500 mt-1">{edu.details}</p>}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <h3 className="text-xl font-medium tracking-tight text-amber-400 sm:text-2xl mb-4 mt-12">Certifications</h3>
                     <ol>
                        {CERTIFICATIONS.map((cert: Certification) => (
                            <li key={cert.name} className="mb-4">
                                <p className="font-medium text-amber-400 text-lg">{cert.name}</p>
                                <p className="text-slate-400 text-base">{cert.issuer}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            
            <footer className="max-w-md pb-16 text-base text-slate-500 sm:pb-0">
              <p>
                Built with React and Tailwind CSS. Inspired by the design of Brittany Chiang's portfolio.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
