import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  border: 2px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 100px;
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
