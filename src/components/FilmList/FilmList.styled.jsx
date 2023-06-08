import styled from '@emotion/styled';

export const ListFilm = styled.ul`
    margin-top: 20px;
    list-style: none;
    padding: 0;
`;

export const ItemFilm = styled.li`
    font-weight: 700;
    font-size: 16px;

    :hover,
    :focus{
        box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);
    }
    
a{
    display: block;
    padding: 10px 10px;
    text-decoration: none;
    color: #0e3131;

    :hover,
    :focus{
        color:  rgb(144 59 213 / 54%);
    }
}
`;