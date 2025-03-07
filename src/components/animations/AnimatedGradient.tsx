
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
  containerClassName?: string;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  children,
  containerClassName,
}) => {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-gradient-background opacity-60 filter blur-xl",
          className
        )}
      />
      {children}
    </div>
  );
};

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn(
      "glass-card relative overflow-hidden transition-all duration-300 hover:shadow-xl",
      className
    )}>
      {children}
    </div>
  );
};

export const ShimmerButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E0F2FE_0%,#0284C7_50%,#E0F2FE_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-smart-50 px-5 py-2 text-sm font-medium text-smart-900 backdrop-blur-3xl dark:bg-smart-950 dark:text-smart-50">
        {children}
      </span>
    </button>
  );
};
