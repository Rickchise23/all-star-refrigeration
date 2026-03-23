# Site photos

Images are listed in **`OWNER_PHOTO_FILES`** at the top of `allstar-website.jsx`.

- **`HERO_VAN_FILENAME`** (default `IMG_1826.jpeg`) — **next to the home hero** only; **excluded** from the home “Our work” gallery (`HOME_GALLERY_EXCLUDE`).
- **`PHOTO_STRIP`** — three images above **“Our work”** (`image10`, `image1`, `image8` by default: tech / professional, van, third tile). **`image0`** (BBB) is **in the gallery** below, not on the strip. Edit `PHOTO_STRIP` in code to change files or captions.
- **Emergency AC Repair** service page: same van as **`HERO_VAN_FILENAME`** (`IMG_1826.jpeg` by default — not in **home gallery**). Included section: **What You Get** and **When to Call Us** / **Common scenarios** in the **left column**; **three** photos **stacked** on the **right** with even spacing. **`image8`** is also the **home photo strip** third tile — see `REPAIR_PAGE_*` in code.
- **AC Installation & Replacement** service page: **`image14.jpeg`** (hero). Included section uses **paired rows**: **What You Get** + **`image6`**, then **When to Call Us** + **`image5`** (crane), so **Common scenarios** lines up with the crane photo. **`image11`** and **`image15`** are **not** on the install page and are **excluded from the home gallery** (`HOME_GALLERY_EXCLUDE`) — see `INSTALL_PAGE_*` in code.
- **Heating Repair & Install** service page: **`image12.jpeg`** in the **hero** (same two-column layout as AC repair / install). **`image12`** is also in the **home gallery** — see `HEATING_PAGE_*` in code.
- **Seasonal Maintenance** service page: **`image7.jpeg`** in the **hero**, **`image8.jpeg`** in the **right column** (same file as the **home photo strip** third tile; excluded from the gallery below) — see `MAINTENANCE_PAGE_*` in code.
- **Gallery** uses everything in `OWNER_PHOTO_FILES` except strip images, service-detail-only shots (`REPAIR_PAGE_GALLERY_EXCLUDE`, `INSTALL_PAGE_GALLERY_EXCLUDE`, `MAINTENANCE_PAGE_GALLERY_EXCLUDE`; `HEATING_PAGE_GALLERY_EXCLUDE` is empty), and **`HOME_GALLERY_EXCLUDE`** (**`image11`**, **`image15`**, hero van **`HERO_VAN_FILENAME`**).

To add or remove photos: put files in this folder, then update the `OWNER_PHOTO_FILES` array (keep the exact filename including `.jpeg` / `.jpg` / `.png`).
