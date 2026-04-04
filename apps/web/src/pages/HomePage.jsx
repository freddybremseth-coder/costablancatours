
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TourCard from '@/components/TourCard.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { toursData, getLocalizedTour } from '@/data/tours.js';

function HomePage() {
  const { t, language } = useLanguage();
  
  const localizedTours = toursData.map(tour => getLocalizedTour(tour, language));

  return (
    <>
      <Helmet>
        <title>Costa Blanca Tours - {t('home.heroTitle')}</title>
        <meta name="description" content={t('home.heroSubtitle')} />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1602854127232-983309a47263" 
              alt="Costa Blanca Mediterranean coastline at sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            <div className="absolute inset-0 pattern-geometric opacity-20 mix-blend-overlay pointer-events-none"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                {t('home.heroTitle')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                {t('home.heroSubtitle')}
              </p>
              <Link to="/tours">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl bg-primary/90 hover:bg-primary text-primary-foreground border border-primary/20 backdrop-blur-sm">
                  {t('home.exploreBtn')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Brand Showcase Section */}
        <section className="py-24 bg-elegant-gradient relative">
          <div className="absolute inset-0 pattern-linen opacity-50 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/fdaae8f6-c2cb-4e61-863e-e79e6b571eca/5e1471de21621c8a783339a25d92fc19.png" 
                alt="Costa Blanca Tours"
                className="h-20 sm:h-24 md:h-28 w-auto mb-8 drop-shadow-sm"
              />
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 max-w-2xl text-foreground">
                {t('home.brandTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {t('home.brandDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* Why Choose Us */}
        <section className="py-20 bg-luxury-subtle relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">{t('home.whyTitle')}</h2>
              <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
                {t('home.whyDesc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 ring-1 ring-primary/20">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{t('home.smallGroups')}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {t('home.smallGroupsDesc')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6 ring-1 ring-secondary/20">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{t('home.localExpertise')}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {t('home.localExpertiseDesc')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 ring-1 ring-accent/20">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{t('home.allInclusive')}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {t('home.allInclusiveDesc')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* All Tours Grid */}
        <section className="py-20 bg-elegant-gradient relative">
          <div className="absolute inset-0 pattern-geometric opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">{t('home.featuredTitle') || 'Our Experiences'}</h2>
              <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
                {t('home.featuredDesc') || 'Discover our carefully curated selection of Mediterranean journeys.'}
              </p>
            </motion.div>

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

export default HomePage;
