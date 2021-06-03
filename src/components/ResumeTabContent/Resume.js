import React from 'react'
import resume from '../../css/Matthew_Umana_Resume.pdf'

const Resume = () => {
    return (
        <div id="resume-download">
            <p>Download my resume <a href={resume} style={{textDecoration:'underline'}} target="_blank">here</a></p>
        </div>
    )
}

export default Resume