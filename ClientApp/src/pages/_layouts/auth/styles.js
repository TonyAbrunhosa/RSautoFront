import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #363636;
`;

export const Content = styled.div`
  background-color: #ffffff;
  padding: 0 65px;
  border-radius: 15px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    label {
      color: #514848;
      display: block;
      text-align: left;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      font-family: 'Roboto, sans-serif';
    }
    input {
      width: 411.33px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: #d9d9d9;
      padding: 10px;
      border-radius: 12px;
      height: 46px;
      color: #514848;
      margin-bottom: 20px;
      &::placeholder {
        color: #514848;
      }
    }
    span {
      display: block;
      color: #fc1515;
      margin-bottom: 10px;
      align-self: flex-start;
      text-align: left;
      font-size: 12px;
      font-weight: bold;
    }
    button {
      width: 200px;
      margin: 0 auto;
      height: 50px;
      background: #fc1515;
      color: #ffffff;
      border-radius: 50px;
      border: none;
      font-size: 20px;
      line-height: 23.44px;
      transition: background 0.2s;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      &:hover {
        background: ${lighten(0.06, '#fc1515')};
      }
    }
  }
`;
