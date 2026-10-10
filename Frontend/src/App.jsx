import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const product = Product('/api/vans')
  const data = product.map((item) => {
    return (
      <>
        <h1 key={item.id}>{item.name}</h1>
        <p>{item.price}</p>
        <img style={{ width: "500px", padding: "50px" }} src={item.imageUrl} alt="" />
      </>
    )
  })
  return (
    <>

      <h1>Product length is {product.length}</h1>
      <h1>Product list is {data}</h1>


    </>
  )
}


function Product(url) {

  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await axios.get(`${url}`)
        setProduct(response.data.vans)
      } catch (error) {
        console.error("Failed to fetch vans:", error)
      }
    }

    fetchVans()
  }, [])

  return product;

}


export default App
