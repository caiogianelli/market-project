// api
import { products } from "../../data/products";

export function getProducts(termoDeBusca) {
  const result = products.filter((item) => {
    return item.title.toLowerCase().includes(termoDeBusca);
  });

  return result;
}

export default function handler(req, res) {
  const termoDeBusca = req.query.q.toLowerCase();

  const products = getProducts(termoDeBusca);

  res.status(200).json(products);
}
