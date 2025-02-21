import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Projects</motion.h2 >
        <div>{PROJECTS.map((project, i) => (
            <a target="_blank" href={project.link} key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='w-full flex items-center justify-center lg:w-1/4'>
                    <img src={project.image} 
                        width={200} 
                        alt={project.title} 
                        className='mb-11 rounded object-cover h-[160px]'/>
                </motion.div>
                <motion.div whileInView={{opacity:1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration:0.5}} className="w-full  max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-seimbold'>{project.title}</h6>
                    <p style={{fontSize: '18px'}} className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech, i) => (
                        <span key={i} className='mx-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                    ))}
                </motion.div>
            </a>
        ))}</div>
    </div>
  )
}

export default Projects