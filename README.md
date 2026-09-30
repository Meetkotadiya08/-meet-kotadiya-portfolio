# Meet Kotadiya — Professional iOS Developer Portfolio & Resume

A modern, high-performance, and responsive personal developer portfolio website for **Meet Kotadiya** (Kotadiya Meet Maheshbhai), iOS Developer with 1.5 years of professional experience based in Ahmedabad, Gujarat, India.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 📱 Quick Overview

- **Professional Name:** Meet Kotadiya
- **Full Legal Name:** Kotadiya Meet Maheshbhai
- **Professional Title:** iOS Developer
- **Experience:** 1.5 Years Professional Experience
- **Current Status:** Open to Work
- **Location:** Ahmedabad, Gujarat, India *(Public location only — no residential addresses)*
- **Email:** [kotadiyameet38@gmail.com](mailto:kotadiyameet38@gmail.com)
- **Phone:** [+91 7069223256](tel:+917069223256)
- **LinkedIn:** [linkedin.com/in/meet-kotadiya-33a15a389](https://www.linkedin.com/in/meet-kotadiya-33a15a389)

---

## ✨ Features

- **Personal Profile & Biodata Card:** Answers who Meet is, what technologies he uses, his professional experience, and contact methods in under 30 seconds.
- **Strictly Verified Information:** Zero fake stats, zero exaggerated claims, zero fabricated client reviews. Every skill, education detail, and certification matches real qualifications.
- **Categorized Technical Badges:** Clean categorized cards for iOS Development, Networking & APIs, Auth & Services, Data Persistence, Tooling, Web Basics, Languages, and Soft Skills. No deceptive percentage bars.
- **Theme Toggle (Light & Dark Mode):** Automatically detects user OS theme preference, saves choice to `localStorage`, and provides an accessible toggle.
- **ATS Resume Download & View:** Direct links to `/assets/resume.pdf` for in-browser inspection or one-click file download.
- **Zero Horizontal Scrolling:** Optimized across all viewport sizes (1920px down to 375px mobile screens) with smooth scrolling and dynamic navigation highlighting.
- **Accessible & SEO Ready:** Semantic HTML5, schema.org JSON-LD structured data, Open Graph / Twitter cards, robots.txt, sitemap.xml, and keyboard focus states.

---

## 📁 Project Structure

```
├── public/
│   ├── assets/
│   │   └── resume.pdf      # Your official PDF resume (replace anytime)
│   ├── favicon.svg         # SVG Favicon (MK monogram squircle)
│   ├── favicon.ico         # Legacy ICO Favicon
│   ├── robots.txt          # Search engine crawler instructions
│   └── sitemap.xml         # XML Sitemap for Google Search Console
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky responsive navigation with mobile drawer
│   │   ├── Footer.jsx      # Clean footer with copyright and direct links
│   │   └── BackToTop.jsx   # Floating back-to-top button
│   │
│   ├── sections/
│   │   ├── Hero.jsx        # First-screen identity, headline, Swift snippet, CTAs
│   │   ├── About.jsx       # Narrative, development focus, and biodata card
│   │   ├── Skills.jsx      # Categorized skill badges, soft skills, languages
│   │   ├── Experience.jsx  # 1.5 Years iOS Developer timeline
│   │   ├── Projects.jsx    # Projects showcase & extensible project schema
│   │   ├── Education.jsx   # BSc IT (Atmiya University) & CV academic history
│   │   ├── Certifications.jsx # Bascom Computer Python training entry
│   │   ├── Resume.jsx      # Dedicated "Download My Resume" section
│   │   └── Contact.jsx     # Direct email/call actions & contact form
│   │
│   ├── context/
│   │   └── ThemeContext.jsx # Light / Dark mode state management
│   │
│   ├── data/
│   │   └── profile.js      # ⭐ CENTRALIZED PROFILE DATA (Edit everything here!)
│   │
│   ├── styles/
│   │   └── index.css       # Tailwind directives, custom scrollbars, animations
│   │
│   ├── App.jsx             # Main application layout
│   └── main.jsx            # React root mount
│
├── vercel.json             # Vercel deployment configuration
├── vite.config.js          # Vite build config
├── tailwind.config.js      # Tailwind CSS configuration with brand colors
└── package.json            # Project dependencies & build scripts
```

---

## ⚡ How to Edit Your Information

All your personal details, skills, experience, projects, education, and links are stored in:
👉 `src/data/profile.js`

### 1. Replacing Your Resume PDF
Place your new resume PDF file into:
`public/assets/resume.pdf`
*(Keep the filename `resume.pdf` so all download and view links on your website update automatically without touching any code!)*

### 2. Adding Real Projects
Open `src/data/profile.js` and add project objects to the `projects: []` array:
```javascript
projects: [
  {
    title: "E-Commerce iOS App",
    description: "Native iOS shopping client with product catalog, cart, and checkout.",
    role: "iOS Developer",
    technologies: ["Swift", "UIKit", "REST APIs", "Alamofire", "Core Data"],
    features: [
      "User authentication with Apple & Google Sign-In",
      "Dynamic product grids with UICollectionView",
      "Offline caching using Core Data"
    ],
    challenges: "Handling network loss and preserving cart state across app launches.",
    contribution: "Engineered the API layer and auto-layout UI components.",
    image: "", // Optional screenshot in public/assets/
    github: "", // Leave blank if you don't want GitHub link displayed
    liveDemo: "" // App Store or TestFlight link if applicable
  }
]
```

### 3. Enabling GitHub in the Future
If you wish to display your GitHub profile in the future:
1. Open `src/data/profile.js`
2. Change `showGithub: false` to `true`
3. Enter your URL in `github: "https://github.com/your-username"`

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 1. Install dependencies
```bash
npm install
```

### 2. Start local dev server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite prints in the terminal).

### 3. Build for production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview the production build
```bash
npm run preview
```

---

## 🚀 Step-by-Step Vercel Deployment Instructions

### Step 1: Push Code to GitHub / GitLab / Bitbucket
1. Initialize Git and commit your files (already pre-configured in this repository):
   ```bash
   git add .
   git commit -m "Initial commit: Meet Kotadiya iOS Developer Portfolio"
   ```
2. Create a new private or public repository on GitHub (e.g. `meet-kotadiya-portfolio`).
3. Link your remote repository and push:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/meet-kotadiya-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect Repository to Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in (or sign up with GitHub/email).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Import your `meet-kotadiya-portfolio` repository.
4. In the Project Configuration screen:
   - **Framework Preset:** Vite *(automatically detected)*
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.
6. Within 30–60 seconds, your website will be live at a free URL like:
   `https://meet-kotadiya-portfolio.vercel.app`

---

## 🌐 Custom Domain Setup (e.g., `meetkotadiya.dev` or `meetkotadiya.com`)

When you are ready to connect your personal domain:

1. **Purchase your domain** from any registrar (Namecheap, GoDaddy, Cloudflare, Google Domains/Squarespace, Hostinger, etc.).
2. Go to your **Vercel Dashboard** &rarr; Select your portfolio project &rarr; Click **Settings** &rarr; **Domains**.
3. Type your domain (e.g., `meetkotadiya.dev` or `www.meetkotadiya.dev`) and click **Add**.
4. Vercel will display the required DNS records:
   - For root domain (`meetkotadiya.dev`):
     - **Type:** `A`
     - **Name:** `@`
     - **Value:** `76.76.21.21`
   - For `www` subdomain (`www.meetkotadiya.dev`):
     - **Type:** `CNAME`
     - **Name:** `www`
     - **Value:** `cname.vercel-dns.com`
5. Open your domain registrar's DNS Management console and paste these records.
6. **Automatic SSL / HTTPS:** Vercel automatically generates and renews a free Let's Encrypt SSL certificate within a few minutes of DNS verification. No manual SSL configuration required!

---

## 📄 License & Attribution

&copy; 2026 Kotadiya Meet Maheshbhai. All Rights Reserved.
Designed and built for Meet Kotadiya — iOS Developer.
