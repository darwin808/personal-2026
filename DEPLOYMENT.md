# Deployment Guide

This guide will help you deploy your portfolio to Vercel with separate environments for `main` (production) and `staging` (preview).

## Prerequisites

1. A GitHub account
2. A Vercel account (free tier works great)

---

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `portfolio-2026`)
3. **Don't** initialize with README (we already have files)
4. Click "Create repository"

---

## Step 2: Push to GitHub

Run these commands in your terminal:

```bash
# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-2026.git

# Push main branch
git push -u origin main

# Push staging branch
git push -u origin staging
```

**Alternative with SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/portfolio-2026.git
git push -u origin main
git push -u origin staging
```

---

## Step 3: Connect to Vercel

1. Go to [Vercel](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Astro
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Click **"Deploy"**

---

## Step 4: Configure Branch Deployments

After the initial deployment:

1. Go to your project settings in Vercel
2. Navigate to **Git** section
3. Configure branches:
   - **Production Branch**: `main`
   - **Preview Deployments**: Enable for `staging` branch

### How it works:

- **Main branch** → Production deployment at `your-site.vercel.app`
- **Staging branch** → Preview deployment at `your-site-git-staging.vercel.app`
- **Pull Requests** → Automatic preview deployments

---

## Step 5: Environment Variables (Optional)

If you need environment variables:

1. Go to **Settings** → **Environment Variables**
2. Add variables for each environment:
   - Production (main branch)
   - Preview (staging branch)
   - Development (local)

---

## Deployment Workflow

### Deploy to Production (main)
```bash
git checkout main
git merge staging  # or make changes directly
git push origin main
```

### Deploy to Staging
```bash
git checkout staging
# Make your changes
git add .
git commit -m "Your commit message"
git push origin staging
```

### Create Preview from Pull Request
```bash
git checkout -b feature/new-feature
# Make changes
git push origin feature/new-feature
# Create PR on GitHub → Automatic preview deployment
```

---

## Custom Domain Setup

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`
4. Wait for DNS propagation (can take up to 48 hours)

### Branch-specific domains:
- `yourdomain.com` → main (production)
- `staging.yourdomain.com` → staging branch

---

## Vercel CLI (Optional)

Install Vercel CLI for command-line deployments:

```bash
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Monitoring & Analytics

Vercel provides:
- **Analytics**: Track page views and performance
- **Speed Insights**: Core Web Vitals monitoring
- **Logs**: Real-time deployment and function logs

Access these in your Vercel dashboard.

---

## Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct build script
- Verify all dependencies are in `dependencies` (not `devDependencies`)

### Preview deployment not working
- Check Git settings in Vercel
- Ensure preview deployments are enabled
- Verify branch name matches exactly

### Custom domain not working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check SSL certificate status in Vercel

---

## Useful Commands

```bash
# Check current branch
git branch

# Switch branches
git checkout main
git checkout staging

# Create new feature branch
git checkout -b feature/new-feature

# View deployment status
vercel ls

# View project info
vercel inspect
```

---

## Best Practices

1. **Always test in staging first** before merging to main
2. **Use pull requests** for code review
3. **Enable branch protection** on main in GitHub
4. **Set up automatic previews** for all PRs
5. **Monitor analytics** to track performance

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/vercel/)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

Your portfolio is now set up for continuous deployment! 🚀

Any push to `main` → Production deployment
Any push to `staging` → Preview deployment
Any pull request → Automatic preview
