import { IHandleLikeArgs } from "../../interfaces/IHandleLikeArgs";
import IProduct from "../../interfaces/IProduct";

const handleLike = ({
  id,
  setIsLiked,
  isLiked,
  products,
  productIds,
  setLikedProducts,
  likedProducts,
}: IHandleLikeArgs): void => {
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

export default handleLike;
