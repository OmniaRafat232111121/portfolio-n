import React, { FunctionComponent } from 'react'
import { Service } from '../../type'

const ServiceCard:FunctionComponent<{service:Service}> = ({service:{Icon,about,title}}) => {
    function createMarkup() {
        return {
           __html: about,
        }
     }
    return (
    <div className=' flex items-center  space-x-5  mt-4 ' >
        <Icon className='w-20 h-7 text-green '/>
        <div className=''>
           <h4 className='font-bold'>{title}</h4>
           <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
       
      
    </div>
  )
}

export default ServiceCard
