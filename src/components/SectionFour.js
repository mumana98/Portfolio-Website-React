import React from 'react'
import selfPortrait from '../css/selfPortrait.png'

const SectionFour = () => {

    let w = window.innerWidth

    return(
        <section id="screen4" class="shadow"
        data-bottom-top={w > 1000 ? "background-size: 100%" : "background-size: 350%"}
        data-top-bottom={w > 1000 ? "background-size: 150%" : "background-size: 450%"}
            >
            <h2>ABOUT</h2>
            <div id="photo"
            data-bottom-top="transform:translateY(0px)"
            data-end="transform:translateY(100px)"
            ><img src={selfPortrait} alt=""/></div>

            <div id="infospace"
            data-bottom-top="transform:translateY(200px)"
            data-end="transform:translateY(50px)"
            >
                <p>
                    Since 7th grade, game development was my passion - mainly the programming portion. I loved creating game mechanics 
                    and I was the master of the worlds I created. Then, I attended the University of Texas at Austin with the hopes 
                    of getting into their Arts and Entertainment Technology major program because of its focus in game development. 
                    My first time applying to the major ended in rejection. However I did not let that stop me and I applied again 
                    the year after and I managed to get accepted during one of their most competitive years for selection at that 
                    point. However, as I took more classes on computer science fundamentals, computer programming, web design and 
                    interaction, and taking web development courses on Udemy my interests shifted to web/software development. With 
                    my prior knowledge of game programming, I realised that my skills could transfer to software development as well. 
                    Unfortunately I was unable to transfer into UT's Computer Science Program, but I won't let this stop me 
                    from pursuing web/software development as a career. Programming for games has been a blast and I will never stop 
                    doing it, but my main focus now is creating more practical applications that I can apply to real world problems 
                    and situations. Creating my own website has been one of the most enjoyable projects I have done - comparable to 
                    participating in the 2019 Diversity Hackathon. I do not regret making this transition to software development 
                    and I hope to learn more about it each day I pursue it.
                </p>
            </div>
        </section>
    )
}

export default SectionFour