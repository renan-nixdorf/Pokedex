import styled from 'styled-components';

export const Container = styled.section`
  background: #444444;
  display: grid;
  gap: 0.6rem;
  place-items: center;
  text-align: center;
  border-radius: 0.4rem;
  border-top: 2px solid #b4a76e;
  border-bottom: 2px solid #b4a76e;
  box-shadow: 4px 2px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  height: 270px;
`;

export const ContentId = styled.div`
  span {
    color: #f2f703;
    font-weight: 700;
    border-bottom: 1px solid #f2f703;
  }
`;

export const ContentImg = styled.div`
  margin-top: 16px;
  background: #5b5a53;
  border-radius: 50px 20px 50px 20px;
  padding: 0.6rem;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ContentTitle = styled.div`
  position: relative;
  bottom: 20px;
  h1 {
    font-size: 1.65rem;
  }
`;

export const Types = styled.div`
  display: flex;
  gap: 0.5rem;
  place-content: center;
  text-align: center;
  position: relative;
  bottom: 32px;
  span {
    font-weight: 600;
    font-family: sans-serif;
    color: #b4a76e;
  }
`;
