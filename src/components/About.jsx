import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCloud, faLayerGroup, faUsers } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useSpotlight } from '../hooks/useScrollEffects';

const paragraphs = [
  'I am an AI Engineer, Lead Full Stack .NET Developer, Azure Solution Architect, researcher, and technical blogger with over 12 years designing enterprise-scale software for government agencies and Fortune 500 organizations.',
  'My work spans Large Language Models, Retrieval-Augmented Generation, Azure OpenAI, Semantic Kernel, cloud-native architecture, distributed systems, and modern full-stack development.',
  'I have architected production-grade AI systems, modernized legacy enterprise applications, built cloud-native platforms on Azure, and led engineering teams delivering secure, scalable software.',
  'Beyond shipping code, I research emerging AI technologies, write technical blogs, mentor developers, and am pursuing my Ph.D.',
];

const pillars = [
  {
    icon: faBrain,
    title: 'Enterprise AI',
    body: 'Agentic workflows, RAG pipelines, intelligent document processing, and evaluation harnesses that catch hallucination before users do.',
  },
  {
    icon: faCloud,
    title: 'Cloud Architecture',
    body: 'Azure-native platforms — AKS, Functions, App Services — designed for cost, resilience, and compliance from day one.',
  },
  {
    icon: faLayerGroup,
    title: 'Enterprise .NET',
    body: 'Large-scale .NET 8 systems, clean architecture, and legacy modernization without freezing the business.',
  },
  {
    icon: faUsers,
    title: 'Technical Leadership',
    body: 'Led 15+ engineers across 6 organizations, delivering 100+ features into regulated production environments.',
  },
];

const PillarCard = ({ icon, title, body, delay }) => {
  const { ref, onMouseMove } = useSpotlight();

  return (
    <Reveal delay={delay}>
      <article ref={ref} onMouseMove={onMouseMove} className="card card--spotlight card--edge h-full p-6">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-iris/20 to-aqua/10 text-aqua">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{body}</p>
      </article>
    </Reveal>
  );
};

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 — About"
          title="Turning ideas into intelligent enterprise systems"
          lede="Twelve years of shipping software that has to work on Monday morning, for people who cannot afford it not to."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {paragraphs.map((text, index) => (
              <Reveal key={text} delay={index * 90}>
                <p className="text-[15px] leading-[1.8] text-muted sm:text-base">{text}</p>
              </Reveal>
            ))}

            <Reveal delay={paragraphs.length * 90}>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Microsoft Certified', 'Government & Fortune 500', 'Ph.D. Candidate', '2 Publications'].map(
                  (badge) => (
                    <span key={badge} className="chip">
                      {badge}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.title} {...pillar} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
