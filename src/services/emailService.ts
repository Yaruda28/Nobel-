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

export const submitCarrierApplication = async (formData: CarrierFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Create form data for file upload
    const formDataToSubmit = new FormData();
    
    // Add all text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        formDataToSubmit.append(key, value);
      } else if (typeof value === 'string') {
        formDataToSubmit.append(key, value);
      }
    });

    // For now, we'll simulate the email sending
    // In a real production environment, you would send this to your backend API
    const response = await simulateEmailService(formDataToSubmit);
    
    return response;
  } catch (error) {
    console.error('Error submitting carrier application:', error);
    return {
      success: false,
      message: 'Failed to submit application. Please try again or contact us directly.'
    };
  }
};

// Simulated email service for development
// In production, replace this with actual API call to your backend
const simulateEmailService = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  // Extract form data for logging
  const data: any = {};
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      data[key] = value.name;
    } else {
      data[key] = value;
    }
  }

  console.log('=== CARRIER APPLICATION SUBMISSION ===');
  console.log('Sending to: support@nobel-dispatcher.com');
  console.log('Company:', data.companyName);
  console.log('MC Number:', data.mcNumber);
  console.log('Email:', data.email);
  console.log('Phone:', data.phone);
  console.log('Truck Type:', data.truckType);
  console.log('Documents uploaded:', {
    mcAuthority: data.mcAuthority,
    w9Form: data.w9Form,
    liabilityInsurance: data.liabilityInsurance
  });
  console.log('=====================================');

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In production, this would send an email to support@nobel-dispatcher.com
  // For now, we're simulating the email sending with console logs
  
  return {
    success: true,
    message: 'Application submitted successfully! We will contact you within 24 hours.'
  };
};

// Production email service (to be implemented with actual backend)
export const sendCarrierApplicationEmail = async (formData: FormData) => {
  // This function would make an actual API call to your backend
  // Example implementation:
  
  try {
    const response = await fetch('/api/carrier-application', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to submit application');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Backend API example (for reference - would be implemented in your backend)
/*
Backend implementation example:

const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
const upload = multer();

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/carrier-application', upload.none(), async (req, res) => {
  try {
    const { companyName, email, phone, mcNumber, ...otherFields } = req.body;
    
    // Send email to support@nobel-dispatcher.com
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'support@nobel-dispatcher.com',
      subject: `New Carrier Application: ${companyName} (${mcNumber})`,
      html: generateEmailTemplate(req.body),
      attachments: processAttachments(req.files),
    });

    // Send confirmation email to carrier
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Your Carrier Application - NOBEL Dispatcher LLC',
      html: generateConfirmationTemplate(req.body),
    });

    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit application' });
  }
});
*/
