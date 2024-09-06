import React from "react";
import "./style.css";
import Images from "next/image";
import { newArrivals } from "@/data/homeData";
import Heading from "./Heading";
import ViewAllLink from "./ViewAllLink";

const NewArrivals = () => {
  return (
    <div className="arrivals-part">
      <ViewAllLink>
        <Heading>New Arrivals</Heading>
        <p className="view-text">View All</p>
      </ViewAllLink>
      <div className="arrivals-items">
        {newArrivals.map((item, i) => (
          <div className="items-list" key={i}>
            <div className="items-img">
              <Images
                src={item.img}
                width={230}
                height={290}
                alt="newArrivals"
              />
              <div className="item-tag">
                <p>{item.tag}</p>
              </div>
            </div>
            <div className="item-text">
              <h4>{item.deviceName}</h4>
              <h3>{item.rate}</h3>
              <div className="rating">
                <Images src={item.star} width={20} height={20} alt="star" />
                <p>{item.sold}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
