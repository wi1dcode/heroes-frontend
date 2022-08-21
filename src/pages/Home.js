import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../App.css"

const Home = () => {
  const [heroes, setHeroes] = useState([])
  const [slug, setSlug] = useState("")
  const [name, setName] = useState("")
  const [power, setPower] = useState("")
  const [color, setColor] = useState("")
  const [isAlive, setIsAlive] = useState("")
  const [age, setAge] = useState("")
  const [image, setImage] = useState("")
  const [arrayPower, setArrayPower] = useState([])

  useEffect(() => {
    fetchHeroes()
  }, [])

  const fetchHeroes = async () => {
    const request = await fetch("http://localhost:5000/heroes")
    const response = await request.json()

    setHeroes(response)
  }

  const handleChangeSlug = (e) => {
    const value = e.target.value
    setSlug(value)
  }

  const handleChangeName = (e) => {
    const value = e.target.value
    setName(value)
  }

  const handleChangePower = (e) => {
    const value = e.target.value
    setPower(value)
  }

  const handleChangeColor = (e) => {
    const value = e.target.value
    setColor(value)
  }

  const handleCheck = (e) => {
    const isChecked = e.target.checked
    setIsAlive(isChecked)
  }

  const handleChangeAge = (e) => {
    const value = e.target.value
    setAge(value)
  }

  const handleChangeImage = (e) => {
    const value = e.target.value
    setImage(value)
  }

  const handleChangeArray = () => {
    const array = [...arrayPower, power]
    setArrayPower(array)
    setPower("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const heroUpdate = {
      slug: slug,
      name: name,
      power: arrayPower,
      color: color,
      isAlive: isAlive,
      age: age,
      image: image,
    }

    const request = await fetch(`http://localhost:5000/heroes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(heroUpdate),
    })
  }

  console.log(slug)
  return (
    <>
      <ul>
        {heroes.map((heroes) => {
          return (
            <>
            <div className="card" style={{width: "18rem"}}>
            <img src={heroes.image} className="card-img-top" alt={heroes.slug}/>
            <div className="card-body">
                <h5 className="card-title">Name: <Link to={`/${heroes.slug}`}>{heroes.slug}</Link></h5>
                {/* <p className="card-text">description</p> */}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Color: {heroes.color}</li>
                <li className="list-group-item">Age: {heroes.age}</li>
                <li className="list-group-item">{heroes.isAlive === true ? (
                    <img src="https://cdn-icons-png.flaticon.com/512/4053/4053149.png" alt="Alive" className='alive-img' />
                ) : (
                    <img src="https://www.freepnglogos.com/uploads/death-png/skull-crossbones-skeleton-death-svg-png-icon-download-12.png" className='alive-img' alt="dead" />
                )}
                </li>
            </ul>
            </div>
            </>
          )
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" onChange={handleChangeSlug} />
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChangeName} />
        </div>

        <div>
          <label htmlFor="power">Power</label>
          <input type="text" name="power" onChange={handleChangePower} />
          <button type="button" onClick={handleChangeArray}>
            +
          </button>
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <input type="text" name="color" onChange={handleChangeColor} />
        </div>

        <div>
          <label htmlFor="isAlive">Alive</label>
          <input type="checkbox" name="isAlive" onChange={handleCheck} />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" onChange={handleChangeAge} />
        </div>

        <div>
          <label htmlFor="image">image</label>
          <input type="text" name="image" onChange={handleChangeImage} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Home
