import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #f3f3f3;
  border: 1px solid #d0d0d0;

  border-radius: 4px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 5px 10px -6px rgba(0, 0, 0, 0.25);
  }
`;

export default StyledCard;
