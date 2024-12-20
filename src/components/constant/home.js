import twoDCartoon from "../../assets/2D_Cartoon_Triland.mp4";
import { ROUTE_PATHS } from "../../routes/routePath";

export const navItems = [
  { name: "Home", id: "home",
    navigate:ROUTE_PATHS.home
   },
  {
    name: "Services",
    id: "services",
    sub: [
      { name: "2D Animation", id: "services",
    navigate:ROUTE_PATHS.home

       },
      { name: "3D Animation", id: "services",
    navigate:ROUTE_PATHS.home

       },
      { name: "Digital Marketing", id: "services",
    navigate:ROUTE_PATHS.home

       },
    ],
  },
  { name: "About us", id: "aboutUs" },

  {
    name: "connect",
    id: "",
    sub: [
      { name: "Carrier",
       id: "",
         navigate:ROUTE_PATHS.carriers },
      { name: "Contact", id: "contact",
    navigate:ROUTE_PATHS.home

       },
    ],
  },
];

export const services = [
  {
    title: "2D Animation",
    id: "2dAnimation",
    subtitle: "Bring your ideas to life with vibrant, hand-crafted animations that captivate and engage.",
    submenus: [
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
    ],
  },
  {
    title: "3D Animation",
    id: "3dAnimation",
    subtitle: "Bring your ideas to life with vibrant, hand-crafted animations that captivate and engage.",
    submenus: [
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
    ],
  },
  {
    title: "Digital Marketing",
    id: "digitalMarketing",
    subtitle: "Bring your ideas to life with vibrant, hand-crafted animations that captivate and engage.",
    submenus: [
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
      {
        title: "2D Cartoon",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae ad, quas dolorem vel voluptate debitis ut hic obcaecati quia necessitatibus soluta
              facilis? Odit eius excepturi atque distinctio! Nihil obcaecati culpa earum, excepturi quisquam
              id explicabo est laudantium veritatis? Eos voluptates numquam ad a ullam quidem sed, earum
              voluptate.`,
        src: twoDCartoon,
        type: "video",
      },
    ],
  },
];
