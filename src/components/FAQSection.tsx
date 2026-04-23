import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What will dispatcher services do for my business?",
    a: "We buy you time so you can make more money. We handle all the paperwork, regulatory requirements, and negotiations — things that keep you from doing what actually makes you money. We aim to get you the best rates for your loads.",
  },
  {
    q: "Do I have to request insurance certificates every time?",
    a: "No. Once we have your insurance information on file, we handle all certificate requests from brokers and shippers on your behalf.",
  },
  {
    q: "Do I have to be working under my own MC authority to hire a Dispatcher?",
    a: "Yes, you need your own MC authority to work with our dispatch service. We help owner-operators and small carriers who operate under their own authority.",
  },
  {
    q: "Do I have to enter into a long term contract with Dispatcher?",
    a: "No long-term contracts. We work on a month-to-month basis. You can cancel anytime with notice. We believe in earning your business every day.",
  },
  {
    q: "How quickly can I get started?",
    a: "You can be fully set up and dispatched within 24-48 hours. We handle all the broker setup packets and get you moving fast.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-display font-bold text-sm tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mt-3">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-accent/40"
              >
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-accent py-5 text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
