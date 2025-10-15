export const metadata = {
  title: "Zillax Mini App",
  description: "Zillax Telegram Mini App Home"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
