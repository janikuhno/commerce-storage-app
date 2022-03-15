import React, { Fragment, useState, useEffect } from 'react';

//components
import Navigation from '../Navigation';

const ListAllProduct = ({ setAuth }) => {
  const [allProducts, setAllProducts] = useState([]);

  const getAll = async () => {
    try {
      const response = await fetch('/allproducts/products', {
        method: 'GET',
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await response.json();

      return parseRes;
    } catch (err) {
      console.error(err.message);
    }
  };

  // delete a product
  const deleteProduct = async (code) => {
    try {
      await fetch(`/dashboard/products/${code}`, {
        method: 'DELETE',
        headers: { jwt_token: localStorage.token },
      });

      setAllProducts(allProducts.filter((product) => product.code !== code));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    let isMounted = true;
    getAll().then((data) => {
      if (isMounted) setAllProducts(data);
    });
    return () => {
      isMounted = false;
    };
  }, [allProducts]);

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
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(p.code)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListAllProduct;
