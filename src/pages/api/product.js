import { products } from "../data/products";

export function getProducts() {
  return products;
}

export function getProduct(type, id) {
  const product = products.find(
    (product) => product.type === type && product.id === id
  );
  return [product];
}

export function getCategoryProducts(type) {
  const filteredProducts = products.filter((product) => product.type === type);
  return filteredProducts;
}

export function getAllCategories() {
  const types = products.map((product) => product.type);

  // eslint-disable-next-line no-undef
  const unicTypes = [...new Set(types)];
  return unicTypes;
}

export default function handler(req, res) {
  const products = getProducts();
  res.status(200).json(products);
}
