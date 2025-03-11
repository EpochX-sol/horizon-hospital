
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { Clock, Award, Users, Building2, CheckCircle } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About HealthHub</h1>
              <p className="text-xl text-muted-foreground">
                Providing quality healthcare services with compassion and expertise since 2000.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div 
                className="bg-white p-8 rounded-2xl subtle-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  To provide exceptional healthcare services using cutting-edge technology and compassionate 
                  care, ensuring the well-being of our patients and the communities we serve.
                </p>
                <ul className="space-y-3">
                  {['Patient-centered care', 'Medical excellence', 'Community wellness', 'Innovation'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl subtle-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground mb-6">
                  To be the leading healthcare provider, recognized for excellence in medical services, 
                  innovation, and patient satisfaction, setting the standard for healthcare delivery.
                </p>
                <ul className="space-y-3">
                  {['Healthcare leadership', 'Technological advancement', 'Global standards', 'Sustainable practices'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-secondary/50">
          <div className="container px-6 mx-auto max-w-7xl">
            <SectionHeading 
              title="Why Choose HealthHub" 
              subtitle="We are committed to excellence in healthcare delivery"
              center
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "24/7 Service",
                  description: "Round-the-clock healthcare services for emergencies and critical care"
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Expert Physicians",
                  description: "Highly qualified and experienced medical professionals"
                },
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Modern Facility",
                  description: "State-of-the-art medical equipment and comfortable environment"
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Patient-First Approach",
                  description: "Personalized care focused on individual patient needs"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl subtle-shadow text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-16">
          <div className="container px-6 mx-auto max-w-7xl">
            <SectionHeading 
              title="Our History" 
              subtitle="From small beginnings to healthcare excellence"
              center
            />
            
            <div className="mt-12 max-w-4xl mx-auto">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    year: "2000",
                    title: "Foundation",
                    description: "HealthHub was established with a vision to provide quality healthcare services to the community."
                  },
                  {
                    year: "2005",
                    title: "Expansion",
                    description: "Expanded facilities to include specialized departments and advanced diagnostic services."
                  },
                  {
                    year: "2010",
                    title: "Technology Integration",
                    description: "Implemented cutting-edge medical technology and electronic health record systems."
                  },
                  {
                    year: "2015",
                    title: "Community Outreach",
                    description: "Launched outreach programs to serve underprivileged communities and promote health awareness."
                  },
                  {
                    year: "2020",
                    title: "Global Recognition",
                    description: "Received international accreditation for excellence in healthcare services and patient care."
                  }
                ].map((milestone, index) => (
                  <div key={index} className="flex">
                    <div className="mr-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                        {milestone.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default About;
