import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Wrapper = styled.div`
display: flex;
gap: 30px;
margin-bottom: 30px`;

export const Section = styled.section`
padding-top: 30px;
padding-bottom: 60px;
padding-left: 15px;
margin-bottom: 30px;
`;

export const Title = styled.h2`
font-size: 18px;
font-weight: 700;
margin-bottom: 20px;
color: grey`

export const ButtonLink = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 40px;
background-color: black;
color: white;
margin-bottom: 20px;`

export const ImageWrap = styled.div`
object-fit: contain;
box-shadow: 10px 5px 5px black;`