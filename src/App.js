import React, { useEffect, useState } from 'react'
import './css/styles.css'
import SectionBody from './components/SectionBody'
import LoadScreen from './components/Cover'

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
    { loading === false ? 
    <div className="App">

      <head>
          <title>Matthew Umana</title>
          <meta name="viewport" content="width=device-width"/>
          <link href="./css/styles.css" rel="stylesheet"/>
      </head>
      <SectionBody />
    </div> 
    :
    <LoadScreen />
    }
    </>
  )
}

export default App
