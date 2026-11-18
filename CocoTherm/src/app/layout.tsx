import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CocoTherm InsulBoard | Sri Lanka's Eco-Friendly Coconut Insulation",
  description:
    "Manufactured in Homagama, Sri Lanka. Natural coconut coir insulation boards for walls and roofs. Cuts air conditioning electricity bills by up to 30%.",
  keywords: [
    "CocoTherm",
    "coconut husk insulation",
    "Sri Lanka green building",
    "eco insulation",
    "Homagama factory",
    "roof insulation Sri Lanka",
    "thermal insulation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
