import twoDCartoon from "../../assets/2D_Cartoon_Triland.mp4";
import { ROUTE_PATHS } from "../../routes/routePath";
export const navItems = [
  { name: "Home", id: "home", navigate: ROUTE_PATHS.home },
  {
    name: "Services",
    id: "services",
    sub: [
      {
        name: "3D Animation",
        id: "3dAnimation",
        navigate: ROUTE_PATHS.services,
      },
      {
        name: "2D Animation",
        id: "2dAnimation",
        navigate: ROUTE_PATHS.services,
      },
      {
        name: "Digital Marketing",
        id: "digitalMarketing",
        navigate: ROUTE_PATHS.services,
      },
      {
        name: "VFX & Editing",
        id: "vfxEditing",
        navigate: ROUTE_PATHS.services,
      },
    ],
  },
  { name: "About us", navigate: ROUTE_PATHS.home, id: "aboutUs" },

  {
    name: "connect",
    id: "",
    sub: [
      { name: "Carrier", id: "", navigate: ROUTE_PATHS.carriers },
      { name: "Contact", id: "contact", navigate: ROUTE_PATHS.home },
    ],
  },
];

export const services = [
  {
    title: "3D Animation",
    id: "3dAnimation",
    subtitle:
      "Bring your ideas to life with vibrant, hand-crafted animations that captivate and engage.",
    submenus: [
      {
        title: "Product Animation",
        url: "https://vimeo.com/1040361248",
      },
      {
        title: "Character Animation",
        url: "https://vimeo.com/1042718565",
      },
      {
        title: "Process Animation",
        url: "https://vimeo.com/1042729235?share=copy",
      },
      {
        title: "Architech Animation",
        url: "https://vimeo.com/1042719331",
      },
    ],
  },
  {
    title: "2D Animation",
    id: "2dAnimation",
    subtitle:
      "Bring your ideas to life with vibrant, hand-crafted animations that captivate and engage.",
    submenus: [
      {
        title: "E-Learning",
        url: "https://vimeo.com/1042723381?share=copy",
      },
      {
        title: "Traditional Animation",
        url: "https://vimeo.com/1042719884",
      },
      {
        title: "White Board / Story Board",
        url: "https://vimeo.com/1042719884",
      },
    ],
  },
  {
    title: "Digital Marketing & Advertisements",
    id: "digitalMarketing",
    subtitle:
      "Bring your ideas to life with vibrant, hand-crafted animations that captivate and engage.",
    submenus: [
      {
        title: "Social Media Marketing",
        url: "https://vimeo.com/1040361248",
      },
      {
        title: "Product Advertisement",
        url: "https://vimeo.com/1042719937",
      },
      {
        title: "Cinematic Advertising Production",
        url: "https://vimeo.com/1040361248",
      },
    ],
  },
  {
    title: "VFX & Editing",
    id: "vfxEditing",
    subtitle:
      "Bring your ideas to life with vibrant, hand-crafted animations that captivate and engage.",
    submenus: [
      {
        title: "Visual Effects Demo",
        url: "https://vimeo.com/1042721580",
      },
      {
        title: "Audio / Video Editing",
        url: "https://vimeo.com/1040361248",
      },
      {
        title: "Graphics Design & UI/UX ",
        url: "https://vimeo.com/1040361248",
      },
      {
        title: "Colour Grading",
        url: "https://vimeo.com/1040361248",
      },
    ],
  },
];
