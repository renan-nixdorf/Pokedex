import axios from 'axios';
import React from 'react';
import { Container, ContentId, ContentImg, ContentTitle, Types } from './style';

const Cards = ({ data }) => {
  const [pokemon, setPokemon] = React.useState([null]);

  React.useEffect(() => {
    axios.get(data.url).then((response) => setPokemon(response.data));
  }, [data.url]);

  return (
    <Container>
      <ContentId>
        <span>#{pokemon.id}</span>
      </ContentId>
      <ContentImg>
        <img src={pokemon?.sprites?.front_default} alt="" />
      </ContentImg>
      <ContentTitle>
        <h1>{pokemon?.name}</h1>
        <Types>
          {pokemon?.types?.map((item, index) => (
            <span key={index}>{item.type.name}</span>
          ))}
        </Types>
      </ContentTitle>
    </Container>
  );
};

export default Cards;
