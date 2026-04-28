const fs = require('fs');
const path = require('path');

const trPath = path.resolve(__dirname, '../src/dictionaries/tr.json');
const trData = require(trPath);

if (trData.services.softwareDevelopment.managedServices) {
    trData.services.managedServices = trData.services.softwareDevelopment.managedServices;
    delete trData.services.softwareDevelopment.managedServices;
    fs.writeFileSync(trPath, JSON.stringify(trData, null, 2));
    console.log("tr.json fixed.");
} else {
    console.log("managedServices not inside softwareDevelopment in tr.json");
}

const enPath = path.resolve(__dirname, '../src/dictionaries/en.json');
const enData = require(enPath);

if (enData.services.softwareDevelopment.managedServices) {
    enData.services.managedServices = enData.services.softwareDevelopment.managedServices;
    delete enData.services.softwareDevelopment.managedServices;
    fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
    console.log("en.json fixed.");
} else {
    console.log("managedServices not inside softwareDevelopment in en.json");
}
