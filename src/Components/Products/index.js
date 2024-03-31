import { useSelector } from "react-redux";
import "./_product.scss";
import productSlice from "../../Redux/slices/productSlice";

const Products = () => {
  const productData = useSelector(productSlice.getInitialState);
  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img src={require("../../assets/" + product.img)}></img>
            </div>
            <div>
              <h5 className="product-details">
                <a href="#">{product.pName}</a>
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
