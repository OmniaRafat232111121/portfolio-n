import React from 'react'
import { languages } from '../../data'
import Bar from '@/components/Bar'

const resume = () => {
  return (
    <div className='px-6 py-6'>
      {/*eduaction &&experience*/}
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Modern Academy in Maddi (2018-2022)</p>
            <p className="my-3">
              I am graduated from computer science Engineering
              from Modern Academy from GPA 3.8
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Front end Developer.</h5>
            <p className="font-semibold">Sartup defenders</p>
          <p className=' my-3'>Works on Dashboards and Developments</p>
          </div>
        </div>
      </div>

      {/*lanaguage&tools*/}
      <div className="grid gap-9  ">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
     

     
      </div>
      
    </div>
  
  )
}

export default resume
