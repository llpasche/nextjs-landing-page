import { Dispatch, SetStateAction } from "react";
import { IHandleLikeArgs } from "./IHandleLikeArgs";
import { ILikeRenderArgs } from "./ILikeRenderArgs";
import IProduct from "./IProduct";

export interface ICardProps {
  product: IProduct;
  productIds: number[];
  likeRender: ({ id, productIds }: ILikeRenderArgs) => boolean;
  handleLike: ({
    id,
    setIsLiked,
    isLiked,
    products,
    productIds,
    setLikedProducts,
    likedProducts,
  }: IHandleLikeArgs) => void;
  setIsLiked: Dispatch<SetStateAction<boolean>>;
  isLiked: boolean;
  products: IProduct[];
  setLikedProducts: Dispatch<SetStateAction<IProduct[]>>;
  likedProducts: IProduct[];
}
