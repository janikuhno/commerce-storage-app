import React, { Fragment, useState, useEffect } from 'react';
import Navigation from '../Navigation';

/*
-link from product code to find product and populate it's state product with that product
*/

const ListAllProduct = ({ setAuth }) => {
  const [allProducts, setAllProducts] = useState([]);

  const getAll = async () => {
    try {
      const response = await fetch('/allproducts/products', {
        method: 'GET',
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await response.json();

      setAllProducts(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Fragment>
      <Navigation setAuth={setAuth} />
      <table className="table mt-5">
        <thead>
          <tr>
            <th>EAN/GTIN -code</th>
            <th>Name</th>
            <th>Image path</th>
            <th>Weight</th>
            <th>Kcal</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.length !== 0 &&
            allProducts[0].code !== null &&
            allProducts.map((p) => (
              <tr key={p.code}>
                <td>{p.code}</td>
                <td>{p.name}</td>
                <td>{p.image_path}</td>
                <td>{p.weight}</td>
                <td>{p.kcal}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListAllProduct;
