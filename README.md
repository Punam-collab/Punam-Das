# Portfolio

Static personal site. Plain HTML and CSS, hosted on Vercel from this repository.

## Add a piece of work
1. Put the file in `work/` (use lowercase names with hyphens, no spaces: `thames-water-report.pdf`).
2. In `index.html`, copy the commented row template inside the Work section, paste it above the empty-state row, and fill it in.
3. Delete the empty-state row once you have a real entry.
4. Publish:
   ```
   git add .
   git commit -m "Add thames water report"
   git push
   ```
   Vercel redeploys automatically within about a minute.

## Preview locally
Open the folder in VS Code and use the Live Server extension on `index.html`.
