import React from "react";
import Filter from "../components/Collection/Filter";
import ShowCollectionProduct from "../components/Collection/ShowCollectionProduct";
import "./CollectionPage.css";
const CollectionPage = () => {
  return (
    <div className="containerOfCollection">
      <Filter />
      <ShowCollectionProduct />
    </div>
  );
};

export default CollectionPage;
