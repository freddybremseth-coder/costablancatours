
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
  const exclusiveTours = localizedTours.filter(tour => tour.inquiryOnly);
  const otherTours = localizedTours.filter(tour => !tour.inquiryOnly);

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

        {exclusiveTours.length > 0 && (
          <section className="py-10 pb-20 relative" id="exclusive-experiences">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                  {language === 'no' ? 'Privat · Skreddersydd · Smak' : 'Private · Bespoke · Taste'}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4 text-foreground">
                  {language === 'no' ? 'Eksklusive mat-, vin- og olivenopplevelser' : 'Exclusive wine, olive oil & gastronomy'}
                </h2>
                <p className="text-lg max-w-3xl text-muted-foreground">
                  {language === 'no'
                    ? 'Opplev produsentene, naturen og maten bak det ekte innlandet. Alle opplevelsene planlegges individuelt for inntil fire gjester. Datoer, transport, smaking og restauranter må bekreftes før bestilling.'
                    : 'Meet the growers and winemakers, discover the countryside and sit down for local food. Each journey is arranged individually for up to four guests; visits, transfers, tastings and restaurants require confirmation.'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exclusiveTours.map(tour => (
                  <TourCard key={tour.id} tour={tour} useShortDescription={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other tours */}
        <section className="pb-24 relative">
          <div className="absolute inset-0 bg-luxury-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              {language === 'no' ? 'Flere opplevelser' : 'More experiences'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherTours.map((tour, index) => (
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
