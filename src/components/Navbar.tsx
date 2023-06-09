import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useState,useEffect,FunctionComponent} from 'react'
const NavItem:FunctionComponent<{
    active:string 
    setActive:Function
    name:string 
    route:string
}>=({active,setActive,name,route})=>{
    return active !== name ?(

        <Link href={route}>
        <span className='mx-2 cursor-pointer hover:border-b-4 text-green' 
        onClick={()=>setActive(name)}>
                  {name}
        </span>

        </Link>
    ):null
}
const Navbar = () => {
    const {pathname}=useRouter();
    const [active,setActive]=useState("");
    useEffect(() => {
      if(pathname ==="/") setActive('About')
      else if (pathname === '/projects') setActive('Projects')
      else if (pathname === '/resume') setActive('Resume')
    }, [pathname]);
  return (
    <div className='flex items-center justify-between px-5 py-3 my-3  '>
      <span className='text-xl font-bold border-b-4 border-green text-green'
      >{active}</span>
      
      <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/projects'
            />
         </div>
    </div>
  )
}

export default Navbar
