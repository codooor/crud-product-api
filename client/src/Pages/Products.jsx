import { useQuery } from "@apollo/client";
import GET_PRODUCTS from "../queries/GET_PRODUCTS";

export default function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>...loading</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="products-list">
      {data.products.map(({ id, name, price, description, scents }) => (
        <div key={id} className="product-container">
          <h3 className="product-name">{name}</h3>
          <b className="product-header"></b>
          <p className="product-description">{description}</p>
          <ul className="product-details">
            <li className="product-scent">{scents}</li>
            <li className="product-price">$ {price}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
