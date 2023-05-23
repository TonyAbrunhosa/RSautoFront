import styled from 'styled-components';

export const StatisticWrapper = styled.div`
  width: ${({ width = '60%' }) => width};
  display: flex;
  justify-content: space-between;
`;

export const StatisticSection = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: Roboto, sans serif;
  background: #ffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  h2 {
    margin-bottom: 10px;
    color: #434040;
    font-weight: normal;
  }
`;
