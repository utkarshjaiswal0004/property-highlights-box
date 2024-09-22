import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Property Highlights Box ",
  description:
    "Custom app for reorder and performing CRUD operation over the the list",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
