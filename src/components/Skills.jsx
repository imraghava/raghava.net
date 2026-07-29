import React from 'react';

const skillGroups = [
  {
    title: 'Artificial Intelligence',
    items: ['Azure OpenAI', 'GPT-4', 'Semantic Kernel', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'AI Agents', 'Prompt Engineering', 'Vector Search', 'OpenSearch', 'FAISS', 'Embeddings', 'AI Evaluation', 'Hallucination Detection'],
  },
  {
    title: 'Backend',
    items: ['C#', '.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'Microservices', 'SignalR', 'Python', 'FastAPI'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Azure AI Services', 'Azure Functions', 'Azure App Services', 'Azure Kubernetes Service (AKS)', 'Azure DevOps', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
  },
  {
    title: 'Databases',
    items: ['SQL Server', 'Azure SQL', 'Cosmos DB', 'Cassandra', 'OpenSearch'],
  },
  {
    title: 'Architecture',
    items: ['Clean Architecture', 'Enterprise Architecture', 'Design Patterns', 'Distributed Systems', 'OWASP', 'WCAG', 'Section 508'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen p-8 text-grape flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-archivo font-bold mb-10">SKILLS</h2>
        <div className="space-y-6">
          {skillGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">{group.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {group.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="font-semibold bg-cream p-3 border border-solid border-grape rounded-md text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
