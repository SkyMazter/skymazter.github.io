import CTLsite from "./assets/CTLsite-img.png";
import SeenIT from "./assets/SeenIT.png";

const projectData: Project[] = [
  {
    title: "CommnuityTechLab.org",
    imgLink: CTLsite,
    description: `This is a website I built to showcase the work El Puente and CTNY has done when it comes to community technology 
    and digital equity. Showcasing version history of Portable Network Kits, Our trained stewards, and examples of community owned 
    networks throughout the United States.`,
    siteLink: "https://communitytechlab.org",
    githubLink: "https://github.com/Community-Tech-Lab/CTLab_Website",
  },
  {
    title: "Seen.it",
    description: `This is a application made for the raspberry pi to serve as an archiving app. 
      Allowing users to create accounts, upload, and download files. `,
    imgLink: SeenIT,
  },
];
export default projectData;
