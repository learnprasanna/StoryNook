import "./global.css";
import { Inria_Sans } from "next/font/google";
import Nav from "./(components)/nav";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inria = Inria_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "StoryNook",
  description: "A place to connect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inria.className}>
        <div className="flex flex-col h-screen max-h-screen bg-black text-white">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-black text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
