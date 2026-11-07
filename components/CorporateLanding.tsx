import Link from "next/link";
import ProductDetails from "./ProductDetails";
import {capabilities, featurePath} from "@/lib/capabilities";
import styles from "./CorporateLanding.module.css";

export default function CorporateLanding({ locale = "en" }: { locale?: string }) {
  const tr = locale === "tr";
  const base = tr ? "/tr" : "";
  const copy = tr ? {
    product: "Ürün", solutions: "Çözümler", contact: "İletişim", demo: "Demo Talep Et",
    eyebrow: "COMPLIANCE INTELLIGENCE OS PRO",
    title: "GRC ve uyum yönetimi yazılımıyla süreçlerinizi tek merkezden yönetin.",
    intro: "ComplianceOS; ISO 27001 uyum çalışmalarını, risk değerlendirmelerini, iç tetkikleri, kanıtları ve iyileştirme görevlerini tek bir GRC çalışma alanında ilişkilendirmenize yardımcı olur.",
    explore: "Ürünü keşfedin", caption: "Uyumluluk süreçlerinin şematik görünümü",
    heading: "Risk yönetimi, denetim hazırlığı ve uyum süreçleri tek çalışma alanında.",
    sub: "Dağınık kayıtları ortak bir çalışma alanında buluşturun.",
    cards: [
      ["Çoklu standart yönetimi", "Kontrol, gereksinim ve olgunluk temelli çerçeveleri kendi yapılarına uygun şekilde yönetin."],
      ["İzlenebilir kanıtlar", "Kanıtları ilgili çalışmalarla ilişkilendirin; denetim hazırlığında ihtiyaç duyduğunuz kayıtlara ulaşın."],
      ["Risk ve aksiyon takibi", "Riskleri, sorumluları ve iyileştirme adımlarını birlikte takip ederek önceliklerinizi netleştirin."],
    ],
    approach: "KURUMUNUZA UYGUN YAPI", approachTitle: "Standarttan günlük işleyişe.",
    approachText: "Uyumluluk ekipleri, süreç sahipleri ve danışmanlar için ortak bir çalışma alanı. Kurumunuzun ihtiyaçlarını ve kurulum kapsamını birlikte değerlendirelim.",
    steps: ["Çerçeve ve kapsamı belirleyin", "Kanıtları ve riskleri ilişkilendirin", "İyileştirme çalışmalarını takip edin"],
    cta: "Kurumunuz için nasıl çalıştığını görün.", ctaText: "İhtiyaçlarınızı konuşalım, platformu birlikte inceleyelim.", rights: "Tüm hakları saklıdır.",
  } : {
    product: "Product", solutions: "Solutions", contact: "Contact", demo: "Request a Demo",
    eyebrow: "COMPLIANCE INTELLIGENCE OS PRO",
    title: "GRC and compliance management software for connected teams.",
    intro: "ComplianceOS connects ISO 27001 compliance work, risk assessments, internal audits, evidence management and improvement actions in one GRC workspace.",
    explore: "Explore the product", caption: "Illustrative compliance workflow",
    heading: "Risk management, audit readiness and compliance in one workspace.", sub: "Bring scattered records together in a shared workspace.",
    cards: [
      ["Multi-framework management", "Manage control, requirement and maturity based frameworks according to their own structures."],
      ["Traceable evidence", "Connect evidence to the work it supports and find the records you need when preparing for audits."],
      ["Risks and actions", "Track risks, owners and improvement actions together to keep priorities clear."],
    ],
    approach: "BUILT AROUND YOUR ORGANIZATION", approachTitle: "From standards to everyday work.",
    approachText: "A shared workspace for compliance teams, process owners and consultants. Let’s explore your organization’s needs and installation scope together.",
    steps: ["Define your frameworks and scope", "Connect your evidence and risks", "Follow through on improvement actions"],
    cta: "See how it works for your organization.", ctaText: "Tell us what you need. Let’s walk through the platform together.", rights: "All rights reserved.",
  };
  return (
    <div className={styles.site} lang={tr ? "tr" : "en"}>
      <a className={styles.skip} href="#content">{tr ? "İçeriğe geç" : "Skip to content"}</a>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <Link href={base || "/"} className={styles.brand} aria-label="ComplianceOS">
            <span className={styles.mark} aria-hidden="true">C<span>✓</span></span>
            <span>Compliance<span className={styles.brandOs}>OS</span><small>INTELLIGENCE PLATFORM</small></span>
          </Link>
          <nav className={styles.nav} aria-label={tr ? "Ana menü" : "Main navigation"}>
            <a href="#product">{copy.product}</a><a href="#solutions">{copy.solutions}</a><a href="#contact">{copy.contact}</a>
          </nav>
          <div className={styles.navActions}>
            <Link href={tr ? "/" : "/tr"} hrefLang={tr ? "en" : "tr"} aria-label={tr ? "Switch to English" : "Türkçeye geç"}>{tr ? "EN" : "TR"}</Link>
            <Link className={styles.primary} href={`${base}/demo`}>{copy.demo}<span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </header>
      <main id="content">
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1>{copy.title}</h1><p className={styles.intro}>{copy.intro}</p>
          <div className={styles.actions}><Link className={styles.primary} href={`${base}/demo`}>{copy.demo}<span aria-hidden="true">→</span></Link><a className={styles.secondary} href="#product">{copy.explore}<span aria-hidden="true">↓</span></a></div>
          <figure className={styles.preview}>
            <div className={styles.previewBar}><span aria-hidden="true">● ● ●</span><span>Compliance Intelligence OS Pro</span><span aria-hidden="true">↗</span></div>
            <div className={styles.workflow}>
              <div className={styles.workflowTitle}>{tr ? "Uyumluluk çalışma alanınız" : "Your compliance workspace"}<small>{tr ? "Kapsamdan iyileştirmeye, bağlantılı bir yapı." : "A connected view, from scope to improvement."}</small></div>
              <div className={styles.workflowSteps}>{(tr ? ["Standartlar ve kapsam", "Kanıtlar ve riskler", "Aksiyonlar ve takip"] : ["Standards & scope", "Evidence & risks", "Actions & follow-up"]).map((label, i) => <div key={label}><span>0{i + 1}</span><strong>{label}</strong></div>)}</div>
              <p>{tr ? "Ortak bağlam · Belirli sorumlular · İzlenebilir kayıtlar" : "Shared context · Clear ownership · Traceable records"}</p>
            </div>
            <figcaption>{copy.caption}</figcaption>
          </figure>
        </section>
        <ProductDetails tr={tr} demoHref={`${base}/demo`} />
        <section aria-labelledby="feature-pages-title" style={{maxWidth:1200,margin:"0 auto",padding:"65px 32px"}}>
          <p className={styles.eyebrow}>{tr?"PLATFORM YETENEKLERİ":"PLATFORM CAPABILITIES"}</p>
          <h2 id="feature-pages-title">{tr?"ComplianceOS Pro özelliklerini keşfedin":"Explore ComplianceOS Pro capabilities"}</h2>
          <p style={{color:"#64748b",marginTop:16}}>{tr?"Her yeteneği kullanım senaryoları ve sağladığı faydalarla inceleyin.":"Explore each capability, its use cases and practical benefits."}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:16,marginTop:32}}>
            {capabilities.map(item=><Link key={item.slug} href={featurePath(tr?"tr":"en",item.slug)} style={{display:"block",padding:24,border:"1px solid #dce3eb",borderRadius:7}}>
              <h3 style={{fontSize:18,fontWeight:600}}>{item[tr?"tr":"en"].title}</h3>
              <p style={{fontSize:13,color:"#64748b",lineHeight:1.7,marginTop:12}}>{item[tr?"tr":"en"].description}</p>
              <span style={{display:"inline-block",marginTop:16,color:"#205db1",fontSize:13}}>{tr?"Detayları incele":"Learn more"} →</span>
            </Link>)}
          </div>
        </section>
        <section id="solutions" className={styles.benefits}>
          <p className={styles.eyebrow}>{tr ? "TEK BİR ÇALIŞMA ALANI" : "ONE SHARED WORKSPACE"}</p><h2>{copy.heading}</h2><p>{copy.sub}</p>
          <div className={styles.cards}>{copy.cards.map(([title, text], i) => <article key={title}><span className={styles.number}>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>
        <section className={styles.approach}><div><p className={styles.eyebrow}>{copy.approach}</p><h2>{copy.approachTitle}</h2><p>{copy.approachText}</p></div><ol>{copy.steps.map(step => <li key={step}>{step}</li>)}</ol></section>
        <section id="contact" className={styles.contact}><div><h2>{copy.cta}</h2><p>{copy.ctaText}</p></div><Link className={styles.primary} href={`${base}/demo`}>{copy.demo}<span aria-hidden="true">→</span></Link></section>
      </main>
      <footer className={styles.footer}><span>Compliance Intelligence OS Pro</span><p>© {new Date().getFullYear()} ComplianceOS. {copy.rights}</p><Link href={`${base}/demo`}>{copy.contact} ↗</Link></footer>
    </div>
  );
}
