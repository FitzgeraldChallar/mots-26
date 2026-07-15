import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F7FC]">
      <Navbar />

      <main>{children}</main>
    </div>
  );
}
