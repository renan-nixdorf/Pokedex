import React from 'react';
import { Context } from '../../Context';
import Cards from '../Cards';
import { Container, Content } from './style';

const Home = () => {
  const { list } = React.useContext(Context);

  return (
    <Container>
      <h1>Pokemon Cards</h1>
      <Content>
        {list && list.map((item, index) => <Cards key={index} data={item} />)}
      </Content>
    </Container>
  );
};

export default Home;
