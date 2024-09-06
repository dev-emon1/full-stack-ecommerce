import React from "react";
import ViewAllLink from "./ViewAllLink";
import Heading from "./Heading";
import Images from "next/image";
import { collection } from "@/data/homeData";

const BestCollection = () => {
  return (
    <div className="collection-part">
      <div className="coll-item">
        <div className="item-1">
          <h3>Best Collection</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <a href="#">
            <button>Shop Now</button>
          </a>
        </div>
        <div className="item-head">
          <ViewAllLink>
            <Heading>Featured Products</Heading>
            <p className="coll-text">View All</p>
          </ViewAllLink>
          <div className="item-2">
            {collection.map((item, i) => (
              <div className="item-details" key={i}>
                <div className="item-img-tag">
                  <Images
                    src={item.img}
                    width={376}
                    height={333}
                    alt="collection-img"
                  />
                  <div className="sold-tag">
                    <p>{item.tagnew}</p>
                    <p className="coll-discount">{item.tagoff}</p>
                  </div>
                  {/* <span className='coll-discount2'>{item.tagout}</span> */}
                </div>
                <div className="flash-sec-text">
                  <h3>{item.headname}</h3>
                  <span className="ban-num">{item.banname}</span>
                  <span className="current-num">{item.curname}</span>
                </div>
                <div className="add-cart">
                  <a href="/pages/cart">
                    <button>Add to cart</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCollection;
