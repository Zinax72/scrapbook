import { useState } from 'react';
import { reasons } from '../data/reasons';

function ReasonsPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const reason =  reasons[currentPage];

    function nextPage() {
        setCurrentPage((p) => Math.min(p + 1, reasons.length - 1))
    }
    
    function prevPage() {
        setCurrentPage((p) => Math.max(p - 1, 0));
    }

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-72 md:w-96">
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-deep-purple rounded-lg" />
                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-mid-purple rounded-lg" />

                
            
                <div className="relative bg-mid-purple text-gray-800 min-h-96 md:min-h-[28rem] rounded-lg shadow-2xl border border-lavender-pink/20 p-6 flex flex-col items-center justify-center text-center gap-4">
                    <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-lavender-pink/30" />
                    <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-lavender-pink/30" />
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-lavender-pink/30" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-lavender-pink/30" />
                    
                    <span className="absolute top-4 left-6 text-6xl text-lavender-pink/70 font-reasons pointer-events-none">"</span>
                    <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.25)_100%)] pointer-events-none" />

                    {reason.image && (
                        <img
                        src={reason.image}
                        alt=""
                        className="w-full max-h-64 object-contain rounded-md" />
                    )}
                    <p className="text-white font-reasons text-lg md:text-xl">{reason.text}</p>
                </div>
            </div>

            
            <div className="flex items-center gap-6">
                <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="text-soft-white text-2xl font-bold disabled:opacity-30">←</button>
            

            <p className="text-lavender-pink/80 text-md flex items-center gap-2">
                {currentPage + 1} <span className="text-blush-pink text-xs">♡</span> {reasons.length}
            </p>

            <button
            onClick={nextPage}
            disabled={currentPage === reasons.length - 1}
            className="text-soft-white text-2xl font-bold  disabled:opacity-30">→</button>
            </div>
        </div>
    );
}
export default ReasonsPage;