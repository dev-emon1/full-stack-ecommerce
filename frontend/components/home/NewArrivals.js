import React from "react";
import "./style.css";
import Images from "next/image";
import { newArrivals } from "@/data/homeData";
import Heading from "./Heading";
import ViewAllLink from "./ViewAllLink";

async function getCategoryData() {
  let data = await fetch("http://localhost:8000/api/v1/product/allproduct");
  let categories = await data.json();
  return categories;
}

const NewArrivals = async () => {
  let data = await getCategoryData();
  console.log(data);

  return (
    <div className="arrivals-part">
      <ViewAllLink>
        <Heading>New Arrivals</Heading>
        <p className="view-text">View All</p>
      </ViewAllLink>
      <div className="arrivals-items">
        {data.map((item, i) => (
          <div className="items-list" key={i}>
            <div className="items-img">
              <Images
                src={`http://localhost:8000${item.image[0]}`}
                width={230}
                height={290}
                alt="newArrivals"
              />
              <div className="item-tag">
                <p>{item.productType}</p>
              </div>
            </div>
            <div className="item-text">
              <h4>{item.name}</h4>
              <h3>rate</h3>
              {/* <div className="rating">
                <Images src={item.star} width={20} height={20} alt="star" />
                <p>{item.sold}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
