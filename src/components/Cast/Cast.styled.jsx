import styled from '@emotion/styled';

export const CastList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
`;

export const CastItem = styled.li`
 /* min-width: 182px; */
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  border-radius: 14px;

  img{
    margin-bottom: 5px;
    
  }
`;

export const Info = styled.div`
    padding-left: 10px;
`;