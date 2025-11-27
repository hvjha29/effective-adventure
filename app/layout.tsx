import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Effective Adventure",
  description: "Harshvardhan's travel adventures",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
