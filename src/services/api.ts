
import { useToast } from "@/components/ui/use-toast";

// Types
export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  department: string;
  doctor: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio?: string;
  education?: string[];
  experience?: number;
  languages?: string[];
  availability?: string[];
  ratings?: number;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription?: string;
  benefits?: string[];
  imageUrl?: string;
}

// Mock data - this would typically come from a backend API
const mockDoctors: Doctor[] = [
  {
    id: "dr-sarah-yosephson",
    name: "Dr. Sarah yosephson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bio: "Dr. yosephson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases.",
    education: ["MD, Harvard Medical School", "Residency, Mayo Clinic", "Fellowship, Cleveland Clinic"],
    experience: 15,
    languages: ["English", "Spanish"],
    availability: ["Mon: 9AM-5PM", "Wed: 9AM-5PM", "Fri: 9AM-3PM"],
    ratings: 4.9
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    bio: "Dr. Chen specializes in neurological disorders and has pioneered several breakthrough treatments.",
    education: ["MD, Stanford University", "Residency, UCSF", "Fellowship, yosephs Hopkins"],
    experience: 12,
    languages: ["English", "Mandarin"],
    availability: ["Tue: 8AM-4PM", "Thu: 8AM-4PM", "Sat: 10AM-2PM"],
    ratings: 4.8
  },
  {
    id: "dr-emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    bio: "Dr. Rodriguez is dedicated to providing compassionate care for children of all ages.",
    education: ["MD, Yale School of Medicine", "Residency, Boston Children's Hospital"],
    experience: 8,
    languages: ["English", "Spanish", "Portuguese"],
    availability: ["Mon: 8AM-4PM", "Wed: 8AM-4PM", "Thu: 1PM-7PM"],
    ratings: 4.9
  },
  {
    id: "dr-james-wilson",
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bio: "Dr. Wilson focuses on sports medicine and minimally invasive surgical techniques.",
    education: ["MD, University of Pennsylvania", "Residency, Hospital for Special Surgery", "Fellowship, Andrews Sports Medicine"],
    experience: 14,
    languages: ["English"],
    availability: ["Tue: 9AM-6PM", "Thu: 9AM-6PM", "Fri: 9AM-3PM"],
    ratings: 4.7
  }
];

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    content: "The care and attention I received at Horizon was exceptional. The doctors took the time to listen to my concerns and develop a treatment plan specifically for me.",
    author: "Jennifer Adams",
    role: "Cardiac Patient",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    id: 2,
    content: "After my surgery, the rehabilitation program was incredibly thorough. The staff's expertise and encouragement helped me recover much faster than expected.",
    author: "David Martinez",
    role: "Orthopedic Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    content: "The pediatric team made my daughter feel so comfortable during her treatments. Their child-friendly approach turned what could have been a scary experience into a positive one.",
    author: "Rachel Thompson",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
  },
  {
    id: 4,
    content: "I've been coming to Horizon for years now. The consistent quality of care and the way they stay on top of the latest medical advances is truly impressive.",
    author: "Michael yosephson",
    role: "Long-term Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
];

const mockServices: Service[] = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Comprehensive care for heart conditions with advanced diagnostic technologies and treatments.",
    icon: "Heart",
    fullDescription: "Our cardiology department offers comprehensive care for heart conditions, from prevention to advanced treatment. Our team uses state-of-the-art diagnostic technologies to accurately assess cardiovascular health and develop personalized treatment plans.",
    benefits: [
      "Advanced cardiac imaging including 3D echocardiography",
      "Minimally invasive procedures",
      "Cardiac rehabilitation programs",
      "Preventive cardiology services"
    ],
    imageUrl: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Expert diagnosis and treatment for disorders of the nervous system, brain, and spinal cord.",
    icon: "Brain",
    fullDescription: "Our neurology department specializes in diagnosing and treating disorders of the nervous system, including the brain and spinal cord. Our neurologists use the latest technology to provide accurate diagnoses and comprehensive treatment plans.",
    benefits: [
      "Advanced neuroimaging capabilities",
      "Specialized care for stroke, epilepsy, multiple sclerosis, and more",
      "Multidisciplinary approach with neurosurgeons and rehabilitation specialists",
      "Both acute and chronic neurological care"
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Specialized care for musculoskeletal issues, from sports injuries to joint replacements.",
    icon: "Bone",
    fullDescription: "Our orthopedics department provides specialized care for the entire musculoskeletal system. From sports injuries to degenerative conditions, our specialists offer both surgical and non-surgical treatments to help patients regain mobility and function.",
    benefits: [
      "Minimally invasive joint replacement surgery",
      "Sports medicine and injury rehabilitation",
      "Spine care and surgery",
      "Physical therapy and pain management"
    ],
    imageUrl: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Gentle and comprehensive healthcare for children, from newborns to adolescents.",
    icon: "Baby",
    fullDescription: "Our pediatrics department is dedicated to providing comprehensive healthcare for children from birth through adolescence. Our child-friendly environment and compassionate approach ensure that young patients receive the best possible care in a comfortable setting.",
    benefits: [
      "Well-child check-ups and immunizations",
      "Diagnosis and management of acute and chronic illnesses",
      "Developmental assessments and behavioral health",
      "Adolescent medicine and transition to adult care"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581079288519-b6d01fc4b86c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "radiology",
    title: "Radiology",
    description: "State-of-the-art imaging services including MRI, CT scans, and ultrasound diagnostics.",
    icon: "Microscope",
    fullDescription: "Our radiology department offers advanced imaging services to aid in diagnosis and treatment planning. Our team of radiologists uses the latest technology to provide accurate interpretations of imaging studies, ensuring optimal patient care.",
    benefits: [
      "Advanced MRI, CT, and PET scanning",
      "Ultrasound diagnostics",
      "Interventional radiology procedures",
      "Digital mammography and breast imaging"
    ],
    imageUrl: "https://images.unsplash.com/photo-1587857740695-cdc743ba1bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "laboratory",
    title: "Laboratory",
    description: "Quick and accurate diagnostic testing with our advanced medical laboratory.",
    icon: "Flask",
    fullDescription: "Our laboratory provides comprehensive diagnostic testing services with quick and accurate results. Using advanced technology and stringent quality control, we ensure that healthcare providers have the information they need to make informed treatment decisions.",
    benefits: [
      "Comprehensive blood work and chemistry panels",
      "Microbiology and pathology services",
      "Genetic testing and molecular diagnostics",
      "Quick turnaround times for results"
    ],
    imageUrl: "https://images.unsplash.com/photo-1579154341098-e4e7c3c7adb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

// API simulation functions
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API for doctors
export const fetchDoctors = async (): Promise<Doctor[]> => {
  console.log('Fetching doctors data...');
  // Simulate API call
  await delay(800);
  return mockDoctors;
};

export const fetchDoctorById = async (id: string): Promise<Doctor | undefined> => {
  console.log(`Fetching doctor with ID: ${id}`);
  // Simulate API call
  await delay(600);
  return mockDoctors.find(doctor => doctor.id === id);
};

// API for testimonials
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  console.log('Fetching testimonials data...');
  // Simulate API call
  await delay(700);
  return mockTestimonials;
};

// API for services
export const fetchServices = async (): Promise<Service[]> => {
  console.log('Fetching services data...');
  // Simulate API call
  await delay(800);
  return mockServices;
};

export const fetchServiceById = async (id: string): Promise<Service | undefined> => {
  console.log(`Fetching service with ID: ${id}`);
  // Simulate API call
  await delay(600);
  return mockServices.find(service => service.id === id);
};

// Form submission APIs
export const submitAppointment = async (data: AppointmentFormData): Promise<{ success: boolean; message: string }> => {
  console.log('Submitting appointment form:', data);
  // Simulate API call
  await delay(1200);
  
  // Simulate successful submission
  if (Math.random() > 0.1) { // 90% success rate
    return {
      success: true,
      message: 'Your appointment request has been submitted successfully. We will contact you shortly to confirm.'
    };
  } else {
    // Simulate error
    throw new Error('There was an issue processing your appointment. Please try again later.');
  }
};

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  console.log('Submitting contact form:', data);
  // Simulate API call
  await delay(1000);
  
  // Simulate successful submission
  if (Math.random() > 0.1) { // 90% success rate
    return {
      success: true,
      message: 'Thank you for your message. Our team will get back to you as soon as possible.'
    };
  } else {
    // Simulate error
    throw new Error('There was an issue sending your message. Please try again later.');
  }
};
