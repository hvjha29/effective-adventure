import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Alisha's Travel Adventures",
  description: "Building a home for all my travel stories, itineraries, tips, and the little moments that made each trip special.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        {/* Using CDN as requested for exact replication of the Stitch output */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#8c5e58", // Earthy Terracotta
                        "background-light": "#fdfbf9", // Soft Cream
                        "background-dark": "#121212", // Deep Charcoal
                    },
                    fontFamily: {
                        display: ["Playfair Display", "serif"],
                        sans: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                    },
                },
            },
        };
        `}} />
        <style dangerouslySetInnerHTML={{
          __html: `
        .masonry-grid {
            column-count: 1;
            column-gap: 1.5rem;
        }
        @media (min-width: 768px) {
            .masonry-grid {
                column-count: 2;
            }
        }
        @media (min-width: 1024px) {
            .masonry-grid {
                column-count: 3;
            }
        }
        .masonry-item {
            break-inside: avoid;
            margin-bottom: 1.5rem;
        }
        `}} />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-200 font-sans transition-colors duration-300">
        <Navbar />
        {children}
        <footer className="border-t border-stone-200 dark:border-stone-800 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <a className="text-2xl font-display font-bold text-primary tracking-tight" href="#">ATA.</a>
              <p className="text-stone-500 text-sm mt-2">© 2024 Alisha's Travel Adventures. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-stone-600 dark:text-stone-400">
              <a className="hover:text-primary transition-colors" href="#"><span className="sr-only">Instagram</span><i className="material-icons-outlined">photo_camera</i></a>
              <a className="hover:text-primary transition-colors" href="#"><span className="sr-only">Twitter</span><i className="material-icons-outlined">alternate_email</i></a>
              <a className="hover:text-primary transition-colors" href="#"><span className="sr-only">YouTube</span><i className="material-icons-outlined">play_circle_outline</i></a>
            </div>
            <div className="flex space-x-8 text-sm font-medium uppercase tracking-widest">
              <a className="hover:text-primary transition-colors" href="#">Privacy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms</a>
              <a className="hover:text-primary transition-colors" href="#">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
