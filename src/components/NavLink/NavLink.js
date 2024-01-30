import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--transform-from));
  transition: transform 500ms;

  ${Wrapper}:hover & {
    transform: translateY(var(--transform-to));
  }
`;

const MainText = styled(Text)`
  --transform-from: 0%;
  --transform-to: -100%;
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
  --transform-from: 100%;
  --transform-to: 0%;
`;

export default NavLink;
