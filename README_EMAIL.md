# Contact Form Email — Cloudflare Pages + Email Routing

The contact form posts to a Pages Function (`/api/contact`) that sends two
branded emails through Cloudflare's native `send_email` binding:

1. **Notification** — to `joanne@therheagroup.com` with the submitter's details.
2. **Auto-reply** — to the submitter confirming receipt.

Both are sent from `noreply@therheagroup.com`. No third-party email service
or environment variables are required.

## One-time setup

### 1. Enable Email Routing on your domain
In the Cloudflare dashboard → your domain → **Email** → **Email Routing**,
enable it and verify the destination address `joanne@therheagroup.com`
(Cloudflare sends a verification link to that inbox).

### 2. Add the `send_email` binding
Already declared in `wrangler.toml`:

```toml
[[send_email]]
name = "EMAIL"
```

### 3. Deploy
```sh
npm run build
npx wrangler pages deploy dist
```

## Local development
The `send_email` binding is simulated locally — Wrangler writes the email
HTML to `.wrangler/` for inspection instead of sending it:

```sh
npm run build
npx wrangler pages dev dist
```

Then submit the contact form at the local dev URL.
