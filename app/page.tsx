import Grid from "@/Components/Grid";
import HeroSection from "@/Components/HeroSection";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <HeroSection />
        <Grid />
      </div>
    </main>
  );
}
