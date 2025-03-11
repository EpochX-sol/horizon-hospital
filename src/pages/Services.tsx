
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '@/services/api';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Microscope, 
  ArrowRight,
  Activity,
  Stethoscope
} from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      case 'Stethoscope':
        return <Stethoscope className="h-6 w-6" />;
      case 'Activity':
        return <Activity className="h-6 w-6" />;
      default:
        return <Heart className="h-6 w-6" />;
    }
  };

  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-secondary/50">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive healthcare services tailored to meet your medical needs with expertise and compassion.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container px-6 mx-auto max-w-7xl">
            <SectionHeading
              title="Medical Services We Offer"
              subtitle="We provide a wide range of medical services to address various healthcare needs"
              center
            />

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white subtle-shadow border border-border/50">
                    <Skeleton className="h-12 w-12 rounded-xl mb-5" />
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-red-500">Failed to load services. Please try again later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {services?.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="p-6 rounded-2xl bg-white subtle-shadow border border-border/50 hover:border-primary/20 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {getIconByName(service.icon)}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Additional Service Information */}
        <section className="py-16 bg-secondary/50">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-semibold mb-4">
                  Personalized Healthcare Journey
                </h2>
                <p className="text-muted-foreground mb-6">
                  At HealthHub, we believe in a personalized approach to healthcare. Our team of specialists works 
                  together to create tailored treatment plans for each patient, taking into account individual 
                  health profiles, needs, and preferences.
                </p>
                <ul className="space-y-4">
                  {[
                    "Initial consultation and thorough assessment",
                    "Personalized treatment plan development",
                    "Ongoing monitoring and plan adjustments",
                    "Preventive care and health maintenance",
                    "Comprehensive follow-up protocols"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                className="rounded-2xl overflow-hidden subtle-shadow"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581056771107-24247a734e15?q=80&w=2070&auto=format&fit=crop" 
                  alt="Healthcare Journey" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default ServicesPage;
