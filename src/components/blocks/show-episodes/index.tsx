import Wrapper from "../../fragments/wrapper";
import Card from "../../fragments/card";
import styled from "styled-components";

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    & > * {
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
  }
`;

const ShowEpisodes: React.FC<{ groups: any[] }> = ({ groups }) => {
  return (
    <Wrapper as="section">
      <h2>Episodes</h2>
      {groups &&
        groups.reverse().map((group, index, array) => {
          return (
            <div key={index} data-testid={`test-${index}`}>
              <h3 data-testid={`title-${index}`}>
                Season {array.length - 1 - index}
              </h3>
              <CardList data-testid={`card-list-${index}`}>
                {group.map((episode: any) => {
                  return <Card key={episode.id} {...episode} />;
                })}
              </CardList>
            </div>
          );
        })}
    </Wrapper>
  );
};
export default ShowEpisodes;
