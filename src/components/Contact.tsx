import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918309354912?text=${whatsappMessage}`, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Get in Touch</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
        Have a project in mind? Let's talk about how I can help
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Email</p>
                <a 
                  href="mailto:d.gireesh21@gmail.com" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  d.gireesh21@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Phone</p>
                <a 
                  href="tel:+918309354912" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +91 8309354912
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Location</p>
                <p className="text-slate-600 dark:text-slate-400">Hyderabad, India</p>
              </div>
            </div>
          </div>
          
          <hr className="my-8 border-slate-200 dark:border-slate-700" />
          
          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Working Hours</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-slate-600 dark:text-slate-400">Weekend: Available for urgent matters</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Send size={18} className="mr-2" />
              Send Message on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;