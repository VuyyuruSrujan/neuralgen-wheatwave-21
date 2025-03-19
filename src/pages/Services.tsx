
import React from 'react';
import Layout from '@/components/Layout';
import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const servicesData = [
  {
    title: "GPT Prompt Engineering",
    description: "Our GPT prompt engineering service helps businesses leverage the power of large language models through carefully crafted prompts that generate the most accurate and useful outputs.",
    icon: "💬",
    features: [
      "Custom prompt development for specific business use cases",
      "Optimization of existing prompts for better performance",
      "Integration with business systems and workflows",
      "Training and knowledge transfer for your team"
    ],
    image: "https://images.unsplash.com/photo-1677442135148-1445743a7456?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Machine Learning Solutions",
    description: "We develop custom machine learning models tailored to your specific business challenges, from predictive analytics to recommendation systems.",
    icon: "🧠",
    features: [
      "Data preparation and feature engineering",
      "Custom model development and training",
      "Model deployment and monitoring",
      "Continuous improvement and retraining"
    ],
    image: "https://images.unsplash.com/photo-1501526029524-a8ea952b15be?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "AI Consulting",
    description: "Our strategic AI consulting services help you identify opportunities for AI implementation in your business and develop a roadmap for success.",
    icon: "📊",
    features: [
      "AI opportunity assessment",
      "Strategic planning and roadmapping",
      "Technology selection and vendor evaluation",
      "Implementation oversight and quality assurance"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Natural Language Processing",
    description: "Extract insights from text data with our advanced NLP solutions, including sentiment analysis, entity recognition, and topic modeling.",
    icon: "📝",
    features: [
      "Text classification and categorization",
      "Named entity recognition",
      "Sentiment analysis and opinion mining",
      "Custom language models for specialized domains"
    ],
    image: "https://images.unsplash.com/photo-1564631027894-5bc55fce7869?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Computer Vision",
    description: "Our computer vision solutions enable machines to interpret and understand visual information from the world, powering applications from quality control to autonomous vehicles.",
    icon: "👁️",
    features: [
      "Object detection and recognition",
      "Image segmentation and analysis",
      "Video analytics and surveillance",
      "Optical character recognition (OCR)"
    ],
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "AI Integration",
    description: "We help you seamlessly integrate AI capabilities into your existing systems and workflows, ensuring smooth adoption and maximum value.",
    icon: "🔄",
    features: [
      "API development and integration",
      "Legacy system compatibility",
      "Cloud and on-premise deployment",
      "Performance optimization and scaling"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop"
  }
];

const Services = () => {
  const heroBackground = useParallax({ speed: 0.5 });
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
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
              className="text-5xl md:text-7xl font-bold mb-6 text-charcoal-800 dark:text-wheat-100"
              variants={fadeInUp}
            >
              Our Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-charcoal-700 dark:text-wheat-200 mb-8"
              variants={fadeInUp}
            >
              Comprehensive AI solutions designed to transform your business operations and drive innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Detailed Services Section */}
      <section className="py-20 bg-wheat-50 dark:bg-charcoal-950">
        <div className="container mx-auto px-6">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-32 reveal`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-wheat-300 to-wheat-400 dark:from-charcoal-700 dark:to-charcoal-600 rounded-xl opacity-75 blur-xl"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="relative rounded-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4 text-charcoal-800 dark:text-wheat-100">{service.title}</h2>
                <p className="text-lg text-charcoal-600 dark:text-wheat-300 mb-6">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-4 text-charcoal-800 dark:text-wheat-100">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <span className="text-charcoal-800 dark:text-wheat-100 mr-2">✓</span>
                      <span className="text-charcoal-600 dark:text-wheat-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-8 button-primary">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
