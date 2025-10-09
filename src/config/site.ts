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

export const F168lINK = "https://f162288.vip/" // https://f162288.vip/?id=486544302
export const MK8LINK = "https://www.mk881166.com/?uagt=itsoftware&path=signup"  // https://www.mk881167.net/?af=neung5599
