# Contact Form Email — Cloudflare Pages + Resend

The contact form posts to a Pages Function (`/api/contact`) that sends two
branded emails through the [Resend](https://resend.com) API:

1. **Notification** — to `joanne@therheagroup.com` with the submitter's details.
2. **Auto-reply** — to the submitter confirming receipt.

Both are sent from `noreply@therheagroup.com`.

## One-time setup

### 1. Create a Resend account and verify your domain

1. Sign up at [resend.com](https://resend.com).
2. In the Resend dashboard, go to **Domains** → **Add Domain** and add
   `therheagroup.com`.
3. Resend will give you DNS records (SPF, DKIM, DMARC). Add them in your
   domain's DNS (Cloudflare → your domain → DNS).
4. Wait for Resend to show the domain as **Verified**.

### 2. Create an API key

In the Resend dashboard → **API Keys** → **Create API Key**, give it a name
like "rhea-contact", and copy the key (starts with `re_`).

### 3. Add the API key as a secret to your Pages project

```sh
npx wrangler pages secret put RESEND_API_KEY --project-name the-rhea-group
```

Paste the `re_xxxxxxxx` key when prompted. This stores it securely in
Cloudflare — it is never written to your code or `wrangler.toml`.

Alternatively, add it in the Cloudflare dashboard:
Pages project → Settings → Environment variables → **Add variable**,
type `RESEND_API_KEY` as the name, paste the key, and set it as a **Secret**.

### 4. Deploy

```sh
npm run build
npx wrangler pages deploy dist
```

## Local development

For local testing, set the key in a `.dev.vars` file in the project root
(this file is gitignored):

```
RESEND_API_KEY=re_xxxxxxxx
```

Then run:

```sh
npm run build
npx wrangler pages dev dist
```

Submit the contact form at the local dev URL to test.
