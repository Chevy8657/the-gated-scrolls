import "./globals.css";

export const metadata = {
  title: "Sovereign Node",
  description: "Static institutional OS for district-level automation"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
