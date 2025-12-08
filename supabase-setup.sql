-- Create the contact_submissions table for the VectorSpace contact form
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  details TEXT NOT NULL,
  agreed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for contact form submissions)
CREATE POLICY "Allow anonymous contact form submissions" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all contact submissions
CREATE POLICY "Allow authenticated users to read contact submissions" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Optional: Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
