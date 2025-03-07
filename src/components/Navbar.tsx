
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthModal } from './AuthModal';

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
}> = ({ href, children, className }) => (
  <Link
    to={href}
    className={cn(
      "text-smart-600 hover:text-brand transition-colors duration-200 relative px-3 py-2",
      "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300",
      "hover:after:w-full",
      className
    )}
  >
    {children}
  </Link>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
          isScrolled ? "bg-white/80 dark:bg-smart-950/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-brand flex items-center space-x-2"
          >
            <span className="bg-brand text-white w-8 h-8 rounded-md flex items-center justify-center">S</span>
            <span>SmartJobber</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <div className="relative group px-3 py-2">
              <button className="text-smart-600 hover:text-brand flex items-center space-x-1 transition-colors duration-200">
                <span>Resources</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full mt-1 bg-white dark:bg-smart-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 p-2 glass-effect">
                <Link to="/blog" className="block px-4 py-2 hover:bg-smart-100 dark:hover:bg-smart-800 rounded-md">Blog</Link>
                <Link to="/templates" className="block px-4 py-2 hover:bg-smart-100 dark:hover:bg-smart-800 rounded-md">Resume Templates</Link>
                <Link to="/guides" className="block px-4 py-2 hover:bg-smart-100 dark:hover:bg-smart-800 rounded-md">Job Search Guides</Link>
              </div>
            </div>
          </nav>

          {/* Call to action buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              onClick={() => openAuthModal('login')}
            >
              Log in
            </Button>
            <Button
              variant="default"
              className="bg-brand hover:bg-brand-dark text-white"
              onClick={() => openAuthModal('signup')}
            >
              Sign up
            </Button>
          </div>

          {/* Mobile navigation toggle */}
          <button
            className="md:hidden text-smart-900 dark:text-smart-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 z-40 bg-white dark:bg-smart-950 transition-all duration-300 ease-in-out pt-20",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-xl font-medium py-2 border-b border-smart-200 dark:border-smart-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-xl font-medium py-2 border-b border-smart-200 dark:border-smart-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-xl font-medium py-2 border-b border-smart-200 dark:border-smart-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="py-2 border-b border-smart-200 dark:border-smart-800">
              <div className="text-xl font-medium">Resources</div>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/blog"
                  className="text-lg text-smart-600 dark:text-smart-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/templates"
                  className="text-lg text-smart-600 dark:text-smart-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume Templates
                </Link>
                <Link
                  to="/guides"
                  className="text-lg text-smart-600 dark:text-smart-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Job Search Guides
                </Link>
              </div>
            </div>
            <div className="pt-4 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  openAuthModal('login');
                  setIsMobileMenuOpen(false);
                }}
              >
                Log in
              </Button>
              <Button
                variant="default"
                className="w-full bg-brand hover:bg-brand-dark text-white"
                onClick={() => {
                  openAuthModal('signup');
                  setIsMobileMenuOpen(false);
                }}
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="h-16"></div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};
