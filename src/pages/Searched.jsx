import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
    const [searchedRecepies, setSR] = useState([]);
    let params = useParams();

    useEffect(() => {
        getSearched(params.search); 
    },[params.search])
    
    const getSearched = async (search) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`)
        const recipes = await api.json();
        setSR(recipes.results)
        // console.log(recipes);
      }
  return (
    <Grid>
      {
        searchedRecepies.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Card>
          )
        })
      }
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`

const Card = styled.div`
  img{
    width:100%;
    border-radius: 10px;

  }
  a{
    text-decoration:none;
  }
  h4{
    text-align: center;
    padding: 15px;
  }

  
`

export default Searched