import React from 'react';
import { ChevronDown, Target, TrendingUp, Users, Zap, Figma, GitBranch } from 'lucide-react';

const HeroSection: React.FC = () => {
  const competencies = [
    { icon: Target, title: 'Product Management', description: 'End-to-end product lifecycle' },
    { icon: TrendingUp, title: 'Strategic Planning', description: 'Data-driven roadmaps' },
    { icon: Zap, title: 'Data-Driven Insights', description: 'Analytics & optimization' },
    { icon: GitBranch, title: 'Agile & Kanban', description: 'Efficient workflows' },
    { icon: Figma, title: 'Figma & JIRA', description: 'Design & project tools' },
    { icon: Users, title: 'Team Leadership', description: 'Cross-functional collaboration' },
  ];

  const scrollToNext = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[110vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/DJI_20211024_110636_001.jpeg"
          alt="Mountain Lake Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50 backdrop-brightness-[.85]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight" data-aos="fade-in">
  Tyler Ashworth
          </h1>
          <p
            className="text-xl md:text-2xl text-teal-400 font-medium mb-8 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Delivering innovative solutions to bridge the gap between business and technology.
          </p>
          <p
            className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed text-center px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Product Manager with a passion for creating user-centered solutions that drive business growth. 
            I specialize in transforming complex technical challenges into intuitive products that users love 
            and businesses depend on.
          </p>
        </div>

        {/* Core Competencies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 px-4">
          {competencies.map((competency, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 transform hover:scale-105 group shadow-md hover:shadow-xl"
            >
              {/* Icon container */}
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-teal-400/40 transition-all duration-300">
                  <competency.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              {/* Title and Description */}
              <h3 className="text-lg font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-1 text-center">
                {competency.title}
              </h3>
              <p className="text-slate-300 text-sm leading-snug text-center">
                {competency.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center">
  <span className="text-sm text-slate-400 mb-1">See My Work</span>
  <button
    onClick={scrollToNext}
    className="animate-bounce text-slate-300 hover:text-teal-400 transition-colors duration-300"
    aria-label="Scroll to next section"
  >
    <ChevronDown size={32} />
  </button>
</div>
      </div>
    </section>
  );
};

export default HeroSection;
