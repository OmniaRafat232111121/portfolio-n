import React, { FunctionComponent } from 'react'
import { IProject } from '../../type'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { useState } from 'react';
import Image from "next/image";

const ProjectCard:FunctionComponent<{
    project:IProject,
    key:string
}> =({
project:{
    name,
    image_path,category,deployed_url,description,github_url,key_techs
}
}) => {
    const [showDetail,setShowDetail]=useState(false);
  return (
    <div className='text-black'>
     <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
     <p className='my-2 text-center'>{name}</p>
     {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto  p-3 text-black bg-gray-400  rounded-md md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            

            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3 text-black">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 text-black"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 text-black"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl text-black">{name}</h2>
            <h3 className="mb-3 font-medium  text-black">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-300 text-black rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-300 rounded-full top-3 right-3 focus:outline-none text-black"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;