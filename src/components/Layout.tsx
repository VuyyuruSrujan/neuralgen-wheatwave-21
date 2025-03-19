
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { observeElements } from "@/utils/animations";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check for user preference
    const darkModePreference = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkModePreference);
    
    // Apply dark mode class to document
    if (darkModePreference) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Initialize reveal animations
    const observer = observeElements();

    // Track scroll position for header styling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-wheat-50 dark:bg-charcoal-950 transition-colors duration-300">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled 
            ? 'bg-wheat-50/80 dark:bg-charcoal-950/80 backdrop-blur-lg shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-charcoal-800 to-charcoal-600 dark:from-wheat-300 dark:to-wheat-500 flex items-center justify-center">
              <span className="text-wheat-50 dark:text-charcoal-800 font-bold text-lg">N</span>
            </div>
            <span className="text-charcoal-800 dark:text-wheat-100 font-bold text-xl">NeuralGen AI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-charcoal-700 dark:text-wheat-200 hover:text-charcoal-900 dark:hover:text-wheat-100 transition-colors">Home</a>
            <a href="#services" className="text-charcoal-700 dark:text-wheat-200 hover:text-charcoal-900 dark:hover:text-wheat-100 transition-colors">Services</a>
            <a href="#about" className="text-charcoal-700 dark:text-wheat-200 hover:text-charcoal-900 dark:hover:text-wheat-100 transition-colors">About</a>
            <a href="#testimonials" className="text-charcoal-700 dark:text-wheat-200 hover:text-charcoal-900 dark:hover:text-wheat-100 transition-colors">Testimonials</a>
            <a href="#contact" className="text-charcoal-700 dark:text-wheat-200 hover:text-charcoal-900 dark:hover:text-wheat-100 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-wheat-200 dark:bg-charcoal-800 text-charcoal-800 dark:text-wheat-200 hover:bg-wheat-300 dark:hover:bg-charcoal-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button className="hidden md:block button-primary">
              Get Started
            </button>
            
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-charcoal-800 dark:bg-wheat-200 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-charcoal-800 dark:bg-wheat-200 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-charcoal-800 dark:bg-wheat-200"></div>
            </button>
          </div>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="bg-wheat-100 dark:bg-charcoal-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-charcoal-800 to-charcoal-600 dark:from-wheat-300 dark:to-wheat-500 flex items-center justify-center">
                  <span className="text-wheat-50 dark:text-charcoal-800 font-bold text-lg">N</span>
                </div>
                <span className="text-charcoal-800 dark:text-wheat-100 font-bold text-xl">NeuralGen AI</span>
              </div>
              <p className="text-charcoal-600 dark:text-wheat-300 mt-2">
                Transforming businesses with cutting-edge AI solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-charcoal-800 dark:text-wheat-100">Services</h3>
              <ul className="space-y-2 text-charcoal-600 dark:text-wheat-300">
                <li>GPT Prompt Engineering</li>
                <li>Machine Learning Solutions</li>
                <li>AI Consulting</li>
                <li>Natural Language Processing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-charcoal-800 dark:text-wheat-100">Company</h3>
              <ul className="space-y-2 text-charcoal-600 dark:text-wheat-300">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-charcoal-800 dark:text-wheat-100">Connect</h3>
              <ul className="space-y-2 text-charcoal-600 dark:text-wheat-300">
                <li>Email: info@neuralgen.ai</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 AI Street, Tech Valley</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-wheat-200 dark:border-charcoal-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-charcoal-600 dark:text-wheat-300">
              &copy; 2023 NeuralGen AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-charcoal-600 dark:text-wheat-300 hover:text-charcoal-800 dark:hover:text-wheat-100">Privacy Policy</a>
              <a href="#" className="text-charcoal-600 dark:text-wheat-300 hover:text-charcoal-800 dark:hover:text-wheat-100">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
