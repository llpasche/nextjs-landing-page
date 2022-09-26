import { Dispatch, SetStateAction } from "react";
import IProduct from "./IProduct";

export interface IHandleLikeArgs {
  id: number;
  setIsLiked: Dispatch<SetStateAction<boolean>>;
  isLiked: boolean;
  products: IProduct[];
  productIds: number[];
  setLikedProducts: Dispatch<SetStateAction<IProduct[]>>;
  likedProducts: IProduct[];
}
