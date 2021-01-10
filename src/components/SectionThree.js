import React from 'react'

import resume from '../css/Resume_V2.pdf'

const SectionThree = () => {
    return(
        <section id="screen3" class="shadow"
        data-bottom-top="background-size: 100%"
        data-top-bottom="background-size: 150%"
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