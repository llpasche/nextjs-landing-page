import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import generateDataSource from "../../data";
import IProduct from "../../interfaces/IProduct";
import mainStyle from "./main.module.css";
import favstarWhite from "../../assets/images/favstar-white.svg";
import favstarBlack from "../../assets/images/favstar-black.svg";

const Main: NextPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLiked, setIsLiked] = useState<Boolean>(false);

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

  const handleLike = (id: number): void => {
    setIsLiked(!isLiked);

    const [productToHandle] = products.filter((product: IProduct) => {
      return product.id === id;
    });

    if (productIds.includes(id)) {
      const index = productIds.indexOf(id);

      likedProducts.splice(index, 1);
    } else {
      setLikedProducts([...likedProducts, productToHandle]);
    }
  };

  const likeRender = (id: number): boolean => {
    if (productIds.includes(id)) {
      return true;
    }
    return false;
  };

  const convertedProducts = products?.map((product: IProduct) => {
    return (
      <div className={mainStyle.productCard} key={product.id}>
        <header className={mainStyle.cardHeader}>
          <h3>{product.name}</h3>
          <small>ID: {product.id}</small>
        </header>
        <Image
          src={product.imageURL}
          width="220vw"
          height="220vh"
          alt="random product"
        />
        <footer className={mainStyle.cardFooter}>
          <h2>${product.salePrice}</h2>
          <Image
            className={mainStyle.favButton}
            src={likeRender(product.id) ? favstarBlack : favstarWhite}
            width="20px"
            height="20px"
            alt="fav icon"
            onClick={() => handleLike(product.id)}
          />
        </footer>
      </div>
    );
  });

  return <div className={mainStyle.productGrid}>{convertedProducts}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 30
  }
}

export default Main;
