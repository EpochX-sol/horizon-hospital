
import React, { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchTestimonials } from '@/services/api';
import { Skeleton } from '@/components/ui/skeleton';

const TestimonialsSkeleton = () => (
  <div className="text-center">
    <div className="relative">
      <Skeleton className="h-32 w-full max-w-4xl mx-auto mb-8" />
      <div className="flex flex-col items-center">
        <Skeleton className="h-16 w-16 rounded-full mb-4" />
        <Skeleton className="h-6 w-40 mb-2" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayInterval, setAutoplayInterval] = useState<number | null>(null);

  const nextTestimonial = () => {
    if (!testimonials) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (!testimonials) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials?.length || 0)) % (testimonials?.length || 1));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials && testimonials.length > 1) {
      const interval = window.setInterval(nextTestimonial, 8000);
      setAutoplayInterval(interval);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      setAutoplayInterval(null);
    }
  };

  // Resume autoplay when mouse leaves
  const resumeAutoplay = () => {
    if (!autoplayInterval && testimonials && testimonials.length > 1) {
      const interval = window.setInterval(nextTestimonial, 8000);
      setAutoplayInterval(interval);
    }
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-6 mx-auto max-w-7xl">
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Hear from those who have experienced our care firsthand."
          center
        />
        
        <div className="max-w-4xl mx-auto" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
          {isLoading ? (
            <TestimonialsSkeleton />
          ) : error ? (
            <div className="text-center text-red-500">
              Failed to load testimonials. Please try again later.
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="relative">
              <div className="absolute -left-12 top-0 text-primary/20">
                <Quote className="h-24 w-24" />
              </div>
              
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-lg md:text-xl text-foreground italic mb-8 relative z-10 text-balance">
                      "{testimonials[currentIndex].content}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full overflow-hidden border-4 border-white subtle-shadow mb-4">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-foreground font-medium text-lg">{testimonials[currentIndex].author}</div>
                      <div className="text-primary text-sm">{testimonials[currentIndex].role}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {testimonials.length > 1 && (
                <div className="flex justify-center mt-10 space-x-4">
                  <button 
                    onClick={prevTestimonial}
                    className="h-10 w-10 rounded-full bg-white subtle-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="h-10 w-10 rounded-full bg-white subtle-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              No testimonials available at this time.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
