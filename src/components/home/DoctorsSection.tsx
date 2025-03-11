
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchDoctors } from '@/services/api';
import { Skeleton } from '@/components/ui/skeleton';

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  id: string;
  index: number;
}

const DoctorCard = ({ image, name, specialty, id, index }: DoctorCardProps) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl subtle-shadow bg-white">
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-6 w-full">
            <div className="flex justify-center space-x-3 mb-4">
              <a href="#" className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            
            <Link to={`/doctors/${id}`} className="block text-center">
              <Button className="w-full" size="sm">View Profile</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-primary text-sm">{specialty}</p>
      </div>
    </motion.div>
  );
};

const DoctorsSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="flex flex-col items-center">
          <Skeleton className="h-[320px] w-full rounded-2xl" />
          <Skeleton className="h-6 w-32 mt-4" />
          <Skeleton className="h-4 w-24 mt-2" />
        </div>
      ))}
    </>
  );
};

const DoctorsSection = () => {
  const { data: doctors, isLoading, error } = useQuery({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
  });

  return (
    <section className="py-20">
      <div className="container px-6 mx-auto max-w-7xl">
        <SectionHeading
          title="Meet Our Specialists"
          subtitle="Our team of highly skilled medical professionals is dedicated to providing exceptional care."
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            <DoctorsSkeleton />
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Failed to load doctors. Please try again later.
            </div>
          ) : (
            doctors?.map((doctor, index) => (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                image={doctor.image}
                name={doctor.name}
                specialty={doctor.specialty}
                index={index}
              />
            ))
          )}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/doctors">
            <Button variant="outline" size="lg">View All Doctors</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
