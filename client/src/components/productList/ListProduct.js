import React, { Fragment } from 'react';

const ListProduct = ({ product }) => {
  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Ravintosisältö</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>EAN/GTIN -koodi</b></td>
            <td>{product[0].code}</td>
          </tr>
          <tr>
            <td><b>Nimi</b></td>
            <td>{product[0].name}</td>
          </tr>
          <tr>
            <td><b>Paino</b></td>
            <td>{product[0].weight}</td>
          </tr>
          <tr>
            <td><b>Kcal</b></td>
            <td>{product[0].kcal}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListProduct;
