import React from "react";
import Filter from "../components/Collection/Filter";
import ShowCollectionProduct from "../components/Collection/ShowCollectionProduct";
import "./CollectionPage.css";
const CollectionPage = ({ isDiscountPage }) => {
  return (
    <div className="containerOfCollection">
      {isDiscountPage && <h1 className="discountHeading">Discount Products</h1>}

      <div className="collection-content">
        <Filter />
        <ShowCollectionProduct
          key={isDiscountPage ? "sale" : "collection"}
          isDiscount={isDiscountPage}
        />
      </div>
    </div>
  );
};

export default CollectionPage;
