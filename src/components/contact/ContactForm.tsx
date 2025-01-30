import React from 'react';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:ring-2 focus:ring-mint-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:ring-2 focus:ring-mint-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:ring-2 focus:ring-mint-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
          Phone
        </label>
        <input
          type="tel"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:ring-2 focus:ring-mint-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
          Service Type
        </label>
        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:ring-2 focus:ring-mint-500 focus:border-transparent">
          <option value="">Select a service...</option>
          <option value="residential">Residential Pest Control</option>
          <option value="commercial">Commercial Pest Control</option>
          <option value="emergency">Emergency Service</option>
          <option value="inspection">Free Inspection</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:ring-2 focus:ring-mint-500 focus:border-transparent"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-6 py-3 bg-mint-500 hover:bg-mint-600 text-white rounded-lg transition-colors"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </button>
    </form>
  );
};