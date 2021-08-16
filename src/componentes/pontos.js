import React from 'react'
import jogador from '../img/girl.png'
import robo from '../img/robo.png'



function Pontos() {
  return (
    <div >
    <table className = "tabelapontos">
      <tr> 
        <td>
          Você
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          Robô
        </td>
      </tr>
      <tr>
        <td>
          0
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          0
        </td>
      </tr> 
      <tr>
        <td>

        </td>
        <td>

        </td>
      </tr>
      </table>
      <table className = "tabela">
      <tr>
        <td>
        <img src={jogador} alt = "jogador" />
        </td>
        <td>
        <img src={robo} alt = "robo" />
        </td>
      </tr>
    </table>
   </div>
  
  )
}
export default Pontos