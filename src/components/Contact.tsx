import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Clock, Linkedin, Github, ExternalLink, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate sending message
    setTimeout(() => {
      const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
      window.open(`https://wa.me/918309354912?text=${whatsappMessage}`, '_blank');
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('success');

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Email',
      value: 'd.gireesh21@gmail.com',
      link: 'mailto:d.gireesh21@gmail.com',
      delay: 100
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />,
      title: 'Phone',
      value: '+91 8309354912',
      link: 'tel:+918309354912',
      delay: 200
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: 'Location',
      value: 'Bangalore, India',
      link: null,
      delay: 300
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: 'Working Days',
      value: 'Monday - Friday',
      link: null,
      delay: 400
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      title: 'Working Hours',
      value: '9:00 AM - 6:00 PM',
      link: null,
      delay: 500
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/immrdg',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/40'
    },
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/immrdg/',
      color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
    },
    {
      icon: <ExternalLink size={20} />,
      name: 'Resume',
      url: './Resume-Dg.pdf',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800/40'
    }
  ];

  return (
    <section id="contact" className="py-16 relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -mt-10 -ml-10 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-3000"></div>

      <div className="relative z-10">
        <div className="inline-block px-4 py-1 mb-4 bg-green-100 dark:bg-green-900/30 rounded-full text-green-800 dark:text-green-300 font-medium text-sm">
          <span className="animate-pulse">📬</span> Let's Connect
        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Get in Touch</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl">
          Have a project in mind? Let's talk about how I can help you build resilient and scalable infrastructure.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact information */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 sm:p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 sm:mb-6 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </span>
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start transition-all duration-500 delay-${method.delay} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  >
                    <div className="bg-slate-100 dark:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center mt-1 mr-3 sm:mr-4 shadow-sm">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-medium text-slate-700 dark:text-slate-300">{method.title}</p>
                      {method.link ? (
                        <a 
                          href={method.link} 
                          className="text-sm sm:text-base text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-3 py-2.5 sm:py-2 rounded-lg text-sm font-medium transition-all duration-300 ${link.color}`}
                      aria-label={link.name}
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map or image */}
            <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img 
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="Bangalore" 
                className="w-full h-40 sm:h-48 object-cover"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className={`lg:col-span-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm p-5 sm:p-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
              <span className="bg-green-100 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <Send className="w-4 h-4 text-green-600 dark:text-green-400" />
              </span>
              Send a Message
            </h3>

            {formStatus === 'success' ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Message Sent Successfully!</h4>
                <p className="text-green-700 dark:text-green-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 text-base"
                      placeholder="John Doe"
                      disabled={formStatus === 'sending'}
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 text-base"
                      placeholder="john@example.com"
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 text-base"
                    placeholder="Hello, I'm interested in working with you on..."
                    disabled={formStatus === 'sending'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`flex items-center justify-center w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-6 ${
                    formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      <span className="sm:inline">Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                  By submitting this form, your message will be sent to my WhatsApp. I'll respond as soon as possible.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
