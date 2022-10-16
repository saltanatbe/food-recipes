import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Recipe() {
    const [dish, setDish] = useState([])
    let params = useParams();   

    useEffect(() => {
        getRecipe(params.id)
    }, [])
    const getRecipe = async (id) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await api.json();
        setDish(data);
    }
  return (
      <div>
          {dish.title}
      </div>
  )
}

export default Recipe