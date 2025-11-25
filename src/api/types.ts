

export type Country = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  region: string;
  subregion?: string;
  population: number;
  capital?: string[];  // <-- FIX
  cca3: string;
  borders?: string[];  // <-- FIX
  tld?: string[];
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
};



export type Theme = "light" | "dark";