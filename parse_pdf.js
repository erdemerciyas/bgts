const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("./pdf_content.txt", pdfParser.getRawTextContent());
    console.log("Success");
});

pdfParser.loadPDF('c:\\Users\\erdem\\Desktop\\BGTS\\BilgeAdam Finans_Sunum2025_Logosuz-Rev 1.pdf');
