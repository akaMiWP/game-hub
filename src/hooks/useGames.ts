import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sorting,
        search: gameQuery.searching,
      },
    },
    [
      gameQuery.genre?.id,
      gameQuery.platform?.id,
      gameQuery.sorting,
      gameQuery.searching,
    ]
  );

export default useGames;
