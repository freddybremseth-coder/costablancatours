
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { CalendarPlus as CalendarIcon, CheckCircle2, Minus, Plus, Users, CreditCard, MapPin } from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { toursData, getLocalizedTour } from '@/data/tours.js';

function BookingPage() {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselectedTourId = searchParams.get('tour');
  
  const [selectedTourId, setSelectedTourId] = useState('');
  const [date, setDate] = useState(null);
  const [participants, setParticipants] = useState(2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const localizedTours = toursData.map(tour => getLocalizedTour(tour, language));

  // Pre-select tour if passed in URL
  useEffect(() => {
    if (preselectedTourId) {
      const matchedTour = localizedTours.find(t => t.id === preselectedTourId);
      if (matchedTour) {
        setSelectedTourId(matchedTour.id);
      }
    }
  }, [preselectedTourId, localizedTours]);

  const selectedTour = localizedTours.find(t => t.id === selectedTourId);
  // Extract numeric price from string like "€189" or "From €800"
  const getNumericPrice = (priceStr) => {
    if (!priceStr) return 0;
    const match = priceStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };
  
  const basePrice = selectedTour ? getNumericPrice(selectedTour.price) : 0;
  const totalPrice = basePrice * participants;

  // Only allow Mondays (1), Wednesdays (3), and Fridays (5)
  const isDateDisabled = (date) => {
    const day = date.getDay();
    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
    return day !== 1 && day !== 3 && day !== 5 || isPast;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const updateParticipants = (delta) => {
    const newValue = participants + delta;
    if (newValue >= 1 && newValue <= 4) { // Max 4 guests
      setParticipants(newValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTourId || !date || !formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const bookingRecord = {
        id: `CBT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        tourName: selectedTour.name,
        date: date.toISOString(),
        participants,
        customerInfo: formData,
        totalPrice,
        timestamp: new Date().toISOString()
      };

      // Save to localStorage
      const existingBookings = JSON.parse(localStorage.getItem('cbt_bookings') || '[]');
      localStorage.setItem('cbt_bookings', JSON.stringify([...existingBookings, bookingRecord]));

      setBookingDetails(bookingRecord);
      setIsSuccess(true);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const resetForm = () => {
    setSelectedTourId('');
    setDate(null);
    setParticipants(2);
    setFormData({ name: '', email: '', phone: '', notes: '' });
    setIsSuccess(false);
    setBookingDetails(null);
  };

  return (
    <>
      <Helmet>
        <title>{t('booking.pageTitle')} - Costa Blanca Tours</title>
        <meta name="description" content={t('booking.pageDesc')} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pb-24">
        {/* Hero Section */}
        <section className="bg-elegant-gradient relative py-16 md:py-24 overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 pattern-geometric opacity-30 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-foreground" style={{letterSpacing: '-0.02em'}}>
                {isSuccess ? t('booking.successTitle') : t('booking.title')}
              </h1>
              <p className="text-lg md:text-xl mx-auto leading-relaxed text-muted-foreground font-light max-w-2xl">
                {isSuccess 
                  ? t('booking.successSubtitle')
                  : t('booking.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          {isSuccess && bookingDetails ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-primary/20 shadow-xl overflow-hidden">
                <div className="bg-primary/10 p-8 text-center border-b border-primary/10">
                  <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{t('booking.successTitle')}</h2>
                  <p className="text-muted-foreground">{t('booking.reference')} <span className="font-mono font-medium text-foreground">{bookingDetails.id}</span></p>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{t('booking.tour')}</p>
                        <p className="font-medium">{bookingDetails.tourName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{t('booking.date')}</p>
                        <p className="font-medium">{format(new Date(bookingDetails.date), 'EEEE, MMMM do, yyyy')}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{t('booking.guests')}</p>
                        <p className="font-medium">{bookingDetails.participants}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{t('booking.totalPaid')}</p>
                        <p className="font-medium text-primary text-lg">€{bookingDetails.totalPrice}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-6 mt-6">
                      <h3 className="font-medium mb-4">{t('booking.guestDetails')}</h3>
                      <p className="text-sm mb-1"><span className="text-muted-foreground w-20 inline-block">Name:</span> {bookingDetails.customerInfo.name}</p>
                      <p className="text-sm mb-1"><span className="text-muted-foreground w-20 inline-block">Email:</span> {bookingDetails.customerInfo.email}</p>
                      <p className="text-sm"><span className="text-muted-foreground w-20 inline-block">Phone:</span> {bookingDetails.customerInfo.phone}</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={resetForm} variant="outline" className="w-full sm:w-auto">
                      {t('booking.bookAnother')}
                    </Button>
                    <Button asChild className="w-full sm:w-auto">
                      <Link to="/tours">{t('booking.exploreMore')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Booking Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-8"
              >
                <Card className="shadow-lg border-border/50">
                  <CardContent className="p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      
                      {/* Section 1: Tour Details */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-border pb-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <h2 className="text-xl font-semibold">{t('booking.step1')}</h2>
                        </div>
                        
                        <div className="grid gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="tour-select">{t('booking.selectTourPrompt')}</Label>
                            <Select value={selectedTourId} onValueChange={setSelectedTourId} required>
                              <SelectTrigger id="tour-select" className="h-12 bg-background">
                                <SelectValue placeholder={t('booking.selectTourPlaceholder')} />
                              </SelectTrigger>
                              <SelectContent>
                                {localizedTours.map((tour) => (
                                  <SelectItem key={tour.id} value={tour.id}>
                                    {tour.name} — {tour.price}/{t('tours.perPerson')}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label>{t('booking.selectDate')}</Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full h-12 justify-start text-left font-normal bg-background",
                                      !date && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                                    {date ? format(date, "PPP") : <span>{t('booking.pickDate')}</span>}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={isDateDisabled}
                                    initialFocus
                                    className="p-3 pointer-events-auto"
                                  />
                                  <div className="p-3 border-t border-border text-xs text-muted-foreground text-center bg-muted/50">
                                    {t('booking.tourDaysNote')}
                                  </div>
                                </PopoverContent>
                              </Popover>
                            </div>

                            <div className="space-y-2">
                              <Label>{t('booking.guests')}</Label>
                              <div className="flex items-center h-12 border border-input rounded-md bg-background overflow-hidden">
                                <button 
                                  type="button"
                                  onClick={() => updateParticipants(-1)}
                                  disabled={participants <= 1}
                                  className="px-4 h-full hover:bg-muted disabled:opacity-50 transition-colors flex items-center justify-center border-r border-input"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <div className="flex-1 text-center font-medium flex items-center justify-center gap-2">
                                  <Users className="h-4 w-4 text-muted-foreground" />
                                  {participants}
                                </div>
                                <button 
                                  type="button"
                                  onClick={() => updateParticipants(1)}
                                  disabled={participants >= 4}
                                  className="px-4 h-full hover:bg-muted disabled:opacity-50 transition-colors flex items-center justify-center border-l border-input"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section 2: Guest Details */}
                      <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-2 border-b border-border pb-2">
                          <Users className="h-5 w-5 text-primary" />
                          <h2 className="text-xl font-semibold">{t('booking.step2')}</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">{t('booking.nameLabel')}</Label>
                            <Input 
                              id="name" 
                              name="name" 
                              value={formData.name} 
                              onChange={handleInputChange} 
                              placeholder={t('booking.namePlaceholder')} 
                              required 
                              className="h-12 bg-background text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">{t('booking.emailLabel')}</Label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              value={formData.email} 
                              onChange={handleInputChange} 
                              placeholder={t('booking.emailPlaceholder')} 
                              required 
                              className="h-12 bg-background text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="phone">{t('booking.phoneLabel')}</Label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              type="tel" 
                              value={formData.phone} 
                              onChange={handleInputChange} 
                              placeholder={t('booking.phonePlaceholder')} 
                              required 
                              className="h-12 bg-background text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="notes">{t('booking.notesLabel')}</Label>
                            <Textarea 
                              id="notes" 
                              name="notes" 
                              value={formData.notes} 
                              onChange={handleInputChange} 
                              placeholder={t('booking.notesPlaceholder')} 
                              className="min-h-[100px] bg-background text-foreground placeholder:text-muted-foreground resize-y"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full h-14 text-lg shadow-md hover:shadow-lg transition-all"
                          disabled={isSubmitting || !selectedTourId || !date || !formData.name || !formData.email || !formData.phone}
                        >
                          {isSubmitting ? t('booking.processingBtn') : t('booking.submitBtn')}
                        </Button>
                        <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                          <CreditCard className="h-3 w-3" /> {t('booking.securePayment')}
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Order Summary Sidebar */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-4 sticky top-24"
              >
                <Card className="bg-muted/50 border-border/50 shadow-md overflow-hidden">
                  <div className="bg-primary/10 p-4 border-b border-primary/10">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      {t('booking.summaryTitle')}
                    </h3>
                  </div>
                  <CardContent className="p-6 space-y-6">
                    {selectedTour ? (
                      <>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{selectedTour.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {date ? format(date, 'EEEE, MMMM do, yyyy') : t('booking.dateNotSelected')}
                          </p>
                        </div>
                        
                        <div className="space-y-3 text-sm border-t border-border pt-4">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t('booking.pricePerPerson')}</span>
                            <span className="font-medium">€{basePrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t('booking.guests')}</span>
                            <span className="font-medium">x {participants}</span>
                          </div>
                        </div>
                        
                        <div className="border-t border-border pt-4 flex justify-between items-end">
                          <span className="font-semibold">{t('booking.total')}</span>
                          <span className="text-2xl font-bold text-primary">€{totalPrice}</span>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground flex flex-col items-center gap-3">
                        <MapPin className="h-8 w-8 opacity-20" />
                        <p>{t('booking.selectTourToSeeSummary')}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <div className="mt-6 p-4 rounded-xl bg-luxury-subtle border border-primary/10 text-sm text-foreground/80">
                  <h4 className="font-semibold mb-2 text-foreground">{t('booking.whyBookTitle')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{t('booking.whyBook1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{t('booking.whyBook2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{t('booking.whyBook3')}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BookingPage;
