export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600 dark:text-slate-400 font-medium">
          Designed & Developed by <span className="text-foreground font-bold">Ponna Prasanth Sai</span>
        </p>
        <p className="text-sm text-slate-500 mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
