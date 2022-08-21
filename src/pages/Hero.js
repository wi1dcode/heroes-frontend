import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const Hero = () => {
  const { slug } = useParams()
  const [hero, setHero] = useState(null)

  useEffect(() => {
    fetchHero()
  }, [])

  const fetchHero = async () => {
    const response = await fetch(`http://localhost:5000/heroes/${slug}`)
    const data = await response.json()
    setHero(data)
  }

  return (
    <>
     {hero !== null && (
      <section>
      <h1>
      {hero.slug}
      </h1>
      <ul>
        <li>Power: {hero.power}</li>
        <li>Age: {hero.age}</li>
        <li>{hero.isAlive === true ? (
                    <img src="https://cdn-icons-png.flaticon.com/512/4053/4053149.png" alt="Alive" className='alive-img' />
                ) : (
                    <img src="https://www.freepnglogos.com/uploads/death-png/skull-crossbones-skeleton-death-svg-png-icon-download-12.png" className='alive-img' alt="dead" />
                )}</li>
      </ul>
      </section>
     )}
    </>
  )
}

export default Hero
