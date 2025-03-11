
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchDoctorById } from '@/services/api';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Bookmark, Star, GraduationCap, Languages, Calendar as CalendarIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DoctorDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: doctor, isLoading, error } = useQuery({
    queryKey: ['doctor', id],
    queryFn: () => fetchDoctorById(id || ''),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container px-6 py-16 mx-auto max-w-7xl">
          <div className="mb-10">
            <Skeleton className="h-10 w-40 mb-6" />
            <Skeleton className="h-12 w-3/4 mb-2" />
            <Skeleton className="h-6 w-40 mb-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <Skeleton className="h-96 w-full rounded-2xl mb-6" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <Skeleton className="h-12 w-full mb-4" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !doctor) {
    return (
      <Layout>
        <div className="container px-6 py-16 mx-auto max-w-7xl">
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">Doctor Not Found</h2>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find the doctor you're looking for.</p>
            <Link to="/doctors">
              <Button>Browse All Doctors</Button>
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
            <Link to="/doctors" className="inline-flex items-center text-primary hover:underline mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to All Doctors
            </Link>
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-2">{doctor.name}</h1>
            <p className="text-lg text-primary">{doctor.specialty}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="rounded-2xl overflow-hidden subtle-shadow mb-6">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <Button className="w-full mb-6 gap-2">
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </Button>
              
              <div className="bg-white rounded-2xl p-5 subtle-shadow border border-border/50">
                <h3 className="font-medium mb-4 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>Availability</span>
                </h3>
                
                {doctor.availability ? (
                  <ul className="space-y-2 text-sm">
                    {doctor.availability.map((slot, index) => (
                      <li key={index} className="pb-2 border-b border-border/30 last:border-none">
                        {slot}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Please call our office for availability.
                  </p>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2"
            >
              <Tabs defaultValue="about" className="space-y-6">
                <TabsList className="w-full justify-start border-b rounded-none px-0 h-auto pb-0">
                  <TabsTrigger 
                    value="about"
                    className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger 
                    value="education"
                    className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    Education & Experience
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="pt-4">
                  <div className="flex items-center mb-6">
                    {doctor.ratings && (
                      <div className="flex items-center mr-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < Math.floor(doctor.ratings) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">{doctor.ratings.toFixed(1)}</span>
                      </div>
                    )}
                    
                    {doctor.experience && (
                      <div className="text-muted-foreground text-sm border-l border-border/50 pl-4">
                        {doctor.experience} years of experience
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Biography</h2>
                    <p className="text-muted-foreground">{doctor.bio}</p>
                  </div>
                  
                  {doctor.languages && doctor.languages.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        <Languages className="h-4 w-4 mr-2 text-primary" />
                        <span>Languages</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((language, index) => (
                          <span key={index} className="px-3 py-1 bg-secondary/40 rounded-full text-sm">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="education" className="pt-4">
                  {doctor.education && doctor.education.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                        <span>Education</span>
                      </h3>
                      <ul className="space-y-4">
                        {doctor.education.map((edu, index) => (
                          <li key={index} className="flex items-start pb-4 border-b border-border/30 last:border-none">
                            <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <p>{edu}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {doctor.experience && (
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                        <span>Experience</span>
                      </h3>
                      <p className="text-muted-foreground">
                        {doctor.name} has {doctor.experience} years of clinical experience in {doctor.specialty.toLowerCase()}, 
                        treating patients with various conditions and contributing to medical research and advancements in the field.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default DoctorDetails;
