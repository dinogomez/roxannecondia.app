import { Toaster } from "@/components/ui/toaster";
import Provider from "@/lib/provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import About from "./_components/section-about";
import AvatarSocials from "./_components/section-avatar-socials";
import BreadCrumb from "./_components/section-breadcrumb";
import Skills from "./_components/section-skills";
import TextHeader from "./_components/section-text-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roxanne Condia",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/196952498?v=4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${GeistSans.variable} ${GeistMono.variable} w-screen overflow-x-hidden  min-h-screen bg-background dark:bg-background font-sans antialiased`}
        >
          <Provider>
            <div
              className="container md:max-w-[40rem]
 w-full mx-auto max-w-none antialiased mb-10"
            >
              <div className="md:p-0 p-8 pt-4 md:pt-0 space-y-5">
                <div className="text-center text-muted-foreground p-5  py-20">
                  <TextHeader />
                </div>
                <div className="flex flex-col gap-4">
                  <AvatarSocials />
                  <About />
                  <Skills />
                  <BreadCrumb />
                  {children}
                  <Toaster />
                </div>
              </div>
            </div>
          </Provider>
        </body>
      </html>
    </ViewTransitions>
  );
}
