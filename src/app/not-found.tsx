import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[120px] md:text-[160px] font-black text-ink/5 leading-none select-none">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold text-ink -mt-6 mb-4">
          Page not found
        </h1>
        <p className="text-mist leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-ink text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-ink/85 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
