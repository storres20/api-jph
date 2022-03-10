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
    document.title = 'consumo de API'
    setEquipo(users); //datos dinamicos al ESTADO
  }

  return (
    <div>
      <h1>Consumo de API - Json PlaceHolder</h1>

      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>

          {
            equipo.map(item => (
              <tr key={item.id}>
                <th scope="row">{item.username} </th>
                <td>{item.name} </td>
                <td>{item.email} </td>
                <td>{item.phone} </td>
                <td>{item.website} </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Home