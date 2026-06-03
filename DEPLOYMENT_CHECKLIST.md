# GitHub Pages Deployment Checklist

## Pre-Deployment Verification ✅

### Configuration Files
- ✅ **next.config.js**: Properly configured with `basePath: "/proindra_portfolio"` and `output: "export"`
- ✅ **package.json**: Build script `npm run build` is available
- ✅ **tsconfig.json**: TypeScript configuration is correct
- ✅ **.github/workflows/deploy.yml**: GitHub Actions workflow is properly configured

### Code & Assets
- ✅ **Image Paths**: All images use proper Next.js Image component with correct imports
- ✅ **CSS/Styling**: Tailwind CSS is properly configured and will be included in static export
- ✅ **Public Files**: CV files exist in `/public` folder (CV.pdf, CV1.pdf, etc.)
- ✅ **Asset Links**: Fixed relative path `/resume.pdf` → `/CV.pdf`
- ✅ **ESLint Config**: Configured with Next.js best practices

### Static Export Requirements
- ✅ `output: "export"` enabled in next.config.js
- ✅ `unoptimized: true` for images (required for static export)
- ✅ No dynamic routes or API routes used
- ✅ `.nojekyll` file will be created during build to prevent Jekyll processing

### GitHub Configuration
- ✅ Repository URL: https://github.com/proindra/proindra_portfolio.git
- ✅ Main branch: GitHub Actions workflow triggers on push to `main`

## Deployment Steps

1. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **GitHub Actions Workflow**
   - Workflow automatically triggers on push to main
   - Builds Next.js project with `npm run build`
   - Creates `out/` static directory
   - Adds `.nojekyll` file to prevent Jekyll processing
   - Deploys to GitHub Pages

3. **Verify Deployment**
   - Check Actions tab: https://github.com/proindra/proindra_portfolio/actions
   - Site will be live at: https://proindra.github.io/proindra_portfolio/
   - Wait 2-3 minutes for deployment to complete

## Expected Output

After successful deployment, the folder structure will be:
```
out/
├── .nojekyll
├── _next/
│   ├── static/
│   └── ...
├── public/
├── index.html
├── about/
│   └── index.html
├── projects/
│   └── index.html
└── ...
```

## Troubleshooting

### CSS Not Rendering
- ✅ Verified: `.nojekyll` file creation in workflow
- ✅ Verified: `basePath` configuration
- ✅ Verified: Tailwind CSS content paths are correct

### Images Not Loading
- ✅ Verified: Using Next.js Image component (automatically prefixes basePath)
- ✅ Verified: `unoptimized: true` for static export

### Links Not Working
- ✅ Verified: All image paths use proper imports from @/public
- ✅ Verified: Asset paths are absolute (e.g., `/CV.pdf` not `./resume.pdf`)

## Build Command Reference

- **Development**: `npm run dev` (local development server)
- **Build**: `npm run build` (creates `out/` folder for deployment)
- **Lint**: `npm run lint` (check for code issues)

## Notes

- The basePath `/proindra_portfolio` is automatically prefixed to all routes and assets
- Static export means all content is pre-rendered at build time
- No API routes or dynamic server rendering is used
- The site is fully static and will work on GitHub Pages

---
**Last Updated**: Pre-deployment verification complete
**Status**: ✅ Ready for deployment
