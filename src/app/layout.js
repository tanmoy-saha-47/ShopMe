import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

export const metadata = {
  title: "ShopMe",
  description: "A simple e-commerce application built with Next.js",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <UserProvider>
          <Navbar />
          <CartProvider>{children}</CartProvider>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
