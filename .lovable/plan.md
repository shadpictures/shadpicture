## Goal
Expand the homepage hero rotator from 3 images to 6, with the 3 newly uploaded photos appearing first and the existing 3 (couples, weddings, portraits) appearing after.

## Changes

1. **Copy uploads to `src/assets/`** as new files:
   - `user-uploads://shad.pictures_-_1.jpg` → `src/assets/hero-1.jpg` (woman on marble stairs)
   - `user-uploads://IMGL6196-2.jpg` → `src/assets/hero-2.jpg` (couple embracing)
   - `user-uploads://shad.pictures_-_1_1.jpg` → `src/assets/hero-3.jpg` (couple under lamplight)

2. **Edit `src/routes/index.tsx`**:
   - Import the 3 new images.
   - Update the `heroImages` array to 6 entries in this order: hero-1, hero-2, hero-3, couples, weddings, portraits — each with descriptive alt text.
   - No other changes; the existing rotation interval (5s) and Ken Burns / fade transitions automatically scale to 6 images.

## Out of scope
No changes to category cards, portfolio pages, or any other section.
