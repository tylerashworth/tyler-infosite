import React from 'react';
import { Heart, Coffee, Mountain, Camera, Code, Music } from 'lucide-react';

const AboutSection: React.FC = () => {
  const interests = [
    {
      icon: Mountain,
      title: 'Outdoor Adventures',
      description: 'Hiking, camping, and exploring nature to find inspiration and clarity',
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and landscapes, with a focus on natural beauty',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Code,
      title: 'Technology',
      description: 'Staying current with emerging tech trends and innovative solutions',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Music,
      title: 'Music Production',
      description: 'Creating and mixing music as a creative outlet and stress relief',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: Coffee,
      title: 'Coffee Culture',
      description: 'Exploring specialty coffee and the craft behind the perfect brew',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Volunteering and giving back to local tech and outdoor communities',
      gradient: 'from-orange-500 to-teal-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Beyond product management, I'm passionate about life, learning, and making meaningful connections
          </p>
        </div>

        {/* Personal Story */}
        <div className="mb-16">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">My Journey</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                My path to product management began with a fascination for how technology can solve real-world problems. 
                Growing up, I was always the person friends and family turned to when they needed help with technology, 
                and I discovered my passion for bridging the gap between complex technical solutions and user needs.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                After completing my computer science degree, I realized that my true calling wasn't just in writing code, 
                but in understanding the 'why' behind what we build. This led me to pursue an MBA and transition into 
                product management, where I could combine my technical background with business strategy and user empathy.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Today, I'm driven by the opportunity to create products that not only meet business objectives but 
                genuinely improve people's lives. Whether it's streamlining a complex workflow or designing an 
                intuitive user interface, I find fulfillment in making technology more accessible and valuable.
              </p>
            </div>
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">Interests & Hobbies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${interest.gradient} rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300`}>
                  <interest.icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-lg font-semibold text-slate-100 mb-3">
                  {interest.title}
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-2xl p-8 border border-teal-400/20">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-lg font-semibold text-teal-400 mb-2">Authenticity</h4>
                <p className="text-slate-300 text-sm">
                  Being genuine in all interactions and staying true to my values
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Growth</h4>
                <p className="text-slate-300 text-sm">
                  Continuously learning and helping others reach their potential
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Impact</h4>
                <p className="text-slate-300 text-sm">
                  Creating meaningful change that benefits users and businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;