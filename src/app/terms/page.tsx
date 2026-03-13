import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Terms of Use — Healthy&Fit',
  description: 'Read the terms and conditions for using the Healthy&Fit app and services.',
  alternates: { canonical: '/terms' },
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-[104px] pb-16 md:pt-[120px] md:pb-24">
        <header className="mb-16">
          <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">Terms of Use</h1>
          <p className="text-mist mt-4">Last updated: March 13, 2026</p>
        </header>

        <div className="space-y-10 text-[15px] text-mist leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Healthy&amp;Fit (the &ldquo;App&rdquo;), you agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              Healthy&amp;Fit is an AI-powered nutrition tracking application that allows users to log meals by scanning food with their camera, scanning barcodes, or reading nutrition labels. The App provides estimated calorie and macro breakdowns, personalized nutrition plans, a Health Score, AI coaching, and progress tracking features.
            </p>
          </section>

          <section>
            <h2>3. Medical Disclaimer</h2>
            <p>
              Healthy&amp;Fit is a nutrition tracking tool and does <span className="font-semibold text-ink">not</span> provide medical advice, diagnosis, or treatment. The nutritional information, Health Scores, and AI Coach recommendations are estimates and should not be considered a substitute for professional medical or dietary advice. Always consult a qualified healthcare provider before making changes to your diet or exercise routine.
            </p>
          </section>

          <section>
            <h2>4. Account Registration</h2>
            <p>To use certain features, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate and complete information during registration.</li>
              <li>Keep your login credentials confidential.</li>
              <li>Be responsible for all activity that occurs under your account.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </section>

          <section>
            <h2>5. Subscriptions and Payments</h2>
            <h3>Pricing</h3>
            <p>
              Healthy&amp;Fit offers Monthly ($11.99/month) and Annual ($59.99/year) subscription plans. Prices may vary by region and are subject to change with notice.
            </p>

            <h3 className="mt-6">Free trial</h3>
            <p>
              Annual plans include a 3-day free trial. If you do not cancel before the trial ends, your subscription will automatically convert to a paid subscription.
            </p>

            <h3 className="mt-6">Billing</h3>
            <p>
              Payments are processed through the Apple App Store or Google Play Store. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period.
            </p>

            <h3 className="mt-6">Cancellation</h3>
            <p>
              You may cancel your subscription at any time through your App Store or Google Play account settings. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial billing periods.
            </p>
          </section>

          <section>
            <h2>6. AI Food Recognition</h2>
            <p>
              Our AI-powered food scanning provides <span className="font-semibold text-ink">estimates</span> of nutritional content. While we strive for accuracy, results may vary based on image quality, food presentation, portion sizes, and other factors. You can manually adjust any scan results. We are not liable for inaccuracies in AI-generated nutritional data.
            </p>
          </section>

          <section>
            <h2>7. User Content</h2>
            <p>
              You retain ownership of any content you submit through the App, including meal photos and food logs. By submitting content, you grant us a limited, non-exclusive license to use, process, and analyze that content solely for the purpose of providing and improving the Service.
            </p>
          </section>

          <section>
            <h2>8. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any unlawful purpose.</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble the App.</li>
              <li>Interfere with or disrupt the App&apos;s infrastructure.</li>
              <li>Create multiple accounts to abuse free trials or promotions.</li>
              <li>Use the App in a manner that could damage, disable, or impair the Service.</li>
            </ul>
          </section>

          <section>
            <h2>9. Intellectual Property</h2>
            <p>
              The App, including its design, features, content, and AI technology, is owned by Healthy&amp;Fit and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the App without our prior written consent.
            </p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Healthy&amp;Fit shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. Our total liability for any claim arising from these Terms shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>
              We may suspend or terminate your access to the App at any time for violation of these Terms. Upon termination, your right to use the App ceases immediately. Sections that by their nature should survive termination will remain in effect.
            </p>
          </section>

          <section>
            <h2>12. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify you of material changes through the App or via email. Your continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Healthy&amp;Fit operates, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2>14. Contact Us</h2>
            <p>If you have questions about these Terms, contact us at:</p>
            <p className="mt-2">
              <span className="font-semibold text-ink">Email:</span>{' '}
              <a href="mailto:legal@healthyandfit.app" className="text-ink font-semibold hover:text-grove transition-colors">legal@healthyandfit.app</a>
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
