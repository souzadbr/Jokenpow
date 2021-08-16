import React from 'react'
import papel from '../img/hand.png'
import tesoura from '../img/peace-symbol.png'
import pedra from '../img/protest.png'


function Jogo() {
  return (
    <div>
   <img src={papel} alt = "papel" />
   <img src={tesoura} alt = "tesoura" />
   <img src={pedra} alt = "pedra" />
   </div>
  )
}
export default Jogo