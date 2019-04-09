import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const StyledAnchor = styled.a`
  color: #F18805;
  font-weight: 600;
`;

const StyledLink = StyledAnchor.withComponent(Link);

export default {
  Anchor: StyledAnchor,
  Link: StyledLink,
};
