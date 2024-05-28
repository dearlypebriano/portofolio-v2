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
  {
    name: "Kasir Minimarket",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/dashboardSoftware.png",
      "/images/projects/dataProduct.png",
      "/images/projects/kasir.png",
      "/images/projects/pembayaran.png",
      "/images/projects/strokePenjualan.png",
      "/images/projects/laporanPenjualan.png",
      "/images/projects/dataPenjualan.png",
      "/images/projects/grafikPPR.png",
    ],
    description:
      "Kasir minimarket, software desktop yang dibangun menggunakan bahasa pemrograman Javascript dan library Electron.",
    sourceCodeHref: "https://github.com/dearlypebriano/kasir-minimarket-v2",
  },
];
