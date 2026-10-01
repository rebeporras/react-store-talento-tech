import { useRef } from 'react'
import { Link } from 'react-router-dom'
import products from '../../public/data/products.json'

const featuredPlants = products.slice(0, 10)

function PlantCarousel() {
  const trackRef = useRef(null)

  function scrollCarousel(direction) {
    const track = trackRef.current

    if (track) {
      track.scrollBy({ left: direction * track.clientWidth * 0.8 })
    }
  }

  return (
    <section className="plant-carousel" aria-labelledby="plant-carousel-title">
      <header className="plant-carousel__header">
        <div>
          <p className="plant-carousel__eyebrow">Nuestra selección</p>
          <h2 id="plant-carousel-title">Plantas para tu hogar</h2>
        </div>
        <div className="plant-carousel__controls">
          <button
            type="button"
            aria-label="Ver plantas anteriores"
            title="Ver plantas anteriores"
            onClick={() => scrollCarousel(-1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Ver más plantas"
            title="Ver más plantas"
            onClick={() => scrollCarousel(1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </header>
      <ul className="plant-carousel__track" ref={trackRef}>
        {featuredPlants.map((plant) => (
          <li className="plant-carousel__item" key={plant.id}>
            <Link className="plant-carousel__card" to={`/products/${plant.id}`}>
              <img src={plant.image} alt={plant.name} loading="lazy" />
              <div className="plant-carousel__card-info">
                <h3>{plant.name}</h3>
                <strong>${plant.price.toFixed(3)}</strong>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PlantCarousel