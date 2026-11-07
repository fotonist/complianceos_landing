import Link from "next/link";
import {capabilities,featurePath,type Capability,type Locale} from "@/lib/capabilities";
import styles from "./CapabilityPage.module.css";
export default function CapabilityPage({capability,locale}:{capability:Capability;locale:Locale}){
 const tr=locale==="tr",copy=capability[locale],base=tr?"/tr":"/";
 return <div className={styles.page} lang={locale}>
 <header className={styles.header}><Link className={styles.brand} href={base}>Compliance<span>OS</span></Link><nav aria-label={tr?"Ana menü":"Main navigation"}><Link href={base}>{tr?"Ana sayfa":"Home"}</Link><Link href={featurePath(tr?"en":"tr",capability.slug)} hrefLang={tr?"en":"tr"}>{tr?"EN":"TR"}</Link><Link className={styles.button} href={tr?"/tr/demo":"/demo"}>{tr?"Demo Talep Et":"Request a Demo"}</Link></nav></header>
 <main><section className={styles.hero}><p className={styles.kicker}>COMPLIANCE INTELLIGENCE OS PRO / {tr?"ÜRÜN ÖZELLİKLERİ":"CAPABILITIES"}</p><h1>{copy.title}</h1><p>{copy.description}</p><Link className={styles.button} href={tr?"/tr/demo":"/demo"}>{tr?"Demo Talep Et":"Request a Demo"} →</Link></section>
 <section className={styles.section}><h2>{tr?"Neler yapabilirsiniz?":"What you can do"}</h2><div className={styles.grid}>{copy.benefits.map((benefit,i)=><article key={benefit}><span>0{i+1}</span><h3>{benefit}</h3></article>)}</div></section>
 <section className={styles.example}><p className={styles.kicker}>{tr?"ÖRNEK SENARYO":"EXAMPLE WORKFLOW"}</p><h2>{tr?"Gerçek bir iş akışında":"In a real workflow"}</h2><p>{copy.scenario}</p></section>
 <section className={styles.section}><h2>{tr?"Diğer platform yetenekleri":"Explore related capabilities"}</h2><div className={styles.links}>{capabilities.filter(c=>c.slug!==capability.slug).map(c=><Link href={featurePath(locale,c.slug)} key={c.slug}>{c[locale].title} →</Link>)}</div></section>
 <section className={styles.cta}><h2>{tr?"Kurumunuzun ihtiyaçlarını birlikte değerlendirelim.":"Explore how ComplianceOS fits your organization."}</h2><Link className={styles.button} href={tr?"/tr/demo":"/demo"}>{tr?"Demo Talep Et":"Request a Demo"} →</Link></section></main>
 <footer className={styles.footer}>© {new Date().getFullYear()} ComplianceOS · <Link href={base}>{tr?"Ana sayfa":"Home"}</Link></footer></div>;
}