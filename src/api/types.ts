export type Country = {
  [x: string]: any;
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  population: number;
  cca3: string; // important for border codes
};