import {RiReactjsLine} from 'react-icons/ri'
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiWebpack } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { animate, motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
});


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800'>
        <motion.h1 whileInView={{opacity: 1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1.5}} 
        className='my-20 text-center text-4xl'>Techologies</motion.h1>

        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">

            
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className='text-7xl text-orange-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3 className='text-7xl text-blue-500'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-green-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className='text-7xl text-purple-800'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className='text-7xl text-yellow-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(4)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className='text-7xl text-blue-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(4)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNextdotjs className='text-7xl text-blue-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandRedux className='text-7xl text-purple-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(4)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiWebpack className='text-7xl text-blue-400'/>
            </motion.div >            


        </motion.div>

    </div>
  )
}

export default Technologies