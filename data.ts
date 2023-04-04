import {RiComputerLine} from 'react-icons/ri';
import { Service, Skill } from './type';
import { FaServer } from "react-icons/fa";
import {BsCircleFill} from 'react-icons/bs'
import { AiOutlineAntDesign, AiOutlineApi,AiOutlineShoppingCart } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {DiCss3Full} from 'react-icons/di'
export const services:Service[]=[
    {
      Icon: RiComputerLine,
      title: "Frontend Development",
      about:
        "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> and <b>Redux</b>,<b>Redux-toolkit</b>,<b>Firebase</b> ",
    },
    {
      Icon: DiCss3Full,
      title: "Styling",
      about:" knowledge and experience with different CSS,sass styling libraries like <b>Tailwind CSS </b>, <b>Bootstrap</b>, <b>Material UI </b>, and <b> Ant Design </b> can be very useful in creating web applications.",
    },
    
   
    {
      Icon: AiOutlineAntDesign,
      title: "UI/UX designer",
      about:
        "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
    },
    {
      Icon: AiOutlineShoppingCart,
      title: "Ecommerce template",
      about:
        "Building E-commerce website with <b>Shopify</b>  ",
    },
    
    
  ];
  
export const languages:Skill[]=[
{
  name:'javascript',
  Icon:BsCircleFill,
  level:"70",
},
{
  name:'Typescript',
  Icon:BsCircleFill,
  level:"60",
},
{
  name:'React js',
  Icon:BsCircleFill,
  level:'80'
},
{
  name:'Bootstrap',
  Icon:BsCircleFill,
  level:'90'
},
{
  name:'tailwindcss',
  Icon:BsCircleFill,
  level:'90'
},{
  name:'materialUi',
  Icon:BsCircleFill,
  level:'40'
}
]