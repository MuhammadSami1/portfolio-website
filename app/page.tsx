import HeroSection from "@/Components/HeroSection";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-start justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <HeroSection />
      </div>
    </main>
  );
}
