
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useBackendSimulation } from '@/hooks/useBackendSimulation';

const appointmentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string().min(1, { message: "Please select an appointment time." }),
  department: z.string().min(1, { message: "Please select a department." }),
  doctor: z.string().min(1, { message: "Please select a doctor." }),
  message: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const submitAppointment = async (data: AppointmentFormValues): Promise<{ success: boolean }> => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Appointment submitted:', data);
      resolve({ success: true });
    }, 1500);
  });
};

const Appointments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM"
  ];
  
  const departments = [
    "Cardiology", "Neurology", "Orthopedics", "Pediatrics", 
    "Dermatology", "Ophthalmology", "Dentistry", "General Medicine"
  ];
  
  const doctorsByDepartment: Record<string, string[]> = {
    "Cardiology": ["Dr. yoseph Smith", "Dr. Lisa yosephson"],
    "Neurology": ["Dr. Robert Williams", "Dr. Maria Garcia"],
    "Orthopedics": ["Dr. James Brown", "Dr. Patricia Miller"],
    "Pediatrics": ["Dr. Jennifer Davis", "Dr. Michael Wilson"],
    "Dermatology": ["Dr. Sarah Thompson", "Dr. David Martinez"],
    "Ophthalmology": ["Dr. Thomas Anderson", "Dr. Jessica Lee"],
    "Dentistry": ["Dr. Daniel White", "Dr. Emily Taylor"],
    "General Medicine": ["Dr. Christopher Harris", "Dr. Amanda Lewis"]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: undefined,
      time: "",
      department: "",
      doctor: "",
      message: "",
    },
  });

  const { executeRequest, isLoading, isSuccess } = useBackendSimulation(
    submitAppointment,
    'Your appointment has been scheduled successfully. We will confirm shortly.'
  );

  const onSubmit = async (data: AppointmentFormValues) => {
    await executeRequest(data);
    if (isSuccess) {
      form.reset();
    }
  };

  // Handle department change to update doctor options
  const watchDepartment = form.watch("department");
  useEffect(() => {
    if (watchDepartment !== selectedDepartment) {
      setSelectedDepartment(watchDepartment);
      form.setValue("doctor", "");
    }
  }, [watchDepartment, form, selectedDepartment]);

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
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Book an Appointment</h1>
              <p className="text-xl text-muted-foreground">
                Schedule a visit with our healthcare professionals for personalized care and treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-16">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Schedule Your Visit</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="yoseph Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="example@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Appointment Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Select a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => 
                                      date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                      date.getDay() === 0
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time slot" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="department"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Department</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a department" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {departments.map((dept) => (
                                    <SelectItem key={dept} value={dept}>
                                      {dept}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="doctor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Doctor</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={!selectedDepartment}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={
                                    selectedDepartment 
                                      ? "Select a doctor" 
                                      : "Please select a department first"
                                  } />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {selectedDepartment && 
                                  doctorsByDepartment[selectedDepartment]?.map((doctor) => (
                                    <SelectItem key={doctor} value={doctor}>
                                      {doctor}
                                    </SelectItem>
                                  ))
                                }
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide any additional information about your condition or specific requirements." 
                                className="min-h-32" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
                        {isLoading ? "Booking..." : "Book Appointment"}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-2xl subtle-shadow">
                  <h3 className="text-xl font-semibold mb-6">Appointment Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Working Hours</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>8:00 AM - 8:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday</span>
                          <span>Emergency Only</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">What to Bring</h4>
                      <ul className="space-y-2">
                        {[
                          "Photo ID (driver's license, passport, etc.)",
                          "Insurance card and information",
                          "List of current medications",
                          "Medical records and test results (if applicable)",
                          "Payment method for co-pays or fees"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Emergency Contact</h4>
                      <p className="text-sm text-muted-foreground">
                        For emergencies, please call our 24/7 hotline:
                      </p>
                      <p className="text-primary font-medium mt-1">+1 (555) 911-0000</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-primary/5">
          <div className="container px-6 mx-auto max-w-7xl">
            <SectionHeading
              title="Why Choose Horizon"
              subtitle="We strive to provide the best healthcare experience for our patients"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Expert Specialists",
                  description: "Our team consists of board-certified specialists with years of experience in their respective fields."
                },
                {
                  title: "Modern Facilities",
                  description: "State-of-the-art equipment and comfortable environments designed for your wellbeing."
                },
                {
                  title: "Personalized Care",
                  description: "We develop individualized treatment plans tailored to meet your specific healthcare needs."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl subtle-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Appointments;
