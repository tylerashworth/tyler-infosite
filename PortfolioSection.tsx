import React from 'react';
import { ExternalLink, Users, TrendingUp, Smartphone, ArrowRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'Apex Capital Platform',
      description: 'Complete platform redesign focusing on user experience and engagement',
      highlights: [
        'Redesigned in 2025, increasing user engagement by 20%',
        'Streamlined onboarding process reducing drop-off by 35%',
        'Implemented responsive design for mobile-first approach'
      ],
      tags: ['Product Strategy', 'UX/UI Design', 'Data Analytics'],
      icon: TrendingUp,
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      title: 'TCS Fuel Mobile App',
      description: 'Led comprehensive app handoff and optimization for large-scale deployment',
      highlights: [
        'Led TCS Fuel app handoff supporting 30k+ users',
        'Reduced app crash rate by 45% through systematic testing',
        'Improved user satisfaction scores by 40%'
      ],
      tags: ['Mobile Development', 'Team Leadership', 'Quality Assurance'],
      icon: Smartphone,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Cross-Platform Integration',
      description: 'Unified multiple systems into cohesive user experience',
      highlights: [
        'Integrated 5 legacy systems into single platform',
        'Reduced operational costs by 30%',
        'Improved team productivity by 50%'
      ],
      tags: ['System Integration', 'Process Optimization', 'Team Management'],
      icon: Users,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Product Portfolio
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Showcasing impactful products and solutions that drive business growth and user satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-teal-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 group-hover:shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors group-hover:translate-x-1 transform duration-200">
                <span className="font-medium">View Details</span>
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Preview My Work</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-xl font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 hover:transform hover:scale-105">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;