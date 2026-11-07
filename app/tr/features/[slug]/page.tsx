import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {capabilities,getCapability,featurePath,site} from "@/lib/capabilities";
import CapabilityPage from "@/components/CapabilityPage";
export function generateStaticParams(){return capabilities.map(c=>({slug:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const c=getCapability(slug);if(!c)return {};return {title:`${c.tr.title} | ComplianceOS Pro`,description:c.tr.description,alternates:{canonical:`${site}${featurePath("tr",slug)}`,languages:{en:`${site}${featurePath("en",slug)}`,tr:`${site}${featurePath("tr",slug)}`}},openGraph:{title:c.tr.title,description:c.tr.description,url:`${site}${featurePath("tr",slug)}`,type:"website",locale:"tr_TR"}};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=getCapability(slug);if(!c)notFound();return <CapabilityPage capability={c} locale="tr"/>;}