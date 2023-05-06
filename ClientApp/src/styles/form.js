import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 5px auto;
  width: ${({ size = '90' }) => size}%;
`;

export const FormWarapper = styled.div`
  background-color: #ffff;
  margin-top: 25px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid #e8e9e9;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
