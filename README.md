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

The browser client is configured for the MERCOB Supabase project. Rider sign-in and sign-up use **email or Algerian phone number plus password**, without an SMS OTP screen. Sign-up collects full name and date of birth, and stores them in the user's profile metadata.

**Required Auth dashboard configuration for the requested password-only flow:**
1. Open the [MERCOB Supabase project](https://supabase.com/dashboard/project/nzvvxajycmwfpalnjmdh).
2. In Authentication settings, turn off email confirmation if email registration must not require a confirmation link.
3. Turn off phone confirmation if phone registration must not require an SMS code.
4. Configure the project's site URL and allowed redirect URLs.
5. Test both email and phone sign-up/sign-in with test accounts.

The connected tools can update the database and repository, but cannot change the project's Auth confirmation switches directly. Until these two confirmation settings are changed in the dashboard, Supabase may withhold a session after sign-up. The frontend intentionally does not offer an OTP entry flow.

The frontend uses only the public publishable key. Never put a Supabase secret or `service_role` key in browser code.

## Database

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
