import React, {useState, useEffect} from 'react'
import { Spring } from 'react-spring/renderprops'
import githubImg from '../css/icons8-github-100.png'
import linkedinImg from '../css/icons8-linkedin-circled-100.png'
import facebookImg from '../css/icons8-facebook-100.png'
import Links from './Links'
import Nav from './Nav'

const SectionOne = () => {

    let w = window.innerWidth

    return(
        <section id="screen1" class="shadow" 
        data-bottom-top={w > 810 ? "background-size: 100%" : "background-size: 300%; background-position-x: -100px"}
        data-top-bottom={w > 810 ? "background-size: 150%" : "background-size: 400%"}
        >
            <Nav />
            <Spring
                from={{
                    opacity:0, 
                    marginTop: 150,
                    wordSpacing: 75,
                    letterSpacing: 75,
                }}
                to={{
                    opacity:1, 
                    marginTop: 0,
                    wordSpacing: 25,
                    letterSpacing: 20,
                }}
                config={{
                    duration: 750
                }}
            >
                {props => 
                    <div id="namespace" style={props}
                    data-bottom-top="transform:translateY(50px)"
                    data-top-bottom="transform:translateY(-300px)"
                    >
                        <a style={props}>MATTHEW UMANA</a>
                        <Links style={props}/>
                    </div>
                }
            </Spring>
            <div class="fixed-imgspace"
            data-center-top="transform:translateX(-100px); pointer-events: none; opacity: 0"
            data-top-bottom="transform:translateX(0px); pointer-events: auto; opacity: 1"    
            >
                <ul>
                    <li><a href="https://github.com/mumana98"><img src={githubImg} /></a></li>
                    <li><a href="https://www.linkedin.com/in/matthew-umana"><img src={linkedinImg}/></a></li>
                    <li><a href="https://www.facebook.com/"><img src={facebookImg} /></a></li>
                </ul>
            </div>
            <nav id="side-nav"
            data-center-top="transform:translateX(120px); pointer-events: none; opacity: 0"
            data-top-bottom="transform:translateX(0px); pointer-events: auto; opacity: 1" 
            >
                <a href="#screen2" class="tab">PROJECTS</a> 
                <a href="#screen3" class="tab">RESUME</a>
                <a href="#screen4" class="tab">ABOUT</a>
            </nav>
        </section> 
    )
}

export default SectionOne