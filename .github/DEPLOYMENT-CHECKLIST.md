# Deployment Checklist

## ✅ Verify GitHub Secrets

Make sure you've added all 4 required secrets at:
https://github.com/incial/resonance_rehab/settings/secrets/actions

### Required Secrets:

- [ ] **SSH_PRIVATE_KEY** - Your private SSH key (starts with `-----BEGIN OPENSSH PRIVATE KEY-----`)
- [ ] **SSH_HOST** - SSH hostname: `in-mum-web1954.main-hosting.eu`
- [ ] **SSH_USER** - SSH username: `u432179283`
- [ ] **SSH_DEPLOY_PATH** - Server path: `/home/u432179283/public_html`

## 🧪 Test Deployment

Once all secrets are added, trigger a deployment:

```bash
# Option 1: Push to publish branch
git push upstream main:publish

# Option 2: Or if already on publish
git checkout publish
git push upstream publish
```

## 📊 Monitor Deployment

1. Go to: https://github.com/incial/resonance_rehab/actions
2. Watch the "Deploy to Hostinger" workflow run
3. Check each step for success ✅ or errors ❌

## 🔍 Common Secret Issues

### Private Key Format
Must include BEGIN and END lines:
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gt...
(multiple lines)
...AAAADHUzMjE3OTI4M0BpbgECAwQFBg==
-----END OPENSSH PRIVATE KEY-----
```

### Path Format
- ✅ Correct: `/home/u432179283/public_html`
- ❌ Wrong: `~/public_html` or `public_html`

## ✅ Deployment Success Signs

Look for these in the workflow logs:
- ✅ "SSH configured"
- ✅ "Files synced successfully"
- ✅ "Deployment verified"
- ✅ "Deployment successful!"

## 🚀 Live Site

After successful deployment, check:
- https://resonancerehab.in
- Files should be at: `/public_html/react/`
- .htaccess should be at: `/public_html/.htaccess`
