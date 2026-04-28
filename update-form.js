const fs = require('fs');
const trPath = 'src/dictionaries/tr.json';
const enPath = 'src/dictionaries/en.json';
let tr = JSON.parse(fs.readFileSync(trPath, 'utf8'));
let en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

tr.youngEngineers.form = {
    title: 'Hemen Başvur',
    subtitle: "Formu doldurarak Genç Mühendis Programı'na ilk adımını at.",
    fullName: { label: 'Ad Soyad', placeholder: 'Adınız Soyadınız' },
    email: { label: 'E-posta', placeholder: 'ornek@email.com' },
    phone: { label: 'Telefon', placeholder: '0555 555 55 55' },
    university: { label: 'Üniversite', placeholder: 'Üniversite Adı' },
    department: { label: 'Bölüm', placeholder: 'Bölümünüz' },
    grade: { label: 'Sınıf', placeholder: 'Seçiniz', year3: '3. Sınıf', year4: '4. Sınıf', graduate: 'Yeni Mezun', master: 'Yüksek Lisans' },
    cv: { label: 'CV Yükle', dragDrop: 'Dosya seçmek için tıklayın veya sürükleyin', restrictions: 'PDF, DOC, DOCX (Max 5MB)', errorMsg: "Lütfen güncel CV'nizi yükleyin." },
    message: { label: 'Kısa Notunuz', placeholder: 'Eklemek istedikleriniz...' },
    submit: 'Başvuruyu Tamamla',
    submitting: 'Gönderiliyor...',
    success: { title: 'Başvurunuz Alındı!', desc: 'İlgilendiğiniz için teşekkür ederiz. Başvurunuz değerlendirildikten sonra sizinle iletişime geçeceğiz.' },
    error: { default: 'Hata oluştu', alert: 'Başvuru sırasında bir hata oluştu, lütfen tekrar deneyin.' }
};

en.youngEngineers.form = {
    title: 'Apply Now',
    subtitle: 'Take your first step into the Young Engineer Program by filling out the form.',
    fullName: { label: 'Full Name', placeholder: 'Your Full Name' },
    email: { label: 'Email', placeholder: 'example@email.com' },
    phone: { label: 'Phone', placeholder: '0555 555 55 55' },
    university: { label: 'University', placeholder: 'University Name' },
    department: { label: 'Department', placeholder: 'Your Department' },
    grade: { label: 'Grade', placeholder: 'Select', year3: 'Junior (3rd Year)', year4: 'Senior (4th Year)', graduate: 'New Graduate', master: "Master's Degree" },
    cv: { label: 'Upload CV', dragDrop: 'Click or drag to select a file', restrictions: 'PDF, DOC, DOCX (Max 5MB)', errorMsg: 'Please upload your current CV.' },
    message: { label: 'Brief Note', placeholder: 'Anything you want to add...' },
    submit: 'Submit Application',
    submitting: 'Submitting...',
    success: { title: 'Application Received!', desc: 'Thank you for your interest. We will contact you after evaluating your application.' },
    error: { default: 'An error occurred', alert: 'An error occurred during your application, please try again.' }
};

fs.writeFileSync(trPath, JSON.stringify(tr, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Dictionaries updated successfully.');
