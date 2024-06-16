const generateImagePaths = (count) => {
    const imagePaths = [];
    for (let i = 1; i <= count; i++) {
        imagePaths.push(`profiles/${i}.jpg`);
    }
    return imagePaths;
};

export default {
    generateImagePaths,
};
