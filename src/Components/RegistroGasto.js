import React, { useEffect, useState, Fragment } from 'react';


const ListGasto = () => {

  const [registros, setRegistros] = useState([]);

  const Registro = async () => {
    try {
      const response = await fetch('http://localhost:4000/registro');

      const jsonData = await response.json();
      setRegistros(jsonData);

    } catch (err) {
      console.error(err.message);
    }

  }

  useEffect(() => {
    Registro();

  }, [])
  console.log(registros);

  return (
    <Fragment>
      <div className="RegTable">
        <table >
          <tr>
            <th>Tipo de gasto</th>
            <th>Valor</th>
            <th>Descripcion</th>
            <th>Moneda</th>
            <th>Fecha</th>
          </tr>

          {registros.map(showReg => (
            <tr>
              <td>
                {showReg.tipog}
              </td>
              <td>
                {showReg.valor}
              </td>
              <td>
                {showReg.infog}
              </td>
              <td>
                {showReg.tipom}
              </td>
              <td>
                {showReg.fechagasto}
              </td>
            </tr>
          ))}

        </table>
      </div>

    </Fragment >
  )
}

export default ListGasto;

