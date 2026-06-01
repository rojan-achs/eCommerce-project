import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function StoreFrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />
        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
    </div>
  );
}
