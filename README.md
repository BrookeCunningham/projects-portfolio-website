# Brooke Cunningham - React Portfolio

A clean, minimalist portfolio built with **React + Vite** (NO backend, NO Next.js complexity!)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed

### Installation

1. **Download the portfolio folder**

2. **Open Terminal in the folder:**
   ```bash
   cd react-portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the dev server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:5173
   ```

That's it! 🎉

## ⚡ Why This Version is Better

✅ **Vite instead of Next.js** - MUCH faster and lighter
✅ **Pure React** - No server-side code, no backend
✅ **Uses WAY less memory** - No webpack caching issues
✅ **Starts in seconds** - Not minutes
✅ **Same beautiful design** - Looks identical
✅ **Easy to deploy** - Build once, deploy anywhere

## 📝 Updating Your Projects

Open `src/App.jsx` and find the `projects` array (around line 5):

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "What it does in 1-2 sentences",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/BrookeCunningham/your-repo",
    demo: "https://your-live-site.com"
  },
  // Add more projects...
]
```

Just update the text and links!

## 🖼️ Adding Project Screenshots

### Option 1: External Images (Easiest)
Upload your screenshot to GitHub and use the URL:

```jsx
<div className="project-image">
  <img 
    src="https://raw.githubusercontent.com/yourusername/repo/main/screenshot.png" 
    alt="Project screenshot"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

### Option 2: Local Images
1. Create a `public/images` folder
2. Put your screenshots there
3. Update the code:

```jsx
<div className="project-image">
  <img 
    src="/images/project-name.png" 
    alt="Project screenshot"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

In `src/App.jsx`, replace the placeholder `<div className="project-image">` section for each project.

## 🌐 Deploying (Free!)

### Method 1: Vercel (Recommended)

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/BrookeCunningham/portfolio.git
   git push -u origin main
   ```

3. **Deploy:**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

Done! Live in 2 minutes at `your-name.vercel.app`

### Method 2: Netlify

1. **Build:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to https://netlify.com
   - Drag and drop the `dist` folder
   - Your site is live!

### Method 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

Live at: `BrookeCunningham.github.io/portfolio`

## 📂 Project Structure

```
react-portfolio/
├── src/
│   ├── App.jsx          # Main component (EDIT THIS!)
│   ├── main.jsx         # Entry point
│   └── index.css        # Styles
├── public/              # Static files (add images here)
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite config
```

## 🛠️ Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## ✏️ Customizing

### Change Your Info

All your info is in `src/App.jsx`:
- Name: Line 37
- Email: Line 196
- GitHub: Line 57 & 201
- LinkedIn: Line 208
- About text: Lines 158-168
- Tech stack: Lines 175-188

### Change Colors

Edit `src/index.css`:
- Search for color codes like `#111827`, `#4b5563`, etc.
- Replace with your preferred colors

### Change Fonts

Edit `index.html` (line 7):
- Change the Google Fonts URL
- Update `src/index.css` font-family references

## 🆘 Troubleshooting

**"npm: command not found"**
- Install Node.js from https://nodejs.org

**Port 5173 in use**
- Vite will automatically use 5174, 5175, etc.

**Changes not showing**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**Build fails**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## 🎯 Advantages Over Next.js Version

| Feature | React + Vite | Next.js |
|---------|--------------|---------|
| Startup time | 2-3 seconds | 20-30 seconds |
| Memory usage | ~200MB | ~800MB+ |
| Build complexity | Simple | Complex |
| Hot reload | Instant | Slow |
| Backend needed | No | Yes |
| Learning curve | Easy | Steeper |

## 📧 Need Help?

If you get stuck, just ask! This version is much simpler than Next.js.

---

Built with ❤️ using React + Vite
