
import Image from 'next/image'
import Link from 'next/link';
import {motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import Spline from '@splinetool/react-spline/next';
import Car from './Car';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import Greet from './Greet';

const Home = () => {
  return (
    <section id="home">
      <div className="homecon">
        <Greet />
        <span className='homeconh'>Welcome to <span className='homeconhl'>vehnicate</span></span>
        <div className="homecontent">
          <TypeAnimation
      sequence={[
        'Ecosystem for Vehicles',
        1500,
        'Ecosystem of Vehicles',
        1500,
        'Ecosystem by Vehicles',
        1500
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: '1.5rem', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>
        <div className="homebtns">
        <Link href="#" className="homeconbtn">Download hnAir</Link>
        </div>
      </div>
      <div className="homegrad"></div>
    </section>
  )
}

export default Home