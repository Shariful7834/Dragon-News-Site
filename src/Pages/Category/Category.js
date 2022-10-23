import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../../Shared/NewsSummary/NewsSummary";

const Category = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <h2>This is category {categories.length}</h2>
      {
      categories.map((news) => (
        <NewsSummary key={news._id} news={news}></NewsSummary>
      ))}
    </div>
  );
};

export default Category;
