
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-display font-semibold leading-tight">
                Get in Touch With Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                We're here to answer your questions and discuss how we can help with your healthcare needs.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Emergency: 911</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@healthhub.com</p>
                    <p className="text-muted-foreground">support@healthhub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Location</h3>
                    <p className="text-muted-foreground">1234 Healthcare Avenue,</p>
                    <p className="text-muted-foreground">Medical District, NY 10001</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="rounded-2xl overflow-hidden h-64">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374663314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635186524847!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location map"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 subtle-shadow border border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..." 
                    rows={4} 
                  />
                </div>
                
                <Button className="w-full gap-2">
                  <span>Send Message</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
