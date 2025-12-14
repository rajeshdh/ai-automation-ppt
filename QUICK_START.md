# Quick Start Guide

## Prerequisites

Make sure you have Node.js installed (version 14 or higher):
```bash
node --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org)

## Installation & Running

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The presentation will automatically open in your browser at `http://localhost:3000`

## Navigation Shortcuts

### Keyboard Controls
| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `PageDown` | Next slide |
| `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |

### Touch Controls (Mobile/Tablet)
| Gesture | Action |
|---------|--------|
| Swipe Left | Next slide |
| Swipe Right | Previous slide |

### Mouse Controls
- Click the chevron buttons on the left/right sides
- Buttons appear when you hover over the slide

## Building for Production

### Create Production Build
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## Project Structure Quick Reference

```
automation workflows/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── SlideControls.jsx
│   ├── slides/              # Slide components
│   │   ├── TitleSlide.jsx
│   │   ├── TwoColumnSlide.jsx
│   │   ├── WorkflowSimulation.jsx
│   │   └── slidesContent.jsx  ← Add new slides here
│   ├── hooks/               # Custom hooks
│   ├── data/                # Data files
│   │   └── speakerNotes.js  ← Edit speaker notes here
│   ├── styles/              # CSS files
│   │   ├── global.css
│   │   └── slides.css       ← Edit slide styles here
│   ├── App.jsx              # Main component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── README.md
```

## Common Tasks

### Adding a New Slide

1. Open `src/slides/slidesContent.jsx`
2. Add your slide JSX to the `slidesContent` array
3. Add corresponding speaker notes in `src/data/speakerNotes.js`

Example:
```jsx
// In slidesContent.jsx
<div key="my-new-slide" className="w-full">
  <h2 className="slide-title">My New Slide</h2>
  <p>Content goes here...</p>
</div>
```

### Editing Speaker Notes

1. Open `src/data/speakerNotes.js`
2. Edit the array entry that corresponds to your slide
3. Notes are in the same order as slides

### Changing Colors/Styles

1. Open `src/styles/slides.css`
2. Find the relevant CSS class
3. Edit colors, sizes, etc.

Main color variables to change:
- Blue: `#3b82f6`, `#60a5fa`
- Purple: `#8b5cf6`
- Dark backgrounds: `#0f172a`, `#1e293b`
- Green (checkmarks): `#10b981`

### Changing Fonts

1. Open `src/styles/global.css`
2. Update the Google Fonts import URL
3. Change `font-family` values

Current fonts:
- Body: `Inter`
- Headings: `Plus Jakarta Sans`

## Troubleshooting

### Port 3000 is already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill

# Or specify a different port
npm run dev -- --port 3001
```

### Hot reload not working
1. Stop the dev server (Ctrl+C)
2. Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
npm run dev
```

### Build fails
1. Clear cache and rebuild:
```bash
rm -rf dist
npm run build
```

### Styles not updating
1. Hard refresh in browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Clear browser cache
3. Restart dev server

## Deployment

### Deploy to Netlify (Easiest)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Framework: Vite
6. Click "Deploy"

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## Testing on Mobile

### Using Your Phone
1. Make sure your phone and computer are on the same WiFi
2. Find your computer's IP address:
   - Mac: `ifconfig | grep "inet " | grep -v 127.0.0.1`
   - Windows: `ipconfig`
3. Start dev server: `npm run dev`
4. On your phone, visit: `http://YOUR_IP:3000`

Example: `http://192.168.1.100:3000`

### Using Browser DevTools
1. Open presentation in Chrome
2. Press `F12` to open DevTools
3. Click "Toggle Device Toolbar" (or press `Cmd+Shift+M`)
4. Select a mobile device from the dropdown
5. Test touch gestures by clicking and dragging

## Performance Tips

### Images
- Compress images before adding them
- Use WebP format for better compression
- Consider lazy loading for many images

### Fonts
- Currently loading from Google Fonts
- For better performance, download and self-host fonts

### Build Size
- Check build size: `npm run build`
- Analyze bundle: Install `rollup-plugin-visualizer`

## Getting Help

### Documentation
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

### Common Issues
- Check browser console (F12) for errors
- Make sure all dependencies are installed
- Try clearing `node_modules` and reinstalling
- Check that you're using Node.js 14+

## Next Steps

1. **Customize Content**: Edit slides to match your presentation
2. **Adjust Styling**: Change colors and fonts to your branding
3. **Add Features**: Consider adding speaker notes view, timer, etc.
4. **Test**: Test on multiple devices and browsers
5. **Deploy**: Choose a hosting platform and deploy

Enjoy your presentation! 🎉
