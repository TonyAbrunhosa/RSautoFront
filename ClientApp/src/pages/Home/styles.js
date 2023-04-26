import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

export const StatisticSection = styled.section`
  width: 950px;
  padding: 10px;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: Roboto, sans serif;
  background: #ffff;
  box-shadow: 2px 3px 4px -1px #807878;

  h2 {
    margin-bottom: 10px;
    color: #434040;
    font-weight: normal;
  }
`;
