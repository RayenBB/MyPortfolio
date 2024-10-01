import cdi from "../../assets/CDI1.jpg";
import simac from "../../assets/register.png";
import bug from "../../assets/ticket.png";

export const projectsData = [
    {
        id: 1,
        image: cdi,
        title: "E-Trade",
        category: ["Web", "DevOps","ML"]  ,
    },
    {
        id: 2,
        image: simac,
        title: "Tenders Call",
        category: ["Web"],
    },
    {
        id: 3,
        image: bug,
        title: "Bug Tracker",
        category: "[Web]",
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Web",
    },
    {
        name: "ML",
    },
    {
        name: "DevOps",
    },
];