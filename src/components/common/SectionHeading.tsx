
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, center = false, className }: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12",
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl sm:text-4xl font-display font-semibold leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
