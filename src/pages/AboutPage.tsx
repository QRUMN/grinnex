import React from 'react';
import { Container } from '../components/common/Container';
import { BackButton } from '../components/common/BackButton';
import { Shield, Users, Award, Leaf, Target, Clock } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '25+' },
  { label: 'Satisfied Clients', value: '15K+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Service Areas', value: '100+' }
];

const values = [
  {
    icon: <Shield className="w-8 h-8 text-mint-400" />,
    title: 'Excellence',
    description: 'Delivering superior pest control solutions with unmatched expertise and professionalism.'
  },
  {
    icon: <Leaf className="w-8 h-8 text-mint-400" />,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices that protect both your space and the environment.'
  },
  {
    icon: <Users className="w-8 h-8 text-mint-400" />,
    title: 'Customer Focus',
    description: 'Building lasting relationships through exceptional service and transparent communication.'
  },
  {
    icon: <Target className="w-8 h-8 text-mint-400" />,
    title: 'Innovation',
    description: 'Continuously evolving our methods to provide cutting-edge pest control solutions.'
  }
];

const timeline = [
  {
    year: '1998',
    title: 'Company Founded',
    description: 'Established with a vision to revolutionize pest control services.'
  },
  {
    year: '2005',
    title: 'Eco-Friendly Initiative',
    description: 'Pioneered green pest control solutions in the industry.'
  },
  {
    year: '2012',
    title: 'Regional Expansion',
    description: 'Extended services to cover the entire metropolitan area.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched innovative digital solutions for enhanced customer service.'
  }
];

export const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-dark-900">
      <Container>
        <BackButton className="pt-8" />
        
        {/* Hero Section */}
        <div className="py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300">
              Leading the industry in innovative and eco-friendly pest control solutions since 1998. 
              We're committed to protecting your space while preserving our environment.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-mint-400">{stat.value}</p>
              <p className="text-dark-600 dark:text-dark-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300">
              To provide exceptional pest control services while maintaining the highest standards of safety, 
              environmental responsibility, and customer satisfaction. We believe in creating pest-free 
              environments without compromising the health of our planet or our communities.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20 bg-gray-50 dark:bg-dark-800 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
              Our Journey
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="flex-none w-24">
                  <span className="text-xl font-bold text-mint-400">{item.year}</span>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-mint-400">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-gray-50 dark:bg-dark-800 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
              Our Team
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience in pest control. 
              We're proud to have some of the industry's most skilled and dedicated experts on our team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Lead Technician',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250&h=250'
              },
              {
                name: 'Michael Chen',
                role: 'Operations Manager',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250&h=250'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Environmental Specialist',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=250&h=250'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-dark-600 dark:text-dark-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
              Our Certifications
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              We maintain the highest industry standards through continuous training and certification.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-12 h-12" />, label: 'EPA Certified' },
              { icon: <Shield className="w-12 h-12" />, label: 'State Licensed' },
              { icon: <Leaf className="w-12 h-12" />, label: 'Green Pro Certified' },
              { icon: <Clock className="w-12 h-12" />, label: 'QualityPro Member' }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-mint-400">
                  {cert.icon}
                </div>
                <p className="font-semibold text-dark-900 dark:text-white">
                  {cert.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};