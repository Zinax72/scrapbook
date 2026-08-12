function DateCard({ date, onClick }) {
    return (
        <div
        onClick={() => onClick(date)}
        className="cursor-pointer flex flex-col bg-card-bg rounded-xl overflow-hidden hover:scale-125 transition"
        >
            <img src={date.coverImage} alt={date.title} className="w-full h-40 object-cover" />
            <p className="text-soft-white text-center py-2">{date.title}</p>
        </div>
    );
}

export default DateCard;