import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [dish, setDish] = useState([]);
  const [activeTab, setActiveTab] = useState("Instructions");

  let params = useParams();

  useEffect(() => {
    getRecipe(params.id);
  }, [params.name, params.id]);
  const getRecipe = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setDish(data);
    console.log(data);
  };
  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>{dish.title}</h2>
        <img src={dish.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "Instructions" ? "active" : ""}
          onClick={() => setActiveTab("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "Instructions" ? "" : "active"}
          onClick={() => setActiveTab("Ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: dish.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: dish.instructions }}></h3>
          </div>
        )}
        {activeTab === "Ingredients" && (
          <ul>
            {dish.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled(motion.div)`
  margin-top: 4rem;
  margin-bottom: 2.5rem;
  display: flex;
  .active {
    background: linear-gradient(36deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 1rem;
  }
  li {
    font-size: 0.6rem;
    line-height: 1.2rem;
  }
  ul {
    margin-top: 1rem;
  }
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background: white;
  border: 1px solid black;
  font-weight: 600;
  margin-right: 1rem;
`;

const Info = styled.div`
  margin-left: 5rem;
`;
export default Recipe;
