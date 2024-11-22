import { IconType } from "react-icons";

export interface TechnologyCard {
  id: string;
  Icon: IconType;
  name: string;
  color: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
}
