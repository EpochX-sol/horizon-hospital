
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  index: number;
}

const DoctorCard = ({ image, name, specialty, index }: DoctorCardProps) => {
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
            
            <Link to={`/doctors/${name.toLowerCase().replace(/\s+/g, '-')}`} className="block text-center">
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

const DoctorsSection = () => {
  const doctors = [
    {
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist"
    },
    {
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      name: "Dr. Michael Chen",
      specialty: "Neurologist"
    },
    {
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician"
    },
    {
      image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon"
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-6 mx-auto max-w-7xl">
        <SectionHeading
          title="Meet Our Specialists"
          subtitle="Our team of highly skilled medical professionals is dedicated to providing exceptional care."
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={doctor.name}
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              index={index}
            />
          ))}
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
