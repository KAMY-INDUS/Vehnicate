import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <section id='community'>
      <motion.span className="communityhead tg" initial={{opacity:0,scale:0,filter:"blur(10px)",translateY:"20%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}} transition={{duration:0.5}}>Community</motion.span>
      <div className="clients">
        <motion.div className="client cursor-default" initial={{opacity:0,scale:1,filter:"blur(0px)",translateY:"0%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}} whileHover={{scale:1.05,background:"linear-gradient(-45deg,rgba(50, 5, 92, 0.731),#be326c6b)",boxShadow:"0px 0px 25px rgb(92, 0, 178,0.5))"}} transition={{duration:0.25}}>
          <span className='clienttitle'>Super Work</span>
          <span className='clientcontent'>Vehnicate is the best company I have Ever Heard and Answers everything Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus, eveniet accusantium repellat dolores, rem totam debitis, laboriosam quis temporibus modi</span>
          <div className="clientinfo">
            <Image src="/logo.png" height={100} width={100} className='clientimg'/>
            <span className='clientname'>Yashvanth K</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community