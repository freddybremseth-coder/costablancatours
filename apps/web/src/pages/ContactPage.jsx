
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTour: '',
    travelDates: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const tours = [
    'Vineyard Visit & Wine Tasting',
    'Olive Oil Tasting Experience',
    'Guadalest Village Tour',
    'Romantic Sunset Tour',
    'Almond Grove Tour',
    'Paella Cooking Class',
    'Coastal Hiking',
    'Traditional Market Tour',
    'Herb Garden Experience',
    'Sunset Coastal Experience'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, preferredTour: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast.success('Message sent successfully. We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredTour: '',
        travelDates: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Costa Blanca Tours</title>
        <meta name="description" content="Get in touch with Costa Blanca Tours. Book your intimate small-group tour or ask us any questions about our experiences." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-elegant-gradient relative py-24 overflow-hidden">
          <div className="absolute inset-0 pattern-geometric opacity-40 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground" style={{letterSpacing: '-0.02em'}}>
                Get in touch
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground font-light">
                Ready to explore the Costa Blanca? We'd love to hear from you. Send us a message and we'll help you plan your perfect experience.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="divider-elegant -mt-8 mb-8 relative z-20"></div>

        {/* Contact Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-luxury-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl border border-border/60 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                  <h2 className="text-2xl font-semibold mb-8 text-foreground">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                      <Label htmlFor="name" className="text-foreground/80">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-background/50 border-border/60 focus:border-primary/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground/80">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-background/50 border-border/60 focus:border-primary/50 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground/80">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 bg-background/50 border-border/60 focus:border-primary/50 transition-colors"
                        placeholder="+34 123 456 789"
                      />
                    </div>

                    <div>
                      <Label htmlFor="preferredTour" className="text-foreground/80">Preferred tour</Label>
                      <Select value={formData.preferredTour} onValueChange={handleSelectChange}>
                        <SelectTrigger className="mt-2 bg-background/50 border-border/60 focus:border-primary/50 transition-colors">
                          <SelectValue placeholder="Select a tour" />
                        </SelectTrigger>
                        <SelectContent>
                          {tours.map((tour, index) => (
                            <SelectItem key={index} value={tour}>
                              {tour}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="travelDates" className="text-foreground/80">Preferred travel dates</Label>
                      <Input
                        id="travelDates"
                        name="travelDates"
                        type="text"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="mt-2 bg-background/50 border-border/60 focus:border-primary/50 transition-colors"
                        placeholder="e.g., June 15-20, 2026"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground/80">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-2 bg-background/50 border-border/60 focus:border-primary/50 transition-colors resize-none"
                        placeholder="Tell us about your interests and any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-10 lg:pt-8"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact information</h2>
                  <p className="leading-relaxed text-muted-foreground font-light">
                    We typically respond within 24 hours. For urgent inquiries, please call us directly.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-5 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-medium mb-1 text-foreground">Email</h3>
                      <a href="mailto:info@costablankatours.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@costablankatours.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center ring-1 ring-secondary/20 group-hover:bg-secondary/20 transition-colors">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-medium mb-1 text-foreground">Phone</h3>
                      <a href="tel:+34123456789" className="text-muted-foreground hover:text-primary transition-colors">
                        +34 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center ring-1 ring-accent/20 group-hover:bg-accent/20 transition-colors">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-medium mb-1 text-foreground">Location</h3>
                      <p className="text-muted-foreground">
                        Costa Blanca, Spain
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-elegant-gradient rounded-2xl p-8 mt-10 border border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 pattern-linen opacity-40 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-6 text-foreground">Office hours</h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between items-center border-b border-border/40 pb-3">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-border/40 pb-3">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium text-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
