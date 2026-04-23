
import { motion } from "framer-motion";
import { DollarSign, FileText, Headphones, Building2, Route, Shield, Star, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Premium Dispatching",
    description: "Elite load booking and expert rate negotiation to maximize your revenue potential with precision timing.",
    price: "From 5%",
    features: ["Top market rates", "Instant booking", "Revenue optimization"],
    popular: true,
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Comprehensive paperwork handling including BOLs, rate confirmations, and complete broker setup packets.",
    price: "From 5%",
    features: ["Digital processing", "24hr completion", "Error-free guarantee"],
  },
  {
    icon: Headphones,
    title: "24/7 Elite Support",
    description: "Round-the-clock premium dispatcher support with guaranteed response times and expert assistance.",
    price: "Included",
    features: ["Instant response", "Expert dispatchers", "Multi-lingual"],
  },
  {
    icon: Building2,
    title: "Factoring Service",
    description: "Accelerated payment solutions ensuring you never wait for your hard-earned money with same-day processing.",
    price: "From 5%",
    features: ["Same-day funding", "99% approval", "No hidden fees"],
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    description: "AI-powered optimized routing to eliminate deadhead miles and maximize profitable load time efficiency.",
    price: "Included",
    features: ["AI optimization", "Fuel efficiency", "Time savings"],
  },
  {
    icon: Shield,
    title: "Compliance & Safety",
    description: "Complete DOT compliance management with regulatory guidance and advanced safety monitoring services.",
    price: "Included",
    features: ["DOT certified", "Real-time monitoring", "Risk prevention"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-br from-secondary via-background to-accent/5 overflow-hidden">
      {/* Luxury background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Star className="h-4 w-4 text-accent" />
            <span className="text-accent font-display font-bold text-sm tracking-[0.3em] uppercase">
              Premium Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-6 leading-tight"
          >
            Elite Dispatch
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive premium services designed to maximize your revenue, streamline operations, and elevate your trucking business to elite status.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Popular badge */}
              {service.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="absolute -top-3 -right-3 z-10"
                >
                  <div className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground text-xs font-display font-bold px-3 py-1 rounded-full shadow-lg shadow-accent/30">
                    POPULAR
                  </div>
                </motion.div>
              )}
              
              <div className="relative bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 p-8 h-full">
                {/* Luxury card decoration */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center mb-6 group-hover:border-accent group-hover:shadow-glow transition-all duration-300"
                  >
                    <service.icon className="h-8 w-8 text-accent" />
                  </motion.div>
                  
                  <h3 className="font-display font-black text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-accent/20">
                    <span className="text-accent font-display font-bold text-lg">
                      {service.price}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-accent hover:text-accent/80 transition-colors duration-300"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
