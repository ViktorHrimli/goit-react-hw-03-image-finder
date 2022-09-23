import styled from 'styled-components';
import { AiOutlineAim } from 'react-icons/ai';

export const Icons = styled(AiOutlineAim)`
  cursor: pointer;
  :hover,
  :focus {
    fill: inherit;
  }
`;

export const BtnIcons = styled.button`
  position: absolute;
  top: 3px;
  right: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: transparent;
`;
