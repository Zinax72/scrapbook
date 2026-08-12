import { useState } from 'react';
import { dates } from "../data/dates";
import DateCard from "../components/DateCard"
import PhotoLightbox from "../components/PhotoLightbox"

function DatesPage() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 max-w-2xl mx-auto">
            {dates.map((date) => (
                <DateCard key={date.id} date={date} onClick={setSelectedDate} />
            ))}

            {selectedDate && (
                <PhotoLightbox date={selectedDate} onClose={() => setSelectedDate(null)} />
            )}
        </div>
    );
}

export default DatesPage;