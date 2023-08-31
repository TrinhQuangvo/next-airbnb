import ClientOnly from "@/components/ClientOnly";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RegisterModal from "@/components/Modals/RegisterModal";
import ToastProvider from "@/providers/ToastProvider";

export const metadata = {
  title: "Airbnb",
  description: "Cloning Airbnb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}