import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodie",
  description: "Delicacies at your Doorstep",
};

import { SidebarProvider } from "@/contexts/SidebarContext";
import Sidebar from "@/components/navigation/Sidebar";
import Navbar from "@/components/navigation/Navbar";
// import { CartProvider } from "@/contexts/CartContext";
// import Sidebar from "@/components/navigation/Sidebar";
// import Navbar from "@/components/navigation/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased "
      >
        <main className="bg-gray-200 w-full min-h-screen">
          
          <SidebarProvider>
            {/* <CartProvider>
              <Navbar/>
              <Sidebar />
              {children}
            </CartProvider> */}
            <Navbar/>
            <Sidebar/>
            {children}
          </SidebarProvider>
        </main>
      </body>
    </html>
  );
}
