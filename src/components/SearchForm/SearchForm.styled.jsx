import styled from '@emotion/styled';


export const InputSearchForm = styled.input`
  display: inline-block;
  
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  margin-right:10px;
  padding: 4px 4px;
 
  border-radius: 5px;
background-color: #99d6e7;
box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);

  &::placeholder{
  font: inherit;
  font-size: 18px;
  }
`;
 
export const ButtonSearchForm = styled.button`
  display: inline-block;
  font-size: 20px;
  border: 0;
  padding: 4px 4px;
  opacity: 0.6;
  
  cursor: pointer;
  outline: none;
  color: black;
  border-radius: 5px;
  background-color: #21809b;
  box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);
 
&:hover{
  color: aqua;
    opacity: 1;
  }
`;