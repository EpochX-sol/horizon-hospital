
import React, { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../common/BackToTop';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { toast } = useToast();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Example of dynamic welcome message based on time of day
  useEffect(() => {
    if (location.pathname === '/') {
      const currentHour = new Date().getHours();
      let greeting = 'Welcome to Horizon';
      
      if (currentHour < 12) {
        greeting = 'Good Morning! Welcome to Horizon';
      } else if (currentHour < 18) {
        greeting = 'Good Afternoon! Welcome to Horizon';
      } else {
        greeting = 'Good Evening! Welcome to Horizon';
      }
      
      // Only show welcome toast once per session
      if (!sessionStorage.getItem('welcomeToastShown')) {
        setTimeout(() => {
          toast({
            title: greeting,
            description: "We're dedicated to providing exceptional healthcare services.",
            duration: 5000,
          });
          sessionStorage.setItem('welcomeToastShown', 'true');
        }, 1500);
      }
    }
  }, [location.pathname, toast]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Layout;
