import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '@layouts/theme';

const StyledAnchor = styled.a`
  color: ${colors.primary};
  font-weight: 600;
`;

const StyledLink = StyledAnchor.withComponent(Link);

export default {
  Anchor: StyledAnchor,
  Link: StyledLink,
};
