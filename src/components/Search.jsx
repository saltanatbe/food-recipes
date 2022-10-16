import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [search, setSearch] = useState([]);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+search);
    }
  return (
      <Form onSubmit={submitHandler}>
        <div>
            <FaSearch/>
              <input
                  onChange={(e) => { setSearch(e.target.value) }}
                  type="text" 
                  value={search}
                  />
        </div>
    </Form>
  )
}

const Form = styled.form`
    margin: 0 80px;
    
    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 14px;
        color: white;
        padding: 10px 40px;
        border-radius: 10px;
        width: 100%;
    }
    svg{
        color: white;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(100%, -50%);
    }
`

export default Search