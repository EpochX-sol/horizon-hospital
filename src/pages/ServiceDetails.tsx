
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchServiceById } from '@/services/api';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: service, isLoading, error } = useQuery({
    queryKey: ['service', id],
    queryFn: () => fetchServiceById(id || ''),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container px-6 py-16 mx-auto max-w-7xl">
          <Skeleton className="h-12 w-3/4 md:w-1/2 mb-4" />
          <Skeleton className="h-6 w-full md:w-3/4 mb-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <Skeleton className="h-64 w-full rounded-2xl" />
            </div>
            <div className="space-y-6">
              <Skeleton className="h-8 w-40" />
              <Skeleton className="h-32 w-full" />
              
              <Skeleton className="h-8 w-40 mt-8" />
              <div className="space-y-3">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !service) {
    return (
      <Layout>
        <div className="container px-6 py-16 mx-auto max-w-7xl">
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">Service Not Found</h2>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find the service you're looking for.</p>
            <Link to="/services">
              <Button>Back to All Services</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-6 py-16 mx-auto max-w-7xl">
          <div className="mb-10">
            <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Services
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="rounded-2xl overflow-hidden subtle-shadow">
                <img 
                  src={service.imageUrl || 'https://via.placeholder.com/800x600?text=Service+Image'} 
                  alt={service.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground">{service.fullDescription}</p>
              </div>
              
              {service.benefits && service.benefits.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="pt-6">
                <Button className="gap-2">
                  <span>Book an Appointment</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ServiceDetails;
