import ServiceCard from '@/components/ServiceCard';
import { services } from '../../data'
// import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import {motion} from 'framer-motion'
import Head from 'next/head';

const About=()=>{
   const variants={
    initial:{
      opacity:0,
      y:60
    },
    animate:{
      opacity:1,
      y:0,
    }
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 0.9,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  
  console.log('Client' ,services)
  return (
    <>
    <div className="flex flex-col flex-grow px-6 pt-1 text-black">
    <Head>
        <title>frontendDeveloper| omniarafat</title>
      </Head>{""}
     <h6 className="my-3 text-base font-medium">
     I am a Computer Science graduate from Modern Academy with a GPA of 3.8. My passion for web development led me to pursue a track in this field, starting from level 2 with React JS and Laravel. Since then, I have honed my skills by working on various Shopify templates and taking up multiple freelancing projects. Through my experience, I have gained a deep understanding of the intricacies involved in web development and have developed the ability to create innovative solutions to complex problems.
      </h6>
      <div
        className="flex-grow 
        p-5 mt-5 bg-gray-400
         rounded-md
        
          "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
      <h4 className="my-3 text-xl font-semibold tracking-wide ">
          What I am doing
        </h4>
        <motion.div 
     initial="hidden"
     animate="visible"
     
      variants={container} className='grid gap-6  my-3 lg:grid-cols-2  '>
          {services.map(service=>(
            <div 
            className='lg:col-span-1 p-2 bg-gray-200   rounded-lg
              '
            key={service.title}>
                <ServiceCard service={service}/>
             </div>
          
          )
          )}
        </motion.div>
      </div>
     </div>
    </>
  )
}



//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }
export default About;