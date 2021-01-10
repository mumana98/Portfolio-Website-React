import React from 'react'

const SmallNav = () => {
    return(
/*         <ul>
            <li data-screen="#screen1" class="active"></li>
            <li data-screen="#screen2"></li>
            <li data-screen="#screen3"></li>
            <li data-screen="#screen4"></li>
        </ul> */
        <div class="fixed-imgspace"
        data-bottom-top="opacity: 0; pointer-events: none"
        data-top-top="opacity: 1; pointer-events: auto"    
        >
            <nav >
                <ul class="small-nav">
                    <li><a href="#screen2" class="tab">PROJECTS</a></li>
                    <li><a href="#screen3" class="tab">RESUME</a></li>
                    <li><a href="#screen4" class="tab">ABOUT</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SmallNav