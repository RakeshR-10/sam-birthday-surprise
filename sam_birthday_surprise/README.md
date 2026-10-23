# Heyy Thangoo!! — Birthday Surprise Website

A mobile-friendly, single-page birthday website with:
- Cupid / heart balloon birthday reveal
- Floating sparkle background and heart confetti
- Four clickable memory cards using your four photos, plus the Calicut tea-glass video
- Expandable Tamil-English personal letter
- Final birthday message
- Optional music support

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. For best results, use a recent browser and an internet connection for the fonts.

## Add Sam's photos
Copy your photos into `assets/photos/` and use these filenames:
- `onam.jpg`
- `class-days.jpg`
- `calicut.jpg`
- `little-things.jpg`

Your four photos and Calicut tea-glass video are already included in `assets/photos/`. To replace or add more memories, edit the photo paths and captions in `index.html`.

```html
<div class="photo-slot">
  <img src="assets/photos/onam.jpg" alt="Our Onam memory">
</div>
```

Then add this CSS to `style.css`:

```css
.photo-slot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}
```

## Optional music
Add a royalty-free MP3 at `assets/music.mp3`. Music starts only after the visitor taps the music button. Please use a song you have permission to share.

## Publish a shareable link with GitHub Pages
1. Create or sign in to GitHub.
2. Create a new public repository, for example `sam-birthday-surprise`.
3. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder to the repository root.
4. Open repository **Settings → Pages**.
5. Under build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish. The link will look like `https://YOUR-USERNAME.github.io/sam-birthday-surprise/`.
7. Open the link on your phone before sending it.

## Personal note
The letter is intentionally warm but non-pressuring: it apologizes for your part, respects Sam's relationship and space, and expresses a hope for friendship without demanding a reply. Please read it once and adjust any line that doesn't sound like you.
