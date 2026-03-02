import React from "react";
import ProductList from "./ProductList";

const ProdctsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) => {
  const { search } = await searchParams;
  const query = search || "";
  return (
    <div>
      <h1>Products Page</h1>
      <ProductList searchParams={{ search: query }} />
    </div>
  );
};

export default ProdctsPage;
