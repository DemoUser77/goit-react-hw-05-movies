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
box-shadow: 0px 2px 4px -1px rgb(75 173 179 / 20%), 0px 4px 5px 0px rgb(57 202 207 / 14%), 0px 1px 10px 0px rgb(26 103 173 / 12%);

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
  box-shadow: 0px 2px 4px -1px rgb(75 173 179 / 20%), 0px 4px 5px 0px rgb(57 202 207 / 14%), 0px 1px 10px 0px rgb(26 103 173 / 12%);
 
&:hover{
    opacity: 1;
  }
`;