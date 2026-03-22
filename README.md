# All Star Refrigeration Website

Marketing site for **All Star Refrigeration** (Phoenix, AZ).

- Home, Services, About, Reviews, Contact + FAQ
- Transparent pricing, photo strip, mobile CTA

## Local development

```bash
npm install
npm run dev
```

Open **http://localhost:5173**.

## Deploy on Vercel (owner can view + you can edit)

1. **Put the project in Git** (if it isn’t already):
   ```bash
   git init
   git add .
   git commit -m "Initial All Star site"
   ```

2. **Push to GitHub**  
   Create a new repo at [github.com/new](https://github.com/new) named `all-star-refrigeration` (no README/license). Then run (replace **YOUR_USERNAME** with your GitHub username):
   ```bash
   cd "/Users/rickgriffith/Desktop/All Star"
   git remote add origin https://github.com/YOUR_USERNAME/all-star-refrigeration.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
   - **Add New Project** → **Import** your `all-star-refrigeration` repo.
   - Leave **Build Command** as `npm run build` and **Output Directory** as `dist`.
   - Click **Deploy**. Vercel will give you a URL like `https://all-star-xxx.vercel.app`.

4. **Share the live URL** with the owner so they can view the site.

5. **Making edits**
   - You edit code locally (or on GitHub), push to `main`.
   - Vercel automatically rebuilds and updates the live site. The owner sees changes after each deploy.

**Optional:** In the Vercel project, go to **Settings → Domains** to add a custom domain (e.g. `allstarrefrigerationllc.com`) when you’re ready.

## Photos

Owner images live in **`public/photos/`**. Filenames are listed in the **`OWNER_PHOTO_FILES`** array in `allstar-website.jsx` (first 3 = hero strip, rest = gallery). Commit and push so Vercel deploys them.

