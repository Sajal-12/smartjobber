
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  FileText, 
  Briefcase, 
  Calendar, 
  Search, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  User,
  Bell,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}> = ({ icon, label, href, active }) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md transition-all",
      active 
        ? "bg-brand text-white shadow-md"
        : "text-smart-600 hover:bg-smart-100 dark:text-smart-300 dark:hover:bg-smart-800"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // Logout logic would go here
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    // Redirect to home page
  };

  const renderNavItems = () => (
    <>
      <NavItem 
        icon={<Home size={20} />} 
        label="Dashboard" 
        href="/dashboard" 
        active={isActiveRoute('/dashboard')} 
      />
      <NavItem 
        icon={<FileText size={20} />} 
        label="Resumes" 
        href="/dashboard/resumes" 
        active={isActiveRoute('/dashboard/resumes')} 
      />
      <NavItem 
        icon={<Briefcase size={20} />} 
        label="Jobs" 
        href="/dashboard/jobs" 
        active={isActiveRoute('/dashboard/jobs')} 
      />
      <NavItem 
        icon={<Calendar size={20} />} 
        label="Calendar" 
        href="/dashboard/calendar" 
        active={isActiveRoute('/dashboard/calendar')} 
      />
      <NavItem 
        icon={<Search size={20} />} 
        label="Job Search" 
        href="/dashboard/search" 
        active={isActiveRoute('/dashboard/search')} 
      />
      <NavItem 
        icon={<Settings size={20} />} 
        label="Settings" 
        href="/dashboard/settings" 
        active={isActiveRoute('/dashboard/settings')} 
      />
    </>
  );

  return (
    <div className="min-h-screen flex bg-smart-50 dark:bg-smart-900">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-smart-950 shadow-md transition-transform duration-300 lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 px-6 flex items-center border-b border-smart-200 dark:border-smart-800">
          <Link to="/" className="text-xl font-bold text-brand flex items-center space-x-2">
            <span className="bg-brand text-white w-8 h-8 rounded-md flex items-center justify-center">S</span>
            <span>SmartJobber</span>
          </Link>
        </div>
        
        <div className="p-4 space-y-1">
          {renderNavItems()}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-smart-600 hover:text-red-500 hover:bg-red-50 dark:text-smart-300 dark:hover:bg-red-900/20"
            onClick={handleLogout}
          >
            <LogOut size={20} className="mr-3" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-smart-950 shadow-sm px-4 flex items-center justify-between z-10">
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="text-smart-600 dark:text-smart-300"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
          
          <div className="hidden lg:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-smart-600 dark:text-smart-300"
            >
              <Menu size={20} />
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-smart-600 dark:text-smart-300 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 px-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-smart-500">Professional Plan</span>
                  </div>
                  <ChevronDown size={16} className="text-smart-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-smart-500">john.doe@example.com</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/profile" className="flex items-center cursor-pointer">
                    <User size={16} className="mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/settings" className="flex items-center cursor-pointer">
                    <Settings size={16} className="mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer">
                  <LogOut size={16} className="mr-2" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => {
            setSidebarOpen(false);
            setMobileMenuOpen(false);
          }}
        />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
