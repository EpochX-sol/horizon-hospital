
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { useQuery } from '@tanstack/react-query';
import { fetchDoctors } from '@/services/api';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const DoctorsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: doctors, isLoading, error } = useQuery({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
  });

  const specialties = doctors 
    ? ['All', ...Array.from(new Set(doctors.map(doctor => doctor.specialty)))]
    : ['All'];

  const filteredDoctors = doctors?.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
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
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Doctors</h1>
              <p className="text-xl text-muted-foreground">
                Meet our team of highly skilled medical professionals dedicated to providing exceptional care.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search doctors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <Button
                    key={specialty}
                    variant={selectedSpecialty === specialty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSpecialty(specialty)}
                  >
                    {specialty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-16">
          <div className="container px-6 mx-auto max-w-7xl">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Skeleton className="h-[320px] w-full rounded-2xl" />
                    <Skeleton className="h-6 w-32 mt-4" />
                    <Skeleton className="h-4 w-24 mt-2" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-red-500">Failed to load doctors. Please try again later.</p>
              </div>
            ) : filteredDoctors && filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredDoctors.map((doctor, index) => (
                  <motion.div 
                    key={doctor.id}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden rounded-2xl subtle-shadow bg-white">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name} 
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
                          
                          <Link to={`/doctors/${doctor.id}`} className="block text-center">
                            <Button className="w-full" size="sm">View Profile</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <h3 className="font-semibold text-lg">{doctor.name}</h3>
                      <p className="text-primary text-sm">{doctor.specialty}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No doctors found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 bg-primary/5">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-semibold mb-4">
                  Join Our Medical Team
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented and compassionate healthcare professionals to join our team. 
                  If you're dedicated to providing exceptional patient care and want to work in a supportive 
                  environment, we'd love to hear from you.
                </p>
                <Button size="lg">View Career Opportunities</Button>
              </motion.div>
              
              <motion.div
                className="rounded-2xl overflow-hidden subtle-shadow"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" 
                  alt="Medical Team" 
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

export default DoctorsPage;
