import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ResizableNavbar } from "@/components/ui/resizable-navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Suraksha Abhiyaan",
  description: "Jaago, Samjho, Surakshit Raho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased font-body`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col relative bg-background text-foreground"
        suppressHydrationWarning
      >x
        <ResizableNavbar />
        {children}
      </body>
    </html>
  );
}
