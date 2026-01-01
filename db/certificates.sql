CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id UUID NOT NULL,
  issued_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (user_id, course_id)
);

CREATE TABLE IF NOT EXISTS certificate_downloads (
  id UUID PRIMARY KEY,
  certificate_id UUID REFERENCES certificates(id),
  downloaded_at TIMESTAMP DEFAULT NOW()
);
