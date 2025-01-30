import React from 'react';
import { Container } from '../components/common/Container';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactMap } from '../components/contact/ContactMap';
import { BackButton } from '../components/common/BackButton';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="py-24 bg-white dark:bg-dark-900">
      <Container>
        <BackButton className="mb-8" />
        
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300">
            We're here to help with all your pest control needs. Contact us today for a free consultation.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Phone className="w-6 h-6" />,
              title: "Call Us",
              info: "1-800-PEST-CONTROL",
              subInfo: "24/7 Emergency Service"
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Us",
              info: "contact@grinnage.com",
              subInfo: "We'll respond within 24h"
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Business Hours",
              info: "Mon-Fri: 8am - 6pm",
              subInfo: "Sat: 9am - 2pm"
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Visit Us",
              info: "123 Pest Control St",
              subInfo: "City, State 12345"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mint-100 dark:bg-mint-900/30 text-mint-500 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-dark-900 dark:text-white font-medium">
                {item.info}
              </p>
              <p className="text-dark-600 dark:text-dark-400 text-sm">
                {item.subInfo}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info & Map Section */}
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-16 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-2">
                Emergency Pest Control
              </h3>
              <p className="text-red-700 dark:text-red-200">
                Available 24/7 for urgent pest control situations
              </p>
            </div>
            <a 
              href="tel:1-800-PEST-CONTROL"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};