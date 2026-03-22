# Site photos

Images are listed in **`OWNER_PHOTO_FILES`** at the top of `allstar-website.jsx`.

- **`HERO_VAN_FILENAME`** (default `image4.jpeg`) — white Sprinter **next to the home hero**.
- **`PHOTO_STRIP`** — three images above **“Our work”** (`image0`, `image1`, `image5` by default: BBB, van, crane). Edit `PHOTO_STRIP` in code to change files or captions.
- **Gallery** uses everything in `OWNER_PHOTO_FILES` except the hero van and the strip images (`PHOTO_STRIP_FILENAMES`).

To add or remove photos: put files in this folder, then update the `OWNER_PHOTO_FILES` array (keep the exact filename including `.jpeg` / `.jpg` / `.png`).
