/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — full name of the person submitting the form
  - `email` (text, not null) — email address for follow-up
  - `company` (text, nullable) — optional company name
  - `phone` (text, nullable) — optional phone number
  - `service` (text, nullable) — selected area of interest from the dropdown
  - `message` (text, not null) — the inquiry body
  - `created_at` (timestamptz, defaults to now) — submission timestamp

2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated INSERT only (public contact form submissions).
- No SELECT/UPDATE/DELETE policies — inquiries are managed server-side, not from the frontend.

3. Notes
- This is a no-auth, single-tenant contact form. The frontend uses the anon key,
  so the INSERT policy must include the `anon` role or submissions will fail.
- Only INSERT is exposed to the client; reading and managing inquiries is done
  through the Supabase dashboard or service-role tooling, not the frontend.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries" ON contact_inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
