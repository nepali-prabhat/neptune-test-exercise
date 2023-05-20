import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neptune Mutual: Frontend Assignment",
  description:
    "An assignment for Neptune Mutual front end react role. Convert rate between NEP and BUSD. Connect to a metamask wallet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
