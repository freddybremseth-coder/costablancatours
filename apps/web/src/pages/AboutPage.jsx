
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, MapPin, Users, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Costa Blanca Tours</title>
        <meta name="description" content="Learn about Costa Blanca Tours' philosophy of intimate, personalized experiences. Small groups, local expertise, and authentic connections to the Mediterranean coast." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-elegant-gradient relative py-24 overflow-hidden">
          <div className="absolute inset-0 pattern-linen opacity-60 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground" style={{letterSpacing: '-0.02em'}}>
                About Costa Blanca Tours
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground font-light">
                We believe the best travel experiences happen when you slow down, connect deeply, and share moments with a small group of like-minded explorers.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="divider-elegant -mt-8 mb-8 relative z-20"></div>

        {/* Philosophy Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-luxury-subtle opacity-40 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none text-muted-foreground"
            >
              <h2 className="text-3xl font-semibold mb-8 text-foreground text-center">Our philosophy</h2>
              <p className="leading-relaxed mb-6">
                Costa Blanca Tours was born from a simple observation: the most memorable travel moments happen in small groups, guided by locals who genuinely love their home. We've spent years exploring every corner of the Costa Blanca, building relationships with winemakers, chefs, artisans, and farmers who share our passion for authentic experiences.
              </p>
              <p className="leading-relaxed mb-6">
                We limit every tour to just 4 guests. This isn't arbitrary — it's the sweet spot where everyone can ask questions, try everything, and feel like they're exploring with friends rather than following a tour guide. You'll never feel rushed, never miss a photo opportunity, and never wonder if you're getting the full story.
              </p>
              <p className="leading-relaxed">
                Our all-inclusive approach means you can relax and enjoy. Wine, beer, tapas, and refreshments are always included. No awkward moments wondering if you should tip, no surprise costs at the end. Just pure enjoyment of the Costa Blanca's incredible food, wine, and landscapes.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* Values Grid */}
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
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">What sets us apart</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6 ring-1 ring-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Maximum 4 guests</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Small groups create space for genuine conversations, personalized attention, and the flexibility to adapt each tour to the group's interests. You're not just a number — you're part of a carefully curated experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-6 ring-1 ring-secondary/20">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Local expertise</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Our guides were born and raised on the Costa Blanca. They know the family behind every vineyard, the story behind every village, and the best time to visit each location. This isn't rehearsed knowledge — it's lived experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6 ring-1 ring-accent/20">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">All inclusive</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Wine, beer, tapas, and refreshments are always included. We want you to taste everything, try everything, and never worry about the bill. Our relationships with local producers mean you'll enjoy premium products without premium prices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6 ring-1 ring-primary/20">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Authentic connections</h3>
                <p className="leading-relaxed text-muted-foreground">
                  We don't just show you the Costa Blanca — we introduce you to it. Meet the winemaker who tends the vines, the chef who sources from the morning market, the artisan who keeps traditional crafts alive. These connections transform a tour into a memory.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* Closing Statement */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-luxury-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-foreground">Join us on the Costa Blanca</h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground font-light">
                Whether you're a wine enthusiast, a food lover, or simply someone who appreciates beautiful landscapes and genuine hospitality, we'd love to share our corner of the Mediterranean with you. Every tour is a chance to slow down, savor the moment, and discover why the Costa Blanca has captured our hearts.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
