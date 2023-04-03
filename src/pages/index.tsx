import ServiceCard from '@/components/ServiceCard';
import { services } from '../../data'
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const About=()=>{
  console.log('Client' ,services)
  return (
    <>
    <div className="flex flex-col flex-grow px-6 pt-1 ">
     <h6 className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div
        className="flex-grow 
        p-4 mt-5 bg-gray-400
         rounded-md
         dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
      <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <div className='grid gap-6  my-3 lg:grid-cols-2'>
          {services.map(service=>(
            <div 
            className='lg:col-span-1 p-2 bg-gray-200 rounded-lg '
            key={service.title}>
                <ServiceCard service={service}/>
             </div>
          
          )
          )}
        </div>
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