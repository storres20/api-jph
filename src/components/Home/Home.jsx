import React, { useEffect, useState } from 'react'

const Home = () => {

  //datos estaticos
  /* const datos = [
    {id:1, nombre:'Reactjs'},
    {id:2, nombre:'Vuejs'},
    {id:3, nombre:'Angularjs'}
  ] */


  const [equipo, setEquipo] = useState([])


  //para pasar DATOS al ESTADO
  useEffect(() => {
    //console.log('useEffect');
    //setEquipo(datos); //datos estaticos al ESTADO
    obtenerDatos(); //datos dinamicos desde la API
  }, [])

  //llamado a la API - trae datos dinamicos
  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    //console.log(users);
    setEquipo(users); //datos dinamicos al ESTADO
  }

  return (
    <div>
      <h1>Home</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home