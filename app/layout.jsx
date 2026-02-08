import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "S. S. Abu Nayeem | MERN Stack Developer", // [NEW] Personalized title
  description:
    "Portfolio of S. S. Abu Nayeem, a Senior Frontend Engineer & Creative Technologist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
