import React from 'react'

const Education = () => {
    return (
        <div>
            <h3>Education</h3>
            <div style={{fontSize:'14px'}}>
                <p>University of Texas at Austin</p>
                <p>Major: Bachelors of Science Entertainment Technology (GPA: 3.8)</p>
                <p>Certificate: Elements of Computing (Computer Science)</p>
                <p>Relevent Courses:</p>
                <br/>
                <div id="classes" style={{fontSize:'15px'}}>
                    <div id="column_one" style={{display:"inline-block",margin:"5px"}}>
                        <p>CS 303E Elements of Computers/Programming</p>
                        <p>CS 313E Elements of Software Design</p>
                        <p>CS 329E Elements of Data Analytics</p>
                        <p>CS 329E Elements of Elements of Web Programming</p>
                        <p>CS 330E Software Engineering I</p>
                        <p>CS 331E Software Engineering II</p>
                        <p>CS 354S Game Development Capstone: 2D Games</p>
                        <p>CS 354T Game Development Capston: 3D Games</p>
                        <p>AET 335K VR for Games</p>
                    </div>
                    <div id="column_two" style={{display:"inline-block",margin:"5px"}}>
                        <p>AET 310 Foundations of Creative Coding</p>
                        <p>AET 324K Web Design and Interaction</p>
                        <p>AET 346 Game Scripting and Modding</p>
                        <p>AET 339 Generative Audio Programming</p>
                        <p>AET 334L UI/UX for Games</p>
                        <p>AET 334K Game Prototyping</p>
                        <p>ITD 105 Intro to Computer Science Principles</p>
                        <p>MIS Foundations of Information Technology Management</p>
                        <p>LIN 313 Language and Computers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education