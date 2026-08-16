function Nav ({ activeTab, onTabClick}) {
    const tabs = [
        { id: "dates", label: "Dates"},
        { id: "gallery", label: "Museum"},
        { id: "reasons", label: "Reasons"},
    ];

    return (
        <nav className="sticky top-0 z-20 flex justify-center place-items-end gap-5 md:gap-10 p-4">
            {tabs.map((tab) => (
                <button 
                key={tab.id}
                onClick={() => onTabClick(tab.id)}
                className={activeTab === tab.id ? "text-lavender-pink border border-black rounded-full w-24 h-12 md:w-32 md:h-16 bg-mid-purple" : "text-soft-white border border-black rounded-full w-24 h-12 md:w-32 md:h-16 bg-deep-purple"}
            >
                {tab.label}
            </button>
        ))}
        </nav>
    )
}
export default Nav;