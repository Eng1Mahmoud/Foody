import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeadSection from "./HeadSection";
import { FaEye, FaShoppingBag } from "react-icons/fa"; // import icon FaEye

import productsData from "../Products.json";// import all product

function Product() {
  let navigat = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const applyFilter = (category) => { // filter function 
    if (category === "All") {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    applyFilter(selectedCategory);
  }, [selectedCategory]);
  return (
    <div className="Product py-5">
      <div className="container py-5">
        <div className="row ">
          {/* start list buttons*/}
          <div className="col-md-6 col-sm-12 ">
            <HeadSection
              head="Our Products"
              p="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
            />
          </div>
          <div className="list col-md-6 col-sm-12  py-4  text-md-end text-sm-center d-flex justify-content-start justify-content-md-end ">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) => {
                const selectedValue = event.target.value;
                setSelectedCategory(selectedValue);
              }}
              value={selectedCategory}
            >
              <option value="All">All</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
            </select>
          </div>
        </div>
        {/* start product item*/}
        <div className="row g-4 py-5">
          {
            // loop for item
            filteredProducts.map((product, index) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-2 col-sm-6"
                  key={index}
                >
                  <div className="item">
                    <div className="img">
                      <img
                        className="img-fluid"
                        src={product.image}
                        alt={`item${product.id}`}
                        loading=" lazy"
                      ></img>
                      <span>New</span>
                    </div>
                    <div className="content text-center py-3">
                      <strong>{product.name}</strong>
                      <p className="description">{product.description}</p>
                      <p>
                        <span className="price">
                          $
                          {(
                            product.price -
                            product.price * (product.descount / 100)
                          ).toFixed(2)}
                        </span>

                        <span className="prevPrice"> ${product.price} </span>
                      </p>
                    </div>

                    <div className="add ">
                      <a className=" text-center py-2 pe-2 detail " href="#kj">
                        <FaEye className="px-2 fa" />
                        View detail
                      </a>
                      <a className="text-center  py-2 " href="#kln">
                        <FaShoppingBag className="px-2 fa" />
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>

        <div className="button">
          <button
            className="btns btnProduct"
            onClick={() => {
              navigat("/productspage");
            }}
          >
            Browse More Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
