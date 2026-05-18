import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sheard/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/sheard/Footer";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - IdeaVault",
  description: "Name: IdeaVault - Startup Idea Sharing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col  bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="dark:bg-[#222831]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
