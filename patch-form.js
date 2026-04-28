const fs = require('fs');

const path = 'src/components/hr/ApplicationForm.tsx';
let data = fs.readFileSync(path, 'utf8');

const replacements = [
    {
        from: `export default function ApplicationForm() {`,
        to: `export default function ApplicationForm({ dict }: { dict?: any }) {\n    const d = dict || {\n        title: 'Hemen Başvur',\n        subtitle: "Formu doldurarak Genç Mühendis Programı\\'na ilk adımını at.",\n        fullName: { label: 'Ad Soyad', placeholder: 'Adınız Soyadınız' },\n        email: { label: 'E-posta', placeholder: 'ornek@email.com' },\n        phone: { label: 'Telefon', placeholder: '0555 555 55 55' },\n        university: { label: 'Üniversite', placeholder: 'Üniversite Adı' },\n        department: { label: 'Bölüm', placeholder: 'Bölümünüz' },\n        grade: { label: 'Sınıf', placeholder: 'Seçiniz', year3: '3. Sınıf', year4: '4. Sınıf', graduate: 'Yeni Mezun', master: 'Yüksek Lisans' },\n        cv: { label: 'CV Yükle', dragDrop: 'Dosya seçmek için tıklayın veya sürükleyin', restrictions: 'PDF, DOC, DOCX (Max 5MB)', errorMsg: "Lütfen güncel CV\\'nizi yükleyin." },\n        message: { label: 'Kısa Notunuz', placeholder: 'Eklemek istedikleriniz...' },\n        submit: 'Başvuruyu Tamamla',\n        submitting: 'Gönderiliyor...',\n        success: { title: 'Başvurunuz Alındı!', desc: 'İlgilendiğiniz için teşekkür ederiz. Başvurunuz değerlendirildikten sonra sizinle iletişime geçeceğiz.' },\n        error: { default: 'Hata oluştu', alert: 'Başvuru sırasında bir hata oluştu, lütfen tekrar deneyin.' }\n    };`
    },
    { from: `"Hata oluştu"`, to: `d.error.default` },
    { from: `"Başvuru sırasında bir hata oluştu, lütfen tekrar deneyin."`, to: `d.error.alert` },
    { from: `Başvurunuz Alındı!`, to: `{d.success.title}` },
    { from: `>\\s*İlgilendiğiniz için teşekkür ederiz\\. Başvurunuz değerlendirildikten sonra sizinle iletişime geçeceğiz\\.\\s*</p>`, to: `>\n                            {d.success.desc}\n                        </p>`, regex: true },
    { from: `Hemen Başvur`, to: `{d.title}` },
    { from: `>\\s*Formu doldurarak Genç Mühendis Programı'na ilk adımını at\\.\\s*</p>`, to: `>\n                    {d.subtitle}\n                </p>`, regex: true },
    { from: `>\\s*<User className="w-4 h-4 text-slate-400" /> Ad Soyad\\s*</label>`, to: `>\n                            <User className="w-4 h-4 text-slate-400" /> {d.fullName.label}\n                        </label>`, regex: true },
    { from: `placeholder="Adınız Soyadınız"`, to: `placeholder={d.fullName.placeholder}` },
    { from: `>\\s*<Mail className="w-4 h-4 text-slate-400" /> E-posta\\s*</label>`, to: `>\n                            <Mail className="w-4 h-4 text-slate-400" /> {d.email.label}\n                        </label>`, regex: true },
    { from: `placeholder="ornek@email.com"`, to: `placeholder={d.email.placeholder}` },
    { from: `>\\s*<Phone className="w-4 h-4 text-slate-400" /> Telefon\\s*</label>`, to: `>\n                            <Phone className="w-4 h-4 text-slate-400" /> {d.phone.label}\n                        </label>`, regex: true },
    { from: `placeholder="0555 555 55 55"`, to: `placeholder={d.phone.placeholder}` },
    { from: `>\\s*<GraduationCap className="w-4 h-4 text-slate-400" /> Üniversite\\s*</label>`, to: `>\n                            <GraduationCap className="w-4 h-4 text-slate-400" /> {d.university.label}\n                        </label>`, regex: true },
    { from: `placeholder="Üniversite Adı"`, to: `placeholder={d.university.placeholder}` },
    { from: `>\\s*<Building2 className="w-4 h-4 text-slate-400" /> Bölüm\\s*</label>`, to: `>\n                            <Building2 className="w-4 h-4 text-slate-400" /> {d.department.label}\n                        </label>`, regex: true },
    { from: `placeholder="Bölümünüz"`, to: `placeholder={d.department.placeholder}` },
    { from: `>\\s*<Calendar className="w-4 h-4 text-slate-400" /> Sınıf\\s*</label>`, to: `>\n                            <Calendar className="w-4 h-4 text-slate-400" /> {d.grade.label}\n                        </label>`, regex: true },
    { from: `<option value="">Seçiniz</option>`, to: `<option value="">{d.grade.placeholder}</option>` },
    { from: `<option value="3">3. Sınıf</option>`, to: `<option value="3">{d.grade.year3}</option>` },
    { from: `<option value="4">4. Sınıf</option>`, to: `<option value="4">{d.grade.year4}</option>` },
    { from: `<option value="graduate">Yeni Mezun</option>`, to: `<option value="graduate">{d.grade.graduate}</option>` },
    { from: `<option value="master">Yüksek Lisans</option>`, to: `<option value="master">{d.grade.master}</option>` },
    { from: `>\\s*<FileText className="w-4 h-4 text-slate-400" /> CV Yükle\\s*</label>`, to: `>\n                        <FileText className="w-4 h-4 text-slate-400" /> {d.cv.label}\n                    </label>`, regex: true },
    { from: `"Dosya seçmek için tıklayın veya sürükleyin"`, to: `d.cv.dragDrop` },
    { from: `>PDF, DOC, DOCX \\(Max 5MB\\)</p>`, to: `>{d.cv.restrictions}</p>`, regex: true },
    { from: `Lütfen güncel CV'nizi yükleyin.`, to: `{d.cv.errorMsg}` },
    { from: `>\\s*<FileText className="w-4 h-4 text-slate-400" /> Kısa Notunuz\\s*</label>`, to: `>\n                        <FileText className="w-4 h-4 text-slate-400" /> {d.message.label}\n                    </label>`, regex: true },
    { from: `placeholder="Eklemek istedikleriniz..."`, to: `placeholder={d.message.placeholder}` },
    { from: `Gönderiliyor...`, to: `{d.submitting}` },
    { from: `Başvuruyu Tamamla`, to: `{d.submit}` }
];

for (const r of replacements) {
    if (r.regex) {
        data = data.replace(new RegExp(r.from, 'g'), r.to);
    } else {
        data = data.split(r.from).join(r.to);
    }
}

fs.writeFileSync(path, data);
console.log('Template updated successfully');
