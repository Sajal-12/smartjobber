
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Plus } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  description,
  children,
  actions,
  className,
}) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-smart-500 mt-1 max-w-2xl">{description}</p>
          )}
        </div>
        
        {actions && (
          <div className="flex flex-wrap items-center gap-2">
            {actions}
          </div>
        )}
      </div>
      
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export const DashboardActionButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  primary?: boolean;
  className?: string;
}> = ({ 
  children, 
  onClick, 
  icon = <Plus size={16} />, 
  primary = false,
  className 
}) => {
  return (
    <Button
      variant={primary ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={cn(
        primary && "bg-brand hover:bg-brand-dark",
        className
      )}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </Button>
  );
};

export const MetricCard: React.FC<{
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    positive?: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}> = ({ title, value, description, trend, icon, className }) => {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-smart-950/50 rounded-xl shadow-sm border border-smart-200 dark:border-smart-800 p-5 transition-all hover:shadow-md",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-smart-500 mb-1">{title}</h3>
          <p className="text-2xl font-bold tracking-tight">{value}</p>
          
          {trend && (
            <div className="flex items-center mt-1">
              <span
                className={cn(
                  "text-xs font-medium px-1.5 py-0.5 rounded-full flex items-center",
                  trend.positive 
                    ? "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/30" 
                    : "text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-950/30"
                )}
              >
                {trend.positive ? "+" : "-"}{Math.abs(trend.value)}%
                <ArrowUpRight size={12} className={cn("ml-0.5", !trend.positive && "rotate-180")} />
              </span>
              {description && (
                <span className="text-xs text-smart-500 ml-1.5">{description}</span>
              )}
            </div>
          )}
          
          {!trend && description && (
            <p className="text-xs text-smart-500 mt-1">{description}</p>
          )}
        </div>
        
        {icon && (
          <div className="bg-smart-50 dark:bg-smart-800 p-2 rounded-lg">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
