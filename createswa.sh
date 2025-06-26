#!/bin/bash

# Load variables
source variables.sh

# Check if GitHub token is set
if [ -z "$GH_PAT" ]; then
  echo "❌ Error: GitHub Personal Access Token (GH_PAT) is not set in variables.sh"
  echo "Please add your GitHub PAT to variables.sh"
  exit 1
fi

echo "🚀 Creating Azure Static Web App..."
echo "📦 App Name: $APP_NAME"
echo "🌍 Domain: $DOMAIN"
echo "📂 Output Location: $OUTPUT_LOCATION"

az staticwebapp create \
  --name $APP_NAME \
  --resource-group $RG \
  --location $LOCATION \
  --sku Free \
  --source https://github.com/$REPO \
  --branch $BRANCH \
  --token $GH_PAT \
  --app-location "$APP_LOCATION" \
  --output-location "$OUTPUT_LOCATION"

echo "✅ Static Web App creation completed!"
