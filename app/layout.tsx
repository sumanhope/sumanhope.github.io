import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sumanhope.github.io/"),

  title: "Suman Shrestha",
  authors: {
    name: "Suman Shrestha",
  },

  description:
    "Based in Nepal, I'm a Flutter developer passionate about building innovative mobile applications.",
  openGraph: {
    title: "Suman Shrestha",
    description:
      "Based in Nepal, I'm a Flutter developer passionate about building innovative mobile applications.",
    url: "https://sumanhope.github.io/",
    siteName: "Suman Shrestha",
    images: "/og.png",
    type: "website",
  },
  keywords: ["Flutter", "Android Application", "Dart", "Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
