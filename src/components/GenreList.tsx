import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return data.map((genre) => <li>{genre.name}</li>);
};

export default GenreList;
