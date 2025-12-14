# Automation Workflows Presentation

A fully responsive, touch-enabled slide deck built with React for presenting "Automation Workflows for Research Work" at Chandigarh University.

## Features

- **Responsive Design**: Adapts to desktop, tablet, and mobile screens
- **Touch Gestures**: Swipe left/right on mobile and tablet devices
- **Keyboard Navigation**:
  - Arrow keys (Left/Right) to navigate
  - Space bar to go to next slide
  - Home/End to jump to first/last slide
  - PageUp/PageDown for navigation
- **Modern Architecture**: Component-based structure with separation of concerns
- **Smooth Animations**: Professional slide transitions
- **Progress Tracking**: Visual progress bar and slide counter
- **Accessible**: Keyboard and screen reader friendly

## Project Structure

```
automation workflows/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── SlideControls.jsx
│   │   └── SlideControls.css
│   ├── slides/              # Slide components
│   │   ├── TitleSlide.jsx
│   │   ├── TwoColumnSlide.jsx
│   │   ├── WorkflowSimulation.jsx
│   │   └── slidesContent.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useSwipe.js     # Touch gesture handling
│   │   └── useKeyboard.js  # Keyboard navigation
│   ├── data/               # Data files
│   │   └── speakerNotes.js
│   ├── styles/             # CSS files
│   │   ├── global.css
│   │   └── slides.css
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── index.html
├── vite.config.js
└── package.json
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The presentation will open automatically in your default browser at `http://localhost:3000`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Navigation Controls

### Keyboard
- **Arrow Right / Space / PageDown**: Next slide
- **Arrow Left / PageUp**: Previous slide
- **Home**: Jump to first slide
- **End**: Jump to last slide

### Touch Devices
- **Swipe Left**: Next slide
- **Swipe Right**: Previous slide

### Mouse
- Click the chevron buttons on the sides
- Navigation buttons appear on hover

## Customization

### Adding New Slides

1. Create your slide component in `src/slides/`
2. Import it in `src/slides/slidesContent.jsx`
3. Add it to the `slidesContent` array
4. Add corresponding speaker notes in `src/data/speakerNotes.js`

### Modifying Styles

- **Global styles**: Edit `src/styles/global.css`
- **Slide styles**: Edit `src/styles/slides.css`
- **Component-specific styles**: Edit the component's CSS file

### Responsive Breakpoints

- **Desktop**: 1280px wide slide container
- **Tablet**: < 1400px (95vw with 16:9 aspect ratio)
- **Mobile**: < 768px (fullscreen)

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Lucide React**: Icon library
- **CSS3**: Styling with custom properties and animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Author

Rajesh Dhiman
Automation Engineer | Eunix Tech
