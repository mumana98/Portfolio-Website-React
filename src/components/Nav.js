import React from 'react'
import Headroom from 'react-headroom'
import SmallNav from './SmallNav'

const Nav = () => {

    let w = window.innerWidth

    return (
        <div>
            {w < 1136 ? 
                <Headroom style={{border: '2px solid #5DE6FF', maxWidth:'inherit'}}>
                    <nav id="tabs">
                        <a href="#screen2" class="tab">PROJECTS</a> 
                        <a href="#screen3" class="tab">RESUME</a>
                        <a href="#screen4" class="tab">ABOUT</a>
                        <SmallNav />
                    </nav>
                </Headroom>
            :
                <nav id="tabs">
                    <a href="#screen2" class="tab">PROJECTS</a> 
                    <a href="#screen3" class="tab">RESUME</a>
                    <a href="#screen4" class="tab">ABOUT</a>
                    <SmallNav />
                </nav>
            }
        </div>
    )
}

export default Nav