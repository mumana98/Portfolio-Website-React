import React from 'react'
import resume from '../css/Resume_V2.pdf'

const SectionThree = () => {

    let w = window.innerWidth

    return(
        <section id="screen3" class="shadow"
        data-bottom-top={w > 810 ? "background-size: 100%" : "background-size: 300%; background-position-x: -100px"}
        data-top-bottom={w > 810 ? "background-size: 150%" : "background-size: 400%; background-position-x: -100px"}
        >
            <h2>RESUME</h2>
            <a href={resume}>
                <embed id="resume" src={resume}
                    data-bottom-top="transform:translateY(450px)"
                    data-top-bottom="transform:translateY(-200px)"
                />
            </a>
        </section> 
    )
}

export default SectionThree