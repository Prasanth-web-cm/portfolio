import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8">
      <div className="text-center max-w-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Page not found</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          The page you are looking for does not exist. Please check the URL or return to the home page.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-blue-600 transition"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
