import React from "react";
import Wrapper from "../../fragments/wrapper";

const Cast = (props) => {
  const { cast } = props;
  return (
    <Wrapper as="section">
      <h2>Cast</h2>
      <ul>
        {cast &&
          cast.map((p, index) => (
            <li key={index} data-testid={`cast-list-${index}`}>
              {p.person.name} - {p.character.name}
            </li>
          ))}
      </ul>
    </Wrapper>
  );
};
export default Cast;
