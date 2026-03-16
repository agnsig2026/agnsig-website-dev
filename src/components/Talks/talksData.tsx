import { Talk } from "@/types/talk";

// talksData is maintained incrementally; 
// please add the newest talk at the top of the list.

const talksData: Talk[] = [
  {
    id: 4,
    type: "Vision",
    date: "17 Feb 2026",
    name: "Dr. Santiago Garcia-Burillo \n(Observatorio Astronómico Nacional)",
    title: "The ALMA view of the gas cycle in nearby AGN",
    url: "https://youtu.be/9CH5QxFyXm8" 
  },
  {
    id: 3,
    type: "Spotlight",
    date: "27 Jan 2026",
    name: "Dr. Namrata Roy \n(Arizona State University)",
    title: "Turning a new page in the AGN feedback chapter: Mapping Multiphase AGN Feedback from powerful jets to weak winds",
    url: "https://www.youtube.com/watch?v=Hy_y2V-ODFo&t=209s" 
  },
  {
    id: 2,
    type: "Spotlight",
    date: "27 Jan 2026",
    name: "Dr. Lulu Zhang \n(University of Texas, San Antonio)",
    title: "New Insights into AGN Feedback in the Local Universe: A Spatially Resolved View from JWST Spectroscopy",
    url: "https://www.youtube.com/watch?v=Hy_y2V-ODFo&t=1891s" 
  },
  {
    id: 1,
    type: "Vision",
    date: "21 Oct 2025",
    name: "Dr. Jenny Greene \n(Princeton)",
    title: "The Beguiling Mystery of the Little Red Dots",
    url: "https://youtu.be/qa1kg6Gb5_4"   
  },
];
export default talksData;
