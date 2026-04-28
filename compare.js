const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/dictionaries/en.json', 'utf8'));
const tr = JSON.parse(fs.readFileSync('src/dictionaries/tr.json', 'utf8'));

function compareKeys(obj1, obj2, path = '') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    for (const key of keys1) {
        const currentPath = path ? `${path}.${key}` : key;
        if (!keys2.includes(key)) {
            console.log(`Missing in TR: ${currentPath}`);
        } else if (typeof obj1[key] === 'object' && obj1[key] !== null && !Array.isArray(obj1[key])) {
            compareKeys(obj1[key], obj2[key], currentPath);
        } else if (Array.isArray(obj1[key])) {
            if (!Array.isArray(obj2[key])) {
                console.log(`Type mismatch at TR: ${currentPath} is not an array`);
            } else {
                for (let i = 0; i < obj1[key].length; i++) {
                    if (obj2[key][i] === undefined) {
                        console.log(`Missing in TR array: ${currentPath}[${i}]`);
                    } else if (typeof obj1[key][i] === 'object' && obj1[key][i] !== null) {
                        compareKeys(obj1[key][i], obj2[key][i], `${currentPath}[${i}]`);
                    }
                }
            }
        }
    }

    for (const key of keys2) {
        const currentPath = path ? `${path}.${key}` : key;
        if (!keys1.includes(key)) {
            console.log(`Missing in EN: ${currentPath}`);
        }
    }
}

console.log("Comparing EN against TR...");
compareKeys(en, tr);
console.log("Done.");
