import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import ShowInformation from "../../components/blocks/show-information";
import ShowEpisodes from "../../components/blocks/show-episodes";
import UniversalButton from "../../components/fragments/button";
import Cast from "../../components/blocks/show-cast";

import {
  fetchShow,
  fetchEpisodes,
  fetchCast,
} from "../../redux/Show/show.actions";

const Page = styled.div`
  margin: ${({ theme }) => theme.spacing.xxs};
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin: ${({ theme }) => theme.spacing.sm};
  }
`;

const divideBySeason = (showEpisodes) => {
  let seasons = [];
  showEpisodes &&
    showEpisodes.forEach((item) => {
      let list = seasons[item.season];
      list ? list.push(item) : (seasons[item.season] = [item]);
    });
  return seasons;
};

const SeriesDetails = (props) => {
  const { fetchShow, fetchEpisodes, fetchCast, cast } = props;
  const history = useHistory();

  useEffect(() => {
    fetchShow();
  }, [fetchShow]);

  useEffect(() => {
    fetchEpisodes();
  }, [fetchEpisodes]);

  useEffect(() => {
    fetchCast();
  }, [fetchCast]);

  const getBack = () => {
    history.goBack();
  };

  const renderShow = (show, showEpisodes = []) => {
    const groups = divideBySeason(showEpisodes) || [];
    return (
      <Page>
        <UniversalButton onClick={getBack}>Back</UniversalButton>
        <ShowInformation {...show} />
        <Cast cast={cast} />
        <ShowEpisodes groups={groups} />
      </Page>
    );
  };

  return props.show && renderShow(props.show, props.showEpisodes);
};

const mapStateToProps = (state) => {
  return {
    show: state.show.show,
    showEpisodes: state.show.showEpisodes,
    cast: state.show.cast,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchShow: () => dispatch(fetchShow(ownProps.match.params.id)),
  fetchEpisodes: () => dispatch(fetchEpisodes(ownProps.match.params.id)),
  fetchCast: () => dispatch(fetchCast(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesDetails);
