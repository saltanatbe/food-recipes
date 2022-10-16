import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components"
import { NavLink } from "react-router-dom"

function Categories() {
  return (
    <List>
          <StyledLink
            to={'/cuisine/italian'}
          >
              <FaPizzaSlice />
              <h4>Italian</h4>
          </StyledLink>
          <StyledLink
              to={'/cuisine/american'}
          >
              <FaHamburger />
              <h4>American</h4>
          </StyledLink>
          <StyledLink
              to={'/cuisine/thai'}
          >
              <GiNoodles />
              <h4>Thai</h4>
          </StyledLink>
          <StyledLink
              to={'/cuisine/japanese'}
          >
              <GiChopsticks />
              <h4>Japanese</h4>
        </StyledLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 20%;
`
const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 100%;
    background: linear-gradient(35deg, #494949, #313131);
    width: 50px;
    height: 50px;
    text-decoration: none;
    margin-right: 15px;
    h4{
        color: white;
        font-size: 8px;
    }
    svg{
        color:white;
    }    
    &.active {
    background: linear-gradient(to right, #f27121, #e94057)
  }
`

export default Categories
