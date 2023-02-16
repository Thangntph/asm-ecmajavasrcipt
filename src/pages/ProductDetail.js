import { products } from "../data"
const ProductDetailPage = ({ id }) => {
    const product = products.find((product) => product.id == +id);
    if (!product) return null;
    return `
    <div>${product.name}</div>
  `
}

export default ProductDetailPage