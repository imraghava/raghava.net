import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faServer,
  faLaptopCode,
  faCloud,
  faDatabase,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useSpotlight } from '../hooks/useScrollEffects';

const skillGroups = [
  {
    title: 'Artificial Intelligence',
    icon: faBrain,
    items: ['Azure OpenAI', 'GPT-4', 'Semantic Kernel', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'AI Agents', 'Prompt Engineering', 'Vector Search', 'FAISS', 'Embeddings', 'AI Evaluation', 'Hallucination Detection'],
  },
  {
    title: 'Backend',
    icon: faServer,
    items: ['C#', '.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'Microservices', 'SignalR', 'Python', 'FastAPI'],
  },
  {
    title: 'Frontend',
    icon: faLaptopCode,
    items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Cloud & DevOps',
    icon: faCloud,
    items: ['Microsoft Azure', 'Azure AI Services', 'Azure Functions', 'Azure App Services', 'AKS', 'Azure DevOps', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
  },
  {
    title: 'Databases',
    icon: faDatabase,
    items: ['SQL Server', 'Azure SQL', 'Cosmos DB', 'Cassandra', 'OpenSearch'],
  },
  {
    title: 'Architecture',
    icon: faSitemap,
    items: ['Clean Architecture', 'Enterprise Architecture', 'Design Patterns', 'Distributed Systems', 'OWASP', 'WCAG', 'Section 508'],
  },
];

// Duplicated so the marquee can loop seamlessly at -50%.
const marqueeItems = skillGroups.flatMap((group) => group.items).slice(0, 26);

const SkillCard = ({ title, icon, items, delay }) => {
  const { ref, onMouseMove } = useSpotlight();

  return (
    <Reveal delay={delay}>
      <article ref={ref} onMouseMove={onMouseMove} className="card card--spotlight card--edge h-full p-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-iris/20 to-aqua/10 text-aqua">
            <FontAwesomeIcon icon={icon} className="text-sm" />
          </div>
          <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
          <span className="ml-auto font-mono text-[11px] text-faint">{items.length}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {items.map((skill) => (
            <span key={skill} className="chip !px-3 !py-1.5 !text-[12px]">
              {skill}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Capabilities"
          title="The stack I build with"
          lede="Depth where it counts — AI systems and enterprise .NET — with the cloud and data layers to put them in production."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} {...group} delay={(index % 3) * 90} />
          ))}
        </div>
      </div>

      {/* Continuous ticker — decorative, hidden from assistive tech. */}
      <div className="marquee-mask mt-16 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-3">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2 font-mono text-xs text-faint"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
