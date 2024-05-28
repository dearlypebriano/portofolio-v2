import {
  SiExpress,
  SiSocketdotio,
  SiNextdotjs,
  SiMysql,
  SiMinio,
  SiDaisyui,
} from "react-icons/si";
import {
  FramerMotionIcon,
  // ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import JavaSvg from "../../public/icons/javac.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import DartSvg from "@/public/icons/dart.svg";
import GoLangSvg from "@/public/icons/golang.svg";
import PhpSvg from "@/public/icons/php.svg";
import CSharpSvg from "@/public/icons/csharp.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import SpringBoot from "@/public/icons/spring-svgrepo-com.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import AngularSvg from "@/public/icons/angular.svg";
import BootstrapSvg from "@/public/icons/bootstrap.svg";
import CPPSvg from "@/public/icons/cpp.svg";
import LaravelSvg from "@/public/icons/laravel.svg";
import CodeIgniterSvg from "@/public/icons/codeiginiter.svg";
import FlutterSvg from "@/public/icons/flutter-svgrepo-com.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Dart",
        icon: DartSvg,
      },
      {
        name: "Go Lang",
        icon: GoLangSvg,
      },
      {
        name: "Php",
        icon: PhpSvg,
      },
      {
        name: "C#",
        icon: CSharpSvg,
      },
      {
        name: "C++",
        icon: CPPSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
      {
        name: "Codeigniter",
        icon: CodeIgniterSvg,
      },
      {
        name: "DaisyUI",
        icon: SiDaisyui,
      },
      {
        name: "Laravel",
        icon: LaravelSvg,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
      },
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Spring",
        icon: SpringBoot,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "MinIO",
        icon: SiMinio,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
