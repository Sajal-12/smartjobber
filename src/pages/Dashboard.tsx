
import React from 'react';
import { 
  DashboardHeader, 
  DashboardActionButton, 
  MetricCard 
} from '@/components/DashboardHeader';
import { JobTracker } from '@/components/JobTracker';
import { ResumeBuilder } from '@/components/ResumeBuilder';
import { Briefcase, FileText, CalendarDays, Upload, Plus, FileUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  // Sample data
  const mockJobs = [
    {
      id: '1',
      title: 'Senior Frontend Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      salary: '$120K - $150K',
      status: 'interview' as const,
      date: 'June 12, 2023',
    },
    {
      id: '2',
      title: 'UX Designer',
      company: 'DesignHub',
      location: 'Remote',
      salary: '$90K - $110K',
      status: 'applied' as const,
      date: 'June 15, 2023',
    },
    {
      id: '3',
      title: 'Product Manager',
      company: 'InnovateCo',
      location: 'New York, NY',
      status: 'rejected' as const,
      date: 'May 28, 2023',
    },
  ];
  
  const mockResumes = [
    {
      name: 'Software Engineer Resume',
      preview: '/placeholder.svg',
      lastEdited: 'Yesterday',
      matchScore: 85,
      isAiOptimized: true,
    },
    {
      name: 'Product Manager Resume',
      preview: '/placeholder.svg',
      lastEdited: '3 days ago',
      matchScore: 72,
    },
  ];
  
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Welcome back, John!"
        description="Here's an overview of your job search activities"
        actions={
          <>
            <DashboardActionButton
              icon={<Upload size={16} />}
              onClick={() => {}}
            >
              Upload Resume
            </DashboardActionButton>
            <DashboardActionButton
              primary
              onClick={() => {}}
            >
              Add Job Application
            </DashboardActionButton>
          </>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Applications"
          value="24"
          description="Last 30 days"
          trend={{ value: 12, positive: true }}
          icon={<Briefcase className="h-5 w-5 text-brand" />}
        />
        <MetricCard
          title="Interviews"
          value="5"
          description="Last 30 days"
          trend={{ value: 20, positive: true }}
          icon={<CalendarDays className="h-5 w-5 text-brand" />}
        />
        <MetricCard
          title="Resume Views"
          value="68"
          description="Last 30 days"
          trend={{ value: 5, positive: false }}
          icon={<FileText className="h-5 w-5 text-brand" />}
        />
        <MetricCard
          title="Match Rate"
          value="78%"
          description="Average match score"
          trend={{ value: 8, positive: true }}
          icon={<Target className="h-5 w-5 text-brand" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-full bg-white/60 dark:bg-smart-950/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Recent Applications</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1 text-brand">
              <Plus size={16} />
              Add New
            </Button>
          </CardHeader>
          <CardContent>
            <JobTracker jobs={mockJobs} />
            <div className="mt-4 flex justify-center">
              <Button variant="outline" className="w-full sm:w-auto">
                View All Applications
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-full lg:col-span-2 bg-white/60 dark:bg-smart-950/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Your Resumes</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1 text-brand">
              <FileUp size={16} />
              New Resume
            </Button>
          </CardHeader>
          <CardContent>
            <ResumeBuilder resumes={mockResumes} />
            <div className="mt-4 flex justify-center">
              <Button variant="outline" className="w-full sm:w-auto">
                Manage All Resumes
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-full lg:col-span-1 bg-white/60 dark:bg-smart-950/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-900/20">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Interview</h3>
                    <p className="text-sm">TechCorp - Senior Frontend Engineer</p>
                  </div>
                  <span className="text-xs bg-white dark:bg-smart-800 px-2 py-1 rounded-md">
                    Tomorrow
                  </span>
                </div>
                <p className="text-xs mt-2">10:00 AM - 11:30 AM</p>
              </div>
              
              <div className="p-4 rounded-lg border border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-900/20">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Follow-up Reminder</h3>
                    <p className="text-sm">InnovateCo - Product Manager</p>
                  </div>
                  <span className="text-xs bg-white dark:bg-smart-800 px-2 py-1 rounded-md">
                    Friday
                  </span>
                </div>
              </div>
              
              <div className="p-4 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-900/20">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Application Deadline</h3>
                    <p className="text-sm">DesignHub - Senior UX Designer</p>
                  </div>
                  <span className="text-xs bg-white dark:bg-smart-800 px-2 py-1 rounded-md">
                    Next Week
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <Button variant="outline" className="w-full">
                View Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
