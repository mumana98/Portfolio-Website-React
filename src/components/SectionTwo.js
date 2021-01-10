import React from 'react'

import arrow from '../css/arrow.png'

const SectionTwo = () => {

    let w = window.innerWidth
    let h = window.innerHeight

    return(
        <section id="screen2" class="shadow"
        data-bottom-top={w > 1100 ? "background-size: 75%" : "background-size: 300%"}
        data-top-bottom={w > 1100 ? "background-size: 150%" : "background-size: 400%"}
            >
                <h2>PROJECTS</h2>
                <div class="grid-container"
                data-bottom-top="transform:translateY(200px)"
                data-top-bottom="transform:translateY(-240px)"
                >
                    <section class="carousel" aria-label="Gallery">
                        <ol class="carousel__viewport">
                            <li id="carousel__slide1" class="carousel__slide">
                                <div class="container" id="project_1">
                                    <div class="card" class="shadow">
                                        <div class="front face" id="card1"></div>
                                        <div class="back face center">
                                            Todo List - 
                                            <br/>
                                            <a href="https://github.com/mumana98/Todo-List">View on GitHub</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="container" id="project_2">
                                    <div class="card" class="shadow">
                                        <div class="front face" id="card2"></div>
                                        <div class="back face center">
                                            Zombie Level Design - 
                                            <br/>
                                            <a href="https://crimzen.itch.io/">View on itch.io</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="container" id="project_3">
                                    <div class="card" class="shadow">
                                        <div class="front face" id="card3"></div>
                                        <div class="back face center">
                                            Zombie Level Design - 
                                            <br/>
                                            <a href="https://crimzen.itch.io/">View on itch.io</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#carousel__slide2" class="carousel__prev"><img id="left_arrow" src={arrow} alt=""/></a>
                                <a href="#carousel__slide2" class="carousel__next"><img id="right_arrow" src={arrow} alt=""/></a>
                            </li>
                            <li id="carousel__slide2" class="carousel__slide">
                                <a href="#carousel__slide1" class="carousel__prev"><img id="left_arrow" src={arrow} alt=""/></a>
                                <a href="#carousel__slide1" class="carousel__next"><img id="right_arrow" src={arrow} alt=""/></a>
                            </li>
                        </ol>
                    </section>
                </div>

        </section>
    )
}

export default SectionTwo