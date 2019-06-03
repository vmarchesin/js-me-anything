import React from 'react';
import Image from '@components/Image';
import StyledCard from './style';

const Card = ({ content, image, imageWidth, onClick, ...props }) => (
  <StyledCard onClick={onClick} {...props}>
    <Image filename={image} width={imageWidth} />
    <div>{content}</div>
  </StyledCard>
);

Card.defaultProps = {
  imageWidth: 150,
};

export default Card;
