import { useState, useRef } from 'react'
import MusicPlayer  from "./components/MusicPlayer"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import DatesPage from "./pages/DatesPage"
import GalleryPage from "./pages/GalleryPage"
import ReasonsPage from "./pages/ReasonsPage"
import DiaryPage from "./pages/DiaryPage"

function App() {

  const [activeTab, setActiveTab] = useState(null);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const contentRef = useRef(null);

  function handleTabClick(tabId) {
    setActiveTab(tabId);
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handlePhotoClick(dateId) {
    setSelectedDateId(dateId);
    handleTabClick("dates");
  }

  return (
  <div className="relative min-h-screen">
    <div className="fixed inset-0 bg-[url(./assets/bgpic.jpg)] bg-cover blur-[1px]" />
    <div className="fixed inset-0 bg-gradient-to-b from-near-black/85 via-deep-purple/55 to-near-black/90" />

    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
      <MusicPlayer />
      <Hero />
      <Nav activeTab={activeTab} onTabClick={handleTabClick} />

      <section ref={contentRef}>
        {activeTab === "dates" && (
          <DatesPage selectedDateId={selectedDateId} />
        )}

        {activeTab === "gallery" && (
          <GalleryPage onSelectPhoto={handlePhotoClick} />
        )}

        {activeTab === "reasons" && <ReasonsPage />}
        {activeTab === "diary" && <DiaryPage />}
      </section>
    </div>
  </div>
);
}

export default App