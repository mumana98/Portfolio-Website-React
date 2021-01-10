import React, { useState, useEffect } from 'react'
import { Spring, Parallax, ParallaxLayer } from 'react-spring/renderprops'

import githubImg from '../css/icons8-github-100.png'
import linkedinImg from '../css/icons8-linkedin-circled-100.png'
import facebookImg from '../css/icons8-facebook-100.png'

const SectionOne = () => {

    let w = window.innerWidth

    return(

        <section id="screen1" class="shadow" 
        data-bottom-top={w < 1100 ? "background-size: 300%" : "background-size: 75%"} 
        data-top-bottom={w < 1100 ? "background-size: 400%" : "background-size: 150%"}

        >
            <nav id="tabs">
                <a href="#screen2" class="tab">PROJECTS</a> 
                <a href="#screen3" class="tab">RESUME</a>
                <a href="#screen4" class="tab">ABOUT</a>
            </nav>
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
                        <div id="imgspace" style={props}>
                            <a href="https://github.com/mumana98"><img src={githubImg} /></a>
                            <a href="https://www.linkedin.com/in/matthew-umana"><img src={linkedinImg}/></a>
                            <a href="https://www.facebook.com/"><img src={facebookImg} /></a>
                        </div>
                    </div>
                }
            </Spring>
            <div class="fixed-imgspace"
            data-center-center="opacity: 0; pointer-events: none"
            data-top-bottom="opacity: 1; pointer-events: auto"    
            >
                <ul>
                    <li><a href="https://github.com/mumana98"><img src={githubImg} /></a></li>
                    <li><a href="https://www.linkedin.com/in/matthew-umana"><img src={linkedinImg}/></a></li>
                    <li><a href="https://www.facebook.com/"><img src={facebookImg} /></a></li>
                </ul>
            </div>
        </section> 
    )
}

export default SectionOne