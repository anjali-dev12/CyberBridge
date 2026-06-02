import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "@/context/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "LMS Portal",
  description: "Learning Management System for courses, students, and instructors.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">

      <body className="min-h-full flex flex-col">
        <CartProvider>
        <Header />
        {children}
         <Footer />

         <ScrollToTop />
         <WhatsAppButton />
         </CartProvider>
        </body>
    </html>
  );
}
