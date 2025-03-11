
import React from 'react';
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Microscope,  
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <motion.div 
      className="p-6 rounded-2xl bg-white subtle-shadow border border-border/50 hover:border-primary/20 transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-primary text-sm font-medium hover:underline"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Cardiology",
      description: "Comprehensive care for heart conditions with advanced diagnostic technologies and treatments."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Neurology",
      description: "Expert diagnosis and treatment for disorders of the nervous system, brain, and spinal cord."
    },
    {
      icon: <Bone className="h-6 w-6" />,
      title: "Orthopedics",
      description: "Specialized care for musculoskeletal issues, from sports injuries to joint replacements."
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Pediatrics",
      description: "Gentle and comprehensive healthcare for children, from newborns to adolescents."
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Radiology",
      description: "State-of-the-art imaging services including MRI, CT scans, and ultrasound diagnostics."
    },
    { 
      title: "Laboratory",
      description: "Quick and accurate diagnostic testing with our advanced medical laboratory."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-6 mx-auto max-w-7xl">
        <SectionHeading
          title="Our Medical Services"
          subtitle="We provide a wide range of medical services to meet your healthcare needs, all delivered with compassion and expertise."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <span>View all services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
