import React from 'react';

const highlights = [
  '12+ Years Experience',
  '6+ Enterprise Organizations',
  '15+ Developers Led',
  '100+ Enterprise Features Delivered',
  '2 Research Publications',
  'Microsoft Certified',
  'Government & Fortune 500 Experience',
  'AI & Cloud Architect',
];

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-r from-blue-purple to-queen-pink p-8 text-grape flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <h2 className="text-[26px] font-archivo font-bold mb-6 border-b-2 border-white pb-6">TRANSFORMING IDEAS INTO INTELLIGENT ENTERPRISE SOLUTIONS</h2>
          <div className="text-lg font-medium flex flex-col gap-4 text-left md:text-center">
            <p>I am Raghava Mahankali, an AI Engineer, Lead Full Stack .NET Developer, Azure Solution Architect, researcher, and technical blogger with over 12 years of experience designing enterprise-scale software for government agencies and Fortune 500 organizations.</p>
            <p>My expertise includes Artificial Intelligence, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Azure OpenAI, Semantic Kernel, cloud-native architecture, distributed systems, enterprise software engineering, and modern full-stack application development.</p>
            <p>I have architected production-grade AI systems, modernized legacy enterprise applications, built cloud-native platforms on Microsoft Azure, and led engineering teams delivering secure, scalable, and intelligent software solutions.</p>
            <p>Currently, I focus on Enterprise AI, Agentic AI, Intelligent Document Processing, AI Automation, Cloud Architecture, and Large Scale .NET Applications.</p>
            <p>Beyond software development, I enjoy researching emerging AI technologies, writing technical blogs, mentoring developers, contributing to the community, and pursuing my Ph.D.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm font-semibold">
            {highlights.map((item, index) => (
              <div key={index} className="bg-cream/80 p-3 rounded-md border border-grape/40 text-grape">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;