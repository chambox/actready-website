# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Role: {{role}}
Interest: {{interest}}

Message:
{{message}}

---
This email was sent from the ActReady contact form.
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" > "General" in EmailJS dashboard
2. Copy your **Public Key** (e.g., `user_abc123xyz`)

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the submission

## Email Template Variables Used:
- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email
- `{{company}}` - Contact's company
- `{{role}}` - Contact's role
- `{{interest}}` - What they're interested in
- `{{message}}` - Their message
- `{{to_email}}` - Your email (hello@act-ready.eu)

## Troubleshooting:
- Check browser console for any EmailJS errors
- Verify all environment variables are set correctly
- Make sure your email service is properly configured in EmailJS
- Check EmailJS usage limits (free plan has 200 emails/month)

## Production Deployment:
When deploying to Azure Static Web Apps, add the environment variables in the Azure portal under "Configuration" > "Application settings". 