
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function TourCard({ tour, useShortDescription = false, className }) {
  const { id, name, shortDescription, fullDescription, duration, image, highlights, price } = tour;
  const { t } = useLanguage();

  const description = useShortDescription ? shortDescription : fullDescription;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-card shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-border/50 flex flex-col h-full",
        className
      )}
    >
      <div className="relative overflow-hidden flex-shrink-0 aspect-[4/3]">
        <img 
          src={image} 
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="text-white font-semibold text-lg drop-shadow-md">
            {duration && (
              <div className="flex items-center space-x-1.5 text-sm text-white/90 mb-1">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            )}
          </div>
          <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg font-bold shadow-lg">
            {price}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-semibold text-xl leading-snug text-foreground mb-3">
          {name}
        </h3>
        
        <p className="text-sm md:text-base leading-relaxed mb-6 text-muted-foreground flex-grow">
          {description}
        </p>

        {!useShortDescription && highlights && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-1.5 text-xs bg-muted px-2.5 py-1 rounded-md text-muted-foreground">
                  <Check className="h-3 w-3 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-border/50 flex gap-3">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/tour/${id}`}>
              {t('tours.learnMore') || 'Learn More'}
            </Link>
          </Button>
          <Button asChild className="flex-1 shadow-md hover:shadow-lg transition-all">
            <Link to={`/booking?tour=${id}`}>
              {t('tours.bookNow') || 'Book Now'}
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default TourCard;
