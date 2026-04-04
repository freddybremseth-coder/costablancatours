
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Clock, Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { toursData, getLocalizedTour } from '@/data/tours.js';

function TourDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  const rawTour = toursData.find(t => t.id === id);
  
  useEffect(() => {
    if (!rawTour) {
      navigate('/tours');
    }
    window.scrollTo(0, 0);
  }, [rawTour, navigate]);

  if (!rawTour) return null;

  const tour = getLocalizedTour(rawTour, language);

  return (
    <>
      <Helmet>
        <title>{tour.name} - Costa Blanca Tours</title>
        <meta name="description" content={tour.shortDescription} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
            <Link to="/tours">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back') || 'Back to Tours'}
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50"
          >
            <div className="relative h-[40vh] md:h-[50vh] w-full">
              <img 
                src={tour.image} 
                alt={tour.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                    {tour.name}
                  </h1>
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-2xl shadow-lg">
                    {tour.price}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">
                      {t('tours.aboutExperience') || 'About this Experience'}
                    </h2>
                    <div 
                      className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: tour.fullDescription }}
                    />
                  </div>

                  {tour.highlights && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">
                        {t('tours.highlights') || 'Highlights'}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tour.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-muted-foreground">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.pricingTiers && (
                    <div className="pt-6 border-t border-border/50">
                      <h3 className="text-2xl font-semibold mb-6 text-foreground">
                        {t('tours.itineraryAndPricing') || 'Itinerary & Pricing Options'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tour.pricingTiers.map((tier, idx) => (
                          <div key={idx} className="bg-muted/30 border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col h-full">
                            <div className="flex flex-col mb-6 pb-4 border-b border-border/50 gap-2">
                              <h4 className="text-xl font-bold text-foreground">{tier.title}</h4>
                              <span className="text-2xl font-bold text-primary">{tier.price}</span>
                            </div>
                            
                            {tier.inclusions && (
                              <div className="mb-6">
                                <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                                  {t('tours.included') || 'Included'}
                                </h5>
                                <ul className="space-y-2">
                                  {tier.inclusions.map((inc, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-sm text-foreground">
                                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                      <span>{inc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="space-y-4 flex-grow mt-auto pt-4 border-t border-border/50">
                              {tier.itinerary.map((item, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                  <div className="font-semibold text-primary text-sm">{item.day}</div>
                                  <div className="text-muted-foreground text-sm leading-relaxed">{item.desc}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-2xl p-6 border border-border/50 sticky top-24">
                    <h3 className="font-semibold text-lg mb-4 text-foreground">
                      {t('tours.details') || 'Tour Details'}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{tour.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border/50">
                      <Button size="lg" className="w-full text-lg shadow-md" asChild>
                        <Link to={`/booking?tour=${tour.id}`}>
                          {t('tours.bookThisTour') || 'Book This Tour'}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default TourDetailPage;
