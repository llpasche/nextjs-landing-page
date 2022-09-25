import IProduct from "./interfaces/IProduct";

const generateDataSource = (): IProduct[] => {
  const source: IProduct[] = [];
  let imageId = 198;

  for (let productCounter = 1; productCounter <= 6; productCounter++) {
    source.push({
      id: productCounter,
      name: `Product #${productCounter}`,
      imageURL: `https://picsum.photos/id/${imageId}/200/300`,
      listPrice: productCounter * 5,
      salePrice: productCounter * 10,
    });
    imageId++;
  }

  return source;
};

export default generateDataSource;
