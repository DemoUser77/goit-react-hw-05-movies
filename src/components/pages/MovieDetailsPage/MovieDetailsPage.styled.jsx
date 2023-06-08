import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
    padding: 30px;
`;

export const Button = styled(Link)`
    display: inline-block; 
    padding: 7px 10px;
    margin-bottom: 10px;
    font-weight: 600;
    text-decoration:none;
    border-radius: 5px;
    background-color: #99d6e7;
    box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);
    

::before{
    content: '<<';
    font-weight: 600;
}

    &:hover,
    &:focus{
        color: aqua;
    }
`;

export const FilmWrapper = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
`;

export const ImgFilm = styled.img`
   max-width: 200px;
   object-fit: cover;
    border-radius: 15px;
`;

export const InformList = styled.ul`
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    font-weight: 600;
    list-style: none;
`;

export const InformLink = styled(Link)`
    color: #080808;
    font-size:16px;
    font-weight: 600;
    text-decoration: auto;
    
    &:hover,
    &:focus {
        color: blue;
    }
`;

