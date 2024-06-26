import HeroArea from "@/components/HeroArea";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data/navItems";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <HeroArea />
      </div>
    </main>
  );
}
