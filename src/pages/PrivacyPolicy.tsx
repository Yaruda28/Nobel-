import { motion } from "framer-motion";
import { Shield, Lock, Mail, MapPin, Phone, ChevronLeft, Eye, UserCheck, Cookie, MessageSquare, FileText, Trash2, RefreshCw, Globe, Users, Calendar, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-accent/5">
      {/* Header Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-accent font-display font-bold text-sm tracking-[0.3em] uppercase">
                Legal Compliance
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-accent-foreground mt-4 mb-6 leading-tight"
            >
              Privacy
              <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-accent-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Your Privacy and Trust Are Our Top Priorities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="py-8 bg-gradient-to-r from-accent/10 to-accent/5 border-y border-accent/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Lock className="h-6 w-6 text-accent" />
              <h2 className="font-display font-bold text-xl text-foreground">Our Privacy Commitment</h2>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Nobel Dispatcher LLC is committed to protecting the privacy and security of all registered clients and website visitors. 
              We maintain strict confidentiality standards and never compromise your personal or business information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Section 1: Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">1. Introduction</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Nobel Dispatcher LLC. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, register for our services, or communicate with us. By using our website and services, you agree to the terms outlined in this Privacy Policy.
              </p>
            </motion.div>

            {/* Section 2: Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">2. Information We Collect</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you voluntarily provide to us when you register for an account, fill out forms, communicate with us, or use our dispatch and logistics services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Personal Information: Full name, email address, phone number</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Business Information: Company name, business address, DOT numbers, MC authority details</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Contact Information: Mailing address, billing information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Communication Data: Messages, emails, and records of interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Service Information: Details about your trucking operations and service requirements</span>
                </li>
              </ul>
            </motion.div>

            {/* Section 3: How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">3. How We Use Your Information</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the collected information solely for the following purposes:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Providing and managing our dispatch and logistics services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Communicating with you about your account, services, and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Processing payments and billing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Improving our services and customer experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Complying with legal and regulatory requirements</span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-lg p-4">
                <p className="text-foreground font-medium text-sm">
                  Important: We do NOT use your information for marketing purposes unrelated to our services, and we never share your data with third parties for marketing or advertising purposes.
                </p>
              </div>
            </motion.div>

            {/* Section 4: Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">4. Data Protection and Security</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take the security of your personal information extremely seriously. We implement and maintain industry-standard security measures to protect your data.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Secure Socket Layer (SSL) encryption for all data transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Secure server infrastructure with firewall protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Regular security audits and vulnerability assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Access controls and authentication protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Data backup and disaster recovery procedures</span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-lg p-4">
                <p className="text-foreground font-medium text-sm">
                  Your Data is Safe: All registered clients' information is stored securely and treated as strictly confidential.
                </p>
              </div>
            </motion.div>

            {/* Section 5: No Data Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">5. Our Promise: No Unauthorized Data Sharing</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">We want to be absolutely clear:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">We do NOT sell your personal information to anyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">We do NOT rent or lease your data to third parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">We do NOT share your information with third parties without your explicit consent</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">We do NOT use your data for purposes unrelated to providing our services</span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-lg p-4">
                <p className="text-foreground font-medium text-sm">
                  Your trust is essential to our business relationship, and we honor that trust by keeping your information completely confidential.
                </p>
              </div>
            </motion.div>

            {/* Section 6: Third-Party Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">6. Third-Party Service Providers</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use trusted third-party service providers to assist in operating our business. These providers have access to personal information only as necessary to perform specific tasks on our behalf.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Payment Processors: To securely process payments and billing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Communication Platforms: For email, SMS, and phone communications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Hosting Services: For website hosting and data storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Analytics Tools: To understand website usage (anonymous data only)</span>
                </li>
              </ul>
            </motion.div>

            {/* Section 7: SMS Consent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">7. SMS and Communication Consent</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By providing your phone number and registering on our website, you consent to receive communications from Nobel Dispatcher LLC regarding your account, services, and important updates.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Service-related notifications and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Load dispatch information and scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Payment and billing reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Important account alerts</span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-lg p-4">
                <p className="text-foreground font-medium text-sm">
                  Opt-In Required: We require explicit consent for marketing communications. You can opt out anytime by replying STOP to any SMS message or clicking unsubscribe in emails. Standard message and data rates may apply.
                </p>
              </div>
            </motion.div>

            {/* Section 8: Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">8. Cookies and Tracking Technologies</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience and improve our services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Essential Cookies: Required for the website to function properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Functional Cookies: Remember your preferences and settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Analytical Cookies: Help us understand how visitors use our website</span>
                </li>
              </ul>
            </motion.div>

            {/* Section 9: Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-2xl border border-accent/20 p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground">9. Your Rights and Choices</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a registered client and user of our services, you have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Right to Access: Request a copy of the personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Right to Update/Correct: Update or correct your personal information at any time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Right to Delete: Request deletion of your personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">Right to Data Portability: Request transfer of your data to another service provider</span>
                </li>
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-8 shadow-luxury"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl">Contact Us</h2>
              </div>
              
              <p className="text-primary-foreground/80 mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us. 
                We are committed to addressing your privacy concerns promptly and transparently.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="font-semibold text-sm">Email</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80">Support@nobel-dispatcher.com</p>
                </div>
                
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="font-semibold text-sm">Address</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80">30 N Gould St Ste N<br />Sheridan, WY 82801, US</p>
                </div>
                
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="font-semibold text-sm">Response Time</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80">Within 2 business days</p>
                </div>
              </div>
              
              <p className="text-sm text-primary-foreground/70">
                All inquiries will be responded to within 2 business days.
              </p>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center border-t border-accent/20 pt-8"
            >
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold">Last Updated:</span> April 28, 2026
              </p>
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold">Effective Date:</span> April 28, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 border-t border-accent/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent font-display font-bold px-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
