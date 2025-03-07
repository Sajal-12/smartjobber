
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Award, Clock, Brain, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatedGradient, GlassCard } from '@/components/animations/AnimatedGradient';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const showComingSoonNotification = () => {
    toast({
      title: "Coming Soon",
      description: "This feature will be available in the next update.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Now in Beta - Limited Spots Available
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Automate Your</span>
              <span className="bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent">Job Hunt</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
              AI-powered resume optimization and job application automation to help you land your dream job faster, with less effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
              <Link to="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={showComingSoonNotification}>
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl" />
          <div className="absolute top-3/4 right-1/3 w-60 h-60 bg-brand/20 rounded-full filter blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Smart Features for Modern Job Seekers
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Our AI-powered platform handles the tedious parts of job hunting so you can focus on interviews.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-primary" />}
              title="AI Resume Optimization"
              description="Our AI analyzes your resume and suggests improvements to make it stand out to recruiters and bypass ATS systems."
            />
            <FeatureCard
              icon={<Briefcase className="h-10 w-10 text-primary" />}
              title="Automated Applications"
              description="Apply to multiple jobs with a single click - our system automatically tailors your application for each position."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-primary" />}
              title="Job Tracking Dashboard"
              description="Keep track of all your applications, interviews, and follow-ups in one organized dashboard."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-primary" />}
              title="AI Job Matching"
              description="Our AI matches your skills and preferences to jobs where you have the highest chance of success."
            />
            <FeatureCard
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Interview Preparation"
              description="Get personalized interview preparation tips and practice questions based on the job you're applying for."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-primary" />}
              title="Smart Notifications"
              description="Receive timely reminders for follow-ups and upcoming interviews - never miss an opportunity."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Three simple steps to revolutionize your job search process
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <StepCard
              number="1"
              title="Create Your Profile"
              description="Upload your resume or build one from scratch with our AI-powered resume builder."
            />
            <StepCard
              number="2"
              title="Set Your Preferences"
              description="Tell us what jobs you're interested in and let our AI find the perfect matches."
            />
            <StepCard
              number="3"
              title="Apply & Track"
              description="Apply to jobs with one click and track your applications in your personalized dashboard."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Choose the plan that fits your job search needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <PricingCard
              title="Free"
              price="$0"
              description="Basic job search tools to get you started"
              features={[
                "AI Resume Analysis",
                "5 Job Applications",
                "Basic Job Tracking",
                "Email Support"
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
              popular={false}
              href="/dashboard"
            />
            <PricingCard
              title="Pro"
              price="$19"
              period="/month"
              description="Everything you need for a serious job search"
              features={[
                "Advanced AI Resume Optimization",
                "Unlimited Job Applications",
                "Interview Preparation",
                "Priority Support",
                "Job Match Scoring"
              ]}
              buttonText="Start Free Trial"
              buttonVariant="default"
              popular={true}
              href="/dashboard"
            />
            <PricingCard
              title="Enterprise"
              price="$49"
              period="/month"
              description="For teams and career services professionals"
              features={[
                "Everything in Pro",
                "Team Collaboration",
                "White-label Reports",
                "API Access",
                "Dedicated Account Manager",
                "Custom Integrations"
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
              popular={false}
              onClick={showComingSoonNotification}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedGradient containerClassName="rounded-xl p-8 md:p-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Ready to Transform Your Job Search?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Join thousands of job seekers who are saving time and landing better jobs with SmartJobber.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg w-full sm:w-auto">
                    Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedGradient>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-base font-medium">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Testimonials</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Career Tips</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Resume Templates</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Job Search Guide</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Press</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Cookies</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 SmartJobber. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <GlassCard className="p-6 h-full flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-3 inline-flex">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </GlassCard>
  );
};

// Component for how it works steps
const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Component for pricing cards
interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular: boolean;
  href?: string;
  onClick?: () => void;
}

const PricingCard = ({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonVariant = "default",
  popular,
  href,
  onClick
}: PricingCardProps) => {
  const button = (
    <Button 
      variant={buttonVariant} 
      size="lg" 
      className={cn(
        "w-full",
        popular && buttonVariant === "default" && "bg-primary hover:bg-primary/90"
      )}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );

  return (
    <GlassCard className={cn(
      "p-6 flex flex-col h-full",
      popular && "border-primary shadow-lg"
    )}>
      {popular && (
        <div className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full w-fit mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 mb-2 flex items-baseline">
        <span className="text-3xl font-bold">{price}</span>
        {period && <span className="ml-1 text-muted-foreground">{period}</span>}
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      {href ? <Link to={href}>{button}</Link> : button}
    </GlassCard>
  );
};

export default Index;
