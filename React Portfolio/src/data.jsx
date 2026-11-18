import featuredDesktop from "./assets/blendz/live-desktop.webp";
import featuredMobile from "./assets/blendz/live-mobile.webp";
import cutTaper from "./assets/blendz/taper-fade-line-up.webp";
import cutMullet from "./assets/blendz/drop-fade-mullet.webp";
import cutHighTaper from "./assets/blendz/high-taper.webp";
import cutBurst from "./assets/blendz/burst-fade.webp";
import clipPoster from "./assets/blendz/taper-sponge-curls-poster.jpg";
import clipMp4 from "./assets/blendz/taper-sponge-curls.mp4";
import clipWebm from "./assets/blendz/taper-sponge-curls.webm";
import img0 from "../../images/Front-images/4.jpeg";
import img1 from "../../images/Front-images/1.jpeg";
import img2 from "../../images/Front-images/2.jpeg";
import img3 from "../../images/Front-images/3.jpeg";
import img4 from "../../images/Front-images/5.jpeg";
import img5 from "../../images/Front-images/6.jpeg";
const projects = [
  {
    id: 0,
    title: "Vibez Music App",
    kind: "Group project",
    tags: ["React", "MongoDB"],
    image: img4,
    date: "Jan 30th 2025",
    content:
      "This group project we learned the power of the mongo data base. We also learned how to implemnt react in our project, how to get data from the data base in real time and pull data back so the user can see there saved songs.",
    link: "https://github.com/Alexm415/vibez-tune-music-app",
  },
  {
    id: 1,
    title: "News Hub",
    kind: "Group project",
    tags: ["Accounts", "Ratings & comments", "Search"],
    image: img0,
    date: "Nov 25th 2024",
    content:
      "This group project we worked on for about 2 weeks and learned so much from it. There were problems, that we all over came and made a great news app!",
    link: "https://github.com/Alexm415/NewsHub",
  },
  {
    id: 2,
    title: "NetLu",
    kind: "Group project",
    tags: ["APIs", "JSON"],
    image: img1,
    date: "Sep 24th 2024",
    content:
      "This group project we learned the power of APIs. How much data can be passed throught one link is amazing, using the json file to make content!",
    link: "https://github.com/Alexm415/NetLu",
  },
  {
    id: 3,
    title: "Portfolio",
    kind: "Personal",
    tags: ["React", "Vite"],
    image: img5,
    date: "Jan 24th 2025",
    content:
      "This is where i show off my work and show how i learned to use react and add data i have saved in a seprate file and is maped out for you. ",
    link: "https://github.com/Alexm415/React-Portfolio",
  },
];
const otherAssignments = [
  {
    id: 0,
    title: "TechBlogSpot",
    kind: "Assignment",
    tags: ["Handlebars", "Database", "User profiles"],
    image: img2,
    date: "Dec 3rd 2024",
    content:
      "This assignment i learned how to make data base and use handle bars to update the dom. This also showed me how to take user data and make them a profile and a user in our data base.",
    link: "https://github.com/Alexm415/TechBlogSpot",
  },
  {
    id: 1,
    title: "ReadMe Maker",
    kind: "Assignment",
    tags: ["Node.js", "CLI"],
    image: img3,
    date: "Oct 8th 2024",
    content:
      " This assignment i learned how to use node js to make programs with out the browser. This app i use today to make Readmes fast and easy!",
    link: "https://github.com/Alexm415/NodeReadme",
  },
];
// Additional public repos; descriptions are taken from each repo's README.
const moreRepos = [
  {
    id: 0,
    title: "Social-Network-API",
    kind: "Repo",
    tags: ["MongoDB", "API"],
    content:
      "An API that lets you add users to a MongoDB database and see their thoughts and friends list.",
    link: "https://github.com/Alexm415/Social-Network-API",
  },
  {
    id: 1,
    title: "PWA-Text-Editor",
    kind: "Repo",
    tags: ["PWA", "Offline"],
    content:
      "A text editor that runs in the browser and can be installed for offline use.",
    link: "https://github.com/Alexm415/PWA-Text-Editor",
  },
  {
    id: 2,
    title: "E-comBackend",
    kind: "Repo",
    tags: ["Express", "PostgreSQL", "Sequelize"],
    content: "A back end app for an online store.",
    link: "https://github.com/Alexm415/E-comBackend",
  },
];

const featuredProject = {
  title: "Blendzwitdom",
  kicker: "A barber portfolio for Dominic Mena, a Hayward barber.",
  kind: "Featured",
  date: "Nov 2026",
  tags: ["React", "Vite", "CSS", "GitHub Pages"],
  content:
    "A responsive React + Vite site I built for my brother, Dominic Mena. It has a services and prices menu, a haircut photo gallery, looping video reveals, Booksy reviews (4.9★ from 66 reviews), hours and location, and Book Now buttons that go to Booksy. It is deployed on GitHub Pages.",
  live: "https://alexm415.github.io/Blendzwithdom/",
  code: "https://github.com/Alexm415/Blendzwithdom",
  book: "https://booksy.com/en-us/971232_blendedbydom_barber-shop_119449_hayward",
  desktop: featuredDesktop,
  mobile: featuredMobile,
  gallery: [
    { src: cutTaper, caption: "Taper fade + line-up", alt: "Taper fade and line-up haircut" },
    { src: cutMullet, caption: "Drop fade mullet", alt: "Drop fade mullet haircut" },
    { src: cutHighTaper, caption: "High taper", alt: "High taper haircut" },
    { src: cutBurst, caption: "Burst fade", alt: "Burst fade haircut" },
  ],
  videos: [
    {
      mp4: clipMp4,
      webm: clipWebm,
      poster: clipPoster,
      caption: "Taper + sponge curls",
      alt: "Video of a taper fade with a sponge-curl top and sharp line-up",
    },
  ],
};
export default { featuredProject, projects, otherAssignments, moreRepos };
