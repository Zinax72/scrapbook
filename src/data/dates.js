const base = import.meta.env.BASE_URL;

function generatePhotos(folder, count) {
    return Array.from({ length: count }, (_, i) => `${base}photos/${folder}/${i + 1}.jpg`);
}

export const dates = [
    {
        id: "chilis",
        title: "First Meet",
        caption: "Alphas🐺",
        coverImage: `${base}photos/chilis/cover.jpg`,
        photos: generatePhotos("chilis", 7)
    },
    {
        id: "spiderman",
        title: "First Date",
        caption: "Spidey Date🕸️",
        coverImage: `${base}photos/spiderman/cover.jpg`,
        photos: generatePhotos("spiderman", 12)
    },
    {
        id: "movienight",
        title: "Movie Night",
        caption: "Virtual Dates <3",
        coverImage: `${base}photos/movienight/cover.jpg`,
        photos: generatePhotos("movienight", 1)
    }
];