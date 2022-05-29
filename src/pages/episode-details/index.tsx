import { useEffect, useState } from "react";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/fragments/button";
import EpisodeCard from "../../components/fragments/card/card-episode";
import tvmaze from "../../api/tvmaze";
import { IEpisode } from "../../types/IEpisode";

const Page = styled.div`
  margin: ${({ theme }) => theme.spacing.xxs};
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin: ${({ theme }) => theme.spacing.sm};
  }
`;

const EpisodeDetails: React.FC = () => {
  const [episode, setEpisode] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await tvmaze.get(`episodes/${id}`);
      setEpisode(response.data);
    };
    fetchEpisode();
  }, [id]);

  const navigate = useNavigate();
  const getBack = () => {
    navigate(-1);
  };

  const renderShow: (episode: any) => JSX.Element | null = (
    episode: IEpisode
  ) => {
    if (!episode) return null;
    return (
      <Page>
        <Button onClick={getBack}>Back</Button>
        <EpisodeCard {...episode} />
      </Page>
    );
  };

  return renderShow(episode);
};

export default EpisodeDetails;
