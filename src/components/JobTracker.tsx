
import React from 'react';
import { 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  MoreHorizontal, 
  ExternalLink,
  Building,
  MapPin,
  DollarSign,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { GlassCard } from './animations/AnimatedGradient';

type JobStatus = 'applied' | 'interview' | 'offer' | 'rejected' | 'saved';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  status: JobStatus;
  date: string;
  logo?: string;
}

interface JobTrackerProps {
  jobs: Job[];
  className?: string;
  limit?: number;
}

const STATUS_CONFIG: Record<JobStatus, { label: string; color: string; icon: React.ReactNode }> = {
  applied: { 
    label: 'Applied', 
    color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800', 
    icon: <Clock size={14} className="text-blue-500" />
  },
  interview: { 
    label: 'Interview', 
    color: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800', 
    icon: <Calendar size={14} className="text-purple-500" />
  },
  offer: { 
    label: 'Offer', 
    color: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800', 
    icon: <CheckCircle2 size={14} className="text-green-500" />
  },
  rejected: { 
    label: 'Rejected', 
    color: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800', 
    icon: <XCircle size={14} className="text-red-500" />
  },
  saved: { 
    label: 'Saved', 
    color: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800', 
    icon: <AlertCircle size={14} className="text-amber-500" />
  }
};

export const JobTracker: React.FC<JobTrackerProps> = ({ jobs = [], className, limit }) => {
  const displayJobs = limit ? jobs.slice(0, limit) : jobs;

  return (
    <div className={cn("space-y-4", className)}>
      {displayJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      
      {jobs.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="mx-auto h-12 w-12 text-smart-400" />
          <h3 className="mt-2 text-sm font-medium">No jobs yet</h3>
          <p className="mt-1 text-sm text-smart-500">
            Start tracking your job applications
          </p>
          <div className="mt-6">
            <Button className="bg-brand hover:bg-brand-dark">
              Add your first job
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const status = STATUS_CONFIG[job.status];
  
  return (
    <GlassCard className="overflow-visible transition-all hover:scale-[1.01] hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-smart-100 dark:bg-smart-800 rounded-md flex items-center justify-center overflow-hidden">
            {job.logo ? (
              <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
            ) : (
              <Building className="h-6 w-6 text-smart-500" />
            )}
          </div>
          
          <div>
            <h3 className="font-medium text-lg">{job.title}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge variant="outline" className="flex items-center gap-1 font-normal">
                <Building size={14} className="text-smart-500" />
                {job.company}
              </Badge>
              
              {job.location && (
                <Badge variant="outline" className="flex items-center gap-1 font-normal">
                  <MapPin size={14} className="text-smart-500" />
                  {job.location}
                </Badge>
              )}
              
              {job.salary && (
                <Badge variant="outline" className="flex items-center gap-1 font-normal">
                  <DollarSign size={14} className="text-smart-500" />
                  {job.salary}
                </Badge>
              )}
              
              <Badge 
                variant="outline" 
                className={cn(
                  "flex items-center gap-1 font-normal",
                  status.color
                )}
              >
                {status.icon}
                {status.label}
              </Badge>
            </div>
            
            <p className="text-sm text-smart-500 mt-2">
              Applied on {job.date}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ExternalLink size={16} className="text-smart-500" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal size={16} className="text-smart-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Edit Application</DropdownMenuItem>
              <DropdownMenuItem>Add Note</DropdownMenuItem>
              <DropdownMenuItem>Mark as Favorite</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500 hover:text-red-700">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </GlassCard>
  );
};
