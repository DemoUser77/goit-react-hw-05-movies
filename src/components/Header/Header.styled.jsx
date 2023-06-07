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
box-shadow: 0px 2px 4px -1px rgb(75 173 179 / 20%), 0px 4px 5px 0px rgb(57 202 207 / 14%), 0px 1px 10px 0px rgb(26 103 173 / 12%);
`;

export const HeaderNavLink = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color:  rgb(144 59 213 / 54%);
font-weight: 900;
margin-left:40px;

&.active {
color: blue;

  }
`;