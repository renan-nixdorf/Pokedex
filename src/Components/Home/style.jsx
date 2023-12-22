import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > h1 {
    font-family: sans-serif;
    font-size: 5rem;
    text-align: center;
    color: #fff;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  gap: 2rem;
`;
