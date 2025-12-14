# Architecture Overview

## Component Hierarchy

```
App (Root Component)
├── State Management
│   ├── currentSlide
│   ├── direction
│   └── totalSlides
│
├── Custom Hooks
│   ├── useSwipe (Touch gestures)
│   └── useKeyboard (Keyboard navigation)
│
├── Main Container
│   ├── Slide Content (Dynamic)
│   │   ├── WorkflowSimulation
│   │   ├── TitleSlide
│   │   ├── TwoColumnSlide
│   │   └── Custom Slide JSX
│   │
│   └── SlideControls
│       ├── Previous Button
│       ├── Next Button
│       ├── Progress Bar
│       └── Slide Counter
```

## Data Flow

```
User Action (Swipe/Key/Click)
         ↓
    Event Handler
         ↓
  State Update (setCurrentSlide)
         ↓
    Re-render App
         ↓
   New Slide Displayed
```

## File Dependencies

```
main.jsx
  └─→ App.jsx
       ├─→ hooks/useSwipe.js
       ├─→ hooks/useKeyboard.js
       ├─→ components/SlideControls.jsx
       │    └─→ components/SlideControls.css
       ├─→ slides/slidesContent.jsx
       │    ├─→ slides/WorkflowSimulation.jsx
       │    ├─→ slides/TitleSlide.jsx
       │    └─→ slides/TwoColumnSlide.jsx
       ├─→ styles/slides.css
       └─→ styles/global.css (imported in main.jsx)
```

## State Management

### Current Implementation
- **Local State**: Using React's `useState` for slide management
- **Callbacks**: Using `useCallback` for memoized handlers
- **Props Drilling**: Passing callbacks to SlideControls

### Why This Approach?
- Simple and sufficient for a slide deck
- No need for complex state management
- Fast and performant
- Easy to understand and maintain

### If Scaling Up
For a larger application, you could migrate to:
- Context API (for avoiding props drilling)
- Redux (for complex state logic)
- Zustand (lightweight alternative)

## Styling Strategy

### CSS Organization
```
styles/
├── global.css        - Base styles, fonts, resets
└── slides.css        - Slide-specific styles, layouts

components/
└── SlideControls.css - Component-specific styles
```

### Why Separate CSS Files?
1. **Modularity**: Each component owns its styles
2. **Maintenance**: Easy to find and update styles
3. **Performance**: Can be code-split if needed
4. **Clarity**: Clear separation of concerns

### Alternative Approaches
You could also use:
- CSS Modules (`.module.css`)
- Styled Components (CSS-in-JS)
- Tailwind CSS (utility-first)
- Emotion or Linaria

## Custom Hooks

### useSwipe
**Purpose**: Handle touch gestures for mobile navigation

**How it works**:
1. Captures touch start position
2. Tracks touch movement
3. Calculates swipe distance on touch end
4. Triggers appropriate callback (left/right)

**Benefits**:
- Reusable across any component
- Clean separation from UI logic
- Easy to test independently

### useKeyboard
**Purpose**: Handle keyboard navigation

**How it works**:
1. Listens to keydown events globally
2. Maps keys to navigation actions
3. Prevents default browser behavior
4. Triggers appropriate callback

**Benefits**:
- Accessibility support
- Power user features
- Clean hook API

## Build Process

### Development
```
Vite Dev Server
     ↓
Fast HMR (Hot Module Replacement)
     ↓
Instant Updates in Browser
```

### Production
```
Source Files
     ↓
Vite Build Process
     ↓
Optimizations:
  - Minification
  - Tree shaking
  - Code splitting
  - Asset optimization
     ↓
Production Bundle
```

## Performance Optimizations

### Current Optimizations
1. **useCallback**: Prevents unnecessary re-renders
2. **Key prop**: Efficient slide transitions
3. **CSS transitions**: Hardware-accelerated animations
4. **Vite**: Fast build and development

### Future Optimizations (if needed)
1. **React.memo**: Memoize slide components
2. **useMemo**: Cache expensive computations
3. **Lazy loading**: Load slides on demand
4. **Image optimization**: Compress and lazy load images
5. **Service worker**: Offline capability

## Responsive Design Strategy

### Breakpoint System
```
Desktop:   1280px fixed container
Tablet:    < 1400px (95vw, 16:9 ratio)
Mobile:    < 768px (fullscreen)
Small:     < 480px (smaller fonts)
```

### Approach
- Mobile-first CSS (base styles for mobile)
- Progressive enhancement for larger screens
- Flexible layouts with CSS Grid and Flexbox
- Responsive typography with clamp() where needed

## Accessibility Features

### Current Implementation
1. **Keyboard Navigation**: Full keyboard support
2. **ARIA Labels**: Descriptive button labels
3. **Focus Management**: Visible focus indicators
4. **Semantic HTML**: Proper heading hierarchy

### Future Enhancements
1. Screen reader announcements for slide changes
2. Skip to slide functionality
3. High contrast mode
4. Reduced motion support

## Extension Points

### Easy to Add
1. **New Slides**: Add to slidesContent array
2. **New Slide Types**: Create new component in slides/
3. **Custom Animations**: Update slides.css
4. **New Navigation**: Add to useKeyboard hook

### Moderate Effort
1. **Slide Thumbnails**: Create new component
2. **Speaker Notes**: Add notes panel
3. **Timer**: Add countdown component
4. **Themes**: Create theme system

### Complex (but possible)
1. **URL Routing**: Add React Router
2. **PDF Export**: Add print styles + library
3. **Multiplayer Mode**: Add WebRTC/WebSocket
4. **Slide Editor**: Add WYSIWYG editor

## Testing Strategy (Recommended)

### Unit Tests
- Test custom hooks (useSwipe, useKeyboard)
- Test individual slide components
- Test navigation logic

### Integration Tests
- Test slide transitions
- Test keyboard navigation flow
- Test touch gesture flow

### E2E Tests
- Full presentation flow
- Cross-browser testing
- Mobile device testing

### Tools to Consider
- Vitest (Vite-native testing)
- React Testing Library
- Cypress or Playwright (E2E)

## Deployment Options

### Static Hosting
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

### Traditional Hosting
- Any web server (Nginx, Apache)
- Just serve the `dist/` folder

### CDN
- Cloudflare
- AWS CloudFront
- Fastly
