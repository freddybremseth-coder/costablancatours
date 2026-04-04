
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { LanguageSelector } from './LanguageSelector.jsx';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/tours', label: t('nav.tours') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-transparent z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex py-6 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img 
              src="https://horizons-cdn.hostinger.com/fdaae8f6-c2cb-4e61-863e-e79e6b571eca/5e1471de21621c8a783339a25d92fc19.png" 
              alt="Costa Blanca Tours"
              className="h-20 sm:h-24 md:h-32 w-auto transition-transform hover:scale-105 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSelector />
            <Button asChild className="shadow-md hover:shadow-lg transition-all rounded-full px-6">
              <Link to="/booking">{t('nav.bookNow')}</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-medium transition-colors hover:text-primary ${
                        isActive(link.path) ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-border">
                    <Button asChild className="w-full shadow-md" size="lg">
                      <Link to="/booking" onClick={() => setIsOpen(false)}>{t('nav.bookNow')}</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
