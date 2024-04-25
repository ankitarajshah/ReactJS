import { Link } from "react-router-dom";

// const ProductsPage = () => {
//   return (
//     <>
//       <h1>The Products Page</h1>
//       <ul>
//         <li>
//           <Link to="/products/product-1">Product 1</Link>
//         </li>
//         <li>
//           <Link to="/products/product-2">Product 2</Link>
//         </li>
//         <li>
//           <Link to="/products/product-3">Product 3</Link>
//         </li>
//       </ul>
//     </>
//   );
// };
// export default ProductsPage;
const PRODUCTS = [
  { id: "p1", title: "Product1" },
  { id: "p2", title: "Product2" },
  { id: "p3", title: "Product3" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductsPage;
