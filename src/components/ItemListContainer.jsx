import { useEffect, useState } from 'react'
import productsUrl from '../../public/data/products.json?url'
import Item from './Item.jsx'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    fetch(productsUrl)
      .then((response) => {
        if (!response.ok)
          throw new Error('No se pudieron cargar las plantas')
        return response.json()
      })
      .then(setProducts)
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading)
    return <p role="status">Cargando plantas...</p>

  if (hasError)
    return <p role="alert">No se pudieron cargar las plantas. Inténtalo de nuevo.</p>

  return (
    <ul className="product-grid">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default ItemListContainer