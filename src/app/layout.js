import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - IdeaVault",
  description: "Name: IdeaVault - Startup Idea Sharing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
