import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return genres.map((genre) => <li>{genre.name}</li>);
};

export default GenreList;
