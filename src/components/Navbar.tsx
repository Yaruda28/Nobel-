import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Menu, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Get in Touch", href: "#carrier-form" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Luxury Top Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-sm border-b border-accent/10">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-8">
            <a href="tel:+13076556320" className="flex items-center gap-2 hover:text-accent transition-all duration-300 group">
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline font-medium">+1 (307) 655-6320</span>
            </a>
            <a href="mailto:info@nobel-dispatcher.com" className="flex items-center gap-2 hover:text-accent transition-all duration-300 group">
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline font-medium">Support@nobel-dispatcher.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <Crown className="h-3 w-3 text-accent" />
              <span className="text-xs font-medium text-accent">Premium Service</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-accent hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="hover:text-accent hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="hover:text-accent hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Main Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-accent/10 shadow-lg">
        <div className="container flex items-center justify-between h-20">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="font-display font-black text-2xl tracking-tight text-primary group"
          >
            NOBEL<span className="text-accent group-hover:scale-105 transition-transform duration-300"> DISPATCHER</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm font-semibold text-foreground hover:text-accent transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="tel:+13076556320"
              whileHover={{ scale: 1.05 }}
              className="text-sm font-semibold text-foreground flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <Phone className="h-4 w-4 text-accent" />
              (307) 655-6320
            </motion.a>
            <motion.a
              href="#carrier-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent font-display font-bold px-6 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                Get in Touch
              </Button>
            </motion.a>
          </div>

          {/* Luxury Mobile Toggle */}
          <motion.button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-accent/10 transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Luxury Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gradient-to-b from-background to-secondary/30 backdrop-blur-xl border-t border-accent/20"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-sm font-semibold py-3 px-4 text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#carrier-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="inline-block w-full"
                onClick={() => setMobileOpen(false)}
              >
                <Button className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent font-display font-bold mt-4 w-full shadow-lg shadow-accent/25">
                  Get in Touch
                </Button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
