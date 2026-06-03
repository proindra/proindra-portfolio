# GitHub Pages Setup Guide

## What Was Done

### 1. **Next.js Configuration** (`next.config.js`)
```javascript
{
  basePath: "/proindra_portfolio",    // GitHub Pages subdirectory
  output: "export",                   // Static export for GitHub Pages
  images: {
    unoptimized: true,                // Disable optimization for static export
    remotePatterns: [...]             // External image sources
  }
}
```

### 2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Triggers on every push to `main` branch
- Installs dependencies
- Builds project with `npm run build`
- Creates `.nojekyll` file (disables Jekyll processing)
- Deploys to GitHub Pages

### 3. **Code Fixes**
- Fixed CV download link: `/resume.pdf` → `/CV.pdf`
- Verified all image paths work with basePath
- All external links and assets properly configured

## Your Deployment URL

**Live Site**: https://proindra.github.io/proindra_portfolio/

## How It Works

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **GitHub Actions Automatically**
   - Checks out your code
   - Installs dependencies
   - Builds the project
   - Creates static files in `out/` folder
   - Deploys to GitHub Pages

3. **Site Goes Live**
   - Usually within 1-2 minutes
   - Check Actions tab for deployment status

## File Structure After Build

```
out/                        # Static export folder
├── .nojekyll               # Tells GitHub to skip Jekyll
├── _next/                  # Next.js static assets
├── public/                 # Public assets (images, PDFs)
├── index.html              # Homepage
├── about/index.html        # About page
├── projects/index.html     # Projects page
└── ...
```

## Key Features

✅ **Automatic Deployment**: GitHub Actions handles everything
✅ **CSS & Images**: All styles and images work correctly
✅ **Static Export**: No server required, 100% static files
✅ **SEO Friendly**: Proper HTML meta tags and structure
✅ **Fast Loading**: Pre-rendered static content

## Monitor Deployment

1. Go to: https://github.com/proindra/proindra_portfolio/actions
2. Watch for the "Deploy to GitHub Pages" workflow
3. Wait for green checkmark ✅
4. Your site is live!

## Environment URL

The GitHub Pages environment will be available at:
- **URL**: https://proindra.github.io/proindra_portfolio/

All links, images, and assets are automatically prefixed with `/proindra_portfolio/` by Next.js.

## What If Something Goes Wrong?

### CSS Not Loading
- Check: `.nojekyll` file exists
- Fix: Re-push to trigger workflow again

### Images Not Showing
- Check: Image paths are imports from `@/public`
- Fix: Verify `unoptimized: true` in next.config.js

### Links Not Working
- Check: All links use absolute paths (e.g., `/projects`, not `./projects`)
- Fix: Use Next.js Link component or absolute paths

---

**Ready to Deploy!** 🚀

Push your changes to main and GitHub will handle the rest.
