
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Microscope, 
  Flask, 
  Stethoscope, 
  Eye, 
  Smile, 
  Lungs, 
  Pill,
  PanelRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, features, image, index }: ServiceCardProps) => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden subtle-shadow border border-border/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="md:w-2/5 h-60 md:h-auto relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 md:p-8 md:w-3/5">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button>Learn More</Button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Cardiology",
      description: "Our cardiology department offers comprehensive care for all heart conditions, from prevention and diagnosis to treatment and rehabilitation.",
      features: [
        "Advanced cardiac imaging",
        "Coronary interventions",
        "Heart rhythm management",
        "Cardiac rehabilitation"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Neurology",
      description: "Our neurology team specializes in disorders of the nervous system, brain, and spinal cord, providing expert diagnosis and treatment for complex conditions.",
      features: [
        "Advanced neuroimaging",
        "Movement disorders treatment",
        "Epilepsy monitoring",
        "Neuromuscular therapies"
      ],
      image: "https://images.unsplash.com/photo-1559757175-7cb036ae614c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80"
    },
    {
      icon: <Bone className="h-5 w-5" />,
      title: "Orthopedics",
      description: "Our orthopedic services focus on prevention, diagnosis, and treatment of disorders of the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.",
      features: [
        "Joint replacement surgery",
        "Sports medicine",
        "Spine treatment",
        "Physical therapy"
      ],
      image: "https://images.unsplash.com/photo-1584800605309-a8947593f2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <Baby className="h-5 w-5" />,
      title: "Pediatrics",
      description: "Our pediatric department provides specialized healthcare for infants, children, and adolescents, focusing on their unique physical, emotional, and developmental needs.",
      features: [
        "Well-child visits",
        "Immunizations",
        "Developmental assessments",
        "Pediatric specialists"
      ],
      image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <Microscope className="h-5 w-5" />,
      title: "Radiology",
      description: "Our radiology department utilizes the latest imaging technology to diagnose and treat various conditions, providing clear and accurate results for better patient care.",
      features: [
        "MRI and CT scans",
        "Ultrasound imaging",
        "X-ray services",
        "Interventional radiology"
      ],
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      icon: <Flask className="h-5 w-5" />,
      title: "Laboratory",
      description: "Our advanced laboratory provides quick and accurate diagnostic testing, supporting clinical decisions with reliable results across a wide range of medical specialties.",
      features: [
        "Blood testing",
        "Microbiology",
        "Molecular diagnostics",
        "Cytology"
      ],
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <Stethoscope className="h-5 w-5" />,
      title: "General Medicine",
      description: "Our general medicine department provides comprehensive primary care services for patients of all ages, focusing on prevention, diagnosis, and treatment of various conditions.",
      features: [
        "Preventive care",
        "Chronic disease management",
        "Health screenings",
        "Immunizations"
      ],
      image: "https://images.unsplash.com/photo-1581056771107-24247a7e6794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Ophthalmology",
      description: "Our ophthalmology department specializes in the diagnosis and treatment of eye conditions, providing comprehensive care to maintain and improve your vision health.",
      features: [
        "Comprehensive eye exams",
        "Cataract surgery",
        "Glaucoma treatment",
        "Refractive surgery"
      ],
      image: "https://images.unsplash.com/photo-1560516210-c96b6cf0ff69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <Smile className="h-5 w-5" />,
      title: "Dental Care",
      description: "Our dental department offers comprehensive dental services for the whole family, from routine cleanings to advanced procedures for optimal oral health.",
      features: [
        "Preventive dentistry",
        "Restorative treatments",
        "Cosmetic procedures",
        "Oral surgery"
      ],
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80"
    },
    {
      icon: <Lungs className="h-5 w-5" />,
      title: "Pulmonology",
      description: "Our pulmonology specialists diagnose and treat conditions affecting the respiratory system, helping patients breathe easier and improve their quality of life.",
      features: [
        "Pulmonary function testing",
        "Sleep studies",
        "Bronchoscopy",
        "Respiratory therapy"
      ],
      image: "https://images.unsplash.com/photo-1584770692553-b73d2f65cb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      icon: <Pill className="h-5 w-5" />,
      title: "Pharmacy",
      description: "Our in-house pharmacy provides convenient access to medications, expert advice from pharmacists, and comprehensive medication management services.",
      features: [
        "Prescription filling",
        "Medication counseling",
        "Compounding services",
        "Medication management"
      ],
      image: "https://images.unsplash.com/photo-1576670409256-984c29444cdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <PanelRight className="h-5 w-5" />,
      title: "Emergency Care",
      description: "Our emergency department is equipped to handle all medical emergencies, providing immediate, high-quality care 24/7 for patients in critical condition.",
      features: [
        "24/7 emergency services",
        "Trauma care",
        "Critical care",
        "Rapid diagnostics"
      ],
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
        <section className="py-16 bg-primary/5">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Our Services
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-balance">
                  Comprehensive Healthcare Services
                </h1>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto text-balance">
                  We offer a wide range of medical services to meet all your healthcare needs, delivered by experienced specialists with state-of-the-art equipment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services List Section */}
        <section className="py-20">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="space-y-10">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  image={service.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Services;
