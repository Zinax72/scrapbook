function Nav ({ activeTab, onTabClick}) {
    const tabs = [
        { id: "dates", label: "Dates"},
        { id: "gallery", label: "Museum"},
        { id: "reasons", label: "Reasons"},
        { id: "diary", label: "Diary"},
    ];

    return (
        <nav className="sticky flex justify-center place-items-end gap-10 p-4">
            {tabs.map((tab) => (
                <button 
                key={tab.id}
                onClick={() => onTabClick(tab.id)}
                className={activeTab === tab.id ? "text-lavender-pink border border-black rounded-full w-32 h-16 bg-mid-purple " : "text-soft-white border border-black rounded-full w-32 h-16 bg-deep-purple"}
            >
                {tab.label}
            </button>
        ))}
        </nav>
    )
}
export default Nav;