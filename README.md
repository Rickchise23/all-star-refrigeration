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
   Create a new repo on GitHub, then:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/all-star-refrigeration.git
   git branch -M main
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

## Where to put photos

Drop images into **`public/photos/`** so they’re available at `/photos/filename.jpg`:

- `public/photos/allstar-tech-on-roof.jpg`
- `public/photos/phoenix-family-living-room.jpg`
- `public/photos/ac-unit-closeup-night.jpg`

