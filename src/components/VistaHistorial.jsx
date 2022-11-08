import React from 'react';

function vistaHistorial() {
  return (
    <div className='containerTabla'>
      <div className='tabla'>
        <table>
          <tr>
            <th>PEDIDO</th>
            <th>IMPORTE</th>
            <th>ENTREGADO</th>
            <th>FECHA</th>
            <th>HORARIO</th>
          </tr>
          <tr>
            <td>1</td>
            <td>$150.57</td>
            <td>si</td>
            <td>21/10/22</td>
            <td>20:35 hs</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$390.20</td>
            <td>no</td>
            <td>21/10/22</td>
            <td>20:35 hs</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$1000.00</td>
            <td>si</td>
            <td>21/10/22</td>
            <td>20:35 hs</td>
          </tr>
          <tr>
            <td>4</td>
            <td>$95.10</td>
            <td>si</td>
            <td>10/10/22</td>
            <td>20:35 hs</td>
          </tr>
          <tr>
            <td>5</td>
            <td>$700.99</td>
            <td>si</td>
            <td>18/10/22</td>
            <td>20:35 hs</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default vistaHistorial;
