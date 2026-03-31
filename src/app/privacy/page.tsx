import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Privacy Policy | Healthy&Fit',
  description: 'Learn how Healthy&Fit collects, uses, and protects your personal data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-[104px] pb-16 md:pt-[120px] md:pb-24">
        <header className="mb-16">
          <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">Privacy Policy</h1>
          <p className="text-mist mt-4">Last updated: March 13, 2026</p>
        </header>

        <div className="space-y-10 text-[15px] text-mist leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Healthy&amp;Fit (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &ldquo;Service&rdquo;).
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>Information you provide</h3>
            <ul>
              <li><span className="font-semibold text-ink">Account information:</span> name, email address, date of birth, and gender. Passwords are handled securely by our authentication provider.</li>
              <li><span className="font-semibold text-ink">Health and fitness data:</span> height, weight, activity level, dietary preferences, health goals, and food logs.</li>
              <li><span className="font-semibold text-ink">Photos:</span> images of meals you scan using our AI food recognition feature. We upload these images to our servers for processing and may store the photo and associated recognition results to provide your scan history and allow you to edit or delete scans.</li>
              <li><span className="font-semibold text-ink">Payment information:</span> processed securely through Apple App Store or Google Play Store. We do not store your payment card details. Subscription entitlements are managed via RevenueCat.</li>
            </ul>

            <h3 className="mt-6">Information collected automatically</h3>
            <ul>
              <li><span className="font-semibold text-ink">Device information:</span> device type, operating system, unique device identifiers, and mobile network information.</li>
              <li><span className="font-semibold text-ink">Usage data:</span> features used, pages viewed, time spent in the app, and crash reports.</li>
              <li><span className="font-semibold text-ink">Apple Health data:</span> steps, workouts, and other health metrics, only when you explicitly grant permission.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service, including AI-powered food recognition, personalized nutrition plans, and Health Score calculations.</li>
              <li>Process your meal scans and deliver accurate nutritional breakdowns.</li>
              <li>Personalize your experience, including calorie targets, macro goals, and AI Coach recommendations.</li>
              <li>Send you notifications, reminders, and updates related to your health goals.</li>
              <li>Process transactions and manage your subscription.</li>
              <li>Analyze usage patterns to improve our AI models and Service quality.</li>
              <li>Respond to your requests, comments, or questions.</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal data. We may share your information with:</p>
            <ul>
              <li><span className="font-semibold text-ink">Service providers:</span> trusted third parties who assist us in operating the Service (cloud hosting, analytics, customer support).</li>
              <li><span className="font-semibold text-ink">Analytics providers:</span> including PostHog, to help us understand how the Service is used.</li>
              <li><span className="font-semibold text-ink">Authentication & subscription providers:</span> including Clerk and RevenueCat, to manage accounts and subscriptions.</li>
              <li><span className="font-semibold text-ink">Legal requirements:</span> when required by law, regulation, or legal process.</li>
              <li><span className="font-semibold text-ink">Business transfers:</span> in connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to provide the Service. Meal scan photos and associated recognition results may be stored to provide your food log and recognition history. You can delete scans in the app; after deletion, associated data is removed from your account as permitted by our retention and backup policies.
            </p>
          </section>

          <section>
            <h2>6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal data, including encryption in transit (TLS) and at rest. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Export your data in a portable format.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:team@thinqr.org" className="text-ink font-semibold hover:text-grove transition-colors">team@thinqr.org</a>.
            </p>
          </section>

          <section>
            <h2>8. Children&apos;s Privacy</h2>
            <p>
              The Service is not intended for children under the age of 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2>9. Third-Party Services</h2>
            <p>
              The Service may integrate with third-party services such as Apple Health. Your use of these integrations is governed by the respective third party&apos;s privacy policy. We only access data from these services with your explicit permission.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy within the app and updating the &ldquo;Last updated&rdquo; date. Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <p className="mt-2">
              <span className="font-semibold text-ink">Email:</span>{' '}
              <a href="mailto:team@thinqr.org" className="text-ink font-semibold hover:text-grove transition-colors">team@thinqr.org</a>
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
