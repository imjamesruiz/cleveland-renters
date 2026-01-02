# Deploying to Bluehost

## Steps to Deploy Your React App to Bluehost

### 1. Build the Production Version

Run this command in your terminal:

```bash
npm run build
```

This creates a `dist` folder with all the optimized production files.

### 2. Upload Files to Bluehost

1. Log into your Bluehost cPanel
2. Open **File Manager**
3. Navigate to your domain's root directory (usually `public_html` or `yourdomain.com`)
4. Upload **ALL contents** from the `dist` folder to your domain root
   - This includes: `index.html`, `assets/` folder, and `.htaccess` file

### 3. Important Files to Upload

Make sure these files are in your domain root:
- `index.html`
- `.htaccess` (for routing to work)
- `assets/` folder (contains all CSS, JS, and images)
- `contact-handler.php` (for contact form email functionality)

### 4. Verify .htaccess is Working

The `.htaccess` file should already be in your `public` folder and will be copied to `dist` during build. This file ensures that React Router works correctly on Bluehost.

### 5. Test Your Site

Visit your domain and test:
- Home page loads
- Navigation works (Home, Listings, Contact)
- Direct URLs work (e.g., `yourdomain.com/listings`)

## Troubleshooting

**If routes don't work (404 errors):**
- Make sure `.htaccess` file is uploaded to your domain root
- Check that mod_rewrite is enabled on Bluehost (usually is by default)
- Verify file permissions (should be 644 for files, 755 for folders)

**If assets don't load:**
- Check that the `assets` folder was uploaded completely
- Verify file paths in browser console (F12)

## Alternative: Use a Subdomain

If you want to host on a subdomain (e.g., `rentals.yourdomain.com`):
1. Create subdomain in Bluehost cPanel
2. Upload files to the subdomain's directory instead

## Contact Form Setup

The contact form uses a PHP handler to send emails. After uploading:

1. **Verify `contact-handler.php` is in your domain root** (same directory as `index.html`)
2. **Check file permissions**: The PHP file should have 644 permissions
3. **Test the form**: Submit a test message to ensure emails are sent to `clevelandrenter@gmail.com`
4. **If emails don't send**: 
   - Check Bluehost email settings
   - Verify PHP mail() function is enabled
   - Check spam folder for test emails
   - Consider using Bluehost's email service or SMTP configuration

## Notes

- Bluehost shared hosting works well for static React apps
- The contact form requires PHP support (included with Bluehost)
- The `.htaccess` file handles all routing automatically
- Contact form emails are sent to: **clevelandrenter@gmail.com**
