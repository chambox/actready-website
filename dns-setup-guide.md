# DNS Setup Guide for act-ready.eu

## After running ./createswa.sh, you'll get an Azure URL like: actready.azurestaticapps.net

## DNS Records to Add:

### In your domain registrar's DNS management:

| Type  | Name | Value | TTL |
|-------|------|-------|-----|
| CNAME | www  | actready.azurestaticapps.net | 300 |
| CNAME | @    | actready.azurestaticapps.net | 300 |

*Replace `actready.azurestaticapps.net` with your actual Azure URL*

## Verification Commands:

```bash
# Check if DNS is propagated
dig www.act-ready.eu
dig act-ready.eu

# Both should point to your Azure Static Web App
```

## Add Custom Domain to Azure:

```bash
# After DNS is configured (wait 5-10 minutes)
az staticwebapp hostname set --name actready --resource-group actready-rg --hostname act-ready.eu
az staticwebapp hostname set --name actready --resource-group actready-rg --hostname www.act-ready.eu
```

## SSL Certificate:
- Azure automatically provisions free SSL certificates
- Takes 5-15 minutes after domain verification
- Your site will be available at https://act-ready.eu and https://www.act-ready.eu 