import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@/context/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "Justbakedbd",
  description: "Freshly Baked Delights, Delivered to You!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        className={` ${poppins.variable} antialiased`}
      >
        <UserProvider>
          <CartProvider>
            <div className="bg-white flex flex-col ">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </UserProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
