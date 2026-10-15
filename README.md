# Vedantstudiio — Portfolio

A four-page responsive portfolio in warm ivory, beige and black.

## Pages
- `index.html` — Home
- `work.html` — Selected work
- `lab.html` — The Lab (8 photo-ready study sections)
- `about.html` — About and contact

## Add or replace images manually in the code
Open the relevant HTML file and find `src="assets/..."`. Change the filename inside `src` to your image path. Keep the image file inside the `assets` folder for the simplest setup. Example:

`<img class="replaceable-image" src="assets/lab-01.jpg" ...>`

The first three Lab studies use these paths:
- `assets/lab-type.jpg`
- `assets/lab-motion.jpg`
- `assets/lab-system.jpg`

Five additional photo-ready Lab studies use:
- `assets/lab-04.jpg` through `assets/lab-08.jpg`

You can add more Lab studies by duplicating an `<article class="lab-item">...</article>` block in `lab.html`, then changing its image `src`, heading, description, and labels. The existing layout adapts to desktop and mobile. If an image is not found, the designed placeholder artwork remains visible.

Other image paths:
- `index.html`: `assets/hero.jpg`, `assets/smilecare.jpg`, `assets/elementa.jpg`
- `about.html`: `assets/vedant.jpg`
- `work.html`: project preview image paths are marked next to their image slots.

## Add project links manually
Open `work.html`, search for `OPEN PROJECT`, and replace the relevant `href="#"` with the actual live URL. Example: `href="https://your-live-project-link.com"`.

## Contact
Email: `vcryptofficial01@gmail.com`
Instagram: `https://instagram.com/vedantstudiio`
The contact form opens the visitor's email app; it does not submit to a server.

## Preview and publish
Open `index.html` in a browser. Upload the contents of this folder to your GitHub repository, keeping all four HTML files, `styles.css`, `script.js`, and `assets/` together. Google Fonts require an internet connection; fallback fonts are provided.
