# MERCOB — Mobile-first web starter

The first iteration establishes the MERCOB visual language and two entry flows:
- Welcome screen
- Sign-in / create-account choice
- Prototype phone + password forms
- Arabic-first RTL with a French language switch
- Responsive layout designed for small phones first

## Run locally

This is a static HTML/CSS/JavaScript prototype and requires no build step. Open `index.html` in a browser, or serve the folder with any static web server.

## Brand tokens

- Vivid Orange: `#FF6000`
- Warm Yellow: `#FFC107`
- Night Navy: `#0B1B2E`
- Mist Gray: `#F3F4F6`
- Slate Gray: `#667085`
- Success: `#168A5B`
- Error: `#D92D20`

Typography: Montserrat for the Latin wordmark; Cairo for Arabic interface text.

## Supabase status

The browser client is configured for the Supabase project used by MERCOB. The authentication form now calls Supabase Phone Auth for Algerian numbers in E.164 format (+213), and supports SMS OTP verification when phone confirmation is enabled.

**Before testing real sign-up/login:**
1. Open the [MERCOB Supabase project](https://supabase.com/dashboard/project/nzvvxajycmwfpalnjmdh).
2. In Authentication settings, enable the Phone provider and configure a supported SMS provider.
3. Configure the allowed site URL and redirect URLs for the deployed site and local development.
4. Test sign-up, SMS verification, sign-in, and sign-out with a real test number.

The frontend uses only the public publishable key. Never place a Supabase secret or `service_role` key in browser code.

### Database

The project database includes tables for:
- `profiles`, `driver_profiles`, and `vehicles`
- `saved_places`, `rides`, `ride_offers`, and `ride_events`
- `payments`, `ratings`
- `conversations`, `messages`, `notifications`, and `support_tickets`

Row Level Security is enabled on all 13 application tables. Security advisor checks were clear after setup. Performance advisor checks were also reviewed; foreign-key indexes were added and duplicate ride-read policies consolidated. This is a first backend foundation, not a production launch certification: driver approval, atomic ride acceptance/state transitions, payment-provider integration, rate limiting, and end-to-end tests remain follow-up tasks.

## Files

- `index.html` — welcome and authentication entry UI
- `styles.css` — responsive mobile-first styling
- `app.js` — navigation, Arabic/French labels, and form UI
- `supabase-client.js` — public Supabase client configuration
- `auth-integration.js` — phone sign-up/sign-in and SMS OTP flow
- `assets/mercob-mark.svg` — editable vector mark inspired by the M/location-pin concept
