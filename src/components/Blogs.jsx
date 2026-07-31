import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPenNib } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useSpotlight } from '../hooks/useScrollEffects';

const topics = [
  'AI Agents',
  'Large Language Models',
  'Azure Cloud',
  '.NET',
  'Microservices',
  'Kubernetes',
  'Enterprise Architecture',
  'RAG',
];

const Blogs = () => {
  const { ref, onMouseMove } = useSpotlight();

  return (
    <section id="blog" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04 — Writing"
          title="Notes from building in production"
          lede="Implementation guides, architecture decisions, and the things that only show up once real traffic arrives."
        />

        <Reveal delay={120}>
          <a
            ref={ref}
            onMouseMove={onMouseMove}
            href="https://midwaythoughts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card card--spotlight card--edge group mt-16 block p-8 sm:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-iris/20 to-aqua/10 text-aqua">
                <FontAwesomeIcon icon={faPenNib} />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  midwaythoughts.com
                </p>
                <p className="text-sm text-muted">Technical blog</p>
              </div>
            </div>

            <h3 className="mt-7 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-white sm:text-3xl">
              Building Production-Ready AI &amp; Enterprise Software
            </h3>

            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
              From AI agents and large language models to Azure, .NET, microservices, and Kubernetes —
              technical articles, implementation guides, and engineering insights from a decade of
              shipping enterprise systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-faint"
                >
                  {topic}
                </span>
              ))}
            </div>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-aqua">
              Explore the blog
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Blogs;
