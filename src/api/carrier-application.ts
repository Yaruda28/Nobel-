import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract all form fields
    const carrierData = {
      companyName: formData.get('companyName') as string,
      address: formData.get('address') as string,
      addressLine2: formData.get('addressLine2') as string,
      zipCode: formData.get('zipCode') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      mcNumber: formData.get('mcNumber') as string,
      usdotNumber: formData.get('usdotNumber') as string,
      einNumber: formData.get('einNumber') as string,
      numberOfTrucks: formData.get('numberOfTrucks') as string,
      numberOfDrivers: formData.get('numberOfDrivers') as string,
      factorInvoices: formData.get('factorInvoices') as string,
      truckType: formData.get('truckType') as string,
      submittedAt: new Date().toISOString(),
    };

    // Get uploaded files
    const mcAuthority = formData.get('mcAuthority') as File;
    const w9Form = formData.get('w9Form') as File;
    const liabilityInsurance = formData.get('liabilityInsurance') as File;

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare email content
    const emailContent = `
      <h2 style="color: #3b82f6; font-family: Arial, sans-serif;">New Carrier Application</h2>
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e293b; margin-bottom: 15px;">Company Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Company Name:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.companyName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Phone:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Email:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">MC Number:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.mcNumber}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e293b; margin-bottom: 15px;">Address Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Street Address:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.address}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Address Line 2:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.addressLine2 || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">ZIP Code:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.zipCode || 'N/A'}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e293b; margin-bottom: 15px;">Business Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">USDOT Number:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.usdotNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">EIN Number:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.einNumber || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Number of Trucks:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.numberOfTrucks || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Number of Drivers:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.numberOfDrivers || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Factors Invoices:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.factorInvoices}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #475569;">Truck Type:</td>
            <td style="padding: 8px; color: #1e293b;">${carrierData.truckType}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e293b; margin-bottom: 10px;">Uploaded Documents</h3>
        <ul style="margin: 0; padding-left: 20px;">
          <li style="color: #475569;">MC Authority: ${mcAuthority ? mcAuthority.name : 'Not uploaded'}</li>
          <li style="color: #475569;">W9 Form: ${w9Form ? w9Form.name : 'Not uploaded'}</li>
          <li style="color: #475569;">Liability Insurance: ${liabilityInsurance ? liabilityInsurance.name : 'Not uploaded'}</li>
        </ul>
      </div>

      <div style="margin-top: 30px; padding: 15px; background-color: #3b82f6; color: white; border-radius: 8px;">
        <p style="margin: 0; font-size: 14px;">
          This application was submitted on ${new Date().toLocaleString()} via the NOBEL Dispatcher LLC website.
        </p>
      </div>
    `;

    // Prepare attachments
    const attachments = [];
    
    if (mcAuthority && mcAuthority.size > 0) {
      const buffer = await mcAuthority.arrayBuffer();
      attachments.push({
        filename: mcAuthority.name,
        content: Buffer.from(buffer),
      });
    }
    
    if (w9Form && w9Form.size > 0) {
      const buffer = await w9Form.arrayBuffer();
      attachments.push({
        filename: w9Form.name,
        content: Buffer.from(buffer),
      });
    }
    
    if (liabilityInsurance && liabilityInsurance.size > 0) {
      const buffer = await liabilityInsurance.arrayBuffer();
      attachments.push({
        filename: liabilityInsurance.name,
        content: Buffer.from(buffer),
      });
    }

    // Send email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@nobel-dispatcher.com',
      subject: `New Carrier Application: ${carrierData.companyName} (${carrierData.mcNumber})`,
      html: emailContent,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    // Also send confirmation email to carrier
    const confirmationEmail = {
      from: process.env.SMTP_USER,
      to: carrierData.email,
      subject: 'Your Carrier Application - NOBEL Dispatcher LLC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #3b82f6; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">NOBEL Dispatcher LLC</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Carrier Application Received</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Thank You for Your Application!</h2>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Dear ${carrierData.companyName},
            </p>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              We have received your carrier application and will review it carefully. Our team will contact you within 24 hours to discuss the next steps.
            </p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e293b; margin-top: 0;">Application Details:</h3>
              <ul style="color: #475569; line-height: 1.6;">
                <li><strong>Company Name:</strong> ${carrierData.companyName}</li>
                <li><strong>MC Number:</strong> ${carrierData.mcNumber}</li>
                <li><strong>Truck Type:</strong> ${carrierData.truckType}</li>
                <li><strong>Number of Trucks:</strong> ${carrierData.numberOfTrucks || 'Not specified'}</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              If you have any questions in the meantime, please don't hesitate to contact us at:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #1e293b; margin: 5px 0;"><strong>Phone:</strong> +1 (302) 204-8440</p>
              <p style="color: #1e293b; margin: 5px 0;"><strong>Email:</strong> info@nobel-dispatcher.com</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                NOBEL Dispatcher LLC | 561, 1007 N Orange St. 4th Floor, Wilmington, DE 19801
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing carrier application:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit application. Please try again.' 
      },
      { status: 500 }
    );
  }
}
