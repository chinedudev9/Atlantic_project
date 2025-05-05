import type { Metadata } from "next";
import "./globals.css";

import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Atlantic Fenders",
  description: "Atlantic Fenders & Support Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inject theme script early to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-serif antialiased">
          <div className="sticky top-0 z-50">
            <TopHeader />
            <Header />
          </div>
          {children}
          <Footer />
      </body>
    </html>
  );
}
