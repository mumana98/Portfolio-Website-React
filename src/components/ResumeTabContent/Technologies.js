import React from 'react'

const Technologies = () => {
    return (
        <div>
            <h3>Technical Skills</h3>
            <div style={{fontSize:'14px'}}>
                <div id="column_one" style={{display:"inline-block", margin:"10px"}}>
                    <h4>Languages:</h4>
                    <p>Python, Javascript, HTML, CSS, C# </p>
                    <br/>
                    <h4>Frameworks/Libraries:</h4>
                    <p>React, Flask, Node.js, Bootstrap, Express, JQuery</p>
                    <br/>
                    <h4>Editors:</h4>
                    <p>Visual Studio code, Visual Studio, Sublime Text, Brackets, Unity</p>
                    <br/>
                </div>
                <div id="column_two" style={{display:"inline-block", margin:"10px"}}>
                    <h4>Version Control:</h4>
                    <p>Git, SVN</p>
                    <br/>
                    <h4>Cloud:</h4>
                    <p>Google Cloud Platform</p>
                    <br/>
                    <h4>Design Tools:</h4>
                    <p>Invision Studio, Photoshop, </p>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Technologies