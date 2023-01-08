import React, { useEffect, useState } from 'react'
import poza1 from '../assets/poza1.png'
import './styles/one.css'
import { Button } from 'react-bootstrap'

import BarChart from './components/BarChart'

import {UserData} from './Data.js'

const One = () => {
   
    const [userData, setUserData] = useState({
      labels:UserData.map((data) => data.years),
      datasets:[{
        label:"users gained",
        data:UserData.map((data)=>data.userGain),
        backgroundColor:["red","green"],
        borderColor:'black',
        borderWidth:2
      }],
    })


  return (
    <section>
        <h1>Modelo Matematico Para simulacion de piscinas de evaporacion solar</h1>
        <h1>Escoja Numero de piscinas</h1>  
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      <img src={poza1} alt="" />
      
      <Button>SIMULAR</Button>
  <div style={{width:600}}>

  <BarChart 
    chartData={userData}
    />
    </div>
      <canvas id="box--piscina" width="400" height="400">
       
     </canvas>
      <form action="">
        <div>
          <label htmlFor="number">Numero de Piscinas</label>
            <input type="number"  id='number' defaultValue={1} />
        </div>

      </form>
                    

    </section>
  )
}

export default One