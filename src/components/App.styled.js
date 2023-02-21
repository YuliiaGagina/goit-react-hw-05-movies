import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import styled from '@emotion/styled';

export const Nav = styled.nav`
display: flex;
gap:30px`;

export const StyledNavLink = styled(NavLink)`

padding: 5px;
align-items: center;

padding: 20px;

&.active{
    color: blue;
    text-decoration: underline blue;
}
:hover:not(.active),
:focus-visible:not(.active){
    color :red;
}
`;
