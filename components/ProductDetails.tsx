import Link from "next/link";
import styles from "./ProductDetails.module.css";

export default function ProductDetails({ tr, demoHref }: { tr: boolean; demoHref: string }) {
  const modules = tr ? [
    ["Standart ve çerçeve yönetimi", "Kurumun kapsamını, çalışılacak standartları ve sürümleri belirleyin. Kontrol, gereksinim ve olgunluk temelli modelleri kendi değerlendirme yapılarına göre ele alın.", "Sonuç: Ekibiniz hangi kapsam üzerinde çalıştığını bilir."],
    ["Kanıt yönetimi", "Kanıt dosyalarını açıklamalarıyla birlikte kaydedin ve ilgili çalışmalarla ilişkilendirin. Denetim hazırlığında bir kaydın neyi desteklediğini ve nerede kullanıldığını takip edin.", "Sonuç: Kanıtlar bir dosya yığını olmaktan çıkar, bağlam kazanır."],
    ["Risk ve iyileştirme takibi", "Riskleri ve tespit edilen eksikleri iyileştirme görevleriyle birlikte yönetin. Sorumluları, terminleri ve ilerlemeyi takip ederek açık işleri görünür tutun.", "Sonuç: Bulgular takip edilebilir aksiyonlara dönüşür."],
    ["Süreçler ve hedefler", "Uyumluluk çalışmalarını kurumun süreçleriyle ilişkilendirin. Hedefleri ve ölçüm ihtiyaçlarını tanımlayarak günlük işleyiş ile yönetim sistemi arasındaki bağlantıyı kurun.", "Sonuç: Standart çalışmaları operasyonel bir bağlama oturur."],
    ["Olgunluk değerlendirmesi", "Olgunluk temelli çerçevelerde süreçleri ve uygulamaları ilgili değerlendirme modeli üzerinden inceleyin. Değerlendirme kapsamını ve gelişim alanlarını aynı bağlamda ele alın.", "Sonuç: Gelişim ihtiyacı süreç ve model bazında anlaşılır."],
    ["Yönetim görünümü ve yetkilendirme", "Risk, kanıt ve görev kayıtlarını ortak bir çalışma alanında izleyin. Rol ve izinlerle ekip üyelerinin erişimini görevlerine göre düzenleyin.", "Sonuç: Ekipler ortak kayıtlara tanımlı yetkilerle erişir."],
  ] : [
    ["Standards and frameworks", "Define your organization’s scope, standards and versions. Work with control, requirement and maturity based models according to their respective assessment structures.", "Outcome: Your team knows exactly which scope it is working on."],
    ["Evidence management", "Record evidence files with descriptions and connect them to the work they support. Track what a record demonstrates and where it is used when preparing for audits.", "Outcome: Evidence gains context beyond the file itself."],
    ["Risks and improvements", "Manage risks and identified gaps alongside improvement tasks. Track owners, deadlines and progress to keep outstanding work visible.", "Outcome: Findings become actions your team can follow through."],
    ["Processes and objectives", "Connect compliance work to organizational processes. Define objectives and measurement needs to link daily operations with your management system.", "Outcome: Standards work gains an operational context."],
    ["Maturity assessment", "Review processes and practices through the relevant assessment model for maturity based frameworks. Consider assessment scope and improvement areas together.", "Outcome: Development needs are understood by process and model."],
    ["Management visibility and access", "Follow risk, evidence and task records in a shared workspace. Use roles and permissions to organize access around each team member’s responsibilities.", "Outcome: Teams work with shared records and defined access."],
  ];
  const frameworks = tr ? [
    ["Kontrol temelli", "Kontrollerin uygulanmasını ve bu uygulamaları destekleyen kanıtları takip etmek için."],
    ["Gereksinim temelli", "Gereksinimleri, bunlarla ilişkili çalışmaları ve karşılanma durumunu değerlendirmek için."],
    ["Olgunluk temelli", "Süreçleri ve uygulamaları ilgili olgunluk modeli üzerinden değerlendirmek için."],
  ] : [
    ["Control based", "Track the implementation of controls and the evidence supporting them."],
    ["Requirement based", "Evaluate requirements, related work and their fulfillment."],
    ["Maturity based", "Assess processes and practices through the relevant maturity model."],
  ];
  const questions = tr ? [
    ["Bu platform kimler için?", "Uyumluluk ve yönetim sistemi ekipleri, süreç sahipleri ve ISO danışmanları için ortak bir çalışma alanı sunar. Uygun kapsam, kurumunuzun ihtiyaçları üzerinden demo sırasında belirlenir."],
    ["Tüm standartların içeriği ürüne dahil mi?", "Standart paketleri ayrıca lisanslanır. Kullanılabilir içerik, seçilen paket ve lisans koşullarına bağlıdır; tanıtım sayfası tüm standartların otomatik olarak dahil olduğu anlamına gelmez."],
    ["Kurulum süreci nasıl ilerler?", "İhtiyaç ve kapsam görüşmesinin ardından paket ve lisans koşulları belirlenir. Lisans ve kaynak onayı doğrulanarak kurulum planlanır. Kurulum hizmetinin kapsamı ve ücreti teklif aşamasında açıklanır."],
    ["Platform belgelendirme sağlar mı?", "Platform hazırlık, kayıt ve takip çalışmalarını destekler. Sertifika veya belgelendirme kararı vermez; ilgili değerlendirme ve belgelendirme süreçleri ayrıca yürütülür."],
  ] : [
    ["Who is the platform for?", "Compliance and management system teams, process owners and ISO consultants. We use the demo to discuss the scope that fits your organization’s needs."],
    ["Is every standard included?", "Standards packages are licensed separately. Available content depends on the selected package and its license terms; this page does not imply that every standard is automatically included."],
    ["How does installation work?", "After discussing your needs and scope, we agree on packages and license terms. Installation is planned with license and source approval verification. Service scope and fees are explained during the quotation stage."],
    ["Does the platform provide certification?", "The platform supports preparation, records and follow-up work. It does not issue certificates or certification decisions; relevant assessment and certification processes take place separately."],
  ];
  return <section id="product" className={styles.section} aria-labelledby="product-title">
    <div className={styles.heading}><p className={styles.eyebrow}>{tr ? "ÜRÜNÜ YAKINDAN TANIYIN" : "EXPLORE THE PRODUCT"}</p><h2 id="product-title">{tr ? "Uyumluluğun her adımına ortak bir bağlam." : "Shared context for every step of compliance."}</h2><p>{tr ? "Compliance Intelligence OS Pro, standart kapsamından kanıta, risklerden iyileştirme çalışmalarına kadar kayıtlarınız arasındaki ilişkileri yönetmenize yardımcı olur." : "Compliance Intelligence OS Pro helps you manage the relationships between your records, from standards and scope to evidence, risks and improvement work."}</p></div>
    <nav className={styles.index} aria-label={tr ? "Ürün bölümleri" : "Product sections"}><a href="#capabilities">{tr ? "Yetenekler" : "Capabilities"} ↓</a><a href="#frameworks">{tr ? "Çerçeve türleri" : "Framework types"} ↓</a><a href="#product-questions">{tr ? "Kurulum ve sorular" : "Installation & questions"} ↓</a></nav>
    <div id="capabilities" className={styles.modules}>{modules.map(([title, description, outcome], i) => <article key={title}><span className={styles.number}>0{i + 1}</span><h3>{title}</h3><p>{description}</p><p className={styles.outcome}>{outcome}</p></article>)}</div>
    <div id="frameworks" className={styles.frameworks}><h3>{tr ? "Üç çerçeve türü, kendi yapısına uygun işleyiş." : "Three framework types, each with its own structure."}</h3><p>{tr ? "Bir kontrol listesi ile bir olgunluk değerlendirmesi aynı yöntemle ele alınmaz. Platformun çerçeve ayrımı, çalışmanın modeline uygun ilerlemesini sağlar." : "A control checklist and a maturity assessment call for different approaches. The framework structure helps organize work around the relevant model."}</p><div>{frameworks.map(([title, description]) => <article key={title}><h4>{title}</h4><p>{description}</p></article>)}</div></div>
    <div className={styles.example}><p className={styles.eyebrow}>{tr ? "ÖRNEK KULLANIM AKIŞI" : "AN EXAMPLE WORKFLOW"}</p><h3>{tr ? "Bir eksikten izlenebilir iyileştirmeye." : "From a gap to a traceable improvement."}</h3><p>{tr ? "Bir süreçte eksik tespit ettiniz. İlgili riski kaydedin, kanıtları ilişkilendirin ve sorumlusu ile termini belirlenmiş bir iyileştirme görevi oluşturun. İlerlemeyi aynı kayıt bağlamında takip edin." : "You identify a gap in a process. Record the related risk, connect supporting evidence and create an improvement task with an owner and a deadline. Follow progress in the context of those records."}</p></div>
    <div id="product-questions" className={styles.questions}><h3>{tr ? "Demo öncesinde bilmeniz gerekenler" : "Before your demo"}</h3>{questions.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    <div className={styles.demo}><p>{tr ? "Kendi süreçleriniz üzerinden değerlendirelim." : "Let’s explore it through your own processes."}</p><Link href={demoHref}>{tr ? "Demo Talep Et" : "Request a Demo"} →</Link></div>
  </section>;
}
