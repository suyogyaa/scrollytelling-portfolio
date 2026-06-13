import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
