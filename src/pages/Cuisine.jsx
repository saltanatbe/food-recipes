import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisineRecipes(params.type);
    console.log(params.type);
  }, [params.type]);

  const getCuisineRecipes = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await api.json();
    setCuisine(recipes.results);
    console.log(recipes);
  };
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 15px;
  }
`;

export default Cuisine;
