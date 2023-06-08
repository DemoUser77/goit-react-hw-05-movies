import styled from '@emotion/styled';

export const CastList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
`;

export const CastItem = styled.li`
 min-width: 182px;
  font-size: 14px;
  padding: 6px;
 margin-bottom:5px;
  max-width: min-content;
  border-radius: 14px;
  background-color: #ddeff5;
 box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);

  img{
    max-width: 182px;
    border-radius: 6px;
    }
`;

export const Info = styled.div`
    padding-left: 10px;
`;