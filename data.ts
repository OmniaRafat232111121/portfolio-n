import {RiComputerLine} from 'react-icons/ri';
import { IProject, Service, Skill } from './type';
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
export const projects: IProject[] = [
  { 
    name: "Dashboard App",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/Dashboard.jpg",
    deployed_url: "https://dashboard-a-uth.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/DashboardAuth",
    category: ["react"],
    key_techs: ["React", "react-apexcharts", "bootstrap",'formik','react-data-table-component','react-count-up'],
  },
  { 
    name: "Dashboard App",
    description:
      "This app login,register with authentication of api then protect routing to go to home  shows a statistical view about corona virus over the world",
    image_path: "/dass.jpg",
    deployed_url: "https://dashboard-a-uth.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/DashboardTailwind",
    category: ["react"],
    key_techs: ["React", "tailwindcss",'formik','api','redux-toolkit','react-count-up'],
  },
  {
    name: "CryptoCurrency",
    image_path: "/CryptoCurrency.jpg",
    deployed_url: "https://cryptocurrency-one.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/cryptocurrency",
    category: ["react"],
    description:
      "An web app which with State Management , and fetching data from multiple sources using RapidAPI while building the best Cryptocurrency App.",
    key_techs: ["React", "axios",'AntDesign','react-chartjs-2',"Redux Toolkit"],
  },

  {
    name: "Twitch Game",
    image_path: "/Twitch.jpg",
    deployed_url: "https://twitch-nextjs-tailwind.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/Twitch",
    category: [ 'next'],
    description:
      "Online Gaming and authentication with Google, Github",
    key_techs: [
      "Next js",
      "tailwindcss",
      "next-auth",

    ],
  },

  {
    name: "DatePickerCalender",
    image_path: "/Date.jpg",
    deployed_url: "https://data-currency-picker-rf8z6mrh7-omniarafat232111121.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/Exchange_Date_Picker",
    category: [ "react","React&typescript"],
    description:
      "select range from start,endDate then picking The Egp,USD in this date",
    key_techs: ["React", "typescript", "react-calender"],
  },


  {
    name: "Tatto",
    image_path: "/tatto.jpg",
    deployed_url: "https://tattoo-teal.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/tatto",
    category: ["react"],
    description:
      "landing page with animation,Tatto of ageny",
    key_techs: ["React","swiper", "react-grid-gallery", "Tailwindcss"],
  },

  {
    name: "Tic tac toe",
    image_path: "/game.jpg",
    deployed_url: "https://tic-tac-pfrst0z63-omniarafat232111121.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/Tic-Tac-Toe",
    category: ["react",'React&typescript'],
    description:
      "play with x,Y ",
    key_techs: ["Express", "react", "Typescript"],
  },
  {
    name: "Hotel reservation room",
    image_path: "/hotel.jpg",
    deployed_url: "https://hotelland.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/hotel-starter",
    category: ["react"],
    description:
      'Reservations room from Date calender checkin,checkout ,if no kids or adults then Check now  ',
    key_techs: [
      "React",
      "tailwindcss",
      "spinner-react",
      "swiper",
      
    ],
  },
  {
    name: "DigitalProductivity Agency",
    image_path: "/agency.jpg",
    github_url:"https://github.com/OmniaRafat232111121/prouctivelanding",
    deployed_url:"https://landing-beryl-alpha.vercel.app/",
    category: ["next"],
    description:
      "landingPage with productivity Digital",
    key_techs: ["next", "css"],
  },
  {
    name: "Shoppingcart",
    image_path: "/shopping.jpg",
    github_url:"https://github.com/OmniaRafat232111121/shoppingCart",
    deployed_url:"https://shopping-cart-topaz-iota.vercel.app/",
    category: ["react"],
    description:
      "SHooping cart with increment,decrement,clear items",
    key_techs: ["react", "redux-toolkit"],
  },
  {
    name: "notes",
    image_path: "/notes.jpg",
    github_url:"https://github.com/OmniaRafat232111121/notes",
    deployed_url:"https://notes-9u28couvn-omniarafat232111121.vercel.app/",
    category: ["React&typescript"],
    description:
      "creating notes with localstorage and you can delete notes",
    key_techs: ["react", "redux-toolkit",'typescriot','Bootstrap'],
  },
  {
    name: "Desinic",
    image_path: "/Design.jpg",
    deployed_url: "https://agency-ten-rho.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/agency",
    category: [ "javascript"],
    description:"landing page with Devlopemnt,markting...etc",
    key_techs: ["Html", "css", "javascript"],
  },
];