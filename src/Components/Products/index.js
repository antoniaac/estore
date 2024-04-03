import { useDispatch, useSelector } from "react-redux";
import "./_product.scss";
import productSlice from "../../Redux/slices/store";
import { useEffect } from "react";
import { getProducts } from "../../Redux/slices/Products/productAction";

const Products = () => {
  const productData = useSelector((state) => state.pr.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });
  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img src={require("../../assets/" + product.product_img)}></img>
            </div>
            <div>
              <h5 className="product-details">
                <a href="#">{product.product_name}</a>
                <p> ${product.price}</p>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
