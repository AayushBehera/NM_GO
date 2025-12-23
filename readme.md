# NMGO - Nuclear Micro-Grid Optimizer

DevOps-Grade Nuclear Energy Intelligence Platform for Data Centers

## 🚀 Quick Start

This is a static HTML website that can be deployed to Vercel, Netlify, or any static hosting platform.

## 📁 Project Structure

```
nmgo-platform/
├── index.html          # Main HTML file
├── vercel.json         # Vercel configuration
├── package.json        # Project metadata
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🔧 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project directory**
   ```bash
   cd your-project-folder
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: nmgo-platform (or your choice)
   - Directory: ./ (current directory)
   - Override settings: No

### Method 2: Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Add New" → "Project"**
3. **Import your Git repository** or **upload your files**
4. **Configure project:**
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./
5. **Click "Deploy"**

## 🐛 Troubleshooting 404 Errors

If you're getting 404 errors on Vercel:

### Problem: Missing vercel.json
**Solution:** Make sure `vercel.json` is in your root directory with the correct configuration.

### Problem: Incorrect file structure
**Solution:** Ensure `index.html` is in the root directory, not in a subdirectory.

### Problem: Build settings
**Solution:** In Vercel dashboard:
- Go to Project Settings
- Navigate to "General" → "Build & Development Settings"
- Framework Preset: **Other**
- Build Command: **Leave empty** or `echo "No build needed"`
- Output Directory: **Leave empty** or `.`
- Install Command: **Leave empty** or `echo "No install needed"`

### Problem: Routing issues
**Solution:** The `vercel.json` file includes routing configuration to handle all routes and redirect to `index.html`.

## 📝 File Requirements

Make sure you have these files in your root directory:

- ✅ `index.html` - Your main HTML file
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - Project metadata (optional but recommended)
- ✅ `.gitignore` - Git ignore rules (if using Git)

## 🌐 Testing Locally

You can test your site locally before deploying:

1. **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

2. **Using Node.js (serve):**
   ```bash
   npx serve .
   ```
   Then visit the URL shown in terminal

3. **Using PHP:**
   ```bash
   php -S localhost:8000
   ```
   Then visit: `http://localhost:8000`

## 🎨 Features

- **DevOps Architecture**: CI/CD pipelines, cloud infrastructure, Kubernetes
- **Modern Energy Grid**: AI-powered predictions, dynamic optimization
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Mode**: Toggle theme with persistent storage
- **Smooth Animations**: Intersection Observer API for scroll effects
- **Contact Form**: Functional form with validation

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Font Awesome** - Icons
- **Google Fonts** - Poppins font family

## 📦 Dependencies

All dependencies are loaded via CDN:
- Font Awesome 6.4.0
- Google Fonts (Poppins)

No npm packages required for deployment!

## 🔐 Environment Variables

This project doesn't require any environment variables. All configuration is static.

## 📧 Support

For issues or questions:
- Email: hello@nmgo.ai
- Phone: +1-415-555-0199

## 📄 License

MIT License - See LICENSE file for details

---

**Built with ❤️ by the NMGO Team**
