import React from 'react'
import { NavLink } from 'react-router-dom';
import Img from '../src/Images/Home.png'
import Common from './Common'

const Home = ()=>{
    return(

        <>
            <Common
                name = "Grow your business with"
                imgsrc={Img}
                visit = "/services"
                btname="Get Started"
            />
        </>

        
    )
}


export default Home;