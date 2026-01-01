#!/bin/bash
set -e

FILE="src/main.jsx"

echo "🔧 Patching $FILE with ErrorBoundary..."

# Backup
cp $FILE ${FILE}.bak

# Inject import
sed -i '' '1s|^|import ErrorBoundary from "./components/ErrorBoundary";\n|' $FILE

# Wrap <App />
sed -i '' 's|<App />|<ErrorBoundary><App /></ErrorBoundary>|g' $FILE

echo "✅ main.jsx patched successfully"
echo "📦 Backup saved as main.jsx.bak"
