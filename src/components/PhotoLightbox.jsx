import { useState } from 'react';

function PhotoLightbox ({ date, onClose }) {
    const [currentIndex, setCurrentIndex ] = useState(0);

    function prevPhoto() {
        setCurrentIndex((i) => (i - 1 + date.photos.length) % date.photos.length);
    }

    function nextPhoto() {
        setCurrentIndex((i) => (i + 1) % date.photos.length);
    }

    return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-near-black/90 flex items-center justify-center z-50"
      >
      <button onClick={onClose} className="absolute top-4 right-4 text-soft-white text-2xl">✕</button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-4 md:gap-8"
      >
        <button
          onClick={prevPhoto}
          className="text-soft-white text-3xl md:text-4xl hover:text-blush-pink transition">←
          </button>

        <div className="bg-[url(./assets/framebg.jpg)] bg-cover p-4 pb-8 rounded-sm shadow-2xl -rotate-2">
          <img
            src={date.photos[currentIndex]}
            alt={`${date.title} ${currentIndex + 1}`}
            className="w-64 md:w-80 h-64 md:h-80 object-cover"
          />
          <p className="text-center mt-3 text-deep-purple font-heading font-bold text-2xl">{date.caption}</p>
        </div>

        <button
          onClick={nextPhoto}
          className="text-soft-white text-3xl md:text-4xl hover:text-blush-pink transition">→
          </button>
      </div>
    </div>
  );
}

export default PhotoLightbox;