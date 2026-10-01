import PlantCarousel from '../components/PlantCarousel.jsx'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <div className="ticks">Un rincón más verde</div>
      <section className="spring-banner" aria-labelledby="spring-promo-title">
        <div className="spring-banner__text">
          <p className="spring-banner__eyebrow">Especial de primavera</p>
          <h1 id="spring-promo-title">Llena de vida tus espacios</h1>
          <p>Una oportunidad para sumar más verde a tu hogar.</p>
        </div>
        <p className="spring-banner__offer">
          <strong>3 × 2</strong>
          <span>en toda la tienda</span>
        </p>
      </section>
      <PlantCarousel />
    </>
  )
}

export default HomePage