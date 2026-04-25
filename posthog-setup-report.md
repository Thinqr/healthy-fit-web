<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Healthy&Fit marketing site. Here's a summary of all changes made:

**New files created:**
- `instrumentation-client.ts` — Initializes PostHog client-side using the Next.js 15.3+ instrumentation pattern, with reverse proxy routing, exception capture, and debug mode in development.
- `src/components/ManageSubscriptionTracker.tsx` — Small client component that fires `manage_subscription_viewed` on mount and wraps subscription platform links to capture `manage_subscription_platform_clicked`.

**Modified files:**
- `next.config.ts` — Added reverse proxy rewrites so PostHog traffic routes through `/ingest/*` on your domain (improves ad-blocker bypass and data accuracy).
- `src/components/Hero.tsx` — Converted to client component; added `app_store_download_clicked` on the App Store button.
- `src/components/Navbar.tsx` — Added `nav_download_clicked` on the desktop and mobile App Store buttons.
- `src/components/Pricing.tsx` — Converted to client component; added `pricing_plan_clicked` on Monthly and Annual plan buttons.
- `src/components/FAQ.tsx` — Added `faq_question_expanded` when a user opens a FAQ accordion item.
- `src/components/Footer.tsx` — Converted to client component; added `footer_download_clicked` on the App Store CTA button.
- `src/app/manage-subscription/page.tsx` — Integrated `ManageSubscriptionTracker` and `PlatformSubscriptionLink` components.

**Environment variables set in `.env.local`:**
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

---

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `app_store_download_clicked` | User clicked the App Store download button in the Hero section | `src/components/Hero.tsx` |
| `nav_download_clicked` | User clicked the App Store download button in the Navbar (desktop or mobile) | `src/components/Navbar.tsx` |
| `pricing_plan_clicked` | User clicked a pricing plan button (Monthly or Annual) | `src/components/Pricing.tsx` |
| `faq_question_expanded` | User expanded a FAQ question to view the answer | `src/components/FAQ.tsx` |
| `footer_download_clicked` | User clicked the App Store download button in the Footer CTA section | `src/components/Footer.tsx` |
| `manage_subscription_viewed` | User viewed the Manage Subscription page — signals potential churn intent | `src/components/ManageSubscriptionTracker.tsx` |
| `manage_subscription_platform_clicked` | User clicked a platform link to manage their subscription (App Store or Google Play) | `src/components/ManageSubscriptionTracker.tsx` |

---

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/343928/dashboard/1509800
- **App Store Download Clicks** (by location): https://us.posthog.com/project/343928/insights/GVTduRGc
- **Pricing Plan Clicks** (Monthly vs Annual): https://us.posthog.com/project/343928/insights/wyxxTlz3
- **Download Conversion Funnel** (Pageview → App Store click): https://us.posthog.com/project/343928/insights/fwwdkGIV
- **FAQ Questions Expanded** (top questions): https://us.posthog.com/project/343928/insights/Wdb4jJd5
- **Churn Signal: Manage Subscription Page Visits**: https://us.posthog.com/project/343928/insights/deWppxPv

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
