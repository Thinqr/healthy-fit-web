import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ManageSubscriptionTracker, PlatformSubscriptionLink } from '@/components/ManageSubscriptionTracker';

export const metadata: Metadata = {
  title: 'Manage Subscription | Healthy&Fit',
  description: 'Learn how to manage, cancel, or update your Healthy&Fit subscription.',
  alternates: { canonical: '/manage-subscription' },
};

export default function ManageSubscription() {
  return (
    <main className="min-h-screen bg-white">
      <ManageSubscriptionTracker />
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-[104px] pb-16 md:pt-[120px] md:pb-24">
        <header className="mb-16">
          <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Account</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">Manage Subscription</h1>
          <p className="text-mist mt-4">View, update, or cancel your Healthy&amp;Fit subscription.</p>
        </header>

        <div className="space-y-12 text-[15px] text-mist leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-6">Your subscription is managed through the App Store or Google Play</h2>
            <p>
              Healthy&amp;Fit subscriptions are billed and managed through the platform where you originally subscribed. To make changes to your subscription, follow the instructions for your platform below.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border-light p-8">
              <div className="flex items-center gap-3 mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-ink">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <h3 className="text-lg font-bold text-ink">Apple App Store</h3>
              </div>
              <ol className="space-y-3 list-decimal pl-5">
                <li>Open the <span className="font-semibold text-ink">Settings</span> app on your iPhone or iPad.</li>
                <li>Tap your name at the top of the screen.</li>
                <li>Tap <span className="font-semibold text-ink">Subscriptions</span>.</li>
                <li>Find <span className="font-semibold text-ink">Healthy&amp;Fit</span> and tap it.</li>
                <li>Choose a different plan or tap <span className="font-semibold text-ink">Cancel Subscription</span>.</li>
              </ol>
              <PlatformSubscriptionLink
                href="https://apps.apple.com/account/subscriptions"
                platform="app_store"
                className="inline-block mt-6 text-sm font-semibold text-ink hover:text-grove transition-colors"
              >
                Open App Store subscriptions &rarr;
              </PlatformSubscriptionLink>
            </div>

            <div className="rounded-xl border border-border-light p-8">
              <div className="flex items-center gap-3 mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814a1.5 1.5 0 0 0-.609 1.2v17.972a1.5 1.5 0 0 0 .609 1.2l.096.058 10.08-10.08v-.228L3.705 1.756l-.096.058Z" fill="#4285F4" />
                  <path d="M17.153 15.523l-3.368-3.36v-.227l3.368-3.36.076.044 3.99 2.267c1.14.647 1.14 1.705 0 2.352l-3.99 2.267-.076.017Z" fill="#FBBC04" />
                  <path d="M17.229 15.506L13.785 12 3.609 22.186c.375.397.997.445 1.695.05l11.925-6.73Z" fill="#EA4335" />
                  <path d="M17.229 8.494L5.304 1.764c-.698-.396-1.32-.347-1.695.05L13.785 12l3.444-3.506Z" fill="#34A853" />
                </svg>
                <h3 className="text-lg font-bold text-ink">Google Play Store</h3>
              </div>
              <ol className="space-y-3 list-decimal pl-5">
                <li>Open the <span className="font-semibold text-ink">Google Play Store</span> app.</li>
                <li>Tap your profile icon in the top right.</li>
                <li>Tap <span className="font-semibold text-ink">Payments &amp; subscriptions</span> &rarr; <span className="font-semibold text-ink">Subscriptions</span>.</li>
                <li>Find <span className="font-semibold text-ink">Healthy&amp;Fit</span> and tap it.</li>
                <li>Choose a different plan or tap <span className="font-semibold text-ink">Cancel subscription</span>.</li>
              </ol>
              <PlatformSubscriptionLink
                href="https://play.google.com/store/account/subscriptions"
                platform="google_play"
                className="inline-block mt-6 text-sm font-semibold text-ink hover:text-grove transition-colors"
              >
                Open Google Play subscriptions &rarr;
              </PlatformSubscriptionLink>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-4">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-1">What happens when I cancel?</h3>
                <p>Your subscription remains active until the end of the current billing period. After that, you&apos;ll lose access to premium features but can still view your historical data.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Can I get a refund?</h3>
                <p>Refund requests are handled by Apple or Google, depending on where you subscribed. Contact their support for refund eligibility.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Can I switch between Monthly and Annual?</h3>
                <p>Yes. Go to your subscription settings on your platform and select the plan you want. The switch will take effect at the start of your next billing cycle.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">I cancelled but I&apos;m still being charged</h3>
                <p>Make sure you cancelled through your App Store or Google Play settings, not just by deleting the app. If the issue persists, contact <a href="mailto:team@thinqr.org" className="font-semibold text-ink hover:text-grove transition-colors">team@thinqr.org</a>.</p>
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-sage p-8">
            <h2 className="text-lg font-bold text-ink mb-2">Need help?</h2>
            <p>
              If you&apos;re having trouble managing your subscription, contact our support team at{' '}
              <a href="mailto:team@thinqr.org" className="font-semibold text-ink hover:text-grove transition-colors">team@thinqr.org</a>{' '}
              and we&apos;ll help you out.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border-light">
          <Link href="/" className="text-sm font-semibold text-mist hover:text-ink transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}
