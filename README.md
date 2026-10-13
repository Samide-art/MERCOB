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

## Important status

Authentication is **not connected to a backend yet**. The current form performs only client-side validation and displays a prototype status message. Do not use it to collect real credentials. Before production, connect a secure authentication provider/API, implement server-side validation, secure session handling, rate limiting, and privacy/terms pages.

## Files

- `index.html` — welcome and authentication entry UI
- `styles.css` — responsive mobile-first styling
- `app.js` — navigation, Arabic/French labels, and demo-only form validation
- `assets/mercob-mark.svg` — initial editable vector mark inspired by the M/location-pin concept
