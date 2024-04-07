import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio de Jailson Mendonça",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}
       bg-gray-50 text-gray-950 relative
        pt-28 sm:pt-36 max-w-4xl mx-auto`}
      >
        <div className="bg-[#fbe2e3] absolute
          top-[-6rem] -z-10 right-[11rem] h-[31.25rem] 
          w-[31.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]"
        >

        </div>
        <div className="bg-[#dbd7fb] absolute
          top-[-6rem] -z-10 right-[11rem] h-[31.25rem] 
          w-[50rem] rounded-full blur-[10rem]
          sm:w-[68.75rem] md:ledt-[-33rem] lg:left-[-28rem]
          xl:left-[-15rem] 2xl:left-[-5rem]"
        >

        </div>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
