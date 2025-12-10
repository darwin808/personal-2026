# Domain Setup Guide: darwinapolinario.xyz (Porkbun → Vercel)

This guide will help you connect your Porkbun domain to your Vercel deployment.

---

## Overview

- **Domain**: `darwinapolinario.xyz`
- **Registrar**: Porkbun
- **Hosting**: Vercel
- **Main site**: `darwinapolinario.xyz` → Production (main branch)
- **Staging**: `staging.darwinapolinario.xyz` → Staging branch

---

## Part 1: Add Domain to Vercel

### Step 1: Go to Vercel Dashboard

1. Open your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your portfolio project
3. Go to **Settings** → **Domains**

### Step 2: Add Your Domain

1. In the "Add Domain" field, enter: `darwinapolinario.xyz`
2. Click **Add**
3. Vercel will show you DNS records to configure
4. **Keep this page open** - you'll need these values

### Step 3: Add Staging Subdomain (Optional)

1. Also add: `staging.darwinapolinario.xyz`
2. Click **Add**
3. Assign it to the `staging` branch

---

## Part 2: Configure DNS in Porkbun

### Step 1: Login to Porkbun

1. Go to [Porkbun.com](https://porkbun.com)
2. Login to your account
3. Go to **Domain Management**
4. Click on `darwinapolinario.xyz`

### Step 2: Configure DNS Records

Click on **DNS** for your domain, then add these records:

#### Option A: Using A Records (Recommended)

**For Main Domain (darwinapolinario.xyz):**

| Type | Host | Answer/Value | TTL |
|------|------|--------------|-----|
| A | @ | `76.76.21.21` | 600 |

**For WWW (www.darwinapolinario.xyz):**

| Type | Host | Answer/Value | TTL |
|------|------|--------------|-----|
| CNAME | www | `cname.vercel-dns.com` | 600 |

**For Staging (staging.darwinapolinario.xyz):**

| Type | Host | Answer/Value | TTL |
|------|------|--------------|-----|
| CNAME | staging | `cname.vercel-dns.com` | 600 |

#### Option B: Using CNAME (Alternative)

If A records don't work, use CNAME for root:

| Type | Host | Answer/Value | TTL |
|------|------|--------------|-----|
| CNAME | @ | `cname.vercel-dns.com` | 600 |
| CNAME | www | `cname.vercel-dns.com` | 600 |
| CNAME | staging | `cname.vercel-dns.com` | 600 |

### Step 3: Remove Conflicting Records

⚠️ **Important**: Remove any existing A or CNAME records for:
- `@` (root)
- `www`
- `staging`

This prevents conflicts.

---

## Part 3: Porkbun Specific Settings

### Disable URL Forwarding

1. In Porkbun domain settings
2. Check if **URL Forwarding** is enabled
3. If yes, **disable it** (this can interfere with Vercel)

### Check Nameservers

1. Go to **Nameservers** section
2. Ensure they are set to **Porkbun Default**:
   - `curitiba.ns.porkbun.com`
   - `fortaleza.ns.porkbun.com`
   - `maceio.ns.porkbun.com`
   - `salvador.ns.porkbun.com`

⚠️ **Don't change nameservers to Vercel** - we're using DNS records only.

---

## Part 4: Verify in Vercel

### Step 1: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours**
- Usually it's fast with Porkbun (10-30 minutes)

### Step 2: Check Domain Status

1. Go back to Vercel → **Settings** → **Domains**
2. You should see:
   - `darwinapolinario.xyz` - ✅ Valid Configuration
   - `www.darwinapolinario.xyz` - ✅ Valid Configuration
   - `staging.darwinapolinario.xyz` - ✅ Valid Configuration

### Step 3: Assign Branches

Make sure domains are assigned correctly:
- `darwinapolinario.xyz` → `main` branch (Production)
- `staging.darwinapolinario.xyz` → `staging` branch

---

## Part 5: Configure WWW Redirect

In Vercel, set up redirect from www to non-www (or vice versa):

1. Go to **Settings** → **Domains**
2. Find `www.darwinapolinario.xyz`
3. Click the three dots → **Redirect to darwinapolinario.xyz**

Or keep both working by checking "Include www subdomain" when adding domain.

---

## Part 6: SSL Certificate

Vercel automatically provisions SSL certificates:
- This happens automatically after DNS verification
- Usually takes 1-10 minutes
- Your site will be available at `https://darwinapolinario.xyz`

---

## Porkbun DNS Configuration Visual Guide

### Your DNS Records Should Look Like This:

```
TYPE    HOST        VALUE                    TTL
----    ----        -----                    ---
A       @           76.76.21.21              600
CNAME   www         cname.vercel-dns.com     600
CNAME   staging     cname.vercel-dns.com     600
```

### Screenshot Steps in Porkbun:

1. **Login** → Domain Management
2. Click **DNS** next to darwinapolinario.xyz
3. **Add New Record** for each entry above
4. **Delete** any conflicting records
5. Click **Save** or **Update**

---

## Testing Your Setup

### Test DNS Propagation

Use these tools to check if DNS is propagated:

```bash
# Check A record
dig darwinapolinario.xyz

# Check CNAME records
dig www.darwinapolinario.xyz
dig staging.darwinapolinario.xyz

# Or use online tool
# https://dnschecker.org
```

### Expected Results:

- `darwinapolinario.xyz` → Should point to `76.76.21.21`
- `www.darwinapolinario.xyz` → Should point to `cname.vercel-dns.com`
- `staging.darwinapolinario.xyz` → Should point to `cname.vercel-dns.com`

---

## Common Issues & Solutions

### Issue 1: "Domain is not verified"

**Solution:**
- Wait longer (DNS propagation can take time)
- Check DNS records are correct
- Clear DNS cache: `sudo dscacheutil -flushcache` (Mac)

### Issue 2: "Invalid Configuration"

**Solution:**
- Make sure you removed old A/CNAME records
- Verify you're using correct Vercel DNS values
- Try using A record instead of CNAME for root

### Issue 3: SSL Certificate Not Provisioning

**Solution:**
- Wait 10 minutes after DNS verification
- Remove and re-add domain in Vercel
- Check CAA records aren't blocking Let's Encrypt

### Issue 4: "Domain Already in Use"

**Solution:**
- Domain might be added to another Vercel project
- Check all your Vercel projects
- Remove domain from old project first

### Issue 5: Porkbun Specific - "CNAME flattening"

**Solution:**
- Porkbun supports CNAME flattening
- You can use CNAME for root (@) if needed
- Or stick with A record `76.76.21.21`

---

## Quick Checklist

- [ ] Domain added in Vercel dashboard
- [ ] A record for @ pointing to 76.76.21.21
- [ ] CNAME for www pointing to cname.vercel-dns.com
- [ ] CNAME for staging pointing to cname.vercel-dns.com
- [ ] Old/conflicting DNS records removed
- [ ] URL forwarding disabled in Porkbun
- [ ] Nameservers are Porkbun default
- [ ] Waited 10-30 minutes for propagation
- [ ] SSL certificate issued (shows https://)
- [ ] Main domain assigned to main branch
- [ ] Staging subdomain assigned to staging branch

---

## Final URLs

After setup complete:

- **Production**: https://darwinapolinario.xyz
- **WWW**: https://www.darwinapolinario.xyz (redirects to above)
- **Staging**: https://staging.darwinapolinario.xyz
- **Vercel**: https://your-project.vercel.app (still works)

---

## Email Configuration (Future)

If you want to use email with your domain:

1. Get email hosting (Google Workspace, Zoho, etc.)
2. Add MX records in Porkbun
3. Won't interfere with website hosting on Vercel

---

## Support Resources

- **Vercel Domains**: https://vercel.com/docs/concepts/projects/domains
- **Porkbun DNS**: https://kb.porkbun.com/category/7-dns
- **DNS Checker**: https://dnschecker.org
- **SSL Check**: https://www.ssllabs.com/ssltest/

---

## Need Help?

1. Check Vercel domain status in dashboard
2. Use DNS checker tools
3. Check Porkbun DNS management
4. Contact Vercel support (very responsive)
5. Contact Porkbun support

---

🎉 Once DNS propagates, your portfolio will be live at https://darwinapolinario.xyz!
