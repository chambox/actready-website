#!/bin/bash

# Load configuration
source variables.sh

echo "🚀 Creating Azure Static Web App..."
echo "📦 App Name: $APP_NAME"
echo "🌍 Domain: $DOMAIN"
echo "📂 Output Location: $OUTPUT_LOCATION"

# Check if GitHub token is provided
if [ -z "$GH_PAT" ]; then
    echo "⚠️  No GitHub token provided. You'll need to configure GitHub Actions manually."
    TOKEN_PARAM=""
else
    TOKEN_PARAM="--token $GH_PAT"
fi

# Create the static web app
az staticwebapp create \
  --name $APP_NAME \
  --resource-group $RG \
  --source https://github.com/$REPO \
  --location $LOCATION \
  --branch $BRANCH \
  --app-location $APP_LOCATION \
  --output-location $OUTPUT_LOCATION \
  $TOKEN_PARAM

echo "✅ Static Web App creation completed!"
