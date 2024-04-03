import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/slices/category/actions";
import "./_cat-nav.scss";

const CatNav = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  console.log(categories);

  return (
    <>
      <div className="cat-nav-container container">
        <ul>
          {categories.map((category) => {
            if (category.parent_category_id === null) {
              return (
                <li className="list-items">
                  {" "}
                  <a href="#"> {category.category} </a>{" "}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default CatNav;
