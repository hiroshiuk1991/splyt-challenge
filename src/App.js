import React, { useEffect, useState } from 'react'
import MapContainer from './components/MapContainer'
import Title from './components/Title'
import SliderContainer from './components/SliderContainer'
import './App.css'
import axios from 'axios'

const App = () => {
  const [driverNum, setDriverNum] = useState(5)
  const [driverdata, setDriverData] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375,&longitude=-0.0964509&count='${driverNum}`
      )
      .then(res => {
        setDriverData(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [driverdata])


 function changeSliderNum (event) {
    setDriverNum( event.target.defaultValue )
  }


  return (
    <div>
      <Title />
      <SliderContainer driverNum={driverNum} changeSliderNum={changeSliderNum} />
      <MapContainer driverdata={driverdata}/>
    </div>
  )
}

export default App
