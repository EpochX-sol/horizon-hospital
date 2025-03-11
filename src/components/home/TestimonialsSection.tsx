
import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "The care and attention I received at HealthHub was exceptional. The doctors took the time to listen to my concerns and develop a treatment plan specifically for me.",
      author: "Jennifer Adams",
      role: "Cardiac Patient",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
      id: 2,
      content: "After my surgery, the rehabilitation program was incredibly thorough. The staff's expertise and encouragement helped me recover much faster than expected.",
      author: "David Martinez",
      role: "Orthopedic Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      content: "The pediatric team made my daughter feel so comfortable during her treatments. Their child-friendly approach turned what could have been a scary experience into a positive one.",
      author: "Rachel Thompson",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    },
    {
      id: 4,
      content: "I've been coming to HealthHub for years now. The consistent quality of care and the way they stay on top of the latest medical advances is truly impressive.",
      author: "Michael Johnson",
      role: "Long-term Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-6 mx-auto max-w-7xl">
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Hear from those who have experienced our care firsthand."
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-12 top-0 text-primary/20">
              <Quote className="h-24 w-24" />
            </div>
            
            <div className="relative overflow-hidden">
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
            </div>
            
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
