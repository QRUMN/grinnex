import React, { useState } from 'react';
import { AlertCircle, Phone, MessageSquare, X } from 'lucide-react';

export const EmergencyCallout = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertCircle className="w-6 h-6 mr-2" />
              <span className="font-medium">Emergency Pest Control - Available 24/7</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowChat(true)}
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span className="font-medium">Chat Now</span>
              </button>
              <a 
                href="tel:5551234567" 
                className="flex items-center bg-white text-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">(555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b dark:border-dark-700">
              <h2 className="text-lg font-semibold">Emergency Assistance</h2>
              <button 
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-96 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="bg-mint-50 dark:bg-mint-900/20 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Hello! I'm your emergency pest control assistant. Please describe your pest emergency and I'll help you right away.</p>
                </div>
                {/* Add chat messages here */}
              </div>
            </div>
            <div className="p-4 border-t dark:border-dark-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-mint-500"
                />
                <button className="px-4 py-2 bg-mint-500 text-white rounded-lg hover:bg-mint-600">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};