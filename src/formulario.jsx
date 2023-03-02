
import {fragment} from 'react'

export default function Formulario(){
  
  
  
  return(
    <div className="form">
      <h1>Formulario</h1>
      <form action="">
          <input type="text"/>
          <br/>
          <label for="cars">Marcas:</label>
          <br/>
          <select name="cars" id="cars" form="carform">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
      </form>
    </div>

  )
}