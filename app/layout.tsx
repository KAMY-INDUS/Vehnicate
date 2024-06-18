import type { Metadata } from "next";
import {Poppins} from '@next/font/google'
import "./globals.css";
import Car from './../components/Car'

const poppins = Poppins({
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
})

export const metadata: Metadata = {
  title: "VEHNICATE",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <div className="car absolute">
          <Car />
        </div> */}
        <div className="gradient">
          <div className="grad-top"></div>
          <div className="grad-bottom"></div>
        </div>
        <div className="main">
          {children}
        </div>
        
      </body>
    </html>
  );
}
