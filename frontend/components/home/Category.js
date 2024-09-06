import React from "react";
import "./style.css";
import Images from "next/image";
import Heading from "./Heading";

async function getCategoryData() {
  let data = await fetch("http://localhost:8000/api/v1/product/allcategory");
  let categories = await data.json();
  return categories;
}

const Category = async () => {
  let data = await getCategoryData();

  return (
    <div className="category-part">
      <Heading>Category</Heading>
      <div className="category-item">
        {data.map(
          (item) =>
            item.status === "approved" && (
              <div className="items" key={item._id}>
                <Images
                  src={`http://localhost:8000${item.image}`}
                  width={80}
                  height={80}
                  alt="icon"
                />
                <p>{item.name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Category;
