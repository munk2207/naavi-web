# Deploying Naavi Web to Vercel

Follow these steps exactly. Takes about 15 minutes total.

---

## Step 1 — Install Node.js (5 minutes)

Node.js is the engine that runs the web app locally and prepares it for deployment.

1. Go to **https://nodejs.org**
2. Click the big green **"LTS"** button (Long Term Support — the stable version)
3. Download and run the installer
4. Accept all defaults — click Next through every screen
5. When it finishes, **close and reopen your terminal** (PowerShell or Command Prompt)
6. Verify it worked: type `node -v` — you should see a version number like `v20.x.x`

---

## Step 2 — Install the app's dependencies (2 minutes)

Open PowerShell or Command Prompt, then run these two commands in order:

```
cd "C:\Users\waela\OneDrive\Desktop\Naavi\web"
npm install
```

The second command downloads all the pieces the web app needs. It will take 1–2 minutes and print a lot of text — that is normal. When it stops and gives you a prompt back, you are done.

---

## Step 3 — Test it locally (optional but recommended)

```
npm run dev
```

Open your browser and go to **http://localhost:3000**

You should see the Naavi page. If it looks right, press `Ctrl + C` to stop it.

---

## Step 4 — Create a GitHub account (if you don't have one)

Vercel deploys from GitHub. If you already have a GitHub account, skip to Step 5.

1. Go to **https://github.com**
2. Click **Sign up** — use your work email
3. Verify your email

---

## Step 5 — Push the web folder to GitHub (5 minutes)

You need Git installed. Check: open PowerShell and type `git --version`.
If it says "command not found", download Git from **https://git-scm.com** and install it.

Then run these commands (copy and paste them one at a time):

```
cd "C:\Users\waela\OneDrive\Desktop\Naavi\web"
git init
git add .
git commit -m "Initial Naavi web page"
```

Now create a new repository on GitHub:
1. Go to **https://github.com/new**
2. Name it: `naavi-web`
3. Set it to **Private** (your team will access it through Vercel)
4. Click **Create repository**

GitHub will show you two commands. Run the ones that look like this (yours will have your username):

```
git remote add origin https://github.com/YOUR-USERNAME/naavi-web.git
git push -u origin main
```

---

## Step 6 — Deploy to Vercel (3 minutes)

1. Go to **https://vercel.com**
2. Click **Sign Up** → choose **Continue with GitHub** — this links your accounts
3. Once logged in, click **Add New → Project**
4. You will see your GitHub repositories listed — click **Import** next to `naavi-web`
5. Vercel auto-detects Next.js — leave all settings as-is
6. Click **Deploy**

Vercel will build and deploy your site. Takes about 60 seconds.

---

## Step 7 — Get your shareable link

When the deployment finishes, Vercel shows a URL like:

```
https://naavi-web-abc123.vercel.app
```

That URL is live immediately. Share it with your team — no login required to view it.

---

## Going forward

Every time you make changes to the web page:

```
cd "C:\Users\waela\OneDrive\Desktop\Naavi\web"
git add .
git commit -m "describe what you changed"
git push
```

Vercel automatically detects the push and redeploys within 60 seconds.
Your shareable URL stays the same.

---

## Custom domain (optional)

If you want `naavi.ca` or similar instead of the auto-generated URL:
1. In Vercel, go to your project → **Settings → Domains**
2. Add your domain and follow the DNS instructions

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm install` fails | Make sure you ran `cd` into the `web` folder first |
| Page shows an error | Run `npm run build` and read the error message |
| Vercel says "no framework detected" | Make sure you imported `naavi-web`, not the parent `Naavi` folder |
| URL shows a 404 | Wait 2 minutes and refresh — first deploy can be slow |
