import ClientOnly from "@/components/ClientOnly";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RegisterModal from "@/components/Modals/RegisterModal";
import ToastProvider from "@/providers/ToastProvider";
import LoginModal from "@/components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "@/components/Modals/RentModal";

export const metadata = {
  title: "Airbnb",
  description: "Cloning Airbnb",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const currentUser: any = await getCurrentUser()
  return (
    <html lang='en'>
      <body>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}