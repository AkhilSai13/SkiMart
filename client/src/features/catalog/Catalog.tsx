import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5295/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProducts = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 100,
        name: "product" + (prevState.length + 1),
        price: (prevState.length + 1) * 100.0,
        brand: "brand",
        description: "description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  };

  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProducts}>
        Add Products
      </Button>
    </>
  );
};

export default Catalog;
