import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useSpotlight } from '../hooks/useScrollEffects';

const projects = [
  {
    title: 'DocuHub',
    kicker: 'Document intelligence',
    stack: ['Azure OpenAI', 'RAG', 'OCR', 'Semantic Search', '.NET'],
    about: 'Enterprise AI-powered document intelligence platform combining OCR, retrieval, and grounded generation over regulated content.',
    impact: 'Delivered intelligent document processing workflows that measurably improved information retrieval and operational efficiency.',
    link: 'https://www.linkedin.com/in/imraghava/',
  },
  {
    title: 'RIB Modernization',
    kicker: 'Legacy → cloud-native',
    stack: ['.NET', 'React', 'Azure', 'SignalR', 'Kubernetes'],
    about: 'Cloud-native correctional case management platform replacing a legacy system without interrupting daily operations.',
    impact: 'Modernized into scalable, secure, cloud-native services with real-time collaboration across engineering teams.',
    link: 'https://www.linkedin.com/in/imraghava/',
  },
  {
    title: 'AI Enterprise Search',
    kicker: 'Semantic retrieval',
    stack: ['Embeddings', 'Vector Search', 'LLMs', 'OpenSearch'],
    about: 'Enterprise semantic search over large internal knowledge bases, built on embeddings and vector databases.',
    impact: 'Made sprawling knowledge bases genuinely navigable through intelligent search and summarization.',
    link: 'https://midwaythoughts.com/',
  },
  {
    title: 'Intelligent Form Automation',
    kicker: 'Workflow automation',
    stack: ['AI Automation', 'Government Systems', 'Orchestration'],
    about: 'AI-assisted government forms platform that compresses a multi-day manual process into hours.',
    impact: 'Applied automation, orchestration, and user-centered design to accelerate complex enterprise workflows.',
    link: 'https://midwaythoughts.com/',
  },
];

const ProjectCard = ({ title, kicker, stack, about, impact, link, index }) => {
  const { ref, onMouseMove } = useSpotlight();

  return (
    <Reveal delay={(index % 2) * 110}>
      <a
        ref={ref}
        onMouseMove={onMouseMove}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card card--spotlight card--edge group flex h-full flex-col p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow !text-[0.68rem] !tracking-[0.2em]">{kicker}</p>
            <h3 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-white">
              {title}
            </h3>
          </div>
          <span className="mt-1 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aqua">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
          </span>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-muted">{about}</p>

        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          <span className="font-semibold text-aqua">Impact — </span>
          {impact}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-faint"
            >
              {tech}
            </span>
          ))}
        </div>
      </a>
    </Reveal>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Selected work"
          title="Systems shipped into production"
          lede="Four projects that ran in regulated, high-stakes environments — not demos."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
