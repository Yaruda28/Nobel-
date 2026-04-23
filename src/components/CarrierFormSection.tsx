import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, Send, FileText, Shield, Truck, Building2, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { submitCarrierApplication } from "../services/emailService";

interface CarrierFormData {
  companyName: string;
  address: string;
  addressLine2: string;
  zipCode: string;
  phone: string;
  email: string;
  mcNumber: string;
  usdotNumber: string;
  einNumber: string;
  numberOfTrucks: string;
  numberOfDrivers: string;
  factorInvoices: string;
  truckType: string;
  mcAuthority: File | null;
  w9Form: File | null;
  liabilityInsurance: File | null;
}

const truckTypes = [
  "Dry Van",
  "Reefer/Refrigerated",
  "Flatbed",
  "Step Deck",
  "Lowboy",
  "Tanker",
  "Bulk",
  "Car Hauler",
  "Hot Shot",
  "LTL",
  "Box Truck",
  "Straight Truck",
  "Other"
];

const CarrierFormSection = () => {
  const [formData, setFormData] = useState<CarrierFormData>({
    companyName: "",
    address: "",
    addressLine2: "",
    zipCode: "",
    phone: "",
    email: "",
    mcNumber: "",
    usdotNumber: "",
    einNumber: "",
    numberOfTrucks: "",
    numberOfDrivers: "",
    factorInvoices: "",
    truckType: "",
    mcAuthority: null,
    w9Form: null,
    liabilityInsurance: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof CarrierFormData) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [fieldName]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitCarrierApplication(formData);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          companyName: "",
          address: "",
          addressLine2: "",
          zipCode: "",
          phone: "",
          email: "",
          mcNumber: "",
          usdotNumber: "",
          einNumber: "",
          numberOfTrucks: "",
          numberOfDrivers: "",
          factorInvoices: "",
          truckType: "",
          mcAuthority: null,
          w9Form: null,
          liabilityInsurance: null,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="carrier-form" className="relative py-24 lg:py-32 bg-gradient-to-br from-secondary via-background to-accent/5 overflow-hidden">
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
            <Truck className="h-5 w-5 text-accent" />
            <span className="text-accent font-display font-bold text-sm tracking-[0.3em] uppercase">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-6 leading-tight"
          >
            Carrier
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Information
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Join our network of professional carriers. Fill out the form below and we'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-background to-secondary/30 backdrop-blur-xl rounded-3xl border border-accent/20 shadow-luxury p-8 lg:p-12">
            {/* Company Information */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <Building2 className="h-6 w-6 text-accent" />
                <h3 className="font-display font-black text-2xl text-foreground">Company Information</h3>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Company Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="Your company name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Phone <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="(555) 123-4567"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    MC Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="mcNumber"
                    value={formData.mcNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="MC-XXXXXX"
                  />
                </motion.div>
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <MapPin className="h-6 w-6 text-accent" />
                <h3 className="font-display font-black text-2xl text-foreground">Address Information</h3>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="md:col-span-2"
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="123 Main Street"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="Suite, Apt, etc."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="12345"
                  />
                </motion.div>
              </div>
            </div>

            {/* Business Details */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <Shield className="h-6 w-6 text-accent" />
                <h3 className="font-display font-black text-2xl text-foreground">Business Details</h3>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    USDOT Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="usdotNumber"
                    value={formData.usdotNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="XXXXXXXX"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    EIN Number
                  </label>
                  <input
                    type="text"
                    name="einNumber"
                    value={formData.einNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="XX-XXXXXXX"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Number of Trucks
                  </label>
                  <input
                    type="number"
                    name="numberOfTrucks"
                    value={formData.numberOfTrucks}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="1"
                    min="1"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Number of Drivers
                  </label>
                  <input
                    type="number"
                    name="numberOfDrivers"
                    value={formData.numberOfDrivers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="1"
                    min="1"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Do you factor your invoices? <span className="text-accent">*</span>
                  </label>
                  <select
                    name="factorInvoices"
                    value={formData.factorInvoices}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="sometimes">Sometimes</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  <label className="block text-sm font-display font-bold text-foreground mb-2">
                    Truck Type <span className="text-accent">*</span>
                  </label>
                  <select
                    name="truckType"
                    value={formData.truckType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground"
                  >
                    <option value="">Select truck type</option>
                    {truckTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </motion.div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <FileText className="h-6 w-6 text-accent" />
                <h3 className="font-display font-black text-2xl text-foreground">Required Documents</h3>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "mcAuthority", label: "MC Authority", required: true },
                  { name: "w9Form", label: "W9 Form", required: true },
                  { name: "liabilityInsurance", label: "Certificate of Liability Insurance", required: true }
                ].map((doc, index) => (
                  <motion.div
                    key={doc.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 2.3 + index * 0.1 }}
                  >
                    <label className="block text-sm font-display font-bold text-foreground mb-2">
                      {doc.label} {doc.required && <span className="text-accent">*</span>}
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name={doc.name}
                        onChange={(e) => handleFileChange(e, doc.name as keyof CarrierFormData)}
                        required={doc.required}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full px-4 py-3 bg-background border border-accent/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-display file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer"
                      />
                      <Upload className="absolute right-3 top-3.5 h-5 w-5 text-accent pointer-events-none" />
                    </div>
                    {formData[doc.name as keyof CarrierFormData] && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-accent">
                        <CheckCircle className="h-4 w-4" />
                        <span>File uploaded</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="text-center"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-display font-bold px-8 py-4 rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2 text-accent"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-display font-medium">Application submitted successfully! We'll contact you within 24 hours.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-500 font-display font-medium"
                >
                  Error submitting application. Please try again or contact us directly.
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default CarrierFormSection;
