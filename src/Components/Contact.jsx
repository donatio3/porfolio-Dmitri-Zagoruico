import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 whileInView={{opacity:1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration:0.5}} className="my-10 text-center text-4xl">Get in Touch</motion.h2 >
        <div className="text-center flex flex-col tracking-tighter">
            <motion.p whileInView={{opacity:1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='my-4'>{CONTACT.address}</motion.p>
            <motion.a whileInView={{opacity:1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} href={`tel:${CONTACT.phoneNo}`} className='my-4'>{CONTACT.phoneNo}</motion.a>
            <a href={`mailto:${CONTACT.email}`} style={{textDecoration: 'underLine'}}>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact