import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'DocuHub',
      skills: 'Azure OpenAI | RAG | OCR | Semantic Search | .NET',
      about: 'Enterprise AI-powered document intelligence platform built using Azure OpenAI, RAG, OCR, Semantic Search, and .NET.',
      learning: 'Delivered intelligent document processing workflows that improved information retrieval and operational efficiency for enterprise users.',
      visitLink: 'https://www.linkedin.com/in/imraghava/',
      sourceLink: 'https://github.com/imraghava',
    },
    {
      title: 'RIB Modernization',
      skills: '.NET | React | Azure | SignalR | Docker | Kubernetes',
      about: 'Cloud-native correctional case management platform built using .NET, React, Azure, SignalR, Docker, and Kubernetes.',
      learning: 'Modernized legacy systems into scalable, secure, cloud-native applications with strong collaboration across engineering teams.',
      visitLink: 'https://www.linkedin.com/in/imraghava/',
      sourceLink: 'https://github.com/imraghava',
    },
    {
      title: 'AI Enterprise Search',
      skills: 'Embeddings | Vector Search | LLMs | Knowledge Retrieval',
      about: 'Enterprise semantic search solution using embeddings, vector databases, and LLM-powered knowledge retrieval.',
      learning: 'Built retrieval-centric experiences that made large knowledge bases accessible through intelligent search and summarization.',
      visitLink: 'https://midwaythoughts.com/',
      sourceLink: 'https://github.com/imraghava',
    },
    {
      title: 'Intelligent Form Automation',
      skills: 'AI Automation | Government Systems | Workflow Optimization',
      about: 'AI-assisted government forms platform that reduced manual effort from days to hours.',
      learning: 'Applied automation, orchestration, and user-centered design to accelerate complex enterprise workflows.',
      visitLink: 'https://midwaythoughts.com/',
      sourceLink: 'https://github.com/imraghava',
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">FEATURED PROJECTS</h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(({ title, skills, about, learning, visitLink, sourceLink }, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10">
              <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                <h3 className="text-[23px] font-archivo font-bold mb-2">{title}</h3>
                <p className="text-[13px] text-grape mb-2">{skills}</p>
                <div className="flex flex-col justify-between">
                  <p className="text-base mb-4 font-medium">{about}</p>
                  <p className="text-base mb-4 font-medium"><span className='font-bold'>Impact</span>: {learning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
