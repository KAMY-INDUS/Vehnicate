import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="" id="about">
          <motion.span initial={{opacity:0,scale:0,filter:"blur(10px)"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)"}} transition={{duration:0.5}} className="abouthead m-1" style={{position:'relative',zIndex:-1}}>ABOUT</motion.span>
          <motion.span initial={{opacity:0,filter:"blur(10px)"}} whileInView={{opacity:1,filter:"blur(0px)"}} transition={{duration:0.5}} className="headcon text-justify" style={{position:'relative',zIndex:-1}}>
            We architect an <span className="highlight">Omnipresent network</span> by <span className="highlight">Personifying</span> a pre-existing
            commodity that connects locations in the physical world <span className="highlight">Vehicles.</span>
          </motion.span>
          
          <div className="aboutconh justify-center al" style={{position:'relative',zIndex:-1}}>
            <motion.span initial={{opacity:0,scale:0,filter:"blur(10px)"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)"}}
            transition={{ease:"easeInOut",duration:0.5}} className="we">We</motion.span>
            <motion.div initial={{opacity:0,scale:1,filter:"blur(10px)",translateX:"0%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateX:"0%"}} transition={{duration:0.75}}  className="wecon">
                <div>
                  Characterise vehicles and enable them to behave/interact just
                  like a <span className="highlight">Social being</span> through <span className="highlight">AI.</span>
                </div>
                <div className="via">VIA WHICH</div>
                <div>
                  let users <span className="highlight">Express</span> their views, ideas and thoughts <span className="highlight">Differently.</span>
                </div>
            </motion.div>
          </div>
          <br/>
          <br/>
          <div className="about-cont">
            <div className="cards">
              <div className="orva">
                <div className="orvaside">
                  <motion.span initial={{opacity:0,scale:0,filter:"blur(10px)"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)"}} transition={{duration:0.5}} className="orvash">hnAir</motion.span>
                  <motion.span initial={{opacity:0,scale:0,filter:"blur(10px)"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)"}} transition={{duration:0.6}} className="orvasc">Vehnicate AI for Roads</motion.span>
                </div>
              <motion.div className="orvacon" initial={{opacity:0,filter:"blur(10px)",translateX:"-100px"}} whileInView={{opacity:1,filter:"blur(0px)",translateX:0}} transition={{duration:0.5}}>
                
                <div className="cardorva" >
                  <span>
                    The social media app aims at manifesting an online network
                    for its users where they participate as representatives of
                    vehicles, setting us apart from other platforms Thus
                    personifying vehicles and letting users <span className="highlight">Be differently
                    Expressive</span> with their interaction over the online network!
                  </span>
                </div>
              </motion.div>
              </div>

              <div className="orva">
                <div className="orvaside">
                <motion.span initial={{scale:0.5,opacity:0,filter:"blur(10px)",translateY:"20%"}} whileInView={{scale:1,opacity:1,filter:"blur(0px)",translateY:"0%"}} transition={{duration:0.5}} className="orvash">ORVA</motion.span>
                <motion.span initial={{scale:0.5,opacity:0,filter:"blur(10px)",translateY:"20%"}} whileInView={{scale:1,opacity:1,filter:"blur(0px)",translateY:"0%"}} transition={{duration:0.5}} className="orvasc">On Road Version of Vehicate Air</motion.span>
              </div>
                <motion.div initial={{opacity:0,filter:"blur(10px)",translateX:"-100px"}} whileInView={{opacity:1,filter:"blur(0px)",translateX:0}} transition={{duration:0.5}} className="orvacon">
                  <div className="cardorva">
                    <h2>On-vehicle ecosystem</h2>
                    <br/>
                    <span>
                      We bring to you, the orva Vehicle display - <b>an outward
                      facing display mounted on the rear side of vehicles.</b>
                      <Image src="/vehcar.jpg" height={1000} width={1000} className="vehcarimg"/>
                      The screen is the <span className="highlight">face</span> to the vehicle's thoughts
                      with which it comments on the happenings on roads such as
                      annoying honking, expresses its thoughts and so much more!
                      The orva makes the vehicle a social being and lets users
                      yet again, <span className="highlight">Be differently expressive</span> without the fear of
                      being neglected and thus <span className="highlight">Influential!</span> This gifts
                      vehnicate with <span className="highlight">Physical Power!</span>
                    </span>
                  </div>
                  <div className="cardorva" initial={{opacity:0,scale:0,filter:"blur(10px)",translateX:"-200px"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateX:0}} transition={{duration:0.5}}>
                    <h2>On-infrastructure</h2>
                    <br/>
                    <span>
                      <span className="highlight">We market your business. Not just advertise</span><br />With ORVA,
                      physical store businesses can attractively present their
                      stories to potential customers
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
    </section>
  );
};
export default About;
