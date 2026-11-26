# Personal research portfolio — Deepak Bindhu Prasad

Static website (plain HTML/CSS/JS, no build step) for GitHub Pages.

## Preview locally

```bash
cd website
python -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages

1. Create a public repository named **`deepakbprasad1.github.io`** (username + `.github.io`).
2. Upload the *contents* of this `website/` folder to the repository root (drag-and-drop on github.com, or):
   ```bash
   cd website
   git init -b main
   git add .
   git commit -m "Portfolio site"
   git remote add origin https://github.com/deepakprasadbindhu/deepakbprasad1.github.io.git
   git push -u origin main
   ```
3. Repository → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. After about a minute the site is live at `https://deepakbprasad1.github.io`.

## Layout

```
index.html               the page (all text lives here)
assets/css/style.css     styling (light + dark mode)
assets/js/main.js        menu, lightbox, certificate filter, video autoplay
assets/img/              optimised photos
assets/video/            compressed H.264 clips + poster frames
assets/thumbs/           certificate preview images
assets/docs/             CV, certificates (PDF), reports and paper
```

## Editing

- Text, captions, links: edit `index.html`.
- Add a certificate: put the PDF in `assets/docs/certificates/`, a JPG preview in `assets/thumbs/`,
  then copy one `<button class="cert" ...>` line and change the paths, caption and `data-cat`
  (`award`, `competition`, `publication` or `training`).
- Replace the CV: overwrite `assets/docs/Deepak_Bindhu_Prasad_CV.pdf` (keep the same name).

Transcripts, grade sheets, recommendation letters and employment letters are deliberately **not** in this
repository. Anything pushed to a public GitHub repo stays in its history even if deleted later.
