import "../styles/globals.css";
import { Inter } from "next/font/google";
import Header from "./components/atoms/atoms/atoms/Header";
import Footer from "./components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Central Music",
  description: "An ecommerce for music fans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Proyecto React</title>
      </head>
      <body className={inter.className}>
        <div className="big-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
