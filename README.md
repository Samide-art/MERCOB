# MERCOB — mobile-first web application

MERCOB is an Arabic-first, responsive ride and delivery web-app prototype with a Supabase authentication connection.

## Current entry flow
- Welcome screen and account entry choices.
- Email + password sign-in and sign-up only; phone-number authentication and SMS OTP are not part of the current UI.
- Sign-up collects full name and date of birth.
- Arabic RTL and French LTR interface.
- Responsive mobile-first styling.

## Run locally
Open `index.html` through a local static web server. The app imports Supabase JS v2 from `esm.sh`, so an internet connection is required.

## Supabase setup
Project dashboard: https://supabase.com/dashboard/project/nzvvxajycmwfpalnjmdh
Authentication provider settings: https://supabase.com/dashboard/project/nzvvxajycmwfpalnjmdh/auth/providers

For email/password registration to work:
1. In Supabase Authentication → Sign In / Providers → Email, enable email sign-ups.
2. If the desired experience is immediate sign-in without a confirmation email, turn off **Confirm email** and save. This reduces assurance that the user controls the address. If confirmation remains enabled, users must confirm their address before they can sign in.
3. Set the correct Site URL and allowed redirect URLs under Authentication → URL Configuration if confirmation or recovery links are used.
4. Test sign-up and sign-in with a fresh test email.

The connected repository tools can update application files, but do not expose the Supabase Auth provider switches, so those dashboard settings must be changed in Supabase itself. The frontend displays a specific error when email sign-ups are disabled.

## Public client key
`supabase-client.js` contains the project URL and a public publishable key. Public publishable keys are intended for browser use; never put a secret or `service_role` key in frontend code. Database access must be protected by Row Level Security policies.

## Database foundation
The Supabase project contains the application tables for profiles, drivers, vehicles, saved places, rides, ride offers/events, payments, ratings, conversations, messages, notifications, and support tickets. This is a backend foundation, not a production launch certification. Before launch, validate all RLS policies, driver approval, atomic ride acceptance and status transitions, payment-provider integration, abuse/rate limiting, and end-to-end tests.

## Main files
- `index.html` — welcome and authentication UI.
- `styles.css` — responsive layout and styles.
- `app.js` — navigation, Arabic/French translations, validation, and email/password auth.
- `supabase-client.js` — browser Supabase client.
- `assets/mercob-mark.svg` — brand mark.
