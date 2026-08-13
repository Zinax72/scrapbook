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
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  function handleTabClick(tabId) {
    if (activeTab === tabId) {
      setActiveTab(null);
      window.scrollTo({top: 0, behavior: "smooth" });
    } else {
      setActiveTab(tabId) 
        navRef.current?.scrollIntoView({behavior: "smooth", block: "start" });
    }
  }

  function handlePhotoClick(dateId) {
    setSelectedDateId(dateId);
    handleTabClick("dates");
  }

  return (
    <div className="relative min-h-[100dvh]">
      <div className="fixed inset-0 min-h-[100dvh] bg-[url(./assets/bgpic.jpg)] bg-cover blur-[1px]" />
      <div className="fixed inset-0 min-h-[100dvh] bg-gradient-to-b from-near-black/85 via-deep-purple/55 to-near-black/90" />

      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center pt-20 pb-10">
          <MusicPlayer />
          <Hero />
          <div ref={navRef} >
            <Nav activeTab={activeTab} onTabClick={handleTabClick} />
          </div>
        </div>

        

        <section ref={contentRef} className='min-h-[100vh] flex items-center justify-center pb-70'>
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