import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import nobelDispatcherLogo from "../assets/nobel-dispatcher-logo.png";

const benefits = [
  "Best Truck Dispatch Company On Your Side",
  "You Pick The Areas You Want To Drive",
  "We Handle All Your Broker Setup Packets",
  "We Negotiate Hard For Best Paying Rates",
  "We Talk To Brokers — You Focus On Driving",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20 shadow-luxury"
            >
              {/* Luxury background decoration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-30" />
              
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src={nobelDispatcherLogo}
                  alt="NOBEL Dispatcher LLC - Professional Truck Dispatch Services"
                  className="w-full h-auto max-h-80 object-contain filter drop-shadow-lg"
                />
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-display font-bold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mt-3 mb-5">
              Full-Service Truck Dispatching
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              NOBEL DISPATCHER LLC is a <strong className="text-foreground">"Full Service"</strong> truck dispatching company that handles all of the back office work so you can compete with the large fleets. We make it affordable for small carriers to access professional dispatch services.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
