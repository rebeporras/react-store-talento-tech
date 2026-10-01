import { Link } from 'react-router-dom'

function Item({ product }) {
  return (
    <li className="product-card">
      <Link
        className="product-card__link"
        to={`/products/${product.id}`}
        aria-label={`Ver detalles de ${product.name}`}
      >
        <img
          className="product-card__image"
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={product.name}
          loading="lazy"
        />
        <div className="product-card__content">
          <p className="product-card__category">{product.category}</p>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="product-card__details">
            <strong>ARS ${product.price.toFixed(3)}</strong>
            {/* <span>{product.discountPercentage} % de descuento</span> */}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Item