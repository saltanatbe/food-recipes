import React, { useEffect , useState} from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Popular() {

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    random_recipe();
  }, [])
  
  const random_recipe = async () => {
    const check = localStorage.getItem("popular");
    // console.log("cehck"+ check)
    if (check) {
    // console.log("in teh if")

      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      // console.log(data.recipe);
      
      // console.log(data);
      setPopular(data.recipes);
    }
  }
  return (
    <div>
          <Wrapper>
            <h3>Popular recipes</h3>
            <Splide options={{
              perPage: 4,
              arrows: false,
              gap: '2rem',
              pagination: false,
              drag: 'free',
            }}>
              {popular.map((recipe)=> {
                return (
                  <SplideSlide>
                    <Card>
                      <Link to={'/recipe/'+recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                      </Link>
                    </Card>
                  </SplideSlide>
                )})
              }
            </Splide>
            
          </Wrapper>
            
    </div>
  )
}

const Wrapper = styled.div`
  margin: 15px 0;
`;

const Gradient = styled.div`
  z-index: 3;
  position:absolute;
  width: 100%;
  border-radius: 5px;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

const Card = styled.div`
  min-height: 15rem;
  ${'' /* min-width: calc(100vh-15rem); */}
  border-radius: 5px;
  overflow:hidden;
  positon:relative;

  img{
    position:absolute;
    border-radius: 5px;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;

  }
  p{
    position:absolute;
    z-index:10;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0%;
    height: 40%;
    text-align: center;
    font-weight:600px;
    color: white;
    font-size:1rem;
    display:flex;
    justify-content: center;
    align-items:center;
  }
`;
export default Popular