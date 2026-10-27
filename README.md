# LUMIÈRE — Fine Art & Editorial Photography Portfolio

A photography portfolio website crafted for editorial, portrait, landscape, and fine art photographers.

---

## ✨ Key Features

1. **Editorial Aesthetic & Cinematic Typography**
   - Headings set in **Playfair Display**, clean UI in **Plus Jakarta Sans**, and technical camera data in **JetBrains Mono**.
   - Subtle analog film grain texture overlay.
   - Dynamic dark obsidian atmosphere with smooth glassmorphism navigation.

2. **Interactive Multi-Category Portfolio Gallery**
   - Filter by categories: **All**, **Portraits**, **Landscapes**, **Architecture**, **Street & Noir**, and **Wildlife**.
   - Live badge counters indicating the number of photographs per collection.
   - Layout mode switcher: switch dynamically between **Masonry Flow** and **Compact Grid**.
   - Hover cards showing series title, location, camera, aperture, and quick favorite/like button.

3. **High-End Lightbox & EXIF Data Inspector**
   - Fullscreen modal overlay with background blur.
   - Keyboard navigation:
     - `←` Previous photograph
     - `→` Next photograph
     - `ESC` Close viewer
   - Complete camera technical metadata breakdown:
     - Camera body (e.g. *Leica M11-P*, *Hasselblad X2D 100C*, *Sony A1*)
     - Lens & Focal Length
     - Aperture, Shutter Speed, and ISO
   - Like counter with **localStorage persistence**.
   - Shareable link copy tool with instant toast confirmation.
   - Fullscreen presentation mode.

4. **Multi-Theme Switcher**
   - **Cinema Dark** (Obsidian & Metallic Warm Gold)
   - **Warm Sepia** (Analog Vintage Dark Amber)
   - **Light Gallery** (Clean Museum White)
   - Remembers your selection across sessions via `localStorage`.

5. **Artist Statement & Equipment Showcase**
   - Photographer biography, philosophy on light, and camera systems breakdown.
   - Editorial endorsements from magazine art directors and private collectors.

6. **Investment & Services Pricing**
   - 3 structured tiers: Fine Art Portraits, Editorial & Brand Campaigns, and Architecture & Spaces.
   - Inclusions and clear deliverables.

7. **Interactive Booking / Consultation Form**
   - Dedicated inquiry form for date, project vision, budget, and contact info.
   - Realistic submit state with animated spinner and toast notifications.

---

## 📂 Project Structure

```
exercice/
│
├── index_web.html       # Primary photography website file
├── index.html           # Server-standard mirror
├── README.md            # Documentation & customization guide
│
├── css/
│   └── styles.css       # Complete modern CSS variables, responsive styling, and animations
│
└── js/
    └── main.js          # Interactive gallery, lightbox, theme manager, and toast system
```

---

## 🚀 How to View the Website

- **Direct Browser Preview**: Double click `index_web.html` or `index.html` to open it in Chrome, Edge, Safari, or Firefox.
- **Local Web Server**: If using VS Code / IDE Live Server or any static HTTP server:
  - Serve the `exercice` folder and navigate to `http://localhost:PORT/index_web.html` or `http://localhost:PORT/`.

---

## 🎨 How to Customize

### Adding Your Own Photographs
Open [`js/main.js`](file:///c:/Users/ammou/Desktop/exercice/js/main.js) and look for the `photoCollection` array. You can add or replace entries:

```javascript
{
  id: 13,
  title: "Your Photo Title",
  category: "portrait", // portrait | landscape | architecture | street | wildlife
  location: "Kyoto, Japan",
  aspect: "portrait",   // portrait | landscape | square | panoramic
  src: "path/to/your/high-res-photo.jpg",
  thumb: "path/to/your/thumbnail.jpg",
  story: "The artistic background or description of this photograph.",
  exif: {
    camera: "Leica M11",
    lens: "50mm f/1.4",
    aperture: "ƒ/1.4",
    shutter: "1/500s",
    iso: "ISO 100",
    focal: "50mm"
  },
  likes: 0
}
```

### Changing Accent Color
Open [`css/styles.css`](file:///c:/Users/ammou/Desktop/exercice/css/styles.css) and edit `--text-accent`:
```css
:root {
  --text-accent: #d4af37; /* Change to your preferred brand color */
}
```

