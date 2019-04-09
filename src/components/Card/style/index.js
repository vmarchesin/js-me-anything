import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #F3F3F3;
  border: 2px solid #BEBEBE;

  border-radius: 8px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  transition: 0.2s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

export default StyledCard;