import React from 'react'

import githubImg from '../css/icons8-github-100.png'
import linkedinImg from '../css/icons8-linkedin-circled-100.png'
import facebookImg from '../css/icons8-facebook-100.png'

const Links = () => {
    return (
        <div id="imgspace">
            <a href="https://github.com/mumana98"><img src={githubImg} /></a>
            <a href="https://www.linkedin.com/in/matthew-umana"><img src={linkedinImg}/></a>
            <a href="https://www.facebook.com/"><img src={facebookImg} /></a>
        </div>
    )
}

export default Links