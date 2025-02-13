import "./globals.css";

export const metadata = {
  title: "Pokedex",
  description: "Web Pokedex App",
  icons: {
    icon: "/pokeball.svg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
