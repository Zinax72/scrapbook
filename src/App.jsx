import { useState, useEffect, useRef} from 'react'
import MusicPlayer  from "./components/MusicPlayer"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import DatesPage from "./pages/DatesPage"
import GalleryPage from "./pages/GalleryPage"
import ReasonsPage from "./pages/ReasonsPage"

function App() {

  const [activeTab, setActiveTab] = useState(null);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const contentRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeTab]);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeTab]);

  function handleTabClick(tabId) {
    setActiveTab(tabId);
  }

  function handlePhotoClick(dateId) {
    setSelectedDateId(dateId);
    handleTabClick("dates");
  }

  return (
    <div className="relative min-h-[100dvh]">
      <div className="absolute inset-0 min-h-[100dvh] bg-[url(./assets/bgpic.jpg)] bg-cover blur-[1px]" />
      <div className="absolute inset-0 min-h-[100dvh] bg-gradient-to-b from-near-black/85 via-deep-purple/55 to-near-black/90" />

      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center pt-20 pb-10">
          <MusicPlayer />
          <Hero />
          <div ref={navRef} >
            <Nav activeTab={activeTab} onTabClick={handleTabClick} />
          </div>
        </div>

        

        <section ref={contentRef}>
          {activeTab === "dates" && (
            <DatesPage selectedDateId={selectedDateId} />
          )}

          {activeTab === "gallery" && (
            <GalleryPage onSelectPhoto={handlePhotoClick} />
          )}

          {activeTab === "reasons" && <ReasonsPage />}
        </section>
      </div>
    </div>
  );
}

export default App