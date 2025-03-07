
import React, { useState } from 'react';
import { X, Mail, Lock, User, Github, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { AnimatedGradient } from './animations/AnimatedGradient';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose,
  initialMode = 'login'
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [isOpen, initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Authentication logic would go here
      
      // For demo purposes, simulate a successful login/signup
      setTimeout(() => {
        toast({
          title: mode === 'login' ? 'Welcome back!' : 'Account created successfully!',
          description: mode === 'login' 
            ? "You've successfully logged in."
            : "Your account has been created. Welcome to SmartJobber!",
        });
        
        onClose();
        // Here you would typically redirect to dashboard or home
      }, 1500);
    } catch (error) {
      toast({
        title: "Authentication error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 sm:max-w-[480px] overflow-hidden rounded-xl">
        <AnimatedGradient containerClassName="w-full h-full absolute">
          <div className="relative z-10 p-6 backdrop-blur-sm">
            <div className="absolute top-2 right-2">
              <Button variant="ghost" className="h-8 w-8 p-0" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                {mode === 'login' ? 'Welcome back' : 'Create an account'}
              </h2>
              <p className="text-smart-500 mt-2 max-w-xs mx-auto">
                {mode === 'login' 
                  ? 'Sign in to access your SmartJobber account' 
                  : 'Join SmartJobber and start your job search journey'}
              </p>
            </div>
            
            <Tabs 
              defaultValue={mode} 
              value={mode} 
              onValueChange={(value) => setMode(value as 'login' | 'signup')}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Log in</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="mt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-smart-500" size={18} />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="you@example.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm text-brand hover:text-brand-dark hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-smart-500" size={18} />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10" 
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand hover:bg-brand-dark" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log in"}
                  </Button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-smart-200 dark:border-smart-800"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-background px-2 text-smart-500">or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" type="button" disabled={isLoading}>
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" type="button" disabled={isLoading}>
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="mt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-smart-500" size={18} />
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="John Doe" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-smart-500" size={18} />
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="you@example.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-smart-500" size={18} />
                      <Input 
                        id="signup-password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10" 
                        required
                      />
                    </div>
                    <p className="text-sm text-smart-500">
                      Password must be at least 8 characters long
                    </p>
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand hover:bg-brand-dark" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-smart-200 dark:border-smart-800"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-background px-2 text-smart-500">or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" type="button" disabled={isLoading}>
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" type="button" disabled={isLoading}>
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-smart-500 mt-6">
                    By signing up, you agree to our{" "}
                    <a href="#" className="text-brand hover:underline">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="text-brand hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedGradient>
      </DialogContent>
    </Dialog>
  );
};
