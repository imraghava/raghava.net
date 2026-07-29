import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Building Production-Ready AI & Enterprise Software",
      content: "From AI Agents and Large Language Models to Azure Cloud, .NET, Microservices, Kubernetes, and Enterprise Architecture—discover technical articles, implementation guides, best practices, and engineering insights from my journey building scalable enterprise applications.",
      link: "https://midwaythoughts.com/",
    },
  ];

  return (
    <section id="blog" className="h-screen p-8 flex justify-center items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-archivo font-bold mb-8 text-grape">BLOG</h2>
        {blogs.map(({ id, title, content, link }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" className="block bg-cream text-grape p-6 rounded-md shadow-md mb-4 hover:opacity-90 transition-opacity">
            <h3 className="text-[22px] font-bold mb-4">{title}</h3>
            <p className="text-base font-medium mb-4">{content}</p>
            <span className="text-grape py-2 px-4 rounded-md underline hover:opacity-60">Explore the Blog →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Blogs;