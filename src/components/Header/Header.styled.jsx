import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.header`
display: flex;
align-items: center;
min-height: 80px;
margin-bottom: 16px;
margin-top:16px;
border-radius: 5px;
background-color: #99d6e7;
box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);
`;

export const HeaderNavLink = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color:  rgb(144 59 213 / 54%);
font-weight: 900;
margin-left:40px;
 box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);

:hover,
:focus{
  
  color: aqua;
}

&.active {
color: blue;
}
`;