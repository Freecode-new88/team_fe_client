// src/config/sites.ts
export type SiteKey = "F168" | "MK8";

export interface SiteEntry {
  key: SiteKey;        
  id: string;          
  label: string;
}       

export const SITES: SiteEntry[] = [
  { key: "F168", id: "68d63c5e056c355a7243a39f", label: "F168" },
  { key: "MK8",  id: "68d63993056c355a7243a397", label: "MK8" },
];

// handy maps
export const siteByKey = Object.fromEntries(SITES.map(s => [s.key, s]));
export const siteOptions = SITES.map(s => ({ value: s.key, label: s.label }));

export const F168lINK = "https://8bdXmN.short.gy/yKRBra" // https://m.f16118.vip/?id=617638500
export const MK8LINK = "https://8bdXmN.short.gy/6NHKeq"  // https://www.mk881166.com/?uagt=itsoftware&path=signup
