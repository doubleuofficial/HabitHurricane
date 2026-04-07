import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Sweepstakes Dashboard",
  description: "Track daily bonuses, promo codes, and casino links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
