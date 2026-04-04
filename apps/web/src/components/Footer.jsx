
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="https://horizons-cdn.hostinger.com/fdaae8f6-c2cb-4e61-863e-e79e6b571eca/5e1471de21621c8a783339a25d92fc19.png" 
                alt="Costa Blanca Tours"
                className="h-10 sm:h-12 w-auto transition-transform hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider">{t('footer.quickLinks')}</span>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/tours" className="text-sm hover:text-primary transition-colors">
                {t('nav.tours')}
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider">{t('footer.getInTouch')}</span>
            <div className="mt-4 flex flex-col space-y-3">
              <a href="mailto:info@costablankatours.com" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@costablankatours.com</span>
              </a>
              <a href="tel:+34123456789" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+34 123 456 789</span>
              </a>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm">
            © {currentYear} {t('footer.rights')}
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
