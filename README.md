# Gian Lester Igana — Portfolio

A premium, dark-mode portfolio website built with HTML5, CSS3, and vanilla JavaScript. Designed for deployment on GitHub Pages with no backend required.

**Live URL (after deployment):** `https://gianlesterigana.github.io/portfolio/`

---

## Features

- Full-viewport hero with profile photo and floating tech badges
- Sticky blurred navigation with scroll-spy active states
- Project filtering (All, Web Development, Arduino, Python)
- Vertical timeline for experience and education
- Dual resume/CV downloads
- Contact form powered by EmailJS (free tier)
- SEO optimized with meta tags, Open Graph, Twitter Cards, and JSON-LD
- Subtle animations: fade-in on scroll, cursor glow, loading screen
- Fully responsive (desktop, laptop, tablet, mobile)
- Lighthouse targets: 90+ across all categories

---

## File Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── images/
    │   ├── profile.jpg
    │   ├── og-image.svg
    │   └── project-*.svg
    ├── icons/
    │   └── *.svg
    └── resume/
        ├── Resume_Gian_Lester_Igana.pdf
        └── CV_Gian_Lester_Igana.pdf
```

---

## Local Preview

Open `index.html` directly in a browser, or use a local server:

```bash
# Option 1: npx serve
npx serve .

# Option 2: Python
python -m http.server 8000
```

Then visit `http://localhost:8000` (or the port shown).

---

## EmailJS Setup (Contact Form)

The contact form sends messages directly to **gianlester.igana1@gmail.com** via [EmailJS](https://www.emailjs.com) (free tier: 200 emails/month).

### Step 1 — Create an EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and sign up for free.
2. Verify your email address.

### Step 2 — Add an Email Service

1. In the EmailJS dashboard, go to **Email Services** → **Add New Service**.
2. Choose **Gmail** and connect your account (`gianlester.igana1@gmail.com`).
3. Note the **Service ID** (e.g. `service_abc123`).

### Step 3 — Create an Email Template

1. Go to **Email Templates** → **Create New Template**.
2. Set the template content:

   **Subject:** `Portfolio Contact: {{subject}}`

   **Body:**
   ```
   New message from your portfolio website.

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```

3. Set **To Email** to your Gmail address.
4. Note the **Template ID** (e.g. `template_xyz789`).

### Step 4 — Get Your Public Key

1. Go to **Account** → **General**.
2. Copy your **Public Key** (e.g. `abcdefghijklmnop`).

### Step 5 — Update script.js

Open [`script.js`](script.js) and replace the three placeholders at the top:

```javascript
const EMAILJS_SERVICE_ID  = 'service_abc123';   // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';  // Your Template ID
const EMAILJS_PUBLIC_KEY  = 'abcdefghijklmnop'; // Your Public Key
```

Save the file and test the contact form locally or after deployment.

---

## GitHub Pages Deployment

### Step 1 — Create a GitHub Repository

1. Create a new repository on GitHub named `portfolio` (or any name).
2. If using a custom repo name, update URLs in:
   - `index.html` (canonical, OG, JSON-LD)
   - `robots.txt`
   - `sitemap.xml`

### Step 2 — Push Your Code

```bash
git init
git add .
git commit -m "Add Gian Lester Igana portfolio website"
git branch -M main
git remote add origin https://github.com/gianlesterigana/portfolio.git
git push -u origin main
```

Replace `gianlesterigana` with your actual GitHub username if different.

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub.
2. **Settings** → **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose branch: `main`, folder: `/ (root)`.
5. Click **Save**.

Your site will be live at `https://YOUR-USERNAME.github.io/portfolio/` within a few minutes.

---

## Customization

| What to change | Where |
|---|---|
| GitHub Pages URL | `index.html`, `robots.txt`, `sitemap.xml` |
| EmailJS credentials | `script.js` (top of file) |
| Profile photo | `assets/images/profile.jpg` |
| Resume files | `assets/resume/` |
| Project content | `index.html` → Projects section |
| Colors & design | `style.css` → `:root` variables |

---

## Performance Notes

- Project images use `loading="lazy"`
- Hero profile uses `fetchpriority="high"`
- No JavaScript frameworks — minimal bundle size
- SVG icons and images for fast loading
- `prefers-reduced-motion` disables animations for accessibility

---

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Android)

---

## License

Personal portfolio — all rights reserved © Gian Lester Igana.
