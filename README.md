# VELOSO TRANSPORT LLC - Truck Dispatch Website

A modern, responsive truck dispatch services website built with React, TypeScript, Vite, and Tailwind CSS.

## **Project Overview**

This is the official website for VELOSO TRANSPORT LLC, a professional truck dispatching company providing comprehensive services for owner-operators and small carriers.

**Live Demo**: [Deployed on Render](https://veloso-transport.onrender.com)

## **Quick Setup Guide (For New Computers)**

### **1. Required Software Installation**

#### **Node.js** (Required)
- Download from: https://nodejs.org
- Install **LTS version** (Long Term Support)
- This includes npm (Node Package Manager)
- Verify installation: `node --version` (should be 18+)

#### **Git** (Required)
- Download from: https://git-scm.com
- Install with default settings
- For Windows: Use Git Bash or PowerShell
- Verify installation: `git --version`

#### **VS Code** (Recommended IDE)
- Download from: https://code.visualstudio.com
- Install these extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - GitLens

### **2. Clone the Project**

Open terminal/command prompt and run:

```bash
# Navigate to your projects folder
cd Documents

# Clone the repository
git clone https://github.com/Rekiktamrat/bravo.git

# Enter the project directory
cd Bravo/portfolio
```

### **3. Install Dependencies**

```bash
# Install all project dependencies
npm install
```

### **4. Run the Development Server**

```bash
# Start the development server
npm run dev
```

The website will be available at: `http://localhost:8080`

### **5. Verify Everything Works**

Check these commands:
```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check if project builds successfully
npm run build

# Run linting (optional)
npm run lint
```

## **Project Structure**

```
Bravo/portfolio/
|
src/
  components/          # React components
    ui/               # Reusable UI components (shadcn/ui)
    Navbar.tsx        # Navigation bar
    Footer.tsx        # Footer section
    HeroSection.tsx   # Hero section
    AboutSection.tsx  # About section
    ContactSection.tsx # Contact form
    FAQSection.tsx    # FAQ section
  pages/              # Page components
    Index.tsx         # Main landing page
  assets/             # Images and static assets
  lib/                # Utility functions
    utils.ts          # Tailwind utilities
  hooks/              # Custom React hooks
    use-toast.ts      # Toast notification hook
public/               # Static files
package.json          # Dependencies and scripts
vite.config.ts        # Vite configuration
tailwind.config.ts    # Tailwind CSS config
render.yaml          # Render deployment config
postcss.config.js    # PostCSS configuration
```

## **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## **Technology Stack**

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Render (Static Site)

## **Features**

- Fully responsive design
- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- Contact form functionality
- FAQ accordion section
- SEO optimized meta tags
- Fast loading with Vite
- Easy deployment to Render

## **Environment Variables**

No environment variables required for this static site.

## **Deployment**

### **Render (Recommended)**
1. Connect your GitHub repository to Render
2. Select "Static Site" as service type
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `render.yaml` file is pre-configured for automatic deployment

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy the 'dist' folder to your hosting provider
```

## **Common Issues & Solutions**

#### **If npm install fails:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Try again
npm install
```

#### **If port 8080 is busy:**
```bash
# Kill process on port 8080 (Windows)
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3000
```

#### **If Tailwind CSS is not working:**
1. Ensure `postcss.config.js` exists
2. Check that `tailwind.config.ts` is properly configured
3. Restart the development server

## **Making Changes**

1. Edit components in `src/components/`
2. The development server will automatically reload
3. Test changes at `http://localhost:8080`
4. Commit and push to GitHub to deploy

## **Git Workflow (Optional)**

If you want to contribute changes:

```bash
# Configure Git user (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Create a new branch for your changes
git checkout -b feature/your-feature-name

# Add and commit your changes
git add .
git commit -m "Your descriptive commit message"

# Push to GitHub
git push origin feature/your-feature-name
```

## **Contact Information**

- **Company**: VELOSO TRANSPORT LLC
- **Email**: info@velosotransport.com
- **Phone**: +1 (302) 204-8440
- **Address**: 561, 1007 N Orange St. 4th Floor, Wilmington, DE 19801

## **License**

© 2025 VELOSO TRANSPORT LLC. All rights reserved.

---

**Quick Start Summary**: Clone, `npm install`, `npm run dev`, and open `http://localhost:8080`!