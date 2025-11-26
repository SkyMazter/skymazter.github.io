// global.d.ts
export {};

declare global {
  interface Project {
    title?: string;
    description?: string;
    siteLink?: string;
    tags?: string[];
    githubLink?: string;
    imgLink?: string;
  }
}
