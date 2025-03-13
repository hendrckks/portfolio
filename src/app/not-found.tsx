import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">404</h1>
          <p className="text-xl mb-12">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-black text-white hover:bg-gray-900 transition-colors rounded-md"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
