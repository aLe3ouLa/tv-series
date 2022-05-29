import { useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import ShowInformation from "../../components/blocks/show-information";
import ShowEpisodes from "../../components/blocks/show-episodes";
import Button from "../../components/fragments/button";
import { Cast } from "../../components/blocks/show-cast";
import { IEpisode } from "../../types/IEpisode";
import { ShowContext } from "../../context/ShowContext";

const Page = styled.div`
  margin: ${({ theme }) => theme.spacing.xxs};
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin: ${({ theme }) => theme.spacing.sm};
  }
`;

const divideBySeason = (showEpisodes: IEpisode[]) => {
  let seasons: any[] = [];
  showEpisodes &&
    showEpisodes.forEach((item) => {
      let list = seasons[item.season];
      list ? list.push(item) : (seasons[item.season] = [item]);
    });
  return seasons;
};

export const ShowDetails = () => {
  const { show, episodes, cast, setPath } = useContext(ShowContext);

  const { showid } = useParams();
  const history = useNavigate();

  useEffect(() => {
    setPath(showid);
  }, [showid, setPath]);

  const getBack = () => {
    history(-1);
  };

  if (!show || !episodes) return null;
  const groups = divideBySeason(episodes) || [];
  return (
    <Page>
      <Button onClick={getBack}>Back</Button>
      <ShowInformation {...show} />
      <Cast cast={cast} />
      <ShowEpisodes groups={groups} />
    </Page>
  );
};
