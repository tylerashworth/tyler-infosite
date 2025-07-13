import React from 'react';
import { Users, Target, Zap, Palette, Shield, TrendingUp } from 'lucide-react';

const LeadershipSection: React.FC = () => {
  const achievements = [
    {
      icon: Users,
      title: 'Cross-functional Leadership',
      description: 'Led diverse teams of 15+ engineers, designers, and stakeholders across multiple time zones',
      metric: '15+ Team Members',
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      icon: Target,
      title: 'Project Success Metrics',
      description: 'Delivered 95% of projects on time and under budget with measurable business impact',
      metric: '95% On-Time Delivery',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Automation Rollouts',
      description: 'Implemented automation solutions reducing manual processes by 60% across operations',
      metric: '60% Process Reduction',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'UX/UI Redesigns',
      description: 'Spearheaded complete design overhauls improving user satisfaction and engagement',
      metric: '40% Satisfaction Increase',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Vendor Recovery',
      description: 'Successfully recovered from critical third-party vendor failures with zero downtime',
      metric: '0% Downtime',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Drove strategic initiatives resulting in 150% revenue growth over 18 months',
      metric: '150% Revenue Growth',
      gradient: 'from-orange-500 to-teal-400'
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Leadership & Achievements
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Proven track record of leading high-performing teams and delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-teal-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl mb-6 group-hover:shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-4">
                {achievement.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {achievement.description}
              </p>

              <div className="border-t border-slate-700/50 pt-4">
                <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                  {achievement.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-2xl p-8 border border-teal-400/20">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Leadership Philosophy</h3>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              "Great products are built by great teams. My approach focuses on empowering individuals, 
              fostering collaboration, and creating an environment where innovation thrives. Success 
              comes from aligning business objectives with user needs while maintaining technical excellence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;