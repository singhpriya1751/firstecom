import React from "react";
import Navbar from "./Navbar";

function Banner() {
  return (
    <>
      <header>
        <Navbar />
        <div className="headerText">
          <div>
            <h1>Welcome</h1>
            <p>Enjoy online shopping</p>
          </div>
        </div>
      </header>
      <h4>
        Shopping is an activity in which a customer browses the available goods
        or services presented by one or more retailers with the potential intent
        to purchase a suitable selection of them. A typology of shopper types
        has been developed by scholars which identifies one group of shoppers as
        recreational shoppers, that is, those who enjoy shopping and view it as
        a leisure activity. Seasonal shopping consists of buying the appropriate
        clothing for the particular season. In winter people bundle up in warm
        layers and coats to keep warm, while in summer people wear less clothing
        to stay cooler in the heat. Seasonal shopping now revolves a lot around
        holiday sales and buying more for less. Stores need to get rid of all of
        their previous seasonal clothing to make room for the new trends of the
        upcoming season.Shoppers' shopping experiences may vary. They are based
        on a variety of factors including how the customer is treated,
        convenience, the type of goods being purchased, and mood.
      </h4>
    </>
  );
}

export default Banner;
