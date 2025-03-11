
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-transparent pt-10 pb-16 sm:pb-24 md:pt-20">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-10 pb-10 md:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Leading Healthcare Provider
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-xl text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Modern Healthcare for a Better Life
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience the perfect blend of cutting-edge technology and compassionate care. Your health is our priority.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="gap-2">
                <Calendar className="h-5 w-5" /> 
                            <Link to="/appointments">  
                                <span>Book Appointment</span> 
                            </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                 <Link 
                        to={`/services`}
                        className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                      >
                        Learn more  
                      </Link>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+20}`} 
                      alt="Patient" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium">Trusted by 10,000+ patients</div>
                <div className="text-xs text-muted-foreground">Read their stories <ArrowRight className="inline h-3 w-3" /></div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80" 
                  alt="Healthcare professional" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                <div className="glass-card rounded-xl p-4 backdrop-blur-md max-w-[220px]">
                  <div className="text-xs text-primary font-medium mb-1">Featured Service</div>
                  <div className="text-sm font-medium">Advanced Cardiac Care</div>
                  <div className="text-xs text-muted-foreground mt-1">State-of-the-art diagnosis & treatment</div>
                </div>
                
                <div className="glass-card rounded-xl flex items-center px-4 h-12">
                  <span className="text-sm font-medium text-primary">Emergency? Call 911</span>
                </div>
              </div>
            </motion.div>
            
            <div className="absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 -left-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
