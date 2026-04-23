import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      {/* Luxury background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-accent font-display font-bold text-sm tracking-[0.2em] uppercase">
                Contact Us
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-6 leading-tight"
            >
              Ready to
              <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Get Started?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-lg"
            >
              Get in touch today and let us show you how our premium dispatch services can elevate your revenue and transform your operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ x: 5 }}
                className="group flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Phone</div>
                  <a href="tel:+13072413646" className="font-display font-bold text-foreground hover:text-accent transition-colors duration-300 text-lg">
                    +1 (307) 241-3646
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="group flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                  <a href="mailto:Support@nobel-dispatcher.com" className="font-display font-bold text-foreground hover:text-accent transition-colors duration-300 text-lg">
                    Support@nobel-dispatcher.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="group flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Address</div>
                  <span className="font-display font-bold text-foreground text-lg leading-tight">
                    30 N Gould St Ste N, Sheridan, WY 82801, US
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 shadow-2xl shadow-accent/10 p-8 lg:p-10 space-y-6"
            >
              {/* Luxury form decoration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="text-sm font-semibold text-foreground mb-2 block tracking-wide">Name</label>
                    <Input 
                      placeholder="Enter your full name" 
                      className="bg-background/80 backdrop-blur-sm border-accent/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 h-12" 
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="text-sm font-semibold text-foreground mb-2 block tracking-wide">Phone</label>
                    <Input 
                      placeholder="(555) 123-4567" 
                      className="bg-background/80 backdrop-blur-sm border-accent/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 h-12" 
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="text-sm font-semibold text-foreground mb-2 block tracking-wide">Email</label>
                  <Input 
                    placeholder="your@email.com" 
                    type="email" 
                    className="bg-background/80 backdrop-blur-sm border-accent/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 h-12" 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="text-sm font-semibold text-foreground mb-2 block tracking-wide">MC Number</label>
                  <Input 
                    placeholder="Your MC number" 
                    className="bg-background/80 backdrop-blur-sm border-accent/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 h-12" 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="text-sm font-semibold text-foreground mb-2 block tracking-wide">Message</label>
                  <Textarea 
                    placeholder="Tell us about your dispatch needs..." 
                    rows={4} 
                    className="bg-background/80 backdrop-blur-sm border-accent/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none" 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent font-display font-bold h-14 text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
