// libs
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { useGetAllCategory } from "../../../hooks/useGetCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, isLoading] = useGetAllCategory();

  if (isLoading) return <Skeleton />;

  return (
    <div className="container">
      <div className="row w-100">
        {categories?.map((category, index) => {
          return (
            <div className="col-2" key={index}>
              <Link to={`/categories/${category.slug}`}>
                <figure className="d-flex justify-content-center align-items-center flex-column w-100 category-logo">
                  <img
                    src={category.icon}
                    alt={category.slug}
                    style={{ width: "80%" }}
                  />
                </figure>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
