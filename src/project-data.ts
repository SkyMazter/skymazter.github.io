import CTLsite from "./assets/CTLsite-img.png";
import SeenIT from "./assets/SeenIT.png";
import PNK from "./assets/pnkimage1.png";

const projectData: Project[] = [
  {
    title: "P.A.L.M",
    description: `
    P.A.L.M aims to be a platform for locally hosted community Ai models. 
    Utitizing open source technology to create a replicable model that can be hosted on community networks. 
    With the use of Retrieval-Augmented Generation created using Langchain and Ollama, commuities can host a local model that can generate responses based on community submitted information hosted on Local Networks. 
     `,
    tags: ["React", "Typescript", "LangChain", "AI", "Tailwind"],
    githubLink: "https://github.com/SkyMazter/PNK_RAG_AI_Agent",
  },
  {
    title: "CommnuityTechLab.org",
    imgLink: CTLsite,
    description: `This is a website I built to showcase the work El Puente and CTNY has done when it comes to community technology 
    and digital equity. Showcasing version history of Portable Network Kits, Our trained stewards, and examples of community owned 
    networks throughout the United States.`,
    siteLink: "https://communitytechlab.org",
    githubLink: "https://github.com/Community-Tech-Lab/CTLab_Website",
    tags: ["React", "Typescript"],
  },
  {
    title: "Seen.it",
    description: `This is a application made for the raspberry pi to serve as an archiving app. 
      Allowing users to create accounts, upload, and download files. `,
    imgLink: SeenIT,
    tags: ["Docker", "React", "Typescript", "Bootstrap"],
    githubLink: "https://github.com/SkyMazter/Seen_It",
  },
  {
    title: "PNKv3 Server Image",
    githubLink: "https://github.com/Community-Tech-Lab/PNK-Software",
    description: `
    This is a repository of all the software needed to set up a Portable Network Kit (PNK). 
    Included is a configuration file for the router, and a server image designed to be installed on a RaspberryPi 4 or newer. 
    The PNK server image sets up a local web server with a chat service, file sharing system, and document editor. 
    Once configured, the system operates independently, facilitating seamless communication and collaboration within a self-contained network. 
    `,
    tags: ["Linux", "Raspberry Pi"],
    imgLink: PNK,
  },
  {
    title: "BarSpot",
    description: `
    Capstone project meant to help people plan out their nights before a night of responsible drinking. 
     `,
    tags: ["React", "Typescript", "Bootstrap"],
    githubLink: "https://github.com/Bar-Spot-Capstone/bar-spot",
  },
  {
    title: "NYC Bathroom Tracker",
    githubLink: "https://github.com/SkyMazter/Bathroom-Tracker",
    description: `
    This is a web app meant to help people create and manage their own repository of available bathrooms in the city for then they are on the go. Using the Google Maps api to provide directions in conjunction with NYC Open Data for any notable public locations. 
    `,
    tags: ["Typescript", "React"],
  },
];
export default projectData;
