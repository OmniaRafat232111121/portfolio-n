import { RiComputerLine } from 'react-icons/ri';
import { IProject, Service, Skill } from './type';
import { FaServer } from "react-icons/fa";
import { BsCircleFill } from 'react-icons/bs'
import { AiOutlineAntDesign, AiOutlineApi, AiOutlineShoppingCart } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsFiletypeCss } from 'react-icons/bs'
export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> and <b>Redux</b>,<b>Redux-toolkit</b>,<b>Firebase</b> ",
  },
  {
    Icon: BsFiletypeCss,
    title: "Styling",
    about: " knowledge and experience with different CSS,sass styling libraries like <b>Tailwind CSS </b>, <b>Bootstrap</b>, <b>Material UI </b>, and <b> Ant Design </b> can be very useful in creating web applications.",
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

export const languages: Skill[] = [
  {
    name: 'javascript',
    Icon: BsCircleFill,
    level: "70",
  },
  {
    name: 'Typescript',
    Icon: BsCircleFill,
    level: "60",
  },
  {
    name: 'React js',
    Icon: BsCircleFill,
    level: '80'
  },
  {
    name: 'Bootstrap',
    Icon: BsCircleFill,
    level: '90'
  },
  {
    name: 'tailwindcss',
    Icon: BsCircleFill,
    level: '90'
  }, {
    name: 'materialUi',
    Icon: BsCircleFill,
    level: '40'
  }
]
export const projects: IProject[] = [
  {
    id: '1',
    name: "Dashboard App",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/Dashboard.jpg",
    deployed_url: "https://dashboard-a-uth.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/DashboardAuth",
    category: ["react"],
    key_techs: ["React", "react-apexcharts", "bootstrap", 'formik', 'react-data-table-component', 'react-count-up'],
  },
  
  {
    id: '2',
    name: "Dashboard App",
    description:
      "This app login,register with authentication of api then protect routing to go to home  shows a statistical view about corona virus over the world",
    image_path: "/dass.jpg",
    deployed_url: "https://dashboard-a-uth.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/DashboardTailwind",
    category: ["react"],
    key_techs: ["React", "tailwindcss", 'formik', 'api', 'redux-toolkit', 'react-count-up'],
  },
  {
    id: '20',
    name: "CryptoCurrency",
    image_path: "/CryptoCurrency.jpg",
    deployed_url: "https://cryptocurrency-one.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/cryptocurrency",
    category: ["react"],
    description:
      "An web app which with State Management , and fetching data from multiple sources using RapidAPI while building the best Cryptocurrency App.",
    key_techs: ["React", "axios", 'AntDesign', 'react-chartjs-2', "Redux Toolkit"],
  },


  {
    id: '47',
    name: "systehema",
    description:
      "",
    image_path: "/ss.jpg",
    deployed_url: "https://website-fe-sp.vercel.app/",
    github_url: "",
    category: ["next"],
    key_techs: ["React","tailwindcss" ,'framer-motion','ts'],
  },
  {
    id: '48',
    name: "Ecommerce planing soultion",
    description:
      "",
    image_path: "/plan.jpg",
    github_url: "https://github.com/OmniaRafat232111121/ecommerce-planingSoultion",
    deployed_url: "https://ecommerce-planing-soultion.vercel.app/",
    category: ["next"],
    key_techs: ["React","tailwindcss" ,'framer-motion','ts'],
  },
  {
    id: '50',
    name: "Bebyon Brand page",
    description:
      "",
    image_path: "/Beb.jpg",
    github_url: "https://github.com/OmniaRafat232111121/Bebo",
    deployed_url: "https://bebebyon-92g8qe9jh-omniarafat232111121.vercel.app/",
    category: ["next"],
    key_techs: ["React","tailwindcss" ,'wow','ts'],
  },
  {
    id: '49',
    name: "Landing Agency page",
    description:
      "",
    image_path: "/AgencyReact.jpg",
    github_url: "https://github.com/OmniaRafat232111121/AgencyReact",
    deployed_url: "https://agency-react-eta.vercel.app/",
    category: ["next"],
    key_techs: ["React","tailwindcss" ,'framer-motion','ts'],
  },
  {
    id: '46',
    name: "Timetechnology",
    description:
      "",
    image_path: "/time.jpg",
    deployed_url: "https://timetec-kucr.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/timetec",
    category: ["next"],
    key_techs: ["React","tailwindcss" ,'framer-motion','ts'],
  },

  {

    id: '21',
    name: "portfolio",
    image_path: "/portfolio.jpg",
    deployed_url: "https://portfolio-main-nu-seven.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/portfolio-maint",
    category: ["HTML&CSS"],
    description:
      "",
    key_techs: ["Html", "css", 'javascript'],


  },
  {
    id: '3',
    name: "DisenyClone",
    image_path: "/diseny.jpg",
    github_url: "https://github.com/OmniaRafat232111121/Diseny_Clone",
    deployed_url: "https://diseny-clone-dzlelgyo4-omniarafat232111121.vercel.app/",
    category: ["react"],
    description:
      "diseny with login with firebase,fetching movie from api",
    key_techs: ["react", "firebase", 'api'],
  },
  {
    id: '4',
    name: "Gym",
    image_path: "/gym.jpg",
    github_url: "https://github.com/OmniaRafat232111121/gymme-landing",
    deployed_url: "https://gymme-landing.vercel.app/",
    category: ["react"],
    description:
      "",
    key_techs: ["react", "tailwindcss"],
  },

  {
    id: '5',
    name: "coffe",
    image_path: "/coffe.jpg",
    github_url: "https://github.com/OmniaRafat232111121/Coffe_landing",
    deployed_url: "https://coffe-landing.vercel.app/",
    category: ["HTML&CSS"],
    description:
      "",
    key_techs: ["Html", "css"],
  },
  {
    id: '22',
    name: "plantex website",
    image_path: "/preview.png",
    github_url: "https://github.com/OmniaRafat232111121/plantwebsite",
    deployed_url: "https://plantwebsite23-pcmgyvpy2-omniarafat232111121.vercel.app/",
    category: ["HTML&CSS"],
    description:
      "",
    key_techs: ["Html", "css", 'javascript'],
  },

  {
    id: '6',
    name: "Twitch Game",
    image_path: "/Twitch.jpg",
    deployed_url: "https://twitch-nextjs-tailwind.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/Twitch",
    category: ['next'],
    description:
      "Online Gaming and authentication with Google, Github",
    key_techs: [
      "Next js",
      "tailwindcss",
      "next-auth",

    ],
  },

  {
    id: '7',
    name: "DatePickerCalender",
    image_path: "/Date.jpg",
    deployed_url: "https://data-currency-picker-rf8z6mrh7-omniarafat232111121.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/Exchange_Date_Picker",
    category: ["react", "React&typescript"],
    description:
      "select range from start,endDate then picking The Egp,USD in this date",
    key_techs: ["React", "typescript", "react-calender"],
  },


  {
    id: '8',
    name: "Tatto",
    image_path: "/tatto.jpg",
    deployed_url: "https://tattoo-teal.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/tatto",
    category: ["react"],
    description:
      "landing page with animation,Tatto of ageny",
    key_techs: ["React", "swiper", "react-grid-gallery", "Tailwindcss"],
  },

  {
    id: '9',
    name: "Tic tac toe",
    image_path: "/game.jpg",
    deployed_url: "https://tic-tac-pfrst0z63-omniarafat232111121.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/Tic-Tac-Toe",
    category: ["react", 'React&typescript'],
    description:
      "play with x,Y ",
    key_techs: ["Express", "react", "Typescript"],
  },
  {
    id: '10',
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
    id: '11',
    name: "DigitalProductivity Agency",
    image_path: "/agency.jpg",
    github_url: "https://github.com/OmniaRafat232111121/prouctivelanding",
    deployed_url: "https://landing-beryl-alpha.vercel.app/",
    category: ["next"],
    description:
      "landingPage with productivity Digital",
    key_techs: ["next", "css"],
  },
  {
    id: '12',
    name: "Shoppingcart",
    image_path: "/shopping.jpg",
    github_url: "https://github.com/OmniaRafat232111121/shoppingCart",
    deployed_url: "https://shopping-cart-topaz-iota.vercel.app/",
    category: ["react"],
    description:
      "SHooping cart with increment,decrement,clear items",
    key_techs: ["react", "redux-toolkit"],
  },

  {
    id: '13',
    name: "Blog",
    image_path: "/Blog.jpg",
    github_url: "https://github.com/OmniaRafat232111121/StaticBlogand-MarkDown/tree/main/blog",
    deployed_url: "https://static-blog-five.vercel.app/",
    category: ["next"],
    description:
      "next with routing ",
    key_techs: ["next", "react"],
  },
  {
    id: '14',
    name: "notes",
    image_path: "/notes.jpg",
    github_url: "https://github.com/OmniaRafat232111121/notes",
    deployed_url: "https://notes-9u28couvn-omniarafat232111121.vercel.app/",
    category: ["React&typescript"],
    description:
      "creating notes with localstorage and you can delete notes",
    key_techs: ["react", "redux-toolkit", 'typescriot', 'Bootstrap'],
  },
  {
    id: '15',
    name: "Desinic",
    image_path: "/Design.jpg",
    deployed_url: "https://agency-ten-rho.vercel.app/",
    github_url: "https://github.com/OmniaRafat232111121/agency",
    category: ["javascript"],
    description: "landing page with Devlopemnt,markting...etc",
    key_techs: ["Html", "css", "javascript"],
  },
  {
    id: '26',
    name: "templatelandingPage",
    image_path: "/template2.png",
    github_url: "https://github.com/OmniaRafat232111121/template2",
    deployed_url: "https://template2-dusky.vercel.app/",
    category: ["HTML&CSS"],
    description:
      "",
    key_techs: ["Html", "css"],
  },
  {
    id: '17',
    name: "templatelandingPage",
    image_path: "/template3.png",
    github_url: "https://github.com/OmniaRafat232111121/template3",
    deployed_url: "https://template3-iota.vercel.app/",
    category: ["HTML&CSS"],
    description:
      "",
    key_techs: ["Html", "css"],
  },
  {
    id: '19',
    name: "Dashboard",
    image_path: "/Daashboard.png",
    github_url: "https://github.com/OmniaRafat232111121/dashbboard",
    deployed_url: "https://dashbboard.vercel.app/#",
    category: ["HTML&CSS"],
    description:
      "",
    key_techs: ["Html", "css"],
  },
  {
    id: '33',
    name: "foodApp",
    image_path: "/food.png",
    github_url: "https://github.com/OmniaRafat232111121/foodWeb",
    deployed_url: "https://food-web-iota.vercel.app/",
    category: ["react"],
    description:
      "",
    key_techs: ["react", "firebase", "framer-motion", "tailwind-scrollbar"],
  },
  {
    id: '34',
    name: "Datewarhouse",
    image_path: "/House.png",
    github_url: "https://github.com/OmniaRafat232111121/data-warehouse",
    deployed_url: "https://data-warehouse-one.vercel.app/",
    category: ["react"],
    description:
      "Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.",
    key_techs: ["react", "tailwindcss", "framer-motion",],
  },
  {
    id: '35',
    name: "Dorsin",
    image_path: "/dorsin.png",
    github_url: "https://github.com/OmniaRafat232111121/Dorsin",
    deployed_url: "https://dorsin-iota.vercel.app/",
    category: ["react"],
    description: "landing page of dorsin that containing services,team,pricing of all category",
    key_techs: ["react", "Bootstrap", 'css'],

  },
  {
    id: '36',
    name: "Nike",
    image_path: "/nike.png",
    github_url: "https://github.com/OmniaRafat232111121/niki",
    deployed_url: "https://niki-pi.vercel.app/",
    category: ["next"],
    description: "Ecommerce",
    key_techs: ["next ", "tailwindcss"],

  },
  
  {
    id: '37',
    name: "Enara company",
    image_path: "/electrical.png",
    github_url: "https://github.com/OmniaRafat232111121/EnaraCompany",
    deployed_url: "https://enara-company.vercel.app/",
    category: ["javascript"],
    description: "landing page with Electrical company and what is accomplished",
    key_techs: ["HTML ", "CSS","javascript"],

  
 },{
  id: '38',
  name: "Learning connection",
  image_path: "/learning.png",
  github_url: "https://github.com/OmniaRafat232111121/learnnig_uni",
  deployed_url: "https://learnnig-uni.vercel.app/index.html",
  category: ["HTML&CSS"],
  description: "",
  key_techs: ["HTML ", "CSS","javascript"],



},{
  id: '39',
  name: "Chat",
  image_path: "/chat.png",
  github_url: "https://github.com/OmniaRafat232111121/chat",
  deployed_url: "https://chat-eta-puce.vercel.app/",
  category: ["react"],
  description: "",
  key_techs: ["react  ","socket.io", "CSS","chat-engine"],


},
{
  id: '40',
  name: "ecommerce",
  image_path: "/ecommerce.png",
  github_url: "https://github.com/OmniaRafat232111121/ecommerce-next",
  deployed_url: "https://store-ecommerce-green.vercel.app/",
  category: ["next"],
  description: "",
  key_techs: ["next","sanity","react","CSS"],


},{
  id: '41',
  name: "SpecialDesign",
  description:
    "",
  image_path: "/specialDesign.png",
  deployed_url: "https://special-design-psi.vercel.app/",
  github_url: "https://github.com/OmniaRafat232111121/specialDesign",
  category: ["react"],
  key_techs: ["React", "react-apexcharts", "bootstrap", 'formik', 'react-data-table-component', 'react-count-up'],
},
{
  id: '42',
  name: "ECOMMERCEAPI",
  description:
    "",
  image_path: "/ECOM.png",
  deployed_url: "https://ecom-pi-five.vercel.app/",
  github_url: "https://github.com/OmniaRafat232111121/Ecom",
  category: ["react"],
  key_techs: ["React", "react-slick", "bootstrap", 'formik','yup', 'react-hemelt', 'API'],
},
{
  id: '43',
  name: "DOGAPI",
  description:
    "",
  image_path: "",
  deployed_url: "https://dog-livid.vercel.app/",
  github_url: "https://github.com/OmniaRafat232111121/dog",
  category: ["react"],
  key_techs: ["React","CSS" ,'API'],
},
{
  id: '44',
  name: "Clinic",
  description:
    "",
  image_path: "/clinic.png",
  deployed_url: "https://clinic-amber.vercel.app/",
  github_url: "https://github.com/OmniaRafat232111121/clinic/tree/master",
  category: ["react"],
  key_techs: ["React","tailwindcss" ,'API'],
},
{
  id: '45',
  name: "portfolio-framermotion",
  description:
    "",
  image_path: "/screen.png",
  deployed_url: "https://next-js-developer-portfolio-starter-code-nine.vercel.app/",
  github_url: "https://github.com/OmniaRafat232111121/Next.js-Developer-Portfolio-Starter-Code",
  category: ["next"],
  key_techs: ["React","tailwindcss" ,'framer-motion'],
},

 
];