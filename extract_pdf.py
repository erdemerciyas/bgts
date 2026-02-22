import PyPDF2

def extract_text():
    text = ""
    with open(r"c:\Users\erdem\Desktop\BGTS\BilgeAdam Finans_Sunum2025_Logosuz-Rev 1.pdf", "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text() + "\n--- PAGE BREAK ---\n"
            
    with open("pdf_content.txt", "w", encoding="utf-8") as out:
        out.write(text)

if __name__ == "__main__":
    extract_text()
