import { motion } from "framer-motion";
import { Truck, MapPin, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: Truck, value: "500+", label: "Active Loads" },
  { icon: MapPin, value: "48", label: "States Covered" },
  { icon: TrendingUp, value: "$3.25", label: "Avg. Rate/Mile" },
  { icon: Users, value: "200+", label: "Happy Drivers" },
];

const StatsStrip = () => {
  return (
    <section className="bg-primary py-8">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-display font-black text-2xl text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-sm font-body">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
