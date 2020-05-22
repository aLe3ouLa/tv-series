import React, { useEffect } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEpisode } from "../../redux/Episodes/episodes.actions";

import UniversalButton from "../../components/fragments/button";
import EpisodeCard from "../../components/fragments/card/card-episode";

const Page = styled.div`
  margin: ${({ theme }) => theme.spacing.xxs};
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin: ${({ theme }) => theme.spacing.sm};
  }
`;

const EpisodeDetails = (props) => {
  const { episode, fetchEpisode } = props;

  useEffect(() => {
    fetchEpisode();
  }, [fetchEpisode]);

  const history = useHistory();
  const getBack = () => {
    history.goBack();
  };

  const renderShow = (episode) => {
    const result = episode;
    return (
      <Page>
        <UniversalButton onClick={getBack}>Back</UniversalButton>
        <EpisodeCard {...result} />
      </Page>
    );
  };

  return episode && renderShow(episode);
};

const mapStateToProps = (state) => {
  return {
    episode: state.episode,
  };
};

const mapDispathToProps = (dispatch, ownProps) => ({
  fetchEpisode: () => dispatch(fetchEpisode(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispathToProps)(EpisodeDetails);
