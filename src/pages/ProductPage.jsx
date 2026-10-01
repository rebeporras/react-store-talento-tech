import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import productsUrl from '../../public/data/products.json?url'
import './ProductPage.css'

function ProductPage() {
  const { id } = useParams()
  const [result, setResult] = useState({ id: null, product: null, error: false })

  useEffect(() => {
    fetch(productsUrl)
      .then((response) => {
        if (!response.ok)
          throw new Error('No se pudieron cargar las plantas')
        return response.json()
      })
      .then((products) => {
        const product = products.find((item) => String(item.id) === id) ?? null
        setResult({ id, product, error: false })
      })
      .catch(() => setResult({ id, product: null, error: true }))
  }, [id])

  if (result.id !== id)
    return <p className="product-detail-message" role="status">Cargando planta...</p>

  if (result.error)
    return <p className="product-detail-message" role="alert">No se pudo cargar la planta.</p>

  if (!result.product) {
    return (
      <section className="product-detail-message">
        <h1>Planta no encontrada</h1>
        <Link to="/products">Volver al catálogo</Link>
      </section>
    )
  }

  const { product } = result

  return (
    <section className="product-detail">
      <img className="product-detail__image" src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} />
      <div className="product-detail__content">
        <Link to="/products">Volver al catálogo</Link>
        <p className="product-card__category">{product.category}</p>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="product-card__details">
          <strong>ARS $ {product.price.toFixed(3)}</strong>
          {/* <span>{product.discountPercentage} % de descuento</span> */}
        </div>
        <button className="add-to-cart-button" type="button" disabled>
          Agregar al carrito
        </button>
      </div>
    </section>
  )
}

export default ProductPage