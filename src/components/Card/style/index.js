import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #f3f3f3;
  border: 2px solid #bebebe;

  border-radius: 8px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.02);
  }
`;

export default StyledCard;
