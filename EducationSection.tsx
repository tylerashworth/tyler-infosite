import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: 'Master of Business Administration',
      school: 'University of Technology',
      year: '2019',
      description: 'Specialized in Technology Management and Innovation Strategy',
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      icon: BookOpen,
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      year: '2017',
      description: 'Focus on Software Engineering and Human-Computer Interaction',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: 'Certified Scrum Product Owner (CSPO)',
      issuer: 'Scrum Alliance',
      year: '2023',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2023',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: Award,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2022',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Award,
      title: 'Design Thinking Certification',
      issuer: 'IDEO',
      year: '2022',
      gradient: 'from-orange-500 to-teal-400'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Continuous learning and professional development to stay at the forefront of technology and business
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-teal-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl mb-6 group-hover:shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300`}>
                  <edu.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-slate-100 mb-2">
                  {edu.degree}
                </h4>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-teal-400 font-medium">{edu.school}</p>
                  <span className="text-slate-400 text-sm">{edu.year}</span>
                </div>

                <p className="text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-400/30 transition-all duration-300 hover:transform hover:scale-105 group text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300`}>
                  <cert.icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-lg font-semibold text-slate-100 mb-2">
                  {cert.title}
                </h4>

                <p className="text-teal-400 text-sm font-medium mb-1">
                  {cert.issuer}
                </p>

                <p className="text-slate-400 text-sm">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-2xl p-8 border border-teal-400/20">
            <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Continuous Learning</h3>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              I believe in lifelong learning and staying current with industry trends. I regularly attend 
              conferences, participate in workshops, and engage with the product management community to 
              continuously improve my skills and knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;