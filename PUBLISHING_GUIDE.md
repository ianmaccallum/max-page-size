# Publishing Guide: Max Page Size Chrome Extension

## Prerequisites

1. **Chrome Web Store Developer Account**
   - Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
   - Sign in with your Google account
   - Pay the one-time $5 registration fee (if you haven't already)

## Step 1: Prepare Your Extension Package

Before publishing, ensure your extension is ready:

1. **Test your extension thoroughly** in Chrome
2. **Verify all files are present**:
   - `manifest.json`
   - All source files in `src/`
   - All icon files in `icons/`

## Step 2: Create a ZIP File

You need to create a ZIP file containing your extension files:

### Option A: Using Terminal (macOS)

```bash
cd /Users/ianmaccallum/Desktop/max-page-size
zip -r max-page-size.zip chrome/ -x "*.DS_Store" "*.git*"
```

### Option B: Using Finder

1. Right-click on the `chrome` folder
2. Select "Compress chrome"
3. Rename the resulting `chrome.zip` to `max-page-size.zip`

**Important:** The ZIP file should contain the `chrome` folder contents directly, not the `chrome` folder itself. Make sure the `manifest.json` is at the root of the ZIP.

## Step 3: Upload to Chrome Web Store

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Click **"New Item"** button
3. Click **"Upload"** and select your ZIP file
4. Wait for the upload to complete

## Step 4: Fill Out Store Listing

You'll need to provide the following information:

### Required Information:

1. **Name**: "Max Page Size" (or your preferred name)
2. **Summary**: Short description (132 characters max)
   - Example: "Automatically sets page size to the maximum value on supported sites for better browsing experience."
3. **Description**: Detailed description of your extension
   - Explain what it does, how it works, and which sites it supports
4. **Category**: Choose the most appropriate category
   - Likely "Productivity" or "Shopping"
5. **Language**: Select your primary language
6. **Privacy Policy**:
   - **Required** if your extension uses user data
   - Since you use `storage` and `activeTab` permissions, you'll likely need one
   - You can host it on GitHub Pages, your website, or use a privacy policy generator

### Visual Assets:

1. **Small promotional tile** (440x280px) - Optional but recommended
2. **Screenshots** (1280x800px or 640x400px) - At least 1 required
   - Take screenshots of your popup and the extension in action
3. **Icon** (128x128px) - You already have this ✓

### Additional Information:

1. **Website**: Your website URL (optional)
2. **Support URL**: Where users can get help (optional but recommended)
3. **Single purpose**: Declare if your extension has a single purpose
4. **Permissions justification**: Explain why you need each permission

## Step 5: Privacy Practices

Since your extension uses:

- `storage` permission
- `activeTab` permission
- `host_permissions: ["<all_urls>"]`

You'll need to:

1. **Declare data usage**: Specify what data you collect/use
2. **Privacy policy**: Provide a URL to your privacy policy
3. **Single purpose**: Your extension appears to have a single purpose (setting page size), which is good

## Step 6: Submit for Review

1. Review all your information
2. Click **"Submit for Review"**
3. Wait for review (typically 1-3 business days, can take longer)
4. You'll receive an email when the review is complete

## Step 7: After Approval

Once approved:

- Your extension will be live on the Chrome Web Store
- Users can install it
- You can track installs, ratings, and reviews in the dashboard
- You can update the extension by uploading a new ZIP file

## Tips for Success

1. **Write a clear description**: Explain what your extension does and why users need it
2. **Add screenshots**: Visuals help users understand your extension
3. **Test thoroughly**: Make sure it works on all supported sites
4. **Privacy policy**: Even if minimal, having one builds trust
5. **Version numbers**: Use semantic versioning (e.g., 1.0.0, 1.0.1, 1.1.0)

## Common Issues

- **ZIP structure**: Make sure `manifest.json` is at the root, not in a subfolder
- **Missing files**: Ensure all referenced files exist
- **Permissions**: Be prepared to justify why you need `<all_urls>` permission
- **Privacy policy**: Required for extensions that access user data

## Updating Your Extension

When you want to update:

1. Increment the version in `manifest.json`
2. Create a new ZIP file
3. Go to your extension in the developer dashboard
4. Click "Package" → "Upload Updated Package"
5. Submit for review (updates are usually reviewed faster)

---

Good luck with your publication! 🚀
