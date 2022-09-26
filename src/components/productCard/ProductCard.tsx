import cardStyle from "./productCard.module.css";
import favstarWhite from "../../assets/images/favstar-white.svg";
import favstarBlack from "../../assets/images/favstar-black.svg";
import Image from "next/image";
import { ICardProps } from "../../interfaces/ICardProps";

const ProductCard = ({
  product,
  productIds,
  likeRender,
  handleLike,
  setIsLiked,
  isLiked,
  products,
  setLikedProducts,
  likedProducts,
}: ICardProps) => {
  const likeRenderInput = {
    id: product.id,
    productIds: productIds,
  };

  const handleLikeInput = {
    id: product.id,
    productIds: productIds,
    setIsLiked: setIsLiked,
    isLiked: isLiked,
    products: products,
    setLikedProducts: setLikedProducts,
    likedProducts: likedProducts,
  };

  return (
    <div className={cardStyle.productCard} key={product.id}>
      <header className={cardStyle.cardHeader}>
        <h3>{product.name}</h3>
        <small>ID: {product.id}</small>
      </header>
      <Image
        src={product.imageURL}
        width="220vw"
        height="220vh"
        alt="Random image from 'Lorem Picsum'. It's a landscape, an unknown person, a cute pet, things like this."
      />
      <footer className={cardStyle.cardFooter}>
        <h2>${product.salePrice}</h2>
        <Image
          className={cardStyle.favButton}
          src={likeRender(likeRenderInput) ? favstarBlack : favstarWhite}
          width="20px"
          height="20px"
          alt="fav icon"
          onClick={() => handleLike(handleLikeInput)}
        />
      </footer>
    </div>
  );
};

export default ProductCard;
