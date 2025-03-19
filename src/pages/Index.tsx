
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Index = () => {
  const heroBackground = useParallax({ speed: 0.5 });
  const servicesLayer = useParallax({ speed: 0.3, direction: 'up' });

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center">
        <div ref={heroBackground.ref} style={heroBackground.style} className="absolute inset-0 z-0">
          <div className="bg-gradient-to-b from-wheat-100 to-wheat-200 dark:from-charcoal-900 dark:to-charcoal-950 h-full w-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-charcoal-800 dark:text-wheat-100 leading-tight"
              variants={fadeInUp}
            >
              Transforming Business <br />
              <span className="text-gradient">Through AI</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-charcoal-700 dark:text-wheat-200 mb-8"
              variants={fadeInUp}
            >
              We build cutting-edge AI solutions that drive innovation and enhance your business operations.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <button className="button-primary mr-4">
                Our Services
              </button>
              <button className="px-6 py-3 bg-wheat-200 dark:bg-charcoal-700 text-charcoal-800 dark:text-wheat-100 rounded-lg hover:bg-wheat-300 dark:hover:bg-charcoal-600 transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-charcoal-600 dark:text-wheat-300 mb-2">Scroll to explore</p>
          <div className="w-0.5 h-12 bg-charcoal-400 dark:bg-wheat-400 animate-pulse"></div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-wheat-100 dark:bg-charcoal-900 relative">
        <div ref={servicesLayer.ref} style={servicesLayer.style} className="absolute inset-0 z-0 opacity-50">
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {Array(40).fill(0).map((_, i) => (
              <div key={i} className="border-[0.5px] border-charcoal-200 dark:border-charcoal-800"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading text-charcoal-800 dark:text-wheat-100">Our Services</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We offer a range of AI solutions to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "GPT Prompt Engineering",
                description: "We design and optimize prompts to get the most out of large language models.",
                icon: "💬"
              },
              {
                title: "Machine Learning Solutions",
                description: "Custom ML models tailored to your specific business challenges.",
                icon: "🧠"
              },
              {
                title: "AI Consulting",
                description: "Strategic guidance on implementing AI in your organization.",
                icon: "📊"
              },
              {
                title: "Natural Language Processing",
                description: "Extract insights from text data with our advanced NLP solutions.",
                icon: "📝"
              },
              {
                title: "Computer Vision",
                description: "Image and video analysis for automation and intelligence.",
                icon: "👁️"
              },
              {
                title: "AI Integration",
                description: "Seamlessly integrate AI into your existing systems and workflows.",
                icon: "🔄"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-8 reveal"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-charcoal-800 dark:text-wheat-100">{service.title}</h3>
                <p className="text-charcoal-600 dark:text-wheat-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-wheat-50 dark:bg-charcoal-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-heading text-charcoal-800 dark:text-wheat-100 mb-6">
                About NeuralGen AI
              </h2>
              <p className="text-lg text-charcoal-600 dark:text-wheat-300 mb-6">
                We are a team of AI enthusiasts, data scientists, and software engineers passionate about harnessing the power of artificial intelligence to solve real-world problems.
              </p>
              <p className="text-lg text-charcoal-600 dark:text-wheat-300 mb-8">
                Founded in 2020, we've helped businesses across industries implement AI solutions that drive growth, improve efficiency, and create new opportunities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-charcoal-800 dark:text-wheat-100">200+</h3>
                  <p className="text-charcoal-600 dark:text-wheat-300">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-charcoal-800 dark:text-wheat-100">50+</h3>
                  <p className="text-charcoal-600 dark:text-wheat-300">Enterprise Clients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-charcoal-800 dark:text-wheat-100">98%</h3>
                  <p className="text-charcoal-600 dark:text-wheat-300">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-charcoal-800 dark:text-wheat-100">24/7</h3>
                  <p className="text-charcoal-600 dark:text-wheat-300">Support Available</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden reveal">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 to-charcoal-600 dark:from-wheat-300 dark:to-wheat-500 rounded-2xl transform rotate-3 animate-float"></div>
                <div className="absolute inset-0 bg-wheat-50 dark:bg-charcoal-950 rounded-2xl transform -rotate-3 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-6">🧠</div>
                    <h3 className="text-2xl font-bold mb-3 text-charcoal-800 dark:text-wheat-100">AI Innovation Hub</h3>
                    <p className="text-charcoal-600 dark:text-wheat-300">Our team works at the cutting edge of AI research and application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-wheat-100 dark:bg-charcoal-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading text-charcoal-800 dark:text-wheat-100">Get In Touch</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Have a project in mind or want to learn more about our services? Contact us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="glass-card p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 dark:text-wheat-200 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-wheat-50 dark:bg-charcoal-800 border border-wheat-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-charcoal-800 dark:focus:ring-wheat-300 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 dark:text-wheat-200 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-wheat-50 dark:bg-charcoal-800 border border-wheat-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-charcoal-800 dark:focus:ring-wheat-300 focus:border-transparent"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 dark:text-wheat-200 mb-1">Subject</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-wheat-50 dark:bg-charcoal-800 border border-wheat-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-charcoal-800 dark:focus:ring-wheat-300 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 dark:text-wheat-200 mb-1">Message</label>
                  <textarea 
                    className="w-full p-3 bg-wheat-50 dark:bg-charcoal-800 border border-wheat-300 dark:border-charcoal-700 rounded-lg focus:ring-2 focus:ring-charcoal-800 dark:focus:ring-wheat-300 focus:border-transparent h-40"
                    placeholder="Tell us about your project or inquiry"
                  ></textarea>
                </div>
                <button type="submit" className="button-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="glass-card p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-charcoal-800 dark:text-wheat-100">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-wheat-200 dark:bg-charcoal-800 flex items-center justify-center">
                      <span className="text-charcoal-800 dark:text-wheat-100">📍</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-charcoal-800 dark:text-wheat-100 font-medium">Address</p>
                      <p className="text-charcoal-600 dark:text-wheat-300">123 AI Street, Tech Valley, CA 94103</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-wheat-200 dark:bg-charcoal-800 flex items-center justify-center">
                      <span className="text-charcoal-800 dark:text-wheat-100">📱</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-charcoal-800 dark:text-wheat-100 font-medium">Phone</p>
                      <p className="text-charcoal-600 dark:text-wheat-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-wheat-200 dark:bg-charcoal-800 flex items-center justify-center">
                      <span className="text-charcoal-800 dark:text-wheat-100">✉️</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-charcoal-800 dark:text-wheat-100 font-medium">Email</p>
                      <p className="text-charcoal-600 dark:text-wheat-300">info@neuralgen.ai</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-4 text-charcoal-800 dark:text-wheat-100">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-charcoal-600 dark:text-wheat-300">Monday - Friday</span>
                    <span className="text-charcoal-800 dark:text-wheat-100 font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-charcoal-600 dark:text-wheat-300">Saturday</span>
                    <span className="text-charcoal-800 dark:text-wheat-100 font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-charcoal-600 dark:text-wheat-300">Sunday</span>
                    <span className="text-charcoal-800 dark:text-wheat-100 font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
