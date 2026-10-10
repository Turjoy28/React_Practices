import React from 'react'
import { useParams } from 'react-router'

const VanDetail = () => {
    const params=useParams()
    console.log(params)
  return (
    <h1>This is van detail page</h1>
  )
}

export default VanDetail