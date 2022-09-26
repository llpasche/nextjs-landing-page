import { ILikeRenderArgs } from "../../interfaces/ILikeRenderArgs";

const likeRender = ({ id, productIds }: ILikeRenderArgs): boolean => {
  if (productIds.includes(id)) {
    return true;
  }
  return false;
};

export default likeRender;
