
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TourCard from '@/components/TourCard.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { toursData, getLocalizedTour } from '@/data/tours.js';

function ToursPage() {
  const { t, language } = useLanguage();
  
  const localizedTours = toursData.map(tour => getLocalizedTour(tour, language));

  return (
    <>
      <Helmet>
        <title>{t('tours.pageTitle')} - Costa Blanca Tours</title>
        <meta name="description" content={t('tours.pageDesc')} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Introduction Section */}
        <section className="bg-elegant-gradient relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 pattern-geometric opacity-40 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
                Curated For The Senses
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight tracking-tight">
                Discover the Soul of the Mediterranean
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
                Embark on intimate journeys crafted to awaken your senses. With a strict maximum of four guests per experience, we guarantee personal connection, all-inclusive luxury, and moments that transform into lifelong memories. Taste the salt in the air, feel the warmth of the sun-drenched cobblestones, and let us show you the true magic of the Costa Blanca.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="divider-elegant -mt-8 mb-12 relative z-20"></div>

        {/* Optimized Tours Grid */}
        <section className="pb-24 relative">
          <div className="absolute inset-0 bg-luxury-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localizedTours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="h-full"
                >
                  <TourCard 
                    tour={tour} 
                    useShortDescription={true}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ToursPage;
