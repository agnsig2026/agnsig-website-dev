import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Top",
    path: "#news",
    newTab: false,
  },
  {
    id: 2,
    title: "News",
    path: "#news",
    newTab: false,
  },
  {
    id: 3,
    title: "Talks",
    path: "#talks",
    newTab: false,
  },
  {
    id: 4,
    title: "Leadership",
    path: "#team",
    newTab: false,
  },
  {
    id: 5,
    title: "COR",
    path: "https://science.nasa.gov/astrophysics/programs/cosmic-origins/community/agn-sig/",
    newTab: true,
  },
];
export default menuData;
