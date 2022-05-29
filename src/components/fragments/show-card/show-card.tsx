import React from "react";
import { Link } from "react-router-dom";
import { IShow } from "../../../types/IShow";
import { noImage } from "../../../utils/common";
import { Container, Details, Image } from "./show-card.style";

export const ShowCard: React.FC<IShow> = ({ id, name, image, webChannel, network }) => {
  const imageToShow = image ? image.medium : noImage;
  return (
    <Container>
      <Link to={{ pathname: `/shows/${id}` }}>
        <Image src={imageToShow} alt={name} />
      </Link>
      <Details>
        <p><strong>{name}</strong></p>
        <p>{webChannel?.name ?? network?.name}</p>
      </Details>
    </Container>
  );
};