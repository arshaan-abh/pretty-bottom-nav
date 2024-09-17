import { type Metadata } from "next";
import { ReactNode } from "react";
import { Vazirmatn as FontSans } from "next/font/google";
import { cn } from "@/utils/cn";
import "@/styles/globals.css";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Next.js Template",
  description: "The description you want...",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa-IR" dir="rtl" className="overflow-hidden scroll-smooth">
      <body
        className={cn(
          "flex overflow-hidden scroll-smooth bg-slate-100 font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

/* TODOs:
package.json metadata
stylelint
stylelint-config-prettier
self made stuff
fix the globals.css mess
handle bad routing by user
clickable area
organize appearance, loading animations, route change animations, etc
home route issue (loading the site without hash)
can also handle sliding through sections by css
delay slide-in-up animations separately
the nav item icon gets white too quickly
use next's own routing system with animations
replace postcss-easing-gradients
fix t-pretty + feather (bottom)
*/
