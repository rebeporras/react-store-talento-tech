import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const { pathname } = useLocation()
  const isActive = (path) =>
    path === '/' ? pathname === path : pathname === path || pathname.startsWith(`${path}/`)

  return (
    <nav className="site-nav" aria-label="Navegación principal">
      <Link to="/" aria-current={isActive('/') ? 'page' : undefined}>
        Inicio
      </Link>
      <Link to="/products" aria-current={isActive('/products') ? 'page' : undefined}>
        Plantas
      </Link>
      <Link to="/cart" aria-current={isActive('/cart') ? 'page' : undefined}>
        Carrito
      </Link>
    </nav>
  )
}

export default NavBar