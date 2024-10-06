import "../styles/global.scss";

import { Unbounded } from "@next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
});

export const metadata = {
  title: "Homepage",
  description: "Lynx Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${unbounded.className}`}>{children}</body>
    </html>
  );
}
