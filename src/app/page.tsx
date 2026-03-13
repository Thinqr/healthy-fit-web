import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import FeatureDeepDive from '@/components/FeatureDeepDive';
import Testimonials from '@/components/Testimonials';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://healthyandfit.app/#organization',
      name: 'Healthy&Fit',
      url: 'https://healthyandfit.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://healthyandfit.app/logo.png',
      },
      sameAs: [
        'https://www.instagram.com/healthyandfit',
        'https://www.tiktok.com/@healthyandfit',
        'https://x.com/healthyandfit',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Healthy&Fit',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'HealthApplication',
      description:
        'AI-powered calorie tracker. Snap a photo of your plate, scan a barcode, or read a nutrition label. Get instant calories, macros, and a personalized health score.',
      offers: [
        {
          '@type': 'Offer',
          price: '11.99',
          priceCurrency: 'USD',
          name: 'Monthly',
          description: 'Full access with AI scanning, personalized plans, AI Coach, and Health Score.',
        },
        {
          '@type': 'Offer',
          price: '59.99',
          priceCurrency: 'USD',
          name: 'Annual',
          description: 'Best value. Everything in Monthly, save 58%, includes 3-day free trial.',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '10000',
        bestRating: '5',
      },
      featureList: [
        'AI-powered food photo scanning',
        'Barcode scanning',
        'Nutrition label scanning',
        'Personalized nutrition plans',
        'AI nutrition coach',
        'Health Score for every meal',
        'Progress tracking and charts',
        'Apple Health integration',
        'Calorie rollover',
        'Exercise calorie rollback',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How accurate is the AI food scanning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our AI identifies individual ingredients on your plate, estimates weight in grams, and provides a confidence score for each item. You can always adjust quantities or edit macros manually if needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the AI gets something wrong?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every scan result is fully editable. You can adjust quantities, swap ingredients, or edit individual macro values. There\'s also a "Fix Issue" button that lets our AI re-analyze the image with your corrections.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Healthy&Fit free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can download Healthy&Fit for free. The full experience — including AI scanning, personalized plans, and the AI Coach — is available with a subscription. Annual plans include a 3-day free trial.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is this different from MyFitnessPal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most calorie trackers require you to manually search a database and guess portion sizes. Healthy&Fit uses AI to do this instantly from a photo. Plus, you get a Health Score, an AI coach, and smart features like calorie rollover.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of food can the AI recognize?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Virtually any meal — home-cooked dishes, restaurant plates, mixed bowls, individual snacks, drinks, and packaged foods. You can also scan barcodes or nutrition labels for precise data.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does it work with dietary preferences?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. During onboarding, you choose your diet type — Classic, Pescatarian, Vegetarian, or Vegan — and your plan is tailored accordingly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I track my weight and see progress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Includes weight tracking with interactive charts, a BMI calculator, progress photos with before/after comparison, daily calorie trends, and weekly energy balance reports.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does it integrate with Apple Health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Healthy&Fit syncs with Apple Health to pull in steps, workouts, and other health data, giving you a complete picture in one app.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <FeatureDeepDive />
      <Testimonials />
      <Comparison />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
