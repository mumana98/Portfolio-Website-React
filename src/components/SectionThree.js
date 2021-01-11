import React from 'react'

import resume from '../css/Resume_V2.pdf'

const SectionThree = () => {

    let w = window.innerWidth
    let h = window.innerHeight

    return(
        <section id="screen3" class="shadow"
        data-bottom-top={w > 1100 ? "background-size: 75%" : "background-position-x: 0px"}
        data-top-bottom={w > 1100 ? "background-size: 150%" : "background-position-x: -300px"}
        >
            <h2>RESUME</h2>
            <embed id="resume" src={resume}
                data-bottom-top="transform:translateY(450px)"
                data-top-bottom="transform:translateY(-200px)"
            />
        </section> 
    )
}

export default SectionThree