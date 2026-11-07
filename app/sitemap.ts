import type { MetadataRoute } from "next";
import {capabilities,featurePath,site} from "@/lib/capabilities";
export default function sitemap():MetadataRoute.Sitemap{
 const home=[{url:`${site}/`,changeFrequency:"weekly" as const,priority:1,alternates:{languages:{en:`${site}/`,tr:`${site}/tr`}}},{url:`${site}/tr`,changeFrequency:"weekly" as const,priority:0.9,alternates:{languages:{en:`${site}/`,tr:`${site}/tr`}}}];
 const features=capabilities.flatMap(c=>(["en","tr"] as const).map(locale=>({url:`${site}${featurePath(locale,c.slug)}`,changeFrequency:"monthly" as const,priority:0.7,alternates:{languages:{en:`${site}${featurePath("en",c.slug)}`,tr:`${site}${featurePath("tr",c.slug)}`}}})));
 return [...home,...features];
}