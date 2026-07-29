import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase, faBrain, faGraduationCap, faArrowRight, faTools, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const quickLinks = [
  { title: 'Email', value: 'imraghava@gmail.com', href: 'mailto:imraghava@gmail.com', icon: faEnvelope },
  { title: 'LinkedIn', value: 'linkedin.com/in/imraghava', href: 'https://www.linkedin.com/in/imraghava/', icon: faLinkedin },
  { title: 'GitHub', value: 'github.com/imraghava', href: 'https://github.com/imraghava', icon: faGithub },
  { title: 'X (Twitter)', value: '@imraghava', href: 'https://x.com/imraghava', icon: faTwitter },
  { title: 'Technical Blog', value: 'midwaythoughts.com', href: 'https://midwaythoughts.com/', icon: faGlobe },
  { title: 'Website', value: 'raghava.dev', href: 'https://www.linkedin.com/in/imraghava/', icon: faBriefcase },
];

const detailCards = [
  {
    title: 'Professional Highlights',
    icon: faBriefcase,
    items: ['12+ years across enterprise software', 'Government & Fortune 500 delivery', 'Led 15+ developers and 100+ features'],
  },
  {
    title: 'Areas of Expertise',
    icon: faBrain,
    items: ['AI Engineering', 'Cloud Architecture', 'Distributed Systems', 'Enterprise .NET'],
  },
  {
    title: 'Certifications',
    icon: faTools,
    items: ['AZ-900', 'AZ-204', 'Harness CI Developer'],
  },
  {
    title: 'Education',
    icon: faGraduationCap,
    items: ['Ph.D. (Pursuing)', 'M.S. Computer Science', 'B.Tech'],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-queen-pink p-6 md:p-8 py-16 text-grape flex justify-center items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Let's Build Something Extraordinary</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
          I’m available for AI Engineering, Cloud Architecture, Enterprise Software Development, Technical Leadership, Consulting, and Speaking opportunities. I partner with teams building ambitious products, modern platforms, and intelligent systems that create measurable business impact.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left">
          {quickLinks.map(({ title, value, href, icon }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-cream/80 p-4 rounded-xl border border-grape/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-queen-pink/20 p-3 text-grape transition-transform duration-300 group-hover:scale-105">
                  <FontAwesomeIcon icon={icon} size="lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide">{title}</p>
                  <p className="text-sm font-medium text-grape/80">{value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
          {detailCards.map(({ title, icon, items }) => (
            <div key={title} className="bg-cream/85 p-5 rounded-xl border border-grape/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-queen-pink/20 p-3 text-grape">
                  <FontAwesomeIcon icon={icon} size="lg" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
              <ul className="space-y-2 text-sm font-medium text-grape/90">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-base">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-cream/90 p-6 md:p-8 rounded-2xl border border-grape/40 shadow-lg text-left">
          <p className="text-lg font-medium mb-5 leading-relaxed">
            Interested in collaborating on AI, enterprise software, or cloud architecture? Let's build intelligent solutions that create real business impact.
          </p>
          <a
            href="mailto:imraghava@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-grape px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:opacity-90"
          >
            Let's Connect
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;