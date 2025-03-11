
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import { Heart, Clock, Award, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { 
      icon: <Users className="h-8 w-8" />, 
      value: "10,000+", 
      label: "Patients Served" 
    },
    { 
      icon: <Award className="h-8 w-8" />, 
      value: "50+", 
      label: "Specialist Doctors" 
    },
    { 
      icon: <Clock className="h-8 w-8" />, 
      value: "24/7", 
      label: "Emergency Care" 
    },
    { 
      icon: <Heart className="h-8 w-8" />, 
      value: "15+", 
      label: "Years of Excellence" 
    }
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="pt-16 pb-20 bg-primary/5">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                    About HealthHub
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-balance">
                    Advancing Healthcare, Improving Lives
                  </h1>
                  <p className="text-muted-foreground text-lg mb-6">
                    At HealthHub, our mission is to provide exceptional healthcare services that improve the health and wellbeing of the communities we serve.
                  </p>
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden subtle-shadow"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                    alt="Hospital team" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                className="w-full lg:w-5/12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80" 
                      alt="Hospital building" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute top-1/2 -right-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-7/12"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <SectionHeading
                  title="Our Story"
                  subtitle="From humble beginnings to a center of healthcare excellence"
                />
                
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Founded in 2005, HealthHub began as a small clinic with a team of dedicated healthcare professionals committed to providing quality medical care to the local community. As our reputation for excellence grew, so did our facilities and capabilities.
                  </p>
                  <p>
                    Today, HealthHub stands as a comprehensive medical center equipped with state-of-the-art technology and staffed by top specialists across multiple disciplines. We've expanded our services while staying true to our founding mission: to deliver compassionate, patient-centered care that improves lives.
                  </p>
                  <p>
                    Throughout our journey, we've maintained our focus on innovation, constantly adopting the latest advancements in medical technology and treatment approaches. This commitment to staying at the forefront of healthcare has enabled us to provide our patients with the best possible outcomes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 text-center subtle-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mission & Values Section */}
        <section className="py-20">
          <div className="container px-6 mx-auto max-w-7xl">
            <SectionHeading
              title="Our Mission & Values"
              subtitle="The principles that guide us in providing exceptional healthcare"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
                <div className="prose text-muted-foreground">
                  <p>
                    Our mission at HealthHub is to enhance the health and wellbeing of the communities we serve through compassionate care, innovation, and education. We strive to:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li>Provide accessible, high-quality healthcare to all patients</li>
                    <li>Embrace innovation and continuously improve our services</li>
                    <li>Educate and empower individuals to take an active role in their health</li>
                    <li>Build meaningful relationships with our patients and community</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
                <div className="space-y-6">
                  {[
                    { 
                      title: "Excellence", 
                      description: "We commit to the highest standards in all aspects of patient care and organizational performance." 
                    },
                    { 
                      title: "Compassion", 
                      description: "We treat each patient with kindness, empathy, and respect, recognizing their individual needs and concerns." 
                    },
                    { 
                      title: "Innovation", 
                      description: "We embrace change and continuously seek new ways to improve healthcare delivery and patient outcomes." 
                    },
                    { 
                      title: "Integrity", 
                      description: "We uphold ethical standards and transparency in all our interactions and decision-making processes." 
                    }
                  ].map((value) => (
                    <div key={value.title}>
                      <h4 className="text-lg font-medium text-primary mb-1">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default About;
