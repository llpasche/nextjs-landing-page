import { GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import generateDataSource from "../../constants/data";
import IProduct from "../../interfaces/IProduct";
import mainStyle from "./main.module.css";
import likeRender from "../../utils/likes/likeRender";
import handleLike from "../../utils/likes/handleLike";
import ProductCard from "../../components/product-card/ProductCard";

const Main: NextPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  let loadedProducts;
  if (typeof window !== "undefined") {
    loadedProducts = localStorage.getItem("likedProducts")
      ? JSON.parse(localStorage.getItem("likedProducts")!)
      : [];
  }

  const [likedProducts, setLikedProducts] = useState<IProduct[]>(
    loadedProducts || []
  );

  useEffect(() => {
    setProducts(generateDataSource());
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts, isLiked]);

  const productIds = likedProducts.map((product: IProduct) => {
    return product.id;
  });

  const convertedProducts = products?.map((product: IProduct) => {
    return (
      <ProductCard
        product={product}
        productIds={productIds}
        likeRender={likeRender}
        handleLike={handleLike}
        setIsLiked={setIsLiked}
        isLiked={isLiked}
        products={products}
        setLikedProducts={setLikedProducts}
        likedProducts={likedProducts}
        key={product.id}
      />
    );
  });

  return <div className={mainStyle.productGrid}>{convertedProducts}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 30,
  };
};

export default Main;
