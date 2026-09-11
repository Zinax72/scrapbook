const base = import.meta.env.BASE_URL;

function generatePhotos(folder, count) {
    return Array.from({ length: count }, (_, i) => ({
        id: "i + 1",
        src: `${base}photos/${folder}/${i + 1}.jpg`,
    }));
}

export const photos = generatePhotos("museum", 20);

