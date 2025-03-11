
import React from 'react';
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Microscope, 
  Flask, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '@/services/api';
import { Skeleton } from '@/components/ui/skeleton';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, id, delay }: ServiceCardProps) => {
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
        to={`/services/${id}`}
        className="inline-flex items-center text-primary text-sm font-medium hover:underline"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  );
};

const ServicesSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className="p-6 rounded-2xl bg-white subtle-shadow border border-border/50">
          <Skeleton className="h-12 w-12 rounded-xl mb-5" />
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-16 w-full mb-4" />
          <Skeleton className="h-4 w-32" />
        </div>
      ))}
    </>
  );
};

// Helper function to get icon based on string name
const getIconByName = (iconName: string) => {
  switch (iconName) {
    case 'Heart':
      return <Heart className="h-6 w-6" />;
    case 'Brain':
      return <Brain className="h-6 w-6" />;
    case 'Bone':
      return <Bone className="h-6 w-6" />;
    case 'Baby':
      return <Baby className="h-6 w-6" />;
    case 'Microscope':
      return <Microscope className="h-6 w-6" />;
    case 'Flask':
      return <Flask className="h-6 w-6" />;
    default:
      return <Heart className="h-6 w-6" />;
  }
};

const ServicesSection = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-6 mx-auto max-w-7xl">
        <SectionHeading
          title="Our Medical Services"
          subtitle="We provide a wide range of medical services to meet your healthcare needs, all delivered with compassion and expertise."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <ServicesSkeleton />
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Failed to load services. Please try again later.
            </div>
          ) : (
            services?.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={getIconByName(service.icon)}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))
          )}
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
