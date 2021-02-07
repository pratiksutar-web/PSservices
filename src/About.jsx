import React from 'react'
import Common from './Common'
import Img from '../src/Images/About.png'

const About = ()=>{
    return(

        <>
    
        <Common
            name = "Know more about us Here"
            imgsrc={Img}
            visit = "/contact"
            btname="Contact US"
        />

        </>
    )
}


export default About;