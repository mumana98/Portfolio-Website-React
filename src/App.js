import React from 'react'
import './css/styles.css'
import Cover from './components/Cover'
import SmallNav from './components/SmallNav'
import SectionBody from './components/SectionBody'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'

function App() {
  return (
    <div className="App">

      <head>
          <title>Matthew Umana</title>
          <meta name="viewport" content="width=device-width"/>
          <link href="./css/styles.css" rel="stylesheet"/>
      </head>

      <SmallNav />
      <SectionBody />
    </div>
  )
}

export default App
