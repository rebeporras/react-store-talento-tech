import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx'

function Header() {
  return (
    <header className="site-header">
      <Link className="site-brand" to="/">Casa Botánica</Link>
      <NavBar />
    </header>
  )
}

export default Header