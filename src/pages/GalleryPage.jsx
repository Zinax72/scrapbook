import { photos } from "../data/photos";

function GalleryPage() {
    return (
        <div className="min-h-screen p-8">
            <div className="grid grid-cols-5 gap-6 max-w-4xl mx-auto auto-rows-[100px]">
                {photos.map((photo, i) => (

                    <div
                    key={photo.id}
                    className={`
                        bg-mid-purple p-2 rounded-sm shadow-2xl border-4 border-lavender-pink/60
                        ${i % 5 === 0 ? "row-span-4 col-span-3" : ""}
                        ${i % 5 === 1 ? "row-span-3 col-span-2" : ""}
                        ${i % 5 === 2 ? "row-span-2 col-span-2" : ""}
                        ${i % 5 === 3 ? "row-span-3 col-span-2" : ""}
                        ${i % 5 === 4 ? "row-span-3 col-span-2" : ""}
                        `}
                    >   
                        <img 
                        src={photo.src} 
                        alt=""
                        className="w-full h-full object-cover rounded-sm"
                        />
                    </div>                 
                ))}
            </div>
        </div>
    )    
}

export default GalleryPage;