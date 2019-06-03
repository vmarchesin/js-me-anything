import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { colors } from '@layouts/theme';

const StyledAnchor = styled(OutboundLink)`
  color: ${colors.primary};
  font-weight: 600;

  background-color: transparent;
  outline: none;
  text-decoration: none;
`;

export default {
  Anchor: StyledAnchor,
};
