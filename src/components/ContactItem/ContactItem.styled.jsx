import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100px;
  margin-left: 15px;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid lightgrey;
  border-radius: 3px;
  background-color: white;
  transition: background-color 250ms ease;
  :active,
  :hover {
    background-color: #6a6aec;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
`;
