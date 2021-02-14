import React from 'react'
import resume from '../../css/Resume_V2.pdf'

const Resume = () => {
    return (
        <div>
            <p>Download my resume <a href={resume} style={{textDecoration:'underline'}}>here</a></p>
        </div>
    )
}

export default Resume