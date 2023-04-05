import {IconType} from 'react-icons'

export interface Service{
    title:string,
    about:string,
    Icon:IconType
}
export interface Skill{
    name:string,
    Icon:IconType,
    level:string
}
export interface IProject {
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    category: Category[];
    key_techs: string[];
  }
  
  export type Category = "next" |"react" | "javascript"|"React&typescript"| "html&css" ;