export const metadata = {
  title: "Sovereign Node",
  description: "Static Next.js Node"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
