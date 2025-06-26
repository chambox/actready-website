#!/bin/bash

# Load variables
source variables.sh

echo "🌐 Setting up custom domain for ActReady..."

# Check if Static Web App exists
echo "📋 Checking if Static Web App exists..."
az staticwebapp show --name $APP_NAME --resource-group $RG > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Static Web App '$APP_NAME' found"
    
    # Get the default Azure domain
    AZURE_URL=$(az staticwebapp show --name $APP_NAME --resource-group $RG --query "defaultHostname" -o tsv)
    echo "🔗 Azure default URL: https://$AZURE_URL"
    
    echo ""
    echo "📋 To set up your custom domain 'act-ready.eu':"
    echo ""
    echo "1. ✅ Domain 'act-ready.eu' is already owned"
    echo "2. 🔧 Add these DNS records in your domain registrar:"
    echo "   Type: CNAME, Name: www, Value: $AZURE_URL"
    echo "   Type: CNAME, Name: @, Value: $AZURE_URL"
    echo ""
    echo "3. 🌐 Add custom domain in Azure:"
    echo "   az staticwebapp hostname set --name $APP_NAME --resource-group $RG --hostname act-ready.eu"
    echo "   az staticwebapp hostname set --name $APP_NAME --resource-group $RG --hostname www.act-ready.eu"
    echo ""
    echo "4. ✅ SSL certificate will be automatically provisioned"
    echo ""
    echo "🚀 Your site is currently live at: https://$AZURE_URL"
    
else
    echo "❌ Static Web App '$APP_NAME' not found. Please run ./createswa.sh first"
fi 