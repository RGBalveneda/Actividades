import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';


const Header = () => {
  return (
    <StyledWrapper>
      <div className="nav">
        <Link to="/">
          
        </Link>
             
            <Link to="/" className='btn'>
            Home
            </Link>

          <Link to="/contact" className='btn'>
            Contact
            </Link>

            <Link to="/about" className='btn'>
            About
            </Link>

            <Link to="/services" className='btn'>
            Services
            </Link>

            <Link to="/Actividad1" className='btn'>
            Actividad 1
            </Link>

            <Link to="/Actividad2" className='btn'>
            Actividad 2
            </Link>

            <Link to="/Actividad3" className='btn'>
            Actividad 3
            </Link>

            <Link to="/Actividad4" className='btn'>
            Actividad 4
            </Link>
  
            <Link to="/Actividad5" className='btn'>
            Actividad 5
            </Link>
           
            <Link to="/Actividad6" className='btn'>
            Actividad 6
            </Link>
            <a href="https://github.com/RGBalveneda/Actividades.git" target="_blank" rel="noopener noreferrer">
            <Button></Button>  
            </a>
        </div>
      
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .nav {
    width: auto;
    height: 100px;
    background: #1e1a19;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .container {
    display: flex;
    gap: 10px;
    padding: 1em 2em;
    position: relative;
  }

  .btn {
    position: relative;
    padding: 1em 1.5em;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    font-weight: 500;
    border-radius: 34px;
  }

  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: 34px;
    transition: all 0.4s ease;
    pointer-events: none;
  }

  .btn:hover::before {
    border-color: #f5c518;
    box-shadow: 0 0 10px rgba(245, 197, 24, 0.4);
    transform: scale(1.05);
  }

  .btn:hover {
    background: rgba(245, 197, 24, 0.1); /* dorado translúcido */
    transform: translateY(-2px);
  }
`;



export default Header;
