import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shrouk - Email Writing & Marketing Specialist",
  description: "Professional email writing, marketing, sales, and consulting services. Personal attention with competitive monthly rates for startups and businesses worldwide.",
  keywords: "email writing, marketing, sales, consulting, presentation skills, business services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-black font-inter antialiased">
        <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="font-playfair text-2xl font-bold text-black hover:text-gray-700 transition-colors">
                  Shrouk
                </a>
                <span className="ml-2 text-sm text-gray-600 font-inter">Email & Marketing Specialist</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-black font-medium transition-colors">
                  Home
                </a>
                <a href="/emails" className="text-gray-700 hover:text-black font-medium transition-colors">
                  Email Marketing
                </a>
                <a href="/sales" className="text-gray-700 hover:text-black font-medium transition-colors">
                  Sales & Consulting
                </a>
                <a href="/calls" className="text-gray-700 hover:text-black font-medium transition-colors">
                  Client Calls
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://wa.me/201221023316" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-playfair text-xl font-bold text-black mb-4">Shrouk</h3>
                <p className="text-gray-600 mb-4">
                  Professional email writing, marketing, and sales specialist providing personal attention to every client project.
                </p>
                <p className="text-sm text-gray-500">
                  Competitive monthly rates • Personal service guarantee
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-4">Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Email Writing & Marketing</li>
                  <li>Sales Strategy & Consulting</li>
                  <li>Presentation Skills Training</li>
                  <li>Customer Relations Management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-4">Contact</h4>
                <div className="space-y-2 text-gray-600">
                  <p>ehabshrouk143@gmail.com</p>
                  <p>shroukehab77@icloud.com</p>
                  <p>WhatsApp: +201221023316</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
              <p>&copy; 2024 Shrouk. All rights reserved. Personal service with professional results.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
