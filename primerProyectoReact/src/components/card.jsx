import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-overlay" />
        <div className="card-inner">{children}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* ... tus estilos como ya los tienes ... */
`;

export default Card;
