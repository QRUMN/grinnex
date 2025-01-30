import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
        Contact Information
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-mint-500 mt-1" />
          <div className="ml-4">
            <h3 className="font-semibold text-dark-900 dark:text-white">Phone</h3>
            <p className="text-dark-600 dark:text-dark-400">1-800-PEST-CONTROL</p>
            <p className="text-sm text-dark-500 dark:text-dark-500">
              24/7 Emergency Service Available
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-6 h-6 text-mint-500 mt-1" />
          <div className="ml-4">
            <h3 className="font-semibold text-dark-900 dark:text-white">Email</h3>
            <p className="text-dark-600 dark:text-dark-400">
              contact@grinnage.com
            </p>
            <p className="text-sm text-dark-500 dark:text-dark-500">
              We'll respond within 24 hours
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-mint-500 mt-1" />
          <div className="ml-4">
            <h3 className="font-semibold text-dark-900 dark:text-white">Address</h3>
            <p className="text-dark-600 dark:text-dark-400">
              123 Pest Control Street
            </p>
            <p className="text-dark-600 dark:text-dark-400">
              City, State 12345
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-6 h-6 text-mint-500 mt-1" />
          <div className="ml-4">
            <h3 className="font-semibold text-dark-900 dark:text-white">Hours</h3>
            <p className="text-dark-600 dark:text-dark-400">
              Monday - Friday: 8am - 6pm
            </p>
            <p className="text-dark-600 dark:text-dark-400">
              Saturday: 9am - 2pm
            </p>
            <p className="text-dark-600 dark:text-dark-400">
              Sunday: Closed (Emergency Service Available)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};