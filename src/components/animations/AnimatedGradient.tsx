
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;  // Add onClick as an optional prop
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className,
  onClick  // Accept the onClick prop
}) => {
  return (
    <div 
      className={cn(
        "glass-card", 
        className
      )}
      onClick={onClick}  // Apply the onClick handler
    >
      {children}
    </div>
  );
};

export const AnimatedGradient: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn(
      "relative overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-brand to-brand-dark opacity-20 animate-gradient-background rounded-xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
