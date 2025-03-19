
import React from 'react';
import Layout from '@/components/Layout';
import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const projectsData = [
  {
    title: "Retail Customer Analysis System",
    category: "Machine Learning",
    description: "Developed a machine learning system that analyzes customer behavior patterns to optimize inventory management and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1920&auto=format&fit=crop",
    client: "MegaShop Retail"
  },
  {
    title: "Healthcare Diagnostic Assistant",
    category: "Natural Language Processing",
    description: "Created an NLP-powered diagnostic assistant that helps doctors analyze patient records and research to recommend treatment options.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop",
    client: "MedCare Solutions"
  },
  {
    title: "Automated Quality Control System",
    category: "Computer Vision",
    description: "Implemented a computer vision system for manufacturing quality control that detects defects with 99.7% accuracy.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1920&auto=format&fit=crop",
    client: "PrecisionTech Industries"
  },
  {
    title: "Financial Fraud Detection",
    category: "AI Consulting",
    description: "Advised on the implementation of an AI system that reduced financial fraud by 83% through pattern detection and anomaly recognition.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1920&auto=format&fit=crop",
    client: "SecureBank Financial"
  },
  {
    title: "Customer Support Chatbot",
    category: "GPT Prompt Engineering",
    description: "Engineered custom prompts for a customer service chatbot that successfully handles 78% of inquiries without human intervention.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1920&auto=format&fit=crop",
    client: "TechSupport Co."
  },
  {
    title: "Logistics Optimization Platform",
    category: "Machine Learning",
    description: "Built a machine learning platform that optimizes delivery routes, reducing fuel costs by 27% and delivery times by 35%.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1920&auto=format&fit=crop",
    client: "FastShip Logistics"
  }
];

const Projects = () => {
  const heroBackground = useParallax({ speed: 0.5 });
  const projectsLayer = useParallax({ speed: 0.3, direction: 'up' });

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
              Our Projects
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-charcoal-700 dark:text-wheat-200 mb-8"
              variants={fadeInUp}
            >
              Explore our portfolio of successful AI implementations for clients across industries.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-wheat-100 dark:bg-charcoal-900 relative">
        <div ref={projectsLayer.ref} style={projectsLayer.style} className="absolute inset-0 z-0 opacity-50">
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {Array(40).fill(0).map((_, i) => (
              <div key={i} className="border-[0.5px] border-charcoal-200 dark:border-charcoal-800"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div 
                key={index}
                className="glass-card overflow-hidden rounded-xl reveal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-wheat-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-wheat-300 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-charcoal-800 dark:text-wheat-100">{project.title}</h3>
                  <p className="text-charcoal-600 dark:text-wheat-300 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-charcoal-500 dark:text-wheat-400">Client: {project.client}</span>
                    <button className="text-charcoal-800 dark:text-wheat-100 font-medium hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
