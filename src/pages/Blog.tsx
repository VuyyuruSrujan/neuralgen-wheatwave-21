
import React from 'react';
import Layout from '@/components/Layout';
import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const blogPosts = [
  {
    title: "The Future of GPT Technology in Business Applications",
    excerpt: "Explore how GPT-4 and beyond will transform business operations across industries and create new opportunities for innovation.",
    date: "May 15, 2023",
    author: "Dr. Emily Zhang",
    authorRole: "Chief AI Scientist",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1920&auto=format&fit=crop",
    readTime: "8 min read"
  },
  {
    title: "Ethical Considerations in AI Development",
    excerpt: "A deep dive into the ethical challenges facing AI developers and how to approach building responsible AI systems.",
    date: "April 22, 2023",
    author: "Marcus Johnson",
    authorRole: "Ethics Lead",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1920&auto=format&fit=crop",
    readTime: "12 min read"
  },
  {
    title: "Computer Vision: Beyond Object Detection",
    excerpt: "How advanced computer vision techniques are enabling new applications from healthcare diagnostics to autonomous systems.",
    date: "March 10, 2023",
    author: "Dr. Alex Rivera",
    authorRole: "CV Research Lead",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1563770660941-10e1487e3151?q=80&w=1920&auto=format&fit=crop",
    readTime: "10 min read"
  },
  {
    title: "Building Effective Prompt Engineering Strategies",
    excerpt: "Learn practical techniques to design prompts that get the best results from large language models in production environments.",
    date: "February 28, 2023",
    author: "Sophia Chen",
    authorRole: "Prompt Engineer",
    category: "Prompt Engineering",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1920&auto=format&fit=crop",
    readTime: "6 min read"
  },
  {
    title: "Machine Learning Ops: From Prototype to Production",
    excerpt: "Best practices for deploying and maintaining machine learning models in production with reliable, scalable infrastructure.",
    date: "January 17, 2023",
    author: "Thomas Wilson",
    authorRole: "ML Ops Engineer",
    category: "MLOps",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
    readTime: "9 min read"
  },
  {
    title: "The Business Case for AI Investment",
    excerpt: "How to evaluate AI initiatives, measure ROI, and make compelling cases for AI investment to stakeholders.",
    date: "December 5, 2022",
    author: "Olivia Martinez",
    authorRole: "Business Strategy Director",
    category: "Business",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1920&auto=format&fit=crop",
    readTime: "7 min read"
  }
];

const Blog = () => {
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
              AI Insights Blog
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-charcoal-700 dark:text-wheat-200 mb-8"
              variants={fadeInUp}
            >
              Cutting-edge research, industry trends, and practical AI implementations from our expert team.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="py-20 bg-wheat-50 dark:bg-charcoal-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index} 
                className="glass-card overflow-hidden rounded-xl reveal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-charcoal-500 dark:text-wheat-400">{post.date}</span>
                    <span className="inline-block px-3 py-1 bg-wheat-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-wheat-300 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal-800 dark:text-wheat-100 hover:text-charcoal-600 dark:hover:text-wheat-300 transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-charcoal-600 dark:text-wheat-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-wheat-300 dark:bg-charcoal-700 flex items-center justify-center text-charcoal-800 dark:text-wheat-100">
                        {post.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-charcoal-800 dark:text-wheat-100">{post.author}</h4>
                        <p className="text-xs text-charcoal-500 dark:text-wheat-400">{post.authorRole}</p>
                      </div>
                    </div>
                    <span className="text-xs text-charcoal-500 dark:text-wheat-400">{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <button className="button-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
