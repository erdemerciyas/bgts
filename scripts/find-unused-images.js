const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

// Get all files recursively in a directory
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

const allSrcFiles = getAllFiles(srcDir).filter(f => f.match(/\.(ts|tsx|js|jsx)$/));
const allImages = getAllFiles(publicImagesDir);

const unusedImages = [];

allImages.forEach(img => {
    // get relative path like /images/products/hcm/hero.png
    let relativeImgPath = img.replace(path.join(__dirname, '..', 'public'), '').replace(/\\/g, '/');
    let isUsed = false;

    // quick check: search for just the filename, or the relative path
    const filename = path.basename(img);

    for (const srcFile of allSrcFiles) {
        const content = fs.readFileSync(srcFile, 'utf8');
        if (content.includes(filename)) {
            isUsed = true;
            break;
        }
    }

    if (!isUsed) {
        unusedImages.push(img);
    }
});

console.log("Unused Images:");
unusedImages.forEach(img => console.log(img));
