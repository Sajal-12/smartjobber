
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, X, CreditCard, Zap } from 'lucide-react';
import { AnimatedGradient, ShimmerButton } from './animations/AnimatedGradient';

type PlanFeature = {
  name: string;
  included: boolean;
};

interface PricingPlanProps {
  name: string;
  price: number | string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  buttonText?: string;
  onSelectPlan?: () => void;
  className?: string;
}

export const SubscriptionCard: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  isPopular,
  buttonText = "Subscribe",
  onSelectPlan,
  className,
}) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg border",
        isPopular && "relative border-brand shadow-lg",
        className
      )}
    >
      {isPopular && (
        <div className="absolute top-0 inset-x-0">
          <div className="flex justify-center">
            <Badge className="bg-brand hover:bg-brand-dark rounded-t-none rounded-b-lg px-3 py-1">
              Most Popular
            </Badge>
          </div>
        </div>
      )}
      
      <CardHeader className={cn("pb-3", isPopular && "pt-10")}>
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl font-bold">{name}</h3>
          {typeof price === 'number' && (
            <div className="text-right">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">${price}</span>
                <span className="text-smart-500 ml-1">/mo</span>
              </div>
              <div className="text-xs text-smart-500">billed monthly</div>
            </div>
          )}
          {typeof price === 'string' && (
            <div className="text-3xl font-bold">{price}</div>
          )}
        </div>
        <p className="text-smart-500 mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="pb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-smart-400 mr-2 flex-shrink-0" />
              )}
              <span className={cn(!feature.included && "text-smart-500")}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        {isPopular ? (
          <AnimatedGradient containerClassName="w-full">
            <ShimmerButton 
              onClick={onSelectPlan}
              className="w-full"
            >
              <Zap size={16} className="mr-2" />
              {buttonText}
            </ShimmerButton>
          </AnimatedGradient>
        ) : (
          <Button 
            variant={name === "Free" ? "outline" : "default"}
            className={cn(
              "w-full",
              name !== "Free" && "bg-brand hover:bg-brand-dark"
            )}
            onClick={onSelectPlan}
          >
            <CreditCard size={16} className="mr-2" />
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export const SubscriptionGrid: React.FC = () => {
  const freePlan: PricingPlanProps = {
    name: "Free",
    price: 0,
    description: "Basic features for individuals just getting started",
    buttonText: "Start Free",
    features: [
      { name: "1 resume", included: true },
      { name: "Basic resume templates", included: true },
      { name: "Download as PDF", included: true },
      { name: "Manual job application tracking", included: true },
      { name: "AI resume analysis", included: false },
      { name: "Automated job applications", included: false },
      { name: "AI job matching", included: false },
      { name: "Priority support", included: false },
    ],
  };
  
  const proPlan: PricingPlanProps = {
    name: "Professional",
    price: 9.99,
    description: "Everything you need for a successful job search",
    buttonText: "Subscribe Now",
    isPopular: true,
    features: [
      { name: "Unlimited resumes", included: true },
      { name: "Premium resume templates", included: true },
      { name: "Download in all formats", included: true },
      { name: "Automated job tracking", included: true },
      { name: "AI resume optimization", included: true },
      { name: "Apply to 25 jobs/month", included: true },
      { name: "AI job recommendations", included: true },
      { name: "Standard support", included: true },
    ],
  };
  
  const premiumPlan: PricingPlanProps = {
    name: "Premium",
    price: 19.99,
    description: "Advanced features for job seekers who want the best",
    buttonText: "Go Premium",
    features: [
      { name: "Everything in Professional", included: true },
      { name: "Unlimited job applications", included: true },
      { name: "Advanced AI job matching", included: true },
      { name: "Interview preparation", included: true },
      { name: "Salary negotiation tools", included: true },
      { name: "Career coaching session", included: true },
      { name: "LinkedIn profile optimization", included: true },
      { name: "Priority support 24/7", included: true },
    ],
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SubscriptionCard {...freePlan} />
      <SubscriptionCard {...proPlan} />
      <SubscriptionCard {...premiumPlan} />
    </div>
  );
};
