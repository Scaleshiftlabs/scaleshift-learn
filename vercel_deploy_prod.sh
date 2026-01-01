#!/bin/bash
set -e

echo "🚀 ScaleShift — Vercel Production Deploy"

# 1. Sanity checks
echo "🔍 Checking environment..."
if [ ! -f "vite.config.js" ]; then
  echo "❌ vite.config.js not found"
  exit 1
fi

# 2. Ensure base path is correct
grep -q 'base:' vite.config.js || echo "⚠️ Ensure base: '/' in vite.config.js"

# 3. Build
echo "🏗️ Building app..."
npm run build

# 4. Deploy
echo "🌍 Deploying to Vercel (PROD)..."
vercel --prod

echo "✅ Deployment complete"
