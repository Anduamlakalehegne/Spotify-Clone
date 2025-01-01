import MainContent from "@/components/main-component";
import MusicPlayer from "@/components/music-player";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-4 md:max-h-screen md:h-screen md:overflow-hidden">
      <Navbar />
      <MainContent />
    <MusicPlayer />
    </div>
  );
}
