import React from "react";
import Images from "next/image";
import ViewAllLink from "./ViewAllLink";
import { topRateProduct } from "@/data/homeData";
import Heading from "./Heading";

const TopRatedProducts = () => {
  return (
    <div className="top-product">
      <ViewAllLink>
        <Heading>Top Rated Product</Heading>
        <p className="prdct-view">View All</p>
      </ViewAllLink>
      <div className="all-prdct">
        {topRateProduct.map((item, i) => (
          <div className="prdct-item" key={i}>
            <Images
              src={item.img}
              width={313}
              height={313}
              style={{ borderRadius: "15px" }}
              alt="product-img"
            />
            <div className="product-text">
              <h4>{item.headname}</h4>
              <p>{item.money}</p>
              <div className="star-sold">
                <Images src={item.img2} width={15} height={15} alt="star" />
                <span>{item.sold}</span>
              </div>
              <div className="btn">
                <a href="/cart">
                  <button>Add to Cart</button>
                </a>
                <Images
                  src="/love.png"
                  width={24}
                  height={24}
                  style={{ marginLeft: "30px" }}
                  alt="love"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
