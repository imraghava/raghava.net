import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const roles = [
  'AI Engineer',
  'Lead Full Stack .NET Developer',
  'Researcher & Ph.D. Scholar',
  'Technical Blogger',
];

const socialMediaLinks = [
  { href: 'https://www.linkedin.com/in/imraghava/', icon: faLinkedin },
  { href: 'https://github.com/imraghava', icon: faGithub },
  { href: 'https://x.com/imraghava', icon: faTwitter },
  { href: 'https://midwaythoughts.com/', icon: faGlobe },
  { href: 'mailto:imraghava@gmail.com', icon: faEnvelope },
];

const Home = () => {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto text-center bg-opacity-70 px-4">
        <p className="font-bold text-grape text-4xl">Hello, I'm</p>
        <h1 className="text-7xl font-extrabold leading-tight my-5 text-black font-dancing-script">Raghava Mahankali</h1>
        <p className="text-lg text-grape font-medium mb-2">Building Enterprise AI Solutions • Cloud-Native Applications • Intelligent Automation</p>
        <div className="mb-7 flex justify-center">
          <p className={`inline-flex items-center rounded-full border border-grape/30 bg-cream/80 px-5 py-3 text-xl font-semibold shadow-md transition-all duration-500 ${activeRole === 2 ? 'scale-105 bg-gradient-to-r from-queen-pink/30 via-cream to-blue-purple/30 text-grape' : 'text-black'}`}>
            <span className="mr-2">✦</span>
            {roles[activeRole]}
          </p>
        </div>
        <div className="flex space-x-4 justify-center flex-wrap gap-3">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grape hover:text-black"
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
