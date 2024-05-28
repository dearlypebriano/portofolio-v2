import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Json tree",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/Screenshot 2024-05-28 at 13.44.19.png",
      "/images/projects/Screenshot 2024-05-28 at 13.44.29.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/dearlypebriano/portofolio-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
