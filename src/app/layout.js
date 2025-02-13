import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

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
        <NavBar />
        {children}
        <Footer />  
      </body>
    </html>
  );
}
