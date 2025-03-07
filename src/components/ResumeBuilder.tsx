
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Upload, 
  Download, 
  Edit, 
  Copy, 
  Trash, 
  Plus, 
  Sparkles,
  CheckCircle,
  Star,
  StarHalf
} from 'lucide-react';
import { GlassCard } from './animations/AnimatedGradient';

interface ResumeCardProps {
  name: string;
  preview: string;
  lastEdited: string;
  matchScore?: number;
  isAiOptimized?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onClick?: () => void;
  className?: string;
}

interface ResumeBuilderProps {
  resumes: ResumeCardProps[];
  className?: string;
}

export const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ 
  resumes = [], 
  className 
}) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  return (
    <div className={className}>
      <Tabs 
        defaultValue="all" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Resumes</TabsTrigger>
          <TabsTrigger value="optimized">AI Optimized</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CreateResumeCard />
            
            {resumes.map((resume, index) => (
              <ResumeCard key={index} {...resume} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="optimized" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes
              .filter(r => r.isAiOptimized)
              .map((resume, index) => (
                <ResumeCard key={index} {...resume} />
              ))}
              
            {resumes.filter(r => r.isAiOptimized).length === 0 && (
              <div className="col-span-full text-center py-12">
                <Sparkles className="mx-auto h-12 w-12 text-brand opacity-50" />
                <h3 className="mt-2 text-xl font-medium">No AI-optimized resumes yet</h3>
                <p className="mt-1 text-smart-500">
                  Optimize your resume with AI to increase your chances of getting hired!
                </p>
                <div className="mt-6">
                  <Button className="bg-brand hover:bg-brand-dark">
                    Optimize with AI
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="templates" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TemplateCard 
              name="Professional" 
              preview="/placeholder.svg" 
              category="Business" 
              rating={4.9}
              reviews={324}
            />
            <TemplateCard 
              name="Creative" 
              preview="/placeholder.svg" 
              category="Design" 
              rating={4.7}
              reviews={186}
            />
            <TemplateCard 
              name="Technical" 
              preview="/placeholder.svg" 
              category="IT & Development" 
              rating={4.8}
              reviews={278}
            />
            <TemplateCard 
              name="Executive" 
              preview="/placeholder.svg" 
              category="Leadership" 
              rating={4.6}
              reviews={142}
            />
            <TemplateCard 
              name="Modern" 
              preview="/placeholder.svg" 
              category="All-purpose" 
              rating={4.5}
              reviews={209}
            />
            <TemplateCard 
              name="Minimal" 
              preview="/placeholder.svg" 
              category="All-purpose" 
              rating={4.4}
              reviews={167}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const ResumeCard: React.FC<ResumeCardProps> = ({
  name,
  preview,
  lastEdited,
  matchScore,
  isAiOptimized,
  isSelected,
  onSelect,
  onClick,
  className,
}) => {
  return (
    <GlassCard 
      className={cn(
        "overflow-visible group transition-all ease-out duration-300 hover:scale-[1.02]",
        isSelected && "ring-2 ring-brand",
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-3 bg-smart-100 dark:bg-smart-800">
        <img 
          src={preview} 
          alt={name} 
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        
        {matchScore && (
          <div className="absolute top-2 right-2 bg-smart-900/80 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
            {matchScore}% Match
          </div>
        )}
        
        {isAiOptimized && (
          <div className="absolute top-2 left-2 bg-brand/90 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center">
            <Sparkles size={12} className="mr-1" />
            AI Optimized
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="w-full flex justify-center space-x-2">
            <Button size="sm" variant="default" className="bg-white/90 hover:bg-white text-smart-900">
              <Edit size={16} className="mr-1" />
              Edit
            </Button>
            <Button size="sm" variant="default" className="bg-white/90 hover:bg-white text-smart-900">
              <Download size={16} className="mr-1" />
              Download
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-smart-500">Edited {lastEdited}</p>
        </div>
        
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-smart-500 hover:text-smart-700">
            <Copy size={16} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-smart-500 hover:text-red-500">
            <Trash size={16} />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

const CreateResumeCard: React.FC = () => {
  return (
    <div className="border-2 border-dashed border-smart-300 dark:border-smart-700 rounded-xl p-5 h-full flex flex-col items-center justify-center text-center min-h-[280px] transition-colors hover:border-brand group">
      <div className="mb-4 p-4 rounded-full bg-brand-light dark:bg-brand/20 text-brand">
        <Plus size={36} className="transition-transform group-hover:rotate-90" />
      </div>
      <h3 className="font-medium text-lg mb-2">Create New Resume</h3>
      <p className="text-smart-500 text-sm mb-6 max-w-[220px]">
        Start from scratch or use a template
      </p>
      <div className="space-y-2 w-full">
        <Button className="w-full bg-brand hover:bg-brand-dark">
          <FileText size={16} className="mr-2" />
          Create New
        </Button>
        <Button variant="outline" className="w-full">
          <Upload size={16} className="mr-2" />
          Upload PDF
        </Button>
      </div>
    </div>
  );
};

const TemplateCard: React.FC<{
  name: string;
  preview: string;
  category: string;
  rating: number;
  reviews: number;
}> = ({ name, preview, category, rating, reviews }) => {
  return (
    <GlassCard className="overflow-visible group transition-all ease-out duration-300 hover:scale-[1.02]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-3 bg-smart-100 dark:bg-smart-800">
        <img 
          src={preview} 
          alt={name} 
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        
        <div className="absolute top-2 left-2 bg-smart-900/80 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
          {category}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <Button size="sm" variant="default" className="bg-white/90 hover:bg-white text-smart-900">
            Use Template
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium">{name} Template</h3>
        <div className="flex items-center mt-1">
          <div className="flex text-amber-400">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            {rating < 4.8 ? <StarHalf size={14} fill="currentColor" /> : <Star size={14} fill="currentColor" />}
          </div>
          <span className="text-xs text-smart-500 ml-1">
            {rating} ({reviews} reviews)
          </span>
        </div>
      </div>
    </GlassCard>
  );
};
