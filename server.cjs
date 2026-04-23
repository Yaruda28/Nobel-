const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Email configuration - using Gmail as example
// You'll need to:
// 1. Enable 2FA on your Gmail account
// 2. Generate an App Password: https://myaccount.google.com/apppasswords
// 3. Use the App Password instead of your regular password

const createEmailTransporter = () => {
  // Remove spaces from app password if present
  const emailPass = (process.env.EMAIL_PASS || '').replace(/\s/g, '');
  
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: emailPass,
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
  });
};

// Generate professional email template
const generateEmailTemplate = (carrierData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Carrier Application</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; }
        .content { padding: 30px; }
        .section { margin-bottom: 25px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6; }
        .section h3 { margin: 0 0 15px 0; color: #1e293b; font-size: 18px; }
        .info-grid { display: grid; grid-template-columns: 120px 1fr; gap: 10px; }
        .info-label { font-weight: bold; color: #475569; }
        .info-value { color: #1e293b; }
        .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 14px; color: #64748b; }
        .documents { background-color: #fef3c7; border-left: 4px solid #f59e0b; }
        .highlight { background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚛 NOBEL Dispatcher LLC</h1>
          <p>New Carrier Application Received</p>
        </div>
        
        <div class="content">
          <div class="highlight">
            <strong>📧 This application was submitted on ${new Date().toLocaleString()}</strong>
          </div>

          <div class="section">
            <h3>🏢 Company Information</h3>
            <div class="info-grid">
              <span class="info-label">Company Name:</span>
              <span class="info-value">${carrierData.companyName}</span>
              
              <span class="info-label">Phone:</span>
              <span class="info-value">${carrierData.phone}</span>
              
              <span class="info-label">Email:</span>
              <span class="info-value">${carrierData.email}</span>
              
              <span class="info-label">MC Number:</span>
              <span class="info-value">${carrierData.mcNumber}</span>
            </div>
          </div>

          <div class="section">
            <h3>📍 Address Information</h3>
            <div class="info-grid">
              <span class="info-label">Street:</span>
              <span class="info-value">${carrierData.address || 'Not provided'}</span>
              
              <span class="info-label">Address 2:</span>
              <span class="info-value">${carrierData.addressLine2 || 'Not provided'}</span>
              
              <span class="info-label">ZIP Code:</span>
              <span class="info-value">${carrierData.zipCode || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h3>⚙️ Business Details</h3>
            <div class="info-grid">
              <span class="info-label">USDOT:</span>
              <span class="info-value">${carrierData.usdotNumber || 'Not provided'}</span>
              
              <span class="info-label">EIN:</span>
              <span class="info-value">${carrierData.einNumber || 'Not provided'}</span>
              
              <span class="info-label">Trucks:</span>
              <span class="info-value">${carrierData.numberOfTrucks || 'Not provided'}</span>
              
              <span class="info-label">Drivers:</span>
              <span class="info-value">${carrierData.numberOfDrivers || 'Not provided'}</span>
              
              <span class="info-label">Factoring:</span>
              <span class="info-value">${carrierData.factorInvoices || 'Not provided'}</span>
              
              <span class="info-label">Truck Type:</span>
              <span class="info-value">${carrierData.truckType || 'Not provided'}</span>
            </div>
          </div>

          <div class="section documents">
            <h3>📋 Uploaded Documents</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li style="color: #92400e;">MC Authority: ${carrierData.mcAuthority || 'Not uploaded'}</li>
              <li style="color: #92400e;">W9 Form: ${carrierData.w9Form || 'Not uploaded'}</li>
              <li style="color: #92400e;">Liability Insurance: ${carrierData.liabilityInsurance || 'Not uploaded'}</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:${carrierData.email}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              📧 Reply to Carrier
            </a>
          </div>
        </div>

        <div class="footer">
          <p>NOBEL Dispatcher LLC | 561, 1007 N Orange St. 4th Floor, Wilmington, DE 19801</p>
          <p>📞 +1 (302) 204-8440 | 🌐 www.nobel-dispatcher.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Generate confirmation email for carrier
const generateConfirmationEmail = (carrierData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Application Received - NOBEL Dispatcher LLC</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; }
        .content { padding: 30px; }
        .info-box { background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0; }
        .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 14px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚛 NOBEL Dispatcher LLC</h1>
          <p>Your Carrier Application Has Been Received!</p>
        </div>
        
        <div class="content">
          <h2>Thank You for Your Application!</h2>
          <p>Dear <strong>${carrierData.companyName}</strong>,</p>
          <p>We have successfully received your carrier application and will review it carefully. Our team will contact you within 24 hours to discuss the next steps and answer any questions you may have.</p>

          <div class="info-box">
            <h3>📋 Application Summary:</h3>
            <ul>
              <li><strong>Company:</strong> ${carrierData.companyName}</li>
              <li><strong>MC Number:</strong> ${carrierData.mcNumber}</li>
              <li><strong>Truck Type:</strong> ${carrierData.truckType}</li>
              <li><strong>Number of Trucks:</strong> ${carrierData.numberOfTrucks || 'Not specified'}</li>
            </ul>
          </div>

          <h3>What Happens Next?</h3>
          <ol>
            <li><strong>Review Process:</strong> Our team will review your application and documents</li>
            <li><strong>Contact:</strong> We'll call or email you within 24 hours</li>
            <li><strong>Onboarding:</strong> If approved, we'll guide you through the setup process</li>
          </ol>

          <h3>Questions? Contact Us:</h3>
          <p>📞 <strong>Phone:</strong> +1 (302) 204-8440<br>
          📧 <strong>Email:</strong> support@nobel-dispatcher.com</p>
        </div>

        <div class="footer">
          <p>NOBEL Dispatcher LLC | Professional Truck Dispatch Services</p>
          <p>561, 1007 N Orange St. 4th Floor, Wilmington, DE 19801</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// API endpoint for carrier applications
app.post('/api/carrier-application', upload.any(), async (req, res) => {
  try {
    console.log('🚀 Received carrier application');
    
    // Extract form data
    const carrierData = {
      companyName: req.body.companyName,
      address: req.body.address,
      addressLine2: req.body.addressLine2,
      zipCode: req.body.zipCode,
      phone: req.body.phone,
      email: req.body.email,
      mcNumber: req.body.mcNumber,
      usdotNumber: req.body.usdotNumber,
      einNumber: req.body.einNumber,
      numberOfTrucks: req.body.numberOfTrucks,
      numberOfDrivers: req.body.numberOfDrivers,
      factorInvoices: req.body.factorInvoices,
      truckType: req.body.truckType,
      mcAuthority: req.files.find(f => f.fieldname === 'mcAuthority')?.originalname || null,
      w9Form: req.files.find(f => f.fieldname === 'w9Form')?.originalname || null,
      liabilityInsurance: req.files.find(f => f.fieldname === 'liabilityInsurance')?.originalname || null,
    };

    console.log('📋 Carrier Data:', carrierData);

    // Create email transporter
    const transporter = createEmailTransporter();

    // Prepare attachments
    const attachments = [];
    req.files.forEach(file => {
      attachments.push({
        filename: file.originalname,
        content: file.buffer,
      });
    });

    // Send email to support@nobel-dispatcher.com
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'support@nobel-dispatcher.com',
      subject: `🚛 New Carrier Application: ${carrierData.companyName} (${carrierData.mcNumber})`,
      html: generateEmailTemplate(carrierData),
      attachments: attachments,
    };

    console.log('📧 Sending email to support@nobel-dispatcher.com...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to support@nobel-dispatcher.com');

    // Send confirmation email to carrier
    const confirmationOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: carrierData.email,
      subject: '🎉 Your Carrier Application - NOBEL Dispatcher LLC',
      html: generateConfirmationEmail(carrierData),
    };

    console.log('📧 Sending confirmation email to carrier...');
    await transporter.sendMail(confirmationOptions);
    console.log('✅ Confirmation email sent successfully');

    res.json({ 
      success: true, 
      message: 'Application submitted successfully! We will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('❌ Error processing application:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit application. Please try again or contact us directly.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
  console.log(`📧 Ready to send carrier applications to support@nobel-dispatcher.com`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
