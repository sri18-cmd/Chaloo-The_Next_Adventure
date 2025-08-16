import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/auth-provider";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Chaloo - Your Next Adventure",
  description: "Discover and book your next travel destination with Chaloo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <AuthProvider>
          <Header />
          <main className="relative flex flex-col min-h-screen">
            {children}
          </main>
          <Chatbot />
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
